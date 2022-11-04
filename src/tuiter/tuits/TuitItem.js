import React from "react";
import TuitStats from "./TuitStats";
import {deleteTuit} from "./tuits-reducer";
import {useDispatch} from "react-redux";

const TuitItem = ({tuits}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={50}
                         alt = '...' className="float-end rounded-circle"
                         src={`/images/${tuits.image}`}/>
                </div>

                <div className = "col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuits._id)}></i>
                    <span className="fw-bold text-black">{tuits.userName}</span>
                    <i className="bi bi-patch-check-fill ps-2 pe-2"
                       style={{color: 'blue'}}></i>
                    <span className="text-secondary">
                        {tuits.handle} . {tuits.time}
                    </span>
                    <p className="text-black">
                        {tuits.tuit}
                    </p>
                    <TuitStats tuits = {tuits}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;