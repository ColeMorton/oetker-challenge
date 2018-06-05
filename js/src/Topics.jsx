import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { getRandomNumber } from './utils';
import '../../css/topics.css';

const data = [
  {
    title: 'HTML Techniques',
    numOfPosts: 4
  },
  {
    title: 'CSS Styling',
    numOfPosts: 32
  },
  {
    title: 'Flash Tutorials',
    numOfPosts: 2
  },
  {
    title: 'Web Miscellaneous',
    numOfPosts: 19
  },
  {
    title: 'Site News',
    numOfPosts: 6
  },
  {
    title: 'Web Development',
    numOfPosts: 8
  }
];

const Topics = () => {
  const numOfTopicsToDisplay = getRandomNumber(data.length, 1);
  const topics = data.slice(0, numOfTopicsToDisplay);
  return (
    <section>
      <CSSTransitionGroup
        transitionName="topics"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <ul>
          {
            topics.map((topic, index) => (
              <li key={topic.title}>
                  <span>{ topic.title }</span>
                  <span className="topic__posts">{ topic.numOfPosts } POSTS</span>
                  { index < topics.length - 1 && <hr /> }
              </li>
            ))
          }
        </ul>
      </CSSTransitionGroup>
    </section>
  );
};

export default Topics;
