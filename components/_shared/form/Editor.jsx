import React, {useMemo} from 'react';
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import Box from '@mui/material/Box';

const Editor = ({
    value,
    onChange
}) => {
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), {ssr: false}),[]);

    const modules = {
        toolbar: [
            [{'header': [1, 2, 3, 4, 5, false]}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ]
    }

    const format = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'code-block', 'indent',
        'link', 'image'
    ]



    return (
       <Box sx={{ height: '15rem', mb: '2rem' }}>
           <ReactQuill
               value={value}
               theme={'snow'}
               modules={modules}
               formats={format}
               onChange={onChange}
               style={{
                   height: '15rem',
                   borderRadius: '10px',
                   marginBottom: '2rem'
               }}
           />
       </Box>
    )
}

export default Editor;