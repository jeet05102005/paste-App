
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
      <div className="min-h-screen w-full bg-slate-950 text-white">
        <Navbar />
        <Home />
      </div>
    )
  },

  {
    path: "/pastes",
    element: (
      <div className="min-h-screen w-full bg-slate-950 text-white">
        <Navbar />
        <div className="pt-6">
          <Paste />
        </div>
      </div>
    )
  },

  {
  path: "/Viewpaste/:id",
  element: (
    <div>
      <Navbar />
      <div>
        <Viewpaste />
      </div>
    </div>
  )
},

  {
    path: "/edit/:id",
    element: (
      <div className="min-h-screen w-full bg-slate-950 text-white">
        <Navbar />
        <div className="pt-6">
          <EditPaste />
        </div>
      </div>
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

