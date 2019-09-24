import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setGender(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="interested">Gender</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={gender}
          onChange={handleChange}
          inputProps={{
            name: 'Gender',
            id: 'interested',
          }}
        >
          
         <MenuItem value=""><em>None</em></MenuItem>
         <MenuItem value="male">Male</MenuItem>
         <MenuItem value="female">Female</MenuItem>
          {/* <MenuItem value="Agender">Agender</MenuItem>
          <MenuItem value="Androgyne">Androgyne</MenuItem>
          <MenuItem value="Androgynous">Androgynousr</MenuItem>
          <MenuItem value="Bigender">Bigender</MenuItem>
          <MenuItem value="Cis">Cis</MenuItem>
          <MenuItem value="Cisgender">Cisgender</MenuItem>
          <MenuItem value="Cis-Female">Cis Female</MenuItem>
         <MenuItem value="Cis-Male">Cis Male</MenuItem>
         <MenuItem value="Cis-Man">Cis Man</MenuItem>
         <MenuItem value="Cis-Woman"> Cis Woman</MenuItem >
          <MenuItem value="Cisgender-Female">Cisgender Female</MenuItem>
          <MenuItem value="Cisgender-Male">Cisgender Male</MenuItem>
          <MenuItem value="Cisgender-Man">Cisgender Man</MenuItem>
          <MenuItem value="Cisgender-Woman">Cisgender Woman</MenuItem>
          <MenuItem value="Female-to-Male">Female to Male</MenuItem>
          <MenuItem value="FTM">FTM</MenuItem>
          <MenuItem value="Gender-Fluid">Gender Fluid</MenuItem>
          <MenuItem value="Gender-Nonconforming">Gender Nonconforming</MenuItem>
          <MenuItem value="Gender-Questioning">Gender Questioning</MenuItem>
          < MenuItem value="Gender-Variant">Gender Variant</MenuItem>
          <MenuItem value="Genderqueer">Genderqueer</MenuItem>
          <MenuItem value="Intersex">Intersex</MenuItem>
          <MenuItem value="Male-to-Female">Male to Female</MenuItem>
          <MenuItem value="MTF">MTF</MenuItem>
          <MenuItem value="Neither">Neither</MenuItem>
          <MenuItem value="Neutrois">Neutrois</MenuItem>
          <MenuItem value="Non-binary">Non-binary</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
          <MenuItem value="Pangender">Pangender</MenuItem>
          <MenuItem value="Trans">Trans</MenuItem>
          <MenuItem value="Trans1">Trans*</MenuItem>
          <MenuItem value="Trans-Female">Trans Female</MenuItem>
          <MenuItem value="Trans1-Female">Trans* Female</MenuItem>
          <MenuItem value="Trans-Male">Trans Male</MenuItem>
          <MenuItem value="Trans1-Male">Trans* Male</MenuItem>
          <MenuItem value="Trans-Man">Trans Man</MenuItem>
          <MenuItem value="Trans1-Man">Trans* Man</MenuItem>
          <MenuItem value="Trans-Person">Trans Person</MenuItem>
          <MenuItem value="Trans1-Person">Trans* Person</MenuItem>
          <MenuItem value="Transfeminine">Transfeminine</MenuItem>
          <MenuItem value="Trans-Woman">Trans Woman</MenuItem>
          <MenuItem value="Trans1-Woman">Trans* Woman</MenuItem>
          <MenuItem value="Transgender">Transgender</MenuItem>
          <MenuItem value="Transgender-Female">Transgender Female</MenuItem>
          <MenuItem value="Transgender-Male">Transgender Male</MenuItem>
          <MenuItem value="Transgender-Man">Transgender Man</MenuItem>
          <MenuItem value="Transgender-Person">Transgender Person</MenuItem>
          <MenuItem value="Transgender-Woman">Transgender Woman</MenuItem>
          <MenuItem value="Transmasculine">Transmasculine</MenuItem>
          <MenuItem value="Transsexual">Transsexual</MenuItem>
          <MenuItem value="Transsexual-Female">Transsexual Female</MenuItem>
          <MenuItem value="Transsexual-Male">Transsexual Male</MenuItem>
          <MenuItem value="Transsexual-Man">Transsexual Man</MenuItem>
          <MenuItem value="Transsexual-Person">Transsexual Person</MenuItem>
          <MenuItem value="Transsexual-Woman">Transsexual Woman</MenuItem>
          <MenuItem value="Two-Spirit">Two-Spirit</MenuItem> */}
        </Select >
      </FormControl >
    </form >
  );
}













































