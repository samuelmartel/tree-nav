import Box from '@mui/material/Box'
import { RichTreeView, TreeViewBaseItem } from '@mui/x-tree-view'
import { useEffect, useState } from 'react'
import { fetchData } from './services/data';

export default function BasicRichTreeView() {
    const [nodes, setNodes] = useState<TreeViewBaseItem[]>([]);

    useEffect(() => {
        fetchData().then((data) => setNodes(data));
    }, []);

    return (
        <Box sx={{ minHeight: 352, minWidth: 250 }}>
            <RichTreeView items={nodes}/>
        </Box>
    );
}