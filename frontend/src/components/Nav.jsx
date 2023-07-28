import { BsSearch } from "react-icons/bs";

export default function nav() {
  const links = [
    {
      link: "Main",
    },
  ];

  return (
    <div className=" flex flex-col space-y-4 pt-10 p-10">
      <div className=" flex flex-row justify-between w-full">
        {/* logo and company name */}
        <div className="flex flex-row justify-around space-x-2 items-center">
          <div className=" bg-red-500 w-4 h-4 rounded-full" />
          <h1 className=" font-bold">Company Name</h1>
        </div>
        {/* links */}
        <div className=" flex justify-around space-x-6 font-medium">
          <a href="/">MAIN</a>
          <a href="/">ABOUT US</a>
          <a href="/">TOURS</a>
          <a href="/">GALLERY</a>
          <a href="/">CONTACTS</a>

        </div>
        {/* search */}
        <div className=" flex flex-row justify-center items-center">
          <input type="text" className=" bg-transparent outline-none " />
          <BsSearch className=" cursor-pointer" />
        </div>
      </div>
      <hr className=" bg-white w-full bottom-1 border-1" />
    </div>
  );
}
