import { React, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ADD_NEW_CONTECT_REQUEST } from "../redux/actions";
import {
  Grid,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import InputComponent from "./common/InputComponent";
import Snackbar from "./common/Snackbar";
import "./AddUser.scss";
const AddUser = (props) => {
  const { isLoading, addUserData, contectList } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [typeContect, setTypeContect] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [gender, setGender] = useState("female");
  const [errorBoxOpen, setErrorBoxOpen] = useState(false);
  const [errorBoxMsg, setErrorBoxMsg] = useState({
    msg: "",
    type: "",
  });
  const [error, setError] = useState({});

  const handleSumbmit = (e) => {
    e.preventDefault();
    if (!phoneNumber?.trim()) {
      setError((prev) => {
        return { ...prev, phoneNumber: "Please enter Contect" };
      });
      return;
    }
    if (!firstName?.trim()) {
      setError((prev) => {
        return { ...prev, firstName: "Please enter firstname" };
      });
      return;
    }
    if (!lastName?.trim()) {
      setError((prev) => {
        return { ...prev, lastName: "Please enter lastname" };
      });
      return;
    }
    let playerData = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      typeContect: typeContect,
      phoneNumber: phoneNumber,
    };

    let playerInclude = contectList.filter(
      (item) => item.firstName === firstName && item.lastName === lastName
    );
    if (playerInclude.length) {
      setError((prev) => {
        return {
          ...prev,
          firstName: "User already exists.",
          lastName: "User already exists.",
        };
      });
      setErrorBoxOpen(true);
      setErrorBoxMsg({
        msg: "User already exists",
        type: "error",
      });
    } else {
      addUserData(playerData);
      setError({});
      setErrorBoxOpen(true);
      setErrorBoxMsg({
        msg: "Add Successfully",
        type: "success",
      });

      setTypeContect("");
      setFirstName("");
      setLastName("");
      setGender("");
      setPhoneNumber("");
    }
  };
  return (
    <>
      <form onSubmit={(e) => handleSumbmit(e)}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <InputComponent
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              value={phoneNumber}
              label="Phone Number"
              autoFocus={true}
              setValue={(value) => {
                !isNaN(value) && value.length <=10 && setPhoneNumber(value);
                setError((prev) => {
                  return { ...prev, phoneNumber: null };
                });
              }}
              error={error?.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputComponent
              value={firstName}
              label="First Name"
              autoFocus={true}
              setValue={(value) => {
                setFirstName(value);
                setError((prev) => {
                  return { ...prev, firstName: null };
                });
              }}
              error={error?.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputComponent
              value={lastName}
              label="Last Name"
              setValue={(value) => {
                setLastName(value);
                setError((prev) => {
                  return { ...prev, lastName: null };
                });
              }}
              error={error?.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Contect Type
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeContect}
                label="Contect Type"
                onChange={(e) => setTypeContect(e.target.value)}
              >
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="personal">Personal</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Snackbar
            open={errorBoxOpen}
            handleClose={() => {
              setErrorBoxOpen(false);
              setErrorBoxMsg("");
            }}
            message={errorBoxMsg}
          />
          <Grid item xs={12} sm={12} className="btn-ctn">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              className="btn"
            >
              Save
            </Button>
          </Grid>{" "}
        </Grid>
      </form>
    </>
  );
};

AddUser.propTypes = {
  isLoading: PropTypes.bool,
  addUserData: PropTypes.func,
};

// Get state to props
const mapStateToProps = (state) => ({
  isLoading: state.contectReducer.isLoading,
  contectList: state.contectReducer.contectList,
});

const mapDispatchToProps = (dispatch) => ({
  addUserData: (data) =>
    dispatch({ type: ADD_NEW_CONTECT_REQUEST, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
