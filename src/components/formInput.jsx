export default function FormInput({type, name, defaultValue, label, size}) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <input type={type} name={name} defaultValue={defaultValue}  className={`input input-bordered ${size}`}  />
    </fieldset>
  );
}
