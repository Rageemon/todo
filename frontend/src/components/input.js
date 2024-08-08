function Input({label}) {
    return (
      <div>
        <label>{label}</label>
        <input placeholder={label} type="text"></input>
      </div>
    );
  }

export default Input 