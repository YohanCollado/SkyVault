"use client";

import React, { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaCloudUploadAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface Props {
  ownerId: string;
  accountId: string;
  className?: string;
}

const FileUploader = ({ownerId, accountId, className }: Props) => {
  //const path = usePathname();
  //const {toast} = useToast();
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input {...getInputProps()} />
      <Button 
        type="submit"  
        className={cn("uploader-button", className)}>
        <FaCloudUploadAlt/>
        <p>Upload</p>
      </Button>
      {files.length > 0 && (
        <ul className="uploader-preview-list">
          <h4 className="h4 text-light-100">Uploading</h4>
          {files.map((file, index) => {
            const {type, extension } = getFileType(file.name);
          })}
        </ul>
      )} 
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag drop some files here, or click to select files</p>
      }
    </div>
  )
};

export default FileUploader;