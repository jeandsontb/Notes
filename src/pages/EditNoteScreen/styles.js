import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #333;
`;

export const TitleInput = styled.TextInput`
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    color: #FFF;
`;

export const BodyInput = styled.TextInput`
    flex: 1;
    padding: 15px;
    font-size: 15px;
    color: #FFF;
`;

export const CloseButton = styled.TouchableHighlight`
    margin-left: 15px;
`;

export const CloseImage = styled.Image`
    width:18px;
    height:18px;
`;

export const SaveButton = styled.TouchableHighlight`
    margin-right: 15px;
`;

export const SaveImage = styled.Image`
    width:24px;
    height:24px;
`;

export const DeleteButton = styled.TouchableHighlight`
    height: 40px;
    background-color: #FF3333;
    justify-content: center;
    align-items: center;
`;
export const DeleteButtonText = styled.Text`
    font-size: 14px;
    color: #FFF;
`;