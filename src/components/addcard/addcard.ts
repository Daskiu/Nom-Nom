import addcard from "./addcard.css"
export enum AttributeProfadd {
    "name" = "name",
    "description" = "description",
    "photo" = "photo",
    "meal" = "meal",
  }
  
  export default class addCard extends HTMLElement {
    name?: string;
    description?: string;
    photo?: string;
    meal?: string;
  
    static get observedAttributes() {
      const attrs: Array<AttributeProfadd> = [
        AttributeProfadd.name,
        AttributeProfadd.description,
        AttributeProfadd.photo,
        AttributeProfadd.meal,
      ];
      return attrs;
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
      this.shadowRoot?.querySelector("#title")?.addEventListener("input", (event) => {
        this.setAttribute(AttributeProfadd.name, (event.target as HTMLInputElement).value);
      });
      this.shadowRoot?.querySelector("#description")?.addEventListener("input", (event) => {
        this.setAttribute(AttributeProfadd.description, (event.target as HTMLTextAreaElement).value);
      });
      this.shadowRoot?.querySelector("#photo")?.addEventListener("input", (event) => {
        this.setAttribute(AttributeProfadd.photo, (event.target as HTMLInputElement).value);
      });
      this.shadowRoot?.querySelector("#meal")?.addEventListener("change", (event) => {
        this.setAttribute(AttributeProfadd.meal, (event.target as HTMLSelectElement).value);
      });
      this.shadowRoot?.querySelector("#submit")?.addEventListener("click", () => {
        console.log("Submitted!");
      });
    }
  
    attributeChangedCallback(propName: AttributeProfadd, _: string, newValue: string) {
      switch (propName) {
        case AttributeProfadd.name:
          this.name = newValue;
          break;
        case AttributeProfadd.description:
          this.description = newValue;
          break;
        case AttributeProfadd.photo:
          this.photo = newValue;
          break;
        case AttributeProfadd.meal:
          this.meal = newValue;
          break;
        default:
          break;
      }
      this.render();
    }

render() {
        if (this.shadowRoot) {
          this.shadowRoot.innerHTML = `
            <label for="title">Title</label>
            <input id="title" type="text" value="${this.name ?? ""}">
            <label for="meal">Meal</label>
            <select id="meal">
              <option value="breakfast" ${this.meal === "breakfast" ? "selected" : ""}>Breakfast</option>
              <option value="lunch" ${this.meal === "lunch" ? "selected" : ""}>Lunch</option>
              <option value="dinner" ${this.meal === "dinner" ? "selected" : ""}>Dinner</option>
            </select>
            <label for="description">Description</label>
            <textarea id="description">${this.description ?? ""}</textarea>
            <label for="photo">Photo URL</label>
            <input id="photo" type="text" value="${this.photo ?? ""}">
            <img src="${this.photo ?? ""}">
            <button id="submit">Submit</button>
          `;
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = addcard;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define("my-addcard", addCard);