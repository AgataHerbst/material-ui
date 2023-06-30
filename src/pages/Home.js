import { Link } from "react-router-dom";
import BannerImage from "../assets/kapkeik.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer" >
            <h1> Iris Backer </h1>
            <p> CAKES TO FIT ANY TASTE </p>
            <Link to="/galleries">
            <button> ORDER NOW </button>
            </Link>
        </div>
    </div>
  )
}

export default Home;