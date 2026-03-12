"use client";

import React, { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { cn, convertFileToUrl, getFileType } from "@/lib/utils";
import Image from "next/image";
import Thumbnail from "@/components/Thumbnail";
import { MAX_FILE_SIZE } from "@/constants";
import { useToast } from "@/hooks/use-toast";
import { uploadFile } from "@/lib/actions/file.actions";
import { usePathname } from "next/navigation";

interface Props {
  ownerId: string;
  accountId: string;
  className?: string;
}

const FileUploader = ({ownerId, accountId, className }: Props) => {
  const path = usePathname();
  const {toast} = useToast();
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input {...getInputProps()} />
      <Button 
        type="button"  
        className={cn("uploader-button", ClassName)}>
        <FaCloudUploadAlt height={24} width={24}/>
      </Button>
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag drop some files here, or click to select files</p>
      }
    </div>
  )
};

export default FileUploader;