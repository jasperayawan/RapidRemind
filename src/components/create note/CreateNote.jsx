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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function CreateNote() {
  const editorRef = useRef(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    // Initialize EditorJS when the component mounts
    if (editorRef.current && editorRef.current instanceof Element) {
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
      });

      // Save the editor instance in the ref
    editorRef.current = editor;

    }
  }, []);



  const handleSubmit = async () => {
    try {
      // Ensure editorRef.current is defined
      if (editorRef.current) {
        const savedData = await editorRef.current.save();

        const response = await axios.post('/api/note', {
          userId: userId,
          content: savedData,
        });

        if (response.status === 200) {
          toast.success('Successfully content created!');
        }
      } else {
        console.error('Editor instance is not initialized correctly.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to create content');
    }
  };
  

  return (
    <>
      <ToastContainer />
    <div className='flex-[4.1] flex flex-col gap-y-3 p-5 bg-zinc-100'>
      <div className="flex justify-between items-center">
      <span>CreateNote</span>
      <button onClick={handleSubmit} className='bg-slate-800 px-5 py-2 rounded text-white'>Create</button>
      </div>
      <div className="p-5 bg-white h-[741px] overflow-y-auto rounded shadow-lg" ref={editorRef}>
        
      </div>
    </div>  
    </>
  )
}
