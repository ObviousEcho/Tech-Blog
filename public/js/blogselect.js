const post = document.querySelector(".blog-post");

const viewPost = async (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON");
  const id = target.getAttribute("data-postId");
  const response = await fetch("/api/blog/" + id, {
    method: "GET",
  });
};

post.addEventListener("click", viewPost);
