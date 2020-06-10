// eslint-disable-next-line max-len
/* eslint-disable react/prop-types,react/no-array-index-key,jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';

function Posts(props) {
  return (
    <ul>
      {props.posts.map((post, i) => (
        <li key={i}>
          <a onClick={() => props.onClickHandler(i)}>
            {post.title}
          </a>
          {props.activePost === i ? (
            <div
              style={{ marginBottom: 15 }}
              dangerouslySetInnerHTML={{
                __html: post.body,
              }}
            />
          ) : (
            <div />
          )}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
