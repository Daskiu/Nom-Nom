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
                `;
        }
    }
}
customElements.define("my-post", Post);
export default Post;
