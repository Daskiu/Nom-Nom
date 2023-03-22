export var Attribute;
(function (Attribute) {
    Attribute["home"] = "home";
    Attribute["search"] = "search";
    Attribute["add"] = "add";
    Attribute["profile"] = "profile";
})(Attribute || (Attribute = {}));
class Menu extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            home: null,
            search: null,
            add: null,
            profile: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propimg, _, newValue) {
        switch (propimg) {
            default:
                this[propimg] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/Home/Menu/menu.css">
                <div class="menu">
                    <img class="home" src="${this.home}">
                    <img class="search" src="${this.search}">
                    <img class="add" src="${this.add}">
                    <img class="profile" src="${this.profile}">
                </div>
                `;
        }
    }
}
customElements.define("my-menu", Menu);
export default Menu;
