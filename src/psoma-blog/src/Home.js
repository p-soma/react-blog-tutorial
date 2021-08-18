import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);
  // let name = 'Mario';

  const handleClick = (e) => {
    setName('luigi');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <p>{name} is {age} years old</p>
    </div>
  );
}

export default Home;