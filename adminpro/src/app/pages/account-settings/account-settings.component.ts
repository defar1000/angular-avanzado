import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  
  public links!: NodeListOf<Element>;

  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.settingService.checkCurrentTheme(this.links);
  }
  
  changeTheme( theme: string) {
    this.settingService.changeTheme(theme);
    this.settingService.checkCurrentTheme(this.links);
  }

}
