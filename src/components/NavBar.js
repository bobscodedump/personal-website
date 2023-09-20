function NavBar() {
  return (
    <div className='w-screen flex justify-between p-3 font-dmSans py-5 fixed bg-seaBlue text-white'>
      <a href='#home' className='text-xl ml-10'>
        Seng Kitt's Personal Website
      </a>
      <div className='flex flex-row mr-10'>
        <a href='#about' className='mx-3'>
          About
        </a>
        <a href='#projects' className='mx-3'>
          Projects
        </a>
        <a href='#contact' className='mx-3'>
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
