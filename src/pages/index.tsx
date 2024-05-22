import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi'; 
import Link from 'next/link';
import { useRouter } from 'next/router';

type FormData = {
  email: string;
  password: string;
};

const Index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push('/home');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("https://www.freevector.com/uploads/vector/preview/18881/06-01.jpg")` }}>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-pink-700 md:text-2xl dark:text-pink-300 mb-10">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-pink-700 dark:text-pink-300">Email Address</label>
            <input type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className={`w-full bg-pink-50 border border-pink-300 text-pink-700 sm:text-sm rounded-lg focus:ring-pink-600 
              focus:border-pink-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-pink-300 dark:focus:ring-pink-500 
              dark:focus:border-pink-500 ${errors.email && 'border-red-500'}`}
              placeholder="name@gmail.com" required />
            {errors.email && <p className="text-sm text-red-500 mt-1">Valid email is required</p>}
          </div>
          <div className="relative">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-pink-700 dark:text-pink-300">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password', { required: true, minLength: 8 })}
              placeholder="••••••••"
              className={`bg-pink-50 border border-pink-300 text-pink-700 sm:text-sm rounded-lg focus:ring-pink-600 
              focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-pink-400 
              dark:text-pink-300 dark:focus:ring-pink-500 dark:focus:border-pink-500 ${errors.password && 'border-red-500'}`}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <HiEyeOff className="text-pink-400 mt-6" /> : <HiEye className="text-pink-400 mt-6" />}
            </button>
          </div>
          {errors.password && <p className="text-sm text-red-500 mt-1">Password must be at least minimum of 8 characters</p>}
          <button type="submit" className="w-full bg-pink-600 hover:bg-pink-800 focus:outline-none 
           font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-pink-600 
          dark:hover:bg-pink-800">
            Log In
          </button>
          <p className="text-sm text-pink-500 dark:text-pink-400 mt-2 text-center">
            Don't have an account?{' '}
            <Link href="/signup"
              className="font-medium text-black hover:underline dark:text-black">Signup
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};


export default Index;
