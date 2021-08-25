import { observable } from "mobx";
import Entry from "./Entry";
import Location from "./Location";

const Store = observable({
    entries: [],
})

Store.entries.push(new Entry(new Location("nairobi", "getrudes"), 1, "Pfizer", "Priority: old people"));


export default Store;