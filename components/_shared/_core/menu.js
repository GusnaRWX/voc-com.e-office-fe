import {AiFillHome} from "react-icons/ai";
import { RiAccountCircleFill } from 'react-icons/ri';
import {
    FaDatabase,
    FaFileImport,
    FaFileExport,
    FaFileAlt,
    FaPaperclip,
    FaPenAlt,
    FaListOl,
    FaTrash
} from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

export const Menus = [
    {
        key: 'dashboard',
        path: '/',
        icons: FaDatabase,
        hasChild: false,
        title: 'Dashboard',
        roles: ['super_admin'],
        child: []
    },
    {
        key: 'laporan_surat',
        path: '/laporan-surat',
        icons: FaFolderOpen,
        hasChild: false,
        title: 'Laporan Surat',
        roles: ['super_admin'],
        child: []
    },
    {
        key: 'surat_masuk',
        path: '/surat-masuk',
        icons: FaFileImport,
        hasChild: false,
        title: 'Surat Masuk',
        roles: ['super_admin'],
        child: []
    },
    {
        key: 'surat_keluar',
        path: '/surat-keluar',
        icons: FaFileExport,
        hasChild: false,
        title: 'Surat Keluar',
        roles: ['super_admin'],
        child: []
    },
    {
        key: 'disposisi',
        path: '/disposisi',
        icons: FaFileAlt,
        hasChild: false,
        title: 'Disposisi',
        roles: ['super_admin'],
        child: []
    },
    {
        key: 'memo_internal',
        path: '/memo',
        icons: FaPaperclip,
        hasChild: false,
        title: 'Memo Internal',
        roles: ['super_admin'],
        child: []
    },
    {
        key: 'penomoran',
        path: '/penomoran',
        icons: FaPenAlt,
        hasChild: false,
        title: 'Penomoran',
        roles: ['super_admin'],
        child: []
    },
    {
        key: 'sampah',
        path: '/sampah',
        icons: FaTrash,
        hasChild: false,
        title: 'Sampah',
        roles: ['super_admin'],
        child: []
    },
    // {
    //     key: 'menu_3',
    //     path: '/menu-3',
    //     icons: RiAccountCircleFill,
    //     hasChild: true,
    //     title: 'Menu 3',
    //     roles: ['super_admin'],
    //     child: [
    //         {
    //             path: '/menu-3/menu-4',
    //             title: 'Menu 4',
    //             roles: ['super_admin']
    //         },
    //         {
    //             path: '/menu-3/menu-5',
    //             title: 'Menu 5',
    //             roles: ['super_admin']
    //         }
    //     ]
    // }
]