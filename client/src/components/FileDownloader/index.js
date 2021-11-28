import React, { Component } from 'react';
import { listAll } from "./fire";


export const FileDownloader = ({channelName} ) =>  {
  const listAllitems=()=>{
    listAll(`${channelName}/`);
  };
  return (
    <div >
      <button onClick={listAllitems}>List All Items</button>
    </div>
  )
}
export default FileDownloader
  