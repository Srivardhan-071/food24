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
                        <div className="col-sm-12 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title p-5">Breakfast</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/lunch">
                        <div className="col-sm-12 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title p-5">Lunch</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/sanck">
                        <div className="col-sm-12 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title p-5">Snacks</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/dinner">
                        <div className=" col-sm-12 mb- mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title p-5">Dinner</h5>
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
