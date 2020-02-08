window.addEventListener("DOMContentLoaded", () => {
  console.log("dd");

  const form = document.querySelector("form");

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
      })
      .catch(err => {
        console.log(err);
      });
  });
});
