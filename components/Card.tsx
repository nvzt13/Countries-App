import Image from 'next/image';
import {CountryCard} from '../types/types'


export default function Card({ image, name, capital, population }: CountryCard) {
  return (
    <div className="flex flex-col justify-evenly items-center bg-[#b5b5b5] flex-wrap w-[120px] px-2">
      {image ? (
        <Image 
          width={120} 
          height={120} 
          alt={name} 
          src={image} 
          quality={100} 
        />
      ) : (
        <div className="w-[120px] h-[120px] bg-gray-300 flex items-center justify-center">
          <p>No Image</p>
        </div>
      )}
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm">Capital: {capital}</p>
      <p className="text-sm">Population: {population}</p>
    </div>
  );
}