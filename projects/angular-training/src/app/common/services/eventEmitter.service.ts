import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
    providedIn : 'root'
})
export class EventEmitterService{
    myEvent : EventEmitter<string> = new EventEmitter<string>();

    constructor(){}
}