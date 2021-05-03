import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notes} from "../../models/notes.interface";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient: HttpClient) {}

  public getAllNotes(): Observable<Notes[]> {
    return this.httpClient.get<Notes[]>('/api/notes');
    //return this.httpClient.get<Notes[]>('/api/asdasda');
  }

  public createNotes(note: Notes): Observable<Notes> {
    return this.httpClient.post<Notes>('/api/notes', note);
    //return this.httpClient.post<Notes>('/api/notasdasdes', note);
  }
}
