const CountryCard = ({card}) => {
    
    // const mapCountry = card.map(countryProperties => {
    //     return(
            
    //     )
    // })

    return (
        // <div className={card.visited ? "Visited" : "Bucket List"}>
        <div>
            {/* <h3>{card}</h3> */}
            <h3>{card.map(cards => <div>{cards.name}</div>)}</h3>
            {/* <h3>{card.name}</h3> */}
            <h3>{card.flag}</h3>
            <h4>Capital:</h4>
            <p>{card.capital}</p>
            <h4>Region:</h4>
            <p>{card.subregion}</p>
            <h4>Languages:</h4>
            <p>{card.languages}</p>
            <h4>Landlocked:</h4>
            <p>{card.landlocked}</p>
            <h4>Borders:</h4>
            <p>{card.borders}</p>
            <h4>Google Maps Link:</h4>
            <p>{card.maps}</p>
            <h4>Visited?</h4>
            {/* <p>{card.visited ? "Yes!" : "Bucket List"}</p> */}
            <hr/>
            {/* TODO: create button with logic, pass setVisited state */}
            {/* <button onClick={() => } */}
        </div>
    )
}

export default CountryCard;