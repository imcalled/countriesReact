const CountryCard = ({card, onVisited}) => {
    
    // const mapCountry = card.map(countryProperties => {
    //     return(
            
    //     )
    // })

    const renderLanguagesList = Object.values(card[0].languages).map((language, id)=> {
        return (
            <p key={language.id}>{language}</p>
        )
      });

      const renderCurrencies = Object.values(card[0].currencies).map((currencies, id)=> {
        return (
            <p key={currencies.id}>{currencies.name}</p>
        )
      });


    // const landlockedBorders = () => {
    //     return(
            
    //         // card[0].borders == undefined ?
    //         <p>Country is an Island</p>
    //         :
    //         <>
    //             <p>{card[0].landlocked ? "Landlocked" : "Coastal"}</p>
    //             <h4>Borders:</h4>
    //             <p>{card[0].landlocked ? card[0].borders : "The sea :)"}</p>
    //         </>
    //     )
    // }

    return (
  
        <div className={card ? "Visited here" : "Bucket List"}>
        
            {/* <h3>{card}</h3> */}
            {/* <h3>Object.entries(name)</h3> */}
            <h3>{card[0].name.common}  <img className="flags" src={card[0].flags.svg} alt={`${card[0].name.common} Flag`}/> </h3>
            <h4>Capital:</h4>
            <p>{card[0].capital}</p>
            <h4>Sub region:</h4>
            <p>{card[0].subregion}</p>
            
            <h4>Languages:</h4>
            {/* {Object.values(card[0].languages).map(values => {
            })} */}
            <p>{renderLanguagesList}</p>

            <h4>Currency:</h4>
            <p>{renderCurrencies} </p>
            
            <h4>Landlocked:</h4>
            <p>{card[0].landlocked ? "Yes" : "No"}</p>
            
            <h4>Borders:</h4>
            <p>{"borders" in card[0] ? card[0].borders : "None"}</p>
            
            <h4>Google Maps Link:</h4>
            <a href={`${card[0].maps.googleMaps}`} target="_blank"> Take me there! </a>
            
            {/* <h4>Visited?</h4>
            <p>{card.visited ? "Yes!" : "Bucket List"}</p> */}
            <hr/>
            {/* TODO:  change onVisited state to true, change background to green*/}
            <button onClick={() => onVisited(card.id)}>Mark visited</button>
        </div>
    )
}

export default CountryCard;