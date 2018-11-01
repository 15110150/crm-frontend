import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-lecturer',
  templateUrl: './list-lecturer.component.html',
  styleUrls: ['./list-lecturer.component.scss']
})
export class ListLecturerComponent {

  status: { isOpen: boolean } = { isOpen: false };
  disabled: boolean = false;
  isDropup: boolean = true;
  autoClose: boolean = false;

  constructor() { }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isOpen = !this.status.isOpen;
  }
  change(value: boolean): void {
    this.status.isOpen = value;
  }

}
