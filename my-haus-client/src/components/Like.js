import React from 'react';

const Like = (props) => {
  return (
    <div>
    {props.like}
    <button onClick={() => props.handleLike(props.listing)}>Like</button>
    <button onClick={() => props.handleDislike(props.listing)}>Dislike</button>
    </div>
  )
}

export default Like;
