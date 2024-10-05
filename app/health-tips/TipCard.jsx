import React from 'react';
import { getStylesForAssessmentType } from '../../lib/utils';

const TipCard = ({ tip }) => {
  const styles = getStylesForAssessmentType(tip.tipType);

  const divStyles = {
    backgroundColor: styles.headerBg,
    color: styles.color,
    border: styles.color,
  };
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden my-4 w-full `}>
      <div
        style={{
          backgroundColor: divStyles.backgroundColor,
          color: divStyles.color,
        }}
        className={`p-4 flex justify-between  items-center  `}
      >
        <h2 className="text-xl font-semibold ">{tip.tipType}</h2>
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
        <p className="text-gray-700 text-base">
          <strong>Tips: </strong>
          {tip.tipContent}
        </p>
      </div>
    </div>
  );
};

export default TipCard;
