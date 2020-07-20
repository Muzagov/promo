import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";
import {SCntFlexyViewIslamPromoQuality} from "./interface/common.interface";

@Component({
  tag: "cnt-flexy-view-islam-promo-quality",
  styleUrl: "cnt-flexy-view-islam-promo-quality.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoQuality implements ComponentInterface {
  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SCntFlexyViewIslamPromoQuality[] = []

  /**
   * Клик по Заголовку
   */
  @Event() clickQualityHeading: EventEmitter;

  /**
   * Клик по Иконке
   */
  @Event() clickQualityIcon: EventEmitter;

  /**
   * Клик по Заголовку
   */
  @Event() clickQualityTitle: EventEmitter;

  /**
   * Клик по тексту
   */
  @Event() clickQualityText: EventEmitter;

  componentDidLoad() {
    setTimeout(() => {
      // @ts-ignore
      AOS.init();
    }, 150);
  }

  render() {
    const getQuality = this.payload.map((item) => {
      return (
        <div class="col-md-4">
          <div class="common" data-aos={item.attribute}>
            <div class="briefcase" onClick={() => this.clickQualityIcon.emit('QualityIcon')}>
              <i class={item.icon} />
            </div>
            <div class="title" onClick={() => this.clickQualityTitle.emit('QualityTitle')}>{item.title}</div>
            <div class="text" onClick={() => this.clickQualityText.emit('QualityText')}>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div class="quality">
        <div class="heading" onClick={() => this.clickQualityHeading.emit('QualityHeading')}>
          <h2>{this.payload[0].heading}</h2>
        </div>
        <div class="container">
          <div class="row">
            {getQuality}
          </div>
        </div>
      </div>
    );
  }
}
