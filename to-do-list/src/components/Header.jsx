import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className="h1 text-center bg-primary text-white py-2 mt-2 col-8">To-do list</h1>
            </div>
        </>
    );
}

export default Header;