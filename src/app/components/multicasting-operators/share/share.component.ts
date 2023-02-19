import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.shareOperator();
  }

  private shareOperator(): void {
    const users$ = this.apiService.getUsersShare();

    const userDanilo$ = users$.pipe(
      map((users: any) => users.filter((user: any) => user.name === 'Danilo'))
    );

    const userRoger$ = users$.pipe(
      map((users: any) => users.filter((user: any) => user.name === 'Roger'))
    );

    const userAlguem$ = users$.pipe(
      map((users: any) => users.filter((user: any) => user.name === 'Alguém'))
    );

    users$.subscribe(console.log);
    userDanilo$.subscribe(console.log);
    userRoger$.subscribe(console.log);
    userAlguem$.subscribe(console.log);
  }
}
