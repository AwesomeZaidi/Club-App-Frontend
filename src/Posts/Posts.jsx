import React, { Component } from "react";
import { connect } from "react-redux";
import {getData} from "../js/actions/index"

export class Post extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getData(); // calling the new action creator
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
      {this.props.articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      ))}
    </ul>
    );
  }

}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

export default connect(mapStateToProps, { getData })(Post);
