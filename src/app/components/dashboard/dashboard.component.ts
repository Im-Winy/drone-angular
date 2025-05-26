import { Component, OnInit } from '@angular/core';
import { Drone } from '../../models/drone/Drone.model';
import { DroneService } from '../../services/drone/drone.service';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  public drones: Drone[] = [];
  public subscriptions: Subscription[] = [];

  constructor(
    private droneService: DroneService,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');
    this.afficherDrones();
  }

  public afficherDrones(): void {
    const sub = this.droneService.getAllDrones().subscribe({
      next: (data: Drone[]) => {
        this.drones = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des drones :', error);
      }
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}

