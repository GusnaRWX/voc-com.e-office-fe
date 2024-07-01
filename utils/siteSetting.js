import {
    FaFileImport,
    FaFileExport,
    FaPaperclip,
} from "react-icons/fa";
import {BLANKO} from "@/utils/assetConstant";

export const dataDashboard = [
    {
        icons: <FaFileImport size={20}/>,
        title: 'Surat Masuk',
        duration: '+7',
        total: '250'
    },
    {
        icons: <FaFileExport size={20}/>,
        title: 'Surat Keluar',
        duration: '+10',
        total: '500'
    },
    {
        icons: <FaPaperclip size={20}/>,
        title: 'Memo',
        duration: '+15',
        total: '750'
    }
]

export const exampleDataTable = [
    {
        no: 1,
        dateIn: '22/06/2024',
        numberOfLetter: 'SDW/101/01',
        subject: 'Pengumuman',
        letterType: 'Surat Edaran',
    },
    {
        no: 2,
        dateIn: '22/06/2024',
        numberOfLetter: 'SDW/101/01',
        subject: 'Pengumuman',
        letterType: 'Surat Edaran',
    },
    {
        no: 3,
        dateIn: '22/06/2024',
        numberOfLetter: 'SDW/101/01',
        subject: 'Pengumuman',
        letterType: 'Surat Edaran',
    },
    {
        no: 4,
        dateIn: '22/06/2024',
        numberOfLetter: 'SDW/101/01',
        subject: 'Pengumuman',
        letterType: 'Surat Edaran',
    },
    {
        no: 5,
        dateIn: '22/06/2024',
        numberOfLetter: 'SDW/101/01',
        subject: 'Pengumuman',
        letterType: 'Surat Edaran',
    },
    {
        no: 6,
        dateIn: '22/06/2024',
        numberOfLetter: 'SDW/101/01',
        subject: 'Pengumuman',
        letterType: 'Surat Edaran',
    },
    {
        no: 7,
        dateIn: '22/06/2024',
        numberOfLetter: 'SDW/101/01',
        subject: 'Pengumuman',
        letterType: 'Surat Edaran',
    },
    {
        no: 8,
        dateIn: '22/06/2024',
        numberOfLetter: 'SDW/101/01',
        subject: 'Pengumuman',
        letterType: 'Surat Edaran',
    },
    {
        no: 9,
        dateIn: '22/06/2024',
        numberOfLetter: 'SDW/101/01',
        subject: 'Pengumuman',
        letterType: 'Surat Edaran',
    },
    {
        no: 10,
        dateIn: '22/06/2024',
        numberOfLetter: 'SDW/101/01',
        subject: 'Pengumuman',
        letterType: 'Surat Edaran',
    },
]

export const letterTypeOptions = [
    {
        id: 1,
        type: 'invitation',
        title: 'Surat Undangan',
        image: BLANKO
    },
    {
        id: 2,
        type: 'regular',
        title: 'Surat Biasa',
        image: BLANKO
    },
    {
        id: 3,
        type: 'permission',
        title: 'Surat Biasa',
        image: BLANKO
    },
    {
        id: 4,
        type: 'description',
        title: 'Surat Keterangan',
        image: BLANKO
    },
    {
        id: 5,
        type: 'attorney',
        title: 'Surat Kuasa',
        image: BLANKO
    },
    {
        id: 6,
        type: 'command',
        title: 'Surat Perintah',
        image: BLANKO
    },
    {
        id: 7,
        type: 'announcement',
        title: 'Surat Pengumuman',
        image: BLANKO
    },
    {
        id: 8,
        type: 'circular',
        title: 'Surat Edaran',
        image: BLANKO
    }
]

