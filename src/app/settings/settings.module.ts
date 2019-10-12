import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { ComponentsComponent } from './components/components.component';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import {
  MatCardModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';



@NgModule({
  declarations: [GeneralSettingsComponent, ComponentsComponent, ContainerComponent, BaseComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatFormFieldModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContainerComponent
      }
    ])
  ],
  entryComponents: [BaseComponent]
})
export class SettingsModule { }
