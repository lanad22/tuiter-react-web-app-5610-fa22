const PostItem = (post) => {
    return (`
       <li class="list-group-item bg-black text-secondary">
                    <div class="row ps-2 pe-2">
                        <div class="col-1 p-0">
                            <img src="${post.avatar}" class="rounded-circle w-100">
                            
                        </div>
                        <div class="col-11">
                           <i class="fa-regular fa-ellipsis wd-float-right"></i>
                           <span class="fw-bold text-white">${post.userName}</span>
                           <i class="fa-solid fa-badge-check" style="color:white"></i>
                           <span class="align-middle">${post.handle}</span>
                            <i class="fa-solid fa-period fa-xs"></i>
                           <span class="align-middle">${post.time}</span>
                           <p class="text-white">
                                ${post.caption1}
                                <a href="#">${post.tag}</a>
                                ${post.caption2}
                           </p>       
                           <div class="card override-bs overflow-hidden">
                                 <img src="${post.image}" class="card-img-top override-bs" alt="...">
                                 <div class=${post.title === '' ? "d-none" : "d-inline"}>
                                       <div class="card-body override-bs">
                                            <h6 class="text-white">${post.title}</h6>
                                            ${post.content}
                                            <i class="fa-regular fa-link"></i>
                                            ${post.link}                               
                                       </div>
                                 </div>
                           </div>
                           <div class="row justify-content-around pt-2 pb-2">
                                <div class="col-3"> 
                                <i class="fa-light fa-comment"></i>&nbsp&nbsp
                                ${post.comment}
                                </div>
                                <div class="col-3"> 
                                <i class="fa-light fa-arrows-retweet"></i>&nbsp&nbsp
                                ${post.retweet}
                                </div>
                                <div class="col-3"> 
                                <i class="fa-light fa-heart"></i>&nbsp&nbsp
                                ${post.like}
                                </div>
                                <div class="col-3"> 
                                <i class="fa-light fa-arrow-up-from-bracket"></i>
                                </div>
                                
                           </div>
                        </div>                 
                    </div>
                </li>
   `);
}

export default PostItem;