document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const list = document.querySelector("#list");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector("textarea").value;

    axios
      .post("/api/burgers", {
        burger_name: name,
        devoured: false
      })
      .then(res => {
        location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  });
});

list.addEventListener("click", function(e) {
  if (e.target.matches("button")) {
    const li = e.target.closest("li");
    const id = li.getAttribute("data-id");
    const devoured = li.getAttribute("data-devoured") === "1" ? false : true;
    let burger_type = true;

    if (devoured) {
      burger_type = true;
    } else {
      burger_type = false;
    }

    axios
      .patch("/api/burgers", {
        id,
        devoured,
        burger_type
      })
      .then(result => {
        location.reload();
      });
  }
});
