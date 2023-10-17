import React from 'react'

const EditableInput = () => {
    return (
        <div className="overflow-hidden bg-white flex flex-col w-full">

            {/* Header  */}
            <div className="overflow-hidden bg-white flex flex-col justify-end gap-2 h-20 shrink-0 py-px">
                <div className="flex flex-row justify-between items-start ml-4 mr-6">
                    <div className="text-xl font-['Open_Sans'] font-bold text-[#262626] mt-1">
                        Logo
                    </div>
                    <div className="flex flex-row justify-between w-[1029px] items-start">
                        <div className="text-xl font-['Open_Sans'] font-bold text-[#262626] mt-1">
                            Home
                        </div>
                        <div className="text-xl font-['Open_Sans'] font-bold text-[#262626] mt-1">
                            Services
                        </div>
                        <div className="text-xl font-['Open_Sans'] font-bold text-[#262626] mt-1">
                            Blog
                        </div>
                        <div className="text-xl font-['Open_Sans'] font-bold text-[#262626] mt-1">
                            Offers
                        </div>
                        <div className="flex flex-row gap-20 items-start">
                            <div className="text-xl font-['Open_Sans'] font-bold text-[#262626] mt-1">
                                About Us
                            </div>
                            <div className="flex flex-row justify-between w-[180px] shrink-0 items-start">
                                <img
                                    src="https://file.rendit.io/n/IeboRckLj0v9BBbaiHH4.svg"
                                    id="MagnifyingGlass"
                                    className="w-8 shrink-0"
                                />
                                <img
                                    src="https://file.rendit.io/n/IIoH49keths1zmdI0hOw.svg"
                                    id="BellRinging"
                                    className="w-8 shrink-0"
                                />
                                <img
                                    src="https://file.rendit.io/n/AuEniSJhXz4LDfONTbVV.svg"
                                    id="UserCircle"
                                    className="w-8 shrink-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col pt-1">
                    <div className="w-24 h-1 bg-[#3aa078] absolute top-0 left-[211px]" />
                    <div
                        id="Line2"
                        className="border-solid border-[#d3d3d3] relative h-px shrink-0 border-t border-b-0 border-x-0"
                    />
                </div>
            </div>


            {/* second part */}
            <div className="flex flex-row gap-8 items-start ml-6 mr-40">
                {/* side bar */}
                <div className="flex flex-col justify-between h-[267px] items-end mt-3 mr-px">
                    <div className="self-start flex flex-row gap-12 w-[245px] items-start">
                        <div className="flex flex-row gap-5 w-40 items-start">
                            <div className="flex flex-col gap-5 w-8 shrink-0 items-start">
                                <img
                                    src="https://file.rendit.io/n/7bKzJr21pcsUZ1zIvYnZ.svg"
                                    className="w-8"
                                />
                                <img
                                    src="https://file.rendit.io/n/csjFnqenuR3JiDKLyoGR.svg"
                                    className="self-end w-6"
                                />
                            </div>
                            <div className="text-base font-['Open_Sans'] text-[#2e8362] self-end mb-px">
                                My Dashboard
                            </div>
                        </div>
                        <img
                            src="https://file.rendit.io/n/hD8IfD8N1TcbCRLDYhTR.svg"
                            className="self-end w-6 shrink-0"
                        />
                    </div>
                    <div className="flex flex-row gap-5 w-56 items-start">
                        <img
                            src="https://file.rendit.io/n/CcTinhTQACTRcvaL7qUt.svg"
                            className="w-6 shrink-0"
                        />
                        <div className="flex flex-row gap-20 w-48 items-start">
                            <div className="text-base font-['Open_Sans'] text-[#262626]">
                                TOTM links
                            </div>
                            <img
                                src="https://file.rendit.io/n/LyHRfpz5PxkoS5SM0lvD.svg"
                                className="w-6 shrink-0"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 w-56 items-start">
                        <img
                            src="https://file.rendit.io/n/eYFscBduMuyPAmZdwhku.svg"
                            className="mb-px w-6 shrink-0"
                        />
                        <div className="flex flex-row mt-px gap-12 w-48 items-start">
                            <div className="text-base font-['Open_Sans'] text-[#262626]">
                                Daily Summary
                            </div>
                            <img
                                src="https://file.rendit.io/n/LyHRfpz5PxkoS5SM0lvD.svg"
                                className="w-6 shrink-0"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 w-56 items-start">
                        <img
                            src="https://file.rendit.io/n/OJO1Xe3NcaaU3muivA2m.svg"
                            className="w-6 shrink-0"
                        />
                        <div className="flex flex-row gap-16 w-48 items-start">
                            <div className="text-base font-['Open_Sans'] text-[#262626]">
                                Bank Details
                            </div>
                            <img
                                src="https://file.rendit.io/n/LyHRfpz5PxkoS5SM0lvD.svg"
                                className="w-6 shrink-0"
                            />
                        </div>
                    </div>
                </div>

                {/* divider */}
                <div
                    id="Line1"
                    className="border-solid border-[#d3d3d3] w-px shrink-0 h-[969px] border-r border-l-0 border-y-0"
                />

                {/* right pannel */}
                <div className="flex flex-col justify-between mt-10 gap-8 w-[791px]">

                    {/* right pannel heading */}
                    <div className="flex flex-col ml-6 gap-2 items-start">
                        <div className="text-3xl font-['Poppins'] font-medium text-[#262626]">
                            Bank Details
                        </div>
                        <div className="text-sm font-['Open_Sans'] w-full">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                        </div>
                    </div>

                    {/* right pannel form */}
                    <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center pt-5 gap-16 items-start mx-3 rounded">
                        <div className="flex flex-col justify-between mt-2 h-[432px] items-start">
                            <div className="text-sm font-['Open_Sans'] font-bold text-[#262626]">
                                ACCOUNT HOLDER NAME
                            </div>
                            <div className="text-sm font-['Open_Sans'] font-bold text-[#262626]">
                                ACCOUNT NUMBER
                            </div>
                            <div className="text-sm font-['Open_Sans'] font-bold text-[#262626]">
                                IFSC CODE
                            </div>
                            <div className="text-sm font-['Open_Sans'] font-bold text-[#262626]">
                                BANK NAME
                            </div>
                            <div className="text-sm font-['Open_Sans'] font-bold text-[#262626]">
                                BANK CITY
                            </div>
                            <div className="text-sm font-['Open_Sans'] font-bold text-[#262626]">
                                BRANCH NAME
                            </div>
                            <div className="text-sm font-['Open_Sans'] font-bold text-[#262626]">
                                RELATION WITH ACCOUNT HOLDER
                            </div>
                            <div className="text-sm font-['Open_Sans'] font-bold text-[#262626]">
                                CONSENT
                            </div>
                        </div>
                        <div className="flex flex-col mb-12 gap-6 w-1/2 items-end">
                            <div className="self-stretch flex flex-col justify-between gap-5">
                                <div className="border-solid border-[#d3d3d3] bg-white flex flex-col h-10 shrink-0 items-start pl-5 py-2 border rounded">
                                    <div className="text-sm font-['Open_Sans'] font-bold text-[#d3d3d3]">
                                        Account Holder Name
                                    </div>
                                </div>
                                <div className="border-solid border-[#d3d3d3] bg-white flex flex-col h-10 shrink-0 items-start pl-5 py-2 border rounded">
                                    <div className="text-sm font-['Open_Sans'] font-bold text-[#d3d3d3]">
                                        Account Number
                                    </div>
                                </div>
                                <div className="border-solid border-[#d3d3d3] bg-white flex flex-col h-10 shrink-0 items-start pl-5 py-2 border rounded">
                                    <div className="text-sm font-['Open_Sans'] font-bold text-[#d3d3d3]">
                                        IFSC Code
                                    </div>
                                </div>
                                <div className="border-solid border-[#d3d3d3] bg-white flex flex-col h-10 shrink-0 items-start pl-5 py-2 border rounded">
                                    <div className="text-sm font-['Open_Sans'] font-bold text-[#d3d3d3]">
                                        Bank Name
                                    </div>
                                </div>
                                <div className="border-solid border-[#d3d3d3] bg-white flex flex-col h-10 shrink-0 items-start pl-5 py-2 border rounded">
                                    <div className="text-sm font-['Open_Sans'] font-bold text-[#d3d3d3]">
                                        Bank City
                                    </div>
                                </div>
                                <div className="border-solid border-[#d3d3d3] bg-white flex flex-col h-10 shrink-0 items-start pl-5 py-2 border rounded">
                                    <div className="text-sm font-['Open_Sans'] font-bold text-[#d3d3d3]">
                                        Branch Name
                                    </div>
                                </div>
                                <div className="border-solid border-[#d3d3d3] bg-white flex flex-col h-10 shrink-0 items-start pl-5 py-2 border rounded">
                                    <div className="text-sm font-['Open_Sans'] font-bold text-[#d3d3d3]">
                                        Relation with Account Holder
                                    </div>
                                </div>
                                <div className="border-solid border-[#d3d3d3] bg-white flex flex-row justify-center pt-2 gap-2 h-32 shrink-0 items-start border rounded">
                                    <div className="border-solid border-[#d3d3d3] bg-white mt-2 w-5 shrink-0 h-5 border rounded" />
                                    <div className="text-sm font-['Open_Sans'] text-[#262626] w-5/6">
                                        I confirm that the information given in this form is true,
                                        complete and accurate. I understand that in case of incorrect
                                        details, Exambazaar will not be responsible for any loss of pay.
                                    </div>
                                </div>
                            </div>
                            <button
                                id="SaveButton"
                                className="flex flex-col mr-12 w-16 items-start rounded-[50px]"
                            >
                                <div className="border-solid border-[#3aa078] bg-[#3aa078] flex flex-col w-16 h-10 shrink-0 items-center py-2 border rounded">
                                    <div className="text-center text-base font-['Open_Sans'] font-bold text-white">
                                        Save
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* right pannel bottom heading */}
                    <div className="flex flex-col mr-3 gap-6 h-16 shrink-0 items-end">
                        <div className="text-center text-sm font-['Open_Sans'] text-[#262626] w-full">
                            THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF
                            THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO
                            EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!
                        </div>
                        <div
                            id="Line"
                            className="border-solid border-[#d3d3d3] self-stretch mr-3 h-px shrink-0 border-t border-b-0 border-x-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditableInput