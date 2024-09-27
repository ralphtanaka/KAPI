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

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports:  [ MatIcon, MatIconModule, FlexLayoutModule, CommonModule, MatCardModule, MatSidenavModule, MatAccordion, MatExpansionModule, MatExpansionPanel, MatSliderModule, MatSelectModule, MatButtonModule, MatListModule, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelActionRow, MatExpansionPanelContent, MatButtonToggleModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
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
}
