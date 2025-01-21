'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredCountry } from '../redux/slice/countriesSlice';
import type { RootState } from '@/redux/store';
import { countriesData } from '../data/Data';

export default function Form() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredCountries = useSelector((state: RootState) => state.country.filteredCountries);
  const [reverseName, setReverseName] = useState(false);
  const [reverseCapital, setReverseCapital] = useState(false);
  const [reversePopulation, setReversePopulation] = useState(false);

  const sortCountriesByName = () => {
    const currentCountries = filteredCountries.length > 0 ? filteredCountries : countriesData;
    const sorted = [...currentCountries].sort((a, b) => a.name.localeCompare(b.name));
    
    const finalSorted = reverseName ?  sorted : sorted.reverse();
    dispatch(setFilteredCountry(finalSorted));
    
    setReverseName(!reverseName);
  };

  const sortCountriesByCapital = () => {
    const currentCountries = filteredCountries.length > 0 ? filteredCountries : countriesData;
    const sorted = [...currentCountries].sort((a, b) => a.capital.localeCompare(b.capital));
    
    const finalSorted = reverseCapital ? sorted.reverse() : sorted;
    dispatch(setFilteredCountry(finalSorted));
    
    setReverseCapital(!reverseCapital);
  };

  const sortCountriesByPopulation = () => {
    const currentCountries = filteredCountries.length > 0 ? filteredCountries : countriesData;
    const sorted = [...currentCountries].sort((a, b) => a.population - b.population);
    
    const finalSorted = reversePopulation ? sorted : sorted.reverse();
    dispatch(setFilteredCountry(finalSorted));
    
    setReversePopulation(!reversePopulation);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = countriesData.filter(country =>
      country.name.toLowerCase().startsWith(value.toLowerCase())
    );
    dispatch(setFilteredCountry(filtered));
  };

  return (
    <>
      <form className="mx-auto md:w-[600px] my-4 p-6 bg-gray-700 shadow-lg rounded-lg">
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Enter a country"
            className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="button"
            onClick={() => handleSearch({ target: { value: searchTerm } } as React.ChangeEvent<HTMLInputElement>)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Search Country
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <button
            type="button"
            onClick={sortCountriesByName}
            className="bg-gray-600 hover:bg-gray-500 text-gray-300 font-semibold py-2 rounded-lg transition"
          >
            Sort by Name {reverseName ? "A-Z" : "Z-A"}
          </button>
          <button
            type="button"
            onClick={sortCountriesByCapital}
            className="bg-gray-600 hover:bg-gray-500 text-gray-300 font-semibold py-2 rounded-lg transition"
          >
            Sort by Capital {reverseCapital ? "Z-A" : "A-Z"}
          </button>
          <button
            type="button"
            onClick={sortCountriesByPopulation}
            className="bg-gray-600 hover:bg-gray-500 text-gray-300 font-semibold py-2 rounded-lg transition"
          >
            Sort by population {reversePopulation ? "min" : "max"}
          </button>
        </div>
      </form>
    </>
  );
}