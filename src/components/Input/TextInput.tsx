export function TextInput({ labelName, name, value, onChange, autofocus }: InputProps) {
    return (
        <>
            <label>{labelName}</label>
            <input value={value} onChange={onChange} name={name} type="text" className="border border-neutral-700 bg-[#202020] w-full outline-none rounded p-2 mt-2 mb-3" autoFocus={autofocus}/>
        </>
    )
}
