import { useState } from 'react';
import BlogList from './BlogList';



const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
  
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs"/>
    </div>
  );
}

// const HomeStateExample = () => {
//   const [name, setName] = useState('mario');
//   const [age, setAge] = useState(25);
//   // let name = 'Mario';

//   const handleClick = (e) => {
//     setName('luigi');
//     setAge(30);
//   }

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <button onClick={handleClick}>Click me</button>
//       <p>{name} is {age} years old</p>
//     </div>
//   );
// }

export default Home;