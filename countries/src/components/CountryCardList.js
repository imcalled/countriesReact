import CountryCard from "./CountryCard";

const CountryCardList = ({countryCards, onVisited, onDelete}) => {

    // countryCards = [...countryCards, countryCards];
    const cardComponents = countryCards.map(countryCard => {
        return(
            <CountryCard card={countryCard} key={countryCard.name.common} onVisited={onVisited} onDelete={onDelete}/>
            // key={countryCard.id}
        )
    })

    // const cardComponents = <CountryCard card={countryCards} key={countryCards.name.common} onVisited={onVisited}/>;

    return (
        <div className="card-list">
            {cardComponents}
        </div> 
    )
}

export default CountryCardList;