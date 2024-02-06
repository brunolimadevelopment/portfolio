import { PageIntroduction } from "../pages/projects/page-introduction";
import { ProjectList } from "../pages/projects/projects-list";
import { ProjectsPageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph.query";

export const metadata = {
  title: 'Projects'
}

const getPageData = async (): Promise<ProjectsPageData> => {

  const query = `query ProjectsQuery {
        projects(first: 100, orderBy: publishedAt_DESC) {
          shortDescription
          slug
          title
          thumbnail {
            url
          }
          tecnologies {
            name
          }
        }
      }`

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Projects() {
  const { projects } = await getPageData()
  
  return (
    <>
      <PageIntroduction />
      <ProjectList projects={projects} />
    </>
  )
}