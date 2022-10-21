import React from "react";
import './index.css';
const PostListItem = (
    {
        post = {
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className={post.share === '' ? "d-none" : "d-inline"}>
                <div className = "row text-secondary fw-bold ps-2">
                    <div className = "col-1 pt-1 pe-0">
                        <i className="fa-solid fa-retweet float-end"></i></div>
                    <div className = "col-11">{post.share}</div>
                </div>
            </div>
            <div className = "row ps-2">
                <div className = "col-1 p-0">
                    <img src={`/images/${post.avatarIcon}`} className="rounded-circle w-100"/>
                </div>
                <div className = "col-11">
                    <span className="fw-bold text-black">{post.userName}</span>
                    <i className="bi bi-patch-check-fill pe-2 icon-color"></i>
                    <span className="text-secondary">
                        {post.handle} . {post.time}
                        <i className="bi bi-three-dots float-end"></i>
                    </span>
                    <p className="text-black">
                        {post.caption}
                        <div className={post.link === '' ? "d-none" : "d-inline"}>
                            <i className="bi bi-arrow-right ps-2 pe-2"></i>
                            <a href = '#'>{post.link}</a>
                        </div>
                    </p>
                    <div className="card override-bs">
                        <div className={post.image === '' ? "d-none" : "d-inline"}>
                            <img src={`/images/${post.image}`} className="card-img-top" alt="..."/>
                        </div>
                        <div className={post.title === '' ? "d-none" : "d-inline"}>
                            <div className="pt-3 card-title">
                                <div className = "row">
                                    <div className="col-1 p-0">
                                        <img src={`/images/${post.avatarIcon2}`} className="rounded-circle w-50 float-end"/>
                                    </div>
                                    <div className="col-11 ps-1">
                                        <span className="fw-bold text-black">{post.user2}</span>
                                        <i className="bi bi-patch-check-fill pe-2 icon-color"></i>
                                        <span className="text-secondary">
                                            {post.handle2} . {post.time2}
                                        </span>
                                    </div>
                                </div>
                                <p className="ps-3">{post.title}
                                    <i className="bi bi-arrow-right ps-2 pe-2"></i>
                                    {post.link2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-around pt-3 pb-2">
                        <div className="col-3">
                            <i className="bi bi-chat pe-2"></i>
                            {post.comment}
                        </div>
                        <div className="col-3">
                            <i className="fa-solid fa-retweet pe-2"></i>
                            {post.retweet}
                        </div>
                        <div className="col-3">
                            <i className="bi bi-heart pe-2"></i>
                            {post.like}
                        </div>
                        <div className="col-3">
                            <i className="bi bi-upload"></i>
                        </div>
                    </div>
                    <div className = "pt-3 pb-2">
                        <a href="#">{post.moreLink}</a>
                    </div>

                </div>
            </div>
        </li>
    );
};
export default PostListItem;