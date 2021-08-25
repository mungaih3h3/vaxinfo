import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Card,
  CardContent,
  List,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import Store from "../domain/Store";
import AddEntryView from "./AddEntryView";

export default observer(function MainView() {
  const [open, setOpen] = useState(false);
  const styles = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            Vaccine locations
          </Typography>
          <Button color="inherit" onClick={() => setOpen(true)}>
            Add Entry
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <List>
          {Store.entries.map((entry, index) => (
            <Card>
              <CardContent>
                <p>Dose: {entry.dose}</p>
                <p>Type: {entry.typeOfVaccine}</p>
                <p>Special Notes: {entry.specialNotes}</p>
                <p>Location County: {entry.location.county}</p>
                <p>Location institution: {entry.location.institution}</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    Store.entries.splice(index, 1);
                  }}
                >
                  delete
                </Button>
              </CardContent>
            </Card>
          ))}
        </List>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogContent>
            <DialogTitle>Add Entry</DialogTitle>
            <AddEntryView closeModal={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
});

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));
