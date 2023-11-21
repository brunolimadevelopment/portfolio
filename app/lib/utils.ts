import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
    // return dinamic css class
    return twMerge(clsx(inputs))
}