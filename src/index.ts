import "./components/export"
import "./screens/dashboard/dashboard"
import "./screens/add/add"
import "./screens/login/login"
import "./screens/profile/profile"
import "./screens/register/register"
import "./screens/search/search"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('my-profile');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)