import React from 'react';
import Card from 'react-bootstrap/Card';

export default function IngredientList({ingredients}){

    return(
    <Card.Text>
        {
            ingredients.split(', ').map((item, index) => <li key={index}>{item}</li>)
        }
    </Card.Text>
    )
}

