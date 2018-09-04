import {
  Input,
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output
} from "@angular/core";

declare global {
  interface Window {
    clipchamp: any;
  }
}
declare const clipchamp;

@Component({
  selector: "clipchamp-button",
  template: `
  <div (click)="handleClick()" class="button">
    <span class="button__mask"></span>
    <span class="button__text">{{label}}</span>
    <span class="button__text button__text--bis">{{label}}</span>
  </div>`,
  styleUrls: ["./clipchampButton.component.scss"],
  encapsulation: ViewEncapsulation.Native
})
export class clipchampButton {
  @Input()
  public label = "upload video";
  @Input()
  public style =
    "https://api.clipchamp.com/static/button/themes/modern-dark.css";
  @Input()
  public api = "Qp_FS8sWQ0k-TvtWYRseguXmfYo";
  @Input()
  public output = "dummy";
  @Input()
  public title = "Upload a video with clipchamp";
  // @Output()
  // clipchampMsg = new EventEmitter<string>();
  // private msg = "every thing is a okay";
  
  handleClick() {
    console.log("chipchamp");
    // this.clipchampMsg.emit(this.msg);
    window.clipchamp.update({
      title: this.title,
      output: this.output,
      style: {
        url: this.style
      }
    });
    window.clipchamp.open();
  }

  injectScript() {
    const script = document.createElement("script");
    script.onload = function() {
      window.clipchamp = clipchamp(this.clipchampOptions);
    }.bind(this);
    script.src = `https://api.clipchamp.com/${this.api}/button.js`;
    document.body.appendChild(script);
  }

  ngOnInit() {
    document.onreadystatechange = function(e) {
      if (document.readyState === "complete") {
        this.injectScript();
      }
    }.bind(this);
  }
}
