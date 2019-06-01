import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TrelloSuggest';

  backgrounds = [
    // tslint:disable-next-line:max-line-length
    'https://thewallpaper.co//wp-content/uploads/2016/01/hd-nature-wallpapers-landscape-natural-images-green-cute-desktop-images-sky-wallpaper-download-free-images-2560x1707.jpg',
    'https://wallpaperbro.com/img/67785.jpg',
    'https://hdwallsource.com/img/2014/8/blue-sunset-15113-15580-hd-wallpapers.jpg'
  ];
}
