import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}>Nowy komponent</h2>
        <Hero titleText={this.props.title}
              mainImage={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title={['Pierwszy tytuł']} />
          <Column title={['Drugi tytuł']} />
          <Column title={['Trzeci tytuł']} />
        </div>
      </section>
    )
  }
}

export default List;
