import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

const components=[MatSidenavModule,  MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatCardModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class MaterialModule { }
