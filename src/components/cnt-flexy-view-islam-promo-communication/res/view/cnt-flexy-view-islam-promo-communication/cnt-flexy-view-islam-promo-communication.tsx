import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from "@stencil/core";
import {SCntFlexyViewIslamPromoCommunication} from "./interface/common.interface";

@Component({
  tag: "cnt-flexy-view-islam-promo-communication",
  styleUrl: "cnt-flexy-view-islam-promo-communication.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoCommunication implements ComponentInterface {
  /**
   * Данные компонента CntFlexyViewIslamPromoCommunication
   */
  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SCntFlexyViewIslamPromoCommunication[] = []

  /**
   * Клик по PhoneIcon
   */
  @Event() clickCommunicationPhoneIcon: EventEmitter;

  /**
   * Клик по номеру
   */
  @Event() clickCommunicationPhone: EventEmitter;

  /**
   * Клик по LetterIcon
   */
  @Event() clickCommunicationLetterIcon: EventEmitter;

  /**
   * Клик по почте
   */
  @Event() clickCommunicationLetter: EventEmitter;

  /**
   * Клик по MapMarker
   */
  @Event() clickCommunicationMapMarker: EventEmitter;

  /**
   * Клик по адресу
   */
  @Event() clickCommunicationLocation: EventEmitter;

  /**
   * Клик по LinkedinIcon
   */
  @Event() clickCommunicationLinkedinIcon: EventEmitter;

  /**
   * Клик по TwitterIcon
   */
  @Event() clickCommunicationTwitterIcon: EventEmitter;

  /**
   * Клик по FacebookIcon
   */
  @Event() clickCommunicationFacebookIcon: EventEmitter;

  /**
   * Клик по InstagramIcon
   */
  @Event() clickCommunicationInstagramIcon: EventEmitter;

  render() {
    return (
      <div class="communication">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-11 d-flex">
              <div class="phoneIcon" onClick={() => this.clickCommunicationPhoneIcon.emit('CommunicationPhoneIcon')}>
                <i class={this.payload[0].phoneIcon} />
              </div>
              <div class="phone" onClick={() => this.clickCommunicationPhone.emit('CommunicationPhone')}>
                {this.payload[0].phone}
              </div>
              <div class="letterIcon" onClick={() => this.clickCommunicationLetterIcon.emit('CommunicationLetterIcon')}>
                <i class={this.payload[0].letterIcon} />
              </div>
              <div class="letter" onClick={() => this.clickCommunicationLetter.emit('clickCommunicationLetter')}>
                {this.payload[0].letter}
              </div>
              <div class="mapMarkerIcon" onClick={() => this.clickCommunicationMapMarker.emit('clickCommunicationMapMarker')}>
                <i class={this.payload[0].mapMarker} />
              </div>
              <div class="location" onClick={() => this.clickCommunicationLocation.emit('clickCommunicationLocation')}>
                {this.payload[0].location}
              </div>
            </div>
            <div class="col-1 d-flex">
              <div class="linkedinIcon" onClick={() => this.clickCommunicationLinkedinIcon.emit('clickCommunicationLinkedinIcon')}>
                <i class={this.payload[0].linkedinIcon} />
              </div>
              <div class="twitterIcon" onClick={() => this.clickCommunicationTwitterIcon.emit('clickCommunicationTwitterIcon')}>
                <i class={this.payload[0].twitterIcon} />
              </div>
              <div class="facebookIcon" onClick={() => this.clickCommunicationFacebookIcon.emit('clickCommunicationFacebookIcon')}>
                <i class={this.payload[0].facebookIcon} />
              </div>
              <div class="instagramIcon" onClick={() => this.clickCommunicationInstagramIcon.emit('clickCommunicationInstagramIcon')}>
                <i class={this.payload[0].instagramIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
