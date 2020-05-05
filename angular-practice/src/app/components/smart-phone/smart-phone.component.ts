import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../httpservices/api.service';
import { SmartPhone } from '../../interfaces/SmartPhone'
@Component({
  selector: 'app-smart-phone',
  templateUrl: './smart-phone.component.html',
  styleUrls: ['./smart-phone.component.css']
})
export class SmartPhoneComponent implements OnInit {

  smartphone: SmartPhone[] = [];
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getSmartPhones();
  }

  getSmartPhones() {
    this.service.getSmartphonesList().subscribe(response => {
      this.smartphone = response;

    })
  }

}
