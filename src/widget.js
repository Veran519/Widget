import styles from './styles/widget.css';
import { getTranslation } from './vocab.js';

class TravelWidget extends HTMLElement {

  static get observedAttributes() {
    return ['background-color', 'button-color', 'text-color', 'lang'];
  }

  constructor() {
    super();
    // Создаём Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        ${styles}
      </style>

      <form class="widget" action="#">
        <h2 class="widget_title">Where does it come from? Why do we use it?</h2>
        <div class="widget_bottom">
                <p class="widget_text">It is a long established fact that a reader will be
            distracted by the readable content of a page when
            looking at its layout.</p>   
        <div class="widget_right">
            <div class="widget_fields">
            <label class="field">
                <input type="text" placeholder="Depart date">
                <svg class="field_icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title/><g data-name="Layer 2"><path d="M24,29H8a5,5,0,0,1-5-5V10A5,5,0,0,1,8,5H24a5,5,0,0,1,5,5V24A5,5,0,0,1,24,29ZM8,7a3,3,0,0,0-3,3V24a3,3,0,0,0,3,3H24a3,3,0,0,0,3-3V10a3,3,0,0,0-3-3Z"/><path d="M24,25H20a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v4A1,1,0,0,1,24,25Zm-3-2h2V21H21Z"/><path d="M28,13H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/><path d="M11,9a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V8A1,1,0,0,1,11,9Z"/><path d="M21,9a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V8A1,1,0,0,1,21,9Z"/></g><g><rect fill="none" height="32" width="32"/></g></svg>
            </label>
            <label class="field">
                <input type="text" placeholder="Return date">
                <svg class="field_icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title/><g data-name="Layer 2"><path d="M24,29H8a5,5,0,0,1-5-5V10A5,5,0,0,1,8,5H24a5,5,0,0,1,5,5V24A5,5,0,0,1,24,29ZM8,7a3,3,0,0,0-3,3V24a3,3,0,0,0,3,3H24a3,3,0,0,0,3-3V10a3,3,0,0,0-3-3Z"/><path d="M24,25H20a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v4A1,1,0,0,1,24,25Zm-3-2h2V21H21Z"/><path d="M28,13H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/><path d="M11,9a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V8A1,1,0,0,1,11,9Z"/><path d="M21,9a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V8A1,1,0,0,1,21,9Z"/></g><g><rect fill="none" height="32" width="32"/></g></svg>
            </label>
            </div>
            <button class="widget_search">SEARCH</button>
        </div>
        </div>
      </form>
    `;
  }

   connectedCallback() {
    this._render();
    this._applyColors();
  }

  attributeChangedCallback(name, oldValue, newValue) {
  if (oldValue === newValue) return;
  if (name === 'lang') {
    this._render();       // перерисовать с новым языком
    this._applyColors();  // цвета могли сброситься при перерисовке
  } else {
    this._applyColors();
  }
}

  _render() {
    const lang = this.getAttribute('lang') || 'en';
    const t = getTranslation(lang);

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <form class="widget" action="#">
        <h2 class="widget_title">${t.title}</h2>
        <div class="widget_bottom">
          <p class="widget_text">${t.subtitle}</p>
          <div class="widget_right">
            <div class="widget_fields">
              <label class="field">
                <input type="text" placeholder="${t.departPlaceholder}">
                <svg class="field_icon" ...>...</svg>
              </label>
              <label class="field">
                <input type="text" placeholder="${t.returnPlaceholder}">
                <svg class="field_icon" ...>...</svg>
              </label>
            </div>
            <button class="widget_search">${t.search}</button>
          </div>
        </div>
      </form>
    `;
  }

  _applyColors() {
    const root = this.shadowRoot.querySelector('.widget');
    if (!root) return;

    const bg = this.getAttribute('background-color');
    const buttonBg = this.getAttribute('button-color');
    const text = this.getAttribute('text-color');

    if (bg) root.style.setProperty('--widget-bg', bg);
    if (buttonBg) root.style.setProperty('--widget-button-bg', buttonBg);
    if (text) {
      root.style.setProperty('--widget-text', text);
      // иконка календаря тоже должна подстраиваться под текст? 
      // по умолчанию она синяя — оставляем как есть
    }
  }
}

customElements.define('travel-widget', TravelWidget);