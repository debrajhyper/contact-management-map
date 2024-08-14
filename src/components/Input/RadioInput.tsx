import './style.css';

export function RadioInput({ labelName, value, onChange }: InputProps) {
    return (
        <div className="flex flex-row justify-center items-center gap-6 mt-4">
            <h4>{labelName}:</h4>
            <div className="mr-auto max-w-xs text-center flex flex-col gap-2 flex-wrap justify-center">
                <div className="flex items-center">
                    <input id="active" type="radio" name="status" className="hidden" value='active' onChange={onChange} checked={value === 'active'} />
                    <label htmlFor="active" className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Active
                    </label>
                </div>
                <div className="flex items-center">
                    <input id="inactive" type="radio" name="status" className="hidden" value='inactive' onChange={onChange} checked={value === 'inactive'} />
                    <label htmlFor="inactive" className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Inactive
                    </label>
                </div>
            </div>
        </div>
    )
}
