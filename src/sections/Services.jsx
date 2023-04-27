export default function Services() {
    return (
        <div className="flex w-1/2 h-[700px] items-center justify-center my-20 flex-col sm:w-full sm:p-2">

            <div className="mr-auto font-bold text-[50px] xl:text-4xl lg:text-3xl">
                Services
            </div>

            <div className="flex gap-4 mr-auto justify-between w-full mt-6 xl:flex-wrap lg:gap-2 sm:flex-col sm:justify-center sm:items-center">
                <div className="bg-gray-300 w-[250px] sm:w-[350px] h-[300px] rounded-sm flex justify-center items-center text-[20px] font-bold xl:w-full lg:w-1/3 lg:h-[200px] lg:text-lg">
                    Flooring
                </div>
                <div className="bg-gray-300 w-[250px] sm:w-[350px] h-[300px] rounded-sm flex justify-center items-center text-[20px] font-bold xl:w-full lg:w-1/3 lg:h-[200px] lg:text-lg">
                    Skirting Boards
                </div>
                <div className="bg-gray-300 w-[250px] sm:w-[350px] h-[300px] rounded-sm flex justify-center items-center text-[20px] font-bold xl:w-full lg:w-1/3 lg:h-[200px] lg:text-lg">
                    Decking
                </div>
            </div>

        </div>
    )
}
