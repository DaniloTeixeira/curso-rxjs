import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('input') input!: ElementRef;

  constructor(private apiService: ApiService) {}

  ngAfterViewInit(): void {
    this.debounceTimeOperator();
  }

  private debounceTimeOperator(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map((event: any) => event?.target.value),
        switchMap((value: string) =>
          this.apiService.getUserByNameDebounceTime(value)
        )
      )
      .subscribe(console.log);
  }
}
