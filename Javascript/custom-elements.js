class myElement extends HTMLElement{
    set article(value){
        this.innerHTML = `
            <p>${value}</p>
        `;
    }
}

customElements.define('my-div',myElement);

let element = document.createElement('my-div');
element.article = "Pratyush";
document.querySelector('.custom-elements').appendChild(element);