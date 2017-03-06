import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent implements OnInit {
formValues = {
  id: '',
  name: ''
}

submitted = false;

  onSubmit() { 
    alert("onSubmit called");
    this.submitted = true;
   }
  constructor() { }

  ngOnInit() {
  }

}
