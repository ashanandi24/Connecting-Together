
import React, { useState } from 'react';
import { channelList, useChatContext } from 'stream-chat-react';
import  FileDownloader  from './FileDownloader';
import { FileUploader } from './FileUploader';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditChannel = () => {
    const { client } = useChatContext();
    const { channel } = useChatContext();
    const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };
    if(client.user.category==='teacher')
    {
        return (
            <div>
                <FileUploader channelName={channel?.data?.name} />
                <ToastContainer/>
            </div>
        )
    }
    else{

        return (
            <div>
               <FileDownloader channelName={channel?.data?.name}/>
                <ToastContainer/>
            </div>
        )
    }
    
}

export default EditChannel




