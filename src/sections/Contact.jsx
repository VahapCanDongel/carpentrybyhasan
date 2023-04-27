export default function Contact() {
    return (
        <div className="flex w-1/2 items-center justify-center my-20 flex-col sm:w-full sm:p-2">


            <div className="mr-auto font-bold text-[50px]">
                Contact
            </div>
            <p className="mr-auto">Please contact for any business enquiries</p>

            <div className="flex flex-col w-full my-6 gap-8 items-center sm:w-full">
                <div className="flex gap-2 flex-col w-full sm:w-full">
                    <label>Full Name</label>
                    <input type="text" className="bg-gray-300 rounded-sm h-[50px] border-[1px] border-gray-400 p-2" />
                </div>

                <div className="flex gap-2 flex-col w-full sm:w-full">
                    <label>Email</label>
                    <input type="email" className="bg-gray-300 rounded-sm h-[50px] border-[1px] border-gray-400 p-2" />
                </div>

                <div className="flex gap-2 flex-col w-full sm:w-full">
                    <label>Message</label>
                    <textarea className="bg-gray-300 rounded-sm border-[1px] border-gray-400 resize-none h-[250px] p-2" ></textarea>
                </div>

                <div className="bg-gray-300 rounded-sm h-[50px] border-[1px] border-gray-400 p-2 w-[180px] flex justify-center items-center">
                    Send
                </div>
            </div>


        </div>
    )
}