export class ToggleMap {
  constructor() {
    this.trigger = document.querySelector('[data-js="toggle-sheme"]');
    this.triggerText = null
    this.activeClass = "controls__toggle_hidden";
    this.init();
  }

  init() {
    if (!this.trigger) {
      return
    }
    this.triggerText = this.trigger.querySelector('[data-js="toggle-sheme-text"]');


    this.trigger.addEventListener("click", () => {

      const dropdown = this.trigger.nextElementSibling;
      if (!dropdown) return;

      const map = this.trigger.nextElementSibling.firstElementChild;
      const height = map.clientHeight;

      this.trigger.classList.toggle(this.activeClass);

      if (this.trigger.classList.contains(this.activeClass)) {
        this.triggerText.textContent = "Показать карту"
        dropdown.style.height = 0;
      } else {
        this.triggerText.textContent = "скрыть карту"
        dropdown.style.height = height + "px";
      }

    })
  }
}