import React from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import logo from '../../src/images/logo192.png'

const LoginLayout = () => (
    <Grid textAlign='center' style={{height: 'calc(100vh - 10em)'}} verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
            <Header as='h2' color='blue' textAlign='center'>
                <Image src={logo}/> Log-in to your account
            </Header>
            <Form size='large'>
                <Segment raised>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button color='blue' fluid size='large'>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <a href='/'>Sign Up</a>
            </Message>
        </Grid.Column>
    </Grid>
)

export default LoginLayout
