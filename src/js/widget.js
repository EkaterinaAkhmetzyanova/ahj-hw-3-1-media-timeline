import Geolocation from './Geolocation';
import Modal from './Modal';
import TextPost from './TextPost';

export default class Widget {
  constructor() {
    this.modal = new Modal();
    this.posts = [];
    this.text = document.querySelector('.timeline-text');
    this.addPost = this.addPost.bind(this);
  }

  init() {
    this.text.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this.registerEvent();
      }
    });
  }

  registerEvent() {
    if (this.text.value.trim() === '') {
      this.err = document.createElement('div');
      this.err.className = 'err-empty';
      this.err.innerText = 'Введите текст';
      document.body.append(this.err);
      this.text.addEventListener('keyup', () => this.err.remove());
    } else {
      this.geolocation = new Geolocation(this.addPost);
      this.geolocation.getGeo();
    }
  }

  addPost(geo) {
    const post = new TextPost(this.text.value, geo);
    post.getPost();
    this.text.value = '';
  }
}
