import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuits.map && tuits.map(tuits =>
                    <TuitItem key={tuits._id}
                                  tuits={tuits}/>)
            }
        </ul>
    );
};
export default TuitList;