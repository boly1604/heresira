import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  coordListRef: AngularFireList<any>;
  coordRef: AngularFireObject<any>;

  constructor(public afd: AngularFireDatabase) { }

  createCoord(lat, lon, tel, heure) {
    return this.afd.list('/Coordonnees/').push({
      latitude: lat,
      longitude: lon,
      telephone: tel,
      date_rel: heure
    })
  }

}
