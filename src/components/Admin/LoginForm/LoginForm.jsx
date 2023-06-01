import React from 'react'
import { Button, Form} from "semantic-ui-react"
import "./LoginForm.scss"

export function LoginForm () {
    return (
        <Form action="" className='login-form-admin'>
            <Form.Input name="email" placeholder="Correo electronico"/>
            <Form.Input name="password" type='password' placeholder="Contraseña"/>
            <Button type="submit" content='Iniciar Sesion' primary fluid/>
        </Form>
    )
}
