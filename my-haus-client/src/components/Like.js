import React from 'react';

const Like = (props) => {
  return (
    <div>
    {props.like}
    <button onClick={props.handleLike}>Like</button>
    <button onClick={props.handleDislike}>Dislike</button>
    </div>
  )
}

export default Like;
