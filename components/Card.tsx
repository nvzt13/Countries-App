import Image from 'next/image';
import { CountryCard } from '../types/types';

export default function Card({ image, name, capital, population }: CountryCard) {
  return (
    <div className="flex flex-col justify-evenly items-center bg-gray-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-[150px] p-4">
      {image ? (
        <Image 
          width={120} 
          height={120} 
          alt={name} 
          src={image} 
          quality={100} 
          className="rounded-md"
        />
      ) : (
        <div className="w-[120px] h-[120px] bg-gray-200 rounded-md flex items-center justify-center">
          <p className="text-gray-500 text-sm">No Image</p>
        </div>
      )}
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">Capital: {capital}</p>
        <p className="text-sm text-gray-600">Population: {population}</p>
      </div>
    </div>
  );
}