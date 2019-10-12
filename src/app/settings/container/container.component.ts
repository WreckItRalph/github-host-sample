import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ComponentsComponent } from '../components/components.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @ViewChild('componentList', { static: true }) list: ComponentsComponent;
  constructor() { }

  ngOnInit() {
  }

  addComponent() {
    this.list.addComponent();
  }

}
