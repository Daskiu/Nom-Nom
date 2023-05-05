import searchcard from "./searchcard.css"
export enum AttributeSearch {
    "img" = "img",
    "search" = "search",
}

export default class Searchcard extends HTMLElement{
img?: string;
search?: string;

static get observedAttributes(){
    const attrs: Record<AttributeSearch, null> ={
        img: null,
        search: null
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
    propName: AttributeSearch,
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
    if(this.shadowRoot){
        this.shadowRoot.innerHTML=`
        <div id="searchbar">
            <input id="search" type="text">
            <img src="../Images/Search.png">
        </div>
        `;
    }
    const css = this.ownerDocument.createElement("style");
        css.innerHTML = searchcard;
        this.shadowRoot?.appendChild(css);
}
}

customElements.define("my-searchcard", Searchcard);