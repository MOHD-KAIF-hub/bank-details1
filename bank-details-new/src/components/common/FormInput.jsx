import React from 'react';

function FormInput({ label, name, value, onChange, error }) {
    return (
        <div className="flex flex-col md:flex-row items-start justify-between mb-4">
            <label className="w-full md:w-1/2 mb-1  text-sm  font-bold text-[#262626]">
                {label}
            </label>
            <input
                type="text"
                name={name}
                value={value}
                placeholder={label}
                onChange={onChange}
                className="bg-background rounded-md p-2 w-full md:w-1/2 border border-inactive focus:outline-none focus:border-shade-1 placeholder:font-semibold placeholder:accent-neutral-600"
            />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}

export default FormInput;
