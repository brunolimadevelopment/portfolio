import Image from "next/image"

export const ProjectCard = () => {
    return (
        <div>
            <div>
                <Image
                    width={380}
                    height={200}
                    src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
                    alt="Thumbnail do projeto BookWise"
                    unoptimized
                />
            </div>

            <div>
                <strong>BookWise</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. hic!</p>
            </div>
        </div>
    )
}