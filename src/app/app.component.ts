import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    template: `   
        <H1>App started  1{{ temp }}</H1>
  `,
})

export class AppComponent {
    temp = 'temp variable'
    constructor() {}
}
