import { ChangeDetectionStrategy } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MaterialModule } from '../module/material/material.module';
import { NgChartsModule } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'face',
  standalone: true,
  imports: [MaterialModule, NgChartsModule],
  templateUrl: './face.component.html',
  styleUrl: './face.component.scss'
})
export class FaceComponent implements OnInit, AfterViewInit {


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['2003-2008', '2008-2012', '2012-2013', '2014-2016', '2021-2022', '2022-2023', '2023', '2023-today'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40, 40], label: 'Front End' },
      { data: [28, 48, 40, 19, 86, 27, 90, 40], label: 'Back End' },
      { data: [65, 70, 20, 10, 86, 27, 90, 40], label: 'FullStack' },
    ],
  };

  constructor(){}

  ngOnInit(): void {}

  ngAfterViewInit() {


  }


}
