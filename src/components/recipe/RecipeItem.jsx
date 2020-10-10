import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import IngredientList from './IngredientList';

export default function RecipeItem({ title, thumbnail, ingredients }) {
	return (
		<Card className='recipeCard' bg='secondary' text='light'>
			<Card.Img variant='top' src={thumbnail} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
                <IngredientList ingredients={ingredients}/>
			</Card.Body>
		</Card>
	);
}

RecipeItem.propTypes = {
	title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
};
