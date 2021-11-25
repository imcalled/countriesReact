import {useState} from "react";

const NewCountryCard = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState("");

    //get user input
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        
        //pass country to search function in container
        onSearch(searchQuery);

        //refresh the search box
        setSearchQuery("");
    }

    //on search get user input and pass as string to api

//     <form id="form"> 
//     <input type="search" placeholder="Search for a country" value={searchQuery} onChange={handleCountryChange}/>
//     <button onClick={() => handleSearch}>Search</button>
// </form>
    return (
        <>
        <form className="search">
        <input
        placeholder="Search for a country..."
          value={searchQuery}
          onChange={handleSearchChange}
          type="text"
        />
        <input onClick={handleSearch} type="submit" value="SEARCH" />
        </form> 
        </>
  );
};

export default NewCountryCard;