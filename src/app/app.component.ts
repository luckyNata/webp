import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    template: `   
        <H1>App started {{ temp }}</H1>
  `,
})

export class AppComponent {
    temp = 'with variable'
    constructor() {}
}
