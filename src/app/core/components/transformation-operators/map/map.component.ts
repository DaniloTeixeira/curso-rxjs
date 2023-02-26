import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.mapOperator();
    this.getUsers();
  }

  private mapOperator(): void {
    const obsArr$ = from([
      {
        id: 1,
        name: 'Danilo',
        email: 'danilol@email.com',
      },
      {
        id: 2,
        name: 'Roger',
        email: 'roger@email.com',
      },
      {
        id: 3,
        name: 'Alguém',
        email: 'alguem@email.com',
      },
    ]);

    obsArr$.pipe(map((_, index) => index)).subscribe(console.log);
  }

  private getUsers(): void {
    this.apiService
      .getUsersMap()
      .subscribe((res) => console.log('Título: ', res));
  }
}
