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

const deletePostHandler = async (event) => {
  event.preventDefault();
  const target = event.target;

  if(target.tagName === "BUTTON") {
    const id = target.getAttribute("data-id");

    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#comment-text")
  .addEventListener("submit", commentFormHandler);

document
  .querySelector(".delete-button")
  .addEventListener("click", deletePostHandler);
