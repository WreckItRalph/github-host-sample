import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css']
})
export class GeneralSettingsComponent implements OnInit {

  public years = [2016,2017,2018];
  public grades = ['Grade1', 'Grade2', 'Grade3']
  public names = ['Name1', 'Name2', 'Name3']
  public subjects = ['Subject1', 'Subject2', 'Subject3']
  public terms = ['Term1', 'Term2', 'Term3']

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      year: this.fb.control(''),
      grade: this.fb.control(''),
      name: this.fb.control(''),
      subject: this.fb.control(''),
      term: this.fb.control(''),
    });
  }

}
