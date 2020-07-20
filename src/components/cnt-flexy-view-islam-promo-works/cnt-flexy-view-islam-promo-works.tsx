import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageIslamPromo} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-promo-works-1_01',
  styleUrl: 'cnt-flexy-view-islam-promo-works.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoWorks implements ComponentInterface {
  @Prop() payload: any;

  @Prop() pathToAssets: any;

  componentWillLoad() {
    StorageIslamPromo.prefix = this.pathToAssets;
  }

  render() {
    const clicker = item => {
      console.log(item);
    }
    return (
      <div>
        <cnt-flexy-view-islam-promo-works payload={this.payload}
                                          onClickWorksHeading={(item) => clicker(item)}
                                          onClickWorksShopImage={(item) => clicker(item)}
                                          onClickWorksWorkImage1={(item) => clicker(item)}
                                          onClickWorksWorkImage2={(item) => clicker(item)}
                                          onClickWorksButton={(item) => clicker(item)}/>
      </div>
    );
  }

}
