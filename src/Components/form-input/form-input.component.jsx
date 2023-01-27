import {FormInputLabel, Input, Group } from './form-input.style.jsx'

const FormInput= ({ label, ...otherprops } ) =>{
    return(
        <Group >
            <Input {...otherprops} />
            { label && (
            <FormInputLabel shrink={otherprops.value.length}   > 
            {label}
            </FormInputLabel>
            )}

            {/* <input type="text"   required  onChange={handleChange} name='displayName' value={displayName} /> */}
            
        </Group>
    )
} 

export default FormInput;