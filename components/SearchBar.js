import {useState} from "react";
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const handleIconClick = () => {
        setIsSearchVisible(!isSearchVisible);
    };
    return(
        <div className="relative flex items-center space-x-5">
            <div className={`cursor-pointer transition duration-300 ${isSearchVisible ? 'transform rotate-90' : ''}`} onClick={handleIconClick}>
                <FaSearch className="w-5 h-5"/>
            </div>
            {isSearchVisible && (
                <input
                type="text"
                placeholder="Cari Buku"
                className='border text-black border-gray-300 px-3 py-1 rounded'
                />
            )}
        </div>
    )
};
export default SearchBar;
