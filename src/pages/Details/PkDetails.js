import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {  NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

import Loading from '../../components/Loading/Loading';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class PkDetail extends Component 
{
  constructor(props)
  {
      super(props);
      const { classes } = props;
      const link = "https://pokeapi.co/api/v2/pokemon/" + props.match.params.id + "/"
      this.state =
      {
        url: link,
        loading: true,
        error: false,
        icon: "",
        classes: classes,
        stats = [],
        name = "",
      }      
  }

  componentDidMount()
  {
        const {url} = this.state;
        axios.get(url).then((response) => {
            this.setState({
                    icon : response.data.sprites.front_default,
                    stats: response.data.stats,
                    name: response.data.name,
                });

            const loadingTimer = setTimeout(() => {
                clearTimeout(loadingTimer);
                this.setState({
                    loading: false,                    
                });
            }, 1500);
            
        }).catch(() => {
            const loadingTimer = setTimeout(() => {
                clearTimeout(loadingTimer);
                this.setState({
                    loading: false,
                    error: true,
                });
            }, 1500);
        });
  }

  render()
  {
    const { classes, icon, stats, name } = this.state;  
    return (
        <div>
            <h6>{url}</h6>
            <div>
                    <NavLink to="/">
                        <Button variant="contained" color="primary" className={classes.button}>
                        Go Back
                        </Button>
                    </NavLink>                
            </div>
        </div>
    )
  }
}


export default withStyles(styles)(PkDetail);