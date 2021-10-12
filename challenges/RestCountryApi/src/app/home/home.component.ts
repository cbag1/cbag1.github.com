import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datas = {};

  constructor(private serviceCountry: RestApiService) { }



  ngOnInit(): void {
    this.initcountry();
    this.datas=this.serviceCountry.getCountry;

  }


  initcountry() {
    this.serviceCountry.getCountry.subscribe(
      (data) => {
        console.log(data);
      }

    );
  }

}
