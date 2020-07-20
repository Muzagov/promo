import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SCntFlexyViewIslamPromoAboutMe} from "./interface/common.interface";
import {StorageIslamPromo} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-promo-about-me',
  styleUrl: 'cnt-flexy-view-islam-promo-about-me.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoAboutMe implements ComponentInterface {
  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SCntFlexyViewIslamPromoAboutMe[] = []

  /**
   * Клик по Заголовку
   */
  @Event() clickAboutMeHeading: EventEmitter;

  /**
   * Клик по Картинке
   */
  @Event() clickAboutMeImage: EventEmitter;

  /**
   * Клик по Тексту
   */
  @Event() clickAboutMeText: EventEmitter;

  /**
   * Клик по Кнопке
   */
  @Event() clickAboutMeButton: EventEmitter;

  /**
   * Клик по Подписи
   */
  @Event() clickAboutMeSignature: EventEmitter;

  componentDidLoad() {
    setTimeout(() => {
      // @ts-ignore
      AOS.init();
    }, 150);
  }

  render() {
    return (
     <div class="about">
       <div class="container">
         <div class="row justify-content-center">
           <div class="col-md-12">
             <div class="heading" onClick={() => this.clickAboutMeHeading.emit('AboutMeHeading')}>
               <h2>{this.payload[0].heading}</h2>
             </div>
           </div>
           <div class="col-md-6" data-aos={this.payload[0].attribute}>
             <div class="image" style={{ backgroundImage: "url(" + StorageIslamPromo.prefix + this.payload[0].image + ")" }} onClick={() => this.clickAboutMeImage.emit('AboutMeImage')}>
             </div>
           </div>
           <div class="col-md-6">
             <div class="text" onClick={() => this.clickAboutMeText.emit('AboutMeText')}>
               {this.payload[0].text}
             </div>
             <div class="col-12">
               <div class="signature" onClick={() => this.clickAboutMeSignature.emit('AboutMeSignature')}>
                 {this.payload[0].signature}
               </div>
             </div>
             <div class="button">
               <button class="btn" onClick={() => this.clickAboutMeButton.emit('AboutMeButton')}>
                 {this.payload[0].button}
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
    );
  }

}
