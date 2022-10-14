const PostSummaryItem = (post) => {
    return (`
       <li class="list-group-item">
                    <div class="row pe-3">
                        <div class="col-10 text-secondary">   
                             ${post.topic} 
                             <p>  
                                <span class= "fw-bold text-white">${post.userName}
                                <i class="fa fa-check-circle"></i> </span> - ${post.time}<br/>
                                <span class= "fw-bold text-white">${post.title}</span>    
                             </p>
                        </div>
                        <div class="col-2 p-0">
                            <img src="${post.image}" class="img-fluid rounded">
                        </div>
                    </div>
                </li>
   `);
}
export default PostSummaryItem;

