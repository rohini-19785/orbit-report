import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[];

   pravin: string;

  constructor() { 
    this.pravin="Test";
  }

  ngOnInit() {
  }

  

}