import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesComponent } from './observables';
import { SubjectComponent } from './subject';
import { FromComponent } from './creation-operators/from';
import { OfComponent } from './creation-operators/of';
import { FromEventComponent } from './creation-operators/from-event';
import { IntervalComponent } from './creation-operators/interval';
import { TimerComponent } from './creation-operators/timer';
import { ThrowErrorComponent } from './creation-operators/throw-error';
import { AjaxComponent } from './creation-operators/ajax';

const components = [
  ObservablesComponent,
  SubjectComponent,
  FromComponent,
  OfComponent,
  FromEventComponent,
  IntervalComponent,
  TimerComponent,
  ThrowErrorComponent,
  AjaxComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class ComponentsModule {}
