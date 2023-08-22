import { useState } from "react";

export default function Navigation() {
  const [modalState, setModalState] = useState(false)

  const toggleModal = () => {
    setModalState(!modalState)
  }

  return (
    <div className="flex justify-center items-center w-1/2 p-4 sm:w-full gap-[500px]  sm:justify-between sm:gap-0">

      <img src="https://i.ibb.co/9qtN66y/c03daa7a-df6e-4717-93b3-40ddb7aec2f0.jpg" className=" w-[100px] h-[100px] rounded-full p-2 object-cover" />

      <ul className="flex gap-8 items-center cursor-pointer sm:hidden text-xl">
        <li><a href="#about">About</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#project">Projects</a></li>
        <li className="bg-gray-400 p-2 rounded-sm font-semibold"><a href="#contact">Contact</a></li>
      </ul>

      <div className="hidden sm:bg-gray-200 sm:w-[60px] sm:h-[60px] sm:rounded-sm sm:flex sm:justify-center sm:items-center sm:visible md:hidden" onClick={toggleModal}>
        <svg
          width="46"
          height="46"
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3.6 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 6Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 12Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 18Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>

      {modalState && (
        <div className="hidden w-[200px] h-[200px] bg-zinc-200 absolute ml-[165px] mt-[100px] z-50 inset-1 rounded-md sm:block lg:hidden">
          <ul className="text-[20px] flex flex-col justify-center h-[200px] gap-2 p-2">
            <li>About</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      )}

    </div>
  );
}
