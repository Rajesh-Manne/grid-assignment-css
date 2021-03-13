import React from 'react';
import './App.css';
import Gallery from './components/Gallery'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const [results,setResult] = React.useState([]);
 
 const fetchImages = async ()=> {
  fetch('https://reqres.in/api/users/')
  .then(response => response.json())
  .then(data => setResult(data.data));
}
  
React.useEffect(() => {
  fetchImages();
}, [])
  return (
    <div className="App">
    
        <Gallery results={results} />
        

    </div>
  );
}

export default App;
