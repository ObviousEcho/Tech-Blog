function addPost() {
  const addButton = document.querySelector(".add-button");
  const dashboard = document.querySelector(".dashboard");
  const postInput = document.querySelector(".post-input");

  addButton.setAttribute("id", "dashboard-display");
  dashboard.setAttribute("id", "dashboard-display");
  postInput.removeAttribute("id");
}

const createPostHandler = async (event) => {
  event.preventDefault();
  const post_title = document.querySelector("#post-title").value.trim();
  const contents = document.querySelector("#post-body").value.trim();
  const user_id = document
    .querySelector(".create-btn")
    .getAttribute("data-user_id");

  if (post_title && contents) {
    const response = await fetch("api/blog", {
      method: "POST",
      body: JSON.stringify({ post_title, contents, user_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".add-button").addEventListener("click", addPost);
document
  .querySelector("#create-post")
  .addEventListener("submit", createPostHandler);
