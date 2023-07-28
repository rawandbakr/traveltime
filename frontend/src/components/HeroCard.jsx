import {CiLocationOn} from 'react-icons/ci'
import {AiOutlineArrowRight} from 'react-icons/ai'

export default function HeroCard() {
  return (
    <div className=" flex flex-col w-1/4">
      <span className=" flex flex-row items-center space-x-2">
        <CiLocationOn size={60} />
        <p className=' text-xs'>there will be small title here a couple of sentences of text</p>
      </span>
      <span className=" flex flex-row items-center  justify-center space-x-2">
        <h1 className=" text-xl font-bold"> more detailed</h1>
        <AiOutlineArrowRight size={30}/>
      </span>
    </div>
  );
}
