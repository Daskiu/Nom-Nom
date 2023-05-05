import {AttributeInput} from "../../components/export"
import { getShape } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import login from "./login.css";

class Login extends HTMLElement{
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
            <div class="login">
                <h1>Welcome</h1>
                <my-input placeholder="Coloca tu nombre"></my-input>
                <my-input placeholder="Coloca tu contraseña"></my-input>
                <button class="button">Login</button>
            </div>
            `;
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = login;
        this.shadowRoot?.appendChild(css);
    }
}
export default Login;
customElements.define("my-login", Login);