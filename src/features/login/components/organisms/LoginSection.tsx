// features/login/components/organisms/LoginSection.tsx

import { cn } from "@/lib/utils";
import { FormLogin } from "../molecules/FormLogin";
import { useLoginForm } from "../../hooks/useLoginForm";
import type { LoginSectionProps } from "../../types/loginTypes";

export default function LoginSection({
    variant = "center",
    title = "Welcome Back",
    description = "Please sign in to continue",
}: LoginSectionProps) {
    const { formLogin, handleChange, handleSubmit } = useLoginForm()
    const isSplit = variant === "split-left" || variant === "split-right";

    return (
        <section className={cn("min-h-screen flex", {
            "justify-center items-center": variant === "center",
            "flex-row": variant === "split-left",
            "flex-row-reverse": variant === "split-right",
        })}>
            {isSplit && (
                <div className="w-1/2 bg-muted flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-center">🎮 Login Module</h1>
                </div>
            )}

            <div className={cn("p-10 w-full flex flex-col justify-center items-center", { "w-1/2": isSplit })}>
                <div className="max-w-md w-full">
                    <div className={cn("w-full space-y-1.5 px-5", { "text-center": variant === "center" })}>
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="mb-6 text-muted-foreground">{description}</p>
                    </div>
                    <FormLogin onChange={handleChange} onSubmit={handleSubmit} values={formLogin} className="" />
                </div>
            </div>
        </section>
    );
}
