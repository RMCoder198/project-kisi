import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class List extends React.Component {
  render() {
    return (
      <div className="container">
        <Paper>
          <Table>
            <TableBody>
              {this.props.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    <Typography variant="headline" gutterBottom>
                      Lock {index + 1}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        this.props.dispatchAction(
                          "unlock",
                          item,
                          index,
                          this.props.stateProps.status.length
                        )
                      }
                    >
                      Unlock
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Typography variant="headline" gutterBottom>
                      {this.props.stateProps.status[index]}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

    
      </div>
    );
  }
}
export default List;
