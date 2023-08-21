export default function Projects() {
    return (
        <div className="flex w-1/2 items-center justify-center my-20 flex-col sm:w-full sm:p-2">


            <div className="mr-auto font-bold text-[50px] xl:text-4xl lg:text-3xl">
                Projects
            </div>

            <div className="flex flex-col gap-4 mr-auto justify-between w-full mt-6 sm:w-full">
                <div className="flex gap-4 justify-between w-full sm:flex-col sm:w-full  sm:justify-center sm:items-center flex-wrap">
                    <img src="public\image_1.jpg" className="w-[350px] h-[300px] rounded-sm" />
                    <img src="public\image_2.jpg" className="w-[350px] h-[300px] rounded-sm" />
                    <img src="public\image_3.jpg" className="w-[350px] h-[300px] rounded-sm" />
                    <img src="public\image_4.jpg" className="w-[350px] h-[300px] rounded-sm" />
                    <img src="public\image_5.jpg" className="w-[350px] h-[300px] rounded-sm" />
                    <img src="public\image_6.jpg" className="w-[350px] h-[300px] rounded-sm" />

                </div>


            </div>


        </div>
    )
}