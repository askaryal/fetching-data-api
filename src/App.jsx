//import useFetch from './useFetch'
import {Suspense} from 'react'
import {fetchData} from './fetchData'
import './App.css'

const apiData = fetchData("https://jsonplaceholder.typicode.com/users")

function App() {
  //const {data, loading, error, handleCancelRequest} = useFetch("https://jsonplaceholder.typicode.com/users")  
  const data = apiData.read();

  return (
     
      <div className="App">
        <h1>Fetch item</h1>
        <Suspense callback={ <div> loading ...</div>}>
          <ul className="card">
            {
              data?.map((user) => (
                <li key={user.id}> {user.name} </li>
              ))
            }
          </ul>
        </Suspense>
      </div>

  )
}

export default App
