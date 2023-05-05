import Menu, {AttributeMenu } from "../../components/Menu/menu";
import addcard, {AttributeProfadd} from "../../components/addcard/addcard";
import { getShape } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import addc from "./add.css"



class add extends HTMLElement{
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
            this.shadowRoot.innerHTML=`
            `;
        }
        if(this.shadowRoot){
            this.shadowRoot.innerHTML +=`
            <my-menu></my-menu>
            <my-addcard></my-addcard>
            `;
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = addc;
        this.shadowRoot?.appendChild(css);
    }
}
export default add;
customElements.define("my-add", add);