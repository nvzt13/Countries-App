'use client'
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store'

import React from 'react'

const ListCard = () => {
  const filteredCountries = useSelector((state: RootState) => state.country.filteredCountries)
  return (
    <div className="flex flex-wrap justify-center gap-3 mx-auto mt-6">
    {filteredCountries.map((country, index) => (
      <Card
        key={index}
        image={country.flag}
        name={country.name}
        population={country.population}
        capital={country.capital}
      />
    ))}
  </div>
  )
}

export default ListCard
