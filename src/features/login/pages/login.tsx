import LoginSection from '../components/organisms/LoginSection';
import { useLoginForm } from '../hooks/useLoginForm';

export default function LoginPage() {
    const { handleSubmit } = useLoginForm()
    return (
        <LoginSection
            variant="split-left"
            classNameContent='bg-black'
            actionForgot={() => { "/fogot-password" }}
            actionRegister={() => { "/register" }}
            title={"Auth Beta"}
            description={"Please sign in to continue"}
            actionSignIn={handleSubmit}
        />
    );
}
