document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".btn");
  const body = document.body;

  btns.forEach((btn) => {
      btn.addEventListener("click", () => {
          changeBackground(btn.value);
      });
  });

  function changeBackground(color) {
      body.className = ""; // Reset existing class
      body.classList.add(color);
  }
});
