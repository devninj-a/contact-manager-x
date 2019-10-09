import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <React.Fragment>
        <h4 className="text-dark mb-4">Contact List</h4>
        {this.props.contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ contacts: state.contacts.contacts });

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
