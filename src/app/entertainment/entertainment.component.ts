import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from "../services/newsapiservices.service";

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  entertainments:any=[];
  constructor(private service:NewsapiservicesService) { }

  ngOnInit(): void {
    this.service.entertainmentsArticles().subscribe((r)=>{
      this.entertainments=r.articles;
    })
  }

}
