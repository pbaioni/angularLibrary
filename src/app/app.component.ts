import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {
        const config = {
            apiKey: 'AIzaSyAOgNGdMpw1IPYN4nvIml6NSLGcSWF0K64',
            authDomain: 'libraryoc-28a68.firebaseapp.com',
            databaseURL: 'https://libraryoc-28a68.firebaseio.com',
            projectId: 'libraryoc-28a68',
            storageBucket: 'gs://libraryoc-28a68.appspot.com/',
            messagingSenderId: '187755962455',
            appId: '1:187755962455:web:72825443743e28b0'
        };
        firebase.initializeApp(config);
    }
}
