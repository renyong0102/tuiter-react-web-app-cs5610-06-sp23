/* eslint-env jquery */

const PostSummaryItem = (post) =>{
    return(`
        <div class="list-group-item d-flex">
            <div class="me-auto">
                <div class="text-muted">
                    ${post.topic? `<b>${post.topic}</b>` : ''}
                </div>
                <span><b>${post.userName}</b></span>
                <i class="fa fa-solid fa-circle-check text-white"></i>
                <span class="text-muted"> - ${post.time}</span><br>
                <div>
                    ${post.title? `<b>${post.title}</b>` : ''}
                </div>
                ${post.tweets? `<span class="text-muted">${post.tweets}</span>` : ''}
                
            </div>
            <div class="float-end">
                <img src= ${post.image}
                     height="100px"
                     width="100px"
                     class="wd-image-round wd-center">
            </div>
        </div>
    `);
}
export default PostSummaryItem;
