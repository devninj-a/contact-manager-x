import React, { Component } from 'react';
import TextInputGroup from '../layouts/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    const { name, email, phone } = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    });
  }

  componentDidMount() {
    this.props.getContact(this.props.match.params.id);
  }
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

    const { id } = this.props.match.params;
    const updateContact = {
      id,
      name,
      email,
      phone
    };

    // update contact
    this.props.updateContact(updateContact);

    // reset form
    this.setState({ name: '', email: '', phone: '', errors: {} });

    // redirect to home page
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
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
              value="Save"
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

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ contact: state.contacts.contact });

export default connect(
  mapStateToProps,
  { getContact, updateContact }
)(EditContact);
