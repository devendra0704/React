import data from './data.js'
import { useState } from 'react';
import Tour from './components/Tour.js'

function App() {
  const [tours,setTours]=useState(data);

  function removeTour(id){
    const newData=tours.filter( tour=> tour.id!==id)
    setTours(newData);
  }



  if(tours.length===0){
    return (
      <div className="refresh">
        <h2>sorry.....</h2>
        <button className="btnWhite" onClick={()=> setTours(data)}>refresh</button>
      </div>
    )
  }
  return (
    <div className="app">
      <Tour tours={tours} removeTour={removeTour}></Tour>
    </div>
  );
}

export default App;
