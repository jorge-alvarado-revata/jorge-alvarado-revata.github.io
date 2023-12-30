import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {


  openMenu: boolean = false;

  constructor() { }



  openedMenu(){
    this.openMenu = !this.openMenu;
    console.log(this.openMenu)
  }

}