import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { ProjectPageData, ProjectsPageStaticData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph.query";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectProps = {
  params: {
    slug: string;
  }
}



const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {

  const query = `query ProjectQuery() {
        project(where: {slug: "${slug}"}) {
          pageThumbnail {
            url
          }
          thumbnail {
            url
          }
          sections {
            title
            image {
              url
            }
          }
          title
          shortDescription
          empresa
          description {
            raw
            text
          }
          tecnologies {
            name
          }
          liveProjectUrl
          githubUrl
        }
      }`

  return fetchHygraphQuery(query)
}

export default async function Project({ params: { slug } }: ProjectProps) {

  const { project } = await getProjectDetails(slug)
  
  if (!project?.title) return notFound()

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  )
}

export async function generateStaticParams() {
  // os 100 primeiros projetos
  const query = `
  query ProjectsSlugsQuery() {
    projects(first: 100, orderBy: publishedAt_DESC) {
      slug
    }
  }`



  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)
  //console.log(projects)
  return projects
  
}

export async function generateMetadata({
  params: { slug }
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug)
  const project = data.project

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        }
      ]
    }
  }
}