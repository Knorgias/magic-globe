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
        height: 300px;

        font-family: Verdana, sans-serif;
      }

      .card {
        box-sizing: border-box;

        width: inherit;
        height: inherit;
        position: relative;
        text-align: center;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
      }

      /** card heading shares the (rest of the) height of card with card-content*/
      .card-heading {
        /** typography */
        font-size: 18px;

        background-color: skyblue;
        padding: 4px;
        margin: auto;
        height: 32px;
        max-width: 100%;
        max-height: 100%;
      }

      .card-content {
        /** typography */
        font-size: 12px;

        /**spacing */
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;

        /**borders & shadows */
        border: 2px solid black;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

        /** anitaions */
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }

      /* hover and focus-within states */
      .card:hover .card-content,
      .card:focus-within .card-content {
        transform: rotateY(180deg);
      }

      /* Position the front and back side */
      .card-front,
      .card-back {
        height: inherit;
        position: absolute;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
      }

      /* Style the front side (fallback if image is missing) */
      .card-front {
        color: black;
      }

      .card-front-image {
        margin: 8px;
        padding-top: 16px;
        display: block; /* remove extra space below image */
      }

      img {
        max-width: 100%;
        max-height: 100%;
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
      <div class="card">
        <div class="card-content">
          <div class="card-front">
            <h2 class="card-heading">${this.heading}</h2>
            <div class="card-front-image">
              <img
                src="../assets/Bench-press-1.png"
                alt="${this.imageDescription}"
              />
            </div>
          </div>
          <div class="card-back">
            <h2 class="card-heading">${this.heading}</h2>
            <p>Instructions</p>
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
