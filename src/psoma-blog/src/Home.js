import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const [name, setName] = useState('mario');
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter( b => b.id !== id);
    setBlogs( newBlogs );
  }

  // useEffect() runs every time we rerender
  useEffect( () => {
    console.log('use effect ran');
    console.log({name});
  }, [name]); // dependency array, only run useEffect on first render (refresh) and for changes in state of dep objs in array


  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{name}</p>
    </div>
  );
}

export default Home;