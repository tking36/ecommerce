import React, {useState} from 'react'
import { Form, Button, Col} from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = () => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    if(!shippingAddress.address) {
        navigate('/shipping')

    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }


  return (
    <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <Form onSubmit={submitHandler} >
            <Form.Group>
                <Form.Label as='legend'>Select Method</Form.Label>
                <Col>
                    <Form.Check
                        type='radio'
                        label='PayPal or Credit Card'
                        id='PayPal'
                        name='paymentMethod'
                        value='PayPal'
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    ></Form.Check>
                </Col>
            </Form.Group>
            <Button className='submit' type='submit' variant='primary'>
                Continue
            </Button>
        </Form>

    </FormContainer>
  )
}

export default PaymentScreen