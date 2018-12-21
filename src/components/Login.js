import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from 'native-base'

class Login extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel last>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button>
              <Text> Set Credentials </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login
