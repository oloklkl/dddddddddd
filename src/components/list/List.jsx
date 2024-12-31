import React from 'react';

const List = ({ title, content, date }) => {
    // props = {title: '뉴스 제목1', content: '뉴스 내용1', dete: '2024-09-01'}
    return (
        <div className='py-3'>
            <strong>{title}</strong>
            <p>{content}</p>
            <span className='text-xs'>{date}</span>
        </div>
    );
};

export default List;
