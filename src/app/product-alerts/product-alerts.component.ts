import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; //pass data to child
  @Output() notify: EventEmitter<any> = new EventEmitter<any>(); // pass data to parent
  constructor() {}
  btnNotifyClicked(): void {
    this.notify.emit();
  }
  ngOnInit(): void {}
}
