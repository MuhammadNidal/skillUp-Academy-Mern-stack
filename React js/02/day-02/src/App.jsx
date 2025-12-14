import "./App.css";

// function App() {
//   return (
//     <>
//       <h1>this is muhammad nidal</h1>
//     </>
//   );
// }

// export default App;

const name = "skillUPAcademy";
const a = 2;
const b = 6;
const islogin = true;
const show = true;

const students = [
  "kmarna",
  "kaka",
  "aaaaaaa",
  "fffffffffffffa",
  "ffffffffdddddddddd",
  "ddwwww",
  "wddddddd",
];

function App() {
  return (
    <>
      <div className="BOX">
        <h1>Our academy name is {name}</h1>
        <h1>the sum is {a + b}</h1>
        <h1>the sum is {a - b}</h1>
        <h1>the sum is {a * b}</h1>
        <h1>the sum is {a % b}</h1>
      </div>
      <div>
        <p>
          this is jsx rule if we are using the multiple div return at a time so
          we will need to use the fragment
        </p>
      </div>

      <div>{islogin ? "welcome muhammad nidal" : "please login"}</div>
      <div>{show && <p>This is visible</p>}</div>
      <div>
        <ul>
          {students.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default App;
