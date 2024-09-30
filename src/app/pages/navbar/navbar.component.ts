import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from '../register/register.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router'; 
import { MatSidenav,MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatNavList, MatSidenavContainer, MatSidenav, MatSidenavContent, MatToolbarModule, MatIconModule, MatDividerModule, MatButtonModule, RegisterComponent, RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
sidenav: any;

isSmallScreen: boolean = false;

constructor(private breakpointObserver: BreakpointObserver) {
  this.breakpointObserver.observe([Breakpoints.Handset])
    .subscribe(result => {
      this.isSmallScreen = result.matches;
    });
}

}
