import { Routes } from '@angular/router';
// import { NavbarComponent } from './pages/navbar/navbar.component';
// import { FooterComponent } from './pages/footer/footer.component';
// import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';    
import { MessagesComponent } from './pages/messages/messages.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path : 'checkout', component: CheckoutComponent },
    { path : 'messages', component: MessagesComponent },
    { path : 'properties', component: PropertiesComponent },
    { path : 'signup', component: SignupComponent },
    { path : 'notifications', component: NotificationsComponent }
];
