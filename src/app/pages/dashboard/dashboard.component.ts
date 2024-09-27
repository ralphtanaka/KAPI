import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion'; // Add this line
import { MatExpansionPanel } from '@angular/material/expansion'; // Add this line
import {MatSliderModule} from '@angular/material/slider'; // Add this line
import {MatSelectModule} from '@angular/material/select'; // Add this line
import {MatButtonModule} from '@angular/material/button'; // Add this line
import { MatListModule } from '@angular/material/list'; // Add this line
import { MatExpansionPanelDescription } from '@angular/material/expansion'; // Add this line
import { MatExpansionPanelHeader } from '@angular/material/expansion'; // Add this line
import { MatExpansionPanelTitle } from '@angular/material/expansion'; // Add this line
import { MatExpansionPanelActionRow } from '@angular/material/expansion'; // Add this line
import { MatExpansionPanelContent } from '@angular/material/expansion'; // Add this line
import {MatButtonToggleModule} from '@angular/material/button-toggle'; // Add this line
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports:  [ ReactiveFormsModule, MatInputModule, MatIcon, MatIconModule, FlexLayoutModule, CommonModule, MatCardModule, MatSidenavModule, MatAccordion, MatExpansionModule, MatExpansionPanel, MatSliderModule, MatSelectModule, MatButtonModule, MatListModule, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelActionRow, MatExpansionPanelContent, MatButtonToggleModule, FormsModule, MatFormField, MatOption, MatFormFieldModule], 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  properties = [

    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2015/07/08/10/29/appartment-building-835817_960_720.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2021/12/20/09/20/apartment-6882571_1280.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2016/11/28/11/52/concrete-1864808_960_720.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2024/01/16/21/25/copenhagen-8513129_1280.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2016/04/18/14/53/image-1336613_960_720.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2022/07/10/19/30/house-7313645_1280.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955087_960_720.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2013/09/25/17/35/holiday-house-186366_960_720.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },
    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2015/09/25/23/30/pool-958429_960_720.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_960_720.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/building-8260627_1280.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2016/04/18/14/54/court-1336617_1280.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2016/04/18/14/57/image-1336620_960_720.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2016/04/18/14/52/buildings-1336611_1280.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2016/07/15/21/18/bulgaria-1520423_960_720.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },    {
      type: 'Villa',
      available: 12,
      location: 'Zanzibar, Villa',
      price: 'TZS 678000000.57',
      image: 'https://cdn.pixabay.com/photo/2017/02/21/11/55/relax-2085676_960_720.jpg',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },
  ];

  propertyTypes = ['Industrial', 'Residential', 'Commercial', 'Land'];
  rentalTypes = ['Houses', 'Condos', 'Apartments', 'Duplex', 'Vacation homes', 'Town house', 'Villas'];
  priceRange = { min: 0, max: 500000 };
  propertySize = { min: 50, max: 200 };
  bedrooms = [1, 2, 3, 4];
  bathrooms = [1, 2, 3, 4];
  cities = [
    'Dodoma', 'Dar es Salaam', 'Zanzibar', 'Mwanza', 'Mbeya', 'Morogoro', 'Tanga', 'Kigoma',
    'Iringa', 'Moshi Urban', 'Tabora', 'Lindi', 'Sungea', 'Kahama'
  ];

  selectedPropertyTypes: string[] = [];
  selectedRentalTypes: string[] = ['Apartments', 'Villas'];
  selectedBedrooms: number | null = null;
  selectedBathrooms: number | null = null;
  selectedCities: string[] = [];

  applyFilters() {
    // Implement filter logic here
    console.log('Filters applied');
  }

  resetFilters() {
    // Implement reset logic here
    console.log('Filters reset');
  }


  listingType: 'sale' | 'rent' = 'sale';
  searchQuery: string = '';
  availableUnits: number = 4236;

  priceRanges: string[] = ['Any', '$0 - $100,000', '$100,000 - $200,000', '$200,000+'];
  selectedPriceRange: string = 'Any';

  propertyTypess: string[] = ['Any', 'House', 'Apartment', 'Condo', 'Townhouse'];
  selectedPropertyType: string = 'Any';

  bedroomCounts: string[] = ['Any', '1', '2', '3', '4+'];
  selectedBedroomCount: string = 'Any';

  toggleListingType(type: 'sale' | 'rent') {
    this.listingType = type;
  }

  search() {
    console.log('Searching for:', this.searchQuery);
  }

  sortByRelevance() {
    console.log('Sorting by relevance');
  }

  subscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.subscriptionForm.valid) {
      console.log('Form submitted', this.subscriptionForm.value);
    }
  }
}
