import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditPaste from "./components/EditPaste";
import Home from "./components/Home";
import Paste from "./components/Paste";
import Navbar from './components/Navbar';
import Viewpaste from './components/Viewpaste';

const router = createBrowserRouter([
  {
   
  path: "/",
  element: (
    <div>
      <Navbar />
      <Home />
    </div>
  ) 
  },

  {
    path: "/pastes",
    element: (
    <div>
        <Navbar /><br></br>
        <Paste />
      </div>
      )
  },

  {
    path: "/Viewpaste/:id",
    element:( 
      <div>
        <Navbar /><br></br>
        <Viewpaste />
      </div>
    )
  },
  {
  path: "/edit/:id",
  element: (
    <>
      <Navbar /><br></br>
      <EditPaste />
    </>
  )
}
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;