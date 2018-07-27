const array = [1, 2, 3];

const newArray = array.map((item) => {
  return item ** 2;
})

console.log(newArray)

const [a, ,b] = ['hola', 2, 'mundo']

console.log(`${a} - ${b}`)

const { hola, num } = { 
  hola: 'hola mundo :)', 
  num: 2018 
}

console.log(`${hola} -> número ${num}`)

// Component react
const HelloWorld = (props) => {
  return (
    <div>
      <h4>Hello world! :)</h4>
      <p>{props.name}</p>
    </div>
  )
}


const app = document.getElementById('app');

ReactDOM.render(<HelloWorld name='John Serrano' />, app);

// Async/Await
const resolveAfter2Seconds = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

// async function asyncCall() {
//   console.log('calling');
//   var result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

const asyncCall = async () => {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
