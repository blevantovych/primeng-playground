import { Component, OnInit } from '@angular/core';
import { Car } from './domain/car';
import { CarService } from './services/carservice';
import { QuestionService } from './question.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

export class PrimeCar implements Car {
    constructor(public vin?, public year?, public brand?, public color?) {}
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CarService, QuestionService]
})
export class AppComponent implements OnInit {
    model = new FormGroup({
      name: new FormControl('', [Validators.required]),
      drinks: new FormControl('')
    })

    results = ['Vasya', 'Mikel', 'Peter']
    drinks = ['Cola', 'Pepsi', 'Wine']
    allNames = [
      'Vasya11111111111111111111111111111111111111111244444444444444441',
      'Mikel12222222222222222222222222222222222222222222222222222222222',
      'Peter']
    text: string;

    search({query}) {
      // this.model.get('drinks').setValue(this.model.get('name').value)
      this.results = this.allNames.filter(name => name.includes(query))
    }

    searchDrink({query}) {
      console.log('completeMethod')
      this.drinks = [...this.drinks]
    }
    
    constructor(private carService: CarService, service: QuestionService) {

    }

    ngOnInit() {
       this.model.get('name').valueChanges.subscribe(name => {
         if (this.allNames.includes(name))
          this.model.get('drinks').setValue(Math.round(Math.random() * 100))
        //  console.log(values)
       })
    }
}
