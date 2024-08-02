const Input = ({
  name,
  type,
  id,
  value,
  placeholder = "",
  className,
  checked,
  onChange,
}) => {
  return (
    <>
      <div className={className}>
        <label htmlFor={id}>{name}</label>
        <input
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          checked={checked}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
