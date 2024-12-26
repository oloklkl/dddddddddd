import React from 'react';

const Button = (props) => {
    // props = {name: '확인'}
    return <button className='bg-pink-200 text-white py-3 px-5'>{props.name}</button>;
};

export const Button2 = (props) => {
    // props = {children: '새로고침'}
    return <button className='bg-pink-200 text-white py-3 px-5'>{props.children}</button>;
};

export default Button;
