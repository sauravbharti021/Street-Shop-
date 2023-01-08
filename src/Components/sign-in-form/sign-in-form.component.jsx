
import { useState } from "react";
import { 
    createAuthUserWithEmailAndPassword,
     createUserDocumentFromAuth,
     signInWithGooglePopup,
    SignInAuthUserWithEmailAndPassword
} from "../../util/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";

import '../sign-in-form/sign-in-form.style.scss'
import Button from "../button/button.component";

const defaultFormFields = {
    email : '',
    password : '',
}



const SignInForm =() =>{

    const [FormFields, setFormField] = useState(defaultFormFields);
    const { email, password} = FormFields;

    // console.log(FormFields);

    const resetUser =()=>{
        setFormField(defaultFormFields);
    }

    const SignInWithGoogle =async () =>{
        const {user} = await signInWithGooglePopup();
        // console.log(user);
        const userDocRef= await createUserDocumentFromAuth(user);
    }

    const handleSubmit= async(event) =>{

        event.preventDefault();
       
        try{
            const {user } = await SignInAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            resetUser();
            
        }
        catch(error){
            if(error.code === "auth/wrong-password")
            alert("Incorrect Password");
            else if(error.code === "auth/user-not-found")
            alert("User not found with this email");
            else
            console.log('user encountered an error : ' + error);
        }

    }

    const handleChange = (event) => {
        const {name, value} =event.target;

        setFormField( {...FormFields, [name] : value } )
    }

    return(
        <div className="sign-up-container">
            <h2> Have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit = {handleSubmit}  >

                <FormInput label="Email" type="email" required  onChange={handleChange} name='email' value={email}/>

                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password}  />

                <div className="buttons-container">
                    <Button type="submit"> Sign In </Button>
                    <Button type="button" buttonType='google' onClick={SignInWithGoogle}>Google Sign-In </Button>
                </div>
            </form>    

        </div>
    )

}

export default SignInForm;