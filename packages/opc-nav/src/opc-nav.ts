import { LitElement, html, property, customElement } from "lit-element";

@customElement("opc-nav")
export class OpcNav extends LitElement {
  @property() name = "opc-nav";

  render() {
    return html` <h1 id="opc-nav">${this.name}</h1> `;
  }
}
