import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datas = {};
  filteredPays= [];
  private _monpays: string= '';

  get monpays():string{
    return this._monpays;
  }

  set monpays(value: string){
    this._monpays=value;
    console.log('Definition de mon pays');
    // this.filteredPays= this.performFilter(value);
  }

  performFilter(filterBy: string){
    filterBy= filterBy.toLocaleLowerCase();
    // return this.datas.filter()
  }

  constructor(private serviceCountry: RestApiService) { }






  ngOnInit(): void {
    this.initcountry();
    this.datas=this.serviceCountry.getCountry;
    this._monpays="all";
    // console.log(this.datas.subscribe(arg => this.filteredPays = arg));


  }


  initcountry() {
    this.serviceCountry.getCountry.subscribe(
      (data) => {
        console.log(data);
      }

    );
  }

}
