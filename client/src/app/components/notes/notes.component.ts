import {Component, OnDestroy, OnInit} from '@angular/core';
import { Notes } from "../../models/notes.interface";
import { Store } from "@ngrx/store";
import { State } from "../../reducers";
import { getAllNotes, getNotesError } from "./selectors/notes.selectors";
import { Subscription } from "rxjs";
import { createNotes, loadNotes } from "./actions/notes.actions";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  notes: Notes[];
  error: Error = null;
  notesSubscription: Subscription
  errorSubscription: Subscription

  addNoteFormGroup: FormGroup;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(loadNotes());
    this.notesSubscription = this.store.select(getAllNotes).subscribe(
      result => this.notes = result
    )
    this.errorSubscription = this.store.select(getNotesError).subscribe(
      error => this.error = error
    )

    this.addNoteFormGroup = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
    })
  }

  ngOnDestroy() {
    this.notesSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
  }

  AddNote() {
    const notes = {
      title: this.addNoteFormGroup.value.title,
      content: this.addNoteFormGroup.value.content,
      isPinned: true,
      isArchived: false,
      isDeleted: false,
      dateOfModified: new Date(),
      lastModifiedBy: "Zs",
      tags: [
        "No Tags"
      ]
    }
    this.store.dispatch(createNotes({notes}));
    this.store.dispatch(loadNotes());
  }


}
