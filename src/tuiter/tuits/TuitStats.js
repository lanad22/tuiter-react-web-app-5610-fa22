import React from "react";
const TuitStats = ({tuits}) => {
    return(
        <div className="row justify-content-around">
            <div className="col-3">
                <i className="bi bi-chat pe-2"></i>
                {tuits.replies}
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat pe-2"></i>
                {tuits.retuits}
            </div>
            <div className="col-3">
                {
                    tuits.liked &&
                    <i className="bi bi-heart-fill pe-2"
                       style={{color: 'red'}}></i>
                }
                {
                    !tuits.liked &&
                    <i className="bi bi-heart pe-2"></i>
                }
                {tuits.likes}
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default TuitStats;