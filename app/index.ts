import dataMenu from "./components/Home/Menu/datamenu.js";
import dataPost from "./components/Home/Post/datapost.js";

import "./components/indexcom.js";
import Menu, {Attribute} from "./components/Home/Menu/menu.js"
import Post, {Attribut} from "./components/Home/Post/post.js"

class AppContainer extends HTMLElement{
    Menu: Menu[] = [];
    Post: Post[] = [];

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        dataMenu.forEach((data) =>{
            const menuCard = this.ownerDocument.createElement("my-menu") as Menu;
            menuCard.setAttribute(Attribute.home, data.home);
            menuCard.setAttribute(Attribute.search, data.search);
            menuCard.setAttribute(Attribute.add, data.add);
            menuCard.setAttribute(Attribute.profile, data.profile);
            this.Menu.push(menuCard);
        });

        /*dataPost.forEach((data) =>{
            const postCard = this.ownerDocument.createElement("my-post") as Post;
            postCard.setAttribute(Attribute.profileimg, data.profileimg);
            postCard.setAttribute(Attribute.name, data.name);
            postCard.setAttribute(Attribute.add, data.add);
            postCard.setAttribute(Attribute.profile, data.profile);
            postCard.setAttribute(Attribute.profile, data.profile);
            postCard.setAttribute(Attribute.profile, data.profile);
            this.Post.push(postCard)
        });*/
    }

    connectedCallback() {
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML +=`
            
            `
        }
    }
}

customElements.define("app-container", AppContainer);