import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
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
  @Input()
  public logo = "https://api.clipchamp.com/static/button/images/logo.svg";

  @Output()
  public clicked: EventEmitter<any> = new EventEmitter();
  @Output()
  public onPreviewAvailable: EventEmitter<any> = new EventEmitter();
  @Output()
  public onUploadComplete: EventEmitter<any> = new EventEmitter();
  @Output()
  public onVideoCreated: EventEmitter<any> = new EventEmitter();

  handleClick() {
    console.log("chipchamp trigged");
    this.clicked.emit("Clicked");
    window.clipchamp.open();
  }

  injectScript() {
    const script = document.createElement("script");
    script.src = `https://api.clipchamp.com/${this.api}/button.js`;
    script.onload = function() {
      window.clipchamp = clipchamp({
        title: this.title,
        logo: this.logo,
        style: {
          url: this.style
        },
        output: this.output,
        onVideoCreated: data => this.onVideoCreated.emit(data),
        onUploadComplete: data => this.onUploadComplete.emit(data),
        onPreviewAvailable: data => this.onPreviewAvailable.emit(data)
      });
    }.bind(this);
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
