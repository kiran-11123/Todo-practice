import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[data, setData] = useState([])
  
  useEffect(()=>{

    async function getData() {

       try{
      const response = await axios.get('http://localhost:5000/api/data')

      if(response.status === 200) {
        console.log('Data from backend:', response.data)
        setData(response.data)
      } else {
        console.error('Failed to fetch data from backend')

      }
    }
    catch(error) {
      console.error('Error fetching data from backend:', error)
      
    }

  }  getData()

  },[])

  return (
     <div className='text-center bg-red-200'>
          {data.length > 0 ? (
            <ul>
              {data.map((item, index) => ( 
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No data available</p>  
               )}
     </div>
  )
}

export default App
