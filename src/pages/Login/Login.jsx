import "./Login.css"

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { login } from '../../services/auth'

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  Typography
} from '@mui/material'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function onLogin() {
    try {
      const token = await login({email, password})
      localStorage.setItem('token', token)
      navigate("/forums")
    } catch (error) {
     //Handle the error
    }
  }

  return (
    <div id="login-container">
      <Card sx={{ maxWidth: '500px' }}>
        <CardHeader id="login" title="Login" />
        <CardContent>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="Password"
            variant="outlined"
            fullWidth={true}
          />
        </CardContent>
        <Divider />
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={() => onLogin()} color="success">
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Login