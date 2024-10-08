import { useEffect, useState } from 'react'
import Home from './component/Home'
import axios from 'axios'
import Navigation from './component/Navigation'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Form from './component/Form'


function App() {



  const [data, setData] = useState([])

  const get_data = async () => {
    const response = await axios.get('http://127.0.0.1:8000/')

    console.log(response.data)
    setData(response.data)

  }

  const handle_delete=async (pk)=>{
    console.log(pk) 
    const response=await axios.delete(`http://127.0.0.1:8000/update/${pk}`)
    console.log(response.data)

  }


  const handle_post=async (data)=>{
    
    console.log(data)
    const response=await axios.post(`http://127.0.0.1:8000`,data)
    console.log(response.data)

  }


  useEffect(() => {
    get_data()
  }, [])


  const router = createBrowserRouter([
    { path: '/', element: <><Navigation></Navigation>  <Home data={data} handle_delete={handle_delete} ></Home>  </> },
    { path: '/add', element: <><Navigation> </Navigation> <Form handle_post={handle_post} ></Form></>  }
  ])



  return (
    <>
      <RouterProvider router={router} >

      </RouterProvider>
    </>
  )
}

export default App
