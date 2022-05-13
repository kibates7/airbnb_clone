import {Button} from "@mui/material"
import React from 'react';
import "./SearchPage.css";
import SearchResult from "./SearchResult"

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays ・ 26 august to 30 august ・ 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://media.nomadicmatt.com/2018/apartment.jpg"
                location="Private room in center of London"
                title="Stay at this spacious Edardian House"
                description="1 guest ・ 1 bedroom ・ 1 bed ・ 1.5 shared bathrooms ・ Wifi ・ Kitchen ・ Free Parking ・ Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$117 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room in center of London"
                title="Independent luxury studio apartment"
                description="2 guest ・ 2 bedroom ・ 10 bed ・ 2.5 shared bathrooms ・ Wifi ・ Kitchen ・ Pool"
                star={2.22}
                price="$10 / night"
                total="$90 total"
            />

            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest ・ 2 bedroom ・ 1 bed ・ 1.5 shared bathrooms ・ Wifi ・ Kitchen ・ Free Parking ・ Washing Machine"
                star={3.21}
                price="$90 / night"
                total="$632 total"
            />
        </div>
    );
};

export default SearchPage;