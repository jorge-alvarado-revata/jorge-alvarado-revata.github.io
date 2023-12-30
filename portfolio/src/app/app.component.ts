import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuServiceService } from './menu-service.service';


const LIST_COMPONENTS = [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatMenuModule, MatSidenavModule, MainComponent];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: LIST_COMPONENTS,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private menu: MenuServiceService){}
  
  changeMenu(){
    this.menu.openedMenu()
  }

}
