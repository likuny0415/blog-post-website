import { Alert } from "@material-ui/core";
import React from "react";

const ListErrors = ({ errors }) => (
  <ul className="error-messages">
    {Object.keys(errors).map((key) => {
      return (
        <Alert severity="error" key={key}>
          {key} {errors[key]}
        </Alert>
      );
    })}
  </ul>
);

export default ListErrors;

