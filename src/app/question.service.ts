import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Observable<any[]>;
  questionsRef = this.firestore.collection('questions');
  constructor(private firestore: AngularFirestore) {
    this.questions = this.questionsRef.valueChanges();
  }

  get showQuestions() {
    return this.questions;
  }

  createQuestion(name: string, module: string, lesson: string, text: string, answer1: string, answer2: string, answer3: string, answer4: string, correctAnswer: number, position:string) {
    this.questionsRef.add({
      name: name,
      module: module,
      lesson: lesson,
      text: text,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      correctAnswer: correctAnswer,
      position: position
    });
  }

  editQuestion(id:string, oldName: string, newName: string, module: string, lesson: string, text: string, answer1: string, answer2: string, answer3: string, answer4: string, correctAnswer: number, position: string) {
    this.questionsRef.doc(id).delete();
    this.questionsRef.add({
      name: newName,
      module: module,
      lesson: lesson,
      text: text,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      correctAnswer: correctAnswer,
      position: position
    });
  }

  deleteQuestion(id: string) {
    this.questionsRef.doc(id).delete();
  }

  getQuestions() {
    return this.questionsRef;
  }
}

