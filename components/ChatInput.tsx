"use client";

import { PaperAirplaneIcon }                   from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession }                          from "next-auth/react";
import { FormEvent, useState }                 from "react";
import { toast }                               from "react-hot-toast";
import { db }                                  from "../firebase";
import   ModelSelection                        from "./ModelSelection";
import   useSWR                                from "swr";

type Props = {
    chatId: string,
};

function ChatInput({ chatId } : Props) {
    
    const [prompt, setPrompt] = useState("");
    const { data:session }    = useSession();

    // useSWR to get model.
    const { data: model } = useSWR('model', {
        fallbackData:'text-halconbit-001',
    });
    // const model = "text-halconbit-001";

    const sendMessage = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( prompt!== "" ) {
            return;
        }

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
                 text:input,
            createdAt:serverTimestamp(),
                 user: {
                _id:session?.user?.email!,
                name:session?.user?.name!,
                avatar:session?.user?.image! || `https://ui-avatar.com/api/?name=${session?.user?.name}`,
            }
        };

        await addDoc(collection(db, "users", session?.user?.email!, 'chats', chatId, 'messages'), message);

        // Toast notification to say Loading!
        const notification = toast.loading('ChatGPT is thinking...');

        // Toast notification.
        await fetch('api/askQuestion', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                prompt:input, chatId, model, session
            }),
        }).then(() => {
            // Toast notification to say successful!
            toast.success('ChatGPT has responded!', {
                id:notification,
            });
        });
    };

    return (
      <div className="bg-orange-700/50 text-gray-400 rounded-lg text-sm">
        <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
            <input className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300" disabled={!session} onChange={(e) => setPrompt(e.target.value)} type="text" name="" id="" placeholder="Type your message here..." value={prompt} />
            <button disabled={!prompt || !session} type="submit" className="bg-[#11A37F] hover:opacity-50 text-whgite font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed">
                <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
            </button>
        </form>

        <div className="md:hidden">
            {/*<MODEL SELECTION>*/}
            <ModelSelection />
            {/*<.MODEL SELECTION>*/}
        </div>

      </div>
    );
}
    
export default ChatInput;