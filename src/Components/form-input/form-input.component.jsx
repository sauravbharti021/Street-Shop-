import '../form-input/form-input.style.scss'

const FormInput= ({ label, ...otherprops } ) =>{
    return(
        <div className="group" >
            <input className="form-input" {...otherprops} />
            { label && (
            <label  className={`${otherprops.value.length ? 'shrink' : '' } form-input-label `}  > {label} </label>
            )}

            {/* <input type="text"   required  onChange={handleChange} name='displayName' value={displayName} /> */}
            
        </div>
    )
} 

export default FormInput;