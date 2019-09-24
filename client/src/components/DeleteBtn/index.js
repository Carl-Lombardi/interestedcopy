import React from "react";
import Button from '@material-ui/core/Button';
// // The ...props means, spread all of the passed props onto this element
// // That way we don't have to define them all individually
export default function DeleteBtn(props) {

  return (
    <div>
      <Button variant="contained" color="inherit" {...props} style={{ float: "left", marginBottom: 100 }} 
      className="delete-btn">
      {props.children}
      </Button>
    </div>
  );
}
