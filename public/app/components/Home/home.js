"use strict";
class Home extends HTMLElement {
    static get observedAttribute() {
        return [];
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <my-menu></my-menu>
            <my-post></my-post>
        `;
        }
    }
}
