import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements AfterViewInit {
  @ViewChild('myButton') myButton!: ElementRef;

  constructor(private apiService: ApiService) {}

  ngAfterViewInit(): void {
    this.switchMapOperator();
    this.intervalOperator();
  }

  // O ViewChild só é gerado após a criação do componente, então deve ser chamado no AfterViewInit
  private switchMapOperator(): void {
    fromEvent(this.myButton.nativeElement, 'click')
      .pipe(switchMap(() => this.apiService.getUserSwitchMap()))
      .pipe(switchMap(({ id }) => this.apiService.getUserByCpf(id)))
      .subscribe((res) => console.log(res[0]));
  }

  // A cada clique no DOM o switchMap troca de observable e começa a emitir os valores do zero
  private intervalOperator(): void {
    fromEvent(document, 'click')
      .pipe(switchMap(() => interval(1000)))
      .subscribe(console.log);
  }
}
