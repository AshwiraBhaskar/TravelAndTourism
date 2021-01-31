import './App.css';

function App() {
  return (
    <div class="w3-container">
      
      
      <div class="w3-center">
        <h1 style={{ fontWeight: 'bold' }} >Travel & Tourism Co. </h1>
        </div>
      
      <div class="w3-panel w3-pale-red">
        <p> hello </p>
      </div>
      
      <div class="w3-center" >
        <h4 style={{ fontWeight: 'bold' }}> Pick the place you want to visit </h4>
        <div class = "w3-margin-top" ><button style={ {backgroundColor: 'orange'}}>Srinagar</button></div> 
        <div class = "w3-margin-top"><button style={{border: 'none'},{backgroundColor: 'orange'}}>Jaisalmer</button></div> 
        <div class = "w3-margin-top"><button style={{border: 'none'},{backgroundColor: 'orange'}}>Ooty</button></div> 
        <div class = "w3-margin-top"><button style={{border: 'none'},{backgroundColor: 'orange'}}>Sikkim</button></div> 
      </div>

    </div>
    
  );
}

export default App;
