import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dadaFake } from '../../data/dadaFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title:string = '';
  datePost:string = '';
  image:string = '';
  description:string = '';
  private id:string | null = "0";

  constructor(private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )
    console.log(this.id)
    this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string | null) {
    const result = dadaFake.filter( article => article.id == id)[0]
    this.title = result.title
    this.datePost = result.datePost
    this.image = result.image
    this.description = result.description
  }

}
