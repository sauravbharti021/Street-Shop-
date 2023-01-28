
import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from  './authentication.style.jsx'


const Authentication = ()=>{


   



   

    return(
        <AuthenticationContainer>
            <SignUpForm />
            <SignInForm />
        </AuthenticationContainer>
    )
}

export default Authentication;