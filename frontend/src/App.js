import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

// Unsplash API key
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    // Avoinding browser to reload
    e.preventDefault();
    // Fetching word random image from Splash
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images]);
        console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
    // Set word to '' (cleaning the input)
    setWord('');
  };

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
