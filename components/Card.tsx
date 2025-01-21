import Image from 'next/image'

export default function Card ({image, name, capital, population}) {
  return (
    <div className="flex flex-col justify-evenly items-center bg-[#b5b5b5] flex-wrap w-[120px] px-2">
      <Image width={120} height={120} alt="image"
      src={image}/>
      <bold>
      <p>Name: {name}</p>
      </bold>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
    </div>
    )
}