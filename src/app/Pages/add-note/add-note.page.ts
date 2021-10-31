import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { NoteService } from 'src/app/services/note.service';
import { Note} from 'src/app/models/Note';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  note: Note = {
    title: '',
    content: '',
    createdAt: new Date().getTime()
  };
  constructor(  private noteService: NoteService,
                private router: Router,
    ) { }

  ngOnInit() {
  }
  addNote() {
    this.noteService.addNote(this.note).then(() => {
      this.router.navigateByUrl('/notes');
    }, err => {
    });
  }

}
