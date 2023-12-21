import type { RichTextContent } from '@graphcms/rich-text-types';
import { KnownTech } from "./projects";

export type Social = {
    url: string;
    iconSvg: string;
}

export type HomePageInfo = {
    introduction: {
        raw: RichTextContent;
    }
    tecnologies: KnownTech[]
    profilePicture: {
        url: string;
    }
    sociais: Social[]
    knowTechs: KnownTech[]
}

export type HomePageData = {
    page: HomePageInfo
}