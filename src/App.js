import "./styles.css";
import React, { useState, useEffect } from 'react';
import Tours from './Tours';
import ReactLoading from 'react-loading';

const url = 'https://course-api.com/react-tours-project';

export default function App() {
  const [isLoading, setisLoading] = useState(true);
  
  return (
    <div className="App">
      { isLoading ? <ReactLoading type={'bars'} color={'blue'} /> : <Tours /> }
    </div>
  );
};
