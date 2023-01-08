
import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import '../authentication/authentication.style.scss'


const Authentication = ()=>{


   



   

    return(
        <div className="authentication-container">
            <SignUpForm />
            <SignInForm />
        </div>
    )
}

export default Authentication;