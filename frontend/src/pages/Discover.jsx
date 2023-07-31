import {AiOutlinePlayCircle ,AiOutlineFacebook,AiOutlineYoutube,AiOutlineInstagram} from "react-icons/ai"
export default function Discover() {
  return (
    <div className=" pl-28 pt-10 bg-dicover bg-center bg-no-repeat bg-cover h-screen flex flex-col justify-around items-start">
      <h1 className=" text-4xl flex w-1/4"> DISCOVER THE WORLD IN A NEW WAY</h1>
      <h2 className=" flex items-center gap-3"><AiOutlinePlayCircle/> watch the video</h2>
      <div className=" flex flex-row items-start justify-start gap-10">
        <p className=" w-1/3 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto maxime vel nemo beatae? Ut ad sequi doloribus, aspernatur rerum et qui quasi soluta modi tenetur, suscipit excepturi officia, nam perferendis.</p>
        <span className=" flex flex-row gap-5">
          <div className=" flex bg-video1 bg-cover bg-center  justify-center items-center w-48 h-32"><AiOutlinePlayCircle size={44}/></div>
          <div className=" flex bg-video2 bg-cover bg-center justify-center items-center w-48 h-32"><AiOutlinePlayCircle size={44}/></div>
        </span>
    </div>
    <span className=" flex self-center gap-10">
          <AiOutlineInstagram size={60}/>
          <AiOutlineYoutube size={60}/>
          <AiOutlineFacebook size={60}/>
        </span>
    </div>
  );
}
