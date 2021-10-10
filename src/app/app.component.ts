import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customepipe';  
  arrList: any = [];  
  constructor() {}  
  ngOnInit() {
    this.arrList = [  
      { id: 1, name: 'Name1', value: null, status: 'pending' },  
      { id: 2, name: 'Name2', value: null, status: 'pending' },  
      { id: 3, name: 'Name3', value: 'View', status: 'pending' },  
    ];
  }
}