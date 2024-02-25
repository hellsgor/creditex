import Swiper from 'swiper';

class InitSlider {
  classSlider = '';

  settingsSlider = {};

  slider = null;

  customPagination = null;

  constructor(props) {
    this.classSlider = props.classSlider;
    this.settingsSlider = props.settingsSlider;

    this.checkSlider();

    if (this.settingsSlider.destroySize) {
      this.checkResizeSlider();
    }
  }

  checkSlider() {
    if (
      window.matchMedia(this.settingsSlider.destroySize).matches
      && this.settingsSlider.destroySize
    ) {
      if (this.slider) {
        try {
          this.destroySlider();
        } catch (e) {
          console.log(e);
        }
      }
      return 1;
    }
    if (!this.slider) {
      this.initSlider();
    }
  }

  checkResizeSlider() {
    window.addEventListener('resize', () => {
      this.checkSlider();
    });
  }

  initSlider() {
    this.slider = new Swiper(this.classSlider, this.settingsSlider) || null;
  }

  destroySlider() {
    this.slider.destroy();
    this.slider = null;
    document.querySelectorAll(`${this.classSlider}__slider`)?.forEach((i) => {
      i.removeAttribute('style');
    });
    document
      .querySelector(`${this.classSlider}__wrapper`)
      ?.removeAttribute('style');
  }
}

const listSliders = [
  {
    classSlider: '.section.card-issued-block',
    settingsSlider: {
      spaceBetween: 16,
      grabCursor: true,
      slidesPerView: 7,
      slidesOffsetBefore: 70,
      slidesOffsetAfter: -32,
    },
  },
];

export const initSliders = () => {
  window.slidersTmpl = listSliders.map((i) => new InitSlider(i));
};
