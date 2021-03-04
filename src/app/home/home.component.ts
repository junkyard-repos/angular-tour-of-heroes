import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myForm: FormGroup;
  isValid = false;

  controls = {
    firstName: this._fb.control('', Validators.required),
    lastName: this._fb.control(''),
    age: this._fb.control(''),
  }

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this._fb.group(this.controls);
    this.myForm.valueChanges.subscribe(x => {
      console.log(x);
    })
  }

}
