import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuServiceService } from '../menu-service.service';
import { MaterialModule } from '../module/material/material.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, MaterialModule ],
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
