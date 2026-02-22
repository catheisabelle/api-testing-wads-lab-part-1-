import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from '../components/LoginForm'

describe('LoginForm Component', () => {
  test('renders email and password inputs', () => {
    render(<LoginForm />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  test('allows user to type in email', () => {
    render(<LoginForm />)

    const emailInput = screen.getByPlaceholderText('Email')
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } })

    expect(emailInput.value).toBe('test@email.com')
  })

  test('renders login button', () => {
    render(<LoginForm />)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})