import { ServiceItem } from './ServiceItem';

export class Service {
  name: string;
  services: Array<ServiceItem>;

  constructor(name: string, services: Array<ServiceItem>) {
    this.name = name;
    this.services = services;
  }
}
