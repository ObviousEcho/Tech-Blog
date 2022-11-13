const updatePostHandler = () => {
  // const addComment = document.querySelector(".add-comment-div");
  // addComment.setAttribute("id", "dashboard-display");

  const postUpdate = document.querySelector(".update-input");
  postUpdate.removeAttribute("id");
};

const submitPostUpdateHandler = async (event) => {
  event.preventDefault();
  const updateBtn = document.querySelector(".update-btn");

  const id = updateBtn.getAttribute("data-id");
  const post_title = document.querySelector("#title-update").value.trim();
  const contents = document.querySelector("#body-update").value.trim();
  
  if (post_title && contents) {
    const response = await fetch(`/api/blog/${id}`, {
      method: "PUT",
      body: JSON.stringify({ post_title, contents }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const deletePostHandler = async (event) => {
  event.preventDefault();
  const target = event.target;

  if (target.tagName === "BUTTON") {
    const id = target.getAttribute("data-id");

    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".update-button")
  .addEventListener("click", updatePostHandler);

document
  .querySelector(".update-post")
  .addEventListener("submit", submitPostUpdateHandler);

document
  .querySelector(".delete-button")
  .addEventListener("click", deletePostHandler);
