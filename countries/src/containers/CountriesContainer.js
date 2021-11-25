import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import CountryCardList from "../components/CountryCardList";
import VisitedButton from "../components/VisitedButton";
import VisitedList from "../components/VisitedList";

const CountriesContainer = ({onVisited}) => {

    const [countryCard, setCountryCard] = useState([]);
    const [visitedCountryCards, setVisitedCountryCards] = useState([]);

    const getCountryData = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountryCard(data));
    }
    useEffect(getCountryData, []);
    
    // console.log(countryCard);

    const updateVisitedList = (name) => {
        console.log(name + " added to visited list");
        // onVisited = true;
        // const visitedCountryCard = countryCard.find(country => 
        //     country.name.common === name);
        var visitedCountryCard = null;
        for(let i=0; i<countryCard.length; i++) {
            if(countryCard[i].name.common === name)
                countryCard[i].visited = true;
                var visitedCountryCard = countryCard[i];
                return;
                // visitedCountryCard = countryCard[i];
        }  console.log(visitedCountryCard);

        // visitedCountryCard.visited = true;

        // console.log(visitedCountryCard);
        // setVisitedCountryCards(visitedCountryCard);
        // // setVisitedCountryCards([...visitedCountryCards, visitedCountryCard]);
        // console.log(visitedCountryCard);
        // const updatedCountryCard = countryCard.filter(card => card[0].name.common !== name)
        // setCountryCard([...updatedCountryCard])
        // console.log(visitedCountryCard);
    }

    



    return (
        countryCard.length > 0 ?
        <>
            {/* <CountryCardList countryCards={countryCard}/> */}
            <CountryCard card={countryCard} key={countryCard.id} updateVisitedList={updateVisitedList}/>
            <VisitedList visitedCountryCards ={visitedCountryCards} updateVisitedLit={updateVisitedList} />
        </>
        :
        <p>List of countries will go here</p>
    )

}

export default CountriesContainer;