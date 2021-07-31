import React, { Component } from 'react';
import api from '../api';
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleUserName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleUserEmail = async event => {
        const email = event.target.value

        this.setState({ email })
    }

    handleUserPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleUserSignup = async () => {
        const { name, email, password } = this.state
        const payload = { name, email, password }

        await api.userSignup(payload).then(res => {
            window.alert(`User inserted successfully`, JSON.stringify(res))
            // this.setState({
            //     name: '',
            //     email: '',
            //     password: '',
            // })
        })
    }

    render() {
        const { name, email, password } = this.state
        return (
            <Wrapper>
                <Title>Sign up</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleUserName}
                />

                <Label>Email: </Label>
                <InputText
                    type="email"
                    value={email}
                    onChange={this.handleUserEmail}
                />

                <Label>Password: </Label>
                <InputText
                    type="text"
                    value={password}
                    onChange={this.handleUserPassword}
                />

                <Button onClick={this.handleUserSignup}>SignUp</Button>
                {/* <CancelButton href={'/movies/list'}>Cancel</CancelButton> */}
            </Wrapper>
        )
    }
}

export default SignUp