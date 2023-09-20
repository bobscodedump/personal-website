import link from '../images/link.png';
import travelonus from '../images/travelonus.png';

function TravelonusCard() {
  return (
    <div className='w-screen h-96 p-5 flex justify-center items-center lg:mb-48 md:mb-80 flex-col lg:flex-row mb-96'>
      <div className='flex-col flex justify-center w-[400px] m-10'>
        <h1 className='font-libreBaskerville text-lg text-center text-blue-900'>TraveloNUS ✈️</h1>
        <p className='font-raleway text-sm text-center my-3 px-16'>
          TraveloNUS is a website that lets users plan trips with their friends, from booking flights to planning and
          mapping out their itineraries.
        </p>
        <div className='grid grid-cols-2 font-sans text-sm p-3 text-center font-semibold px-16'>
          <h1 className='mb-1'>React</h1>
          <h1 className='mb-1'>PostgreSQL</h1>
          <h1 className='mb-1'>Express</h1>
          <h1 className='mb-1'>Tailwind</h1>
        </div>
        <a
          className='flex flex-row justify-center items-center font-raleway hover:text-slate-500'
          href='https://main-funny-tarsier-93d7c0.netlify.app/'
          target='_blank'
        >
          <img src={link} className='w-4 h-4 mr-1' />
          <h1>
            Live Demo<span className='text-[10px] ml-1'>(features deprecated due to API fees)</span>
          </h1>
        </a>
      </div>
      <img src={travelonus} className='w-[300px] h-[150px] md:w-[400px] md:h-[200px] lg:w-[550px] lg:h-[300px]' />
    </div>
  );
}

export default TravelonusCard;
