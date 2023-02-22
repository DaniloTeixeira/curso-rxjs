import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss'],
})
export class CatchErrorComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.catchErrorOperator();
  }

  private catchErrorOperator(): void {
    this.apiService.getUsersCatchError().subscribe(console.log);
  }
}
