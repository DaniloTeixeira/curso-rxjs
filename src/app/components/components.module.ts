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
import { ForkjoinComponent } from './creation-and-join-operators/forkjoin';
import { ZipComponent } from './creation-and-join-operators/zip';
import { MergeConcatComponent } from './creation-and-join-operators/merge-concat';
import { MapComponent } from './transformation-operators/map';
import { MapToComponent } from './transformation-operators/map-to';
import { SwitchMapComponent } from './transformation-operators/switch-map';
import { ToArrayComponent } from './transformation-operators/to-array';
import { FilterComponent } from './filtering-operators/filter';
import { TakeComponent } from './filtering-operators/take';
import { TakeUntilComponent } from './filtering-operators/take-until';
import { TakeWhileComponent } from './filtering-operators/take-while';
import { SkipComponent } from './filtering-operators/skip';
import { DebounceTimeComponent } from './filtering-operators/debounce-time';
import { SwitchAllComponent } from './join-operators/switch-all';
import { StartWithComponent } from './join-operators/start-with';
import { CombineLatestComponent } from './join-operators/combine-latest';
import { WithLatestFromComponent } from './join-operators/with-latest-from';
import { ShareReplayComponent } from './multicasting-operators/share-replay';
import { ShareComponent } from './multicasting-operators/share';
import { CatchErrorComponent } from './error-handling-operators/catch-error';
import { RetryComponent } from './error-handling-operators/retry';
import { RetryWhenComponent } from './error-handling-operators/retry-when';
import { TapComponent } from './utility-operators/tap';
import { DelayComponent } from './utility-operators/delay';
import { TimeoutComponent } from './utility-operators/timeout';
import { EveryComponent } from './conditional-boolean-operators/every';
import { FindComponent } from './conditional-boolean-operators/find';
import { FindIndexComponent } from './conditional-boolean-operators/find-index';
import { IsEmptyComponent } from './conditional-boolean-operators/is-empty';

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
  FilterComponent,
  TakeComponent,
  TakeUntilComponent,
  TakeWhileComponent,
  SkipComponent,
  DebounceTimeComponent,
  SwitchAllComponent,
  StartWithComponent,
  CombineLatestComponent,
  WithLatestFromComponent,
  ShareReplayComponent,
  ShareComponent,
  CatchErrorComponent,
  RetryComponent,
  RetryWhenComponent,
  CatchErrorComponent,
  TapComponent,
  DelayComponent,
  TimeoutComponent,
  EveryComponent,
  FindComponent,
  FindIndexComponent,
  IsEmptyComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class ComponentsModule {}
