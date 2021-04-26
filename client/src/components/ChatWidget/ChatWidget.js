import React from 'react';
import { Widget } from 'react-chat-widget'; 
import 'react-chat-widget/lib/styles.css';



function ChatWidget() {
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
      };
     
      return (
        <div className="App">
          <Widget
            handleNewUserMessage={handleNewUserMessage}
            // profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
          />
        </div>
      );
    }
  export default ChatWidget;

//   import React from 'react';
// import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 
// import 'react-chat-widget/lib/styles.css';
 
// import logo from './logo.svg';
 
// function ChatWidge() {
//   useEffect(() => {
//     addResponseMessage('Welcome to this awesome chat!');
//   }, []);
 
//   const handleNewUserMessage = (newMessage) => {
//     console.log(`New message incoming! ${newMessage}`);
//     // Now send the message throught the backend API
//   };
 
//   render() {
//     return (
//       <div className="App">
//         <Widget
//           handleNewUserMessage={handleNewUserMessage}
//           profileAvatar={logo}
//           title="My new awesome title"
//           subtitle="And my cool subtitle"
//         />
//       </div>
//     );
//   } 
// }
 
// export default ChatWidget;