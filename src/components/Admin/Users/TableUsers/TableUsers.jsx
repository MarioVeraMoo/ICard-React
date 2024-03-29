import React from 'react'
import { Table, Button, Icon } from "semantic-ui-react"
import { map } from "lodash"
import "./TableUsers.scss"

export function TableUsers(props) {
    const { users, UpdateUser, onDeleteUser } = props;
    return (
        <Table className='table-users-admin'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>UserName</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Nombres</Table.HeaderCell>
                    <Table.HeaderCell>Apellidos</Table.HeaderCell>
                    <Table.HeaderCell>Activo</Table.HeaderCell>
                    <Table.HeaderCell>Staff</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {map(users, (user, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{user.username}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>{user.first_name}</Table.Cell>
                        <Table.Cell>{user.last_name}</Table.Cell>
                        <Table.Cell className='status'>
                            {user.is_active ? <Icon name='check' /> : <Icon name="close" /> }
                        </Table.Cell>
                        <Table.Cell className='status'>
                            {user.is_staff ? <Icon name='check' /> : <Icon name="close" /> }
                        </Table.Cell>

                        <Actions user={user} UpdateUser={UpdateUser} onDeleteUser={onDeleteUser} />
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}


function Actions( props ){
    const {user, UpdateUser, onDeleteUser} = props;

    return(
        <Table.Cell textAlign='right'>
            <Button icon onClick={() => UpdateUser(user)}>
                <Icon name='pencil' />
            </Button>

            <Button icon negative onClick={() => onDeleteUser(user)}>
                <Icon  name='close' />
            </Button>
        </Table.Cell>
    );
}