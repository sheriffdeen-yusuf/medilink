'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Toast from '@/lib/Toast';
import { ChevronLeft, Lock, Mail, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Bg from '../../app/public/bg.png';
import { axiosInstance } from '../../services/axios';
import { PulseLoader } from 'react-spinners';

const Page = () => {
  const initialInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const [input, setInput] = useState(initialInput);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...input,
      role: 'user',
    };
    console.log('input', payload);

    setIsLoading(true);
    axiosInstance
      .post(`/auth/signup/`, payload)
      .then((response) => {
        Toast.fire({
          icon: 'success',
          title: response?.data?.message,
          background: '#008000',
        });
        // console.log("User signed up successfully:", response.data);
        router.push('/login');
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: error?.response?.data?.message || error?.message,
          background: '#D84646',
        });
        console.error('Error signing up:', error);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <div className="mx-auto  mt-6 w-[75%] pb-30 overflow-x-auto">
        <Link href="/">
          <Button size="sm" variant="outline" className="mb-4">
            <ChevronLeft className="inline-block" />
            Back
          </Button>
        </Link>
        <div className="min-h-[28rem] w-full grid grid-cols-1 md:grid-cols-2  shadow-2xl transition-all duration-300 ">
          <div className="hidden md:block relative h-full w-full">
            <Image
              src={Bg}
              alt="bg 1"
              fill
              placeholder="blur"
              className="absolute inset-0 object-cover"
            />
          </div>
          <div className="bg-slate-100 dark:bg-stone-900">
            <div className=" md:px-10 md:py-4 p-4 ">
              <h1 className="text-2xl font-semibold capitalize text-center">
                Resgister
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="relative">
                    <Input
                      className=" mt-2 focus:ring-main focus:border-main block w-full shadow-sm rounded-md border-gray-300  px-10 py-4 "
                      type="text"
                      name="firstName"
                      value={input.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                    <User
                      color="#075985"
                      className="inline-block absolute top-1 left-2 "
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="relative">
                    <Input
                      className=" mt-2 focus:ring-main focus:border-main block w-full shadow-sm rounded-md border-gray-300  px-10 py-4 "
                      type="text"
                      name="lastName"
                      value={input.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                    <User
                      color="#075985"
                      className="inline-block absolute top-1 left-2 "
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="relative">
                    <Input
                      className=" mt-2 focus:ring-main focus:border-main block w-full shadow-sm rounded-md border-gray-300  px-10 py-4 "
                      type="email"
                      name="email"
                      value={input.email}
                      onChange={handleChange}
                      placeholder="JohnDoe@gmail.com"
                      required
                    />
                    <Mail
                      color="#075985"
                      className="inline-block absolute top-1 left-2 "
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="relative">
                    <Input
                      className=" mt-2 focus:ring-main focus:border-main block w-full shadow-sm rounded-md border-gray-300  px-10 py-4 "
                      type="password"
                      name="password"
                      value={input.password}
                      onChange={handleChange}
                      placeholder="*********"
                      required
                    />
                    <Lock
                      color="#075985"
                      className="inline-block absolute top-1 left-2 "
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center mb-6">
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    variant="default"
                    size="lg"
                  >
                    {isLoading ? (
                      <PulseLoader
                        color="#fff"
                        loading={isLoading}
                        height={6}
                        size={6}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    ) : (
                      'Register'
                    )}
                  </Button>
                </div>
              </form>

              {/* form footer text */}
              <div className="text-center my-4">
                <p className="text-sm">
                  Already have an account ?{' '}
                  <Link
                    href="/login"
                    className="inline-block text-main  hover:underline"
                  >
                    Login
                  </Link>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
