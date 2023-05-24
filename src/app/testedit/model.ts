
import {
    DynamicFormModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel,
    validate
} from "@ng-dynamic-forms/core";


 import {ValidationErrors, ValidatorFn, AbstractControl, Validators} from '@angular/forms';


const boilerList=  [
  {
      label: "Combi",
      value: "Combi",
      
  },
  {
    label: "Heat Type",
    value: "HeatType"
},
{
  label: "System",
  value: "System"
},
{
label: "Back Boiler",
value: "BackBoiler"
},

]

const location = [
    {
      label: "BathRoom",
      value: "BathRoom"
    },
    {
      label: "Garage",
      value: "Garage"
    },
    {
      label: "Hall",
      value: "Hall"
    },
    {
      label: "Join",
      value: "Join"
    },
  ]

  // const FlueList = [
  //   {
  //     label: "Open Flue",
  //     value: "OpenFlue"
  //   },
  //   {
  //     label: "Room Sealed",
  //     value: "RoomSealed"
  //   },]

    const OwnedList = [
      {
        label: "LandLord",
        value: "LandLord"
      },
      {
        label: "Tenant",
        value: "Tenant"
      },]


      const InspectedList = [
        {
          label: "Worked On",
          value: "WorkedOn"
        },
        {
          label: "Visual",
          value: "Visual"
        },]

      // const ZeroList = [
      //   {
      //     label: "LandLord",
      //     value: "LandLord"
      //   },
      //   {
      //     label: "Tenant",
      //     value: "Tenant"
      //   },]



     


  export const  AppType =    new DynamicSelectModel<string>({
          id: "AppType",
          placeholder: "Choose Appliance",
          multiple: false,
          validators:{required:null},
           
       });

export const BoilerType = new DynamicSelectModel<string>({
  id: "BoilerType",
  placeholder: "Choose A Boiler Type",
  multiple: false,
  name: 'BoilerType',
  hidden: true,
  options: boilerList,
  validators:{required:null},
  //errorMessages:{required:'Please Select a Boiler Type '}
  
});

export const Make = new DynamicSelectModel<string>({
  id: "Make",
  placeholder: "Choose A Make",
  multiple: false,
  name: 'MakeModel',
  options: [
    // {
    //   label: "Select",
    //   value: "Select"
    // },
    {
      label: "Others",
      value: "Others"
    },

  ],
  hidden: true,
  validators:{required:null},
});

export const MakeAnswer = new DynamicInputModel({
  id: "MakeAnswer",
  label: "Make Answer",
  maxLength: 15,
  placeholder: "Enter Make",
  hidden: true,
  validators:{required:null},
});


export const Model = new DynamicSelectModel<string>({
  id: "Model",
  placeholder: "Choose A Model",
  multiple: false,
  name: 'ModelModel',
  options: [
    // {
    //   label: "Select",
    //   value: "Select"
    // },
    {
      label: "Others",
      value: "Others"
    },

  ],
  hidden: true,
  validators:{required:null},
});

export const ModelAnswer = new DynamicInputModel({
  id: "ModelAnswer",
  label: "Model Answer",
  maxLength: 15,
  placeholder: "Enter Model",
  hidden: true,
  validators:{required:null},
});


export const Location = new DynamicSelectModel<string>({
  id: "Location",
  placeholder: "Choose A Location",
  multiple: false,
  name: 'Location',
  options: location,
  hidden: true,
  validators:{required:null},
});

export const Flue = new DynamicSelectModel<string>({
  id: "Flue",
  placeholder: "Flue",
  multiple: false,
  name: 'Flue',
  
  hidden: true,
  validators:{required:null},
});


export const Owned = new DynamicSelectModel<string>({
  id: "Owned",
  placeholder: "Owned By",
  multiple: false,
  name: 'Owned',
  options: OwnedList,
  hidden: true,
  validators:{required:null},
});


export const Inspected = new DynamicSelectModel<string>({
  id: "Inspected",
  placeholder: "Inspected",
  multiple: false,
  name: 'Inspected',
  options: InspectedList,
  hidden: true,
  validators:{required:null},
});



export const Zero = new DynamicSelectModel<string>({
  id: "Zero",
  name:'Zero',
  label: "Zero Govern",
  hidden: true,
  validators:{required:null},
   
});


export const OPU = new DynamicSelectModel<string>({
  id: "OPU",
  name:'OPU',
  label: "Operating Pressure Unit",
  hidden: true,
  validators:{required:null},
   
});
  
