import Header from "./components/Header"
import Body from "./components/Body"
import { Provider } from "react-redux"
import appStore from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WatchPage from "./components/WatchPage"
import MainContainer from "./components/MainContainer"
import Demo from "./components/Demo"
function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Body/>,
      children:[
        {
          index:true,
          element:<MainContainer/>
        },
        {
          path:"/watch",
          element:<WatchPage/>
        },
        {
          path:"/demo",
          element:<Demo/>

        }
      ]
    }
  ])
  return (
    <>
    <Provider store={appStore}>

      <Header/>
     <RouterProvider router={appRouter}/>
    </Provider>
    </>
  )
}

export default App
