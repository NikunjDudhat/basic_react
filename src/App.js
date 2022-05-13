import './App.css';
import Country from './container/Country';
import CountryFun from './container/CountryFun';
import CityFun from './container/CityFun';
import City from './container/City';
import Branch from './container/Branch';
import Time from './Time/Time';
import TimeFun from './Time/TimeFun';
import { useEffect, useState } from 'react';
import Loading from './component/Loading/Loading';
import Home from './Home/Home';

const LoadingWithHome = Loading(Home)


function App() {

  const [loading, setLoading] = useState(false);
  const [data, setDate] = useState([]);

  let orgDate = [
    {id : 101, name: "Munna"},
    {id : 102, name: "Raju"}
  ]

  useEffect (
    () => {
      setLoading(true);
      setTimeout(() => { setLoading(false); setDate(orgDate)},2000);
    },[]
  )




  return (
    <>
      {/* <Country/>
      <City/>
      <CountryFun />
      <CityFun Gdp={5.8}/>
      <Branch />
      <Time/>
      <TimeFun/> */}


      <LoadingWithHome
        isLoading= {loading}
        data ={data}
      />


    </>
  );
}

export default App;
