import React, { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Table from '@editorjs/table'; 
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import NestedList from '@editorjs/nested-list';
import CodeTool from '@editorjs/code';
import InlineCode from '@editorjs/inline-code';
import Quote from '@editorjs/quote';
import SimpleImage from "@editorjs/simple-image";

export default function CreateNote() {
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize EditorJS when the component mounts
    if (editorRef.current) {
      const editor = new EditorJS({
        holder: editorRef.current,
        /**
         * Your EditorJS configuration goes here.
         * You can customize the tools and other options according to your needs.
         */
        tools: {
          header: Header,
          table: Table,
          paragraph: {
            inlineToolbar: true,
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
              }
            }
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                codepen: {
                  regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
                  embedUrl: 'https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2',
                  html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
                  height: 300,
                  width: 600,
                  id: (groups) => groups.join('/embed/')
                }
              }
            }
          },
          list: {
            class: NestedList,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered'
            },
          },
          code: CodeTool,
          inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author',
            },
          },
          image: SimpleImage,
        },
        /**
         * Use the 'rendered' hook instead of 'appendCallback'
         */
        onReady: () => {
          console.log('Editor is ready');
        },
      });
    }

    // No need to clean up EditorJS instance explicitly

  }, []);

  return (
    <div className='flex-[4.1] flex flex-col gap-y-3 p-5 bg-zinc-100'>
      CreateNote

      <div className="p-5 bg-white h-[741px] overflow-y-auto rounded shadow-lg" ref={editorRef}>
        {/** replace the editor.js here */}
      </div>
    </div>
  )
}
