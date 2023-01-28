
import { useState, useContext } from "react";
import { 
     createUserDocumentFromAuth,
     signInWithGooglePopup,
    SignInAuthUserWithEmailAndPassword
} from "../../util/firebase/firebase.util";


import FormInput from "../form-input/form-input.component";

import { SignInContainer, ButtonsContainer } from './sign-in-form.style.jsx'
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

const defaultFormFields = {
    email : '',
    password : '',
}



const SignInForm =() =>{

    const [FormFields, setFormField] = useState(defaultFormFields);
    const { email, password} = FormFields;


    const resetUser =()=>{
        setFormField(defaultFormFields);
    }

    const SignInWithGoogle =async () =>{
        await signInWithGooglePopup();
    }



    const handleSubmit= async(event) =>{

        event.preventDefault();
       
        try{
            const {user } = await SignInAuthUserWithEmailAndPassword(email, password);

            // setCurrentUser(user);
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
        <SignInContainer>
            <h2> Have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit = {handleSubmit}  >

                <FormInput label="Email" type="email" required  onChange={handleChange} name='email' value={email}/>

                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password}  />

                <ButtonsContainer>
                    <Button type="submit"> Sign In </Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle}>Google Sign-In </Button>
                </ButtonsContainer>
            </form>    

        </SignInContainer>
    )

}

export default SignInForm;