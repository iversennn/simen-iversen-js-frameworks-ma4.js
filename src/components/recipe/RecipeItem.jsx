import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

export default function RecipeItem({ title, thumbnail }) {
	return (
		<Card className='recipeCard' bg='secondary' text='light'>
			<Card.Img variant="top" src={thumbnail} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
			</Card.Body>
		</Card>
	);
}

RecipeItem.propTypes = {
	title: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired
};
