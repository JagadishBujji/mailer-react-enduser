import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import './calendar.module.css';
import styles from './calendar.module.css';

function MyCalender() {
    const [value, onChange] = useState(new Date());
    // const calenderview = {
    //     border: 'none',
    //     margin: 'auto'
    // };

    return (
        <div>
            <Calendar className={styles.calenderview} onChange={onChange} value={value} />
        </div>
    );
}

export default MyCalender;
