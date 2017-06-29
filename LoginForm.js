import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Header } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@email.com"
            label="Email"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

        <CardSection />

        <CardSection>
            <Button>
              Log In
            </Button>
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
