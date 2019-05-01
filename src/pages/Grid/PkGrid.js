import React, { Component } from 'react';
import axios from 'axios';
import styles from './Grid.module.css';
import PkThumbnail from './PkThumb';

import Loading from '../../components/Loading/Loading';
  
 
class PkGrid extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            loading: true,
            pkList: [],
            error: null,
            classes: props,
            spacing: '16',
            direction: 'row',
            justify: 'center',
            alignItems: 'center',
        };
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {
             
            this.setState({
                    pkList : response.data.results,
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
        const { loading, pkList, error, classes } = this.state;
        return (
            <div className={classes.root}>
            
                {!loading && error && (
                    <p>There was an error retrieving pokemon data</p>
                )}
                {loading ? (
                    <div><Loading size="200px"></Loading></div>
                ) : (
                    <div className={styles.mygrid}>
                    <React.Fragment>
                        { 
                          
                            pkList.map((pkmon) => {
                                return (
                                    <PkThumbnail>{pkmon}</PkThumbnail>                                    
                                );
                          
                            })
                        }
                    </React.Fragment>
                    </div>
                )}
            </div>
        );
    }
}



export default PkGrid;