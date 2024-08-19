class MyElement extends HTMLElement {
  set article(value) {
    this.innerHTML = `
            <p>${value}</p>
        `;
  }
}

customElements.define("my-div", MyElement);

const element = document.createElement("my-div");
element.article = "Pratyush";
document
  .querySelector(".custom-elements")
  .insertAdjacentElement("afterbegin", element);
