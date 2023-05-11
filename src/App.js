
import './App.css'; 
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
 function App() { 
    return (   
      <div className='App'>
        <div class="card" style={{width: "18rem" }}>

  <ProfilePhoto/>

  
  <div class="card-body">
    <FullName/>
  <Address/>
    <a href="#!" class="btn btn-primary">Go somewhere</a>
  </div>
</div>  
</div> ); } 
    export default App;
