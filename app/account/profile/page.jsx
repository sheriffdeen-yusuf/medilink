import React from 'react';
import Link from 'next/link';

const btnLinks = [
  {
    name: 'Breast Cancer',
    href: 'risk-assement/breast-cancer',
  },
  {
    name: 'Cardiovascular',
    href: '/risk-assement/cardiovascular',
  },
  {
    name: 'Diabetes',
    href: '/risk-assement/diabetes',
  },
  {
    name: 'Pregnancy',
    href: '/risk-assement/pregnancy',
  },
];

const Page = () => {
  return (
    <div className="flex flex-col  gap-4 ">
      {btnLinks.map((item, i) => (
        <Link href={item.href} key={i}>
          <button className="min-w-40 bg-slate-500 text-white py-2 px-4 rounded hover:bg-slaate-700 transition duration-300 ease-in-out">
            {item.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Page;
