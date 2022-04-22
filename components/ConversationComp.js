import styled from 'styled-components';
import { SearchContainer, SearchInput } from './ContactListComp';
import { messagesList } from '../mockData';

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
flex: 3;
background: #f6f7f8;
`;

const ProfileHead = styled.div`
display: flex;
flex-direction: row;
background: #ededed;
padding: 7px;
align-items: center;
gap: 10px;
`;

const ProfileImg = styled.img`
width: 38px;
height: 38px;
border-radius: 50%;
`;

const ProfileIcon = styled(ProfileImg)`
width: 45px;
height: 45px;
margin-left: 8px;
`;

const ChatBox = styled.div`
display: flex;
background: #f0f0f0;
padding: 10px;
align-items: center;
bottom: 0;
`;

const EmojiImage = styled.img`
width: 28px;
height: 28px;
opacity: 0.4;
cursor: pointer;
`;

const MessageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: #e5ddd6;
overflow-y: auto;
` ;

const MessageDiv = styled.div`
display: flex;
margin: 5px 25px;
justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
`;

const Message = styled.div`
background: ${(props) => (props.isYours ? "#daf8cb" : "white")};  
max-width: 50%;
color: #303030;
padding: 8px 10px;
font-size: 14px;
border-radius: 4px;
`;

const ConversationComp = (props) => {
    const {selectedChat} = props;

    return <Container>
        <ProfileHead>
            <ProfileIcon src={selectedChat.profilePic} />
            {selectedChat.name}
        </ProfileHead>
        <MessageContainer>
            {messagesList.map((messageData) => (
            <MessageDiv isYours={messageData.senderID === 0}>
                <Message isYours={messageData.senderID === 0}>{messageData.text}</Message>
            </MessageDiv>    
            ))}
            {/* <MessageDiv>
                <Message>Hey Tabibito! Yes, i want date with you.</Message>
            </MessageDiv> */}
        </MessageContainer>
        <ChatBox>
            <SearchContainer>
                <EmojiImage src='emojismile.png' />
                <SearchInput placeholder="Type a your message..." />
            </SearchContainer>
        </ChatBox>
    </Container>
}
export default ConversationComp;