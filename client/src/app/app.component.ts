import { Component } from '@angular/core'
import { ValueServiceService } from './value-service.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'client'

    public chord : any

    constructor (private valueService : ValueServiceService) {
        this.startingLibrary();
    }

    public startingLibrary () {

        const chordictionary = require('chordictionary');

        // creating the instrument
        let guitarInstrument = new chordictionary.Instrument('EADGBE', 24, 5, 4);

        this.chord = guitarInstrument.getChordLayout("X32010", { name: "C Major", notes:["x", "C", "E", "G", "C", "E"] });

    }
}
