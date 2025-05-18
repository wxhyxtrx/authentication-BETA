import { useInputFormLoginStore } from "@/features/login/store/useLogin";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type LoginFormOptions = {
    baseUrl?: string;
    endpoint?: string;
    method?: HttpMethod;
    header?: Record<string, string>;
    customRequest?: (formData: any) => Promise<any>;
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
};

export function useLoginForm(options: LoginFormOptions = {}) {
    const { formLogin, setFormLogin } = useInputFormLoginStore();
    const {
        baseUrl,
        endpoint,
        method,
        header,
        customRequest,
        onSuccess,
        onError,
    } = options;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target;
        setFormLogin({
            ...formLogin,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async () => {
        try {
            let result;

            if (customRequest) {
                result = await customRequest(formLogin);
            } else {
                if (!baseUrl || !endpoint || !method) {
                    throw new Error("Missing baseUrl, endpoint, or method");
                }

                const res = await fetch(`${baseUrl}/${endpoint}`, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        ...header,
                    },
                    body: JSON.stringify(formLogin),
                });

                if (!res.ok) {
                    throw new Error(`Request failed with status ${res.status}`);
                }

                result = await res.json();
            }

            onSuccess?.(result);
            return result;
        } catch (error) {
            console.error("Login error:", error);
            onError?.(error);
            return { error: true, message: error instanceof Error ? error.message : "Unknown error" };
        }
    };

    return {
        formLogin,
        handleChange,
        handleSubmit,
    };
}
