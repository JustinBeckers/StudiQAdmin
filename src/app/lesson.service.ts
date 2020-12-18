import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LessonService {
  lessons: Observable<any[]>;
  lessonsRef = this.firestore.collection('lessons');

  constructor(private firestore: AngularFirestore) {
    this.lessons = this.lessonsRef.valueChanges();
  }

  get showLessons() {
    return this.lessons;
  }

  createLesson(name: string, module: string){
    this.lessonsRef.add({
      name: name,
      module: module
    });
  }
  deleteLesson (name: string){
    this.lessonsRef.doc(name).delete();
  }
  renameLesson(oldName: string, newName:string){
    this.lessonsRef.doc(oldName).delete();
    this.lessonsRef.doc(newName).set({name: newName});
  }
}
