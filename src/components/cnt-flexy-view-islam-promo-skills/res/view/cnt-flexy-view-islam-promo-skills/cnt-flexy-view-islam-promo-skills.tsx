import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SCntFlexyViewIslamPromoSkills} from "./interface/common.interface";
import {StorageIslamPromo} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-promo-skills',
  styleUrl: 'cnt-flexy-view-islam-promo-skills.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoSkills implements ComponentInterface {

  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SCntFlexyViewIslamPromoSkills[] = []

  /**
   * Клик по Заголовку
   */
  @Event() clickSkillsHeading: EventEmitter;

  /**
   * Клик по  Картинке Html
   */
  @Event() clickSkillsHtmlImage: EventEmitter;

  /**
   * Клик по Тексту Html
   */
  @Event() clickSkillsHtmlText: EventEmitter;

  /**
   * Клик по Картинке Css
   */
  @Event() clickSkillsCssImage: EventEmitter;

  /**
   * Клик по Тексту Css
   */
  @Event() clickSkillsCssText: EventEmitter;

  /**
   * Клик по Картинке Js
   */
  @Event() clickSkillsJsImage: EventEmitter;

  /**
   * Клик по Тексту Js
   */
  @Event() clickSkillsJsText: EventEmitter;

  /**
   * Клик по Картинке WordPress
   */
  @Event() clickSkillsWpImage: EventEmitter;

  /**
   * Клик по Тексту WordPress
   */
  @Event() clickSkillsWpText: EventEmitter;

  /**
   * Клик по Картинке Angular
   */
  @Event() clickSkillsAngularImage: EventEmitter;

  /**
   * Клик по Тексту Angular
   */
  @Event() clickSkillsAngularText: EventEmitter;

  /**
   * Клик по Картинке React
   */
  @Event() clickSkillsReactImage: EventEmitter;

  /**
   * Клик по Тексту React
   */
  @Event() clickSkillsReactText: EventEmitter;

  /**
   * Клик по Картинке Bootstrap
   */
  @Event() clickSkillsBootstrapImage: EventEmitter;

  /**
   * Клик по Тексту Bootstrap
   */
  @Event() clickSkillsBootstrapText: EventEmitter;

  /**
   * Клик по Картинке Stencil
   */
  @Event() clickSkillsStencilImage: EventEmitter;

  /**
   * Клик по Тексту Stencil
   */
  @Event() clickSkillsStencilText: EventEmitter;

  componentDidLoad() {
    setTimeout(() => {
      // @ts-ignore
      AOS.init();
    }, 150);
  }


  render() {
    return (
      <div class="skills">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="heading" onClick={() => this.clickSkillsHeading.emit('SkillsHeading')}>
                <h2>{this.payload[0].heading}</h2>
              </div>
            </div>
            <div class="col-md-3" data-aos={this.payload[0].attributeRight}>
              <div class="image"  style={{ backgroundImage: "url("+ StorageIslamPromo.prefix + this.payload[0].htmlImage + ")" }} onClick={() => this.clickSkillsHtmlImage.emit('SkillsHtmlImage')}>
              </div>
              <div class="text">
                <div class="skill-1" onClick={() => this.clickSkillsHtmlText.emit('SkillsHtmlText')}>
                </div>
                {this.payload[0].htmlText}
              </div>
            </div>
            <div class="col-md-3" data-aos={this.payload[0].attributeBottom}>
              <div class="image" style={{ backgroundImage: "url("+ StorageIslamPromo.prefix + this.payload[0].cssImage + ")" }} onClick={() => this.clickSkillsCssImage.emit('SkillsCssImage')}>
              </div>
              <div class="text">
                <div class="skill-2" onClick={() => this.clickSkillsCssText.emit('SkillsCssText')}>
                </div>
                {this.payload[0].cssText}
              </div>
            </div>
            <div class="col-md-3" data-aos={this.payload[0].attributeBottom}>
              <div class="image" style={{ backgroundImage: "url("+ StorageIslamPromo.prefix + this.payload[0].jsImage + ")" }} onClick={() => this.clickSkillsJsImage.emit('SkillsJsImage')}>
              </div>
              <div class="text">
                <div class="skill-3" onClick={() => this.clickSkillsJsText.emit('SkillsJsText')}>
                </div>
                {this.payload[0].jsText}
              </div>
            </div>
            <div class="col-md-3" data-aos={this.payload[0].attributeLeft}>
              <div class="image1" style={{ backgroundImage: "url("+ StorageIslamPromo.prefix + this.payload[0].wpImage + ")" }} onClick={() => this.clickSkillsWpImage.emit('SkillsWpImage')}>
              </div>
              <div class="text">
                <div class="skill-4" onClick={() => this.clickSkillsWpText.emit('SkillsWpText')}>
                </div>
                {this.payload[0].wpText}
              </div>
            </div>
            <div class="col-md-3 mt-5" data-aos={this.payload[0].attributeLeft}>
              <div class="image2" style={{ backgroundImage: "url("+ StorageIslamPromo.prefix + this.payload[0].angularImage + ")" }} onClick={() => this.clickSkillsAngularImage.emit('SkillsAngularImage')}>
              </div>
              <div class="text">
                <div class="skill-5" onClick={() => this.clickSkillsAngularText.emit('SkillsAngularText')}>
                </div>
                {this.payload[0].angularText}
              </div>
            </div>
            <div class="col-md-3 mt-5" data-aos={this.payload[0].attributeUp}>
              <div class="image2" style={{ backgroundImage: "url("+ StorageIslamPromo.prefix + this.payload[0].reactImage + ")" }} onClick={() => this.clickSkillsReactImage.emit('SkillsReactImage')}>
              </div>
              <div class="text">
                <div class="skill-6" onClick={() => this.clickSkillsReactText.emit('SkillsReactText')}>
                </div>
                {this.payload[0].reactText}
              </div>
            </div>
            <div class="col-md-3 mt-5" data-aos={this.payload[0].attributeUp}>
              <div class="image2" style={{ backgroundImage: "url("+ StorageIslamPromo.prefix + this.payload[0].bootstrapImage + ")" }} onClick={() => this.clickSkillsBootstrapImage.emit('SkillsBootstrapImage')}>
              </div>
              <div class="text">
                <div class="skill-7" onClick={() => this.clickSkillsBootstrapText.emit('SkillsBootstrapText')}>
                </div>
                {this.payload[0].bootstrapText}
              </div>
            </div>
            <div class="col-md-3 mt-5" data-aos={this.payload[0].attributeLeft}>
              <div class="image2" style={{ backgroundImage: "url("+ StorageIslamPromo.prefix + this.payload[0].stencilImage + ")" }} onClick={() => this.clickSkillsStencilImage.emit('SkillsStencilImage')}>
              </div>
              <div class="text">
                <div class="skill-8" onClick={() => this.clickSkillsStencilText.emit('SkillsStencilText')}>
                </div>
                {this.payload[0].stencilText}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
