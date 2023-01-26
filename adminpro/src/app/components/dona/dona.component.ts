import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{


  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: this.datasets
    };
  }

  @Input() title: string ='Sin Titulo';
  @Input('labels') public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input() public datasets = [
    { data: [ 350, 450, 100 ],
      backgroundColor: ['#6857E6', '#009FEE', '#FFB414']
    },
  ]

  public doughnutChartData?: ChartData<'doughnut'>;

  

}
