import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../../settings/AppSettings';
import { Drone } from '../../models/drone/Drone.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DroneService {

  // Stocke l'URL de base de l'API pour éviter la duplication
  private host = AppSettings.APP_URL;

  // Injection du service HttpClient pour faire des appels HTTP
  constructor(private http: HttpClient) { }

  // Récupère tout les drones
  public getAllDrones(): Observable<Drone[]> {
    return this.http.get<Drone[]>(`${this.host}`);
  }


}
