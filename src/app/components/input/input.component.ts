import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string;
  @Input() type = 'text'; // set default type be text

  focused: boolean;
  error : boolean;

  onBlur(event: any) {
    const value = event.target.value;
console.log("Danish"+value);

    if (!value) {
      this.focused = false;
      this.error = true
    }else{
      this.error = false
    }
   
  }
}
