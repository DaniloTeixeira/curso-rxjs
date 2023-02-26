import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss'],
})
export class TimeoutComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.timeoutOperator();
  }

  private timeoutOperator(): void {
    this.apiService.getUsersTimeout().subscribe(console.log);
  }
}
