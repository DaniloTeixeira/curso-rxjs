import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CoreRoutingModule, ComponentsModule],
  exports: [ComponentsModule, HomeComponent],
})
export class CoreModule {}
