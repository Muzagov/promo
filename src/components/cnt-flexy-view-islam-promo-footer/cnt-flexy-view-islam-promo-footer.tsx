import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-promo-footer-1_01',
  styleUrl: 'cnt-flexy-view-islam-promo-footer.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoFooter implements ComponentInterface {
  @Prop() payload: any;

  render() {
    return (
      <div>
        <cnt-flexy-view-islam-promo-footer payload={this.payload}/>
      </div>
    );
  }

}
