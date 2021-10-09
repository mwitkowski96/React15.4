import styles from './App.scss';
import List from '../List/List.js';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello World!</h2>
        <List title={['Things to do ', <sup key='1'>soon!</sup>]}
              image={['https://images.pexels.com/photos/8536200/pexels-photo-8536200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260']}>
        
        </List>
      </main>
    )
  }
}

export default App;