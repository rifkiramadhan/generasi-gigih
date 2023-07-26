import React from 'react';
import Avatar from './Avatar';

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.avatars.map((avatar, index) => (
          <Avatar key={index} name={avatar.name} imageUrl={avatar.imageUrl} />
        ))}
      </div>
    );
  }
}

export default ParentComponent;
