import React from 'react';
import { useRouter } from 'next/router'; 

const Home = () => {
  const router = useRouter(); 

  const handleLogout = () => {
    router.push('/'); 
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("https://www.freevector.com/uploads/vector/preview/18881/06-01.jpg")` }}>
      <div className="w-full max-w-md bg-pink-100 rounded-lg shadow-lg p-8 dark:bg-gray-800">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-pink-700 md:text-2xl dark:text-pink-300 mb-10">Welcome, Lovely User!</h1>
        <img src="https://www.1800flowers.com/blog/wp-content/uploads/2023/06/pink-flowers-dahlia-1024x576.jpg" alt="Decorative Flowers" className="w-24 h-24 mb-6" />
        <button onClick={handleLogout} className="w-full bg-pink-600 hover:bg-pink-800 focus:outline-none 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white mt-4">
          Logout
        </button>
      </div>
    </section>
  );
};

export default Home;
