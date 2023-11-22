import Navigation from "./components/navigation/navigation.component";
import { Route, Routes } from 'react-router-dom'
import Home from "./routes/Home/home.component";

import './App.css';
import Projects from "./components/projects/projects.component";
import Blogs from "./components/blogs/blogs.component";
const App = () => {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index='1' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
