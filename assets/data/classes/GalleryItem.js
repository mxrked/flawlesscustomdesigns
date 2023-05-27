export default class GalleryItem {
  /**
   *
   *  This is used to create a gallery item that the user can click on
   *
   * @param {*} id
   * @param {*} img
   */
  constructor(id, img) {
    this._id = id;
    this._img = img;
  }

  set setId(id) {
    this._id = id;
  }
  set setImg(img) {
    this._img = img;
  }

  get getId() {
    return this._id;
  }
  get getImg() {
    return this._img;
  }
}
