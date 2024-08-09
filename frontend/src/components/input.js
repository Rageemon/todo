function Input({label, handleChange ,value}) {
    return (
      <div>
        <label>Enter {label}</label>
        <input placeholder={label} type="text" onChange = {handleChange} name={label} value = {value}></input>
      </div>
    );
  }

export default Input 