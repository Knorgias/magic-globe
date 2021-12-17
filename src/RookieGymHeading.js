import { html, LitElement } from 'lit';

export class RookieGymHeading extends LitElement {
  render() {
    return html`<h1>Welcome to Rookie Gym</h1>`;
  }
}
customElements.define('rookie-gym-heading', RookieGymHeading);
