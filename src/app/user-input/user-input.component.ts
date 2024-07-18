import { Component, EventEmitter, Input, Output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputData } from "../input.model";
import { InvestmentService } from "../investment.service";

@Component({
    selector: "app-user-input",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "./user-input.component.html",
    styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
    @Output() userInput = new EventEmitter<InputData>();
    initial = "0";
    annual = "0";
    return = "5";
    duration = "5";

    constructor(private investmentService: InvestmentService) {}

    onSubmit() {
        this.investmentService.calculteInvestmentResults({
            initialInvestment: Number(this.initial),
            annualInvestment: Number(this.annual),
            expectedReturn: Number(this.return),
            duration: Number(this.duration),
        });
    }
}
