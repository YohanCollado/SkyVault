"use client";

import React, { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaCloudUploadAlt } from "react-icons/fa";
import { cn, convertFileToUrl } from "@/lib/utils";
import { getFileType } from "@/lib/utils";
import Thumbnail from "@/components/Thumbnail";
import { TbLoaderQuarter } from "react-icons/tb";


interface Props {
  ownerId: string;
  accountId: string;
  className?: string;
}

const FileUploader = ({ownerId, accountId, className }: Props) => {
  //const path = usePathname();
  //const {toast} = useToast();
  const [files, setFiles] = useState<File[]>([])
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Do something with the files
    setFiles(acceptedFiles);
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
            return (
              <li 
                key={`${file.name}-${index}`} 
                className="uploader-preview-item"
              >
                <div className="flex items-center gap-3">
                  <Thumbnail
                    type={type}
                    extension={extension}
                    url={convertFileToUrl(file)}

                  />
                  <div className="preview-item-name">
                    {file.name}
                    <div className="w-full max-w-md mt-4">
                      <TbLoaderQuarter className="animate-spin"/>
                      {isLoading ?(
                        <p>Loading...</p>
                      ) : (
                        <p>Uploaded</p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
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