import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss'],
})
export class ZipComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // funciona da mesma maneira que o forkJoin, porém ao invés de retornar um objeto, retorna um array
  private getUsers(): void {
    this.apiService.getUsersZip().subscribe(console.log);
  }
}
