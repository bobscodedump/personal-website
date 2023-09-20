import link from '../images/link.png';
import studypals from '../images/studypals.png';
import github from '../images/github.png';

function StudyPalsCard() {
  return (
    <div className='w-screen h-96 p-5 flex justify-center items-center lg:mb-48 md:mb-80 flex-col lg:flex-row mb-96'>
      <div className='flex-col flex justify-center w-[400px] m-10'>
        <h1 className='font-libreBaskerville text-lg text-center text-blue-900'>StudyPals 📖</h1>
        <p className='font-raleway text-sm text-center my-3 px-16'>
          StudyPals is an application that connects students with commons study goals. In response to the Covid-19
          pandemic where many students were studying alone, we aimed to make studying at home a less lonely experience,
          as well as matching students based on their respective strengths and weaknesses.
        </p>
        <div className='grid grid-cols-2 font-sans text-sm p-3 text-center font-semibold px-16'>
          <h1 className='mb-1'>React Native</h1>
          <h1 className='mb-1'>Firebase</h1>
        </div>
        <div className='flex flex-row justify-evenly px-11'>
          <a
            className='flex flex-row justify-center items-center font-raleway hover:text-slate-500'
            href='https://github.com/bobscodedump/LifeHack'
            target='_blank'
          >
            <img src={github} className='w-4 h-4 mr-1' />
            <h1>Repo</h1>
          </a>
        </div>
      </div>
      <img src={studypals} className='w-[100px] h-[200px] md:w-[200px] md:h-[375px] lg:w-[300px] lg:h-[550px]' />
    </div>
  );
}

export default StudyPalsCard;
