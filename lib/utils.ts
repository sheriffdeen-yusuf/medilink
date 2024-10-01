import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStyles = (status: string) => {
  switch (status) {
    case 'Low':
      return {
        status: 'low',
        bgc: '#63BE7B1A',
        pos: 'right',
        iconColor: '#63BE7B',
        text: 'Low risk. Report symptoms in your next Pregnacy Vist',
      };
    case 'Medium':
      return {
        status: 'medium',
        bgc: '#FFBB3D1A',
        pos: 'center',
        iconColor: '#FFBB3D',
        text: 'Medium risk. Consult a healthcare provider for advice on managing your risk within 10 days',
      };
    case 'High':
      return {
        status: 'high',
        bgc: '#FF57221A',
        pos: 'left',
        iconColor: '#D73E3E',
        text: 'High risk. Consult a healthcare provider for immediate attention with 2-5 days ',
      };
    default:
      // return "Invalid Status";'
      return {
        status: '',
        bgc: '#',
        pos: '',
        iconColor: '#',
        text: '',
      };
  }
};

export function logout() {
  localStorage.removeItem('medilinkToken');
  localStorage.removeItem('medilinkUser');
  window.location.href = '/login';
}
