import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SheetService } from './service/sheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
googleSheetForm!:FormGroup;
  constructor (private fromBuilder:FormBuilder,private service:SheetService,private router:Router
  ){
    this.googleSheetForm=this.fromBuilder.group({
      fullName:fromBuilder.control(''),
      email:fromBuilder.control(''),
      phoneNumber:fromBuilder.control(''),
      subject:fromBuilder.control(''),
      message:fromBuilder.control(''),
    })
  }
  ngOnInit():void{}

    onSubmit(){
      console.log(this.googleSheetForm.value);
      const fullName=this.googleSheetForm.value.fullName
      const email=this.googleSheetForm.value.email
      const phoneNumber=this.googleSheetForm.value.phoneNumber
      const subject=this.googleSheetForm.value.subject
      const message=this.googleSheetForm.value.message

      this.service.createSheet(fullName,email,phoneNumber,subject,message).subscribe({
        next: res =>{
          console.log(res);
          if(res){
            this.router.navigate(['/app'])
          }
        },

          error: (error) =>{
            console.log(error);
        },
      });

    

  }
}
