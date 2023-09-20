function Contact() {
  return (
    <div id='contact' className='w-screen flex flex-col justify-center mb-96'>
      <h1 className='self-center mb-10 font-libreBaskerville text-3xl text-blue-900'>Contact Me! 👇🏻</h1>
      <div className='flex flex-col sm:flex-row items-center self-center'>
        <h1 className='font-dmSans text-xl mx-10'>📍 Singapore</h1>
        <h1
          onClick={() => {
            navigator.clipboard.writeText('leesengkittkitt@gmail.com');
            alert('Copied to Clipboard!');
          }}
          className='font-dmSans text-xl mx-10 hover:cursor-pointer hover:text-slate-500'
        >
          📧 leesengkittkitt@gmail.com
        </h1>
      </div>
    </div>
  );
}

export default Contact;
