

import {DynamicInputModel, DynamicFormModel} from '@ng-dynamic-forms/core'

export const MakeAnswer = new DynamicInputModel({
    id: "MakeAnswer",
    label: "Make Answer",
    maxLength: 15,
    placeholder: "Enter Make",
    hidden: true,
    validators:{required:null},
  });
  

  export const ModelAnswer = new DynamicInputModel({
    id: "ModelAnswer",
    label: "Model Answer ",
    maxLength: 15,
    placeholder: "Enter Model",
    hidden: true,
    validators:{required:null},
  });
  

  

export const MY_FORM_MODEL: DynamicFormModel = [  MakeAnswer, ModelAnswer];