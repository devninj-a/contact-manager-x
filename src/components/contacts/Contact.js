import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

class Contact extends Component {
  state = {
    showDetails: false
  };

  handleDeleteContact = id => {
    this.props.deleteContact(id);
  };

  render() {
    const { contact } = this.props;
    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-sm-2">
            <img
              src={`https://ui-avatars.com/api/?length=1&name=${contact.name}&background=2196f3&color=fff&rounded=true&font-size=0.33`}
              alt="avatar"
              className="mt-4 ml-3"
            />
          </div>
          <div className="col-sm-10">
            <div className="card-body">
              <h5 className="card-title mb-3">
                {contact.name}
                <span className="text-muted ml-2" style={{ fontSize: '0.8em' }}>
                  {contact.email}
                </span>
              </h5>
              <h6
                className="card-subtitle text-muted mb-3"
                style={{ fontSize: '0.8em' }}
              >
                {contact.phone}
              </h6>
              <Link to={`contact/edit/${contact.id}`} className="card-link">
                Edit
              </Link>
              <a
                href="#"
                className="card-link"
                onClick={this.handleDeleteContact.bind(this, contact.id)}
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteContact }
)(Contact);
