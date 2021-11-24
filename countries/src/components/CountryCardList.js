import CountryCard from "./CountryCard";

const CountryCardList = ({countryCards}) => {

    const cardComponents = countryCards.map(countryCard => {
        return(
            <CountryCard card={countryCard} />
        )
    })

    return (
        <div>
            {cardComponents}
        </div> 
    )
}

export default CountryCardList;