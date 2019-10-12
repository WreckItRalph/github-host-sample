import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  @ViewChild('list', { static: true, read: ViewContainerRef }) componentList: ViewContainerRef;
  private subscription;
  private count;
  private idIndexMapping = [];
  constructor(private cfr: ComponentFactoryResolver) {
    this.subscription = [];
    this.count = 1;
  }

  ngOnInit() {
  }

  addComponent() {
    const baseFactory = this.cfr.resolveComponentFactory(BaseComponent);
    const baseComponent = this.componentList.createComponent<BaseComponent>(baseFactory);
    const id = this.count++;
    (baseComponent.instance as BaseComponent).id = id;
    this.idIndexMapping.push(id);
    this.subscription.push((baseComponent.instance as BaseComponent).delete.subscribe(x => {
      this.removeComponent(x);
    }));
    baseComponent.location.nativeElement.style.width = '33%';
  }

  removeComponent(id) {
    const index = this.idIndexMapping.indexOf(id);
    this.idIndexMapping.splice(index, 1);
    this.componentList.remove(index);
  }

}
