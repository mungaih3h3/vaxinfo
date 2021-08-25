import { makeAutoObservable } from "mobx";
import Location from "./Location";

export default class Entry {
    constructor(location = new Location(), dose = 1, vaccineType = "", specialNotes = "") {
        this.location = location;
        this.specialNotes = specialNotes;
        this.typeOfVaccine = vaccineType;
        this.dose = dose;
        
        makeAutoObservable(this);
    }
}