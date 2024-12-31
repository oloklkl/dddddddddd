import React from 'react';

const Button = ({ name, bg }) => {
    // props = {name: '확인', bg: 'pink'}
    // 구조분해할당
    // const {name, bg} = props

    return <button className={`bg-${bg}`}>{name}</button>;
};

export const Button2 = ({ children }) => {
    // props = {children: '새로고침'}
    return <button className='bg-pink-200 text-white py-3 px-5'>{children}</button>;
};

export default Button;
