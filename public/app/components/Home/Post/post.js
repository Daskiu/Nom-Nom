export var Attribut;
(function (Attribut) {
    Attribut["profileimg"] = "profileimg";
    Attribut["name"] = "name";
    Attribut["img"] = "img";
    Attribut["like"] = "like";
    Attribut["numb"] = "numb";
    Attribut["comment"] = "comment";
})(Attribut || (Attribut = {}));
class Post extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
                `;
        }
    }
}
customElements.define("my-post", Post);
export default Post;
