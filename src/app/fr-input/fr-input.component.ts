import { Component, OnInit } from '@angular/core';

import { Output, Input } from '@angular/core';

@Component({
  selector: 'app-fr-input',
  templateUrl: './fr-input.component.html',
  styleUrls: ['./fr-input.component.css']
})
export class FrInputComponent implements OnInit {

  @Input() model:any;

  @Input() vm:any;

  constructor() { }

  ngOnInit() {
  }

  @Input() r="required";
  @Input() required1="required11";
  
  @Input() ml=5;

  IsRequired(){
    return true || this.required1=="true" || this.required1=="true"  ;
  }
}