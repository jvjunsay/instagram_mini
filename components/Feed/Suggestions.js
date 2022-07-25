import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

function Suggestions () {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(10)].map((_, i) => ({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      companyName: faker.company.companyName(),
      id: i
    }));

    console.log(suggestions);
    setSuggestions(suggestions);
  }, []);

  return (
    <div className='mt-5 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='font-bold text-gray-500'>Suggestion For you</h3>
        <button className='text-gray-700 font-semibold'>See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          className='flex items-center justify-between mt-3'
          key={profile.id}
        >
          <img
            className='w-10 h-10 rounded-full border p-[2px]'
            src={profile.avatar}
          />
          <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-sm'>{profile.username}</h2>
            <h3 className='text-xs text-gray-400 truncate'>
              Works at {profile.companyName}
            </h3>
          </div>

          <button className='text-blue-400 text-xs font-bold'>Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
