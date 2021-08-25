import { makeAutoObservable } from "mobx";

export default class Location {
    constructor(county = "", institution = "") {
        this.county = county;
        this.institution = institution;
        makeAutoObservable(this);
    }
}