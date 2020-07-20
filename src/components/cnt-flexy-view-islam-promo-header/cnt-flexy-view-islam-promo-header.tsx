import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-promo-header-1_01',
  styleUrl: 'cnt-flexy-view-islam-promo-header.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoHeader implements ComponentInterface {

  @Prop() payload: any;

  render() {
    const clicker = item => {
      console.log(item);
    }
    return (
     <div>
       <cnt-flexy-view-islam-promo-header payload={this.payload}
                                          onClickHeaderHomeNav={(item) => clicker(item)}
                                          onClickHeaderAboutUsNav={(item) => clicker(item)}
                                          onClickHeaderOurTeamNav={(item) => clicker(item)}
                                          onClickHeaderPracticeAreasNav={(item) => clicker(item)}
                                          onClickHeaderContactsNav={(item) => clicker(item)}/>
     </div>
    );
  }

}
