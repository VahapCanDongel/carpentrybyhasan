import ServiceCard from "../components/ServiceCard";

export default function Services() {
    return (
        <div className="flex w-1/2 h-[700px] items-center justify-center my-20 flex-col sm:w-full sm:p-2 sm:mt-[370px]" id="service">

            <div className="mr-auto font-bold text-[50px] xl:text-4xl lg:text-3xl">
                Services
            </div>

            <div className="flex gap-4 mr-auto justify-between w-full mt-6 xl:flex-wrap lg:gap-2 sm:flex-col sm:justify-center sm:items-center flex-wrap mb-20">
                <ServiceCard service_info={"Skirting Boards"} service_paragraph={"At Carpentry By Hasan, our skirting board services extend beyond mere installations. We view skirting boards as a blend of art and functionality. These elements, while often overlooked, create a clear boundary between your walls and flooring, offering protection against knocks and scuffs. Furthermore, they act as a decorative frame for your rooms, adding a touch of elegance and finishing. With the combination of top-quality materials, intricate designs, and our seasoned carpenters' expertise, we promise not only protection but an aesthetic uplift for your interiors."} />

                <ServiceCard service_info={"Window Boards"} service_paragraph={"Window boards, a subtle yet significant part of your window's anatomy, are often the unsung heroes of interior aesthetics. At Carpentry By Hasan, we craft and fit window boards that complement the architectural essence of your home. Beyond aesthetics, these boards also provide a layer of insulation and prevent unwanted drafts. Each board is tailored to your window, ensuring a snug fit and a sleek finish, transforming ordinary ledges into stylish, functional platforms."} />

                <ServiceCard service_info={"Installing & Repairing Stairs"} service_paragraph={"Stairs, whether they spiral in elegance or stretch out in a straight line, are the silent guides of a home, leading us from one space to another. Carpentry By Hasan recognizes the importance of safe, stylish, and sturdy stairs. We provide comprehensive stair solutions, from designing and installing new staircases to reviving and repairing older ones. Our meticulous attention to detail ensures each step is perfect, making every ascent and descent a pleasure."} />

                <ServiceCard service_info={"Hanging Doors"} service_paragraph={"Doors are gateways to spaces, guarding privacy and echoing the design language of a home. At Carpentry By Hasan, hanging doors is a craft mastered with precision and care. From the initial measurements to the final touches, we ensure that each door swings or slides seamlessly, with hinges and handles complementing the door's character. We pride ourselves on installing doors that aren’t just functional barriers but integral design elements of your home's decor."} />

                <ServiceCard service_info={"Boxing In"} service_paragraph={"Unsightly pipes and wires can disrupt the harmony of a room's design. Carpentry By Hasan's 'Boxing In' service is the answer to this challenge. We design custom covers, not just to hide these elements, but to ensure they align with the room’s aesthetics. Our crafted boxes integrate effortlessly with your interior, turning potential eyesores into stylish or invisible features. This service reflects our belief that every corner of your home deserves thoughtful design."} />

                <ServiceCard service_info={"Fencing"} service_paragraph={"A home's exterior speaks volumes, and a well-crafted fence is its defining punctuation. Carpentry By Hasan offers fencing solutions that are not just barriers but statements. Using a variety of materials and designs, from classic picket fences to modern geometric patterns, we tailor each fence to the landscape and architecture it surrounds. Beyond beauty, our fences are built to stand the test of time, promising durability against the elements and security for your property."} />


            </div>

        </div>
    )
}
