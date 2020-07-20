import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SCntFlexyViewIslamPromoHeader } from "./interface/common.interface";

@Component({
  tag: "cnt-flexy-view-islam-promo-header",
  styleUrl: "cnt-flexy-view-islam-promo-header.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoHeader implements ComponentInterface {
  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SCntFlexyViewIslamPromoHeader[] = [];

  /**
   * Клик по MaleIcon
   */
  @Event() clickHeaderMaleIcon: EventEmitter;

  /**
   * Клик по developer
   */
  @Event() clickHeaderDeveloper: EventEmitter;

  /**
   * Клик по Home
   */
  @Event() clickHeaderHomeNav: EventEmitter;

  /**
   * Клик по AboutUs
   */
  @Event() clickHeaderAboutUsNav: EventEmitter;

  /**
   * Клик по OurTeam
   */
  @Event() clickHeaderOurTeamNav: EventEmitter;

  /**
   * Клик по PracticeAreas
   */
  @Event() clickHeaderPracticeAreasNav: EventEmitter;

  /**
   * Клик по Contacts
   */
  @Event() clickHeaderContactsNav: EventEmitter;

  render() {
    return (
      <div class="header">
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-6">
              <div class="common">
                <span class="maleIcon" onClick={() => this.clickHeaderMaleIcon.emit('HeaderMaleIcon')}>
                  <i class={this.payload[0].maleIcon} />
                </span>
                <span class="developer" onClick={() => this.clickHeaderDeveloper.emit('HeaderDeveloper')}>
                  {this.payload[0].developer}
                </span>
              </div>
            </div>
            <div class="col-6">
              <div class="commonNav">
                <ul class="my-nav">
                  <li class="my-link" onClick={() => this.clickHeaderHomeNav.emit('HeaderHomeNav')}>{this.payload[0].homeNav}</li>
                  <li class="my-link" onClick={() => this.clickHeaderAboutUsNav.emit('HeaderAboutUsNav')}>{this.payload[0].aboutUsNav}</li>
                  <li class="my-link" onClick={() => this.clickHeaderOurTeamNav.emit('HeaderOurTeamNav')}>{this.payload[0].ourTeamNav}</li>
                  <li class="my-link" onClick={() => this.clickHeaderPracticeAreasNav.emit('HeaderPracticeAreasNav')}>{this.payload[0].practiceAreasNav}</li>
                  <li class="my-link" onClick={() => this.clickHeaderContactsNav.emit('HeaderContactsNav')}>{this.payload[0].contactsNav}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
