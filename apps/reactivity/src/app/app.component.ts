import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountsComponent } from '@reactivity/accounts';

@Component({
  standalone: true,
  imports: [RouterModule, AccountsComponent],
  selector: 'reactivity-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reactivity';
}
