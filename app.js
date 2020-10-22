fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((res) => {
    posts = res;
    postsHtml = res
      .map((post) => {
        return (
          '<div class="post">' +
          '<h3 class="post-title">' +
          post.title +
          "</h3>" +
          '<div class="post-body">' +
          post.body +
          "</div>" +
          '<button class="comment-button" data-postid="' +
          post.id +
          '">Read comments</button>' +
          '<button class="author-button" data-userid="' +
          post.userId +
          '">Author info</button>' +
          "</div>"
        );
      })
      .join("");
    document.getElementById("posts").innerHTML = postsHtml;
  });
