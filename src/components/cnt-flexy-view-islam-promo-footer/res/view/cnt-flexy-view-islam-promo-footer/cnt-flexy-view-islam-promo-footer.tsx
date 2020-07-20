import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-islam-promo-footer",
  styleUrl: "cnt-flexy-view-islam-promo-footer.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoFooter implements ComponentInterface {
  @Prop() payload: any;

  render() {
    return (
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div class="contact">{this.payload[0].contact}</div>
              <div class="phoneIcon">
                <i class={this.payload[0].phoneIcon} />
                <span class="phone">{this.payload[0].phone}</span>
              </div>
              <div class="letterIcon">
                <i class={this.payload[0].letterIcon} />
                <span class="letter">{this.payload[0].letter}</span>
              </div>
              <div class="mapMarkerIcon">
                <i class={this.payload[0].mapMarker} />
                <span class="location">{this.payload[0].location}</span>
              </div>
            </div>
            <div class="col-3">
              <div class="link">{this.payload[0].link}</div>
              <div class="my-link">{this.payload[0].homeNav}</div>
              <div class="my-link">{this.payload[0].aboutUsNav}</div>
              <div class="my-link">{this.payload[0].ourTeamNav}</div>
              <div class="my-link">{this.payload[0].contactsNav}</div>
            </div>
            <div class="col-4">
              <input class="input" placeholder={this.payload[0].email} />
              <div class="button">
                <button class="btn">{this.payload[0].button}</button>
              </div>
              <div class="icons">
                <div class="vk">
                  <i class={this.payload[0].vkIcon} />
                </div>
                <div class="instagram">
                  <i class={this.payload[0].instagramIcon} />
                </div>
                <div class="twitter">
                  <i class={this.payload[0].twitterIcon} />
                </div>
                <div class="facebook">
                  <i class={this.payload[0].facebookIcon} />
                </div>
                <div class="youtube">
                  <i class={this.payload[0].youtubeIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
