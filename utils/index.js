export const functions = {
  validationErrors(errors) {
    const row = [];

    errors.map((item) => {
      row.push(
        `<div class="mess-container"><span class='val-dot'>&#8226;</span> <span class='val-dot'>${item.msg}</span></div>`
      );
    });

    return row.join("");
  },

  customStyleError() {
    const item = document.getElementsByClassName("toasted error");
    item[0].classList.add("validation-style");
  },
};
