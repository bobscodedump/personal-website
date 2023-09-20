import link from '../images/link.png';
import connect from '../images/connect.png';
import github from '../images/github.png';

function ProjectConnectCard() {
  return (
    <div className='w-screen h-96 p-5 flex justify-center items-center lg:mb-48 md:mb-80 flex-col lg:flex-row mb-96'>
      <img src={connect} className='hidden lg:block lg:w-[550px] lg:h-[400px] rounded-xl' />
      <div className='flex-col flex justify-center w-[400px] m-10'>
        <h1 className='font-libreBaskerville text-lg text-center text-blue-900'>Project Connect ❤️</h1>
        <p className='font-raleway text-sm text-center my-3 px-16'>
          Project Connect is a website that connects employers to those undergoing kidney dialysis, catering for their
          disabilities while providing upskilling opportunities. Won 2nd Runner's up at Google Developer's Student Club
          Singapore's Hack4Good Hackathon in 2022.
        </p>
        <div className='grid grid-cols-2 font-sans text-sm p-3 text-center font-semibold px-16'>
          <h1 className='mb-1'>React</h1>
          <h1 className='mb-1'>Firebase</h1>
          <h1 className='mb-1'>Tailwind</h1>
        </div>
        <div className='flex flex-row justify-evenly px-11'>
          <a
            className='flex flex-row justify-center items-center font-raleway hover:text-slate-500'
            href='https://projectconnect.netlify.app/'
            target='_blank'
          >
            <img src={link} className='w-4 h-4 mr-1' />
            <h1>Live Demo</h1>
          </a>
          <a
            className='flex flex-row justify-center items-center font-raleway hover:text-slate-500'
            href='https://github.com/bobscodedump/hack4good'
            target='_blank'
          >
            <img src={github} className='w-4 h-4 mr-1' />
            <h1>Repo</h1>
          </a>
        </div>
      </div>
      <img src={connect} className='w-[300px] h-[200px] md:w-[400px] md:h-[300px] lg:hidden rounded-xl' />
    </div>
  );
}

export default ProjectConnectCard;
