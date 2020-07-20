import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-promo-communication-1_01',
  styleUrl: 'cnt-flexy-view-islam-promo-communication.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoCommunication implements ComponentInterface {

  @Prop() payload: any;

  render() {
    const clicker = item => {
      console.log(item);
    }
    return (
      <div>
        <cnt-flexy-view-islam-promo-communication payload={this.payload}
                                                  onClickCommunicationPhoneIcon={(item) => clicker(item)}
                                                  onClickCommunicationPhone={(item) => clicker(item)}
                                                  onClickCommunicationLetterIcon={(item) => clicker(item)}
                                                  onClickCommunicationLetter={(item) => clicker(item)}
                                                  onClickCommunicationMapMarker={(item) => clicker(item)}
                                                  onClickCommunicationLocation={(item) => clicker(item)}
                                                  onClickCommunicationLinkedinIcon={(item) => clicker(item)}
                                                  onClickCommunicationTwitterIcon={(item) => clicker(item)}
                                                  onClickCommunicationFacebookIcon={(item) => clicker(item)}
                                                  onClickCommunicationInstagramIcon={(item) => clicker(item)}/>
      </div>
    );
  }

}
