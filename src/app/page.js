// 컴포넌트는 함수로 정의한다.

import Button, { Button2 } from '@/components/button/Button';
import Card from '@/components/card/Card';
import Container from '@/components/layout/Container';
import List from '@/components/list/List';
import ProductList from '@/components/list/Product';
import { mockupNews } from '@/data/news';

// 일반 함수
export function Home() {
    const name = false ? '참' : '거짓';
    const user = {
        name: '홍길동',
        age: 20,
        bg: 'purple-300',
    };

    const array = [1, 2, 3];

    // 반환
    return (
        <Container>
            <ProductList />
            <div className='flex flex-col gap-3 justify-center py-5 max-w-sm mx-auto'>
                <Card>
                    <h2>뉴스</h2>
                    <div className='divide-y'>
                        {mockupNews.map((item, index) => (
                            <List key={index} title={item.title} content={item.content} date={item.date} />
                        ))}
                    </div>
                </Card>
                <Card>
                    <h2>뉴스2</h2>
                    <p>뉴스 내용2</p>
                </Card>

                <div>{array[2]}</div>
                <div className={`bg-${user.bg}`}>
                    {user.name}은 {user.age}살 입니다.
                </div>
                <Button>{name}</Button>

                {/* 단일 태그 */}
                {/* {name: '확인', bg: 'pink-50'} */}
                <Button name='확인' bg='pink-50' />
                <Button name='취소' bg='red-300' />
                <Button name='목록' bg='yellow-50' />

                {/* 엄빠 태그 */}
                <Button2 bg='red-500'>
                    <i></i>새로고침
                </Button2>
                <Button2 bg='blue-500'>
                    <i></i>새로고침
                </Button2>
                <Button2 bg='red-500'>
                    <i></i>새로고침
                </Button2>
                <Button2 bg='blue-500'>
                    <i></i>새로고침
                </Button2>
            </div>
        </Container>
    );
}

// 화살표 함수
// const는 이름이 겹치면 안됨!!
// const Home = () => {};

export default Home;
