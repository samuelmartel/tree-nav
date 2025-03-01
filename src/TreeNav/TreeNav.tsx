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
                        <svg className='drop-down-icon' width="24" height="18">
                            <ArrowDropDownIcon className="arrow-drop-down"/>
                        </svg>
                        {node.name}
                    </div>
                );
            }
            return (
                <div className='node-list-item'>
                    <svg className='right-icon' width="24" height="18">
                        <ArrowRightIcon className="arrow-right"/>
                    </svg>
                    {node.name}
                </div>
            );
        }
        return (
            <div className='node-list-item'>
                <svg className='circle-icon' width="24" height="10">
                    <CircleIcon className="circle" sx={{'transform': 'scale(0.5)'}}/>
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