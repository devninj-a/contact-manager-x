import React, { Component } from 'react';
import TextInputGroup from '../layouts/TextInputGroup';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';
import PropTypes from 'prop-types';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name field is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email field is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone field is required' } });
      return;
    }

    // create new contact
    const contact = { name, email, phone };

    // submit contact
    this.props.addContact(contact);

    // reset form
    this.setState({ name: '', email: '', phone: '', errors: {} });

    // redirect to home page
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <TextInputGroup
              label="Name"
              value={this.state.name}
              name="name"
              type="text"
              onChange={this.handleChange}
              error={this.state.errors.name}
            />
            <TextInputGroup
              label="Email"
              value={this.state.email}
              type="email"
              name="email"
              onChange={this.handleChange}
              error={this.state.errors.email}
            />
            <TextInputGroup
              label="Phone"
              value={this.state.phone}
              name="phone"
              type="text"
              onChange={this.handleChange}
              error={this.state.errors.phone}
            />
            <input
              type="submit"
              value="Add"
              className="btn btn-primary btn-block"
              disabled={
                !this.state.name || !this.state.email || !this.state.phone
              }
            />
          </form>
        </div>
      </div>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default connect(
  null,
  { addContact }
)(AddContact);
