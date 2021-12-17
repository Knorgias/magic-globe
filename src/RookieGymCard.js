import { html, LitElement } from 'lit';

export class RookieGymCard extends LitElement {
  static get properties() {
    return {
      heading: {
        type: String,
      },
      imageDescription: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.heading = 'Card heading';
    this.imageDescription = 'Card Image';
  }

  render() {
    return html` <div>
      <h2 class="card-heading">${this.heading}</h2>
      <img
        src="../assets/Bench-press-1.png"
        alt="${this.imageDescription}"
        class="card-image"
      />
      <button>Start Exercise</button>
    </div>`;
  }
}
customElements.define('rookie-gym-card', RookieGymCard);
