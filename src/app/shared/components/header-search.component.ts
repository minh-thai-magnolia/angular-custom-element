import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shared-header-search',
  template: `
    <h1>This is the shared-header-search component!</h1>
  `,
  styles: [`
    h1 {
      font-family: Lato;
    }
  `],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSearchComponent {}
