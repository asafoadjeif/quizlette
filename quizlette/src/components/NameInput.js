import React from 'react'
import { Button, MenuItem, TextField } from "@material-ui/core";
import axios from 'axios'
import { useState } from "react";

const NameInput = (setUser) => {

    const updateInput = (e) => {
        setUser(e.target.value)
    }

  return (
    <TextField
        style={{ marginBottom: 25 }}
        label="Enter Your Name"
        variant="outlined"
        onChange={updateInput}
    />
  )
}

export default NameInput