import Image from 'next/image'

export default function Card ({image, name, capital, population}) {
  return (
    <div>
      <Image width={80} height={80} alt="image"
      src={image}/>
      <p>{name}</p>
      <p>{capital}</p>
      <p>{population}</p>
    </div>
    )
}