import React, { Component } from 'react';
import './App.css';
import Customer from './Components/Customer'
const customers = [
  {
    'id': 1,
    'image': '/images/호랑이.jpg',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': '/images/호랑이2.jpg',
    'name': '나동빈',
    'birthday': '960508',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': '/images/호랑이3.jpg',
    'name': '이순신',
    'birthday': '961127',
    'gender': '남자',
    'job': '디자이너'
  }
]



class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
          } )
        }

      </div>
    );
  }
}

export default App;
