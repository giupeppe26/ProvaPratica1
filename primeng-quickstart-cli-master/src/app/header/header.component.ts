import { style } from '@angular/animations';
import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: MenuItem[]; 
  queryCerca:string;

  ngOnInit() {
    
      this.items = [
          {
              icon: 'pi pi-home',
              label: 'Home',
          },
          {
            icon:'pi pi-video',
              label: 'Film',
              items: [
                  {label: 'Delete'},
                  {label: 'Refresh'}
              ]
          },
      ];
  }

  showValore(){
    console.log(this.queryCerca);
  }

}
