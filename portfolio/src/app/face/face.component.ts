import { Component } from '@angular/core';
import { MaterialModule } from '../module/material/material.module';

import Chart from 'chart.js';

@Component({
  selector: 'face',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './face.component.html',
  styleUrl: './face.component.scss'
})
export class FaceComponent {

}
