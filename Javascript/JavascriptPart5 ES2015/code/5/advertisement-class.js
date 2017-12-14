class Advertisement {

    constructor(title, link) {
        this.title = title;
        this.link = link;
    }

    _buildContent() {
        return `<h1>${this.title}</h1>
          <a href="${this.link}">${this._linkText()}</a>`;
    }

    _linkText() {
        return "Click Here";
    }

    render() {
        return this._buildContent();
    }
}

export { Advertisement };