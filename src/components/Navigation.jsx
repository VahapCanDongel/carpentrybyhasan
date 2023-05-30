export default function Navigation() {
  return (
    <div className="flex justify-between items-center w-1/2 p-4 sm:w-full bg-zinc-200">
      <div className="border-[1px] border-gray-400 w-[80px] h-[80px] rounded-full p-2">
        <img src="https://www.zarla.com/images/zarla-true-handcraft-1x1-2400x2400-20210629-7wjgqv9396j3pdcxrq7j.png?crop=1:1,smart&width=250&dpr=2" />
      </div>
      <ul className="flex gap-8 items-center cursor-pointer sm:hidden text-xl">
        <li>About</li>
        <li>Services</li>
        <li>Testimonlials</li>
        <li>Projects</li>
        <li className="bg-gray-200 p-2 rounded-sm">Contact</li>
      </ul>

      <div className="hidden sm:bg-gray-200 sm:w-[60px] sm:h-[60px] sm:rounded-sm sm:flex sm:justify-center sm:items-center sm:visible md:hidden">
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
    </div>
  );
}
