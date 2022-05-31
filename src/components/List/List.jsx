import React, {useState} from 'react';
import { CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select, Typography } from '@material-ui/core';

import PlaceInfo from '../PlaceInfo/PlaceInfo';

import useStyles from './styles';

const List = ({ places }) => {

    const classes = useStyles();
    const [ type, setType ] = useState('restaurants');
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}> 
            <Typography varient="h4"> Restaurants, Hotels & things to do</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel> Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value ="restaurants"> Restaurants </MenuItem>
                    <MenuItem value ="hotels"> Hotels </MenuItem>
                    <MenuItem value ="activities"> Activities </MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel> Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value ={0}> All </MenuItem>
                    <MenuItem value ={3}> Better than 3 </MenuItem>
                    <MenuItem value ={4}> Better than 4 </MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                <Grid item key={i} xs={12}>
                    <PlaceInfo place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;