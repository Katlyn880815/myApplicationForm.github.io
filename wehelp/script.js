const questions = document.querySelectorAll(".questions");

//選取每一個QA方格
questions.forEach(function (curQ) {
  curQ.addEventListener("click", function () {
    curQ.classList.toggle("show-text");

    questions.forEach(function (otherQ) {
      if (otherQ !== curQ) {
        otherQ.classList.remove("show-text");
      }
    });
  });
});
