import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { NgForm } from '@angular/forms';
import '../../assets/smtp.js'; //file path may change → 


declare let Email: any;


@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {

  constructor(private snotifyService:SnotifyService) { }

  ngOnInit() {


  }

  push(){
    
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'joshua.l99.c@gmail.com',
      Password : 'ACAD3CF2E6C5B6745DA8A8B9A3CBA70BEA7F',
      To : 'joshua.l99.c@gmail.com',
      From : `joshua.l99.c@gmail.com`,
      Subject : 'Testing',
      Body : `<i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>
       <br /> <b>Email: </b><br /> <b>Subject: </b>
      <br /> <b>Message:</b> <br /> 
      <br><br> <b>~End of Message.~</b> `
      }).then(  );

      
      this.snotifyService.success('Example body content', {
        timeout: 2000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true
      });

      this.snotifyService.success('Example body content');
      this.snotifyService.success('Example body content', 'Example Title');
  
      this.snotifyService.success('Example body content', {
        timeout: 2000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true
      });
  
      this.snotifyService.success('Example body content', 'Example title', {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true
      });
  }

  
}
