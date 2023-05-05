import input from "./input.css"
export enum AttributeInput {
    "PlaceHolder" = "PlaceHolder",
}

export default class Input extends HTMLElement{
    PlaceHolder?: string;
    static get observedAttributes(){
        const attrs: Record<AttributeInput, null>={
            PlaceHolder: null,
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
        propName: AttributeInput,
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
            this.shadowRoot.innerHTML =`
                <input placeholder="${this.PlaceHolder}"></input>
            `;
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = input;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define("my-input", Input);