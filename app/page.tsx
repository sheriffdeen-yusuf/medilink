'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import bg from './public/download.png';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const Page = () => {
  const [selectedAssessment, setSelectedAssessment] = useState('');
  const handleSelectChange = (value: any) => {
    setSelectedAssessment(value);
  };

  return (
    <main className="">
      <Image
        src={bg}
        fill
        alt="telemedcine docs"
        className="w-full h-full object-cover object-center"
        placeholder="blur"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-100">
            Welcome to MediLink
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-bold italic text-red-100">
            Bridging Care and Convenience{' '}
          </p>
          <div className="mt-4 flex justify-center gap-4 items-center ">
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[280px] py-6 px-6 bg-slate-50">
                <SelectValue placeholder="Select a assesment" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Assesment Type</SelectLabel>
                  <SelectItem value="breast-cancer">Breast Cancer</SelectItem>
                  <SelectItem value="cardiovascular">Cardiovascular</SelectItem>
                  <SelectItem value="diabetes">Diabetes</SelectItem>
                  <SelectItem value="hypertension">Hypertension</SelectItem>
                  <SelectItem value="malaria">Malaria</SelectItem>
                  <SelectItem value="pregnancy">Pregnancy</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              disabled={selectedAssessment === ''}
              className={`bg-[#F81E46] py-6 px-8 hover:bg-[#F81E46]/90 ${
                selectedAssessment === '' ? 'cursor-not-allowed bg-[#F81E46]/80' : ''
              }`}
            >
              <Link href={`risk-assement/${selectedAssessment}`}>
                Start Assesment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
