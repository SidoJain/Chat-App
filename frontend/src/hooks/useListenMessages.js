import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"
import notifSound from "../assets/notif_sound.mp3"

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
            if (newMessage.senderId === selectedConversation._id) {
                const sound = new Audio(notifSound);
                sound.play();
                setMessages([...messages, newMessage]);
            }
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;