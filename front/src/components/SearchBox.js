import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import {useNavigate, useLocation} from 'react-router-dom'


const SearchBox = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        if(keyword){
          navigate(`/?keyword=${keyword}&page=1`)
        } else {
          navigate(navigate(location.pathname))
        }
      };


  return (
    <Form onSubmit={submitHandler} className='d-flex search'>
        <Form.Control
            type='text'
            name='q'
            placeholder='Search Products...'
            className='mr-sm-2 ml-sm-5'
            onChange={(e) => setKeyword(e.target.value)}
        ></Form.Control>

        <Button type='submit' variant='outline-success' className='p-2'>
            Search
        </Button>
    </Form>
  )
}

export default SearchBox