import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faPhone = faPhone;
  faEnvelopeOpen = faEnvelopeOpen;

  constructor() { }

  ngOnInit(): void {
  }

}
