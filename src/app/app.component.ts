import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Retro Barcode Generator';
  colors: Array<string> = [
    'BlueViolet',
    'BurlyWood',
    'CornflowerBlue',
    'Cornsilk',
    'DarkOliveGreen',
    'DarkOrchid',
    'DarkViolet',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'HoneyDew',
    'Indigo',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'Lime',
    'LimeGreen',
    'Linen',
    'MediumOrchid',
    'MediumVioletRed',
    'MintCream',
    'MistyRose',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Plum',
    'RosyBrown',
    'Thistle',
    'Tomato',
    'Violet',
    'Wheat'
  ];
  randomColors = this.randomNumbers();
  randomNumbers(){
    let randomNumbers = [];
    for (let i=0; i<10; ++i){
      randomNumbers.push(Math.floor(Math.random()*38));
    }
    return randomNumbers;
  }
}
