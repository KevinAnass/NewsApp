import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from "../services/newsapiservices.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  buisnessArticles:any=[];
  constructor(private service:NewsapiservicesService) { }

  ngOnInit(): void {
    this.service.businessArticles().subscribe((r)=>{
      this.buisnessArticles=r.articles;
    })
  }

}
