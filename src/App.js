import Nav from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./SidedBar/Sidebar";

function App() {

  return (
    <div className='App'>
      
    <Sidebar /> 
    <Nav />
    <Recommended />
    <Products />
    
    </div>
  );


}


export default App;
