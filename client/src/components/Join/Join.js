import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  // how to declare hooks
  // first param = variable
  // second function is setterFunction
  // equal to usestate and pass in initial value
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder=""
            className="joinInput"
            type="text"
            onChange={e => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            placeholder=""
            className="joinInput mt-20"
            type="text"
            onChange={e => setRoom(e.target.value)}
          ></input>
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
