import search from "./search.css";
import {AttributeInput} from "../../components/export"
import { getShape } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

class Search extends HTMLElement{
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
            this.shadowRoot.innerHTML=``;
        }

        if(this.shadowRoot){
          this.shadowRoot.innerHTML+=`
          <my-menu></my-menu>
          <my-searchcard></my-searchcard>
          `;
      }
      const css = this.ownerDocument.createElement("style");
      css.innerHTML = search;
      this.shadowRoot?.appendChild(css);
    }
}

export default Search;
customElements.define("my-search", Search);