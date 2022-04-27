import logo from './logo.svg';
import './App.css';

function App() {

  // let a  = 20;
  // {
  //   let a = 10;
  // }
  // console.log(a);


  // const a = 10;
  // {
  //   const a = 20;
  // }
  // console.log(a);


  // const value compulsory declare
  // const a;
  // {
  //   const a = 20;
  // }
  // console.log(a);

  // let a =10;
  // a=a + 2;
  // console.log(a);

  // const value can not be re-declared 
  // const a = 10;    
  // a = a +10;
  // console.log(a);

  // Arrow function

  // let arr = [1,2,3,4,5]
  // arr.map((a,i) => console.log(a, i));
  // (a,i) ==>  a for value and i for index


  // let function_name = () => {
  //   console.log("Hello");
  // }
  // function_name();
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
