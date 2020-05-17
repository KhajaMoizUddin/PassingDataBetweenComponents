import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  messageFromApp = 'Displaying Message from ParentComponent';
  messageToChild = 'Passed To Child Component';
  sendMessageToChild = '';
  count = 0;
  products = [];
  @ViewChild(ChildComponent) emchild : ChildComponent;
  getPtoductWithViewChild = [];
  viewchildMessage = '';

  clickFromAppToChild() {
 this.count = this.count + 1;
 this.sendMessageToChild = 'Passing Data from AppComponent';
  }

  ParentCall(data) {
    this.products = data;
  }
  
  ngAfterViewInit() {
   this.getPtoductWithViewChild = this.emchild.product;
   this.viewchildMessage = this.emchild.viewChildHeading;
  }
  
}
