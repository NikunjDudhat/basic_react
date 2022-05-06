import './App.css';
import Country from './container/Country';
import CountryFun from './container/CountryFun';
import CityFun from './container/CityFun';
import City from './container/City';

function App() {


  return (
    <>
      <Country/>
      <City/>
      <CountryFun />
      <CityFun Gdp={5.8}/>
    </>
  );
}

export default App;
