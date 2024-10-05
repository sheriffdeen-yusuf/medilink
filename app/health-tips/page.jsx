import React from 'react';
import { tipsArray } from '@/constants';
import TipCard from './TipCard';

const page = () => {
  return (
    <div className="mx-auto max-w-5xl mb-24">
      <h1 className="text-4xl font-semibold my-14">Health Tips</h1>
      <div className="space-y-6">
        {tipsArray.map((tip, _idx) => (
          <TipCard key={_idx} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default page;
