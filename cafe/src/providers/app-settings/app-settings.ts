
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';  //important link

const CONFIG = {
  apiUrl: 'http://localhost:3000/',
};

@Injectable()
export class AppSettingsProvider {

  constructor(public http: Http) { //Httpclient to Htpp
    console.log('Hello AppSettingsProvider Provider');
  }
  
  public getApiUrl() {
    return CONFIG.apiUrl;
  }

}
