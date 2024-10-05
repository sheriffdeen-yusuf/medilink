'use client';
import { Trash2, View } from 'lucide-react';
import React, { useState } from 'react';
import { getStylesForAssessmentType } from '@/lib/utils';
import { formatTime } from '@/lib/formatter';
import AlertDialogPage from '../../../components/AlertDialogPage';

const AssessementCard = ({ assessment, setDetails, setShowDetail }) => {
  const [showAlert, setShowAlert] = useState(false);

  const styles = getStylesForAssessmentType(assessment.assesment_type);

  const divStyles = {
    backgroundColor: styles.headerBg,
    color: styles.color,
    border: styles.color,
  };

  const handleShowDetails = (data) => {
    setShowDetail(true);
    setDetails(data);
  };

  return (
    <>
      <div className={`bg-white shadow-lg rounded-lg overflow-hidden my-4 `}>
        <div
          style={{
            backgroundColor: divStyles.backgroundColor,
            color: divStyles.color,
          }}
          className={`p-4 flex justify-between  items-center  `}
        >
          <h2 className="text-xl font-semibold ">{assessment.assesment_type}</h2>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => handleShowDetails(assessment)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-150"
            >
              <View className="h-6 w-6" />
            </button>
            <button
              onClick={() => setShowAlert(true)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-150"
            >
              <Trash2 className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div
          style={{
            borderBottom: `1px solid ${divStyles.border}`,
            borderLeft: `1px solid ${divStyles.border}`,
            borderRight: `1px solid ${divStyles.border}`,
            borderRadius: '10px',
          }}
          className="p-4"
        >
          <p className="text-gray-600 text-base">
            <strong>Result: </strong>
            {assessment.result}
          </p>
          <p className="text-gray-600 text-base">
            <strong>Taken On: </strong>
            {formatTime(assessment?.createdAt)}
          </p>
        </div>
      </div>
      {showAlert && (
        <AlertDialogPage
          title={'Delete Assessment'}
          id={assessment._id}
          type={assessment.assesment_type}
          setShowAlert={setShowAlert}
        />
      )}
    </>
  );
};

export default AssessementCard;
