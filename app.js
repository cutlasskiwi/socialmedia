// Display posts:
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
          '<button class="author-button" id="author" data-userid="' +
          post.userId +
          '">Author info</button>' +
          "</div>"
        );
      })
      .join("");
    document.getElementById("posts").innerHTML = postsHtml;
  });

// Author info:
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((res) => res.json())
  .then((res) => {
    users = res;
    userHtml = res
      .map((user) => {
        return (
          '<div class="user">' +
          "<h2>" +
          user.username +
          "</h2>" +
          "<div>" +
          user.name +
          "</div>" +
          "<div>" +
          user.email +
          "</div>" +
          "<div>" +
          user.phone +
          "</div>" +
          "<div>" +
          user.company +
          "</div>" +
          "</div>"
        );
      })
      .join("");
    const authorbtn = document.getElementById("author");
    authorbtn.addEventListener(
      "click",
      function () {
        document.getElementById("user-container").innerHTML = userHtml;
      },
      false
    );
  });
//   <!--
//   <div class="user">
//       <h2>Author</h2>
//       <div>Leanne Graham</div>
//       <div>Sincere@april.biz</div>
//       <div>Phone: 1-770-736-8031 x56442</div>
//       <br>
//       <div>Company: Romaguera-Crona</div>
//   </div>
//   -->
