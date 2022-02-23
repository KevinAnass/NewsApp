import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from "../services/newsapiservices.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {
  searchingArticls:any=[];
  constructor(private service:NewsapiservicesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.SearchingArticles(this.route.snapshot.params["query"]).subscribe((r)=>{
      this.searchingArticls=r.articles;
    })

  }

}
