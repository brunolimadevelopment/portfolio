import type { RichTextContent } from '@graphcms/rich-text-types';

export type KnownTech = {
    iconSvg: string;
    name: string;
    startDate: string | number | Date;
}

export type Technology = {
    name: string
}

export type ProjectSection = {
    title: string;
    image: {
        url: string
    }
}

export type Project = {
    slug: string;
    thumbnail: {
        url: string
    }
    title: string
    empresa: string
    shortDescription: string
    tecnologies: Technology[]
    pageThumbnail: {
        url: string
    }
    sections: ProjectSection[]
    description: {
        raw: RichTextContent
        text: string
    }
    liveProjectUrl?: string
    githubUrl?: string
}

