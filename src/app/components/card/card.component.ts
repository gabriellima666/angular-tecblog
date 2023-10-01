import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  cardTitle: string = '';
  @Input()
  cardDatePost:string = '';
  @Input()
  cardImage: string = '';
  @Input()
  cardDescription: string = '';
  @Input()
  id: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
