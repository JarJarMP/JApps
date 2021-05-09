import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNotes from './reducers/notes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NotesEffects } from './effects/notes.effects';
import { NotesComponent } from './notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromNotes.notesFeatureKey, fromNotes.reducer),
    EffectsModule.forFeature([NotesEffects]),
    ReactiveFormsModule,
    ButtonModule
  ],
  declarations: [NotesComponent]
})
export class NotesModule { }
