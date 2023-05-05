import menu from "./menu.css"
export enum AttributeMenu {
    "home" = "home",
    "search" = "search",
    "add" = "add",
    "profile" = "profile"
}

export default class Menu extends HTMLElement{
    home?: string;
    search?: string;
    add?: string;
    profile?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeMenu, null> ={
            home: null,
            search: null,
            add: null,
            profile: null,
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: AttributeMenu,
        _: string | undefined,
        newValue: string | undefined
    ){
        switch(propName){
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML =`
            <div class="menu">
                <div id="menu2">
                    <img id="home" src="/Images/Home.png">
                    <img id="search" src="/Images/Search.png">
                </div>
                <div id="menu3">
                    <img id="add" src="/Images/Save.png">
                    <img id="profile" src="/Images/profile.png">
                </div>
            </div>
            `
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = menu;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define("my-menu", Menu);