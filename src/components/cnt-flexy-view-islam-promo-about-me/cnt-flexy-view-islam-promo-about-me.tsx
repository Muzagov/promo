import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {StorageIslamPromo} from "../../utils/utils";

@Component({
  tag: "cnt-flexy-view-islam-promo-about-me-1_01",
  styleUrl: "cnt-flexy-view-islam-promo-about-me.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoAboutMe implements ComponentInterface {
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
        <cnt-flexy-view-islam-promo-about-me payload={this.payload}
                                             onClickAboutMeHeading={(item) => clicker(item)}
                                             onClickAboutMeImage={(item) => clicker(item)}
                                             onClickAboutMeText={(item) => clicker(item)}
                                             onClickAboutMeButton={(item) => clicker(item)}
                                             onClickAboutMeSignature={(item) => clicker(item)}/>
      </div>
    );
  }
}
