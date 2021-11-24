import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import CountryCardList from "../components/CountryCardList";

const CountriesContainer = ({onVisited}) => {

    const [countryCard, setCountryCard] = useState([]);

    const getCountryData = () => {
        fetch("https://restcountries.com/v3.1/name/united%20kingdom?fullText=true")
            .then(response => response.json())
            .then(data => setCountryCard(data));
    }

    useEffect(getCountryData, []);

    const updateVisitedList = (id) => {
        console.log(id + " added to visited list");
        onVisited = true;
    }

    return (
        countryCard.length > 0 ?
        <>
            {/* <CountryCardList countryCards={countryCard}/> */}
            <CountryCard card={countryCard} key={countryCard.id} onVisited={updateVisitedList} />
        </>
        :
        <p>List of countries will go here</p>
    )

}

export default CountriesContainer;