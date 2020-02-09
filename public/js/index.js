document.addEventListener("DOMContentLoaded", () => {
  // DOM element
  const form = document.querySelector("form");
  const list = document.querySelector("#list");

  // Form event
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector("textarea").value.trim();

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

  // Devour & Return buttons event
  list.addEventListener("click", function(e) {
    if (e.target.matches("button")) {
      // DOM
      const li = e.target.closest("li");

      // Data to post to API
      const id = li.getAttribute("data-id");
      const devoured = li.getAttribute("data-devoured") === "1" ? false : true;
      const burger_type = devoured ? true : false;

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
});
