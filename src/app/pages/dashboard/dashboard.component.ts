import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports:  [ MatIcon, MatIconModule, FlexLayoutModule, CommonModule, MatCardModule],
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
      image: 'https://via.placeholder.com/500x300',
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
      image: 'https://via.placeholder.com/500x300',
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
      image: 'https://via.placeholder.com/500x300',
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
      image: 'https://via.placeholder.com/500x300',
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
      image: 'https://via.placeholder.com/500x300',
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
      image: 'https://via.placeholder.com/500x300',
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
      image: 'https://via.placeholder.com/500x300',
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
      image: 'https://via.placeholder.com/500x300',
      amenities: {
        bedrooms: 3,
        bathrooms: 4,
        pool: 1
      }
    },
    // Add more property objects here...
  ];
}
