const CountryCard = ({card, onVisited, onDelete}) => {
    
    // const mapCountry = card.map(countryProperties => {
    //     return(
            
    //     )
    // })

    const renderLanguagesList = Object.values(card.languages).map((language, id)=> {
        return (
            <p key={language.id}>{language}</p>
        )
      });

      const renderCurrencies = Object.values(card.currencies).map((currencies, id)=> {
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
  
        <div className="card">

            <h3>{card.name.common}  <img className="flags" src={card.flags.svg} alt={`${card.name.common} Flag`}/> </h3>
            <h4>Capital:</h4>
            <p>{card.capital}</p>
            <h4>Sub region:</h4>
            <p>{card.subregion}</p>
            
            <h4>Currency:</h4>
            <p>{renderCurrencies} </p>

            <h4>Languages:</h4>
            {/* {Object.values(card[0].languages).map(values => {
            // })} */}
            <p>{renderLanguagesList}</p>
            
            <h4>Landlocked:</h4>
            <p>{card.landlocked ? "Yes" : "No"}</p>
            
            {/* <h4>Borders:</h4>
            <p>{"borders" in card ? card.borders : "None"}</p> */}
            
            <h4>Google Maps Link:</h4>
            <a href={`${card.maps.googleMaps}`} target="_blank"> Take me there!</a>
            
            <h4>Visited?</h4>
            <p>{card.visited ? "Yes!" : "Bucket List"}</p>
            <hr/>
            {/* TODO:  change onVisited state to true, change background to green */}
            <button id="visitbtn" onClick={() => onVisited(card.name.common)}>Mark visited</button>
            <button id="deletebtn" onClick={() => onDelete(card.name.common)}>Remove</button>
        </div>
    )
}

export default CountryCard;