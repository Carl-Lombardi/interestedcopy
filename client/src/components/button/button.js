import React from "react";
import Button from '@material-ui/core/Button';
//used for submiting users on profile page
export default function ContainedButtons(props) {

  return (
    <div>
      <Button variant="contained" color="primary" {...props} style={{ float: "right"}} id="button">
      {props.children}
      </Button>
    </div>
  );
}
