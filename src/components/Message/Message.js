import useFetch from "../../useFetch";
import MessageCard from "./MessageCard";
import './Message.css';

const Message = () => {

    const { data: messages, isPending, error } = useFetch('https://json-server-openlake-suprabhosahas-projects.vercel.app/message');

    return (
        <div className="message">
            <div className="message-heading">
                Message
                <hr className="message-hr2"></hr>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {messages &&
                <div className="message-card-container">
                    <MessageCard messages={messages} />
                </div>
            }
        </div>
    );
}

export default Message;
