import CountryCard from "./CountryCard";

const VisitedButton = ({updateVisitedList}) => {


    const handleClick = (event) => {
        event.preventDefault();
        
        console.log("Visited button clicked");
        updateVisitedList();
        // updateVisitedList();
 
    }

    return (
        <button id="visitbtn" onClick={handleClick} updateVisitedList={updateVisitedList}>
             Already Visited</button>
 )
}

export default VisitedButton;