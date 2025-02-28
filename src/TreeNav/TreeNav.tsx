import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import CircleIcon from '@mui/icons-material/Circle'


export interface TreeNode {
    id: string;
    name: string;
    children?: TreeNode[];
}

interface TreeProps {
    data: TreeNode[];
}

const Tree: React.FC<TreeProps> = ({ data }) => {
    const renderTree = (nodes: TreeNode[]) => {
        return nodes.map((node) => (
            <TreeNodeComponent key={node.id} node={node} />
        ));
    };
    return <ul>{renderTree(data)}</ul>;
};

interface TreeNodeProps {
    node: TreeNode;
}

const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    function displayIcon(node: TreeNode) {
        if (node.children) {
            if (isExpanded) {
                return (
                    <div className='node-list-item'>
                        <svg className='drop-down' width="24" height="24">
                            <ArrowDropDownIcon/>
                        </svg>
                        {node.name}
                    </div>
                );
            }
            return (
                <div className='node-list-item'>
                    <svg className='drop-down' width="24" height="24">
                        <ArrowRightIcon/>
                    </svg>
                    {node.name}
                </div>
            );
        }
        return (
            <div className='node-list-item'>
                <svg className='drop-down' width="10" height="10">
                    <CircleIcon/>
                </svg>
                {node.name}
            </div>
        );
    }

    return (
        <div style={{display: 'flex', alignItems: 'start', textAlign: 'left', width: '100%'}}>
            <li className='tree-nav'>
                <div onClick={handleToggle}>
                    {displayIcon(node)}
                </div>
                {isExpanded && node.children && (
                    <ul>
                        {node.children.map((child) => (
                            <TreeNodeComponent key={child.id} node={child}/>
                        ))}
                    </ul>
                )}
            </li>
        </div>
    );
};

export default Tree;