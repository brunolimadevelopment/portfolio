import { SectionTitle } from "@/app/components/section-title"
import Link from "next/link"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () => {
    return (
        <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
            <SectionTitle subtitle="projetos" title="Meus Projetos" className="text-center items-center [&>h3]:text-4xl" />
            <div className="flex flex-col items-center">
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navague à vontade e explore os projetos para
                </p>
                <Link href="/" className="flex flex-row items-center gap-2"><HiArrowNarrowLeft size={20} /> Voltar para Home</Link>
            </div>
        </section>
    )
}