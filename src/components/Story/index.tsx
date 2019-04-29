import * as React from 'react'

import classes from './index.module.scss'

interface StoryDetails {
  title: string
  au: string
  miniUrl: string
  describe: string
}

export interface StoryProps {
  story: StoryDetails
}

const Story: React.FC<StoryProps> = ({ story }) => {
  return (
    <div className={classes.story}>
      <blockquote>
        <p>{story.title}</p>
      </blockquote>
      <p>{story.au}</p>
      <div>
        <p>
          <img src={story.miniUrl} alt={story.title} />
        </p>
        <p>{story.describe}</p>
      </div>
    </div>
  )
}

export default Story
