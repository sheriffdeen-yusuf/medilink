/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
import { Button } from '@/components/ui/button';
import { getStyles } from '@/lib/utils';
import { ExclamationCircleIcon, MapPinIcon } from '@heroicons/react/24/solid';
import {
  ArrowDownIcon,
  ExclamationTriangleIcon,
  TriangleUpIcon,
} from '@radix-ui/react-icons';
import React from 'react';

const page = (props: any) => {
  const { setShowDetail, assessmentDetails } = props;
  const styles = getStyles(assessmentDetails.result);

  const divStyles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: styles.bgc,
      borderRadius: '1rem',
      height: '16rem',
    },
    riskPosition: {
      display: 'flex',
      justifyContent: styles.pos,
      alignItems: 'center',
    },
  };

  const Icon = () => {
    if (styles.status === 'low') {
      return (
        <ExclamationCircleIcon className="h-20 w-20" color={styles.iconColor} />
      );
    }
    return (
      <ExclamationTriangleIcon className="h-20 w-20" color={styles.iconColor} />
    );
  };

  return (
    <div>
      <div className="flex justify-between mb-8">
        <Button onClick={() => setShowDetail(false)} variant="outline">
          {' '}
          &larr; Back
        </Button>

        <h1 className="font-light font-stone-700 text-xl mb-2 ">
          Your Result for: <b>{assessmentDetails.assesment_type}</b>
        </h1>
      </div>
      <div className="px-28" style={divStyles.wrapper}>
        <div className="flex justify-center items-center gap-5">
          <Icon />
          <h1 className="text-xl font-semibold text-stone-700">{styles?.text}</h1>
        </div>

        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="font-extrabold text-lg text-[#D73E3E]">HIGH RISK</h1>
            <h1 className="font-extrabold text-lg text-[#63BE7B]">LOW RISK</h1>
          </div>
          <div className="bg-gradient-to-r from-[#D73E3E] via-[#FFBB3D] to-[#63BE7B] h-4  rounded-full"></div>
          <div>
            <div style={divStyles.riskPosition} className="text-xs text-gray-700 ">
              <TriangleUpIcon className="h-10 w-10  " />
              <p>Your risk level</p>
            </div>
            <p className="text-md  text-[#A2A3A6] flex justify-center items-center mt-4">
              Based on your answers to the questionnaire
            </p>
          </div>
        </div>
      </div>

      {/* Facilities Near You */}
      <h1 className="font-semibold text-2xl mb-2 mt-24">Facilities Near You</h1>
      <div className="bg-slate-100 rounded-lg flex flex-col justify-around items-center min-h-[20rem]">
        <MapPinIcon className="h-20 w-20" />
        <p className="font-extralight text-3xl text-stone-500 ">
          Choose your area to see facilities near you
        </p>
        <Button size="lg" variant="outline">
          {' '}
          Choose Area <ArrowDownIcon className="h-6 mx-2" />{' '}
        </Button>
      </div>
    </div>
  );
};

export default page;
