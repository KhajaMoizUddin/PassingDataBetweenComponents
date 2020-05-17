import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() messageFromChild : string;
@Input() getCounterValue : any;
@Input() getMessage: string;
refVariableHeading = 'Product Display Using #Reference Variable';
viewChildHeading = 'Product Display Using ViewChild()';


@Output() sendDataToParent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    
  }

  product = [{
    Id: 1001,
    Name: 'ADIDAS',
    Price: 5000,
    Quantity: 50
  },
{
  Id: 1002,
    Name: 'NIKE',
    Price: 4000,
    Quantity: 500 
},
{
  Id: 1003,
  Name: 'PUMA',
  Price: 2500,
  Quantity: 50
}];

  passFromChild() {
 this.sendDataToParent.emit(this.product)
  }

}
