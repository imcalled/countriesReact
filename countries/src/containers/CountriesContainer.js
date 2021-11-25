import { useState, useEffect } from "react";
import CountryCardList from "../components/CountryCardList";
import NewCountryCard from "../components/NewCountryCard";
import CountryCard from "../components/CountryCard";

const CountriesContainer = ({onVisited}) => {

    const [countryCard, setCountryCard] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    // const getCountryData = (newCountry) => {
    //     fetch(`https://restcountries.com/v3.1/all`)
    //     // fetch(`https://restcountries.com/v3.1/name/${newCountry}?fullText=true`)
    //         .then(response => response.json())
    //         .then(data => setCountryCard(data));
        
    // }

    // useEffect(getCountryData, []);

    const getAllCountryData = () => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(response => response.json())
            .then(data => setAllCountries(data));
        
    }

    useEffect(getAllCountryData, []);

    // setCountryCard(state) {
    //     return new Promise((resolve) => {
    //       this.setState(state, resolve)
    //     });
    // }
    
    // async handleChange(input) {
    //     await this.setStateAsync({ load: true });
    //     this.props.actions.getItemsFromThirtParty(input);
    //     await this.setStateAsync({ load: false })
    // }

    const addNewCountry = (searchQuery) => {
        console.log("search started for: " + searchQuery);

        setLoading(true);
        
        const searchCountry = allCountries.find(countries => {
            return (countries.name.common).toLowerCase() === searchQuery.toLowerCase();
        });

        console.log(JSON.stringify(searchCountry));
        //append new search
        var updatedCountries = 0;
        if(countryCard != []) {
            updatedCountries = [...countryCard, searchCountry];
        }
        else {return updatedCountries = searchCountry};
        setCountryCard(updatedCountries);

        // console.log(JSON.stringify(countryCard));
    
        // fetch(`https://restcountries.com/v3.1/name/${searchQuery}?fullText=true`)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     if (data !== null) {
        //         console.log("trying to set country card")
        //         setCountryCard(data[0]);
        //         setLoading(false);
        //         console.log(countryCard);
        //     } else {
        //         setLoading(false);
        //         console.log("search unsuccessful")
        //     }
        // });
    }

    // useEffect((addNewCountry) => {
    //     console.log('Mounted');
    //     return () => {
    //       console.log('Will unmount');
    //     };
    //   }, []);

    //update visited key in object to show visited :)
    const updateVisitedList = (name) => {
        console.log(name + " added to visited list");
        onVisited = true;
    }
    
    const deleteCard = (name) => {
        console.log("delete card");

        const deleteCountry = countryCard.find(countries => {
            return (countries.name.common).toLowerCase() === name.toLowerCase();
        });

        const updateWithDeletedCountries = countryCard.pop(deleteCountry);
        setCountryCard(updateWithDeletedCountries);
    }

    return (
        countryCard.length > 0 ?
        // countryCard.length == 0 ?
        <>
            <NewCountryCard onSearch={addNewCountry}/>
            <CountryCardList countryCards={countryCard} onVisited={updateVisitedList} onDelete={deleteCard}/>
            {/* <CountryCard card={countryCard} key={countryCard.id} onVisited={updateVisitedList} /> */}
        </>
        :
        // <p>Search</p>
        <>
        <NewCountryCard onSearch={addNewCountry}/>
        </>
    )

}

export default CountriesContainer;