import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector : 'app-animations',
    templateUrl : './animations.component.html',
    styleUrls : ['./animations.component.css'],
    animations : [
        trigger('openClose',[
            state('open', style({
                height: '200px',
                opacity: 1,
                backgroundColor: 'yellow'
            })),
            state('closed', style({
                height: '100px',
                opacity: 0.5,
                backgroundColor: 'green'
            })),
            transition('open => closed', [
                animate('1s')
            ]),
            transition('closed => open', [
                animate('0.5s')
            ])
        ])
    ]
})
export class AnimationComponent {
    isOpen : boolean = false;
    constructor(){}

    toggle(){
        this.isOpen = !this.isOpen;
    }
}