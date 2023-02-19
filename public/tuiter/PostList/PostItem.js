/* eslint-env jquery */

const PostItem = (post) =>{
    return(`
    <div class="list-group-item d-flex border-secondary" style="border-width: 0 0 1px 0">
        <div class="col-1">
            <img class="wd-avatar-image wd-margin-top-12px-left-16px float-start ms-0" src=${post.profileImage}>
        </div>
        <div class="col-11 mt-2 ms-2" style="padding-left: 10px">
            <span class="wd-font-size-15px wd-display-inline"><b>${post.userName}</b></span>
            <i class="fa fa-solid fa-circle-check text-white"></i>
            <span class="wd-font-size-15px text-muted">@${post.handle}</span>
            <span class="wd-font-size-15px text-muted">&middot; ${post.time}</span>
            <a href="#" class="fa fa-solid fa-ellipsis float-end text-muted" style="text-decoration: none"></a>
<!--            <div class="wd-clear-float"></div>-->
            <p class="wd-font-size-15px wd-content-max-width-506px wd-margin-top-5px wd-margin-bottom-10px" 
               style="margin-bottom: 5px">
                ${post.post}
            </p>
            <div class="border mt-2 wd-content-max-width-506px border-secondary" style="border-radius: 15px">
                ${post.title && post.content && post.link ? `
                    <img src=${post.image} class="wd-round-top wd-margin-bottom-0px wd-padding-bottom-0px img-fluid">
                    <div class="ms-2 mt-2 mb-2">
                    ${post.title ? `<b>${post.title}</b><br>` : ''}
                    ${post.content ? `<span class="text-muted">${post.content}</span><br>` : ''}
                    ${post.link ? `<i class="fa-solid fa-link text-muted"></i><span class="text-muted">${post.link}</span>` : ''}                  
                    </div>
                    ` : `
                    <img src=${post.image} class="wd-round-top wd-margin-bottom-0px wd-padding-bottom-0px img-fluid" style="border-radius: 15px;">
                `}
            </div>
            <div class="nav navbar wd-margin-top-12px" style="max-width: 400px">
                <a href="#" class="fa fa-regular fa-comment text-muted" style="text-decoration: none">
                    <span class="ms-2 text-muted" style="font-size: 12px">${post.comments}</span>
                </a>
                <a href="#" class="fa fa-solid fa-retweet text-muted" style="text-decoration: none">
                    <span class="ms-2 text-muted" style="font-size: 12px">${post.retweet}</span>
                </a>
                <a href="#" class="fa fa-regular fa-heart text-muted" style="text-decoration: none">
                    <span class="ms-2 text-muted" style="font-size: 12px">${post.like}</span>
                </a>
                <a href="#" class="fa fa-solid fa-arrow-up-from-bracket text-muted" style="text-decoration: none"></a>
            </div>
        </div>
    </div>
    `);
}
export default PostItem;