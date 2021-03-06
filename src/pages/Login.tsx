import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { Form, Checkbox, Button } from 'semantic-ui-react'
import API from '../adapters/API'


export const Login = ({setUser}:any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const history = useHistory();

  const handleSubmit = (e:any) => {
    e.preventDefault()
    API.login({ email, password })
      .then(resp => {
        setUser(resp.data.email)
        history.push("/")
      })
      .catch(errors => {
        setErrors(errors)
      })
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}