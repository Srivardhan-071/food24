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
                        <div class="col-sm-12 mb-3 mb-sm-0">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title p-5">Breakfast</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/lunch">
                        <div class="col-sm-12 mb-3 mb-sm-0">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title p-5">Lunch</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/snacks">
                        <div class="col-sm-12 mb-3 mb-sm-0">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title p-5">Snacks</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/dinner">
                        <div class="col-sm-12 mb-3 mb-sm-0">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title p-5">Dinner</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div >
        </>
    );
}

export default Mainpage;
