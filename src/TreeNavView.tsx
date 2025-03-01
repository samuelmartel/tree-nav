import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { fetchData } from './services/data';
import Tree, { TreeNode } from './TreeNav/TreeNav'

export default function BasicRichTreeView() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        fetchData().then((data: TreeNode[]) => setNodes(data));
    }, []);

    return (
        <Box sx={{ minHeight: 352, minWidth: 250 }}>
            <Tree data={nodes}/>
        </Box>
    );
}