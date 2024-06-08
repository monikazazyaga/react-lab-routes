import React, { useState } from 'react';

const Home = ({ setUserId }) => {
  const [id, setId] = useState('');

  const handleClick = () => {
    setUserId(id);
    // Your redirection logic here
  };

  return (
    <div>
      <label htmlFor="idInput">Enter ID:</label>
      <input type="text" id="idInput" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Home;