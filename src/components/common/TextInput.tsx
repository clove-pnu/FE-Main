interface TextInputProps {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  secret?: boolean;
  required?: boolean;
}

export default function TextInput({
  name,
  value,
  setValue,
  required = false,
  secret = false,
}: TextInputProps) {
  return (
    <div className="border-b-2 border-black py-2">
      <label
        className="flex flex-row items-center gap-4 px-2 font-bold"
        htmlFor={name}
      >
        {name}
        <input
          className="grow px-2 py-1 focus:outline-none"
          type={secret ? 'password' : 'text'}
          name={name}
          id={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-required={required}
          aria-label={`${name} 입력`}
        />
      </label>
    </div>
  );
}
