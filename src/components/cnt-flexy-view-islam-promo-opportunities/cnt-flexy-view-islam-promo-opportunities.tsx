import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-promo-opportunities-1_01',
  styleUrl: 'cnt-flexy-view-islam-promo-opportunities.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoOpportunities implements ComponentInterface {

  @Prop() payload: any;

  render() {
    const clicker = item => {
      console.log(item);
    }
    return (
      <div>
        <cnt-flexy-view-islam-promo-opportunities payload={this.payload}
                                                  onClickOpportunitiesHeading={(item) => clicker(item)}
                                                  onClickOpportunitiesComputerIcon={(item) => clicker(item)}
                                                  onClickOpportunitiesComputerTitle={(item) => clicker(item)}
                                                  onClickOpportunitiesComputerText={(item) => clicker(item)}
                                                  onClickOpportunitiesCogIcon={(item) => clicker(item)}
                                                  onClickOpportunitiesCogTitle={(item) => clicker(item)}
                                                  onClickOpportunitiesCogText={(item) => clicker(item)}
                                                  onClickOpportunitiesPictureIcon={(item) => clicker(item)}
                                                  onClickOpportunitiesPictureTitle={(item) => clicker(item)}
                                                  onClickOpportunitiesPictureText={(item) => clicker(item)}/>
      </div>
    );
  }

}
