import { Button, CardActions, TextField } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import Entry from "../domain/Entry";
import Store from "../domain/Store";

let entry = new Entry();
export default observer(function AddEntryView({ closeModal }) {
  return (
    <div>
      <div>
        <TextField
          fullWidth
          label="County"
          type="text"
          value={entry.location.county}
          onChange={(e) => {
            entry.location.county = e.target.value;
          }}
        />

        <TextField
          fullWidth
          label="Institution"
          type="text"
          value={entry.location.institution}
          onChange={(e) => {
            entry.location.institution = e.target.value;
          }}
        />
      </div>

      <TextField
        fullWidth
        label="Type of Vaccine"
        type="text"
        value={entry.typeOfVaccine}
        onChange={(e) => {
          entry.typeOfVaccine = e.target.value;
        }}
      />

      <TextField
        fullWidth
        label="Dose"
        type="text"
        value={entry.dose}
        onChange={(e) => {
          entry.dose = e.target.value;
        }}
      />
      <TextField
        fullWidth
        label="Special Notes"
        type="text"
        value={entry.specialNotes}
        onChange={(e) => {
          entry.specialNotes = e.target.value;
        }}
      />
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            Store.entries.push(entry);
            entry = new Entry();
            closeModal();
          }}
        >
          Submit
        </Button>
      </CardActions>
    </div>
  );
});
