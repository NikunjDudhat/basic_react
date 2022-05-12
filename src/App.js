import './App.css';
import Country from './container/Country';
import CountryFun from './container/CountryFun';
import CityFun from './container/CityFun';
import City from './container/City';
import Branch from './container/Branch';
import Time from './Time/Time';
import TimeFun from './Time/TimeFun';

function App() {


  return (
    <>
      {/* <Country/>
      <City/>
      <CountryFun />
      <CityFun Gdp={5.8}/>
      <Branch /> */}
      <Time/>
      <TimeFun/>
    </>
  );
}

export default App;
