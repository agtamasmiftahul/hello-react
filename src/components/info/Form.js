import React, { Component } from 'react'
import { Grid, Button, Form, Segment, Label } from 'semantic-ui-react'

export default class Forms extends Component {
  render() {
    return (
      <div>
        <Grid centered columns={1} padded>
          <Grid.Column>
            <Label size='massive' color='red' ribbon>
              STAY CLOSE TO US
            </Label>
          </Grid.Column>
        </Grid>
        <Grid centered columns={2} padded>
          <Grid.Column>
            <Segment inverted>
              <Form inverted>
                <Form.Group>
                  <Form.Input fluid label='Name' placeholder='Write your name' width={16}/>
                </Form.Group>
                <Form.Group>
                  <Form.Input fluid label='Email' placeholder='Write your email' width={16}/>
                </Form.Group>
                <Form.Group>
                  <Form.TextArea fluid label='Message' placeholder='Write your message' width={16}/>
                </Form.Group>
                <Form.Checkbox label='I agree to the Terms and Conditions'/>
                <Button type='submit' positive fluid>Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
