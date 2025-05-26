import { GPSModule } from "../gps-drone/GPSModule.model";

export interface FlightController {

    idFlightController: number;
    vitesseActuelle: number;
    altitudeCible: number;
    positionCible: GPSModule;
}
