import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stockQuantity: number;
  rating: number;
  brand: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'e-commerce';

  products: Product[] = [
    {
      id: 1,
      name: 'Baby Stroller',
      category: 'Baby Gear',
      price: 149.99,
      stockQuantity: 30,
      rating: 3.5,
      brand: 'BabyJoy',
      description: 'Lightweight and easy to maneuver baby stroller.',
    },
    {
      id: 2,
      name: 'Baby Crib',
      category: 'Furniture',
      price: 299.99,
      stockQuantity: 20,
      rating: 3.8,
      brand: 'DreamOn',
      description: 'Sturdy wooden crib with adjustable mattress height.',
    },
    {
      id: 3,
      name: 'Baby Monitor',
      category: 'Electronics',
      price: 99.99,
      stockQuantity: 50,
      rating: 2.2,
      brand: 'SafeBaby',
      description: 'High-resolution video and audio baby monitor.',
    },
    {
      id: 4,
      name: 'Diapers',
      category: 'Essentials',
      price: 19.99,
      stockQuantity: 200,
      rating: 4.6,
      brand: 'ComfortDry',
      description: "Super absorbent and gentle on baby's skin.",
    },
    {
      id: 5,
      name: 'Baby Bottle',
      category: 'Feeding',
      price: 9.99,
      stockQuantity: 100,
      rating: 1.3,
      brand: 'Nourish',
      description: 'Anti-colic baby bottle with easy-to-hold design.',
    },
    {
      id: 6,
      name: 'Baby High Chair',
      category: 'Furniture',
      price: 79.99,
      stockQuantity: 15,
      rating: 2.7,
      brand: 'TinyTable',
      description: 'Adjustable high chair with removable tray.',
    },
    {
      id: 7,
      name: 'Baby Carrier',
      category: 'Baby Gear',
      price: 49.99,
      stockQuantity: 25,
      rating: 4.4,
      brand: 'CarryMe',
      description: 'Comfortable and ergonomic baby carrier.',
    },
    {
      id: 8,
      name: 'Pacifier',
      category: 'Essentials',
      price: 4.99,
      stockQuantity: 150,
      rating: 4.1,
      brand: 'Soothie',
      description: 'BPA-free pacifier with orthodontic design.',
    },
    {
      id: 9,
      name: 'Baby Bath Tub',
      category: 'Bath',
      price: 29.99,
      stockQuantity: 40,
      rating: 3.5,
      brand: 'SplashTime',
      description: 'Non-slip baby bath tub with temperature sensor.',
    },
    {
      id: 10,
      name: 'Baby Swing',
      category: 'Baby Gear',
      price: 159.99,
      stockQuantity: 10,
      rating: 3.6,
      brand: 'SootheSwing',
      description: 'Automatic baby swing with multiple speed settings.',
    },
  ];

  displayedProducts: Product[] = [];
  currentSort: string = '';
  currentFilter: number = 0; // Represents the minimum rating to filter by

  constructor() {}

  ngOnInit() {
    this.loadSortingState();
  }

  sortByPriceLowToHigh() {
    this.currentSort = 'priceLowToHigh';
    this.applyCurrentSortingAndFiltering();
    this.saveSortingState();
  }

  sortByPriceHighToLow() {
    this.currentSort = 'priceHighToLow';
    this.applyCurrentSortingAndFiltering();
    this.saveSortingState();
  }

  sortBy4above() {
    this.currentFilter = 4;
    this.applyCurrentSortingAndFiltering();
    this.saveSortingState();
  }

  applyCurrentSortingAndFiltering() {
    let sortedProducts = [...this.products];
    if (this.currentSort === 'priceLowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (this.currentSort === 'priceHighToLow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (this.currentFilter > 0) {
      sortedProducts = sortedProducts.filter(
        (product) => product.rating >= this.currentFilter
      );
    }

    this.displayedProducts = sortedProducts;
  }

  saveSortingState() {
    localStorage.setItem('sortType', this.currentSort);
    localStorage.setItem('filterRating', this.currentFilter.toString());
  }

  removeItem() {
    localStorage.removeItem('sortType');
    localStorage.removeItem('filterRating');
    this.currentSort = '';
    this.currentFilter = 0;
    this.applyCurrentSortingAndFiltering();
  }

  loadSortingState() {
    const sortType = localStorage.getItem('sortType');
    const filterRating = localStorage.getItem('filterRating');

    if (sortType) {
      this.currentSort = sortType;
    }

    if (filterRating) {
      this.currentFilter = +filterRating;
    }

    this.applyCurrentSortingAndFiltering();
  }
}
//

