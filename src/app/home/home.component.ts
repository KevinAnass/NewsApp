import {Component, OnInit} from '@angular/core';
import {NewsapiservicesService} from "../services/newsapiservices.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topHeading:any=[];

  constructor(private services: NewsapiservicesService) {
  }

  ngOnInit(): void {
    this.services.TopHeadline().subscribe((r) => {
      this.topHeading=r.articles;
    });

  }

}
