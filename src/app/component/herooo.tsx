import Image from 'next/image';
import blogimg from '../assets/blogimg.png';

const HeroSection = () => {
  return (
    <div className="w-full bg-[#62929e] text-white py-20 px-4 flex items-center justify-center h-screen">
      <div className="text-center w-full max-w-screen-md">
        <h1 className="text-[28px] sm:text-5xl font-bold leading-tight mb-4">
        Unlock the Potential of Your Ideas
        </h1>
        <p className="text-lg sm:text-xl mb-6">
        Join us on a journey of innovation and creativity. Let’s turn your vision into reality with our expert solutions.        </p>
        <button className="px-6 py-3 bg-[#a5a58d] text-white font-semibold rounded-lg hover:bg-[#c6c5b9] transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
