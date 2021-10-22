import { Component, OnInit , AfterViewInit} from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Note} from 'src/app/models/Note';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.page.html',
  styleUrls: ['./viewnote.page.scss'],
})
export class ViewnotePage implements OnInit {
  note: Note = {
    id: '',
    title: '',
    content: '',
    createdAt: ''
  };
  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.noteService.getNote(id).subscribe(noteData => {
        this.note = noteData;
      });
    }
  }
  deleteNote() {
    this.noteService.deleteNote(this.note.id).then(() => {
      this.router.navigateByUrl('/notes');
    }, err => {
    });
  }
}
