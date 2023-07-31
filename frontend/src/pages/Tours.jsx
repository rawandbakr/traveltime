export default function Tours() {
  return (
    <div class="h-screen  bg-gradient-to-b from-slate-700 via-black to-slate-900 flex flex-col justify-center items-center gap-5 ">
      <h1 className=" text-4xl"> POPULAR TOWERS</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
      <div className="flex flex-row justify-around items-center space-x-5">
        <div className="hover:scale-110 w-40 h-60 bg-tower bg-cover bg-center flex flex-col items-center justify-end p-2 border-white border-2 rounded-md ">
          <h1 className=" font-extrabold text-xl"> tower 1</h1>
          <p className=" text-sm">Lorem ipsum dolor sit, amet consecte</p>
        </div>
        <div className="hover:scale-110 w-40 h-60 bg-tower2 bg-cover bg-center flex flex-col items-center justify-end p-2 border-white border-2 rounded-md">
          <h1 className=" font-extrabold text-xl"> tower 2</h1>
          <p className=" text-sm">Lorem ipsum dolor sit, amet consecte</p>
        </div>
        <div className="hover:scale-110 w-40 h-60 bg-tower3 bg-cover bg-center flex flex-col items-center justify-end p-2 border-white border-2 rounded-md ">
          <h1 className=" font-extrabold text-xl"> tower 3</h1>
          <p className=" text-sm">Lorem ipsum dolor sit, amet consecte</p>
        </div>
        <div className="hover:scale-110 w-40 h-60 bg-tower4 bg-cover bg-center flex flex-col items-center justify-end p-2 border-white border-2 rounded-md ">
          <h1 className=" font-extrabold text-xl"> tower 4</h1>
          <p className=" text-sm">Lorem ipsum dolor sit, amet consecte</p>
        </div>
      </div>
    </div>
  );
}
