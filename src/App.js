import logo from './BLACK.PNG'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from './1.jpeg'
import image2 from './2.jpeg'
import image3 from './3.jpeg'
import image4 from './4.jpeg'
import image5 from './5.jpeg'
import image6 from './6.jpeg'
import image7 from './7.jpeg'
import image8 from './8.jpeg'
import image9 from './9.jpeg'



function App() {
  return (
      <div class="container">
        <div className="logo text-center">
            <img src={logo}/>
        </div>
        <div class="parent">
          <div class="photos">
            <img src={image1} class="images"/>
            <img src={image2} class="images"/>
            <img src={image3} class="images"/>
            <img src={image4} class="images"/>
            <img src={image5} class="images"/>
            <img src={image6} class="images"/>
            <img src={image7} class="images"/>
            <img src={image8}class="images"/>
            <img src={image9}class="images"/>
          </div>
        </div>
      </div>
    );
}

export default App;
