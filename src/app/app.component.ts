import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sobre mi', url: '/home', icon: 'alert-circle' },
    { title: 'Farmacia online', url: '/satu', icon: 'thermometer' },
    { title: 'Atencion en el hogar', url: '/dua', icon: 'home' },
    { title: 'Familia', url: '/folder/Archived', icon: 'people' },
    { title: 'Test', url: '/folder/Trash', icon: 'pulse' },
    { title: 'Mas servicios', url: '/folder/Spam', icon: 'ellipsis-vertical' },
  ];
  public labels = ['Comparte', 'Contacto con nosotros',];
  constructor() {}
}
