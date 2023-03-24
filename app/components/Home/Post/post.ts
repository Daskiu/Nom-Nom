export enum Attribut {
    "profileimg" = "profileimg",
    "name" = "name",
    "img" = "img",
    "like" = "like",
    "numb" = "numb",
    "comment" = "comment",
}

class Post extends HTMLElement{
    profileimg?: string;
    name?: string;
    img?: string;
    like?: string;
    numb?: string;
    comment?: string;

    static get observedAttributes(){
        const attrs: Record<Attribut, null> ={
            profileimg: null,
            name: null,
            img: null,
            like: null,
            numb: null,
            comment: null,
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

    attributeChangedCallback(
        propimg: Attribut,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propimg) {
                default:
                this[propimg] = newValue;
                break;
            }

            this.render();
        }

        render(){
            if (this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/Home/Post/post.css">
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
        }
}

customElements.define("my-post", Post);
export default Post;