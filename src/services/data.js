const backendData = [
    {
      id: "1",
      label: "Office Map"
    },
    {
      id: "2",
      label: "New Employee Onboarding",
      children: [
        {
          id: "8",
          label: "Onboarding Materials"
        },
        {
          id: "9",
          label: "Training"
        }
      ]
    },
    {
      id: "3",
      label: "Office Events",
      children: [
        {
          id: "6",
          label: "2018",
          children: [
            {
              id: "10",
              label: "Summer Picnic"
            },
            {
              id: "11",
              label: "Valentine's Day Party"
            },
            {
              id: "12",
              label: "New Year's Party"
            }
          ]
        },
        {
          id: "7",
          label: "2017",
          children: [
            {
              id: "13",
              label: "Company Anniversary Celebration"
            }
          ]
        }
      ]
    },
    {
      id: "4",
      label: "Public Holidays"
    },
    {
      id: "5",
      label: "Vacations and Sick Leaves"
    }
  ];
  
  export function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(backendData)}, 100);
    });
  }
  