
const Input = ({style,text, htmlFor, value, onChange, type, name, placeholder, isRequired, id}) => {
   

  return (
    <div style={style}>
        <label htmlFor={htmlFor}>{text}</label>
        <input type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        id={id}
        required={isRequired}/>
      </div>
  )
}

export default Input