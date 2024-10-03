import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  public products: any[] = [
    {
      imageUrl: 'images/placeholder.jpg',
    },
    {
      imageUrl: 'images/placeholder.jpg',
    },
    {
      imageUrl: 'images/placeholder.jpg',
    },
    {
      imageUrl: 'images/placeholder.jpg',
    },
  ];
}
