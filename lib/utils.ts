/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { riskType, riskStatus } from './types';
import { assessementTypes } from '@/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStyles = (status: string) => {
  switch (status) {
    case riskStatus.LOW:
      return {
        status: 'low',
        bgc: '#63BE7B1A',
        pos: 'right',
        iconColor: '#63BE7B',
        text: 'Low risk. Report symptoms in your next vist',
      };
    case riskStatus.MEDIUM:
      return {
        status: 'medium',
        bgc: '#FFBB3D1A',
        pos: 'center',
        iconColor: '#FFBB3D',
        text: 'Medium risk. Consult a healthcare provider for advice on managing your risk within 10 days',
      };
    case riskStatus.HIGH:
      return {
        status: 'high',
        bgc: '#FF57221A',
        pos: 'left',
        iconColor: '#D73E3E',
        text: 'High risk. Consult a healthcare provider for immediate attention with 2-5 days ',
      };
    default:
      return {
        status: '',
        bgc: '#',
        pos: '',
        iconColor: '#',
        text: '',
      };
  }
};

export const getStylesForAssessmentType = (type: string) => {
  switch (type) {
    case riskType.PREGNANCY_RISK:
      return {
        headerBg: '#FFDEE9',
        color: '#FF77A9',
      };
    case riskType.DIABETES_DISEASE:
      return {
        headerBg: '#FFE6C4',
        color: '#FF8B00',
      };
    case riskType.CARDIOVASCULAR_DISEASE:
      return {
        headerBg: '#DFF3FC',
        color: '#2A9DF4',
      };
    case riskType.BREAST_CANCER:
      return {
        headerBg: '#FFEAF6',
        color: '#FF66CC',
      };
    default:
      return {
        headerBg: '#F0F4F8',
        color: '#C1C7D0',
      };
  }
};

export const getTakenAssessmentByUser = (userData: any) => {
  const AllTakenAssessment = [];
  for (let i = 0; i < assessementTypes.length; i++) {
    if (userData[assessementTypes[i]].length > 0) {
      userData[assessementTypes[i]].forEach((element) => {
        AllTakenAssessment.push(element);
      });
    }
  }

  return AllTakenAssessment;
};

export function logout() {
  localStorage.removeItem('medilinkToken');
  localStorage.removeItem('medilinkUser');
  window.location.href = '/login';
}
