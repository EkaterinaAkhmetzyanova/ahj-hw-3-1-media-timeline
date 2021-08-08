export default class Modal {
  constructor() {
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.modal = document.createElement('div');
    this.modal.className = 'err-modal';
    this.modal.innerHTML = `
        <div class='err-text'>
          <p>Что-то пошло не так</p>
          <p>К сожалению, нам не удалось определить ваше местоположение, пожалуйста, дайте разрешение на использование геолокации, либо введите координаты вручную.</p>
          <p>Широта и долгота через запятую</p>
        </div>
        <form class="err-form">
          <input class="err-input" required>
          <div class="err-btn">
            <button class="cancel-btn">Отмена</button>
            <button class="ok-btn">Ок</button>
          </div>
        </form>
        `;
    document.body.append(this.modal);
    this.form = this.modal.querySelector('.err-form');
    this.cancel = this.form.querySelector('.cancel-btn');
    this.cancel.addEventListener('click', () => this.modal.remove());
  }
}
