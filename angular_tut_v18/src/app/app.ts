import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Master } from './components/master/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Master],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_tut_v18');
}
