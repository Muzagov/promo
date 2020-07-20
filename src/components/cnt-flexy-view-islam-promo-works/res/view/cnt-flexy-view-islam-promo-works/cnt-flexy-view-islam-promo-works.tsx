import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SCntFlexyViewIslamPromoWorks} from "./interface/common.interface";
import {StorageIslamPromo} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-promo-works',
  styleUrl: 'cnt-flexy-view-islam-promo-works.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoWorks implements ComponentInterface {
  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SCntFlexyViewIslamPromoWorks[] = []

  /**
   * Клик по Заголовку
   */
  @Event() clickWorksHeading: EventEmitter;

  /**
   * Клик по первой картинке
   */
  @Event() clickWorksShopImage: EventEmitter;

  /**
   * Клик по тексту
   */
  @Event() clickWorksShopText: EventEmitter;

  /**
   * Клик по второй картинке
   */
  @Event() clickWorksWorkImage1: EventEmitter;

  /**
   * Клик по тексту
   */
  @Event() clickWorksWorkText1: EventEmitter;

  /**
   * Клик по третьей картинке
   */
  @Event() clickWorksWorkImage2: EventEmitter;

  /**
   * Клик по тексту
   */
  @Event() clickWorksWorkText2: EventEmitter;


  /**
   * Клик по Кнопке
   */
  @Event() clickWorksButton: EventEmitter;

  componentDidLoad() {
    setTimeout(() => {
      // @ts-ignore
      AOS.init();
    }, 150);
  }

  render() {
    return (
      <div class="works">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="heading" onClick={() => this.clickWorksHeading.emit('WorksHeading')}>
                <h2>{this.payload[0].heading}</h2>
              </div>
            </div>
            <div class="col-md-4" data-aos={this.payload[0].attributeRight}>
              <div class="image" style={{ backgroundImage: "url("+ StorageIslamPromo.prefix + this.payload[0].workImage1 + ")" }} onClick={() => this.clickWorksWorkImage1.emit('WorksWorkImage1')}>
              </div>
                <div class="text">
                  {this.payload[0].workText1}
                </div>
              <div class="button" onClick={() => this.clickWorksButton.emit('WorksButton')}>
                <a href="https://github.com/Muzagov/Visit/">
                <button class="btn">
                  {this.payload[0].button}
                </button>
                </a>
              </div>
            </div>
            <div class="col-md-4" data-aos={this.payload[0].attribute}>
              <div class="image" style={{ backgroundImage: "url("+ StorageIslamPromo.prefix + this.payload[0].shopImage + ")" }} onClick={() => this.clickWorksShopImage.emit('WorksShopImage')}>
              </div>
              <div class="text" onClick={() => this.clickWorksShopText.emit('WorksShopText')}>
                {this.payload[0].shopText}
              </div>
              <div class="button">
                <a href="https://muzagov.github.io/shop/">
                  <button class="btn" onClick={() => this.clickWorksButton.emit('WorksButton')}>
                    {this.payload[0].button}
                  </button>
                </a>
              </div>
            </div>
            <div class="col-md-4" data-aos={this.payload[0].attributeLeft}>
              <div class="image" style={{ backgroundImage: "url("+ StorageIslamPromo.prefix + this.payload[0].workImage2 + ")" }} onClick={() => this.clickWorksWorkImage2.emit('WorksWorkImage2')}>
              </div>
                <div class="text" onClick={() => this.clickWorksWorkText2.emit('WorksWorkText2')}>
                  {this.payload[0].workText2}
                </div>
              <div class="button">
                <a href="https://muzagov.github.io/Finish/">
                <button  class="btn" onClick={() => this.clickWorksButton.emit('WorksButton')}>
                  {this.payload[0].button}
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
