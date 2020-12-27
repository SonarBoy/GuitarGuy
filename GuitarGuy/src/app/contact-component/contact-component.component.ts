import { Component, Input, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import '../../assets/smtp.js'; //file path may change → 
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

declare let Email: any;


@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})


export class ContactComponentComponent implements OnInit {

  @Input() address:String;
  @Input() content:String;


  contactForm = this.fb.group({
    name : ['',Validators.required],
    email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    comments: ['',Validators.required]
  });

  constructor(private snotifyService:SnotifyService,private fb: FormBuilder) { }

  ngOnInit() {


  }

  shoutOut(add:string,bdy:string){

    this.address = add;
    this.content = bdy;

    console.log(this.address);
    console.log(this.content);
  }

  push(){
    
    // Email.send({
    //   Host : 'smtp.elasticemail.com',
    //   Username : 'joshua.l99.c@gmail.com',
    //   Password : 'ACAD3CF2E6C5B6745DA8A8B9A3CBA70BEA7F',
    //   To : 'joshua.l99.c@gmail.com',
    //   From : this.contactForm.get('email').value,
    //   Subject : 'Testing',
    //   Body : `<i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>
    //    <br /> <b>Email: </b><br /> <b>Subject: </b>
    //   <br /> <b>Message:</b> <br /> 
    //   <br><br> <b>~End of Message.~</b> `
    //   }).then(  );

      
    //   this.snotifyService.success('Example body content', {
    //     timeout: 2000,
    //     showProgressBar: true,
    //     closeOnClick: false,
    //     pauseOnHover: true
    //   });

    //   this.snotifyService.success('Example body content');
    //   this.snotifyService.success('Example body content', 'Example Title');
  
    //   this.snotifyService.success('Example body content', {
    //     timeout: 2000,
    //     showProgressBar: true,
    //     closeOnClick: false,
    //     pauseOnHover: true
    //   });
  
    //   this.snotifyService.success('Example body content', 'Example title', {
    //     timeout: 2000,
    //     showProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: true
    //   });

      console.log("Name" +this.contactForm.get('name').value);
      console.log("Email" +this.contactForm.get('email').value);
      console.log("Comment" +this.contactForm.get('comments').value);
      this.contactForm.reset();
  }



  
}
