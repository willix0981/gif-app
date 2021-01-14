import React, { useState } from 'react';
import PropTypes from 'prop-types';


 export const AddCategory =  ({setCategories}) => {
    const [inputvalue, setinputvalue] = useState('');
    const handleInputChange = (e) => {
        setinputvalue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputvalue.trim().length > 2){
            setCategories(cats => [inputvalue, ...cats]);
            setinputvalue('');
        }
        else{
            alert('debe de ingresar un mensaje');
        }
      


    }
    return (
        
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="introduce el gif a buscar aqui"
        value ={inputvalue}
        onChange={handleInputChange} />
        </form>
        
    )

    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
