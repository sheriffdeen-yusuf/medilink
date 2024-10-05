/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { getStyles } from '@/lib/utils';
import { ExclamationCircleIcon, MapPinIcon } from '@heroicons/react/24/solid';
import {
  ArrowDownIcon,
  ExclamationTriangleIcon,
  TriangleUpIcon,
} from '@radix-ui/react-icons';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useGeolocation } from '@/hook/useGeoLocation';
import 'leaflet/dist/leaflet.css';

const page = (props: any) => {
  const { setShowDetail, assessmentDetails } = props;
  const styles = getStyles(assessmentDetails.result);
  const {
    error,
    isLoading,
    position: { lat, lng },
    getPosition,
  } = useGeolocation();

  const [mapVisible, setMapVisible] = useState(false); // Control map visibility
  const [mapPosition, setMapPosition] = useState<[number, number]>([
    8.7832, 34.5085,
  ]);
  const [hospitals, setHospitals] = useState<any[]>([]); // Stores nearby hospitals

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

  const handleClick = async () => {
    await getPosition(); // Get user's location
    setMapVisible(true); // Show the map
    fetchNearbyHospitals(lat, lng); // Fetch nearby hospitals
  };

  // Fetch nearby hospitals using OpenStreetMap Overpass API
  const fetchNearbyHospitals = async (latitude: number, longitude: number) => {
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="hospital"](around:70000,${latitude},${longitude});out;`;
    // const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node[amenity="hospital"];out;`;

    try {
      const response = await fetch(overpassUrl);
      const data = await response.json();
      const hospitalsData = data.elements.map((element: any) => ({
        lat: element.lat,
        lng: element.lon,
        name: element.tags.name,
      }));
      setHospitals(hospitalsData); // Update hospitals state
      console.log('hd', data);
    } catch (error) {
      console.error('Error fetching nearby hospitals:', error);
    }
  };

  useEffect(() => {
    if (lat && lng) {
      setMapPosition([lat, lng]);
    }
  }, [lat, lng]);

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

      {/* Map Section */}
      {mapVisible && (
        <div className="my-20">
          <MapContainer
            className="h-[60vh]"
            center={mapPosition}
            zoom={3}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapPosition}>
              <Popup>Your current location</Popup>
            </Marker>

            {/* Display markers for hospitals */}
            {hospitals.map((hospital, index) => (
              <Marker key={index} position={[hospital.lat, hospital.lng]}>
                <Popup>{hospital.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}

      {/* Facilities Near You */}
      {!mapVisible && (
        <div className="my-12 bg-slate-100 rounded-lg flex flex-col justify-around items-center min-h-[20rem]">
          <MapPinIcon className="h-20 w-20" />
          <p className="font-extralight text-3xl text-stone-500 ">
            Choose your area to see facilities near you
          </p>
          <Button onClick={handleClick} size="lg" variant="outline">
            Choose Area <ArrowDownIcon className="h-6 mx-2" />{' '}
          </Button>
        </div>
      )}

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {lat && lng && (
        <p>
          Your GPS position:{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}
    </div>
  );
};

export default page;
