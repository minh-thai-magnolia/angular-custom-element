import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSearchComponent } from './components/header-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderSearchComponent
  ],
  exports: [
    HeaderSearchComponent
  ],
})
export class SharedModule { }