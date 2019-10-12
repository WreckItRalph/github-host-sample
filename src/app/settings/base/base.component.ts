import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @Output() delete: EventEmitter<any>;
  public id: number;

  constructor() {
    this.delete = new EventEmitter();
  }

  ngOnInit() {


  }

  deleteComponent() {
    this.delete.emit(this.id);
  }

}
