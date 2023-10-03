import { useState } from "react";
import Nav from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./SidedBar/Sidebar";


import products from "./db/db"
import Card from "./componenets/Card";

function App() {

  //----------------- UseStates------------------
 const  [selectedCategory, setSelectedCategory] = useState(null);
 const  [query, setQuery] = useState("");


 //--------------input Filter----------------
  const handleInputChange = (event)=> {
      setQuery (event.target.value)
  }

  const filteredItems = products.filter( product => product.title.
toLocaleLowerCase().indexOf(query.toLowerCase() !== -1)
  );

  //-----------------radio Filters---------------
  const handleChange = (event) => {
    setSelectedCategory (event.target.value)
    // console.log(event.target.value)
  }

  // ----------------Buttons Filter-----------------
  const handleClick =(event) => {
    setSelectedCategory (event.target.value)
  }


  const filteredData =(products, selected, query) => {
    let filteredProducts = products

  
    //--------------Filtering input items------------
    if(query) {
      filteredProducts = filteredItems
    }


  //------------------Selected filter items -------------------
    if (selected) {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) =>  
      category === selected|| 
      color === selected || 
      company === selected || 
      newPrice === selected || 
      title === selected
      );
  }


  return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice }) => (
    <Card 
    key={Math.random()} 
    img = {img}
    title = {title}
    star = {star}
    reviews = {reviews}
    newPrice={newPrice}
    prevPrice = {prevPrice}
    
    />
  ));

  }


  const result = filteredData(products, selectedCategory, query )
  return (
    <div className='App'>

    <Sidebar  handleChange ={handleChange}/> 
    <Nav query={query} handleChange ={handleChange}/>
    <Recommended handleClick ={handleClick}/>
    <Products results={result} />
    
    </div>
  );


}


export default App;
