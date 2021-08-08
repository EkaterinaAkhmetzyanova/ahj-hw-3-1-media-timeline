export default class TextPost {
  constructor(text, geo) {
    this.posts = document.querySelector('.timeline-posts');
    this.text = text;
    this.geo = geo;
  }

  getPost() {
    this.created = new Date().toLocaleString('ru');
    this.textPost = document.createElement('div');
    this.textPost.className = 'timeline-post';
    this.textPost.innerHTML = `
        <div class="post-body">
          <div class="post-content">${this.text}</div>
          <div class="post-geo">[${this.geo}]</div>
        </div>
        <div class="post-created">${this.created}</div>
        `;
    this.posts.prepend(this.textPost);
  }
}
