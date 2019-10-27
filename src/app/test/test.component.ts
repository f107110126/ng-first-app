import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'Andy';

  attrfromjs = window.location.href;

  print2log(msg) {
    console.log(msg);
    return null;
  }

  greetUser() {
    return 'hello ' + this.name + ' !';
  }

}
