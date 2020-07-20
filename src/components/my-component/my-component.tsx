import { Component, h } from '@stencil/core';
import {
  forAboutMe,
  forAffordable,
  forQuality,
  forCommunication,
  forHeader,
  forSkills,
  forWorks, forOpportunities, forFooter
} from "../../utils/mock";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true,
})
export class MyComponent {

  render() {
    return <div>
      <cnt-flexy-view-islam-promo-communication-1_01 payload={forCommunication}/>
      <cnt-flexy-view-islam-promo-header-1_01 payload={forHeader}/>
      <cnt-flexy-view-islam-promo-affordable-1_01 payload={forAffordable}
                                                  pathToAssets={this.testPathToAssets}/>
      <cnt-flexy-view-islam-promo-about-me-1_01 payload={forAboutMe}
                                                pathToAssets={this.testPathToAssets}/>
      <cnt-flexy-view-islam-promo-quality-1_01 payload={forQuality}/>
      <cnt-flexy-view-islam-promo-skills-1_01 payload={forSkills}
                                              pathToAssets={this.testPathToAssets}/>
      <cnt-flexy-view-islam-promo-works-1_01 payload={forWorks}
                                             pathToAssets={this.testPathToAssets}/>
      <cnt-flexy-view-islam-promo-opportunities-1_01 payload={forOpportunities}/>
      <cnt-flexy-view-islam-promo-footer-1_01 payload={forFooter}/>
    </div>;
  }

  /**
   * временный префикс ссылки для картинок
   */
  public testPathToAssets =
    "http://cdn.ramman.net/flexy-view/islam/promo/1.01/assets/";
}
