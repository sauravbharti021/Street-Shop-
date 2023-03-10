
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../util/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from  './sign-up-form.style.jsx'
import Button from "../button/button.component";

const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}



const SignUpForm =() =>{

    const [FormFields, setFormField] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = FormFields;

    // console.log('lalla');

    const resetUser =()=>{
        setFormField(defaultFormFields);
    }

    const handleSubmit= async(event) =>{

        event.preventDefault();
        if(password !== confirmPassword){
            alert('Password do not match')
            return;
        }
        try{
            const {user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName});

            resetUser();
            
        }
        catch(error){
            if(error.code === 'auth/email-already-in-use' )
            alert('Unable to create useer as email is already in use');
            else
            console.log('user encountered an error : ' + error);
        }

    }

    const handleChange = (event) => {
        const {name, value} =event.target;

        setFormField( {...FormFields, [name] : value } )
    }

    return(
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email</span>
            <form onSubmit = {handleSubmit}  >
                <FormInput label="Display Name" type="text"   required  onChange={handleChange} name='displayName' value={displayName} />

                <FormInput label="Email" type="email" required  onChange={handleChange} name='email' value={email}/>

                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password}  />

                <FormInput label="Confirm Password" type="password" required  onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <Button type="submit"  > Sign Up </Button>
            </form>    

        </SignUpContainer>
    )

}

export default SignUpForm;