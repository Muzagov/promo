import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SCntFlexyViewIslamPromoOpportunity} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-islam-promo-opportunities',
  styleUrl: 'cnt-flexy-view-islam-promo-opportunities.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoOpportunities implements ComponentInterface {

  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SCntFlexyViewIslamPromoOpportunity[] = []

  /**
   * Клик по Заголовку
   */
  @Event() clickOpportunitiesHeading: EventEmitter;

  /**
   * Клик по Первой иконке
   */
  @Event() clickOpportunitiesComputerIcon: EventEmitter;

  /**
   * Клик по Первому под заголовку
   */
  @Event() clickOpportunitiesComputerTitle: EventEmitter;

  /**
   * Клик по Первому тексту
   */
  @Event() clickOpportunitiesComputerText: EventEmitter;

  /**
   * Клик по Второй иконке
   */
  @Event() clickOpportunitiesCogIcon: EventEmitter;

  /**
   * Клик по Второму под заголовку
   */
  @Event() clickOpportunitiesCogTitle: EventEmitter;

  /**
   * Клик по Второму тексту
   */
  @Event() clickOpportunitiesCogText: EventEmitter;

  /**
   * Клик по Третьей иконке
   */
  @Event() clickOpportunitiesPictureIcon: EventEmitter;

  /**
   * Клик по Третьему под заголовку
   */
  @Event() clickOpportunitiesPictureTitle: EventEmitter;

  /**
   * Клик по Третьму тексту
   */
  @Event() clickOpportunitiesPictureText: EventEmitter;

  componentDidLoad() {
    setTimeout(() => {
      // @ts-ignore
      AOS.init();
    }, 150);
  }

  render() {
    return (
      <div class="opportunities">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="heading" onClick={() => this.clickOpportunitiesHeading.emit('OpportunitiesHeading')}>
              <h2>{this.payload[0].heading}</h2>
              </div>
            </div>
              <div class="col-md-4" data-aos={this.payload[0].attributeRight}>
                <div class="common">
                <div class="icon" onClick={() => this.clickOpportunitiesComputerIcon.emit('OpportunitiesComputerIcon')}>
                  <i class={this.payload[0].computerIcon}/>
                </div>
                <div class="title" onClick={() => this.clickOpportunitiesComputerTitle.emit('OpportunitiesComputerTitle')}>
                  <h4>{this.payload[0].computerTitle}</h4>
                </div>
                  <div class="text" onClick={() => this.clickOpportunitiesComputerText.emit('OpportunitiesComputerText')}>
                    <p>{this.payload[0].computerText}</p>
                  </div>
              </div>
            </div>
              <div class="col-md-4" data-aos={this.payload[0].attribute}>
                <div class="common">
                <div class="icon" onClick={() => this.clickOpportunitiesCogIcon.emit('OpportunitiesCogIcon')}>
                  <i class={this.payload[0].cogIcon}/>
                </div>
                  <div class="title" onClick={() => this.clickOpportunitiesCogTitle.emit('OpportunitiesCogTitle')}>
                    <h4>{this.payload[0].cogTitle}</h4>
                  </div>
                <div class="text" onClick={() => this.clickOpportunitiesCogText.emit('OpportunitiesCogText')}>
                  <p>{this.payload[0].cogText}</p>
                </div>
              </div>
            </div>
              <div class="col-md-4" data-aos={this.payload[0].attributeLeft}>
                <div class="common">
                <div class="icon1" onClick={() => this.clickOpportunitiesPictureIcon.emit('OpportunitiesPictureIcon')}>
                  <i class={this.payload[0].pictureIcon}/>
                </div>
                  <div class="title" onClick={() => this.clickOpportunitiesPictureTitle.emit('OpportunitiesPictureTitle')}>
                    <h4>{this.payload[0].pictureTitle}</h4>
                  </div>
                <div class="text" onClick={() => this.clickOpportunitiesPictureText.emit('OpportunitiesPictureText')}>
                  <p>{this.payload[0].pictureText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
