import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { clipchampButton } from "./clipchampButton/clipchampButton.component";

@NgModule({
  declarations: [clipchampButton],
  imports: [BrowserModule],
  entryComponents: [clipchampButton]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(clipchampButton, { injector });
    customElements.define("clipchamp-button", customButton);
  }

  ngDoBootstrap() {}
}
