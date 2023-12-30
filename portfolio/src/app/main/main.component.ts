import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MenuServiceService } from '../menu-service.service';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatSidenavModule, RouterOutlet, MatListModule, MatIconModule, MatToolbarModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


  openedMenu:boolean=false;

  constructor(private menu: MenuServiceService){
    this.openedMenu = this.menu.openMenu;
  }

  getOpenMenu(){
    this.openedMenu = this.menu.openMenu;
    console.log(this.openedMenu);
    return this.openedMenu;
  }

  changeMenu(){
    this.menu.openedMenu()
  }

}
