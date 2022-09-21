import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country-style'>
            <img src={props.flags} alt="" />

            <div>
                <h5>Name: {props.name}</h5>
                <h6>Area: {props.area}</h6>
                <h6>population: {props.population}</h6>
                <h6>region: {props.region}</h6>
            </div>
        </div>
    );
};

export default Country;