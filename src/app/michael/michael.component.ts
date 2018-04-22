import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './michael.component.html',
  styleUrls: ['./michael.component.scss']
})

export class MichaelComponent {
  tiles: {text: string, cols: number, rows: number, color: string}[] = [
{text: 'One', cols: 3, rows: 1, color: 'lightgreen'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightlight'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDf1'},
  ];

  dogs: {name: string, human: string}[] = [
    {name: 'Chris', human: 'Kara'},
    {name: 'Michael', human: 'Jeremy'},
    {name: 'Kerry', human: 'Igor'},
    {name: 'Alan', human: 'Ward'},
    {name: 'Molly', human: 'Rob'},
    {name: 'Ben', human: 'Matias'},
    ];

  basicRowHeight = 80;

}
