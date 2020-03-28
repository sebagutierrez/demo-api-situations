import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  apiData;
  isDataLoaded = false;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/v1/situations")
      .subscribe(
        data => this.apiData = data,
        err => console.log(err),
        () => {
          console.log(this.apiData);
          this.isDataLoaded = true;
        }
      )
  }
}
