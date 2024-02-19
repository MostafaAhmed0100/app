import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] 
})
export class ContactComponent {
  contactSection:FormGroup=new FormGroup({
    userName:new FormControl('',[Validators.required , Validators.minLength(6) , Validators.maxLength(10)]),
    userAge: new FormControl('' , [Validators.required , Validators.minLength(2) , Validators.maxLength(3)]),
    email:new FormControl('' , [Validators.pattern(/^[a-z][A-Z]{5}@?\.com$/) ,  Validators.required]   ),
    password: new FormControl('' , [Validators.required  ,  Validators.minLength(6)   ,   Validators.maxLength(10)]),
  
 })


 x(){
 console.log(this.contactSection);
 
 }






}
