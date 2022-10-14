const PostSummaryItem = (post) => {
    return (`
       <li class="list-group-item">
                    <div class="row pe-3">
                        <div class="col-10">   
                            <span class="text-secondary">
                                ${post.topic}</span>         
                            <p class="fw-bold text-white">
                                ${post.userName} <i class="fa fa-check-circle"></i> - 2h<br/>
                                ${post.title}
                            </p>
                        </div>
                        <div class="col-2 p-0">
                            <img src="${post.image}" class="img-fluid">
                        </div>
                    </div>
                </li>
   `);
}
export default PostSummaryItem;