export const GR = new DynamicInputModel({
  id: "GR",
  name:'GR',
  label: "Gas Rate/ Burner Pressure",
  hidden: true,
  inputType:'number', 
  validators:{required:null},
  

});

export function customForbiddenValidator(forbiddenValue: string): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

      if (control && control.value === forbiddenValue) {
          return {forbidden: true};
      }

      return null;
  };
}

// export function customGRValidator(input: DynamicInputModel): ValidationErrors | null {

//   const inputValue = input.value as number;
   

//   let hasError = false;

//   if (inputValue <0 || inputValue>70 ) {
//       hasError = true;
//   }

//   return hasError ? {customGRValidator: true} : null;
// }

export const OSD = new DynamicSelectModel<string>({
  id: "OSD",
  name:'OSD',
  label: "Operation of Safety Device",
  hidden: true,
  validators:{required:null},
   
});

export const VS = new DynamicSelectModel<string>({
  id: "VS",
  name:'VS',
  label: "Ventilation Satisfaction",
  hidden: true,
  validators:{required:null}, 
});

export const VC = new DynamicSelectModel<string>({
  id: "VC",
  name:'VC',
  label: "Visual Condition of Flue and Termination",
  hidden: true,
  validators:{required:null},
});


export const Spilage = new DynamicSelectModel<string>({
  id: "Spilage",
  name:'Spilage',
  label: "Flue FLow Continuity and Spillage",
  hidden: true,
  validators:{required:null}, 
});

export const CAR = new DynamicSelectModel<string>({
  id: "CAR",
  name:'CAR',
  label: "Combustion Analyzer Reading",
  hidden: true,
  validators:{required:null}, 
});

export const HIRatio = new DynamicInputModel({
  id: "HIRatio",
  name:'HIRatio',
  label: "High Initial Ratio",
  hidden: true,
  inputType:'number',
  validators:{required:null},
   
});

export const HICO2 = new DynamicInputModel({
  id: "HICO2",
  name:'HICO2',
  label: "High Initial CO2",
  hidden: true,
  validators:{required:null},
});

export const HICOPPM= new DynamicInputModel({
  id: "HICOPPM",
  name:'HICOPPM',
  label: "High Initial CO2 PPM",
  hidden: true,
  validators:{required:null},
   
});

export const LFRatio= new DynamicInputModel({
  id: "LFRatio",
  name:'LFRatio',
  label: "Low Final Ration",
  hidden: true,
  validators:{required:null},
   
});

export const LFCO2= new DynamicInputModel({
  id: "LFCO2",
  name:'LFCO2',
  label: "Low Final CO2",
  hidden: true,
  validators:{required:null},
});

export const LFCOPPM= new DynamicInputModel({
  id: "LFCOPPM",
  name:'LFCOPPM',
  label: "Low Final CO PPM",
  hidden: true,
  validators:{required:null},
});

export const SAFE2U= new DynamicSelectModel<string>({
  id: "SAFE2U",
  name:'SAFE2U',
  label: "SAFE TO USE",
  hidden: true,
  options:[{label:'Yes',value:'Yes'},{label:'No',value:'No'}] ,
  validators:{required:null},
});

export const DefectI= new DynamicInputModel({
  id: "DefectI",
  name:'DefectI',
  label: "Defect Identified",
  hidden: true,
  validators:{required:null},

});

export const GIUSP = new DynamicSelectModel<string>({
  id: "GIUSP",
  name:'GIUSP',
  label: "GIUSP Classification",
  hidden: true,
  validators:{required:null},
   
});

export const WarnCert= new DynamicInputModel({
  id: "WarnCert",
  name:'WarnCert',
  label: "Warning Certificate Number",
  hidden: true,
  validators:{required:null},  
});

export const RAT = new DynamicSelectModel<string>({
  id: "RAT",
  name:'RAT',
  label: "Remedial Actions Taken",
  hidden: true,
  validators:{required:null},
   
});



export const MY_FORM_MODEL: DynamicFormModel = [  AppType, BoilerType, Make, MakeAnswer, Model, ModelAnswer, Location,
 Flue, Owned, Inspected, Zero, OPU, GR, OSD , VS, VC , Spilage, CAR, HIRatio, HICO2, HICOPPM, LFRatio,LFCO2,LFCOPPM,SAFE2U,DefectI,
 GIUSP,WarnCert,RAT];

 //export const MY_FORM_MODEL: DynamicFormModel = [OSD];
