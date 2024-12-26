// 컴포넌트는 함수로 정의한다.

import Button, { Button2 } from '@/components/button/Button';

// 일반 함수\
export function Home() {
    // 반환
    return (
        <div className='flex gap-3 justify-center py-5'>
            {/* 단일 태그 */}
            <Button name='확인' />
            <Button name='취소' />
            <Button name='목록' />

            {/* 엄빠 태그 */}
            <Button2>
                <i></i>새로고침
            </Button2>
            <Button2>
                <i></i>새로고침
            </Button2>
        </div>
    );
}

// 화살표 함수
// const는 이름이 겹치면 안됨!!
// const Home = () => {};

export default Home;
