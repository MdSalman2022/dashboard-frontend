import { useState } from 'react' 
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
