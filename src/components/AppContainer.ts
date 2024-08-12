import { controller } from "@github/catalyst";

@controller
export default class AppContainerElement extends HTMLElement {
  connectedCallback(): void {
    this.innerHTML = "App Container";
  }
}
