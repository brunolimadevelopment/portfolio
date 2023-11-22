import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA" width={420} height={304} alt="Thumbnail do projeto BookWise" className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg" />
            </div>

            <div className="">
                <h3 className="flex itens-center gap-3 font-medium text-lg text-gray-50"><Image width={20} height={20} alt="" src="/images/icons/project-title-icon.svg" />BookWise</h3>
                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque laborum officiis quaerat consectetur ullam accusantium odit est adipisci? Dolore assumenda voluptate hic, doloribus ullam porro laborum veniam ab dolorem exercitationem quibusdam nihil delectus animi ducimus temporibus itaque rerum. Aspernatur temporibus officia consequuntur culpa voluptates, rem dolorum nemo odio asperiores.
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350]">
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                </div>
                <Link href="/projects/book-wise" className="inline-flex items-center">Ver projeto <HiArrowNarrowRight /></Link>
            </div>
        </div>
    )
}