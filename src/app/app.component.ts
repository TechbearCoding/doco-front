import { Component, OnInit } from '@angular/core';
import { model } from './contract-model'
import { FormBuilder } from '@angular/forms';
import { ContractService } from './contract.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    lastName: '',
    companyName: '',
    regNr: '',
    email: '',
    phone: '',
    address: '',
    bank: '',
    bankCode: '',
    accountNr: '',
    date: '',
  });

  constructor(public service: ContractService, private formBuilder: FormBuilder, private postModel:model)  { 

  }

  ngOnInit(): void {}
  
  onSubmit(){
    this.postModel.name = this.checkoutForm.value;

  }

  postIban(ibanNr:string):void{
    this.service.CheckIban(ibanNr);
  } 


}
