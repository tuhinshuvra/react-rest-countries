import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))

    }, []);


    return (
        <div >
            <h1>This is Countries. {countries.length} </h1>

            <div className='country' >
                {countries.map(country => <Country
                    key={country.ccn3}
                    name={country.name.common}
                    area={country.area}
                    population={country.population}
                    region={country.region}
                    flags={country.flags.png}

                ></Country>
                )}
            </div>


        </div>
    );
};

export default Countries;