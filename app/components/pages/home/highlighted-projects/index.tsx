import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ProjectCard } from "./project-card";

export const HighlightedProjects = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="" title="Projetos em destaque" />
            <HorizontalDivider className="mb-16" />

            <div>
                <ProjectCard />
                <HorizontalDivider className="my-16" />
                <ProjectCard />
                <HorizontalDivider className="my-16" />
                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">Se interessou?</span>
                    <Link href="/projects" className="inline-flex items-center gap-2">
                        Ver todos
                        <HiArrowNarrowRight />
                    </Link>
                </p>
            </div>
        </section>
    )
}