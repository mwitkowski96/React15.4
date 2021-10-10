import React from 'react';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import Creator from '../Creator/Creator.js';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title} <span className={styles.icon}><Icon name={icon} /></span></h3>

        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        
        <Creator text={settings.cardCreatorText} action={addCard} haveCards={this.haveCards} />
      </section>
    );
  }
}

export default Column;
