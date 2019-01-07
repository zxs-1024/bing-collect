import React from 'react';
import dayjs from 'dayjs';

function Story({ story, i }) {
  return (
    <div>
      <blockquote>
        <p>{story[`titleDescribe${i}`]}</p>
      </blockquote>
      <p>{story[`titleDescribeAu${i}`]}</p>
      <div>
        <p>
          <img src={story[`miniImage${i}`]} alt="" />
        </p>
        <p>{story[`describe${i}`]}</p>
      </div>
    </div>
  );
}

function Stories({ stories }) {
  const { title, date, Continent, Country, City } = stories;
  const placeArray = [Continent, Country, City]
    .filter(place => place)
    .join(' ');
  const storyArray = [1, 2, 3];
  return (
    <div className="post-content">
      <h1>{title}</h1>

      <div className="post-meta">
        <time>{dayjs(date).format('DD MMM YYYY')}</time>
        <span className="place">{placeArray}</span>
      </div>

      {storyArray.map(i => (
        <Story story={stories} i={i} key={i} />
      ))}
    </div>
  );
}

export default Stories;
