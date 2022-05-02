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


  // let a = [1,2,3,4,5,6];
  // let b = [1,2,3,4,5,6];
  // let c = [1,2,3,4,5,6];
  // let d = [1,2,3,4,5,6];
  // let e = [1,2,3,4,5,6];
  // let f = [1,2,3,4,5,6];
  // let g = [1,2,3,4,5,6];
  // let h = [1,2,3,4,5,6];
  // let i = [1,2,3,4,5,6];
  // let j = [1,2,3,4,5,6];


  // a.push(99);
  // b.unshift(99);
  // c.pop();
  // d.shift();
  // e.splice(1,0,7,8);
  // f.splice(1,2,7,8);
  // g.toString(1,2,7,8);
  // let res = h.some((a) => a > 5);
  // let re = i.find((a) => a >1)
  // let result = Array.isArray(j)


  // console.log(a, "Add Element at lest" , "push");
  // console.log(b, "Add Eleement at first" , "unShift");
  // console.log(c, "Remove Element at last" , "pop");
  // console.log(d, "Remove Element at First" , "shift");
  // console.log(e, "Add Element at Splice Add" , "splice");
  // console.log(f, "Add Element at Splice Remove" , "splice");
  // console.log(g, "Convert Array to string" , "toString");
  // console.log(res, "Check within array return true/flase" , "some");
  // console.log(re, "Check within array return first match Element " , "find");
  // console.log(result, "Check Given Element in Array into String" , "isArray");



  const arr = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  console.log(arr.map((i) => { return i }));

  console.log(arr.filter((f) => { return f.expiry >= 2022 }));

  // const totle = 0;
  // console.log(arr.reduce((previousValue, currentValue,v) => {return v.price = totle}));
  // console.log(arr.reduce((g) => { return g.price >= 251 }));

  let a = arr.filter((f) => { return f.expiry >= 2022 });

  let ans = a.reduce((acc, d, i) => acc + d.price, 0);
  // .reduce((acc, d, i) => acc + d.price, 0);
  // function totle(total, num){
  //   return total + num;
  // }

  console.log(ans);





  return (
    <>
      <table>
        <th>
          <td>ID</td>
          <td>Name</td>
          <td>Price</td>
        </th>
        <tbody>
          {
            arr.map((d, i) => {
              return (
                <tr>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.ans}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
