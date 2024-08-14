/**
 * TextInput component
 * 
 * Renders a label and an input field for text input.
 * 
 * @param {InputProps} props - The properties for the TextInput component.
 * @param {string} props.labelName - The label text for the input field.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.onChange - The callback function for when the input value changes.
 * @param {boolean} [props.autofocus=false] - Whether the input field should be focused on render.
 * @returns {JSX.Element} - The TextInput component.
 */
export function TextInput({ labelName, name, value, onChange, autofocus = false }: InputProps) {
    return (
        <>
            {/* Label for the input field */}
            <label>{labelName}</label>
            {/* Input field for text input */}
            <input
                value={value}
                onChange={onChange}
                name={name}
                type="text"
                className="border border-neutral-700 bg-[#202020] w-full outline-none rounded p-2 mt-2 mb-3"
                autoFocus={autofocus}
            />
        </>
    )
}