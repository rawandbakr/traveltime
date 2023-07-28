export default function HeroTitle() {
  return (
    <div className=" flex flex-row pl-10 items-center justify-between">
      <div className=" flex flex-col space-y-5 w-1/2">
        <h1 className=" text-5xl font-bold "> TRAVEL TIME</h1>
        <p className=" w-2/3 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        </p>
      </div>
      <div className=" absolute right-5">
        <ul className=" flex flex-col font-normal text-xl p-5 justify-end items-end">
          <a className="hover:text-5xl">01</a>
          <a className="hover:text-5xl">02</a>
          <a className="hover:text-5xl">03</a>
          <a className="hover:text-5xl">04</a>
          <a className="hover:text-5xl">05</a>
        </ul>
      </div>
    </div>
  );
}
