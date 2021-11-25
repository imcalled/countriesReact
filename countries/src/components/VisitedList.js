import CountryCard from "./CountryCard";

const VisitedList = ({visitedCountryCards, updateVisitedList}) => {

    const visitedCardComponents = visitedCountryCards.map(countryCard => {
        return(
            <CountryCard card={countryCard} key={countryCard.id} updateVisitedList={updateVisitedList}/>
        
            )
        
    })


    return (
        <div>
            {visitedCardComponents}
        </div> 
    )
}

export default VisitedList;