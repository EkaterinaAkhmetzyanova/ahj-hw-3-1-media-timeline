/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import Modal from './Modal';

export default class Geolocation {
  constructor(callback) {
    this.modal = new Modal();
    this.callback = callback;
    this.formValidity = this.formValidity.bind(this);
  }

  getGeo() {
    this.getGeoPermission().then((geo) => {
      this.callback(geo);
    }).catch(() => {
      this.modal.openModal();
      this.form = document.querySelector('.err-form');
      this.input = document.querySelector('.err-input');
      this.form.addEventListener('submit', this.formValidity);
    });
  }

  getGeoPermission() {
    if (!navigator.geolocation) {
      return new Promise((resolve, reject) => reject(new Error('There is no GEO API')));
    }
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        resolve(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
        console.log(latitude, longitude);
      }, (error) => {
        reject(error);
      });
    });
  }

  geoValidity(geolocation) {
    if (geolocation.match(/[^0-9[\]-\s.,]/g)) {
      // throw new Error('error');
      return false;
    }
    const pos = geolocation.replace(/[[\]\s+]/g, '');
    const arr = pos.split(',');
    if (!arr[0] || !arr[1]) {
      return false;
    }
    console.log(arr);
    const latitude = Number(arr[0]);
    const longitude = Number(arr[1]);
    return [latitude, longitude];
  }

  formValidity(event) {
    event.preventDefault();
    const coords = document.querySelector('.err-input');
    const validGeo = this.geoValidity(coords.value);
    console.log(validGeo);
    if (!validGeo || this.input.value.trim() === '') {
      this.errText = document.querySelector('.err-text');
      this.errText.innerHTML = `
        <p>Введите координаты в формате 00.00000, 00.00000</p>
       `;
      return false;
    }
    this.callback(validGeo);
    document.querySelector('.err-modal').remove();
  }
}
