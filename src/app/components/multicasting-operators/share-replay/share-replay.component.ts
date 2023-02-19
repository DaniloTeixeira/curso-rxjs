import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss'],
})
export class ShareReplayComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.shareReplayOperator();
  }

  private shareReplayOperator(): void {
    const users$ = this.apiService.getUsersShareReplay();

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
