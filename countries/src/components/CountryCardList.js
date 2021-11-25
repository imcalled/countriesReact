import CountryCard from "./CountryCard";

const CountryCardList = ({countryCards, updateVisitedList}) => {

    const cardComponents = countryCards.map(countryCard => {
        return(
            <CountryCard card={countryCard} key={countryCard.id} updateVisitedList={updateVisitedList}/>
            // <CountryCard card={countryCard} key={countryCard.id} onVisited={onVisited}/>
        )
    })

    return (
        <div>
            {cardComponents}
        </div> 
    )
}

export default CountryCardList;