/**
 * RadioInput component
 * 
 * @param labelName - label name displayed above the radio buttons
 * @param value - current value of the radio button group
 * @param onChange - callback when the radio button value changes
 * @returns JSX.Element with the radio buttons
 */
import './style.css';

export function RadioInput({ labelName, value, onChange }: InputProps) {
    return (
        <div className="flex flex-row justify-center items-center gap-6 mt-4">
            {/* label for the radio buttons */}
            <h4>{labelName}:</h4>
            {/* container for the radio buttons */}
            <div className="mr-auto max-w-xs text-center flex flex-col gap-2 flex-wrap justify-center">
                {/* active radio button */}
                <div className="flex items-center">
                    <input id="active" type="radio" name="status" className="hidden" value='active' onChange={onChange} checked={value === 'active'} />
                    <label htmlFor="active" className="flex items-center cursor-pointer">
                        {/* radio button indicator */}
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Active
                    </label>
                </div>
                {/* inactive radio button */}
                <div className="flex items-center">
                    <input id="inactive" type="radio" name="status" className="hidden" value='inactive' onChange={onChange} checked={value === 'inactive'} />
                    <label htmlFor="inactive" className="flex items-center cursor-pointer">
                        {/* radio button indicator */}
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Inactive
                    </label>
                </div>
            </div>
        </div>
    )
}