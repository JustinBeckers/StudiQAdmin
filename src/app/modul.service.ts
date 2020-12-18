import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModulService {
  modules: Observable<any[]>;
  modulesRef = this.firestore.collection('modules');

  constructor(private firestore: AngularFirestore) {
    this.modules = this.modulesRef.valueChanges();
  }

  get showModules() {
    return this.modules;
  }

  createModule(name: string){
    this.modulesRef.doc(name).set({name: name});
  }
  deleteModule (name: string){
    this.modulesRef.doc(name).delete();
  }
  renameModule(oldName: string, newName:string){
    this.modulesRef.doc(oldName).delete();
    this.modulesRef.doc(newName).set({name: newName});
  }
}
