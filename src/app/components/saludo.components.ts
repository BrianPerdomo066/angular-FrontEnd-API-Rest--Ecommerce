import { Component } from "@angular/core";

@Component({
    selector: 'como-quiero',
    templateUrl: './saludo.components.html',
    styleUrls: [ './saludo.components.css' ]
})
export class saludo {
    Saludo = 'hola mundo desde Angular';
}