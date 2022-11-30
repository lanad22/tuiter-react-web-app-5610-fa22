import React from "react";
import "./index.css";
import {useDispatch} from 'react-redux';
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuits}) => {
    const dispatch = useDispatch();
    return(
        <div className="row justify-content-around">
            <div className="col">
                <i className="bi bi-chat pe-2"></i>
                {tuits.replies}
            </div>
            <div className="col">
                <i className="bi bi-arrow-repeat pe-2"></i>
                {tuits.retuits}
            </div>
            <div className="col">
                <div>
                    <i onClick ={() => {
                        dispatch(updateTuitThunk({
                            ...tuits,
                            likes: tuits.likes + 1
                            }
                        ))
                    }}
                    >
                        <i
                            className={`${
                                tuits.likes ? " text-danger " : "text-secondary "
                            }bi bi-heart-fill`}
                        ></i>
                    </i>{tuits.likes}
                </div>
            </div>
            <div className="col">
                <div>
                    <i onClick ={() => {
                        dispatch(updateTuitThunk({
                                ...tuits,
                                dislikes: tuits.dislikes + 1
                            }
                        ))
                    }}
                       className = "bi bi-hand-thumbs-down-fill me-2 "
                    >
                    </i>{tuits.dislikes}
                </div>
            </div>
            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default TuitStats;