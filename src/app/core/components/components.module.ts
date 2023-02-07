import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesComponent } from './observables';
import { SubjectComponent } from './subject';

const components = [ObservablesComponent, SubjectComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class ComponentsModule {}
