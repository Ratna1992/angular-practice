import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../httpservices/api.service';
import { SmartPhone } from '../../interfaces/SmartPhone'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-smart-phone',
  templateUrl: './smart-phone.component.html',
  styleUrls: ['./smart-phone.component.css']
})
export class SmartPhoneComponent implements OnInit {
  smartPhoneForm: FormGroup;
  smartphone: SmartPhone[] = [];
  smartPhoneSave: SmartPhone[] = [];
  smartPhoneSaveObj:SmartPhone={};
  smartPhonedelete:SmartPhone[] = [];
  constructor(private service: ApiService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getSmartPhones();
    this.smartPhoneForm = this.formBuilder.group({
            id: ['', Validators.required],
            name: ['', Validators.required],
            desc: ['', Validators.required],
            price: ['', Validators.required],
            updated:['',Validators.required]
        });
  }

  getSmartPhones() {
    this.service.getSmartphonesList().subscribe(response => {
      this.smartphone = response;

    })
  }

  saveSmartPhone() {
    this.service.saveSmartPhones(this.smartPhoneForm.value).subscribe(response => {
      this.smartPhoneSave = response
      })
  }
  onReset(){
    this.smartPhoneForm.reset();
  }

  updateSmartPhone(id:string,price:int) {
    
    this.service.updateSmartPhone(id,price).subscribe(response => {
      this.smartPhoneSaveobj = response
      })
  }

  deleteSmartPhone(id:string) {
    this.service.deleteSmartPhone(id).subscribe(response => {
      this.smartPhonedelete = response
      })
  }


       }
