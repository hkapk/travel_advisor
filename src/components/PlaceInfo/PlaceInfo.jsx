import React from 'react';
import { box, Typography, Button, Card, CardContent, CardMedia, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/rating';

import useStyles from './styles';



const PlaceInfo = ({ place }) => {
    const classes = useStyles;

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ heigh: 250 }}
                image={place.photo ? place.photo.images.large.url : 'https://commons.wikimedia.org/wiki/File:Tom%27s_Restaurant,_Manhattan.jpg' }
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5"> {place.name} </Typography>
            </CardContent>
        </Card> 
    );
}

export default PlaceInfo;