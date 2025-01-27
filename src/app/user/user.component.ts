import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() id!: String;
  @Input({ required: true}) avatar: any;
  @Input({ required: true}) name: any;
  @Output() select = new EventEmitter();
  
  //select = output<String>()
  
  //alternative signals
  // avatar = input.required<string>()
  // name = input.required<string>()

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })

  get imagePath() {
      return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
