'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Lock, Mail } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { axiosInstance } from '../../services/axios';
import { PulseLoader } from 'react-spinners';
import Toast from '@/lib/Toast';
import { useRouter } from 'next/navigation';
import Pic1 from '../../app/public/pic1.png';
import { rolesRoute } from '@/constants/index';

const Page = () => {
  const initialInput = {
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

  const handleSubmit = async () => {
    const payload = {
      ...input,
      role: 'user',
    };

    try {
      setIsLoading(true);

      if (!input.email || !input.password) throw new Error('All Field are required');

      const response = await axiosInstance.post('/auth/login', payload);
      Toast.fire({
        icon: 'success',
        title: response?.data?.message,
        background: '#008000',
      });

      // console.log("User signed up successfully:", response.data);
      const { token, user } = response.data.payload;
      localStorage.setItem('medilinkToken', token);
      localStorage.setItem('medilinkUser', JSON.stringify(user));

      // return;
      let path = await response?.data?.payload?.user?.role;
      if (!path) return;

      router.push(rolesRoute[path]);

      // localStorage.setItem("token", response.data.token);
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: error?.response?.data?.message || error?.message,
        background: '#D84646',
      });
      console.error('Error signing up:', error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mx-auto  mt-6 w-[75%] mb-36">
        <Link href="/">
          <Button size="sm" variant="outline" className="mb-4">
            <ChevronLeft className="inline-block" />
            Back
          </Button>
        </Link>
        <div className="min-h-[28rem] w-full grid grid-cols-2 shadow-2xl ">
          <div className="relative h-full w-full">
            <Image
              src={Pic1}
              placeholder="blur"
              alt="property-image"
              fill
              className="absolute inset-0 object-cover"
            />
          </div>
          <div className="bg-slate-100 dark:bg-stone-900">
            <div className=" px-10 py-4 ">
              <h1 className="text-2xl font-semibold capitalize text-center">
                Login
              </h1>

              <form>
                <div className=" mb-8">
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="relative">
                    <Input
                      className=" mt-2 focus:ring-main focus:border-main block w-full shadow-sm rounded-md border-gray-300  px-10 py-4 "
                      type="email"
                      name="email"
                      value={input.email}
                      onChange={handleChange}
                      placeholder="JohnDoe@gmail.com"
                    />
                    <Mail
                      color="#075985"
                      className="inline-block absolute top-1 left-2 "
                    />
                  </div>
                </div>
                <div className=" mb-8">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      className=" mt-2 focus:ring-main focus:border-main block w-full shadow-sm rounded-md border-gray-300  px-10 py-4 "
                      type="password"
                      placeholder="*********"
                      name="password"
                      value={input.password}
                      onChange={handleChange}
                    />
                    <Lock
                      color="#075985"
                      className="inline-block absolute top-1 left-2 "
                    />
                  </div>
                </div>
              </form>

              <div className="flex justify-center items-center mb-6">
                <Button onClick={handleSubmit} variant="default" size="lg">
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
                    'Login'
                  )}
                </Button>
              </div>

              {/* form footer text */}
              <div className="text-center my-4">
                <p className="text-sm">
                  Don&apos;t have an account ?{' '}
                  <Link
                    href="/register"
                    className="inline-block text-main  hover:underline"
                  >
                    Register
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
