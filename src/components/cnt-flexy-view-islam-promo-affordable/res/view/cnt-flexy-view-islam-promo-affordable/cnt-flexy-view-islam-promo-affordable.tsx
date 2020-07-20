import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";
import {SCntFlexyViewIslamPromoAffordable} from "./interface/common.interface";

@Component({
  tag: "cnt-flexy-view-islam-promo-affordable",
  styleUrl: "cnt-flexy-view-islam-promo-affordable.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoAffordable implements ComponentInterface {
  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SCntFlexyViewIslamPromoAffordable[] = []

  /**
   * Клик по Заголовку
   */
  @Event() clickAffordableHeading: EventEmitter;

  /**
   * Клик по Под заголовку
   */
  @Event() clickAffordableName: EventEmitter;

  /**
   * Клик по Кнопке
   */
  @Event() clickAffordableButton: EventEmitter;

  componentDidLoad() {
    setTimeout(() => {
      // @ts-ignore
      AOS.init();
    }, 150);
  }

  render() {
    return (
      <div class="affordable">
        <div class="container">
          <div class="row ver">
            <div class="col-lg-12">
              <div class="common">
                <div class="heading" data-aos="fade-up" onClick={() => this.clickAffordableHeading.emit('AffordableHeading')}>
                  {this.payload[0].heading}
                </div>
                <div class="name" data-aos="fade-up" onClick={() => this.clickAffordableName.emit('AffordableName')}>
                  <p>{this.payload[0].name}</p>
                </div>
                <div class="button">
                  <button class="btn" onClick={() => this.clickAffordableButton.emit('AffordableButton')}>
                    {this.payload[0].button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
