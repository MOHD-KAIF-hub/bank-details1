import React from 'react';

function ConsentCheckbox({ checked, onChange, error ,status}) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const year=today.getFullYear();
    let arrayfor_mm=["JAN","FEB","MAR","APR","MAY","JUN","JULY","AUG","SEP","OCT","NOV","DEC"];
            var x=parseInt(mm);
    return (
        <div className="flex flex-col md:flex-row items-start justify-between mb-4">
            <label className="w-full md:w-1/2 mb-1 text-sm font-bold text-[#262626]">
                CONSENT
            </label>
            <div className="w-full md:w-1/2 border-[#d3d3d3] border rounded-md p-4 flex items-start space-x-2">
                {status&&<input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    id="consent"
                    className="form-checkbox text-primary mt-2"
                />}
                <span className="accent-neutral-800 text-xs leading-normal">
                    I confirm that the information given in this form is true, complete and accurate. I understand that in case of incorrect details, Exambazaar will not be responsible for any loss of pay.
                    {!status&&<p className=" mt-3 text-sm font-bold text-[#262626]">FILLED ON {arrayfor_mm[x-1]} {dd},{year} </p>}
                </span>
               
            </div>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}

export default ConsentCheckbox;
