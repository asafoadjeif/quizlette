import React from 'react'
import { Button, MenuItem, TextField } from "@material-ui/core";
import axios from 'axios'
import { useState } from "react";

const NameInput = () => {

  return (
    <TextField
        style={{ marginBottom: 25 }}
        label="Enter Your Name"
        variant="outlined"
    />
  )
}

export default NameInput