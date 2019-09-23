import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-list',
  templateUrl: './to-list.component.html',
  styleUrls: ['./to-list.component.css']
})
export class ToListComponent implements OnInit {

  listOfEmployee:string[]=["Carlos","Santiago","Jorge","Armando"];

  constructor() { }

  ngOnInit() {
  }

}
