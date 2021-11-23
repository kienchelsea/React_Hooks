import { useState } from 'react';



// function App() {
//   const [counter, setCounter] = useState(() => {
//     const total = orders.reduce((total, cur) => total + cur);
//     console.log(total)
//     return total;
//   })

//   const Increase = () => {
//     setCounter(prevState => prevState + 1)
//   }
//   return (
//     <div className="App">
//       <h1>{counter}</h1>
//       <button onClick={Increase}>Tăng</button>
//     </div>
//   );
// }
// function App() {
//   const [info, setInfo] = useState({
//     name: 'Le Trung Kien',
//     age: 20,
//     hobby: 'football, Chelsea'
//   })

//   const Increase = () => {
//     setInfo({
//       ...info,
//       bio: 'Yeu Kante'
//     })
//   }
//   return (
//     <div className="App">
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={Increase}>Update</button>
//     </div>
//   );
// }


// const gifts = [
//   'Kem',
//   'Rice',
//   'Bread',
// ]
// function App() {
//   const [gift, setGift] = useState()

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)

//     setGift(gifts[index])
//   }
//   return (
//     <div style={{ padding: 32 }}>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGift}>Lấy Thưởng</button>
//     </div>
//  )
// }


const courses = [
  {
    id: 1,
    name: 'Html, Css'
  },
  {
    id: 2,
    name: 'JavaScript'
  },
  {
    id: 3,
    name: 'Hooks'
  }
]

function App() {
  const [checked, setChecked] = useState()
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  const subMit = () => {
    console.log({ id: checked })
  }


  // console.log(name)
  return (

    <div style={{ padding: 32 }}>

      {/* <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input style={{ display: 'block' }}
        value={email}
        onChange={e => setEmail(e.target.value)}
      /> */}
      {courses.map(course => (
        <div key={course.id}>
          <input type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={subMit}>Register</button>
    </div>

  )

}
export default App;
