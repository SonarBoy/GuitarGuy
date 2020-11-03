import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { NgForm } from '@angular/forms';
import '../../assets/smtp.js'; //file path may change → 

//import { ProfileService } from '../profile.service';
//import { Model } from './contact-form';

declare let Email: any;


@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {

  constructor() { }

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

      console.log("TEst");
  }

  
}
