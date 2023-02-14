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
import { ForkjoinComponent } from './join-operators/forkjoin';
import { ZipComponent } from './join-operators/zip';
import { MergeConcatComponent } from './join-operators/merge-concat';
import { MapComponent } from './transformation-operators/map/map.component';
import { MapToComponent } from './transformation-operators/map-to/map-to.component';
import { SwitchMapComponent } from './transformation-operators/switch-map/switch-map.component';
import { ToArrayComponent } from './transformation-operators/to-array/to-array.component';

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
  ForkjoinComponent,
  ZipComponent,
  MergeConcatComponent,
  MapComponent,
  MapToComponent,
  SwitchMapComponent,
  ToArrayComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class ComponentsModule {}
