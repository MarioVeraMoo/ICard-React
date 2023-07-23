import React , {useState, useEffect} from 'react'
import { Loader } from 'semantic-ui-react';
import { HeaderPage, TableUsers, AddEditUserForm } from '../../components/Admin';
import { useUser  } from '../../hooks';
import { ModalBasic } from "../../components/Common"


export  function UsersAdmin() {
    const {loading, users, getUsers, deleteUser} = useUser();
    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const [refetch, setRefetch] = useState(false)
    //console.log("loading ->", loading);
    //console.log("users ->", users);

    const openCloseModal = () => setShowModal((prev) => !prev)
    const onRefetch = () => setRefetch((prev) => !prev) 

    useEffect(() => {
        getUsers();
    }, [refetch])
    
    const addUser = () => {
        setTitleModal("Nuevo Usuario");
        setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();

    }

    const UpdateUser = (data) =>{
        setTitleModal("Actualizar usuario");
        setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} user={data} />)
        openCloseModal()
        console.log('Editar usuario');
        console.log(data)
    }

    const onDeleteUser = async (data) => {
        const result = window.confirm(`¿Eliminar usuario ${data.email}?`)
        if(result){
            try {
                await deleteUser(data.id);
                onRefetch();
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <>
            <HeaderPage title="Usuarios" btnTitle="Nuevo Usuario" btnClick={addUser} />
            {loading ? (
                <Loader active inline="centered">
                    Cargando.....
                </Loader>
            ): (
                <TableUsers users={users} UpdateUser={UpdateUser} onDeleteUser={onDeleteUser}/>
            )}
            
            <ModalBasic show={showModal} onClose={openCloseModal}  title={titleModal}>
                {contentModal}
            </ModalBasic>
        </>
    )
}
