import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecipeItem from './RecipeItem';
import { BASE_URL } from '../../constants/api';
import Search from './Search';


export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setRecipes(json.results);
                setFilteredRecipes(json.results);
                console.log(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);
    
    const filterCards = function(e) {
	    const searchValue = e.target.value.toLowerCase();
	    const filteredArray = recipes.filter(function(recipe) {
            const lowerCaseName = recipe.title.toLowerCase();
            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });
    
        setFilteredRecipes(filteredArray);
    };
    
    if (loading) {
        return <Spinner animation='border' className='spinner' />;
    }
    
    return (
        <>
            <Search handleSearch={filterCards} />
            <Row>
                {filteredRecipes.map(recipes => {
                    const { title, thumbnail, ingredients, href} = recipes;

                    return (
                        <Col sm={3} md={3} key={title}>
                            <RecipeItem title={title} thumbnail={thumbnail} ingredients={ingredients} url={href}/>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}