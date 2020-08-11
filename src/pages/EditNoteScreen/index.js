import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { 
    Container, 
    TitleInput,
    BodyInput,
    CloseButton,
    CloseImage,
    SaveButton,
    SaveImage,
    DeleteButton,
    DeleteButtonText 
} from './styles'

const EditNoteScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector( state => state.notes.list);

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ status, setStatus ] = useState('new');

    useEffect(() => {
        if(route.params?.key != undefined  && list[route.params.key]) {
            setStatus('edit');
            setTitle( list[route.params.key].title );
            setBody( list[route.params.key].body );
        }
    }, []);

    const handleSaveButton = () => {
        if( title != '' && body != '' ) {
            if(status == 'edit') {
                dispatch({
                    type: 'EDIT_NOTE',
                    payload: {
                        key: route.params.key,
                        title,
                        body
                    }
                })
            } else {
                dispatch({
                    type: 'ADD_NOTE',
                    payload:{
                        title,
                        body
                    }
                })
            }

            navigation.goBack();
        } else {
            alert('Preencha o título e corpo da sua nota!');
        }
    }
    
    const handleCloseButton = () => {
        navigation.goBack();
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: status == 'new' ? 'Nova anotação' : 'Editar anotação',
            headerLeft: () => (
                <CloseButton underlayColor="transparent" onPress={handleCloseButton} >
                    <CloseImage source={require('../../assets/close.png')} />
                </CloseButton>
            ),
            headerRight: () => (
                <SaveButton underlayColor="transparent" onPress={handleSaveButton} >
                    <SaveImage source={require('../../assets/save.png')} />
                </SaveButton>
            )
        });
    }, [status, title, body]);

    const handleDeleteNote = () => {
        dispatch({
            type: 'DEL_NOTE',
            payload: {
                key: route.params.key
            }
        })

        navigation.goBack();
    }
    

    return (
        <Container>
            <TitleInput 
                value={title}
                onChangeText={e => setTitle(e)}
                placeholder="Digite o título da anotação"
                placeholderTextColor="#CCC"
                autoFocus={true}
            />
            <BodyInput 
                value={body}
                onChangeText={e => setBody(e)}
                placeholder="Digite o corpo da anotação"
                placeholderTextColor="#CCC"
                multiline={true}
                textAlignVertical="top"
            /> 

            { status == 'edit' &&
                <DeleteButton underlayColor="#FF0000" onPress={handleDeleteNote} >
                    <DeleteButtonText>Excluir Anotação</DeleteButtonText>
                </DeleteButton>
            }   
        </Container>
    );
}

export default EditNoteScreen; 