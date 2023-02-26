import { Component, OnInit } from '@angular/core';
import { isEmpty, Subject } from 'rxjs';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.scss'],
})
export class IsEmptyComponent implements OnInit {
  ngOnInit(): void {
    this.isEmptyOperator();
  }

  private isEmptyOperator(): void {
    const subject = new Subject<string>();
    const isSubjectEmpty = subject.pipe(isEmpty());

    isSubjectEmpty.subscribe(console.log);

    subject.next('Danilo');
  }
}
