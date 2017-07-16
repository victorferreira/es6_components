class CustomElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.input = document.createElement('input');
        this.shadowRoot.appendChild(this.input);
    }
}

customElements.define('custom-element', CustomElement);

module.exports = CustomElement;