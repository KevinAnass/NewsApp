import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  topHeadlineURL: string = "https://newsapi.org/v2/top-headlines?country=us&apiKey=4bde8551a7f24447bf914947474ec3a0";
  entertainmentURL: string = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=4bde8551a7f24447bf914947474ec3a0";
  businessURL: string = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4bde8551a7f24447bf914947474ec3a0";
  constructor(private _http: HttpClient) {
  }

  TopHeadline(): Observable<any> {
    return this._http.get(this.topHeadlineURL);
  }

  entertainmentsArticles():Observable<any>{
    return this._http.get(this.entertainmentURL);
  }

  businessArticles():Observable<any>{
    return this._http.get(this.businessURL);
  }

  SearchingArticles(q:string):Observable<any>{
    return this._http.get(`https://newsapi.org/v2/everything?q=${q}&from=2022-01-23&sortBy=publishedAt&apiKey=4bde8551a7f24447bf914947474ec3a0`);
  }

}
