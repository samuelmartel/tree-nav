const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data')

// Use environment variable or default to port 3000
const port = 8080; 

app.use(cors())

const backendData = [
    {
      id: "1",
      name: "Office Map"
    },
    {
      id: "2",
      name: "New Employee Onboarding",
      children: [
        {
          id: "8",
          name: "Onboarding Materials"
        },
        {
          id: "9",
          name: "Training"
        }
      ]
    },
    {
      id: "3",
      name: "Office Events",
      children: [
        {
          id: "6",
          name: "2018",
          children: [
            {
              id: "10",
              name: "Summer Picnic"
            },
            {
              id: "11",
              name: "Valentine's Day Party"
            },
            {
              id: "12",
              name: "New Year's Party"
            }
          ]
        },
        {
          id: "7",
          name: "2017",
          children: [
            {
              id: "13",
              name: "Company Anniversary Celebration"
            }
          ]
        }
      ]
    },
    {
      id: "4",
      name: "Public Holidays"
    },
    {
      id: "5",
      name: "Vacations and Sick Leaves"
    }
  ];

app.get('/treenodes', (req, res) => {
  // Code to handle GET requests to the root path ('/')
  treeNodes = backendData;
  console.log(`data: ${treeNodes}`)
  res.json(treeNodes);
  res.send;
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});