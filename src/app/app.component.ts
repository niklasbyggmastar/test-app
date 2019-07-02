import { Component } from '@angular/core';
import { Http } from "@angular/http"

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public list: Array<String> = [];

	constructor(private http: Http) {
		this.http.get("http://localhost:8000").subscribe(item => {
			console.log(item);
			this.list = item.json();
		});
	}

	post() {
		this.http.post("http://localhost:8000/users", {user: "testi", password: "testi123"}).subscribe(res => {
			console.log(res);
		});
	}

}
