import { Component, OnInit } from '@angular/core';
import {DynamicFormService,DynamicFormModel,} from '@ng-dynamic-forms/core';
import {MY_FORM_MODEL} from './model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-iontest',
  templateUrl: './iontest.page.html',
  styleUrls: ['./iontest.page.scss'],
})
export class IontestPage implements OnInit {

  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService, ) { }

  ngOnInit() {

    this.formGroup = this.formService.createFormGroup(this.formModel);
    

  }

  // onIonEvent($event){
  //   console.log($event);
    
  // }


  onChange($event){
    console.log('sa');
    
  }



}
