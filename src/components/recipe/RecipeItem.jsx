import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import IngredientList from './IngredientList';

export default function RecipeItem({ title, thumbnail, ingredients, url }) {
	return (
        <Card className='recipeCard' bg='secondary' text='light'>
            <Card.Img variant='top' src={thumbnail} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <IngredientList ingredients={ingredients}/>
                <a href={url} className="link" rel="noreferrer noopener" target="_blank">Link to recipe</a>
            </Card.Body>
        </Card>
    );
}

RecipeItem.propTypes = {
	title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
