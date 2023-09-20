import desk from '../images/desk.jpg';

function About() {
  return (
    <div className='w-screen flex justify-center h-screen pt-80 -mb-48 ' id='about'>
      <img src={desk} className='hidden md:block w-[350px] h-[250px] rounded-3xl mr-5' />
      <div className='w-96'>
        <h1 className='font-libreBaskerville text-3xl text-center text-blue-900 mb-2'>About Me</h1>
        <p className='font-raleway text-xs md:text-sm text-center'>
          As a Computer Science Student of the National University of Singapore, I'm passionate about picking up new
          technologies and constantly growing my tech stack. I excel in building applications with Javascript, Java as
          well as the Dotnet Framework. As an aspiring Software Engineer and Entrepreneur, I'm constanly looking out for
          opportunity to showcase my technical and product design skills, through internships or projects. I am also a
          team player who thrives in collaborating with others to produce quality web applications.
        </p>
      </div>
    </div>
  );
}

export default About;
