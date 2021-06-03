import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/Service';
import { ServiceItem } from '../../model/ServiceItem';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Array<Service> = new Array<Service>();

  constructor() { }

  ngOnInit(): void {
    this.services.push(new Service('Masszázs', [new ServiceItem(30, 300), new ServiceItem(60, 600)]));
    this.services.push(new Service('Masszázs', [new ServiceItem(30, 300), new ServiceItem(60, 600)]));
    this.services.push(new Service('Masszázs', [new ServiceItem(30, 300), new ServiceItem(60, 600)]));
    this.services.push(new Service('Masszázs', [new ServiceItem(30, 300), new ServiceItem(60, 600)]));
    this.services.push(new Service('Masszázs', [new ServiceItem(30, 300), new ServiceItem(60, 600)]));
    this.services.push(new Service('Masszázs', [new ServiceItem(30, 300), new ServiceItem(60, 600)]));
  }

}
