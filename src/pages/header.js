import logo from "../components/Instagram_Logo_2016.png";
import "./stylesheets/header.css"
import "./stylesheets/index.css"
import OptionBtn from "../components/optionBtn.js"
const Header = () => {
  return (
    <header>
        <a href="https://www.instagram.com/"><img src={logo} alt="logo" className="instagram-logo" /></a>
        <input type='search' className='header-searchBar'  placeholder="Search"></input>
        <input type='submit' value='🔍' className='header-searchBtn'></input>
        <OptionBtn title='♡' className='hdoptionBtn'/>
    </header>
  )
}

export default Header