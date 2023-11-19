import { Link } from "react-router-dom";
import '../App.css'


function Mainpage() {

    return (
        <>
            <div className="container">
                <h1>Welcome to Food24</h1>
                <p className="sub-heading">Want to eat somthing, but don't know what to eat and there recpies. Then you are at right place</p>
                <p className="sub-heading"></p>
                <div className="flex">
                    <Link to="/breakfast">
                        <div className="res-item">
                            <h2>Breakfast</h2>
                        </div>
                    </Link>
                    <Link to="/lunch">
                        <div className="res-item">
                            <h2>Lunch</h2>
                        </div>
                    </Link>
                    <Link to="/sanck">
                        <div className="res-item">
                            <h2>Snacks</h2>
                        </div>
                    </Link>
                    <Link to="/dinner">
                        <div className="res-item">
                            <h2>Dinner</h2>
                        </div>
                    </Link>
                </div>
            </div >
        </>
    );
}

export default Mainpage;
