import React, { useState } from 'react';
import AssessementCard from './AssessementCard';
import AssessementDetail from './AssessementDetail';

const AssessementWrapper = (props) => {
  const [details, setDetails] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      {!showDetail ? (
        <div className="space-y-16">
          {props.allAssessment?.map((assessment, idx) => {
            return (
              <AssessementCard
                key={idx}
                assessment={assessment}
                setDetails={setDetails}
                setShowDetail={setShowDetail}
              />
            );
          })}
        </div>
      ) : (
        <AssessementDetail
          assessmentDetails={details}
          setShowDetail={setShowDetail}
        />
      )}
    </>
  );
};

export default AssessementWrapper;
