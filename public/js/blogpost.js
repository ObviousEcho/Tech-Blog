const commentFormHandler = async (event) => {
  event.preventDefault();
  const comment = document.querySelector("#post-comment").value.trim();
  const blog_id = document.querySelector(".sub-btn").getAttribute("data-id");
  const user_id = document
    .querySelector(".sub-btn")
    .getAttribute("data-userId");

  if (comment) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ comment, blog_id, user_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#comment-text")
  .addEventListener("submit", commentFormHandler);
