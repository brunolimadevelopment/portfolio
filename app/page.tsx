import { HeroSection } from "./pages/home/hero-section";
import { HighlightedProjects } from "./pages/home/highlighted-projects";
import { KnownTechs } from "./pages/home/known-techs";
import { WorkExperience } from "./pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph.query";

export const metadata = {
  title: 'Home'
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        tecnologies {
          name
        }
        profilePicture {
          url
        }
        sociais {
          url
          iconSvg
        }
        knownTechs(first: 100) {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          tecnologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        tecnologies {
          name
        }
      }
    }
  `
  return fetchHygraphQuery(
    query,
    //60 * 60 * 24// a query fica cacheada por 24h
  )
}
export default async function Home() {

  const { page: pageData, workExperiences } = await getPageData(); // executando a função dentro do component page.

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  )
}
