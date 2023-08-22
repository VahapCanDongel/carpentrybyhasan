import { useState } from "react"

export default function ServiceCard({ service_info, service_paragraph }) {
    const [modalState, setModalState] = useState(false)
    const toggleModal = () => {
        setModalState(!modalState)
    }

    return (
        <div>
            <div className="cursor-pointer bg-gray-300 w-[250px] sm:w-[400px] h-[300px] rounded-sm flex justify-center items-center text-[18px] font-bold xl:w-full lg:w-1/3 lg:h-[200px] lg:text-lg" onClick={toggleModal}>
                {service_info}
            </div>

            {modalState && (
                <div className="w-full h-screen flex justify-center items-center fixed top-0 left-0 z-50 bg-opacity-50 bg-black " >
                    <div className="w-[800px]  bg-slate-100 sm:w-[400px] sm:h-[600px] flex flex-col p-10 rounded-md">
                        <div className=" font-semibold text-[23px]">
                            {service_info}
                        </div>

                        <div className="my-4 text-[18px]">
                            {service_paragraph}
                        </div>


                        {/* <div className="w-[200px] ">
                            <div className="font-semibold my-4">
                                Sample Projects
                            </div>
                            <img src={service_image} className="rounded-md shadow-xl" />

                        </div> */}


                        <div className="bg-slate-400 p-2 w-[100px] text-center rounded-md ml-auto mt-auto font-semibold hover:bg-slate-300 cursor-pointer" onClick={toggleModal}>
                            Close
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}
