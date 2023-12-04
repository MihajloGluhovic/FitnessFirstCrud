import { Component } from '@angular/core';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss'],
})
export class CreateRegistrationComponent {
  public packages: string[] = ['Monthly', 'Seasonal', 'Yearly'];
  public genders: string[] = ['Male', 'Female'];
  public importantList: string[] = [
    'Toxic Fat Reduction',
    'Energy and endurance',
    'Building Lean Muscle',
    'Healthier Digestive System',
    'Sugar Craving Body',
    'Fitness',
  ];
}
