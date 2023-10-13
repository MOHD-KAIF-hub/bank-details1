import React, { useState } from 'react';
import FormInput from './common/FormInput';
import ConsentCheckbox from './common/ConsentCheckbox';

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
        if (!formData.consent) errors.consent = 'You must agree to the terms';

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            // Submit the form data to the server or perform necessary actions
            console.log('Form data submitted:', formData);
            setFormErrors({});
        }
    };

    return (
        <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center pt-5 gap-16 items-start mx-3 rounded">
            <form className='pt-[16px] px-[20px] md:pt-[32px] md:px-[40px]' onSubmit={handleSubmit}>
                <FormInput
                    label="ACCOUNT HOLDER NAME"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleInputChange}
                    error={formErrors.accountHolderName}
                />

                <FormInput
                    label="ACCOUNT NUMBER"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    error={formErrors.accountNumber}
                />

                <FormInput
                    label="IFSC CODE"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleInputChange}
                    error={formErrors.ifscCode}
                />

                <FormInput
                    label="BANK NAME"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    error={formErrors.bankName}
                />

                <FormInput
                    label="BANK CITY"
                    name="bankCity"
                    value={formData.bankCity}
                    onChange={handleInputChange}
                    error={formErrors.bankCity}
                />

                <FormInput
                    label="BRANCH NAME"
                    name="branchName"
                    value={formData.branchName}
                    onChange={handleInputChange}
                    error={formErrors.branchName}
                />

                <FormInput
                    label="RELATION WITH ACCOUNT HOLDER"
                    name="relationshipWithAccountHolder"
                    value={formData.relationshipWithAccountHolder}
                    onChange={handleInputChange}
                    error={formErrors.relationshipWithAccountHolder}
                />

                <ConsentCheckbox
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    error={formErrors.consent}
                />

                <div className="flex-shrink-0 flex items-center justify-end">

                    <button

                        id="SaveButtonRoot"
                        className="flex flex-col w-16 items-start rounded-[50px]"
                    >
                        <div className="border-solid border-[#3aa078] bg-[#3aa078] flex flex-col w-16 h-10 shrink-0 items-center py-2 border rounded mb-10">
                            <div className="text-center text-base font-['Open_Sans'] font-bold text-white">
                                Save
                            </div>
                        </div>
                    </button>

                </div>
            </form>
        </div>

    );
}

export default BankDetailsForm;
