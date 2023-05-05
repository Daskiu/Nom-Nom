import {AttributeInput} from "../../components/export"
import { getShape } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import register from "./register.css";

class Register extends HTMLElement{
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
            <div class="register">
                <h1>Register</h1>
                <my-input placeholder="Name"></my-input>
                <my-input placeholder="Last name"></my-input>
                <my-input placeholder="Email"></my-input>
                <my-input placeholder="Password"></my-input>
                <my-input placeholder="Confirm Password"></my-input>
                <button class="button">Register</button>
            </div>
            `;
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = register;
        this.shadowRoot?.appendChild(css);
    }
}
export default Register;
customElements.define("my-register", Register);