import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit {
  @ViewChild('button') button!: ElementRef;

  ngAfterViewInit(): void {
    this.fromEventOperator();
  }

  private fromEventOperator(): void {
    const obsDOMElement$ = fromEvent(this.button.nativeElement, 'click');

    obsDOMElement$.subscribe(console.log);
  }
}
