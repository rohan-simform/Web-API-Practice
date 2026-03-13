$(function () {
    $.ajax({
        url: "https://dummyjson.com/posts",
        method: "GET",
        success: function (res) {
            let cards ="";
            $.each(res.posts, function (i, post) {
                const title = post.title ?? "No title";
                const body = post.body ?? "No content available";

                const likes = post.reactions?.likes ?? 0;
                const dislikes = post.reactions?.dislikes ?? 0;
                const views = post.views ?? 0;
                const userId = post.userId ?? "Unknown";

                const tags = post.tags?.length
                    ? `<div class="tags">${post.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>`
                    : "";
                    
                const card = 
                `<div class="post-card">
                    <div class="post-title">${title}</div>
                    <div class="post-body">${body}</div>
                    ${tags}
                    <div class="meta">
                        <span><i class="bi bi-hand-thumbs-up-fill"></i> ${likes}</span>
                        <span><i class="bi bi-hand-thumbs-down-fill"></i> ${dislikes}</span>
                        <span><i class="bi bi-eye-fill"></i> ${views}</span>
                        <span>User: ${userId}</span>
                    </div>
                </div>`;
                cards = cards.concat(card);
            });
            $("#posts").html(cards);
        },
        error: function (err) {
            $("#status").text("Failed to load posts");
            console.log(err);
        }
    })
})
