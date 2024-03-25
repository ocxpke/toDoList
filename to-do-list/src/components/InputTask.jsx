import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ElemList from "./ElemList";


function InputTask(){
    const[listaComp, nuevosComp] = useState([]);

    const handleButton = () => {
        let nm = document.getElementById("taskName");
        const comp = <ElemList nombre={nm.value}/>
        nuevosComp([...listaComp, comp]);
    }

    return(
        <>
            <div className="d-flex justify-content-center">
                <input id="taskName" placeholder="Insert task name" className="col-6 mx-1"></input>
                <Button className="col-2 bg-info" onClick={handleButton}>Add task</Button>
            </div>
            
            <div className="d-flex justify-content-center my-1">
                <ul className="list-group col-8">
                    {listaComp}
                </ul>
            </div>
            
        </>
    );

    
}

export default InputTask;