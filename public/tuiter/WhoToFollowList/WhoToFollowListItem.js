const WhoToFollowListItem = (who) =>{
    return(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="col-1">
                <img class="wd-right-side-bar-img rounded-circle"
                     src=${who.avatarIcon}
                     alt="java"/>
            </div>
            <div class="ms-4 me-auto col-7">
                <div>
                    <b>${who.userName}</b>
                    <i class="fa fa-solid fa-circle-check text-white"></i>
                </div>
                @${who.handle}
            </div>
            <div class="col-3">
                <button class="btn btn-primary rounded-pill wd-float-right"
                        type="submit">
                    Follow
                </button>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;
