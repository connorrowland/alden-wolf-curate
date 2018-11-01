import React, { Component } from 'react';

class ValuePropsTrio extends Component {
  createItems = () => {
    const trioItems = this.props.items.map((item, i) => {
      return (
        <div key={i} className="flex-trio--item trio-image-text--item">
          <div className="trio-image--container">
            <img src={item.image} alt="Curate Icon" className="icon-text-trio-item--image"/>
          </div>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      )
    })
    return trioItems
  }

  render() {
    return (
      <div className="flex--grid">
        {this.createItems()}
      </div>
    );
  }
}

export default ValuePropsTrio