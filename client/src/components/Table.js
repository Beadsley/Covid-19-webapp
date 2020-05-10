import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TableSortLabel,
  makeStyles,
} from '@material-ui/core';
import { statistics } from '../actions/apiActions';
import config from '../config';
import ProgressBar from './Progressbar';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    borderCollapse: 'separate',
    tableLayout: 'fixed',
  },
  title: {
    margin: theme.spacing(2),
    fontWeight: 550,
  },
  header: {
    fontWeight: 600,
  },
  progressBar: {
    position: 'fixed',
  },
}));

const compare = (key, asc) => (asc ? (a, b) => (a[key] < b[key] ? -1 : 1) : (a, b) => (a[key] > b[key] ? -1 : 1));

export default function CovidTable() {
  const column1 = config.ENUMS.UI.TABLE_COLUMNS[0].id;
  const [sort, setSort] = useState({ active: column1, comparator: compare(column1, true), direction: 'ascending' });
  const [tableData, setTableData] = useState([]);
  const { areLoading: statisticsLoading, data } = useSelector((state) => state.statistics);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statistics());
  }, [dispatch]);

  useEffect(() => {
    if (statisticsLoading === false) {
      setTableData(data);
    }
  }, [statisticsLoading]);

  return (
    <>
      {statisticsLoading && <ProgressBar className={classes.progressBar} />}
        <Typography className={classes.title} variant='h6' id='tableTitle' component='div' color='primary'>
          {config.ENUMS.UI.TABLE_TITLE}
        </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              {config.ENUMS.UI.TABLE_COLUMNS.map((col, index) => (
                <TableCell className={classes.header} align={index === 0 ? 'left' : 'right'}>
                  <TableSortLabel
                    active={sort.active === col.id}
                    direction={sort.direction === 'ascending' ? 'asc' : 'desc'}
                    onClick={() => {
                      sort.direction === 'ascending' && sort.active === col.id
                        ? setSort({ active: col.id, comparator: compare(col.id, false), direction: 'descending' })
                        : setSort({ active: col.id, comparator: compare(col.id, true), direction: 'ascending' });
                    }}
                  >
                    {col.header}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {!statisticsLoading && (
            <TableBody>
              {tableData.sort(sort.comparator).map((row) => (
                <TableRow key={row.name}>
                  {config.ENUMS.UI.TABLE_COLUMNS.map((col, index) =>
                    index === 0 ? (
                      <TableCell align='left'>{row[col.id]}</TableCell>
                    ) : (
                      <TableCell align='right'>{row[col.id] === null ? config.ENUMS.UI.NA : row[col.id]}</TableCell>
                    )
                  )}
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </>
  );
}
