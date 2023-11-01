import React, { useState } from 'react';
import FormInput from './common/FormInput';
import ConsentCheckbox from './common/ConsentCheckbox';
import './BankDetailsForm.css';

function BankDetailsForm() {
    const [formData, setFormData] = useState({
        accountHolderName: '',
        accountNumber: '',
        ifscCode: '',
        bankName: '',
        bankCity: '',
        branchName: '',
        relationshipWithAccountHolder: '',
        consent: false,
    });
      const [val,setval]=useState(true);
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = () => {
        setFormData({ ...formData, consent: !formData.consent });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation here

        // Example validation (you can add more rules):
        const errors = {};
        if (!formData.accountHolderName) errors.accountHolderName = 'Account holder name is required';
        if (!formData.accountNumber) errors.accountNumber = 'Account number is required';
       if(!formData.ifscCode) errors.ifscCode='IFSC Code is required';
        if (!formData.consent) errors.consent = 'You must agree to the terms'; 

        if (Object.keys(errors).length >0) {
            setFormErrors(errors);
        } 
        else {
            // Submit the form data to the server or perform necessary actions
            console.log('Form data submitted:', formData);
            setval(false);
            setFormErrors(errors);
            // setFormErrors({});
        }
    };

    return (
        <div className="Form_container">
            <form className='pt-[16px] px-[20px] md:pt-[32px] md:px-[40px]' onSubmit={handleSubmit}>
                <FormInput
                    label="ACCOUNT HOLDER NAME"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleInputChange}
                    error={formErrors.accountHolderName}
                    status={val}
                />

                <FormInput
                    label="ACCOUNT NUMBER"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    error={formErrors.accountNumber}
                    status={val}
                />

                <FormInput
                    label="IFSC CODE"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleInputChange}
                    error={formErrors.ifscCode}
                    status={val}
                />

                <FormInput
                    label="BANK NAME"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    error={formErrors.bankName}
                    status={val}
                />

                <FormInput
                    label="BANK CITY"
                    name="bankCity"
                    value={formData.bankCity}
                    onChange={handleInputChange}
                    error={formErrors.bankCity}
                    status={val}
                />

                <FormInput
                    label="BRANCH NAME"
                    name="branchName"
                    value={formData.branchName}
                    onChange={handleInputChange}
                    error={formErrors.branchName}
                    status={val}
                />

                <FormInput
                    label="RELATION WITH ACCOUNT HOLDER"
                    name="relationshipWithAccountHolder"
                    value={formData.relationshipWithAccountHolder}
                    onChange={handleInputChange}
                    error={formErrors.relationshipWithAccountHolder}
                    status={val}
                />

                <ConsentCheckbox
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    error={formErrors.consent}
                    status={val}
                />

                <div className="flex-shrink-0 flex items-center justify-end">

                   { val&&<button

                        id="SaveButtonRoot"
                        className="flex flex-col w-16 items-start rounded-[50px]"
                    >
                        <div className="border-solid border-[#3aa078] bg-[#3aa078] flex flex-col w-16 h-10 shrink-0 items-center py-2 border rounded mb-10">
                            <div className="text-center text-base font-['Open_Sans'] font-bold text-white">
                                Save
                            </div>
                        </div>
                    </button>
                   }

                </div>
            </form>
        </div>

    );
}

export default BankDetailsForm;
