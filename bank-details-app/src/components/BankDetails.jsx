import React from 'react'
import BankDetailsForm from './BankDetailsForm'


const BankDetails = () => {
    return (
        <>
            <div className="flex flex-col ml-6 gap-2 items-start">
                <div className="text-3xl  font-medium text-[#262626]">
                    Bank Details
                </div>
                <div className="text-sm font-['Open_Sans'] w-full">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo.
                </div>
            </div>


            <BankDetailsForm />

            <div className="flex flex-col mr-3 gap-6 h-16 shrink-0 items-end">
                <div className="text-center text-sm font-['Open_Sans'] text-[#262626] w-full">
                    THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF
                    THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO
                    EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!
                </div>

            </div>
        </>
    )
}

export default BankDetails