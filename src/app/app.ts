import { Component } from '@angular/core';
import { Home } from './pages/home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Home, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portofolio-application';
}
