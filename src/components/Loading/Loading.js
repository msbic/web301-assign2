import React from 'react';
import styles from './Loading.module.css';

import spinner from './simple-loading.gif';

const Loading = (props) => {
    const {size} = props;
    return (
        <div className={styles.loading}>
            <img src={spinner} width={size} alt="Loading..." />
        </div>
    );
};

export default Loading;
