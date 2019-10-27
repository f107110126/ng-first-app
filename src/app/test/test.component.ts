import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  fireEvent() {
    this.childEvent.emit('hello event is fired.');
    console.log('done');
  }
  constructor() { }

  ngOnInit() {
  }
  @Input() tapp_name1;
  @Input('tapp_name2') newname2;
  @Output() childEvent = new EventEmitter();
  sampleString = 'Hellow everybody this is a sample string.';
  sampleUser = {
    name: 'John',
    age: 23,
    gender: 'male'
  }
  sampleDate = new Date();
  isDisplay = false;
  color = 'none';
  colors = ['red', 'yello', 'green', 'blud'];
  name = 'Andy';
  value1 = 'sample1';
  value2 = 'sample2';
  isDisabled1 = true;
  isDisabled2 = false;
  isDisabled3 = false; // try to change this, it will make effect.
  successClass = 'text-success';
  isSpecial = true;
  hasError = false; // try to change this, it will make effect.
  highlightColor = 'darkgreen';
  messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }

  titleStyles = {
    color: 'darkblue',
    fontStyle: 'italic'
  }

  app = {
    name: 'TestExample'
  }

  attrfromjs = window.location.href;

  greeting = '';
  clickHandler(event) {
    console.log('hellow world.');
    console.log(event);
    this.greeting = 'hello html.';
  }

  logMessage(msg) {
    console.log(msg);
  }

  print2log(msg) {
    console.log(msg);
    return null;
  }

  greetUser() {
    return 'hello ' + this.name + ' !';
  }

}
