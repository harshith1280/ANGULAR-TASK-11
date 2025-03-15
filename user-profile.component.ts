import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: User = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890'
  };

  updateProfile(updatedUser: User) {
    this.user = { ...updatedUser }; // Angular's two-way data binding ensures instant UI updates.
  }
}
