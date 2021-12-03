import { html, css, LitElement } from 'lit';

const quotes = [
  '"If a man knows not which port he sails, no wind is favorable." – Seneca',
  '"Often a very old man has no other proof of his long life than his age." - Seneca',
  '"How long are you going to wait before you demand the best for yourself?" – Epictetus',
  '"First say to yourself what you would be; and then do what you have to do." – Epictetus',
  '"Waste no more time arguing what a good man should be. Be One." – Marcus Aurelius',
  '"I \'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." - Maya Angelou',
];

export class MagicGlobe extends LitElement {
  static styles = css`
    p {
      color: #113f67;
      text-align: center;
    }
    h1 {
      color: #113f67;
      text-align: center;
      border-bottom: 2mm ridge #a2a8d3;
    }
    button {
    }
    #magic-globe {
      background-color: #e7eaf6;
      border: 4mm ridge #a2a8d3;
      min-height: 500px;
      width: 600px;
      /* Center horizontally*/
      margin: 0 auto;
    }
  `;

  static properties = {
    name: { type: String },
    quote: {
      type: String,
    },
  };

  constructor() {
    super();
    this.name = 'Somebody';
    this.quote = this._getRandomQuote();
  }

  _getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  _updateQuote() {
    this.quote = this._getRandomQuote();
    console.log(this.quote);
    this.requestUpdate();
  }

  render() {
    const theQuote = html`<div>${this.quote}</div>`;
    return html`
      <div id="magic-globe">
        <h1>*JS Magic globe*</h1>
        ${theQuote}

        <button @click=${this._updateQuote}>Update</button>
      </div>
    `;
  }
}
customElements.define('magic-globe', MagicGlobe);
