'use client'

import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ClassNames } from '@emotion/react';
import { FaCloudUploadAlt } from "react-icons/fa";

const FileUploader = () => {
        const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input {...getInputProps()} />
      <Button 
        type="button"  
        className={cn("uploader-button", ClassNames)}>
        <FaCloudUploadAlt height={24} width={24}/>
      </Button>
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
};

export default FileUploader;