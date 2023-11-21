import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

// essa typagem significa que estamos dizendo que o componente Button vai aceitar tudo o que um elemento <button> do HTML aceitaria. 
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button {...props} className={cn('bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all disabled:opacity-50', className)}>
            {children}
        </button>
    )
}