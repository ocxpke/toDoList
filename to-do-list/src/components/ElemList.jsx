import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiSergeant, GiFallDown, GiEmptyWoodBucketHandle } from "react-icons/gi";
import './elem.css'

function ElemList(props){
    let list = document.getElementById('taskList');
    let index = -1;
    let aLi = 0;
    let word;

    let up = (e) =>{
        list =  e.currentTarget.closest('li').parentNode;
        aLi = e.currentTarget.closest('li');
        for(let i = 0; i < list.children.length; i++){
            if (aLi === list.children[i]) {
                index = i;
            }
        }

        word = aLi.children[0].textContent;

        if (index!=0) {
            aLi.children[0].textContent = list.children[index-1].children[0].textContent;
            list.children[index-1].children[0].textContent = word;
        }

    }

    let down = (e) => {
        list =  e.currentTarget.closest('li').parentNode;
        aLi = e.currentTarget.closest('li');
        for(let i = 0; i < list.children.length; i++){
            if (aLi === list.children[i]) {
                index = i;
            }
        }

        word = aLi.children[0].textContent;

        if((index+1)!=list.children.length){
            aLi.children[0].textContent = list.children[index+1].children[0].textContent;
            list.children[index+1].children[0].textContent = word;
        }
    }

    return (
        <>
            <li className="list-group-item">
                <span>{props.nombre}</span>
                <div className="float-end">
                    <GiSergeant className="up" onClick={up}/>
                    <GiFallDown className="down" onClick={down}/>
                    <GiEmptyWoodBucketHandle className="bin" onClick={(e) => {
                            e.currentTarget.closest('li').parentNode.removeChild(e.currentTarget.closest('li'));
                    }}/>
                </div>
            </li>
        </>
    );

}

export default ElemList;