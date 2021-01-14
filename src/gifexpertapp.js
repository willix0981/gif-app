import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  
  const [categories, setCategories] = useState([]);
  
  // const handleAdd = () => {
  //   setCategories([...categories,'onepiece']);
  // }
return(
    <>
        
        <h2>Buscador de gifs</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        
        <ol>
          {categories.map(category => 
           (<GifGrid
            key={category}
            category={category}/>)
          )}
        </ol>
        

    </>
  )

}