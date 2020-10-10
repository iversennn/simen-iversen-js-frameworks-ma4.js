import React from 'react';
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

export default function IngredientList({ingredients}){
    return(
        <Card.Text>{ingredients}</Card.Text>
    )
}

IngredientList.propTypes = {
	ingredients: PropTypes.string.isRequired,
};