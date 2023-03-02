import { React } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TableView from "./common/TableView";
import { tableFields } from "../constants/constants";
import { DELETE_CONTECT_REQUEST_SUCCESS } from "../redux/actions";
const ContectList = (props) => {
  const { contectList, deleteUserData } = props;

  return (
    <>
      <TableView
        tableheader={tableFields}
        tablebody={contectList}
        deleteRowData={(data) => deleteUserData(data)}
      />
    </>
  );
};

ContectList.propTypes = {
  contectList: PropTypes.array,
  deleteUserData: PropTypes.func,
};

// Get state to props
const mapStateToProps = (state) => ({
  contectList: state.contectReducer.contectList,
});

const mapDispatchToProps = (dispatch) => ({
  deleteUserData: (data) =>
    dispatch({ type: DELETE_CONTECT_REQUEST_SUCCESS, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContectList);
