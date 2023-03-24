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
                <div id="menu">
                <div id="menu2">
                    <img id="home" src="${this.home}">
                    <img id="search" src="${this.search}">
                    </div>
                    <div id="menu3">
                    <img id="add" src="${this.add}">
                    <img id="profile" src="${this.profile}">
                    </div>
                </div>
                `;
        }
    }
}
customElements.define("my-menu", Menu);
export default Menu;
