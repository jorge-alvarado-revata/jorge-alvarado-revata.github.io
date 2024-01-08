import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { MenuServiceService } from './menu-service.service';

import { MaterialModule } from './module/material/material.module';

const LIST_COMPONENTS = [MainComponent];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LIST_COMPONENTS],
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
