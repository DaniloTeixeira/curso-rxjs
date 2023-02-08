import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss'],
})
export class AjaxComponent implements OnInit {
  users: any[] = [];

  ngOnInit(): void {
    this.ajaxOperator();
  }

  private ajaxOperator(): void {
    const url = 'http://localhost:3000/users';

    const http$ = ajax.getJSON(url).pipe(
      catchError((err) => {
        return err;
      })
    );

    http$.subscribe((res) => {
      this.users = res as any[];
    });
  }
}
