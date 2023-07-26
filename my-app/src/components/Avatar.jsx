import React from 'react';
import './Avatar.css';

class Avatar extends React.Component {
  render() {
    return (
      <div className='avatar'>
        <h2 className='header'>{this.props.name}</h2>
        <img
          className='image'
          src={this.props.imageUrl}
          alt={this.props.name}
        />
      </div>
    );
  }
}

// Set default props untuk menangani kasus dimana properti nama kosong
Avatar.defaultProps = {
  name: 'Nama tidak tersedia',
};

export default Avatar;