// import { Component, OnInit } from '@angular/core';

// export interface Product {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   stockQuantity: number;
//   rating: number;
//   brand: string;
//   description: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit {
//   title = 'e-commerce';

//   products: Product[] = [
//     {
//       id: 1,
//       name: 'Baby Stroller',
//       category: 'Baby Gear',
//       price: 149.99,
//       stockQuantity: 30,
//       rating: 3.5,
//       brand: 'BabyJoy',
//       description: 'Lightweight and easy to maneuver baby stroller.',
//     },
//     {
//       id: 2,
//       name: 'Baby Crib',
//       category: 'Furniture',
//       price: 299.99,
//       stockQuantity: 20,
//       rating: 3.8,
//       brand: 'DreamOn',
//       description: 'Sturdy wooden crib with adjustable mattress height.',
//     },
//     {
//       id: 3,
//       name: 'Baby Monitor',
//       category: 'Electronics',
//       price: 99.99,
//       stockQuantity: 50,
//       rating: 2.2,
//       brand: 'SafeBaby',
//       description: 'High-resolution video and audio baby monitor.',
//     },
//     {
//       id: 4,
//       name: 'Diapers',
//       category: 'Essentials',
//       price: 19.99,
//       stockQuantity: 200,
//       rating: 4.6,
//       brand: 'ComfortDry',
//       description: "Super absorbent and gentle on baby's skin.",
//     },
//     {
//       id: 5,
//       name: 'Baby Bottle',
//       category: 'Feeding',
//       price: 9.99,
//       stockQuantity: 100,
//       rating: 1.3,
//       brand: 'Nourish',
//       description: 'Anti-colic baby bottle with easy-to-hold design.',
//     },
//     {
//       id: 6,
//       name: 'Baby High Chair',
//       category: 'Furniture',
//       price: 79.99,
//       stockQuantity: 15,
//       rating: 2.7,
//       brand: 'TinyTable',
//       description: 'Adjustable high chair with removable tray.',
//     },
//     {
//       id: 7,
//       name: 'Baby Carrier',
//       category: 'Baby Gear',
//       price: 49.99,
//       stockQuantity: 25,
//       rating: 4.4,
//       brand: 'CarryMe',
//       description: 'Comfortable and ergonomic baby carrier.',
//     },
//     {
//       id: 8,
//       name: 'Pacifier',
//       category: 'Essentials',
//       price: 4.99,
//       stockQuantity: 150,
//       rating: 4.1,
//       brand: 'Soothie',
//       description: 'BPA-free pacifier with orthodontic design.',
//     },
//     {
//       id: 9,
//       name: 'Baby Bath Tub',
//       category: 'Bath',
//       price: 29.99,
//       stockQuantity: 40,
//       rating: 3.5,
//       brand: 'SplashTime',
//       description: 'Non-slip baby bath tub with temperature sensor.',
//     },
//     {
//       id: 10,
//       name: 'Baby Swing',
//       category: 'Baby Gear',
//       price: 159.99,
//       stockQuantity: 10,
//       rating: 3.6,
//       brand: 'SootheSwing',
//       description: 'Automatic baby swing with multiple speed settings.',
//     },
//   ];

//   displayedProducts: Product[] = [];

//   constructor() {}

//   ngOnInit() {
//     this.loadSortingState();
//   }

//   sortByPriceLowToHigh() {
//     this.products.sort((a, b) => a.price - b.price);
//     this.displayedProducts = [...this.products];
//     this.saveSortingState('priceLowToHigh');
//   }

//   sortByPriceHighToLow() {
//     this.products.sort((a, b) => b.price - a.price);
//     this.displayedProducts = [...this.products];
//     this.saveSortingState('priceHighToLow');
//   }

//   sortBy4above() {
//     this.displayedProducts = this.products.filter((product) => product.rating >= 4);
//     this.saveSortingState('rating4above');
//   }

//   saveSortingState(sortType: string) {
//     localStorage.setItem('sortType', sortType);
//   }

//   loadSortingState() {
//     const sortType = localStorage.getItem('sortType');
//     if (sortType) {
//       switch (sortType) {
//         case 'priceLowToHigh':
//           this.sortByPriceLowToHigh();
//           break;
//         case 'priceHighToLow':
//           this.sortByPriceHighToLow();
//           break;
//         case 'rating4above':
//           this.sortBy4above();
//           break;
//         default:
//           this.displayedProducts = [...this.products];
//           break;
//       }
//     } else {
//       this.displayedProducts = [...this.products];
//     }
//   }
// }
