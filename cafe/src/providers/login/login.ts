import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppSettingsProvider } from '../app-settings/app-settings';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import {map} from 'rxjs/operators';

@Injectable()
export class LoginProvider {

  apiUrl = this.appSettings.getApiUrl();
 
  constructor(public http: Http, public appSettings: AppSettingsProvider) {
  }
 
  public getTodos() {
    return this.http.get(this.apiUrl + 'todos_get/:name')
      .map(response => response.json().result);
  }
 
  public addTodo(newTodo) {
    return this.http.post(this.apiUrl + 'todo', {'text': newTodo})
      .map(response => response.json());
  }
 
  public deleteTodo(todoId) {
    return this.http.delete(this.apiUrl + 'todos_del/' + todoId)
      .map(response => response.json());
  }

}
