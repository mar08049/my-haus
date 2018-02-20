import React from 'react';

const Like = (props) => {
  return (
    <div>
    <p>Likes: {props.listing.like}</p>
    <button onClick={() => props.handleLike(props.listing)}>Like</button>
    </div>
  )
}

export default Like;
