import './App.css';
import Search from './components/search/search';
import CurrenntWeather from './components/current-weather/current-weather';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    console.log("searching works :DDDD");
  }

  return (
    <div className="container">
      <header>Agro weather app</header>
      <div className="image-section">
        <Search className="searchbar" onSearchChange={handleOnSearchChange}/>
        <CurrenntWeather/>
      </div>
      <div className="footer">
        <footer>This is the footer section</footer>
      </div>
    </div>
  );
}

export default App;
