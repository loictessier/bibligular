import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyDBl_7RvfEEKSs6uzKG8NfP5mk1V_ugwBc',
            authDomain: 'bibligular.firebaseapp.com',
            databaseURL: 'https://bibligular.firebaseio.com',
            projectId: 'bibligular',
            storageBucket: '',
            messagingSenderId: '962996594869'
        };
        firebase.initializeApp(config);
    }
}
