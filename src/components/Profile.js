import pic from '../images/profilepic.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import html from '../images/stack/html.png';
import java from '../images/stack/java.png';
import dotnet from '../images/stack/dotnet.png';
import react from '../images/stack/react.png';
import js from '../images/stack/js.png';
import angular from '../images/stack/angular.png';
import sql from '../images/stack/sql.png';
import firebase from '../images/stack/firebase.png';
import tailwind from '../images/stack/tailwind.svg';

function Profile() {
  return (
    <div className='h-screen flex flex-col items-center w-[800px] pt-56 -mb-24 px-5' id='home'>
      <div className='flex flex-row items-center'>
        <div className='flex flex-col w-3/5 mt-24 ml-10'>
          <h1 className='font-libreBaskerville text-lg md:text-3xl mb-3'>Full-Stack Developer 👋🏻</h1>
          <h2 className='font-raleway text-slate-800 w-40'>
            Hi, I'm Seng Kitt, a Computer Science student and an aspiring Software Engineer based in Singapore.
          </h2>
          <div className='flex flex-row mt-10'>
            <a href='https://github.com/bobscodedump' target='_blank'>
              <img src={github} className='w-10 h-10 mr-4' />
            </a>
            <a href='https://linkedin.com/in/sengkitt' target='_blank'>
              <img src={linkedin} className='w-12 h-10' />
            </a>
          </div>
        </div>
        <img src={pic} className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] m-5' />
      </div>
      <div className='mt-10 flex flex-row items-center'>
        <h1 className='font-libreBaskerville mr-10 hidden md:block'>Tech Stack</h1>
        <div className='w-[2px] h-[30px] bg-slate-400 hidden md:block'></div>
        <div className='grid grid-cols-5 ml-20 md:flex md:flex-row items-center'>
          <img src={html} className='w-8 h-8 mx-4 my-2' />
          <img src={tailwind} className='w-10 mx-3 my-2' />
          <img src={js} className='w-8 mx-3 my-2' />
          <img src={java} className='w-16 -mx-1 my-2' />
          <img src={dotnet} className='w-8 h-8 mx-4 my-2' />
          <img src={react} className='w-9 h-8 mx-4 my-2' />
          <img src={angular} className='w-10 mx-3 my-2' />
          <img src={sql} className='w-16 mx-3 mt-0.5 my-2' />
          <img src={firebase} className='w-7 mx-3 mt-0.5 my-2' />
        </div>
      </div>
    </div>
  );
}

export default Profile;
