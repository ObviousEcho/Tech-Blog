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
  .querySelector(".delete-button")
  .addEventListener("click", deletePostHandler);
