import { useState } from "react";
import Nav from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./SidedBar/Sidebar";


import datas from "./db/db"
import Card from "./componenets/Card";

function App() {

  // UseStates
 const  [selectedCategory, setSelectedCategory] = useState(null);
 const  [query, setQuery] = useState("");


 //input Filter
  const handleInpuChange = (event)=> {
      setQuery (event.target.value)
  }

  const filteredItems = datas.filter(data => data.title.
    toLocaleLowerCase().indexOf(query.toLowerCase() !==-1)
  );

  //-----------------radio Filters--------

  const handleChange = (event) => {
    setSelectedCategory (event.target.value)
  }

  // ----------------Buttons Filter-----------------

  const handleClick =(event) => {
    selectedCategory(event.target.value)
  }


  const filteredData =(datas, selected, query) => {
    let filteredProduct = datas

  
    //--------------Filtering input items------------

    if(query) {
      filteredProduct = filteredItems
    }


  //------------------Selected filter items -------------------
    if (selected) {
      filteredProduct = filteredProduct.filter(({category, color, company, newPrice, title}) =>  
      category===selected|| color===selected || company===selected || newPrice===selected || title===selected)
  }


  return filteredProduct.map(({img, title, star, reviews, newPrice, prevPrice }) => (
    <Card 
    key={Math.random()} 
    img = {img}
    title = {title}
    star = {star}
    reviews = {reviews}
    newPrice={newPrice}
    prevPrice = {prevPrice}
    
    />
  ))

  }


  const results = filteredData(datas, selectedCategory, query, )

  return (
    <div className='App'>

    <Sidebar  handleChange ={handleChange}/> 
    <Nav query={query} handleChange ={handleChange}/>
    <Recommended handleChange ={handleClick}/>
    <Products results={results} />
    
    </div>
  );


}


export default App;
