const WhoToFollowList = (who) => {
    return(`
       
       <li class="list-group-item">
                    <div class="row text-right">
                        <div class="col-2 p-0">
                            <img src="${who.avatarIcon}" class="rounded-circle img-fluid w-100 h-100">
                        </div>
                        <div class="ps-2 pe-2 col-10">
                            <span class="fw-bold"">${who.userName}</span>
                            <i class="fa fa-check-circle"></i>
                            <button class="rounded-pill btn btn-primary wd-float-right">Follow</button><br/>
                            ${who.handle}
                        </div>
                    </div
                </li>

   `);
}
export default WhoToFollowList;


