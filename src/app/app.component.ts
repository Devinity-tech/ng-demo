import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
  {{ data | json }} 
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-demo';
  data = {}
  constructor(private http: HttpClient) {
    this.http.get('url').subscribe(data => this.data = data );
  }
}
