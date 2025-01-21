'use client';
import { useState } from 'react';
import { countriesData } from '../data/Data';
import Card from '../components/Card';

export default function Form() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countriesData);

  // Arama terimini güncelle ve ülkeleri filtrele
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = countriesData.filter(country =>
      country.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  // Filtrelenen ülkeleri Card bileşeninde göster
  return (
    <>
      <form className="mx-auto md:w-[600px] my-4 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Enter a country"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Search Country
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg transition">
            Name
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg transition">
            Capital
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg transition">
            Population
          </button>
        </div>
      </form>

      <div className="flex flex-wrap justify-center  gap-3 mx-auto mt-6">
  {filteredCountries.map((country) => (
    <Card
      key={country.population}
      image={country.flag}
      name={country.name}
      population={country.population}
      capital={country.capital}
    />
  ))}
</div>
    </>
  );
}