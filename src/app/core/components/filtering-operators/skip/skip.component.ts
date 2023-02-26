import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, skip, tap } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss'],
})
export class SkipComponent implements AfterViewInit {
  @ViewChild('button') button!: ElementRef;

  ngAfterViewInit(): void {
    this.skipOperator();
  }

  private skipOperator(): void {
    const skipAmount = 2;
    let counter = skipAmount + 1;

    fromEvent(this.button.nativeElement, 'click')
      .pipe(
        skip(skipAmount),
        tap(() => console.log(`Botão foi clicado pela ${counter++}ª vez.`))
      )
      .subscribe();
  }
}
