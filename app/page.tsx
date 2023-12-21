import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph.query";

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
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `
  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // a query fica cacheada por 24h
  )
}
export default async function Home() {

  const { page: pageData } = await getPageData(); // executando a função dentro do component page.

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
