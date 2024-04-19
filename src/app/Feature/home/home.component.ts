import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterModule, MenuComponent
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {


}
