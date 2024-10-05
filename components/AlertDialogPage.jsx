import { CircleX } from 'lucide-react';
import { Button } from '../components/ui/button';

import React, { useState } from 'react';
import { secureAxiosInstance } from '@/services/axios';
import Toast from '@/lib/Toast';

const AlertDialogPage = (props) => {
  const [deleting, setDeleting] = useState(false);
  let type = props.type.startsWith('Preg')
    ? 'pregnancy'
    : props.type.startsWith('Diab')
    ? 'diabetes'
    : props.type.startsWith('Card')
    ? 'cardiovascular'
    : 'breastCancer';

  const handleDelete = (id) => {
    setDeleting(true);
    secureAxiosInstance
      .delete(`/takenAssessment/${type}/${id}`)
      .then((response) => {
        Toast.fire({
          icon: 'success',
          title: response?.data?.message || 'Deleted successfully!',
          background: '#D84646',
        });
        setDeleting(false);
        props.setShowAlert(false);
        // console.log(response.data);
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: error?.response?.data?.message || error?.message,
          background: '#D84646',
        });
        console.error(error);
      })
      .finally(() => {
        setDeleting(false);
        props.setShowAlert(false);
      });
  };
  return (
    <div className="fixed  inset-0 z-50 overflow-y-auto mx-auto h-screen backdrop-blur-sm">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40  "></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-md shadow-lg ">
          <div className="flex items-center w-full justify-between mb-2">
            <h1 className="text-main text-2xl font-semibold">{props.title}</h1>
            <Button size="icon" onClick={() => props.setShowAlert(false)}>
              <CircleX color="red" />
            </Button>
          </div>

          <div className="text-stone-800 text-center flex flex-col shadow-inner gap-4 border rounded-sm p-4">
            <h1>Are You Sure you want to delete this assessement ?</h1>
            <div className="flex justify-center space-x-4">
              <button
                disabled={deleting}
                onClick={() => handleDelete(props.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
              >
                Yes
              </button>
              <button
                onClick={() => props.setShowAlert(false)}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200 ease-in-out"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertDialogPage;
