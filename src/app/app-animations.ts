import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const Animations = {
    topFadein: trigger('topFadeIn', [

        transition('* => *', [
            // Start by:
            query(':enter', style({ opacity: 0 }), { optional: true }),

            // Each card will appear sequentially with the delay of 300ms
            query(':enter', stagger('300ms', [
                animate('0.5s 0.4s ease-in', keyframes([
                    style({ opacity: 0, transform: 'translateY(-10px)' }),
                    style({ opacity: 1, transform: 'translateY(0)' }),
                ]))
            ]), { optional: true }),
        ]),
    ]),
    topFadeIn2: trigger('topFadeIn2', [
        state('in', style({ opacity: 1, transform: 'translateY(0)' })),
        transition('void => *', [
            style({ opacity: 0, transform: 'translateY(-50px)' }),
            animate('1s 0.5s ease-in')
        ])
    ]),
    bottomFadein: trigger('bottomFadeIn', [

        transition('* => *', [
            // Start by:
            query(':enter', style({ opacity: 0 }), { optional: true }),

            // Each card will appear sequentially with the delay of 300ms
            query(':enter', stagger('300ms', [
                animate('0.5s 0.4s ease-in', keyframes([
                    style({ opacity: 0, transform: 'translateY(10px)' }),
                    style({ opacity: 1, transform: 'translateY(0)' }),
                ]))
            ]), { optional: true }),
        ]),
    ]),
    fade: trigger('fade', [
        state('in', style({ opacity: 1 })),
        transition('void => *', [
            style({ opacity: 0 }),
            animate('1s 0.5s ease-in-out')
        ])
    ]),
    fadeInOut: trigger('fade-in-out', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('1.5s ease-in-out', style({ opacity: 1 }))
        ]),
        transition(':leave', [
            animate('1.5s ease-in-out', style({ opacity: 0 }))
        ])
    ])
};
