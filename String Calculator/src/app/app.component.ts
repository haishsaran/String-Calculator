import { Component, OnChanges, VERSION, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  input_text: any = '';

  add() {
    var input: any = this.input_text;
    if (input.charAt('-') === '-') {
      this.input_text = 'negative numbers not allowed';
    } else {
      let sum = 0;
      let number: any = input.replace(/[^0-9]/g, ',');
      number = number.split('');
      for (let i = 0; i < number.length; i++) {
        let parse_num = parseInt(number[i]);
        if (parse_num) {
          sum += parseInt(number[i]);
        }
      }
      this.input_text = sum;
    }
  }

  display(val) {
    this.input_text += val;
  }
  clear() {
    this.input_text = '';
  }
}
