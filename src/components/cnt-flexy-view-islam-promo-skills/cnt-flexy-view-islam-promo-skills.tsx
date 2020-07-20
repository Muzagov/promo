import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {StorageIslamPromo} from "../../utils/utils";

@Component({
  tag: "cnt-flexy-view-islam-promo-skills-1_01",
  styleUrl: "cnt-flexy-view-islam-promo-skills.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoSkills implements ComponentInterface {
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
        <cnt-flexy-view-islam-promo-skills payload={this.payload}
                                           onClickSkillsHeading={(item) => clicker(item)}
                                           onClickSkillsHtmlImage={(item) => clicker(item)}
                                           onClickSkillsHtmlText={(item) => clicker(item)}
                                           onClickSkillsCssImage={(item) => clicker(item)}
                                           onClickSkillsCssText={(item) => clicker(item)}
                                           onClickSkillsJsImage={(item) => clicker(item)}
                                           onClickSkillsJsText={(item) => clicker(item)}
                                           onClickSkillsWpImage={(item) => clicker(item)}
                                           onClickSkillsWpText={(item) => clicker(item)}
                                           onClickSkillsAngularImage={(item) => clicker(item)}
                                           onClickSkillsAngularText={(item) => clicker(item)}
                                           onClickSkillsReactImage={(item) => clicker(item)}
                                           onClickSkillsReactText={(item) => clicker(item)}
                                           onClickSkillsBootstrapImage={(item) => clicker(item)}
                                           onClickSkillsBootstrapText={(item) => clicker(item)}
                                           onClickSkillsStencilImage={(item) => clicker(item)}
                                           onClickSkillsStencilText={(item) => clicker(item)}/>
      </div>
    );
  }
}
