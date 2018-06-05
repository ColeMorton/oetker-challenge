import React from 'react';
import { getRandomNumber } from './utils';
import image1 from '../../img/1.jpeg';
import image2 from '../../img/2.jpeg';
import image3 from '../../img/3.jpeg';
import image4 from '../../img/4.jpeg';
import image5 from '../../img/5.jpeg';
import image6 from '../../img/6.jpeg';
import image7 from '../../img/7.jpeg';
import '../../css/archives.css';

const images = [ image1, image2, image3, image4, image5, image6, image7 ];
const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
  'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident,',
  'sunt in culpa qui officia deserunt mollit anim id est laborum.'
];

const Archives = () => {
  const MAX_ENTRIES = 7;
  const createEntry = () => ({
    image: images[getRandomNumber(images.length, 0)],
    description: descriptions[getRandomNumber(descriptions.length, 0)]
  });
  const entries = [...Array(MAX_ENTRIES)].map(createEntry);
  return (
    <section>
      <ul>
        {
          entries.map((entry, index) => (
            <li key={index}>
              <div className="archives__entry">
                <span><img src={entry.image} alt={`entry-${index}`} /></span>
                <span>{ entry.description }</span>
              </div>
              { index < entries.length - 1 && <hr /> }
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Archives;
