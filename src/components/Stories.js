import React from 'react';
import dayjs from 'dayjs';

function Story({ story, i }) {
  return (
    <div>
      <blockquote>
        <p>{story.title}</p>
      </blockquote>
      <p>{story.au}</p>
      <div>
        <p>
          <img src={story.miniUrl} alt="" />
        </p>
        <p>{story.describe}</p>
      </div>
    </div>
  );
}

function Stories({ stories }) {
  const { title, date, story = [], Continent, Country, City } = stories;
  const placeArray = [Continent, Country, City]
    .filter(place => place)
    .join(' ');
  return (
    <div className="post-content">
      <h1>{title}</h1>

      <div className="post-meta-story">
        <time>{dayjs(date).format('DD MMM YYYY')}</time>
        <span className="place">{placeArray}</span>
      </div>

      {story.map((item, i) => (
        <Story story={item} i={i} key={i} />
      ))}
    </div>
  );
}

export default Stories;
