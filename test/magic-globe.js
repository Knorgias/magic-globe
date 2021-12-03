import { MagicGlobe } from '../src/magic-globe.js';
// import { fixture, html } from '@open-wc/testing';

const assert = chai.assert;

suite('magic-globe', () => {
  test('is defined', () => {
    const el = document.createElement('magic-globe');
    assert.instanceOf(el, MagicGlobe);
  });

  test('renders with default values', async () => {});

  test('handles a click', async () => {});
});
