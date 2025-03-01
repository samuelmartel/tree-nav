import axios from "axios";
import { TreeNode } from '../TreeNav/TreeNav'

export function fetchData(): Promise<TreeNode[]> {
    return axios.get('http://localhost:8080/treenodes')
    .then((response) => {
        return response.data;
    });
  }