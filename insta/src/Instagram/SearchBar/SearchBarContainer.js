import React from 'react';
import IGLogo from '../../assets/iglogo.png'
import './SearchBar.css';



const SearchBar = () => {
    return (
        <div className= "search-bar-wrapper">
            <div className = "image-wrapper">
            <img alt = "instagram logo" src = {IGLogo} className = "logo-name"  style ='height:612px; width:612px;' />
            </div>
            <div>
                <input type = "text" placeholder = "Search" />
            </div>
            <div className = "social-wrapper"> 
                <div className = "social">
                    <i className = "compass" />
                </div>
                <div className = "social">
                    <i className = "heart" />
                </div>
                <div className = "circle">
                    <i className= "user-circle" />
                </div>
            </div>
        </div>
    )
}


export default SearchBar