import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss'],
})
export class DelayComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.delayOperator();
  }

  private delayOperator(): void {
    this.apiService.getUsersDelay().subscribe(console.log);
  }
}
