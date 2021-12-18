import { html, css, LitElement } from 'lit';

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

  static get styles() {
    return css`
      :host {
        background-color: green;
        width: 200px;
        height: 150px;
      }

      img {
        width: inherit;
      }

      .card {
        display: block;
        width: inherit;
        border: 1px solid #f1f1f1;
        background-color: transparent;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
      }

      .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }

      /* Do an horizontal flip when you move the mouse over the flip box container */
      .card:hover .card-inner {
        transform: rotateY(180deg);
      }

      /* Position the front and back side */
      .card-front,
      .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
      }

      /* Style the front side (fallback if image is missing) */
      .card-front {
        color: black;
      }

      /* Style the back side */
      .card-back {
        transform: rotateY(180deg);
      }
    `;
  }

  constructor() {
    super();
    this.heading = 'Card heading';
    this.imageDescription = 'Card Image';
  }

  render() {
    return html`
      <h2 class="card-heading">${this.heading}</h2>
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img
              src="../assets/Bench-press-1.png"
              alt="${this.imageDescription}"
              class="card-image"
            />
          </div>
          <div class="card-back">
            <h2>Bench Press - Instructions</h2>
            <p>
              The person performing the exercise lies on their back on a bench
              with a barbell grasped in both hands. They lower the barbell to
              chest level, then press the barbell upwards, extending the arms
              until the elbows are locked out. This is one repetition (rep).
            </p>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('rookie-gym-card', RookieGymCard);
