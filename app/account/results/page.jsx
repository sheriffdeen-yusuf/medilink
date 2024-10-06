'use client';
import { getTakenAssessmentByUser } from '@/lib/utils';
import { secureAxiosInstance } from '@/services/axios';
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import AssessementWrapper from './AssessementWrapper';

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allAssessment, setAllAssessment] = useState([]);

  useEffect(() => {
    const fetchProperties = () => {
      setIsLoading(true);
      secureAxiosInstance
        .get(`/users/me`)
        .then((response) => {
          const data = getTakenAssessmentByUser(response?.data?.payload?.user);
          // console.log(response?.data?.payload);
          setAllAssessment(data.reverse());
          setIsLoading(false);
        })
        .catch((error) => {
          Toast.fire({
            icon: 'error',
            title: error?.response?.data?.message || error?.message,
            background: '#D84646',
          });
          console.error(error);
        })
        .finally(() => setIsLoading(false));
    };
    fetchProperties();
  }, []);
  return (
    <div>
      <h1 className="text-2xl text-stone-700 font-semibold mb-12">
        All Assesment Taken
      </h1>
      {isLoading ? (
        <PulseLoader
          color="#567dbb"
          loading={isLoading}
          height={15}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : allAssessment?.length === 0 ? (
        <h1>You have not taken any assessment yet! </h1>
      ) : (
        <AssessementWrapper allAssessment={allAssessment} />
      )}
    </div>
  );
};

export default Page;
