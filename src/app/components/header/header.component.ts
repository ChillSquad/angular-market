import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public title: string = 'angular-market';
  public subtitle: string = 'магазин видеокарт';

    constructor(private router: Router) {}
  
    public goToCartPage() {
      this.router.navigate(['/cart-page']);
    }
    public goToFavoritesPage() {
      this.router.navigate(['/favorites-page']);
    }
    public goToProfile() {
      this.router.navigate(['/profile-page']);
    }
}
