import './Form.css';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BuyForm = () => {
    const [setForm, changeSetForm] = useState(false)

    return(
        <Formik
            initialValues={{
                name:'',
                lastname:'',
                phone:'',
                email:'',
                email2:''
            }}
            validate={(values) => {
                let  error = {}
    // VALIDACION NAME
                if(!values.name){
                    error.name = 'Please insert your name'
                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                    error.name = 'The name can only contain letters and spaces'
                }
    // VALIDACION LASTNAME
                if(!values.lastname){
                    error.lastname = 'Please insert your lastname'
                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)){
                    error.lastname = 'The lastname can only contain letters and spaces'
                }
    // VALIDACION PHONE
                if(!values.phone){
                    error.phone = 'Please insert your phone number'
                }else if(!/^[0-9]+$/.test(values.phone)){
                    error.phone = 'This space can only contain numbers'
                }
    // VALIDACION EMAIL
                if(!values.email){
                    error.email = 'Please insert your email address'
                }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                    error.email = 'The email can only contain letters, numbers, periods and underscores'
                }
    // VALIDACION EMAIL2
                if(!values.email2){
                    error.email2 = 'Please insert your email address'
                }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email2)){
                    error.email2 = 'The email address can only contain letters, numbers, periods and underscores'
                }
                return error
            }}
            onSubmit={( values, {resetForm} ) => {
                resetForm();
                console.log('Form Sent')
                changeSetForm(true)
                setTimeout(() => changeSetForm(false), 5000)
            }}
        >
            {( {errors} ) => (
                <Form className='buyForm'>
                    {/* NAME INPUT */}
                    <div>
                        <label htmlFor='name' className='label' >Name</label>
                        <Field
                        className='input'
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Jane'
                        />
                        <ErrorMessage
                        name='name'
                        component={() => (<div className="error">{errors.name}</div>)}
                        />
                    </div>
                    {/* LASTNAME INPUT */}
                    <div>
                        <label htmlFor='lastname'>Lastname</label>
                        <Field
                        className='input'
                        type='text'
                        id='lastname'
                        name='lastname'
                        placeholder='Doe'
                        />
                        <ErrorMessage
                        name='lastname'
                        component={() => (<div className="error">{errors.lastname}</div>)}
                        />
                    </div>
                    {/* PHONE INPUT */}
                    <div>
                        <label htmlFor='phone'>Phone Number</label>
                        <Field
                        className='input'
                        type='text'
                        id='phone'
                        name='phone'
                        placeholder='000-0000-0000'
                        />
                        <ErrorMessage
                        name='phone'
                        component={() => (<div className="error">{errors.phone}</div>)}
                        />
                    </div>
                    {/* EMAIL INPUT */}
                    <div>
                        <label htmlFor='email'>Email</label>
                        <Field
                        className='input'
                        type='text'
                        id='email'
                        name='email'
                        placeholder='janedoe@email.com'
                        />
                        <ErrorMessage
                        name='email'
                        component={() => (<div className="error">{errors.email}</div>)}
                        />
                    </div>
                    {/* EMAIL INPUT 2 */}
                    <div>
                        <label htmlFor='email2'>Confirm Email</label>
                        <Field
                        className='input'
                        type='text'
                        id='email2'
                        name='email2'
                        />
                        <ErrorMessage
                        name='email2'
                        component={() => (<div className="error">{errors.email2}</div>)}
                        />
                    </div>
                    <button type="submit" className='submitBtn'>Enviar</button>
						{setForm && <p className="exito">Your order has been successfully placed!~</p>}
                </Form>
            )}
        </Formik>
    )
}

export default BuyForm