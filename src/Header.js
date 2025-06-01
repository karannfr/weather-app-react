import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const header = ({place,date,search,setSearch,handleSearch}) => {
  return(
    <header>
      <div className="location">
        <FaLocationDot size={28}/>
        <p>{place}</p>
        <span>({date})</span>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={() => handleSearch()}><IoSearch size={28}/></button>
      </div>
    </header>
  )
}

export default header;