import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: [],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    { id: uuid(), name: 'Trunks', power: 10 },
  ];
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id: string): void {
    this.onDeleteCharacter.emit(id);
  }
}
