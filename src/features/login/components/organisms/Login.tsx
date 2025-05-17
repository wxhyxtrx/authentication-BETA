// features/login/components/organisms/LoginSection.tsx

import { cn } from "@/lib/utils";
import { FormLogin } from "../molecules/FormLogin";
import { useLoginForm } from "../../hooks/useLoginForm";
import type { LoginSectionProps } from "../../types/loginTypes";

export default function Login({
    variant = "center",
    title = "Welcome Back",
    description = "Please sign in to continue",
    className = "",
    content,
    classNameContent = "",
    contentActionRegister,
    actionRegister,
    actionForgot,
    classNameForgot = "",
    actionSignIn = () => { },
}: LoginSectionProps) {
    const { formLogin, handleChange } = useLoginForm()
    const isSplit = variant === "split-left" || variant === "split-right";

    return (
        <section className={cn("min-h-screen flex", className, {
            "justify-center items-center": variant === "center",
            "flex-row": variant === "split-left",
            "flex-row-reverse": variant === "split-right",
        })}>
            {isSplit && (
                <div className={cn("max-w-1/2 w-full min-w-1/2", classNameContent)}>
                    {content}
                </div>
            )}

            <div className={cn("p-10 w-full flex flex-col justify-center items-center", { "w-1/2": isSplit })}>
                <div className="max-w-md w-full">
                    <div className={cn("w-full space-y-1.5 px-5", { "text-center": variant === "center" })}>
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="mb-6 text-muted-foreground">{description}</p>
                    </div>
                    <FormLogin onChange={handleChange} onSubmit={actionSignIn} values={formLogin} className="" actionForgotPassword={actionForgot} classNameForgot={classNameForgot}  />
                    <div className="text-center px-5">
                        {contentActionRegister ?? (
                            <p className="text-sm text-muted-foreground">
                                Don&apos;t have an account?{" "}
                                <span onClick={actionRegister} className="text-black font-medium hover:underline underline-offset-2 cursor-pointer">Sign up</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
