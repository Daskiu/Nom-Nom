import post from "./post.css"
export enum AttributePost{
    "profileimg" = "profileimg",
    "name" = "name",
    "img" = "img",
    "like" = "like",
    "numb" = "numb",
    "comment" = "comment",
}

export default class Post extends HTMLElement{
    profileimg?: string;
    name?: string;
    img?: string;
    like?: string;
    numb?: string;
    comment?: string;

    static get observedAttributes(){
        const attrs: Record <AttributePost, null> ={
            profileimg: null,
            name: null,
            img: null,
            like: null,
            numb: null,
            comment: null,  
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributePost,
        _: unknown,
        newValue: string
    ){
        switch(propName){
            default:
                this[propName] = newValue;
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML= `
            <div id="postCard">
                <div id="perf">
                    <img id="profileImage" src="${this.profileimg}">
                    <p id="name">${this.name}</p>
                </div>
                <img id="img" src="${this.img}">
                <div id="actions">
                    <img id="like" src="${this.like}">
                    <p id="numb">${this.numb}</p>
                    <img id="comment" src="${this.comment}">
                </div>
            </div>
            `
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = post;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define("my-post", Post);