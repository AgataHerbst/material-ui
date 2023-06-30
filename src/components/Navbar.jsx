import { useState } from "react";
//import Logo from "../assets/weddingCake.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () =>{ //функция нажатия icon
setOpenLinks(!openLinks);
    };
return (
    <div className="navbar">
     <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/galleries"> Galleries </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
    <ReorderIcon />
    </button>
      </div>
    </div>
  )
}

export default Navbar