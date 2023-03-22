import dataMenu from "./components/Home/Menu/datamenu.js";
import dataPost from "./components/Home/Post/datapost.js";

import * as components from "./components/indexcom.js";
import Menu, {Attribute} from "./components/Home/Menu/menu.js";
import Post, {Attribut} from "./components/Home/Post/post.js";

class AppContainer extends HTMLElement{
    MenuList: Menu[]=[];
    PostList: Post[]=[];

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        dataMenu.forEach((data)=>{
            const menuCard = this.ownerDocument.createElement("my-menu") as Menu;
            menuCard.setAttribute(Attribute.home, data.home);
            menuCard.setAttribute(Attribute.search, data.search);
            menuCard.setAttribute(Attribute.add, data.add);
            menuCard.setAttribute(Attribute.profile, data.profile);
            this.MenuList.push(menuCard);
        });

        dataPost.forEach((data)=>{
            const postCard = this.ownerDocument.createElement("my-post") as Post;
            postCard.setAttribute(Attribut.profileimg, data.profileimg);
            postCard.setAttribute(Attribut.name, data.name);
            postCard.setAttribute(Attribut.img, data.img);
            postCard.setAttribute(Attribut.like, data.like);
            postCard.setAttribute(Attribut.numb, data.numb);
            postCard.setAttribute(Attribut.comment, data.comment);
            this.PostList.push(postCard);
        });
    }

    connectedCallback(){
        this.render();
    }

    render(){

        const menuCards = this.ownerDocument.createElement("section");
        menuCards.className ="menuCards"
        this.MenuList.forEach((menuCard)=>{
            menuCards.appendChild(menuCard)
        });
        this.shadowRoot?.appendChild(menuCards);

        const postCards = this.ownerDocument.createElement("section");
        menuCards.className ="postCards"
        this.PostList.forEach((postCard)=>{
            menuCards.appendChild(postCard)
        });
        this.shadowRoot?.appendChild(postCards);
    }
}

customElements.define("app-container", AppContainer);