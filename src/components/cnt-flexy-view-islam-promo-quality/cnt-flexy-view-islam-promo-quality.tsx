import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-promo-quality-1_01',
  styleUrl: 'cnt-flexy-view-islam-promo-quality.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoQuality implements ComponentInterface {

  @Prop() payload: any;

  render() {
    const clicker = item => {
      console.log(item);
    }
    return (
      <div>
        <cnt-flexy-view-islam-promo-quality payload={this.payload}
                                            onClickQualityHeading={(item) => clicker(item)}
                                            onClickQualityIcon={(item) => clicker(item)}
                                            onClickQualityTitle={(item) => clicker(item)}
                                            onClickQualityText={(item) => clicker(item)}/>
      </div>
    );
  }

}
