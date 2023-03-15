import './App.css';
import Search from './components/search/search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    console.log("searching works :DDDD");
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
