import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PropTypes from "prop-types";
import "./TableView.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
const TableView = (props) => {
  const { tableheader, tablebody, deleteRowData } = props;
  return (
    <TableContainer className="table-container">
      <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table"
        className="table-ctn"
      >
        <TableHead className="table-head">
          <TableRow className="table-head-row">
            {tableheader.map((item, ind) => {
              return (
                <TableCell
                  className="table-head-cell"
                  key={ind}
                  align={item.align}
                >
                  {item.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {!tablebody?.length ? (
            <TableRow className="table-body-row">
              <TableCell
                colSpan={tableheader?.length}
                className="table-body-cell"
              >
                No records
              </TableCell>
            </TableRow>
          ) : (
            tablebody?.map((row, index) => {
              return (
                <TableRow key={index} className="table-body-row">
                  <TableCell>
                    <div className="icon-cell">
                      <PhoneEnabledIcon />
                      {row.phoneNumber}
                    </div>
                  </TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.typeContect}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>
                    <div className="icon-cell">
                      <EditIcon className="edit" />
                      <DeleteIcon
                        className="delete"
                        onClick={() => deleteRowData(row.phoneNumber)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableView.propTypes = {
  tableheader: PropTypes.array,
  tablebody: PropTypes.array,
  deleteRowData: PropTypes.func,
};

export default TableView;
