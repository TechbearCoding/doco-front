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

  obj:model = {
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
    date: ''
  } 

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
    date: ''
  });

  constructor(public service: ContractService, private formBuilder: FormBuilder)  { 

  }

  ngOnInit(): void {}
  
  onSubmit(){
    this.obj = this.checkoutForm.value;
    this.postContract();
    

  }
  postContract():void{
    this.service.postData(this.obj);
  } 


}
