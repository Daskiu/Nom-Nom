export enum Attri {
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
    numb?: number;
    comment?: string;

    static get observedAttributes(){
        const attrs: Record<Attri, null> ={
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
        propimg: Attri,
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
                <div class="postCard">
                    <img class="profileImage" src="${this.profileimg}">
                    <p class="name">${this.name}</p>
                    <img class="img" src="${this.img}">
                    <div class="actions">
                        <img class="like" src="${this.like}">
                        <p class="numb">${this.numb}</p>
                        <img class="comment" src="${this.comment}">
                    </div>
                </div>
                `
            }
        }
}

customElements.define("my-post", Post);
export default Post;