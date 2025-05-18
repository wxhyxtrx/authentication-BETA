import { Login, useLoginForm } from "@/features/login";
import * as yup from 'yup';

export default function App() {
  const { handleSubmit } = useLoginForm({
    baseUrl: "https://dummyjson.com",
    endpoint: "auth/login",
    method: "POST",
    onSuccess: (data) => {
      console.log("Success", data);
    },
    onError: (error) => {
      console.error("Error", error);
    },
  });

  const validation = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),

    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),

    remember: yup.boolean().optional(),
  })

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <Login
        variant="center"
        title="Test Login"
        description="Use Credentials with Email & Password"
        actionSignIn={handleSubmit}
        customSchemaValidation={validation as any}
      />
    </main>
  );
}
