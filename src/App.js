import './App.css';
import StarRating from './starRating';
import Btntask from './Button';
import Menubar from './menubar';

function App() {
  const nos=[1,2,3,4,5,6,7,8];
  return (
    <>
    <div>
      <Menubar/>
    </div>
    <div className="App">
     {nos.map((elem,index)=>(<Cart/>))}
    </div>
    </>
  )
}

function Cart(){
return(
  <div id='outer'>
    <div id='outer1'>
  <h3>Image</h3>
  </div>
  <div id='inner'> 
  <Btntask/>
  <StarRating/>
  </div>
 
  </div>
);

}



export default App;
