import Navigation from "./components/navigation/navigation.component";
import './App.css';
import Banner from "./components/banner/banner.component";
import Projects from "./components/projects/projects.component";
import Blogs from "./components/blogs/blogs.component";
import Footer from "./components/footer/footer.component";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <Projects/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
