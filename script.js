$(function () {
    $.ajax({
        url: "https://dummyjson.com/posts",
        method: "get",
        success: function (res) {
            $.each(res.posts, function (i, post) {
                const tags = post.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
                const card = 
                `<div class="post-card">
                    <div class="post-title">${post.title}</div>
                    <div class="post-body">${post.body}</div>
                    <div class="tags">${tags}</div>
                    <div class="meta">
                        <span><i class="bi bi-hand-thumbs-up-fill"></i> ${post.reactions.likes}</span>
                        <span><i class="bi bi-hand-thumbs-down-fill"></i> ${post.reactions.dislikes}</span>
                        <span><i class="bi bi-eye-fill"></i> ${post.views}</span>
                        <span>User: ${post.userId}</span>
                    </div>
                </div>`;
                $("#posts").append(card);
            })
        },
        error: function (err) {
            $("#status").text("Failed to load posts");
            console.log(err);
        }
    })
})
