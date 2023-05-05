import {AttributeInput} from "../../components/export"
import { getShape } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import profile from "./profile.css";

class Profile extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback() {
        if (appState.shape.length === 0) {
          const action = await getShape();
          dispatch(action);
        } else {
          this.render();
        }
      }

      render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML =`
            `;
        }
        if(this.shadowRoot){
            this.shadowRoot.innerHTML +=`
            <my-menu></my-menu>
            <my-profcard></my-profcard>
            `;
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = profile;
        this.shadowRoot?.appendChild(css);
    }
}
export default Profile;
customElements.define("my-profile", Profile);