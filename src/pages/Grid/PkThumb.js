import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Loading from '../../components/Loading/Loading';

class PkThumbnail extends Component 
{
  constructor(props)
  {
      super(props);
      this.state =
      {
        name: props.children.name,
        url: props.children.url,
        loading: true,
        error: false,
        icon: "",
      }
      
  }

  componentDidMount()
  {
    const {url} = this.state;
    axios.get(url).then((response) => {
             
            this.setState({
                    icon : response.data.sprites.front_default,
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
    const {name, icon, error, loading} = this.state;
    const url = "/details/" + name;
    return (
    <div>
        <nav>
            <Link to={url}>
            {!loading && error && (
                <p>Error retrieving thumbmail</p>
            )}
            {loading ? (
                    <div><Loading size="50px"></Loading></div>
            ) : 
            (
                <div>
                <div>
                <img src={icon} height="50" width="50"></img>
                </div>
                <div>{name}</div>
                </div>
            )}
            
            </Link>
        </nav>
    </div>
    );
  }
}

export default PkThumbnail;
