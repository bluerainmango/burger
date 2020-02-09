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
        console.log(res);
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
    const burger_name = li.getAttribute("data-burgername");
    const devoured = li.getAttribute("data-devoured") === "1" ? false : true;

    console.log(li, devoured);

    axios
      .patch("/api/burgers", {
        id,
        burger_name,
        devoured
      })
      .then(result => {
        console.log(result);
        location.reload();
      });
  }
});
