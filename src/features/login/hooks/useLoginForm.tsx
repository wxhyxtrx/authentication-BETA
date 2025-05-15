import { useInputFormLoginStore } from "@/features/login/store/useLogin"

export function useLoginForm() {
    const { formLogin, setFormLogin } = useInputFormLoginStore()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, } = e.target;
        setFormLogin({
            ...formLogin,
            [name]: value,
        });
    };


    const handleSubmit = () => {
        console.log("data :", formLogin)
    }

    return {
        formLogin,
        handleChange,
        handleSubmit,
    }
}
