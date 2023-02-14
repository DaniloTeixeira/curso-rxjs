import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.scss'],
})
export class MergeConcatComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getUsersMerge();
    this.getUsersConcat();
  }

  // Exibe os observables conforme eles são emitidos
  private getUsersMerge(): void {
    this.apiService.getUsersMerge().subscribe(console.log);
  }

  // Espera que o primeiro observable seja completado para emitir o próximo
  private getUsersConcat(): void {
    this.apiService.getUsersConcat().subscribe(console.log);
  }
}
