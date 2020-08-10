import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import NoteItem from '../../components/NoteItem';

import {
    Container, 
    AddButton,
    AddButtonImage,
    NotesList,
    NoNotes,
    NoNotesImage,
    NoNotesText
} from './styles'

const EditNoteScreen = () => {

    const { navigate, setOptions } = useNavigation();
    const list = useSelector(state => state.notes.list);

    useLayoutEffect(() => {
        setOptions({
            title: 'Suas notas',
            headerRight: () => (
                <AddButton underlayColor="transparent" onPress={() => navigate('EditNote')} >
                    <AddButtonImage source={require('../../assets/more.png')} />
                </AddButton>
            )
        });
    }, []);

    const handleNotePress = (index) => {
        navigate('EditNote', {
            key: index
        })
    }

    return (
        <Container>
            {list.length > 0 &&
                <NotesList 
                    data={list}
                    renderItem={({item, index}) => (
                        <NoteItem 
                            data={item}
                            index={index}
                            onPress={handleNotePress}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            }

            {list.length == 0 &&
                <NoNotes >
                    <NoNotesImage source={require('../../assets/note.png')} />
                    <NoNotesText>Nenhuma anotação</NoNotesText>
                </NoNotes>
            }
        </Container>
    );
}

export default EditNoteScreen;