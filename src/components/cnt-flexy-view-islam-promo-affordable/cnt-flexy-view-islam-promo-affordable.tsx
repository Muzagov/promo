import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageIslamPromo} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-promo-affordable-1_01',
  styleUrl: 'cnt-flexy-view-islam-promo-affordable.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoAffordable implements ComponentInterface {

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
        <cnt-flexy-view-islam-promo-affordable payload={this.payload}
                                               onClickAffordableHeading={(item) => clicker(item)}
                                               onClickAffordableName={(item) => clicker(item)}
                                               onClickAffordableButton={(item) => clicker(item)}/>
      </div>
    );
  }

}
