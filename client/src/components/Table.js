import React, { useEffect, useState } from 'react';
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
import config from '../config';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    borderCollapse: 'separate',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(2),
  },
  subHeader: {
    fontSize: '1rem',
    border: 'none',
    backgroundColor: 'transparent',
    outline: '0',
  },
}));

const compare = (key, asc) => (asc ? (a, b) => (a[key] < b[key] ? -1 : 1) : (a, b) => (a[key] > b[key] ? -1 : 1));

export default function FlaggedPsychologistTable() {
  const [sort, setSort] = useState({ active: 'name', comparator: compare('name', true), direction: 'ascending' });
  const classes = useStyles();
  const data = config.mockdata;

  return (
    <>
      <div className={classes.header}>
        <Typography variant='h6' id='tableTitle' component='div' color='primary'>
          {' Covid-19'}
        </Typography>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sort.active === 'name'}
                  direction={sort.direction === 'ascending' ? 'asc' : 'desc'}
                  onClick={() => {
                    sort.direction === 'ascending' && sort.active === 'name'
                      ? setSort({ active: 'name', comparator: compare('name', false), direction: 'descending' })
                      : setSort({ active: 'name', comparator: compare('name', true), direction: 'ascending' });
                  }}
                >
                  {'Name'}
                </TableSortLabel>
              </TableCell>
              <TableCell align='right'>
                <TableSortLabel
                  active={sort.active === 'hospitalized'}
                  direction={sort.direction === 'ascending' ? 'asc' : 'desc'}
                  onClick={() => {
                    sort.direction === 'ascending' && sort.active === 'recovered'
                      ? setSort({
                          active: 'recovered',
                          comparator: compare('recovered', false),
                          direction: 'descending',
                        })
                      : setSort({
                          active: 'recovered',
                          comparator: compare('recovered', true),
                          direction: 'ascending',
                        });
                  }}
                >
                  {'Total Recovered'}
                </TableSortLabel>
              </TableCell>
              <TableCell align='right'>
                <TableSortLabel
                  active={sort.active === 'hospitalized'}
                  direction={sort.direction === 'ascending' ? 'asc' : 'desc'}
                  onClick={() => {
                    sort.direction === 'ascending' && sort.active === 'hospitalized'
                      ? setSort({
                          active: 'hospitalized',
                          comparator: compare('hospitalizedCurrently', false),
                          direction: 'descending',
                        })
                      : setSort({
                          active: 'hospitalized',
                          comparator: compare('hospitalizedCurrently', true),
                          direction: 'ascending',
                        });
                  }}
                >
                  {'Currently Hospitalized'}
                </TableSortLabel>
              </TableCell>
              <TableCell align='right'>
                <TableSortLabel
                  active={sort.active === 'deaths'}
                  direction={sort.direction === 'ascending' ? 'asc' : 'desc'}
                  onClick={() => {
                    sort.direction === 'ascending' && sort.active === 'deaths'
                      ? setSort({
                          active: 'deaths',
                          comparator: compare('deaths', false),
                          direction: 'descending',
                        })
                      : setSort({
                          active: 'deaths',
                          comparator: compare('deaths', true),
                          direction: 'ascending',
                        });
                  }}
                >
                  {'Deaths'}
                </TableSortLabel>
              </TableCell>
              <TableCell align='right'>
                <TableSortLabel
                  active={sort.active === 'last3daysDeaths'}
                  direction={sort.direction === 'ascending' ? 'asc' : 'desc'}
                  onClick={() => {
                    sort.direction === 'ascending' && sort.active === 'last3daysDeaths'
                      ? setSort({
                          active: 'last3daysDeaths',
                          comparator: compare('last3daysDeaths', false),
                          direction: 'descending',
                        })
                      : setSort({
                          active: 'last3daysDeaths',
                          comparator: compare('last3daysDeaths', true),
                          direction: 'ascending',
                        });
                  }}
                >
                  {' Deaths (past 3 days)'}
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.sort(sort.comparator).map((row) => (
              <TableRow key={row.name}>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='right'>{row.recovered === null ? 'N/A' : row.recovered}</TableCell>
                <TableCell align='right'>{row.hospitalizedCurrently === null ? 'N/A' : row.hospitalizedCurrently}</TableCell>
                <TableCell align='right'>{row.deaths === null ? 'N/A' : row.deaths}</TableCell>
                <TableCell align='right'>{row.last3daysDeaths === null ? 'N/A' : row.last3daysDeaths}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
