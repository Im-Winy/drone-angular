import { Camera } from "../camera/Camera.model";
import { FlightController } from "../flight-controller/FlightController.model";
import { GPSModule } from "../gps-drone/GPSModule.model";

export interface Drone {
    
	idDrone: number;
	modele: String;
	poids: number;
	porteeMaximale: number;
	capaciteBatterie: number;
    camera: Camera;
    gpsModule: GPSModule;
    flightController: FlightController;
}
