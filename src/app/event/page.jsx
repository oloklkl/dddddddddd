'use client';

import React from 'react';

const EventPage = () => {
    const handleEvent = () => {
        console.log('클릭');
    };

    return (
        <div>
            <h2>이벤트 리스트</h2>
            <button onClick={handleEvent}>클릭</button>
        </div>
    );
};

export default EventPage;
