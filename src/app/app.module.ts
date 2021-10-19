import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { createCustomElement } from "@angular/elements";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { HeaderSearchComponent } from "./shared/components/header-search.component";

@NgModule({
  imports: [BrowserModule, FormsModule, SharedModule],
  declarations: [AppComponent],
  bootstrap: [],
  entryComponents: [HeaderSearchComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  public ngDoBootstrap(): void {
    const webComponent = createCustomElement(HeaderSearchComponent, {
      injector:this.injector
    });
    customElements.define('header-search', webComponent);
  }
}
