import React, { Component } from 'react';
import PropTypes from 'prop-types';
import postsCollection from '../../../api/Posts/Posts';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Styles from './styles';
import Post from '../post';
import { Card } from 'semantic-ui-react'

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    editable: PropTypes.bool,
    currentUser: PropTypes.object,
  };

  static defaultProps = {
    editable: false,
  }

  render() {
    const {
      posts,
      editable,
      currentUser,
    } = this.props;

    let title;
    if (editable) {
      title = 'Owned Posts'
    }
    return (
      <Styles>
        <h2 className="ui header">{title}</h2>
        <Card.Group itemsPerRow={7}>
          {
            posts.map(post => (
                <Post
                  post={post}
                  editable={editable}
                  currentUser={currentUser}
                />
            ))
          }
        </Card.Group>
      </Styles>
    );
  }
}

export default Posts;
