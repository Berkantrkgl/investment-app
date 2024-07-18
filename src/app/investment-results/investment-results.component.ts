import { Component, Input } from '@angular/core';
import { CalculatedData } from '../input.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  
  constructor(private investmentService: InvestmentService) {}

  get results() {
    return this.investmentService.results;
  }

}
