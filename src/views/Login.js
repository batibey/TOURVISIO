// ** React Imports
//import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// ** Custom Hooks
//import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'

// ** Third Party Components
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee, X, AlertCircle } from 'react-feather'

// ** Actions
import { handleLogin } from '@store/authentication'

// ** Context
//import { AbilityContext } from '@src/utility/context/Can'

// ** Custom Components
import Avatar from '@components/avatar'
import InputPasswordToggle from '@components/input-password-toggle'

// ** Utils
import { getHomeRouteForLoggedInUser } from '@utils'

// ** Reactstrap Imports
import { Row, Col, Form, Input, Label, Alert, Button, CardText, CardTitle, UncontrolledTooltip } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

const ToastContent = ({ t, name, role }) => {
  return (
    <div className='d-flex'>
      <div className='me-1'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
      </div>
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between'>
          <h6>{name}</h6>
          <X size={12} className='cursor-pointer' onClick={() => toast.dismiss(t.id)} />
        </div>
        <span>You have successfully logged in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
      </div>
    </div>
  )
}

const ErrorContent = () => {
  return (
    <div className='d-flex'>
      <div className='me-1'>
        <Avatar size='sm' color='danger' icon={<AlertCircle size={12} />} />
      </div>
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between'>
          <h6>Invalid User Info</h6>
        </div>
      </div>
    </div>
  )
}

const Login = () => {
  // ** Hooks
  //const { skin } = useSkin()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //const ability = useContext(AbilityContext)
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()
  // const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
  //   source = require(`@src/assets/images/pages/${illustration}`).default

  const onSubmit = data => {
    if (Object.values(data).every(field => field !== undefined && field.length > 0)) {
      useJwt
        .login({ agency: data.loginAgency, user: data.loginUser, password: data.password })
        .then(res => {
          if (res.data.header.success) {
            const data = { userInfo: res.data.body.userInfo, accessToken: res.data.body.token }
            dispatch(handleLogin(data))
            //ability.update(res.data.userData.ability)
            navigate(getHomeRouteForLoggedInUser('admin'))
            const userName = `${data.userInfo.agency.name} / ${data.userInfo.name}`
            toast(t => (
              <ToastContent t={t} role={data.role || 'admin'} name={userName || 'John Doe'} />
            ))
          } else {
            toast(() => (
              <ErrorContent />
            ))
          }
        })
        .catch(err => console.log(err))
    } else {
      for (const key in data) {
        if (data[key] === undefined || data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <div className='auth-wrapper auth-cover'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <img src='https://i.hizliresim.com/5ejskns.png' />
          {/* <h2 className='brand-text text-primary ms-1'>TourVisio</h2> */}
        </Link>
        <Col className='d-none d-lg-flex bg-primary p-0' lg='8' sm='12'>
          <div className='w-100'>
            <img style={{ maxHeight: "100vh" }} className='h-100 w-100' src='https://wallpaperaccess.com/full/1889147.jpg' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='fw-bold mb-1'>
              Welcome to TourVisio! 👋
            </CardTitle>

            <Alert color='primary'>

              <HelpCircle
                id='login-tip'
                className='position-absolute'
                size={18}
                style={{ top: '10px', right: '10px' }}
              />
              <UncontrolledTooltip target='login-tip' placement='left'>
                This is just for ACL demo purpose.
              </UncontrolledTooltip>
            </Alert>
            <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-1'>
                <Label className='form-label' for='login-agency'>
                  Agency
                </Label>
                <Controller
                  id='loginAgency'
                  name='loginAgency'
                  control={control}
                  render={({ field }) => (
                    <Input
                      autoFocus
                      type='text'
                      placeholder='b2b'
                      invalid={errors.loginAgency && true}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='login-user'>
                  User
                </Label>
                <Controller
                  id='loginUser'
                  name='loginUser'
                  control={control}
                  render={({ field }) => (
                    <Input
                      autoFocus
                      type='text'
                      placeholder='b2b'
                      invalid={errors.loginUser && true}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className='mb-1'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/forgot-password'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <Controller
                  id='password'
                  name='password'
                  control={control}
                  render={({ field }) => (
                    <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} />
                  )}
                />
              </div>
              <div className='form-check mb-1'>
                <Input type='checkbox' id='remember-me' />
                <Label className='form-check-label' for='remember-me'>
                  Remember Me
                </Label>
              </div>
              <Button type='submit' color='primary' block>
                Sign in
              </Button>
            </Form>
            <p className='text-center mt-2'>
              <span className='me-25'>New on our platform?</span>
              <Link to='/register'>
                <span>Create an account</span>
              </Link>
            </p>

          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
