import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import CountryCardList from "../components/CountryCardList";

const CountriesContainer = () => {

    const [countryCard, setCountryCard] = useState([]);

    const getCountryData = () => {
        fetch("https://restcountries.com/v2/name/new%20zealand?fullText=true")
            .then(response => response.json())
            .then(data => setCountryCard(data));
    }

        
    useEffect(getCountryData, []);

    return (
        countryCard.length > 0 ?
        <>
            {/* <CountryCardList countryCards={countryCard}/> */}
            <CountryCard card={countryCard} />
        </>
        :
        <p>List of countries will go here</p>
    )

}

export default CountriesContainer;