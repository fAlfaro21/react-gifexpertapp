import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSumbit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length > 0){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit = { handleSumbit } >
            {/* <h1> { inputValue } </h1> */}
            <input
                type = "Text"
                value = { inputValue }
                onChange = { handleInputChange } //Permite el cambio del campo, y se va a disparar cada vez que cambie su valor
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
