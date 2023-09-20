import link from '../images/link.png';
import foodnotes from '../images/foodnotes.png';

function FoodnotesCard() {
  return (
    <div className='w-screen h-96 p-5 flex justify-center items-center lg:mb-48 md:mb-80 flex-col lg:flex-row mb-96'>
      <img src={foodnotes} className='hidden lg:block lg:w-[300px] mx-9' />
      <div className='flex-col flex justify-center w-[400px] m-10'>
        <h1 className='font-libreBaskerville text-lg text-center text-blue-900'>Upcoming Project - FoodNotes 🥗</h1>
        <p className='font-raleway text-sm text-center my-3 px-16'>
          Foodnotes is a platform for foodies - integrating a community-driven recipe sharing platform with a food
          review platform. It makes use of algorithms to reccomend recipes and restaurants based on your tastes, and
          allows you to save recipies from other platforms, all in one place.
        </p>
        <div className='font-sans text-sm p-3 text-center font-semibold px-16'>
          <h1 className='mb-1'>React Native</h1>
        </div>
      </div>
      <img src={foodnotes} className='w-[150px] md:w-[225px] lg:hidden mx-9' />
    </div>
  );
}

export default FoodnotesCard;
