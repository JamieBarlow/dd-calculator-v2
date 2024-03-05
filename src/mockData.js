// Creates and returns Date objects
const d = (y, m, d) => {
  const date = new Date(y, m - 1, d);
  // date.setHours(0);
  return date;
};

// Returns date object from UTC string
const u2d = (string) => {
  const date = new Date(string);
  return date;
};

const mockResults2020 = [
  {
      colA: {
          JSDate: d(2020, 1, 5),
          displayDate: "05/01/2020"
      },
      colB: {
          JSDate: d(2019, 12, 24),
          displayDate: "24/12/2019"
      },
      colC: {
          JSDate: d(2019, 12, 31),
          displayDate: "31/12/2019"
      },
      colD: {
          JSDate: d(2020, 1, 2),
          displayDate: "02/01/2020"
      },
      colE: {
          JSDate: d(2020, 1, 3),
          displayDate: "03/01/2020"
      },
      colF: {
          JSDate: d(2020, 1, 6),
          displayDate: "06/01/2020"
      },
      colG: {
          JSDate: d(2020, 1, 7),
          displayDate: "07/01/2020"
      },
      colH: {
          JSDate: d(2020, 1, 8),
          displayDate: "08/01/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 1, 19),
          displayDate: "19/01/2020"
      },
      colB: {
          JSDate: d(2020, 1, 10),
          displayDate: "10/01/2020"
      },
      colC: {
          JSDate: d(2020, 1, 15),
          displayDate: "15/01/2020"
      },
      colD: {
          JSDate: d(2020, 1, 16),
          displayDate: "16/01/2020"
      },
      colE: {
          JSDate: d(2020, 1, 17),
          displayDate: "17/01/2020"
      },
      colF: {
          JSDate: d(2020, 1, 20),
          displayDate: "20/01/2020"
      },
      colG: {
          JSDate: d(2020, 1, 21),
          displayDate: "21/01/2020"
      },
      colH: {
          JSDate: d(2020, 1, 22),
          displayDate: "22/01/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 2, 5),
          displayDate: "05/02/2020"
      },
      colB: {
          JSDate: d(2020, 1, 28),
          displayDate: "28/01/2020"
      },
      colC: {
          JSDate: d(2020, 1, 31),
          displayDate: "31/01/2020"
      },
      colD: {
          JSDate: d(2020, 2, 3),
          displayDate: "03/02/2020"
      },
      colE: {
          JSDate: d(2020, 2, 4),
          displayDate: "04/02/2020"
      },
      colF: {
          JSDate: d(2020, 2, 5),
          displayDate: "05/02/2020"
      },
      colG: {
          JSDate: d(2020, 2, 6),
          displayDate: "06/02/2020"
      },
      colH: {
          JSDate: d(2020, 2, 7),
          displayDate: "07/02/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 2, 19),
          displayDate: "19/02/2020"
      },
      colB: {
          JSDate: d(2020, 2, 11),
          displayDate: "11/02/2020"
      },
      colC: {
          JSDate: d(2020, 2, 14),
          displayDate: "14/02/2020"
      },
      colD: {
          JSDate: d(2020, 2, 17),
          displayDate: "17/02/2020"
      },
      colE: {
          JSDate: d(2020, 2, 18),
          displayDate: "18/02/2020"
      },
      colF: {
          JSDate: d(2020, 2, 19),
          displayDate: "19/02/2020"
      },
      colG: {
          JSDate: d(2020, 2, 20),
          displayDate: "20/02/2020"
      },
      colH: {
          JSDate: d(2020, 2, 21),
          displayDate: "21/02/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 3, 5),
          displayDate: "05/03/2020"
      },
      colB: {
          JSDate: d(2020, 2, 26),
          displayDate: "26/02/2020"
      },
      colC: {
          JSDate: d(2020, 3, 2),
          displayDate: "02/03/2020"
      },
      colD: {
          JSDate: d(2020, 3, 3),
          displayDate: "03/03/2020"
      },
      colE: {
          JSDate: d(2020, 3, 4),
          displayDate: "04/03/2020"
      },
      colF: {
          JSDate: d(2020, 3, 5),
          displayDate: "05/03/2020"
      },
      colG: {
          JSDate: d(2020, 3, 6),
          displayDate: "06/03/2020"
      },
      colH: {
          JSDate: d(2020, 3, 9),
          displayDate: "09/03/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 3, 19),
          displayDate: "19/03/2020"
      },
      colB: {
          JSDate: d(2020, 3, 11),
          displayDate: "11/03/2020"
      },
      colC: {
          JSDate: d(2020, 3, 16),
          displayDate: "16/03/2020"
      },
      colD: {
          JSDate: d(2020, 3, 17),
          displayDate: "17/03/2020"
      },
      colE: {
          JSDate: d(2020, 3, 18),
          displayDate: "18/03/2020"
      },
      colF: {
          JSDate: d(2020, 3, 19),
          displayDate: "19/03/2020"
      },
      colG: {
          JSDate: d(2020, 3, 20),
          displayDate: "20/03/2020"
      },
      colH: {
          JSDate: d(2020, 3, 23),
          displayDate: "23/03/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 4, 5),
          displayDate: "05/04/2020"
      },
      colB: {
          JSDate: d(2020, 3, 27),
          displayDate: "27/03/2020"
      },
      colC: {
          JSDate: d(2020, 4, 1),
          displayDate: "01/04/2020"
      },
      colD: {
          JSDate: d(2020, 4, 2),
          displayDate: "02/04/2020"
      },
      colE: {
          JSDate: d(2020, 4, 3),
          displayDate: "03/04/2020"
      },
      colF: {
          JSDate: d(2020, 4, 6),
          displayDate: "06/04/2020"
      },
      colG: {
          JSDate: d(2020, 4, 7),
          displayDate: "07/04/2020"
      },
      colH: {
          JSDate: d(2020, 4, 8),
          displayDate: "08/04/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 4, 19),
          displayDate: "19/04/2020"
      },
      colB: {
          JSDate: d(2020, 4, 8),
          displayDate: "08/04/2020"
      },
      colC: {
          JSDate: d(2020, 4, 15),
          displayDate: "15/04/2020"
      },
      colD: {
          JSDate: d(2020, 4, 16),
          displayDate: "16/04/2020"
      },
      colE: {
          JSDate: d(2020, 4, 17),
          displayDate: "17/04/2020"
      },
      colF: {
          JSDate: d(2020, 4, 20),
          displayDate: "20/04/2020"
      },
      colG: {
          JSDate: d(2020, 4, 21),
          displayDate: "21/04/2020"
      },
      colH: {
          JSDate: d(2020, 4, 22),
          displayDate: "22/04/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 5, 5),
          displayDate: "05/05/2020"
      },
      colB: {
          JSDate: d(2020, 4, 27),
          displayDate: "27/04/2020"
      },
      colC: {
          JSDate: d(2020, 4, 30),
          displayDate: "30/04/2020"
      },
      colD: {
          JSDate: d(2020, 5, 1),
          displayDate: "01/05/2020"
      },
      colE: {
          JSDate: d(2020, 5, 4),
          displayDate: "04/05/2020"
      },
      colF: {
          JSDate: d(2020, 5, 5),
          displayDate: "05/05/2020"
      },
      colG: {
          JSDate: d(2020, 5, 6),
          displayDate: "06/05/2020"
      },
      colH: {
          JSDate: d(2020, 5, 7),
          displayDate: "07/05/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 5, 19),
          displayDate: "19/05/2020"
      },
      colB: {
          JSDate: d(2020, 5, 11),
          displayDate: "11/05/2020"
      },
      colC: {
          JSDate: d(2020, 5, 14),
          displayDate: "14/05/2020"
      },
      colD: {
          JSDate: d(2020, 5, 15),
          displayDate: "15/05/2020"
      },
      colE: {
          JSDate: d(2020, 5, 18),
          displayDate: "18/05/2020"
      },
      colF: {
          JSDate: d(2020, 5, 19),
          displayDate: "19/05/2020"
      },
      colG: {
          JSDate: d(2020, 5, 20),
          displayDate: "20/05/2020"
      },
      colH: {
          JSDate: d(2020, 5, 21),
          displayDate: "21/05/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 6, 5),
          displayDate: "05/06/2020"
      },
      colB: {
          JSDate: d(2020, 5, 28),
          displayDate: "28/05/2020"
      },
      colC: {
          JSDate: d(2020, 6, 2),
          displayDate: "02/06/2020"
      },
      colD: {
          JSDate: d(2020, 6, 3),
          displayDate: "03/06/2020"
      },
      colE: {
          JSDate: d(2020, 6, 4),
          displayDate: "04/06/2020"
      },
      colF: {
          JSDate: d(2020, 6, 5),
          displayDate: "05/06/2020"
      },
      colG: {
          JSDate: d(2020, 6, 8),
          displayDate: "08/06/2020"
      },
      colH: {
          JSDate: d(2020, 6, 9),
          displayDate: "09/06/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 6, 19),
          displayDate: "19/06/2020"
      },
      colB: {
          JSDate: d(2020, 6, 11),
          displayDate: "11/06/2020"
      },
      colC: {
          JSDate: d(2020, 6, 16),
          displayDate: "16/06/2020"
      },
      colD: {
          JSDate: d(2020, 6, 17),
          displayDate: "17/06/2020"
      },
      colE: {
          JSDate: d(2020, 6, 18),
          displayDate: "18/06/2020"
      },
      colF: {
          JSDate: d(2020, 6, 19),
          displayDate: "19/06/2020"
      },
      colG: {
          JSDate: d(2020, 6, 22),
          displayDate: "22/06/2020"
      },
      colH: {
          JSDate: d(2020, 6, 23),
          displayDate: "23/06/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 7, 5),
          displayDate: "05/07/2020"
      },
      colB: {
          JSDate: d(2020, 6, 26),
          displayDate: "26/06/2020"
      },
      colC: {
          JSDate: d(2020, 7, 1),
          displayDate: "01/07/2020"
      },
      colD: {
          JSDate: d(2020, 7, 2),
          displayDate: "02/07/2020"
      },
      colE: {
          JSDate: d(2020, 7, 3),
          displayDate: "03/07/2020"
      },
      colF: {
          JSDate: d(2020, 7, 6),
          displayDate: "06/07/2020"
      },
      colG: {
          JSDate: d(2020, 7, 7),
          displayDate: "07/07/2020"
      },
      colH: {
          JSDate: d(2020, 7, 8),
          displayDate: "08/07/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 7, 19),
          displayDate: "19/07/2020"
      },
      colB: {
          JSDate: d(2020, 7, 10),
          displayDate: "10/07/2020"
      },
      colC: {
          JSDate: d(2020, 7, 15),
          displayDate: "15/07/2020"
      },
      colD: {
          JSDate: d(2020, 7, 16),
          displayDate: "16/07/2020"
      },
      colE: {
          JSDate: d(2020, 7, 17),
          displayDate: "17/07/2020"
      },
      colF: {
          JSDate: d(2020, 7, 20),
          displayDate: "20/07/2020"
      },
      colG: {
          JSDate: d(2020, 7, 21),
          displayDate: "21/07/2020"
      },
      colH: {
          JSDate: d(2020, 7, 22),
          displayDate: "22/07/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 8, 5),
          displayDate: "05/08/2020"
      },
      colB: {
          JSDate: d(2020, 7, 28),
          displayDate: "28/07/2020"
      },
      colC: {
          JSDate: d(2020, 7, 31),
          displayDate: "31/07/2020"
      },
      colD: {
          JSDate: d(2020, 8, 3),
          displayDate: "03/08/2020"
      },
      colE: {
          JSDate: d(2020, 8, 4),
          displayDate: "04/08/2020"
      },
      colF: {
          JSDate: d(2020, 8, 5),
          displayDate: "05/08/2020"
      },
      colG: {
          JSDate: d(2020, 8, 6),
          displayDate: "06/08/2020"
      },
      colH: {
          JSDate: d(2020, 8, 7),
          displayDate: "07/08/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 8, 19),
          displayDate: "19/08/2020"
      },
      colB: {
          JSDate: d(2020, 8, 11),
          displayDate: "11/08/2020"
      },
      colC: {
          JSDate: d(2020, 8, 14),
          displayDate: "14/08/2020"
      },
      colD: {
          JSDate: d(2020, 8, 17),
          displayDate: "17/08/2020"
      },
      colE: {
          JSDate: d(2020, 8, 18),
          displayDate: "18/08/2020"
      },
      colF: {
          JSDate: d(2020, 8, 19),
          displayDate: "19/08/2020"
      },
      colG: {
          JSDate: d(2020, 8, 20),
          displayDate: "20/08/2020"
      },
      colH: {
          JSDate: d(2020, 8, 21),
          displayDate: "21/08/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 9, 5),
          displayDate: "05/09/2020"
      },
      colB: {
          JSDate: d(2020, 8, 27),
          displayDate: "27/08/2020"
      },
      colC: {
          JSDate: d(2020, 9, 2),
          displayDate: "02/09/2020"
      },
      colD: {
          JSDate: d(2020, 9, 3),
          displayDate: "03/09/2020"
      },
      colE: {
          JSDate: d(2020, 9, 4),
          displayDate: "04/09/2020"
      },
      colF: {
          JSDate: d(2020, 9, 7),
          displayDate: "07/09/2020"
      },
      colG: {
          JSDate: d(2020, 9, 8),
          displayDate: "08/09/2020"
      },
      colH: {
          JSDate: d(2020, 9, 9),
          displayDate: "09/09/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 9, 19),
          displayDate: "19/09/2020"
      },
      colB: {
          JSDate: d(2020, 9, 11),
          displayDate: "11/09/2020"
      },
      colC: {
          JSDate: d(2020, 9, 16),
          displayDate: "16/09/2020"
      },
      colD: {
          JSDate: d(2020, 9, 17),
          displayDate: "17/09/2020"
      },
      colE: {
          JSDate: d(2020, 9, 18),
          displayDate: "18/09/2020"
      },
      colF: {
          JSDate: d(2020, 9, 21),
          displayDate: "21/09/2020"
      },
      colG: {
          JSDate: d(2020, 9, 22),
          displayDate: "22/09/2020"
      },
      colH: {
          JSDate: d(2020, 9, 23),
          displayDate: "23/09/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 10, 5),
          displayDate: "05/10/2020"
      },
      colB: {
          JSDate: d(2020, 9, 25),
          displayDate: "25/09/2020"
      },
      colC: {
          JSDate: d(2020, 9, 30),
          displayDate: "30/09/2020"
      },
      colD: {
          JSDate: d(2020, 10, 1),
          displayDate: "01/10/2020"
      },
      colE: {
          JSDate: d(2020, 10, 2),
          displayDate: "02/10/2020"
      },
      colF: {
          JSDate: d(2020, 10, 5),
          displayDate: "05/10/2020"
      },
      colG: {
          JSDate: d(2020, 10, 6),
          displayDate: "06/10/2020"
      },
      colH: {
          JSDate: d(2020, 10, 7),
          displayDate: "07/10/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 10, 19),
          displayDate: "19/10/2020"
      },
      colB: {
          JSDate: d(2020, 10, 9),
          displayDate: "09/10/2020"
      },
      colC: {
          JSDate: d(2020, 10, 14),
          displayDate: "14/10/2020"
      },
      colD: {
          JSDate: d(2020, 10, 15),
          displayDate: "15/10/2020"
      },
      colE: {
          JSDate: d(2020, 10, 16),
          displayDate: "16/10/2020"
      },
      colF: {
          JSDate: d(2020, 10, 19),
          displayDate: "19/10/2020"
      },
      colG: {
          JSDate: d(2020, 10, 20),
          displayDate: "20/10/2020"
      },
      colH: {
          JSDate: d(2020, 10, 21),
          displayDate: "21/10/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 11, 5),
          displayDate: "05/11/2020"
      },
      colB: {
          JSDate: d(2020, 10, 28),
          displayDate: "28/10/2020"
      },
      colC: {
          JSDate: d(2020, 11, 2),
          displayDate: "02/11/2020"
      },
      colD: {
          JSDate: d(2020, 11, 3),
          displayDate: "03/11/2020"
      },
      colE: {
          JSDate: d(2020, 11, 4),
          displayDate: "04/11/2020"
      },
      colF: {
          JSDate: d(2020, 11, 5),
          displayDate: "05/11/2020"
      },
      colG: {
          JSDate: d(2020, 11, 6),
          displayDate: "06/11/2020"
      },
      colH: {
          JSDate: d(2020, 11, 9),
          displayDate: "09/11/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 11, 19),
          displayDate: "19/11/2020"
      },
      colB: {
          JSDate: d(2020, 11, 11),
          displayDate: "11/11/2020"
      },
      colC: {
          JSDate: d(2020, 11, 16),
          displayDate: "16/11/2020"
      },
      colD: {
          JSDate: d(2020, 11, 17),
          displayDate: "17/11/2020"
      },
      colE: {
          JSDate: d(2020, 11, 18),
          displayDate: "18/11/2020"
      },
      colF: {
          JSDate: d(2020, 11, 19),
          displayDate: "19/11/2020"
      },
      colG: {
          JSDate: d(2020, 11, 20),
          displayDate: "20/11/2020"
      },
      colH: {
          JSDate: d(2020, 11, 23),
          displayDate: "23/11/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 12, 5),
          displayDate: "05/12/2020"
      },
      colB: {
          JSDate: d(2020, 11, 27),
          displayDate: "27/11/2020"
      },
      colC: {
          JSDate: d(2020, 12, 2),
          displayDate: "02/12/2020"
      },
      colD: {
          JSDate: d(2020, 12, 3),
          displayDate: "03/12/2020"
      },
      colE: {
          JSDate: d(2020, 12, 4),
          displayDate: "04/12/2020"
      },
      colF: {
          JSDate: d(2020, 12, 7),
          displayDate: "07/12/2020"
      },
      colG: {
          JSDate: d(2020, 12, 8),
          displayDate: "08/12/2020"
      },
      colH: {
          JSDate: d(2020, 12, 9),
          displayDate: "09/12/2020"
      }
  },
  {
      colA: {
          JSDate: d(2020, 12, 19),
          displayDate: "19/12/2020"
      },
      colB: {
          JSDate: d(2020, 12, 11),
          displayDate: "11/12/2020"
      },
      colC: {
          JSDate: d(2020, 12, 16),
          displayDate: "16/12/2020"
      },
      colD: {
          JSDate: d(2020, 12, 17),
          displayDate: "17/12/2020"
      },
      colE: {
          JSDate: d(2020, 12, 18),
          displayDate: "18/12/2020"
      },
      colF: {
          JSDate: d(2020, 12, 21),
          displayDate: "21/12/2020"
      },
      colG: {
          JSDate: d(2020, 12, 22),
          displayDate: "22/12/2020"
      },
      colH: {
          JSDate: d(2020, 12, 23),
          displayDate: "23/12/2020"
      }
  }
];

const mockResults2021 = [
  {
      colA: {
          JSDate: d(2021, 1, 5),
          displayDate: "05/01/2021"
      },
      colB: {
          JSDate: d(2020, 12, 23),
          displayDate: "23/12/2020"
      },
      colC: {
          JSDate: d(2020, 12, 30),
          displayDate: "30/12/2020"
      },
      colD: {
          JSDate: d(2020, 12, 31),
          displayDate: "31/12/2020"
      },
      colE: {
          JSDate: d(2021, 1, 4),
          displayDate: "04/01/2021"
      },
      colF: {
          JSDate: d(2021, 1, 5),
          displayDate: "05/01/2021"
      },
      colG: {
          JSDate: d(2021, 1, 6),
          displayDate: "06/01/2021"
      },
      colH: {
          JSDate: d(2021, 1, 7),
          displayDate: "07/01/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 1, 19),
          displayDate: "19/01/2021"
      },
      colB: {
          JSDate: d(2021, 1, 11),
          displayDate: "11/01/2021"
      },
      colC: {
          JSDate: d(2021, 1, 14),
          displayDate: "14/01/2021"
      },
      colD: {
          JSDate: d(2021, 1, 15),
          displayDate: "15/01/2021"
      },
      colE: {
          JSDate: d(2021, 1, 18),
          displayDate: "18/01/2021"
      },
      colF: {
          JSDate: d(2021, 1, 19),
          displayDate: "19/01/2021"
      },
      colG: {
          JSDate: d(2021, 1, 20),
          displayDate: "20/01/2021"
      },
      colH: {
          JSDate: d(2021, 1, 21),
          displayDate: "21/01/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 2, 5),
          displayDate: "05/02/2021"
      },
      colB: {
          JSDate: d(2021, 1, 28),
          displayDate: "28/01/2021"
      },
      colC: {
          JSDate: d(2021, 2, 2),
          displayDate: "02/02/2021"
      },
      colD: {
          JSDate: d(2021, 2, 3),
          displayDate: "03/02/2021"
      },
      colE: {
          JSDate: d(2021, 2, 4),
          displayDate: "04/02/2021"
      },
      colF: {
          JSDate: d(2021, 2, 5),
          displayDate: "05/02/2021"
      },
      colG: {
          JSDate: d(2021, 2, 8),
          displayDate: "08/02/2021"
      },
      colH: {
          JSDate: d(2021, 2, 9),
          displayDate: "09/02/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 2, 19),
          displayDate: "19/02/2021"
      },
      colB: {
          JSDate: d(2021, 2, 11),
          displayDate: "11/02/2021"
      },
      colC: {
          JSDate: d(2021, 2, 16),
          displayDate: "16/02/2021"
      },
      colD: {
          JSDate: d(2021, 2, 17),
          displayDate: "17/02/2021"
      },
      colE: {
          JSDate: d(2021, 2, 18),
          displayDate: "18/02/2021"
      },
      colF: {
          JSDate: d(2021, 2, 19),
          displayDate: "19/02/2021"
      },
      colG: {
          JSDate: d(2021, 2, 22),
          displayDate: "22/02/2021"
      },
      colH: {
          JSDate: d(2021, 2, 23),
          displayDate: "23/02/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 3, 5),
          displayDate: "05/03/2021"
      },
      colB: {
          JSDate: d(2021, 2, 25),
          displayDate: "25/02/2021"
      },
      colC: {
          JSDate: d(2021, 3, 2),
          displayDate: "02/03/2021"
      },
      colD: {
          JSDate: d(2021, 3, 3),
          displayDate: "03/03/2021"
      },
      colE: {
          JSDate: d(2021, 3, 4),
          displayDate: "04/03/2021"
      },
      colF: {
          JSDate: d(2021, 3, 5),
          displayDate: "05/03/2021"
      },
      colG: {
          JSDate: d(2021, 3, 8),
          displayDate: "08/03/2021"
      },
      colH: {
          JSDate: d(2021, 3, 9),
          displayDate: "09/03/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 3, 19),
          displayDate: "19/03/2021"
      },
      colB: {
          JSDate: d(2021, 3, 11),
          displayDate: "11/03/2021"
      },
      colC: {
          JSDate: d(2021, 3, 16),
          displayDate: "16/03/2021"
      },
      colD: {
          JSDate: d(2021, 3, 17),
          displayDate: "17/03/2021"
      },
      colE: {
          JSDate: d(2021, 3, 18),
          displayDate: "18/03/2021"
      },
      colF: {
          JSDate: d(2021, 3, 19),
          displayDate: "19/03/2021"
      },
      colG: {
          JSDate: d(2021, 3, 22),
          displayDate: "22/03/2021"
      },
      colH: {
          JSDate: d(2021, 3, 23),
          displayDate: "23/03/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 4, 5),
          displayDate: "05/04/2021"
      },
      colB: {
          JSDate: d(2021, 3, 25),
          displayDate: "25/03/2021"
      },
      colC: {
          JSDate: d(2021, 3, 30),
          displayDate: "30/03/2021"
      },
      colD: {
          JSDate: d(2021, 3, 31),
          displayDate: "31/03/2021"
      },
      colE: {
          JSDate: d(2021, 4, 1),
          displayDate: "01/04/2021"
      },
      colF: {
          JSDate: d(2021, 4, 6),
          displayDate: "06/04/2021"
      },
      colG: {
          JSDate: d(2021, 4, 7),
          displayDate: "07/04/2021"
      },
      colH: {
          JSDate: d(2021, 4, 8),
          displayDate: "08/04/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 4, 19),
          displayDate: "19/04/2021"
      },
      colB: {
          JSDate: d(2021, 4, 9),
          displayDate: "09/04/2021"
      },
      colC: {
          JSDate: d(2021, 4, 14),
          displayDate: "14/04/2021"
      },
      colD: {
          JSDate: d(2021, 4, 15),
          displayDate: "15/04/2021"
      },
      colE: {
          JSDate: d(2021, 4, 16),
          displayDate: "16/04/2021"
      },
      colF: {
          JSDate: d(2021, 4, 19),
          displayDate: "19/04/2021"
      },
      colG: {
          JSDate: d(2021, 4, 20),
          displayDate: "20/04/2021"
      },
      colH: {
          JSDate: d(2021, 4, 21),
          displayDate: "21/04/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 5, 5),
          displayDate: "05/05/2021"
      },
      colB: {
          JSDate: d(2021, 4, 26),
          displayDate: "26/04/2021"
      },
      colC: {
          JSDate: d(2021, 4, 29),
          displayDate: "29/04/2021"
      },
      colD: {
          JSDate: d(2021, 4, 30),
          displayDate: "30/04/2021"
      },
      colE: {
          JSDate: d(2021, 5, 4),
          displayDate: "04/05/2021"
      },
      colF: {
          JSDate: d(2021, 5, 5),
          displayDate: "05/05/2021"
      },
      colG: {
          JSDate: d(2021, 5, 6),
          displayDate: "06/05/2021"
      },
      colH: {
          JSDate: d(2021, 5, 7),
          displayDate: "07/05/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 5, 19),
          displayDate: "19/05/2021"
      },
      colB: {
          JSDate: d(2021, 5, 11),
          displayDate: "11/05/2021"
      },
      colC: {
          JSDate: d(2021, 5, 14),
          displayDate: "14/05/2021"
      },
      colD: {
          JSDate: d(2021, 5, 17),
          displayDate: "17/05/2021"
      },
      colE: {
          JSDate: d(2021, 5, 18),
          displayDate: "18/05/2021"
      },
      colF: {
          JSDate: d(2021, 5, 19),
          displayDate: "19/05/2021"
      },
      colG: {
          JSDate: d(2021, 5, 20),
          displayDate: "20/05/2021"
      },
      colH: {
          JSDate: d(2021, 5, 21),
          displayDate: "21/05/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 6, 5),
          displayDate: "05/06/2021"
      },
      colB: {
          JSDate: d(2021, 5, 27),
          displayDate: "27/05/2021"
      },
      colC: {
          JSDate: d(2021, 6, 2),
          displayDate: "02/06/2021"
      },
      colD: {
          JSDate: d(2021, 6, 3),
          displayDate: "03/06/2021"
      },
      colE: {
          JSDate: d(2021, 6, 4),
          displayDate: "04/06/2021"
      },
      colF: {
          JSDate: d(2021, 6, 7),
          displayDate: "07/06/2021"
      },
      colG: {
          JSDate: d(2021, 6, 8),
          displayDate: "08/06/2021"
      },
      colH: {
          JSDate: d(2021, 6, 9),
          displayDate: "09/06/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 6, 19),
          displayDate: "19/06/2021"
      },
      colB: {
          JSDate: d(2021, 6, 11),
          displayDate: "11/06/2021"
      },
      colC: {
          JSDate: d(2021, 6, 16),
          displayDate: "16/06/2021"
      },
      colD: {
          JSDate: d(2021, 6, 17),
          displayDate: "17/06/2021"
      },
      colE: {
          JSDate: d(2021, 6, 18),
          displayDate: "18/06/2021"
      },
      colF: {
          JSDate: d(2021, 6, 21),
          displayDate: "21/06/2021"
      },
      colG: {
          JSDate: d(2021, 6, 22),
          displayDate: "22/06/2021"
      },
      colH: {
          JSDate: d(2021, 6, 23),
          displayDate: "23/06/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 7, 5),
          displayDate: "05/07/2021"
      },
      colB: {
          JSDate: d(2021, 6, 25),
          displayDate: "25/06/2021"
      },
      colC: {
          JSDate: d(2021, 6, 30),
          displayDate: "30/06/2021"
      },
      colD: {
          JSDate: d(2021, 7, 1),
          displayDate: "01/07/2021"
      },
      colE: {
          JSDate: d(2021, 7, 2),
          displayDate: "02/07/2021"
      },
      colF: {
          JSDate: d(2021, 7, 5),
          displayDate: "05/07/2021"
      },
      colG: {
          JSDate: d(2021, 7, 6),
          displayDate: "06/07/2021"
      },
      colH: {
          JSDate: d(2021, 7, 7),
          displayDate: "07/07/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 7, 19),
          displayDate: "19/07/2021"
      },
      colB: {
          JSDate: d(2021, 7, 9),
          displayDate: "09/07/2021"
      },
      colC: {
          JSDate: d(2021, 7, 14),
          displayDate: "14/07/2021"
      },
      colD: {
          JSDate: d(2021, 7, 15),
          displayDate: "15/07/2021"
      },
      colE: {
          JSDate: d(2021, 7, 16),
          displayDate: "16/07/2021"
      },
      colF: {
          JSDate: d(2021, 7, 19),
          displayDate: "19/07/2021"
      },
      colG: {
          JSDate: d(2021, 7, 20),
          displayDate: "20/07/2021"
      },
      colH: {
          JSDate: d(2021, 7, 21),
          displayDate: "21/07/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 8, 5),
          displayDate: "05/08/2021"
      },
      colB: {
          JSDate: d(2021, 7, 28),
          displayDate: "28/07/2021"
      },
      colC: {
          JSDate: d(2021, 8, 2),
          displayDate: "02/08/2021"
      },
      colD: {
          JSDate: d(2021, 8, 3),
          displayDate: "03/08/2021"
      },
      colE: {
          JSDate: d(2021, 8, 4),
          displayDate: "04/08/2021"
      },
      colF: {
          JSDate: d(2021, 8, 5),
          displayDate: "05/08/2021"
      },
      colG: {
          JSDate: d(2021, 8, 6),
          displayDate: "06/08/2021"
      },
      colH: {
          JSDate: d(2021, 8, 9),
          displayDate: "09/08/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 8, 19),
          displayDate: "19/08/2021"
      },
      colB: {
          JSDate: d(2021, 8, 11),
          displayDate: "11/08/2021"
      },
      colC: {
          JSDate: d(2021, 8, 16),
          displayDate: "16/08/2021"
      },
      colD: {
          JSDate: d(2021, 8, 17),
          displayDate: "17/08/2021"
      },
      colE: {
          JSDate: d(2021, 8, 18),
          displayDate: "18/08/2021"
      },
      colF: {
          JSDate: d(2021, 8, 19),
          displayDate: "19/08/2021"
      },
      colG: {
          JSDate: d(2021, 8, 20),
          displayDate: "20/08/2021"
      },
      colH: {
          JSDate: d(2021, 8, 23),
          displayDate: "23/08/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 9, 5),
          displayDate: "05/09/2021"
      },
      colB: {
          JSDate: d(2021, 8, 26),
          displayDate: "26/08/2021"
      },
      colC: {
          JSDate: d(2021, 9, 1),
          displayDate: "01/09/2021"
      },
      colD: {
          JSDate: d(2021, 9, 2),
          displayDate: "02/09/2021"
      },
      colE: {
          JSDate: d(2021, 9, 3),
          displayDate: "03/09/2021"
      },
      colF: {
          JSDate: d(2021, 9, 6),
          displayDate: "06/09/2021"
      },
      colG: {
          JSDate: d(2021, 9, 7),
          displayDate: "07/09/2021"
      },
      colH: {
          JSDate: d(2021, 9, 8),
          displayDate: "08/09/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 9, 19),
          displayDate: "19/09/2021"
      },
      colB: {
          JSDate: d(2021, 9, 10),
          displayDate: "10/09/2021"
      },
      colC: {
          JSDate: d(2021, 9, 15),
          displayDate: "15/09/2021"
      },
      colD: {
          JSDate: d(2021, 9, 16),
          displayDate: "16/09/2021"
      },
      colE: {
          JSDate: d(2021, 9, 17),
          displayDate: "17/09/2021"
      },
      colF: {
          JSDate: d(2021, 9, 20),
          displayDate: "20/09/2021"
      },
      colG: {
          JSDate: d(2021, 9, 21),
          displayDate: "21/09/2021"
      },
      colH: {
          JSDate: d(2021, 9, 22),
          displayDate: "22/09/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 10, 5),
          displayDate: "05/10/2021"
      },
      colB: {
          JSDate: d(2021, 9, 27),
          displayDate: "27/09/2021"
      },
      colC: {
          JSDate: d(2021, 9, 30),
          displayDate: "30/09/2021"
      },
      colD: {
          JSDate: d(2021, 10, 1),
          displayDate: "01/10/2021"
      },
      colE: {
          JSDate: d(2021, 10, 4),
          displayDate: "04/10/2021"
      },
      colF: {
          JSDate: d(2021, 10, 5),
          displayDate: "05/10/2021"
      },
      colG: {
          JSDate: d(2021, 10, 6),
          displayDate: "06/10/2021"
      },
      colH: {
          JSDate: d(2021, 10, 7),
          displayDate: "07/10/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 10, 19),
          displayDate: "19/10/2021"
      },
      colB: {
          JSDate: d(2021, 10, 11),
          displayDate: "11/10/2021"
      },
      colC: {
          JSDate: d(2021, 10, 14),
          displayDate: "14/10/2021"
      },
      colD: {
          JSDate: d(2021, 10, 15),
          displayDate: "15/10/2021"
      },
      colE: {
          JSDate: d(2021, 10, 18),
          displayDate: "18/10/2021"
      },
      colF: {
          JSDate: d(2021, 10, 19),
          displayDate: "19/10/2021"
      },
      colG: {
          JSDate: d(2021, 10, 20),
          displayDate: "20/10/2021"
      },
      colH: {
          JSDate: d(2021, 10, 21),
          displayDate: "21/10/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 11, 5),
          displayDate: "05/11/2021"
      },
      colB: {
          JSDate: d(2021, 10, 28),
          displayDate: "28/10/2021"
      },
      colC: {
          JSDate: d(2021, 11, 2),
          displayDate: "02/11/2021"
      },
      colD: {
          JSDate: d(2021, 11, 3),
          displayDate: "03/11/2021"
      },
      colE: {
          JSDate: d(2021, 11, 4),
          displayDate: "04/11/2021"
      },
      colF: {
          JSDate: d(2021, 11, 5),
          displayDate: "05/11/2021"
      },
      colG: {
          JSDate: d(2021, 11, 8),
          displayDate: "08/11/2021"
      },
      colH: {
          JSDate: d(2021, 11, 9),
          displayDate: "09/11/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 11, 19),
          displayDate: "19/11/2021"
      },
      colB: {
          JSDate: d(2021, 11, 11),
          displayDate: "11/11/2021"
      },
      colC: {
          JSDate: d(2021, 11, 16),
          displayDate: "16/11/2021"
      },
      colD: {
          JSDate: d(2021, 11, 17),
          displayDate: "17/11/2021"
      },
      colE: {
          JSDate: d(2021, 11, 18),
          displayDate: "18/11/2021"
      },
      colF: {
          JSDate: d(2021, 11, 19),
          displayDate: "19/11/2021"
      },
      colG: {
          JSDate: d(2021, 11, 22),
          displayDate: "22/11/2021"
      },
      colH: {
          JSDate: d(2021, 11, 23),
          displayDate: "23/11/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 12, 5),
          displayDate: "05/12/2021"
      },
      colB: {
          JSDate: d(2021, 11, 26),
          displayDate: "26/11/2021"
      },
      colC: {
          JSDate: d(2021, 12, 1),
          displayDate: "01/12/2021"
      },
      colD: {
          JSDate: d(2021, 12, 2),
          displayDate: "02/12/2021"
      },
      colE: {
          JSDate: d(2021, 12, 3),
          displayDate: "03/12/2021"
      },
      colF: {
          JSDate: d(2021, 12, 6),
          displayDate: "06/12/2021"
      },
      colG: {
          JSDate: d(2021, 12, 7),
          displayDate: "07/12/2021"
      },
      colH: {
          JSDate: d(2021, 12, 8),
          displayDate: "08/12/2021"
      }
  },
  {
      colA: {
          JSDate: d(2021, 12, 19),
          displayDate: "19/12/2021"
      },
      colB: {
          JSDate: d(2021, 12, 10),
          displayDate: "10/12/2021"
      },
      colC: {
          JSDate: d(2021, 12, 15),
          displayDate: "15/12/2021"
      },
      colD: {
          JSDate: d(2021, 12, 16),
          displayDate: "16/12/2021"
      },
      colE: {
          JSDate: d(2021, 12, 17),
          displayDate: "17/12/2021"
      },
      colF: {
          JSDate: d(2021, 12, 20),
          displayDate: "20/12/2021"
      },
      colG: {
          JSDate: d(2021, 12, 21),
          displayDate: "21/12/2021"
      },
      colH: {
          JSDate: d(2021, 12, 22),
          displayDate: "22/12/2021"
      }
  }
]

const mockResults2022 = [
  {
      colA: {
          JSDate: d(2022, 1, 5),
          displayDate: "05/01/2022"
      },
      colB: {
          JSDate: d(2021, 12, 23),
          displayDate: "23/12/2021"
      },
      colC: {
          JSDate: d(2021, 12, 30),
          displayDate: "30/12/2021"
      },
      colD: {
          JSDate: d(2021, 12, 31),
          displayDate: "31/12/2021"
      },
      colE: {
          JSDate: d(2022, 1, 4),
          displayDate: "04/01/2022"
      },
      colF: {
          JSDate: d(2022, 1, 5),
          displayDate: "05/01/2022"
      },
      colG: {
          JSDate: d(2022, 1, 6),
          displayDate: "06/01/2022"
      },
      colH: {
          JSDate: d(2022, 1, 7),
          displayDate: "07/01/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 1, 19),
          displayDate: "19/01/2022"
      },
      colB: {
          JSDate: d(2022, 1, 11),
          displayDate: "11/01/2022"
      },
      colC: {
          JSDate: d(2022, 1, 14),
          displayDate: "14/01/2022"
      },
      colD: {
          JSDate: d(2022, 1, 17),
          displayDate: "17/01/2022"
      },
      colE: {
          JSDate: d(2022, 1, 18),
          displayDate: "18/01/2022"
      },
      colF: {
          JSDate: d(2022, 1, 19),
          displayDate: "19/01/2022"
      },
      colG: {
          JSDate: d(2022, 1, 20),
          displayDate: "20/01/2022"
      },
      colH: {
          JSDate: d(2022, 1, 21),
          displayDate: "21/01/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 2, 5),
          displayDate: "05/02/2022"
      },
      colB: {
          JSDate: d(2022, 1, 28),
          displayDate: "28/01/2022"
      },
      colC: {
          JSDate: d(2022, 2, 2),
          displayDate: "02/02/2022"
      },
      colD: {
          JSDate: d(2022, 2, 3),
          displayDate: "03/02/2022"
      },
      colE: {
          JSDate: d(2022, 2, 4),
          displayDate: "04/02/2022"
      },
      colF: {
          JSDate: d(2022, 2, 7),
          displayDate: "07/02/2022"
      },
      colG: {
          JSDate: d(2022, 2, 8),
          displayDate: "08/02/2022"
      },
      colH: {
          JSDate: d(2022, 2, 9),
          displayDate: "09/02/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 2, 19),
          displayDate: "19/02/2022"
      },
      colB: {
          JSDate: d(2022, 2, 11),
          displayDate: "11/02/2022"
      },
      colC: {
          JSDate: d(2022, 2, 16),
          displayDate: "16/02/2022"
      },
      colD: {
          JSDate: d(2022, 2, 17),
          displayDate: "17/02/2022"
      },
      colE: {
          JSDate: d(2022, 2, 18),
          displayDate: "18/02/2022"
      },
      colF: {
          JSDate: d(2022, 2, 21),
          displayDate: "21/02/2022"
      },
      colG: {
          JSDate: d(2022, 2, 22),
          displayDate: "22/02/2022"
      },
      colH: {
          JSDate: d(2022, 2, 23),
          displayDate: "23/02/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 3, 5),
          displayDate: "05/03/2022"
      },
      colB: {
          JSDate: d(2022, 2, 25),
          displayDate: "25/02/2022"
      },
      colC: {
          JSDate: d(2022, 3, 2),
          displayDate: "02/03/2022"
      },
      colD: {
          JSDate: d(2022, 3, 3),
          displayDate: "03/03/2022"
      },
      colE: {
          JSDate: d(2022, 3, 4),
          displayDate: "04/03/2022"
      },
      colF: {
          JSDate: d(2022, 3, 7),
          displayDate: "07/03/2022"
      },
      colG: {
          JSDate: d(2022, 3, 8),
          displayDate: "08/03/2022"
      },
      colH: {
          JSDate: d(2022, 3, 9),
          displayDate: "09/03/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 3, 19),
          displayDate: "19/03/2022"
      },
      colB: {
          JSDate: d(2022, 3, 11),
          displayDate: "11/03/2022"
      },
      colC: {
          JSDate: d(2022, 3, 16),
          displayDate: "16/03/2022"
      },
      colD: {
          JSDate: d(2022, 3, 17),
          displayDate: "17/03/2022"
      },
      colE: {
          JSDate: d(2022, 3, 18),
          displayDate: "18/03/2022"
      },
      colF: {
          JSDate: d(2022, 3, 21),
          displayDate: "21/03/2022"
      },
      colG: {
          JSDate: d(2022, 3, 22),
          displayDate: "22/03/2022"
      },
      colH: {
          JSDate: d(2022, 3, 23),
          displayDate: "23/03/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 4, 5),
          displayDate: "05/04/2022"
      },
      colB: {
          JSDate: d(2022, 3, 28),
          displayDate: "28/03/2022"
      },
      colC: {
          JSDate: d(2022, 3, 31),
          displayDate: "31/03/2022"
      },
      colD: {
          JSDate: d(2022, 4, 1),
          displayDate: "01/04/2022"
      },
      colE: {
          JSDate: d(2022, 4, 4),
          displayDate: "04/04/2022"
      },
      colF: {
          JSDate: d(2022, 4, 5),
          displayDate: "05/04/2022"
      },
      colG: {
          JSDate: d(2022, 4, 6),
          displayDate: "06/04/2022"
      },
      colH: {
          JSDate: d(2022, 4, 7),
          displayDate: "07/04/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 4, 19),
          displayDate: "19/04/2022"
      },
      colB: {
          JSDate: d(2022, 4, 7),
          displayDate: "07/04/2022"
      },
      colC: {
          JSDate: d(2022, 4, 12),
          displayDate: "12/04/2022"
      },
      colD: {
          JSDate: d(2022, 4, 13),
          displayDate: "13/04/2022"
      },
      colE: {
          JSDate: d(2022, 4, 14),
          displayDate: "14/04/2022"
      },
      colF: {
          JSDate: d(2022, 4, 19),
          displayDate: "19/04/2022"
      },
      colG: {
          JSDate: d(2022, 4, 20),
          displayDate: "20/04/2022"
      },
      colH: {
          JSDate: d(2022, 4, 21),
          displayDate: "21/04/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 5, 5),
          displayDate: "05/05/2022"
      },
      colB: {
          JSDate: d(2022, 4, 26),
          displayDate: "26/04/2022"
      },
      colC: {
          JSDate: d(2022, 4, 29),
          displayDate: "29/04/2022"
      },
      colD: {
          JSDate: d(2022, 5, 3),
          displayDate: "03/05/2022"
      },
      colE: {
          JSDate: d(2022, 5, 4),
          displayDate: "04/05/2022"
      },
      colF: {
          JSDate: d(2022, 5, 5),
          displayDate: "05/05/2022"
      },
      colG: {
          JSDate: d(2022, 5, 6),
          displayDate: "06/05/2022"
      },
      colH: {
          JSDate: d(2022, 5, 9),
          displayDate: "09/05/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 5, 19),
          displayDate: "19/05/2022"
      },
      colB: {
          JSDate: d(2022, 5, 11),
          displayDate: "11/05/2022"
      },
      colC: {
          JSDate: d(2022, 5, 16),
          displayDate: "16/05/2022"
      },
      colD: {
          JSDate: d(2022, 5, 17),
          displayDate: "17/05/2022"
      },
      colE: {
          JSDate: d(2022, 5, 18),
          displayDate: "18/05/2022"
      },
      colF: {
          JSDate: d(2022, 5, 19),
          displayDate: "19/05/2022"
      },
      colG: {
          JSDate: d(2022, 5, 20),
          displayDate: "20/05/2022"
      },
      colH: {
          JSDate: d(2022, 5, 23),
          displayDate: "23/05/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 6, 5),
          displayDate: "05/06/2022"
      },
      colB: {
          JSDate: d(2022, 5, 25),
          displayDate: "25/05/2022"
      },
      colC: {
          JSDate: d(2022, 5, 30),
          displayDate: "30/05/2022"
      },
      colD: {
          JSDate: d(2022, 5, 31),
          displayDate: "31/05/2022"
      },
      colE: {
          JSDate: d(2022, 6, 1),
          displayDate: "01/06/2022"
      },
      colF: {
          JSDate: d(2022, 6, 6),
          displayDate: "06/06/2022"
      },
      colG: {
          JSDate: d(2022, 6, 7),
          displayDate: "07/06/2022"
      },
      colH: {
          JSDate: d(2022, 6, 8),
          displayDate: "08/06/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 6, 19),
          displayDate: "19/06/2022"
      },
      colB: {
          JSDate: d(2022, 6, 10),
          displayDate: "10/06/2022"
      },
      colC: {
          JSDate: d(2022, 6, 15),
          displayDate: "15/06/2022"
      },
      colD: {
          JSDate: d(2022, 6, 16),
          displayDate: "16/06/2022"
      },
      colE: {
          JSDate: d(2022, 6, 17),
          displayDate: "17/06/2022"
      },
      colF: {
          JSDate: d(2022, 6, 20),
          displayDate: "20/06/2022"
      },
      colG: {
          JSDate: d(2022, 6, 21),
          displayDate: "21/06/2022"
      },
      colH: {
          JSDate: d(2022, 6, 22),
          displayDate: "22/06/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 7, 5),
          displayDate: "05/07/2022"
      },
      colB: {
          JSDate: d(2022, 6, 27),
          displayDate: "27/06/2022"
      },
      colC: {
          JSDate: d(2022, 6, 30),
          displayDate: "30/06/2022"
      },
      colD: {
          JSDate: d(2022, 7, 1),
          displayDate: "01/07/2022"
      },
      colE: {
          JSDate: d(2022, 7, 4),
          displayDate: "04/07/2022"
      },
      colF: {
          JSDate: d(2022, 7, 5),
          displayDate: "05/07/2022"
      },
      colG: {
          JSDate: d(2022, 7, 6),
          displayDate: "06/07/2022"
      },
      colH: {
          JSDate: d(2022, 7, 7),
          displayDate: "07/07/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 7, 19),
          displayDate: "19/07/2022"
      },
      colB: {
          JSDate: d(2022, 7, 11),
          displayDate: "11/07/2022"
      },
      colC: {
          JSDate: d(2022, 7, 14),
          displayDate: "14/07/2022"
      },
      colD: {
          JSDate: d(2022, 7, 15),
          displayDate: "15/07/2022"
      },
      colE: {
          JSDate: d(2022, 7, 18),
          displayDate: "18/07/2022"
      },
      colF: {
          JSDate: d(2022, 7, 19),
          displayDate: "19/07/2022"
      },
      colG: {
          JSDate: d(2022, 7, 20),
          displayDate: "20/07/2022"
      },
      colH: {
          JSDate: d(2022, 7, 21),
          displayDate: "21/07/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 8, 5),
          displayDate: "05/08/2022"
      },
      colB: {
          JSDate: d(2022, 7, 28),
          displayDate: "28/07/2022"
      },
      colC: {
          JSDate: d(2022, 8, 2),
          displayDate: "02/08/2022"
      },
      colD: {
          JSDate: d(2022, 8, 3),
          displayDate: "03/08/2022"
      },
      colE: {
          JSDate: d(2022, 8, 4),
          displayDate: "04/08/2022"
      },
      colF: {
          JSDate: d(2022, 8, 5),
          displayDate: "05/08/2022"
      },
      colG: {
          JSDate: d(2022, 8, 8),
          displayDate: "08/08/2022"
      },
      colH: {
          JSDate: d(2022, 8, 9),
          displayDate: "09/08/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 8, 19),
          displayDate: "19/08/2022"
      },
      colB: {
          JSDate: d(2022, 8, 11),
          displayDate: "11/08/2022"
      },
      colC: {
          JSDate: d(2022, 8, 16),
          displayDate: "16/08/2022"
      },
      colD: {
          JSDate: d(2022, 8, 17),
          displayDate: "17/08/2022"
      },
      colE: {
          JSDate: d(2022, 8, 18),
          displayDate: "18/08/2022"
      },
      colF: {
          JSDate: d(2022, 8, 19),
          displayDate: "19/08/2022"
      },
      colG: {
          JSDate: d(2022, 8, 22),
          displayDate: "22/08/2022"
      },
      colH: {
          JSDate: d(2022, 8, 23),
          displayDate: "23/08/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 9, 5),
          displayDate: "05/09/2022"
      },
      colB: {
          JSDate: d(2022, 8, 25),
          displayDate: "25/08/2022"
      },
      colC: {
          JSDate: d(2022, 8, 31),
          displayDate: "31/08/2022"
      },
      colD: {
          JSDate: d(2022, 9, 1),
          displayDate: "01/09/2022"
      },
      colE: {
          JSDate: d(2022, 9, 2),
          displayDate: "02/09/2022"
      },
      colF: {
          JSDate: d(2022, 9, 5),
          displayDate: "05/09/2022"
      },
      colG: {
          JSDate: d(2022, 9, 6),
          displayDate: "06/09/2022"
      },
      colH: {
          JSDate: d(2022, 9, 7),
          displayDate: "07/09/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 9, 19),
          displayDate: "19/09/2022"
      },
      colB: {
          JSDate: d(2022, 9, 9),
          displayDate: "09/09/2022"
      },
      colC: {
          JSDate: d(2022, 9, 14),
          displayDate: "14/09/2022"
      },
      colD: {
          JSDate: d(2022, 9, 15),
          displayDate: "15/09/2022"
      },
      colE: {
          JSDate: d(2022, 9, 16),
          displayDate: "16/09/2022"
      },
      colF: {
          JSDate: d(2022, 9, 20),
          displayDate: "20/09/2022"
      },
      colG: {
          JSDate: d(2022, 9, 21),
          displayDate: "21/09/2022"
      },
      colH: {
          JSDate: d(2022, 9, 22),
          displayDate: "22/09/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 10, 5),
          displayDate: "05/10/2022"
      },
      colB: {
          JSDate: d(2022, 9, 27),
          displayDate: "27/09/2022"
      },
      colC: {
          JSDate: d(2022, 9, 30),
          displayDate: "30/09/2022"
      },
      colD: {
          JSDate: d(2022, 10, 3),
          displayDate: "03/10/2022"
      },
      colE: {
          JSDate: d(2022, 10, 4),
          displayDate: "04/10/2022"
      },
      colF: {
          JSDate: d(2022, 10, 5),
          displayDate: "05/10/2022"
      },
      colG: {
          JSDate: d(2022, 10, 6),
          displayDate: "06/10/2022"
      },
      colH: {
          JSDate: d(2022, 10, 7),
          displayDate: "07/10/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 10, 19),
          displayDate: "19/10/2022"
      },
      colB: {
          JSDate: d(2022, 10, 11),
          displayDate: "11/10/2022"
      },
      colC: {
          JSDate: d(2022, 10, 14),
          displayDate: "14/10/2022"
      },
      colD: {
          JSDate: d(2022, 10, 17),
          displayDate: "17/10/2022"
      },
      colE: {
          JSDate: d(2022, 10, 18),
          displayDate: "18/10/2022"
      },
      colF: {
          JSDate: d(2022, 10, 19),
          displayDate: "19/10/2022"
      },
      colG: {
          JSDate: d(2022, 10, 20),
          displayDate: "20/10/2022"
      },
      colH: {
          JSDate: d(2022, 10, 21),
          displayDate: "21/10/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 11, 5),
          displayDate: "05/11/2022"
      },
      colB: {
          JSDate: d(2022, 10, 28),
          displayDate: "28/10/2022"
      },
      colC: {
          JSDate: d(2022, 11, 2),
          displayDate: "02/11/2022"
      },
      colD: {
          JSDate: d(2022, 11, 3),
          displayDate: "03/11/2022"
      },
      colE: {
          JSDate: d(2022, 11, 4),
          displayDate: "04/11/2022"
      },
      colF: {
          JSDate: d(2022, 11, 7),
          displayDate: "07/11/2022"
      },
      colG: {
          JSDate: d(2022, 11, 8),
          displayDate: "08/11/2022"
      },
      colH: {
          JSDate: d(2022, 11, 9),
          displayDate: "09/11/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 11, 19),
          displayDate: "19/11/2022"
      },
      colB: {
          JSDate: d(2022, 11, 11),
          displayDate: "11/11/2022"
      },
      colC: {
          JSDate: d(2022, 11, 16),
          displayDate: "16/11/2022"
      },
      colD: {
          JSDate: d(2022, 11, 17),
          displayDate: "17/11/2022"
      },
      colE: {
          JSDate: d(2022, 11, 18),
          displayDate: "18/11/2022"
      },
      colF: {
          JSDate: d(2022, 11, 21),
          displayDate: "21/11/2022"
      },
      colG: {
          JSDate: d(2022, 11, 22),
          displayDate: "22/11/2022"
      },
      colH: {
          JSDate: d(2022, 11, 23),
          displayDate: "23/11/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 12, 5),
          displayDate: "05/12/2022"
      },
      colB: {
          JSDate: d(2022, 11, 25),
          displayDate: "25/11/2022"
      },
      colC: {
          JSDate: d(2022, 11, 30),
          displayDate: "30/11/2022"
      },
      colD: {
          JSDate: d(2022, 12, 1),
          displayDate: "01/12/2022"
      },
      colE: {
          JSDate: d(2022, 12, 2),
          displayDate: "02/12/2022"
      },
      colF: {
          JSDate: d(2022, 12, 5),
          displayDate: "05/12/2022"
      },
      colG: {
          JSDate: d(2022, 12, 6),
          displayDate: "06/12/2022"
      },
      colH: {
          JSDate: d(2022, 12, 7),
          displayDate: "07/12/2022"
      }
  },
  {
      colA: {
          JSDate: d(2022, 12, 19),
          displayDate: "19/12/2022"
      },
      colB: {
          JSDate: d(2022, 12, 9),
          displayDate: "09/12/2022"
      },
      colC: {
          JSDate: d(2022, 12, 14),
          displayDate: "14/12/2022"
      },
      colD: {
          JSDate: d(2022, 12, 15),
          displayDate: "15/12/2022"
      },
      colE: {
          JSDate: d(2022, 12, 16),
          displayDate: "16/12/2022"
      },
      colF: {
          JSDate: d(2022, 12, 19),
          displayDate: "19/12/2022"
      },
      colG: {
          JSDate: d(2022, 12, 20),
          displayDate: "20/12/2022"
      },
      colH: {
          JSDate: d(2022, 12, 21),
          displayDate: "21/12/2022"
      }
  }
]

const mockResults2023 = [
    {
        colA: {
            JSDate: d(2023, 1, 5),
            displayDate: "05/01/2023"
        },
        colB: {
            JSDate: d(2022, 12, 23),
            displayDate: "23/12/2022"
        },
        colC: {
            JSDate: d(2022, 12, 30),
            displayDate: "30/12/2022"
        },
        colD: {
            JSDate: d(2023, 1, 3),
            displayDate: "03/01/2023"
        },
        colE: {
            JSDate: d(2023, 1, 4),
            displayDate: "04/01/2023"
        },
        colF: {
            JSDate: d(2023, 1, 5),
            displayDate: "05/01/2023"
        },
        colG: {
            JSDate: d(2023, 1, 6),
            displayDate: "06/01/2023"
        },
        colH: {
            JSDate: d(2023, 1, 9),
            displayDate: "09/01/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 1, 19),
            displayDate: "19/01/2023"
        },
        colB: {
            JSDate: d(2023, 1, 11),
            displayDate: "11/01/2023"
        },
        colC: {
            JSDate: d(2023, 1, 16),
            displayDate: "16/01/2023"
        },
        colD: {
            JSDate: d(2023, 1, 17),
            displayDate: "17/01/2023"
        },
        colE: {
            JSDate: d(2023, 1, 18),
            displayDate: "18/01/2023"
        },
        colF: {
            JSDate: d(2023, 1, 19),
            displayDate: "19/01/2023"
        },
        colG: {
            JSDate: d(2023, 1, 20),
            displayDate: "20/01/2023"
        },
        colH: {
            JSDate: d(2023, 1, 23),
            displayDate: "23/01/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 2, 5),
            displayDate: "05/02/2023"
        },
        colB: {
            JSDate: d(2023, 1, 27),
            displayDate: "27/01/2023"
        },
        colC: {
            JSDate: d(2023, 2, 1),
            displayDate: "01/02/2023"
        },
        colD: {
            JSDate: d(2023, 2, 2),
            displayDate: "02/02/2023"
        },
        colE: {
            JSDate: d(2023, 2, 3),
            displayDate: "03/02/2023"
        },
        colF: {
            JSDate: d(2023, 2, 6),
            displayDate: "06/02/2023"
        },
        colG: {
            JSDate: d(2023, 2, 7),
            displayDate: "07/02/2023"
        },
        colH: {
            JSDate: d(2023, 2, 8),
            displayDate: "08/02/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 2, 19),
            displayDate: "19/02/2023"
        },
        colB: {
            JSDate: d(2023, 2, 10),
            displayDate: "10/02/2023"
        },
        colC: {
            JSDate: d(2023, 2, 15),
            displayDate: "15/02/2023"
        },
        colD: {
            JSDate: d(2023, 2, 16),
            displayDate: "16/02/2023"
        },
        colE: {
            JSDate: d(2023, 2, 17),
            displayDate: "17/02/2023"
        },
        colF: {
            JSDate: d(2023, 2, 20),
            displayDate: "20/02/2023"
        },
        colG: {
            JSDate: d(2023, 2, 21),
            displayDate: "21/02/2023"
        },
        colH: {
            JSDate: d(2023, 2, 22),
            displayDate: "22/02/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 3, 5),
            displayDate: "05/03/2023"
        },
        colB: {
            JSDate: d(2023, 2, 24),
            displayDate: "24/02/2023"
        },
        colC: {
            JSDate: d(2023, 3, 1),
            displayDate: "01/03/2023"
        },
        colD: {
            JSDate: d(2023, 3, 2),
            displayDate: "02/03/2023"
        },
        colE: {
            JSDate: d(2023, 3, 3),
            displayDate: "03/03/2023"
        },
        colF: {
            JSDate: d(2023, 3, 6),
            displayDate: "06/03/2023"
        },
        colG: {
            JSDate: d(2023, 3, 7),
            displayDate: "07/03/2023"
        },
        colH: {
            JSDate: d(2023, 3, 8),
            displayDate: "08/03/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 3, 19),
            displayDate: "19/03/2023"
        },
        colB: {
            JSDate: d(2023, 3, 10),
            displayDate: "10/03/2023"
        },
        colC: {
            JSDate: d(2023, 3, 15),
            displayDate: "15/03/2023"
        },
        colD: {
            JSDate: d(2023, 3, 16),
            displayDate: "16/03/2023"
        },
        colE: {
            JSDate: d(2023, 3, 17),
            displayDate: "17/03/2023"
        },
        colF: {
            JSDate: d(2023, 3, 20),
            displayDate: "20/03/2023"
        },
        colG: {
            JSDate: d(2023, 3, 21),
            displayDate: "21/03/2023"
        },
        colH: {
            JSDate: d(2023, 3, 22),
            displayDate: "22/03/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 4, 5),
            displayDate: "05/04/2023"
        },
        colB: {
            JSDate: d(2023, 3, 28),
            displayDate: "28/03/2023"
        },
        colC: {
            JSDate: d(2023, 3, 31),
            displayDate: "31/03/2023"
        },
        colD: {
            JSDate: d(2023, 4, 3),
            displayDate: "03/04/2023"
        },
        colE: {
            JSDate: d(2023, 4, 4),
            displayDate: "04/04/2023"
        },
        colF: {
            JSDate: d(2023, 4, 5),
            displayDate: "05/04/2023"
        },
        colG: {
            JSDate: d(2023, 4, 6),
            displayDate: "06/04/2023"
        },
        colH: {
            JSDate: d(2023, 4, 11),
            displayDate: "11/04/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 4, 19),
            displayDate: "19/04/2023"
        },
        colB: {
            JSDate: d(2023, 4, 11),
            displayDate: "11/04/2023"
        },
        colC: {
            JSDate: d(2023, 4, 14),
            displayDate: "14/04/2023"
        },
        colD: {
            JSDate: d(2023, 4, 17),
            displayDate: "17/04/2023"
        },
        colE: {
            JSDate: d(2023, 4, 18),
            displayDate: "18/04/2023"
        },
        colF: {
            JSDate: d(2023, 4, 19),
            displayDate: "19/04/2023"
        },
        colG: {
            JSDate: d(2023, 4, 20),
            displayDate: "20/04/2023"
        },
        colH: {
            JSDate: d(2023, 4, 21),
            displayDate: "21/04/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 5, 5),
            displayDate: "05/05/2023"
        },
        colB: {
            JSDate: d(2023, 4, 26),
            displayDate: "26/04/2023"
        },
        colC: {
            JSDate: d(2023, 5, 2),
            displayDate: "02/05/2023"
        },
        colD: {
            JSDate: d(2023, 5, 3),
            displayDate: "03/05/2023"
        },
        colE: {
            JSDate: d(2023, 5, 4),
            displayDate: "04/05/2023"
        },
        colF: {
            JSDate: d(2023, 5, 5),
            displayDate: "05/05/2023"
        },
        colG: {
            JSDate: d(2023, 5, 9),
            displayDate: "09/05/2023"
        },
        colH: {
            JSDate: d(2023, 5, 10),
            displayDate: "10/05/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 5, 19),
            displayDate: "19/05/2023"
        },
        colB: {
            JSDate: d(2023, 5, 11),
            displayDate: "11/05/2023"
        },
        colC: {
            JSDate: d(2023, 5, 16),
            displayDate: "16/05/2023"
        },
        colD: {
            JSDate: d(2023, 5, 17),
            displayDate: "17/05/2023"
        },
        colE: {
            JSDate: d(2023, 5, 18),
            displayDate: "18/05/2023"
        },
        colF: {
            JSDate: d(2023, 5, 19),
            displayDate: "19/05/2023"
        },
        colG: {
            JSDate: d(2023, 5, 22),
            displayDate: "22/05/2023"
        },
        colH: {
            JSDate: d(2023, 5, 23),
            displayDate: "23/05/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 6, 5),
            displayDate: "05/06/2023"
        },
        colB: {
            JSDate: d(2023, 5, 25),
            displayDate: "25/05/2023"
        },
        colC: {
            JSDate: d(2023, 5, 31),
            displayDate: "31/05/2023"
        },
        colD: {
            JSDate: d(2023, 6, 1),
            displayDate: "01/06/2023"
        },
        colE: {
            JSDate: d(2023, 6, 2),
            displayDate: "02/06/2023"
        },
        colF: {
            JSDate: d(2023, 6, 5),
            displayDate: "05/06/2023"
        },
        colG: {
            JSDate: d(2023, 6, 6),
            displayDate: "06/06/2023"
        },
        colH: {
            JSDate: d(2023, 6, 7),
            displayDate: "07/06/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 6, 19),
            displayDate: "19/06/2023"
        },
        colB: {
            JSDate: d(2023, 6, 9),
            displayDate: "09/06/2023"
        },
        colC: {
            JSDate: d(2023, 6, 14),
            displayDate: "14/06/2023"
        },
        colD: {
            JSDate: d(2023, 6, 15),
            displayDate: "15/06/2023"
        },
        colE: {
            JSDate: d(2023, 6, 16),
            displayDate: "16/06/2023"
        },
        colF: {
            JSDate: d(2023, 6, 19),
            displayDate: "19/06/2023"
        },
        colG: {
            JSDate: d(2023, 6, 20),
            displayDate: "20/06/2023"
        },
        colH: {
            JSDate: d(2023, 6, 21),
            displayDate: "21/06/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 7, 5),
            displayDate: "05/07/2023"
        },
        colB: {
            JSDate: d(2023, 6, 27),
            displayDate: "27/06/2023"
        },
        colC: {
            JSDate: d(2023, 6, 30),
            displayDate: "30/06/2023"
        },
        colD: {
            JSDate: d(2023, 7, 3),
            displayDate: "03/07/2023"
        },
        colE: {
            JSDate: d(2023, 7, 4),
            displayDate: "04/07/2023"
        },
        colF: {
            JSDate: d(2023, 7, 5),
            displayDate: "05/07/2023"
        },
        colG: {
            JSDate: d(2023, 7, 6),
            displayDate: "06/07/2023"
        },
        colH: {
            JSDate: d(2023, 7, 7),
            displayDate: "07/07/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 7, 19),
            displayDate: "19/07/2023"
        },
        colB: {
            JSDate: d(2023, 7, 11),
            displayDate: "11/07/2023"
        },
        colC: {
            JSDate: d(2023, 7, 14),
            displayDate: "14/07/2023"
        },
        colD: {
            JSDate: d(2023, 7, 17),
            displayDate: "17/07/2023"
        },
        colE: {
            JSDate: d(2023, 7, 18),
            displayDate: "18/07/2023"
        },
        colF: {
            JSDate: d(2023, 7, 19),
            displayDate: "19/07/2023"
        },
        colG: {
            JSDate: d(2023, 7, 20),
            displayDate: "20/07/2023"
        },
        colH: {
            JSDate: d(2023, 7, 21),
            displayDate: "21/07/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 8, 5),
            displayDate: "05/08/2023"
        },
        colB: {
            JSDate: d(2023, 7, 28),
            displayDate: "28/07/2023"
        },
        colC: {
            JSDate: d(2023, 8, 2),
            displayDate: "02/08/2023"
        },
        colD: {
            JSDate: d(2023, 8, 3),
            displayDate: "03/08/2023"
        },
        colE: {
            JSDate: d(2023, 8, 4),
            displayDate: "04/08/2023"
        },
        colF: {
            JSDate: d(2023, 8, 7),
            displayDate: "07/08/2023"
        },
        colG: {
            JSDate: d(2023, 8, 8),
            displayDate: "08/08/2023"
        },
        colH: {
            JSDate: d(2023, 8, 9),
            displayDate: "09/08/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 8, 19),
            displayDate: "19/08/2023"
        },
        colB: {
            JSDate: d(2023, 8, 11),
            displayDate: "11/08/2023"
        },
        colC: {
            JSDate: d(2023, 8, 16),
            displayDate: "16/08/2023"
        },
        colD: {
            JSDate: d(2023, 8, 17),
            displayDate: "17/08/2023"
        },
        colE: {
            JSDate: d(2023, 8, 18),
            displayDate: "18/08/2023"
        },
        colF: {
            JSDate: d(2023, 8, 21),
            displayDate: "21/08/2023"
        },
        colG: {
            JSDate: d(2023, 8, 22),
            displayDate: "22/08/2023"
        },
        colH: {
            JSDate: d(2023, 8, 23),
            displayDate: "23/08/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 9, 5),
            displayDate: "05/09/2023"
        },
        colB: {
            JSDate: d(2023, 8, 25),
            displayDate: "25/08/2023"
        },
        colC: {
            JSDate: d(2023, 8, 31),
            displayDate: "31/08/2023"
        },
        colD: {
            JSDate: d(2023, 9, 1),
            displayDate: "01/09/2023"
        },
        colE: {
            JSDate: d(2023, 9, 4),
            displayDate: "04/09/2023"
        },
        colF: {
            JSDate: d(2023, 9, 5),
            displayDate: "05/09/2023"
        },
        colG: {
            JSDate: d(2023, 9, 6),
            displayDate: "06/09/2023"
        },
        colH: {
            JSDate: d(2023, 9, 7),
            displayDate: "07/09/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 9, 19),
            displayDate: "19/09/2023"
        },
        colB: {
            JSDate: d(2023, 9, 11),
            displayDate: "11/09/2023"
        },
        colC: {
            JSDate: d(2023, 9, 14),
            displayDate: "14/09/2023"
        },
        colD: {
            JSDate: d(2023, 9, 15),
            displayDate: "15/09/2023"
        },
        colE: {
            JSDate: d(2023, 9, 18),
            displayDate: "18/09/2023"
        },
        colF: {
            JSDate: d(2023, 9, 19),
            displayDate: "19/09/2023"
        },
        colG: {
            JSDate: d(2023, 9, 20),
            displayDate: "20/09/2023"
        },
        colH: {
            JSDate: d(2023, 9, 21),
            displayDate: "21/09/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 10, 5),
            displayDate: "05/10/2023"
        },
        colB: {
            JSDate: d(2023, 9, 27),
            displayDate: "27/09/2023"
        },
        colC: {
            JSDate: d(2023, 10, 2),
            displayDate: "02/10/2023"
        },
        colD: {
            JSDate: d(2023, 10, 3),
            displayDate: "03/10/2023"
        },
        colE: {
            JSDate: d(2023, 10, 4),
            displayDate: "04/10/2023"
        },
        colF: {
            JSDate: d(2023, 10, 5),
            displayDate: "05/10/2023"
        },
        colG: {
            JSDate: d(2023, 10, 6),
            displayDate: "06/10/2023"
        },
        colH: {
            JSDate: d(2023, 10, 9),
            displayDate: "09/10/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 10, 19),
            displayDate: "19/10/2023"
        },
        colB: {
            JSDate: d(2023, 10, 11),
            displayDate: "11/10/2023"
        },
        colC: {
            JSDate: d(2023, 10, 16),
            displayDate: "16/10/2023"
        },
        colD: {
            JSDate: d(2023, 10, 17),
            displayDate: "17/10/2023"
        },
        colE: {
            JSDate: d(2023, 10, 18),
            displayDate: "18/10/2023"
        },
        colF: {
            JSDate: d(2023, 10, 19),
            displayDate: "19/10/2023"
        },
        colG: {
            JSDate: d(2023, 10, 20),
            displayDate: "20/10/2023"
        },
        colH: {
            JSDate: d(2023, 10, 23),
            displayDate: "23/10/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 11, 5),
            displayDate: "05/11/2023"
        },
        colB: {
            JSDate: d(2023, 10, 27),
            displayDate: "27/10/2023"
        },
        colC: {
            JSDate: d(2023, 11, 1),
            displayDate: "01/11/2023"
        },
        colD: {
            JSDate: d(2023, 11, 2),
            displayDate: "02/11/2023"
        },
        colE: {
            JSDate: d(2023, 11, 3),
            displayDate: "03/11/2023"
        },
        colF: {
            JSDate: d(2023, 11, 6),
            displayDate: "06/11/2023"
        },
        colG: {
            JSDate: d(2023, 11, 7),
            displayDate: "07/11/2023"
        },
        colH: {
            JSDate: d(2023, 11, 8),
            displayDate: "08/11/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 11, 19),
            displayDate: "19/11/2023"
        },
        colB: {
            JSDate: d(2023, 11, 10),
            displayDate: "10/11/2023"
        },
        colC: {
            JSDate: d(2023, 11, 15),
            displayDate: "15/11/2023"
        },
        colD: {
            JSDate: d(2023, 11, 16),
            displayDate: "16/11/2023"
        },
        colE: {
            JSDate: d(2023, 11, 17),
            displayDate: "17/11/2023"
        },
        colF: {
            JSDate: d(2023, 11, 20),
            displayDate: "20/11/2023"
        },
        colG: {
            JSDate: d(2023, 11, 21),
            displayDate: "21/11/2023"
        },
        colH: {
            JSDate: d(2023, 11, 22),
            displayDate: "22/11/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 12, 5),
            displayDate: "05/12/2023"
        },
        colB: {
            JSDate: d(2023, 11, 27),
            displayDate: "27/11/2023"
        },
        colC: {
            JSDate: d(2023, 11, 30),
            displayDate: "30/11/2023"
        },
        colD: {
            JSDate: d(2023, 12, 1),
            displayDate: "01/12/2023"
        },
        colE: {
            JSDate: d(2023, 12, 4),
            displayDate: "04/12/2023"
        },
        colF: {
            JSDate: d(2023, 12, 5),
            displayDate: "05/12/2023"
        },
        colG: {
            JSDate: d(2023, 12, 6),
            displayDate: "06/12/2023"
        },
        colH: {
            JSDate: d(2023, 12, 7),
            displayDate: "07/12/2023"
        }
    },
    {
        colA: {
            JSDate: d(2023, 12, 19),
            displayDate: "19/12/2023"
        },
        colB: {
            JSDate: d(2023, 12, 11),
            displayDate: "11/12/2023"
        },
        colC: {
            JSDate: d(2023, 12, 14),
            displayDate: "14/12/2023"
        },
        colD: {
            JSDate: d(2023, 12, 15),
            displayDate: "15/12/2023"
        },
        colE: {
            JSDate: d(2023, 12, 18),
            displayDate: "18/12/2023"
        },
        colF: {
            JSDate: d(2023, 12, 19),
            displayDate: "19/12/2023"
        },
        colG: {
            JSDate: d(2023, 12, 20),
            displayDate: "20/12/2023"
        },
        colH: {
            JSDate: d(2023, 12, 21),
            displayDate: "21/12/2023"
        }
    }
]

const columns = [
  "colA",
  "colB",
  "colC",
  "colD",
  "colE",
  "colF",
  "colG",
  "colH",
];

const convertJSDateToDMY = (date) => {
  let day = date.getDate().toLocaleString("en-US", { minimumIntegerDigits: 2 });
  let month = (date.getMonth() + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  let year = date.getFullYear();
  let ukDate = `${day}/${month}/${year}`;
  return ukDate;
};

const convertUKDateToGov = (date) => {
  let year = date.slice(6, 10);
  let month = date.slice(3, 5);
  // Remove leading 0s
  if (month.slice(0, 1) === "0") {
    month = month.slice(1);
  }
  let day = date.slice(0, 2);
  if (day.slice(0, 1) === "0") {
    day = day.slice(1);
  }
  let dateString = `d(${year}, ${month}, ${day})`;
  return dateString;
};

// Convert original mock data
const convertMock = (original) => {
  const addedResults = [];
  for (let i = 0; i < 24; i++) {
    const rowObject = {};
    for (let j = 0; j < columns.length; j++) {
      const JSDate = original[columns[j]][i];
      const dateString = convertJSDateToDMY(JSDate);
      const date = convertUKDateToGov(dateString);
      rowObject[columns[j]] = {
        JSDate: date,
        displayDate: dateString,
      };
    }
    addedResults.push(rowObject);
  }
  console.log(addedResults);
}

const year2020original = {
  colA: [
    d(2020, 1, 5),
    d(2020, 1, 19),
    d(2020, 2, 5),
    d(2020, 2, 19),
    d(2020, 3, 5),
    d(2020, 3, 19),
    d(2020, 4, 5),
    d(2020, 4, 19),
    d(2020, 5, 5),
    d(2020, 5, 19),
    d(2020, 6, 5),
    d(2020, 6, 19),
    d(2020, 7, 5),
    d(2020, 7, 19),
    d(2020, 8, 5),
    d(2020, 8, 19),
    d(2020, 9, 5),
    d(2020, 9, 19),
    d(2020, 10, 5),
    d(2020, 10, 19),
    d(2020, 11, 5),
    d(2020, 11, 19),
    d(2020, 12, 5),
    d(2020, 12, 19),
  ],
  colB: [
    d(2019, 12, 24),
    d(2020, 1, 10),
    d(2020, 1, 28),
    d(2020, 2, 11),
    d(2020, 2, 26),
    d(2020, 3, 11),
    d(2020, 3, 27),
    d(2020, 4, 8),
    d(2020, 4, 27),
    d(2020, 5, 11),
    d(2020, 5, 28),
    d(2020, 6, 11),
    d(2020, 6, 26),
    d(2020, 7, 10),
    d(2020, 7, 28),
    d(2020, 8, 11),
    d(2020, 8, 27),
    d(2020, 9, 11),
    d(2020, 9, 25),
    d(2020, 10, 9),
    d(2020, 10, 28),
    d(2020, 11, 11),
    d(2020, 11, 27),
    d(2020, 12, 11),
  ],
  colC: [
    d(2019, 12, 31),
    d(2020, 1, 15),
    d(2020, 1, 31),
    d(2020, 2, 14),
    d(2020, 3, 2),
    d(2020, 3, 16),
    d(2020, 4, 1),
    d(2020, 4, 15),
    d(2020, 4, 30),
    d(2020, 5, 14),
    d(2020, 6, 2),
    d(2020, 6, 16),
    d(2020, 7, 1),
    d(2020, 7, 15),
    d(2020, 7, 31),
    d(2020, 8, 14),
    d(2020, 9, 2),
    d(2020, 9, 16),
    d(2020, 9, 30),
    d(2020, 10, 14),
    d(2020, 11, 2),
    d(2020, 11, 16),
    d(2020, 12, 2),
    d(2020, 12, 16),
  ],
  colD: [
    d(2020, 1, 2),
    d(2020, 1, 16),
    d(2020, 2, 3),
    d(2020, 2, 17),
    d(2020, 3, 3),
    d(2020, 3, 17),
    d(2020, 4, 2),
    d(2020, 4, 16),
    d(2020, 5, 1),
    d(2020, 5, 15),
    d(2020, 6, 3),
    d(2020, 6, 17),
    d(2020, 7, 2),
    d(2020, 7, 16),
    d(2020, 8, 3),
    d(2020, 8, 17),
    d(2020, 9, 3),
    d(2020, 9, 17),
    d(2020, 10, 1),
    d(2020, 10, 15),
    d(2020, 11, 3),
    d(2020, 11, 17),
    d(2020, 12, 3),
    d(2020, 12, 17),
  ],
  colE: [
    d(2020, 1, 3),
    d(2020, 1, 17),
    d(2020, 2, 4),
    d(2020, 2, 18),
    d(2020, 3, 4),
    d(2020, 3, 18),
    d(2020, 4, 3),
    d(2020, 4, 17),
    d(2020, 5, 4),
    d(2020, 5, 18),
    d(2020, 6, 4),
    d(2020, 6, 18),
    d(2020, 7, 3),
    d(2020, 7, 17),
    d(2020, 8, 4),
    d(2020, 8, 18),
    d(2020, 9, 4),
    d(2020, 9, 18),
    d(2020, 10, 2),
    d(2020, 10, 16),
    d(2020, 11, 4),
    d(2020, 11, 18),
    d(2020, 12, 4),
    d(2020, 12, 18),
  ],
  colF: [
    d(2020, 1, 6),
    d(2020, 1, 20),
    d(2020, 2, 5),
    d(2020, 2, 19),
    d(2020, 3, 5),
    d(2020, 3, 19),
    d(2020, 4, 6),
    d(2020, 4, 20),
    d(2020, 5, 5),
    d(2020, 5, 19),
    d(2020, 6, 5),
    d(2020, 6, 19),
    d(2020, 7, 6),
    d(2020, 7, 20),
    d(2020, 8, 5),
    d(2020, 8, 19),
    d(2020, 9, 7),
    d(2020, 9, 21),
    d(2020, 10, 5),
    d(2020, 10, 19),
    d(2020, 11, 5),
    d(2020, 11, 19),
    d(2020, 12, 7),
    d(2020, 12, 21),
  ],
  colG: [
    d(2020, 1, 7),
    d(2020, 1, 21),
    d(2020, 2, 6),
    d(2020, 2, 20),
    d(2020, 3, 6),
    d(2020, 3, 20),
    d(2020, 4, 7),
    d(2020, 4, 21),
    d(2020, 5, 6),
    d(2020, 5, 20),
    d(2020, 6, 8),
    d(2020, 6, 22),
    d(2020, 7, 7),
    d(2020, 7, 21),
    d(2020, 8, 6),
    d(2020, 8, 20),
    d(2020, 9, 8),
    d(2020, 9, 22),
    d(2020, 10, 6),
    d(2020, 10, 20),
    d(2020, 11, 6),
    d(2020, 11, 20),
    d(2020, 12, 8),
    d(2020, 12, 22),
  ],
  colH: [
    d(2020, 1, 8),
    d(2020, 1, 22),
    d(2020, 2, 7),
    d(2020, 2, 21),
    d(2020, 3, 9),
    d(2020, 3, 23),
    d(2020, 4, 8),
    d(2020, 4, 22),
    d(2020, 5, 7),
    d(2020, 5, 21),
    d(2020, 6, 9),
    d(2020, 6, 23),
    d(2020, 7, 8),
    d(2020, 7, 22),
    d(2020, 8, 7),
    d(2020, 8, 21),
    d(2020, 9, 9),
    d(2020, 9, 23),
    d(2020, 10, 7),
    d(2020, 10, 21),
    d(2020, 11, 9),
    d(2020, 11, 23),
    d(2020, 12, 9),
    d(2020, 12, 23),
  ],
};

const year2021original = {
  colA: [
    d(2021, 1, 5),
    d(2021, 1, 19),
    d(2021, 2, 5),
    d(2021, 2, 19),
    d(2021, 3, 5),
    d(2021, 3, 19),
    d(2021, 4, 5),
    d(2021, 4, 19),
    d(2021, 5, 5),
    d(2021, 5, 19),
    d(2021, 6, 5),
    d(2021, 6, 19),
    d(2021, 7, 5),
    d(2021, 7, 19),
    d(2021, 8, 5),
    d(2021, 8, 19),
    d(2021, 9, 5),
    d(2021, 9, 19),
    d(2021, 10, 5),
    d(2021, 10, 19),
    d(2021, 11, 5),
    d(2021, 11, 19),
    d(2021, 12, 5),
    d(2021, 12, 19),
  ],
  colB: [
    d(2020, 12, 23),
    d(2021, 1, 11),
    d(2021, 1, 28),
    d(2021, 2, 11),
    d(2021, 2, 25),
    d(2021, 3, 11),
    d(2021, 3, 25),
    d(2021, 4, 9),
    d(2021, 4, 26),
    d(2021, 5, 11),
    d(2021, 5, 27),
    d(2021, 6, 11),
    d(2021, 6, 25),
    d(2021, 7, 9),
    d(2021, 7, 28),
    d(2021, 8, 11),
    d(2021, 8, 26),
    d(2021, 9, 10),
    d(2021, 9, 27),
    d(2021, 10, 11),
    d(2021, 10, 28),
    d(2021, 11, 11),
    d(2021, 11, 26),
    d(2021, 12, 10),
  ],
  colC: [
    d(2020, 12, 30),
    d(2021, 1, 14),
    d(2021, 2, 2),
    d(2021, 2, 16),
    d(2021, 3, 2),
    d(2021, 3, 16),
    d(2021, 3, 30),
    d(2021, 4, 14),
    d(2021, 4, 29),
    d(2021, 5, 14),
    d(2021, 6, 2),
    d(2021, 6, 16),
    d(2021, 6, 30),
    d(2021, 7, 14),
    d(2021, 8, 2),
    d(2021, 8, 16),
    d(2021, 9, 1),
    d(2021, 9, 15),
    d(2021, 9, 30),
    d(2021, 10, 14),
    d(2021, 11, 2),
    d(2021, 11, 16),
    d(2021, 12, 1),
    d(2021, 12, 15),
  ],
  colD: [
    d(2020, 12, 31),
    d(2021, 1, 15),
    d(2021, 2, 3),
    d(2021, 2, 17),
    d(2021, 3, 3),
    d(2021, 3, 17),
    d(2021, 3, 31),
    d(2021, 4, 15),
    d(2021, 4, 30),
    d(2021, 5, 17),
    d(2021, 6, 3),
    d(2021, 6, 17),
    d(2021, 7, 1),
    d(2021, 7, 15),
    d(2021, 8, 3),
    d(2021, 8, 17),
    d(2021, 9, 2),
    d(2021, 9, 16),
    d(2021, 10, 1),
    d(2021, 10, 15),
    d(2021, 11, 3),
    d(2021, 11, 17),
    d(2021, 12, 2),
    d(2021, 12, 16),
  ],
  colE: [
    d(2021, 1, 4),
    d(2021, 1, 18),
    d(2021, 2, 4),
    d(2021, 2, 18),
    d(2021, 3, 4),
    d(2021, 3, 18),
    d(2021, 4, 1),
    d(2021, 4, 16),
    d(2021, 5, 4),
    d(2021, 5, 18),
    d(2021, 6, 4),
    d(2021, 6, 18),
    d(2021, 7, 2),
    d(2021, 7, 16),
    d(2021, 8, 4),
    d(2021, 8, 18),
    d(2021, 9, 3),
    d(2021, 9, 17),
    d(2021, 10, 4),
    d(2021, 10, 18),
    d(2021, 11, 4),
    d(2021, 11, 18),
    d(2021, 12, 3),
    d(2021, 12, 17),
  ],
  colF: [
    d(2021, 1, 5),
    d(2021, 1, 19),
    d(2021, 2, 5),
    d(2021, 2, 19),
    d(2021, 3, 5),
    d(2021, 3, 19),
    d(2021, 4, 6),
    d(2021, 4, 19),
    d(2021, 5, 5),
    d(2021, 5, 19),
    d(2021, 6, 7),
    d(2021, 6, 21),
    d(2021, 7, 5),
    d(2021, 7, 19),
    d(2021, 8, 5),
    d(2021, 8, 19),
    d(2021, 9, 6),
    d(2021, 9, 20),
    d(2021, 10, 5),
    d(2021, 10, 19),
    d(2021, 11, 5),
    d(2021, 11, 19),
    d(2021, 12, 6),
    d(2021, 12, 20),
  ],
  colG: [
    d(2021, 1, 6),
    d(2021, 1, 20),
    d(2021, 2, 8),
    d(2021, 2, 22),
    d(2021, 3, 8),
    d(2021, 3, 22),
    d(2021, 4, 7),
    d(2021, 4, 20),
    d(2021, 5, 6),
    d(2021, 5, 20),
    d(2021, 6, 8),
    d(2021, 6, 22),
    d(2021, 7, 6),
    d(2021, 7, 20),
    d(2021, 8, 6),
    d(2021, 8, 20),
    d(2021, 9, 7),
    d(2021, 9, 21),
    d(2021, 10, 6),
    d(2021, 10, 20),
    d(2021, 11, 8),
    d(2021, 11, 22),
    d(2021, 12, 7),
    d(2021, 12, 21),
  ],
  colH: [
    d(2021, 1, 7),
    d(2021, 1, 21),
    d(2021, 2, 9),
    d(2021, 2, 23),
    d(2021, 3, 9),
    d(2021, 3, 23),
    d(2021, 4, 8),
    d(2021, 4, 21),
    d(2021, 5, 7),
    d(2021, 5, 21),
    d(2021, 6, 9),
    d(2021, 6, 23),
    d(2021, 7, 7),
    d(2021, 7, 21),
    d(2021, 8, 9),
    d(2021, 8, 23),
    d(2021, 9, 8),
    d(2021, 9, 22),
    d(2021, 10, 7),
    d(2021, 10, 21),
    d(2021, 11, 9),
    d(2021, 11, 23),
    d(2021, 12, 8),
    d(2021, 12, 22),
  ],
};

const year2022original = {
  colA: [
    d(2022, 1, 5),
    d(2022, 1, 19),
    d(2022, 2, 5),
    d(2022, 2, 19),
    d(2022, 3, 5),
    d(2022, 3, 19),
    d(2022, 4, 5),
    d(2022, 4, 19),
    d(2022, 5, 5),
    d(2022, 5, 19),
    d(2022, 6, 5),
    d(2022, 6, 19),
    d(2022, 7, 5),
    d(2022, 7, 19),
    d(2022, 8, 5),
    d(2022, 8, 19),
    d(2022, 9, 5),
    d(2022, 9, 19),
    d(2022, 10, 5),
    d(2022, 10, 19),
    d(2022, 11, 5),
    d(2022, 11, 19),
    d(2022, 12, 5),
    d(2022, 12, 19),
  ],
  colB: [
    d(2021, 12, 23),
    d(2022, 1, 11),
    d(2022, 1, 28),
    d(2022, 2, 11),
    d(2022, 2, 25),
    d(2022, 3, 11),
    d(2022, 3, 28),
    d(2022, 4, 7),
    d(2022, 4, 26),
    d(2022, 5, 11),
    d(2022, 5, 25),
    d(2022, 6, 10),
    d(2022, 6, 27),
    d(2022, 7, 11),
    d(2022, 7, 28),
    d(2022, 8, 11),
    d(2022, 8, 25),
    d(2022, 9, 9),
    d(2022, 9, 27),
    d(2022, 10, 11),
    d(2022, 10, 28),
    d(2022, 11, 11),
    d(2022, 11, 25),
    d(2022, 12, 9),
  ],
  colC: [
    d(2021, 12, 30),
    d(2022, 1, 14),
    d(2022, 2, 2),
    d(2022, 2, 16),
    d(2022, 3, 2),
    d(2022, 3, 16),
    d(2022, 3, 31),
    d(2022, 4, 12),
    d(2022, 4, 29),
    d(2022, 5, 16),
    d(2022, 5, 30),
    d(2022, 6, 15),
    d(2022, 6, 30),
    d(2022, 7, 14),
    d(2022, 8, 2),
    d(2022, 8, 16),
    d(2022, 8, 31),
    d(2022, 9, 14),
    d(2022, 9, 30),
    d(2022, 10, 14),
    d(2022, 11, 2),
    d(2022, 11, 16),
    d(2022, 11, 30),
    d(2022, 12, 14),
  ],
  colD: [
    d(2021, 12, 31),
    d(2022, 1, 17),
    d(2022, 2, 3),
    d(2022, 2, 17),
    d(2022, 3, 3),
    d(2022, 3, 17),
    d(2022, 4, 1),
    d(2022, 4, 13),
    d(2022, 5, 3),
    d(2022, 5, 17),
    d(2022, 5, 31),
    d(2022, 6, 16),
    d(2022, 7, 1),
    d(2022, 7, 15),
    d(2022, 8, 3),
    d(2022, 8, 17),
    d(2022, 9, 1),
    d(2022, 9, 15),
    d(2022, 10, 3),
    d(2022, 10, 17),
    d(2022, 11, 3),
    d(2022, 11, 17),
    d(2022, 12, 1),
    d(2022, 12, 15),
  ],
  colE: [
    d(2022, 1, 4),
    d(2022, 1, 18),
    d(2022, 2, 4),
    d(2022, 2, 18),
    d(2022, 3, 4),
    d(2022, 3, 18),
    d(2022, 4, 4),
    d(2022, 4, 14),
    d(2022, 5, 4),
    d(2022, 5, 18),
    d(2022, 6, 1),
    d(2022, 6, 17),
    d(2022, 7, 4),
    d(2022, 7, 18),
    d(2022, 8, 4),
    d(2022, 8, 18),
    d(2022, 9, 2),
    d(2022, 9, 16),
    d(2022, 10, 4),
    d(2022, 10, 18),
    d(2022, 11, 4),
    d(2022, 11, 18),
    d(2022, 12, 2),
    d(2022, 12, 16),
  ],
  colF: [
    d(2022, 1, 5),
    d(2022, 1, 19),
    d(2022, 2, 7),
    d(2022, 2, 21),
    d(2022, 3, 7),
    d(2022, 3, 21),
    d(2022, 4, 5),
    d(2022, 4, 19),
    d(2022, 5, 5),
    d(2022, 5, 19),
    d(2022, 6, 6),
    d(2022, 6, 20),
    d(2022, 7, 5),
    d(2022, 7, 19),
    d(2022, 8, 5),
    d(2022, 8, 19),
    d(2022, 9, 5),
    d(2022, 9, 20),
    d(2022, 10, 5),
    d(2022, 10, 19),
    d(2022, 11, 7),
    d(2022, 11, 21),
    d(2022, 12, 5),
    d(2022, 12, 19),
  ],
  colG: [
    d(2022, 1, 6),
    d(2022, 1, 20),
    d(2022, 2, 8),
    d(2022, 2, 22),
    d(2022, 3, 8),
    d(2022, 3, 22),
    d(2022, 4, 6),
    d(2022, 4, 20),
    d(2022, 5, 6),
    d(2022, 5, 20),
    d(2022, 6, 7),
    d(2022, 6, 21),
    d(2022, 7, 6),
    d(2022, 7, 20),
    d(2022, 8, 8),
    d(2022, 8, 22),
    d(2022, 9, 6),
    d(2022, 9, 21),
    d(2022, 10, 6),
    d(2022, 10, 20),
    d(2022, 11, 8),
    d(2022, 11, 22),
    d(2022, 12, 6),
    d(2022, 12, 20),
  ],
  colH: [
    d(2022, 1, 7),
    d(2022, 1, 21),
    d(2022, 2, 9),
    d(2022, 2, 23),
    d(2022, 3, 9),
    d(2022, 3, 23),
    d(2022, 4, 7),
    d(2022, 4, 21),
    d(2022, 5, 9),
    d(2022, 5, 23),
    d(2022, 6, 8),
    d(2022, 6, 22),
    d(2022, 7, 7),
    d(2022, 7, 21),
    d(2022, 8, 9),
    d(2022, 8, 23),
    d(2022, 9, 7),
    d(2022, 9, 22),
    d(2022, 10, 7),
    d(2022, 10, 21),
    d(2022, 11, 9),
    d(2022, 11, 23),
    d(2022, 12, 7),
    d(2022, 12, 21),
  ],
};

const year2023original = {
  colA: [
    d(2023, 1, 5),
    d(2023, 1, 19),
    d(2023, 2, 5),
    d(2023, 2, 19),
    d(2023, 3, 5),
    d(2023, 3, 19),
    d(2023, 4, 5),
    d(2023, 4, 19),
    d(2023, 5, 5),
    d(2023, 5, 19),
    d(2023, 6, 5),
    d(2023, 6, 19),
    d(2023, 7, 5),
    d(2023, 7, 19),
    d(2023, 8, 5),
    d(2023, 8, 19),
    d(2023, 9, 5),
    d(2023, 9, 19),
    d(2023, 10, 5),
    d(2023, 10, 19),
    d(2023, 11, 5),
    d(2023, 11, 19),
    d(2023, 12, 5),
    d(2023, 12, 19),
  ],
  colB: [
    d(2022, 12, 23),
    d(2023, 1, 11),
    d(2023, 1, 27),
    d(2023, 2, 10),
    d(2023, 2, 24),
    d(2023, 3, 10),
    d(2023, 3, 28),
    d(2023, 4, 11),
    d(2023, 4, 26),
    d(2023, 5, 11),
    d(2023, 5, 25),
    d(2023, 6, 9),
    d(2023, 6, 27),
    d(2023, 7, 11),
    d(2023, 7, 28),
    d(2023, 8, 11),
    d(2023, 8, 25),
    d(2023, 9, 11),
    d(2023, 9, 27),
    d(2023, 10, 11),
    d(2023, 10, 27),
    d(2023, 11, 10),
    d(2023, 11, 27),
    d(2023, 12, 11),
  ],
  colC: [
    d(2022, 12, 30),
    d(2023, 1, 16),
    d(2023, 2, 1),
    d(2023, 2, 15),
    d(2023, 3, 1),
    d(2023, 3, 15),
    d(2023, 3, 31),
    d(2023, 4, 14),
    d(2023, 5, 2),
    d(2023, 5, 16),
    d(2023, 5, 31),
    d(2023, 6, 14),
    d(2023, 6, 30),
    d(2023, 7, 14),
    d(2023, 8, 2),
    d(2023, 8, 16),
    d(2023, 8, 31),
    d(2023, 9, 14),
    d(2023, 10, 2),
    d(2023, 10, 16),
    d(2023, 11, 1),
    d(2023, 11, 15),
    d(2023, 11, 30),
    d(2023, 12, 14),
  ],
  colD: [
    d(2023, 1, 3),
    d(2023, 1, 17),
    d(2023, 2, 2),
    d(2023, 2, 16),
    d(2023, 3, 2),
    d(2023, 3, 16),
    d(2023, 4, 3),
    d(2023, 4, 17),
    d(2023, 5, 3),
    d(2023, 5, 17),
    d(2023, 6, 1),
    d(2023, 6, 15),
    d(2023, 7, 3),
    d(2023, 7, 17),
    d(2023, 8, 3),
    d(2023, 8, 17),
    d(2023, 9, 1),
    d(2023, 9, 15),
    d(2023, 10, 3),
    d(2023, 10, 17),
    d(2023, 11, 2),
    d(2023, 11, 16),
    d(2023, 12, 1),
    d(2023, 12, 15),
  ],
  colE: [
    d(2023, 1, 4),
    d(2023, 1, 18),
    d(2023, 2, 3),
    d(2023, 2, 17),
    d(2023, 3, 3),
    d(2023, 3, 17),
    d(2023, 4, 4),
    d(2023, 4, 18),
    d(2023, 5, 4),
    d(2023, 5, 18),
    d(2023, 6, 2),
    d(2023, 6, 16),
    d(2023, 7, 4),
    d(2023, 7, 18),
    d(2023, 8, 4),
    d(2023, 8, 18),
    d(2023, 9, 4),
    d(2023, 9, 18),
    d(2023, 10, 4),
    d(2023, 10, 18),
    d(2023, 11, 3),
    d(2023, 11, 17),
    d(2023, 12, 4),
    d(2023, 12, 18),
  ],
  colF: [
    d(2023, 1, 5),
    d(2023, 1, 19),
    d(2023, 2, 6),
    d(2023, 2, 20),
    d(2023, 3, 6),
    d(2023, 3, 20),
    d(2023, 4, 5),
    d(2023, 4, 19),
    d(2023, 5, 5),
    d(2023, 5, 19),
    d(2023, 6, 5),
    d(2023, 6, 19),
    d(2023, 7, 5),
    d(2023, 7, 19),
    d(2023, 8, 7),
    d(2023, 8, 21),
    d(2023, 9, 5),
    d(2023, 9, 19),
    d(2023, 10, 5),
    d(2023, 10, 19),
    d(2023, 11, 6),
    d(2023, 11, 20),
    d(2023, 12, 5),
    d(2023, 12, 19),
  ],
  colG: [
    d(2023, 1, 6),
    d(2023, 1, 20),
    d(2023, 2, 7),
    d(2023, 2, 21),
    d(2023, 3, 7),
    d(2023, 3, 21),
    d(2023, 4, 6),
    d(2023, 4, 20),
    d(2023, 5, 9),
    d(2023, 5, 22),
    d(2023, 6, 6),
    d(2023, 6, 20),
    d(2023, 7, 6),
    d(2023, 7, 20),
    d(2023, 8, 8),
    d(2023, 8, 22),
    d(2023, 9, 6),
    d(2023, 9, 20),
    d(2023, 10, 6),
    d(2023, 10, 20),
    d(2023, 11, 7),
    d(2023, 11, 21),
    d(2023, 12, 6),
    d(2023, 12, 20),
  ],
  colH: [
    d(2023, 1, 9),
    d(2023, 1, 23),
    d(2023, 2, 8),
    d(2023, 2, 22),
    d(2023, 3, 8),
    d(2023, 3, 22),
    d(2023, 4, 11),
    d(2023, 4, 21),
    d(2023, 5, 10),
    d(2023, 5, 23),
    d(2023, 6, 7),
    d(2023, 6, 21),
    d(2023, 7, 7),
    d(2023, 7, 21),
    d(2023, 8, 9),
    d(2023, 8, 23),
    d(2023, 9, 7),
    d(2023, 9, 21),
    d(2023, 10, 9),
    d(2023, 10, 23),
    d(2023, 11, 8),
    d(2023, 11, 22),
    d(2023, 12, 7),
    d(2023, 12, 21),
  ],
};

const bankHols2020 = [
    {
      displayDate: "01/01/2020",
      JSDate: new Date(
        "Wed Jan 01 2020 00:00:00 GMT+0000 (Greenwich Mean Time)"
      ),
      dayOfWeek: "Wednesday",
      bankHolName: "New Year’s Day",
    },
    {
      displayDate: "10/04/2020",
      JSDate: new Date(
        "Fri Apr 10 2020 00:00:00 GMT+0100 (British Summer Time)"
      ),
      dayOfWeek: "Friday",
      bankHolName: "Good Friday",
    },
    {
      displayDate: "13/04/2020",
      JSDate: new Date(
        "Mon Apr 13 2020 00:00:00 GMT+0100 (British Summer Time)"
      ),
      dayOfWeek: "Monday",
      bankHolName: "Easter Monday",
    },
    {
      displayDate: "08/05/2020",
      JSDate: new Date(
        "Fri May 08 2020 00:00:00 GMT+0100 (British Summer Time)"
      ),
      dayOfWeek: "Friday",
      bankHolName: "Early May bank holiday (VE day)",
    },
    {
      displayDate: "25/05/2020",
      JSDate: new Date(
        "Mon May 25 2020 00:00:00 GMT+0100 (British Summer Time)"
      ),
      dayOfWeek: "Monday",
      bankHolName: "Spring bank holiday",
    },
    {
      displayDate: "31/08/2020",
      JSDate: new Date(
        "Mon Aug 31 2020 00:00:00 GMT+0100 (British Summer Time)"
      ),
      dayOfWeek: "Monday",
      bankHolName: "Summer bank holiday",
    },
    {
      displayDate: "25/12/2020",
      JSDate: new Date(
        "Fri Dec 25 2020 00:00:00 GMT+0000 (Greenwich Mean Time)"
      ),
      dayOfWeek: "Friday",
      bankHolName: "Christmas Day",
    },
    {
      displayDate: "28/12/2020",
      JSDate: new Date(
        "Mon Dec 28 2020 00:00:00 GMT+0000 (Greenwich Mean Time)"
      ),
      dayOfWeek: "Monday",
      bankHolName: "Boxing Day",
    },
    {
        displayDate: "25/12/2019",
        JSDate: new Date("2019-12-25T00:00:00.000Z"),
        dayOfWeek: "Wednesday",
        bankHolName: "Christmas Day"
    },
    {
        displayDate: "26/12/2019",
        JSDate: new Date("2019-12-26T00:00:00.000Z"),
        dayOfWeek: "Thursday",
        bankHolName: "Boxing Day"
    }
  ];
const bankHols2021 = [
    {
        displayDate: "01/01/2021",
        JSDate: new Date("2021-01-01T00:00:00.000Z"),
        dayOfWeek: "Friday",
        bankHolName: "New Year’s Day"
    },
    {
        displayDate: "02/04/2021",
        JSDate: new Date("2021-04-01T23:00:00.000Z"),
        dayOfWeek: "Friday",
        bankHolName: "Good Friday"
    },
    {
        displayDate: "05/04/2021",
        JSDate: new Date("2021-04-04T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Easter Monday"
    },
    {
        displayDate: "03/05/2021",
        JSDate: new Date("2021-05-02T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Early May bank holiday"
    },
    {
        displayDate: "31/05/2021",
        JSDate: new Date("2021-05-30T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Spring bank holiday"
    },
    {
        displayDate: "30/08/2021",
        JSDate: new Date("2021-08-29T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Summer bank holiday"
    },
    {
        displayDate: "27/12/2021",
        JSDate: new Date("2021-12-27T00:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Christmas Day"
    },
    {
        displayDate: "28/12/2021",
        JSDate: new Date("2021-12-28T00:00:00.000Z"),
        dayOfWeek: "Tuesday",
        bankHolName: "Boxing Day"
    },
    {
        displayDate: "25/12/2020",
        JSDate: new Date("2020-12-25T00:00:00.000Z"),
        dayOfWeek: "Friday",
        bankHolName: "Christmas Day"
    },
    {
        displayDate: "28/12/2020",
        JSDate: new Date("2020-12-28T00:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Boxing Day"
    }
]
const bankHols2022 = [
    {
        displayDate: "03/01/2022",
        JSDate: new Date("2022-01-03T00:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "New Year’s Day"
    },
    {
        displayDate: "15/04/2022",
        JSDate: new Date("2022-04-14T23:00:00.000Z"),
        dayOfWeek: "Friday",
        bankHolName: "Good Friday"
    },
    {
        displayDate: "18/04/2022",
        JSDate: new Date("2022-04-17T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Easter Monday"
    },
    {
        displayDate: "02/05/2022",
        JSDate: new Date("2022-05-01T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Early May bank holiday"
    },
    {
        displayDate: "02/06/2022",
        JSDate: new Date("2022-06-01T23:00:00.000Z"),
        dayOfWeek: "Thursday",
        bankHolName: "Spring bank holiday"
    },
    {
        displayDate: "03/06/2022",
        JSDate: new Date("2022-06-02T23:00:00.000Z"),
        dayOfWeek: "Friday",
        bankHolName: "Platinum Jubilee bank holiday"
    },
    {
        displayDate: "29/08/2022",
        JSDate: new Date("2022-08-28T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Summer bank holiday"
    },
    {
        displayDate: "19/09/2022",
        JSDate: new Date("2022-09-18T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Bank Holiday for the State Funeral of Queen Elizabeth II"
    },
    {
        displayDate: "26/12/2022",
        JSDate: new Date("2022-12-26T00:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Boxing Day"
    },
    {
        displayDate: "27/12/2022",
        JSDate: new Date("2022-12-27T00:00:00.000Z"),
        dayOfWeek: "Tuesday",
        bankHolName: "Christmas Day"
    },
    {
        displayDate: "27/12/2021",
        JSDate: new Date("2021-12-27T00:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Christmas Day"
    },
    {
        displayDate: "28/12/2021",
        JSDate: new Date("2021-12-28T00:00:00.000Z"),
        dayOfWeek: "Tuesday",
        bankHolName: "Boxing Day"
    }
]
const bankHols2023 = [
    {
        displayDate: "02/01/2023",
        JSDate: new Date("2023-01-02T00:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "New Year’s Day"
    },
    {
        displayDate: "07/04/2023",
        JSDate: new Date("2023-04-06T23:00:00.000Z"),
        dayOfWeek: "Friday",
        bankHolName: "Good Friday"
    },
    {
        displayDate: "10/04/2023",
        JSDate: new Date("2023-04-09T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Easter Monday"
    },
    {
        displayDate: "01/05/2023",
        JSDate: new Date("2023-04-30T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Early May bank holiday"
    },
    {
        displayDate: "08/05/2023",
        JSDate: new Date("2023-05-07T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Bank holiday for the coronation of King Charles III"
    },
    {
        displayDate: "29/05/2023",
        JSDate: new Date("2023-05-28T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Spring bank holiday"
    },
    {
        displayDate: "28/08/2023",
        JSDate: new Date("2023-08-27T23:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Summer bank holiday"
    },
    {
        displayDate: "25/12/2023",
        JSDate: new Date("2023-12-25T00:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Christmas Day"
    },
    {
        displayDate: "26/12/2023",
        JSDate: new Date("2023-12-26T00:00:00.000Z"),
        dayOfWeek: "Tuesday",
        bankHolName: "Boxing Day"
    },
    {
        displayDate: "26/12/2022",
        JSDate: new Date("2022-12-26T00:00:00.000Z"),
        dayOfWeek: "Monday",
        bankHolName: "Boxing Day"
    },
    {
        displayDate: "27/12/2022",
        JSDate: new Date("2022-12-27T00:00:00.000Z"),
        dayOfWeek: "Tuesday",
        bankHolName: "Christmas Day"
    }
]
const weekends2020 = [
    {
        displayDate: "21/12/2019",
        JSDate: new Date("2019-12-21T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "22/12/2019",
        JSDate: new Date("2019-12-22T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "28/12/2019",
        JSDate: new Date("2019-12-28T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "29/12/2019",
        JSDate: new Date("2019-12-29T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "04/01/2020",
        JSDate: new Date("2020-01-04T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "05/01/2020",
        JSDate: new Date("2020-01-05T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "11/01/2020",
        JSDate: new Date("2020-01-11T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "12/01/2020",
        JSDate: new Date("2020-01-12T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "18/01/2020",
        JSDate: new Date("2020-01-18T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "19/01/2020",
        JSDate: new Date("2020-01-19T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "25/01/2020",
        JSDate: new Date("2020-01-25T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "26/01/2020",
        JSDate: new Date("2020-01-26T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "01/02/2020",
        JSDate: new Date("2020-02-01T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "02/02/2020",
        JSDate: new Date("2020-02-02T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "08/02/2020",
        JSDate: new Date("2020-02-08T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "09/02/2020",
        JSDate: new Date("2020-02-09T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "15/02/2020",
        JSDate: new Date("2020-02-15T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "16/02/2020",
        JSDate: new Date("2020-02-16T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "22/02/2020",
        JSDate: new Date("2020-02-22T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "23/02/2020",
        JSDate: new Date("2020-02-23T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "29/02/2020",
        JSDate: new Date("2020-02-29T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "01/03/2020",
        JSDate: new Date("2020-03-01T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "07/03/2020",
        JSDate: new Date("2020-03-07T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "08/03/2020",
        JSDate: new Date("2020-03-08T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "14/03/2020",
        JSDate: new Date("2020-03-14T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "15/03/2020",
        JSDate: new Date("2020-03-15T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "21/03/2020",
        JSDate: new Date("2020-03-21T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "22/03/2020",
        JSDate: new Date("2020-03-22T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "28/03/2020",
        JSDate: new Date("2020-03-28T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "29/03/2020",
        JSDate: new Date("2020-03-29T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "04/04/2020",
        JSDate: new Date("2020-04-03T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "05/04/2020",
        JSDate: new Date("2020-04-04T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "11/04/2020",
        JSDate: new Date("2020-04-10T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "12/04/2020",
        JSDate: new Date("2020-04-11T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "18/04/2020",
        JSDate: new Date("2020-04-17T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "19/04/2020",
        JSDate: new Date("2020-04-18T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "25/04/2020",
        JSDate: new Date("2020-04-24T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "26/04/2020",
        JSDate: new Date("2020-04-25T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "02/05/2020",
        JSDate: new Date("2020-05-01T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "03/05/2020",
        JSDate: new Date("2020-05-02T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "09/05/2020",
        JSDate: new Date("2020-05-08T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "10/05/2020",
        JSDate: new Date("2020-05-09T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "16/05/2020",
        JSDate: new Date("2020-05-15T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "17/05/2020",
        JSDate: new Date("2020-05-16T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "23/05/2020",
        JSDate: new Date("2020-05-22T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "24/05/2020",
        JSDate: new Date("2020-05-23T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "30/05/2020",
        JSDate: new Date("2020-05-29T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "31/05/2020",
        JSDate: new Date("2020-05-30T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "06/06/2020",
        JSDate: new Date("2020-06-05T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "07/06/2020",
        JSDate: new Date("2020-06-06T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "13/06/2020",
        JSDate: new Date("2020-06-12T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "14/06/2020",
        JSDate: new Date("2020-06-13T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "20/06/2020",
        JSDate: new Date("2020-06-19T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "21/06/2020",
        JSDate: new Date("2020-06-20T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "27/06/2020",
        JSDate: new Date("2020-06-26T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "28/06/2020",
        JSDate: new Date("2020-06-27T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "04/07/2020",
        JSDate: new Date("2020-07-03T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "05/07/2020",
        JSDate: new Date("2020-07-04T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "11/07/2020",
        JSDate: new Date("2020-07-10T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "12/07/2020",
        JSDate: new Date("2020-07-11T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "18/07/2020",
        JSDate: new Date("2020-07-17T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "19/07/2020",
        JSDate: new Date("2020-07-18T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "25/07/2020",
        JSDate: new Date("2020-07-24T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "26/07/2020",
        JSDate: new Date("2020-07-25T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "01/08/2020",
        JSDate: new Date("2020-07-31T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "02/08/2020",
        JSDate: new Date("2020-08-01T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "08/08/2020",
        JSDate: new Date("2020-08-07T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "09/08/2020",
        JSDate: new Date("2020-08-08T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "15/08/2020",
        JSDate: new Date("2020-08-14T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "16/08/2020",
        JSDate: new Date("2020-08-15T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "22/08/2020",
        JSDate: new Date("2020-08-21T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "23/08/2020",
        JSDate: new Date("2020-08-22T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "29/08/2020",
        JSDate: new Date("2020-08-28T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "30/08/2020",
        JSDate: new Date("2020-08-29T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "05/09/2020",
        JSDate: new Date("2020-09-04T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "06/09/2020",
        JSDate: new Date("2020-09-05T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "12/09/2020",
        JSDate: new Date("2020-09-11T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "13/09/2020",
        JSDate: new Date("2020-09-12T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "19/09/2020",
        JSDate: new Date("2020-09-18T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "20/09/2020",
        JSDate: new Date("2020-09-19T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "26/09/2020",
        JSDate: new Date("2020-09-25T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "27/09/2020",
        JSDate: new Date("2020-09-26T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "03/10/2020",
        JSDate: new Date("2020-10-02T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "04/10/2020",
        JSDate: new Date("2020-10-03T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "10/10/2020",
        JSDate: new Date("2020-10-09T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "11/10/2020",
        JSDate: new Date("2020-10-10T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "17/10/2020",
        JSDate: new Date("2020-10-16T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "18/10/2020",
        JSDate: new Date("2020-10-17T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "24/10/2020",
        JSDate: new Date("2020-10-23T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "25/10/2020",
        JSDate: new Date("2020-10-24T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "31/10/2020",
        JSDate: new Date("2020-10-31T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "01/11/2020",
        JSDate: new Date("2020-11-01T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "07/11/2020",
        JSDate: new Date("2020-11-07T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "08/11/2020",
        JSDate: new Date("2020-11-08T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "14/11/2020",
        JSDate: new Date("2020-11-14T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "15/11/2020",
        JSDate: new Date("2020-11-15T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "21/11/2020",
        JSDate: new Date("2020-11-21T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "22/11/2020",
        JSDate: new Date("2020-11-22T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "28/11/2020",
        JSDate: new Date("2020-11-28T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "29/11/2020",
        JSDate: new Date("2020-11-29T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "05/12/2020",
        JSDate: new Date("2020-12-05T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "06/12/2020",
        JSDate: new Date("2020-12-06T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "12/12/2020",
        JSDate: new Date("2020-12-12T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "13/12/2020",
        JSDate: new Date("2020-12-13T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "19/12/2020",
        JSDate: new Date("2020-12-19T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "20/12/2020",
        JSDate: new Date("2020-12-20T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "26/12/2020",
        JSDate: new Date("2020-12-26T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "27/12/2020",
        JSDate: new Date("2020-12-27T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "02/01/2021",
        JSDate: new Date("2021-01-02T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "03/01/2021",
        JSDate: new Date("2021-01-03T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "09/01/2021",
        JSDate: new Date("2021-01-09T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "10/01/2021",
        JSDate: new Date("2021-01-10T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    }
]
const weekends2021 = [
    {
        displayDate: "19/12/2020",
        JSDate: new Date("2020-12-19T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "20/12/2020",
        JSDate: new Date("2020-12-20T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "26/12/2020",
        JSDate: new Date("2020-12-26T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "27/12/2020",
        JSDate: new Date("2020-12-27T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "02/01/2021",
        JSDate: new Date("2021-01-02T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "03/01/2021",
        JSDate: new Date("2021-01-03T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "09/01/2021",
        JSDate: new Date("2021-01-09T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "10/01/2021",
        JSDate: new Date("2021-01-10T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "16/01/2021",
        JSDate: new Date("2021-01-16T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "17/01/2021",
        JSDate: new Date("2021-01-17T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "23/01/2021",
        JSDate: new Date("2021-01-23T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "24/01/2021",
        JSDate: new Date("2021-01-24T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "30/01/2021",
        JSDate: new Date("2021-01-30T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "31/01/2021",
        JSDate: new Date("2021-01-31T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "06/02/2021",
        JSDate: new Date("2021-02-06T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "07/02/2021",
        JSDate: new Date("2021-02-07T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "13/02/2021",
        JSDate: new Date("2021-02-13T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "14/02/2021",
        JSDate: new Date("2021-02-14T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "20/02/2021",
        JSDate: new Date("2021-02-20T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "21/02/2021",
        JSDate: new Date("2021-02-21T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "27/02/2021",
        JSDate: new Date("2021-02-27T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "28/02/2021",
        JSDate: new Date("2021-02-28T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "06/03/2021",
        JSDate: new Date("2021-03-06T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "07/03/2021",
        JSDate: new Date("2021-03-07T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "13/03/2021",
        JSDate: new Date("2021-03-13T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "14/03/2021",
        JSDate: new Date("2021-03-14T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "20/03/2021",
        JSDate: new Date("2021-03-20T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "21/03/2021",
        JSDate: new Date("2021-03-21T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "27/03/2021",
        JSDate: new Date("2021-03-27T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "28/03/2021",
        JSDate: new Date("2021-03-28T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "03/04/2021",
        JSDate: new Date("2021-04-02T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "04/04/2021",
        JSDate: new Date("2021-04-03T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "10/04/2021",
        JSDate: new Date("2021-04-09T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "11/04/2021",
        JSDate: new Date("2021-04-10T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "17/04/2021",
        JSDate: new Date("2021-04-16T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "18/04/2021",
        JSDate: new Date("2021-04-17T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "24/04/2021",
        JSDate: new Date("2021-04-23T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "25/04/2021",
        JSDate: new Date("2021-04-24T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "01/05/2021",
        JSDate: new Date("2021-04-30T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "02/05/2021",
        JSDate: new Date("2021-05-01T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "08/05/2021",
        JSDate: new Date("2021-05-07T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "09/05/2021",
        JSDate: new Date("2021-05-08T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "15/05/2021",
        JSDate: new Date("2021-05-14T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "16/05/2021",
        JSDate: new Date("2021-05-15T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "22/05/2021",
        JSDate: new Date("2021-05-21T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "23/05/2021",
        JSDate: new Date("2021-05-22T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "29/05/2021",
        JSDate: new Date("2021-05-28T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "30/05/2021",
        JSDate: new Date("2021-05-29T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "05/06/2021",
        JSDate: new Date("2021-06-04T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "06/06/2021",
        JSDate: new Date("2021-06-05T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "12/06/2021",
        JSDate: new Date("2021-06-11T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "13/06/2021",
        JSDate: new Date("2021-06-12T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "19/06/2021",
        JSDate: new Date("2021-06-18T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "20/06/2021",
        JSDate: new Date("2021-06-19T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "26/06/2021",
        JSDate: new Date("2021-06-25T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "27/06/2021",
        JSDate: new Date("2021-06-26T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "03/07/2021",
        JSDate: new Date("2021-07-02T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "04/07/2021",
        JSDate: new Date("2021-07-03T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "10/07/2021",
        JSDate: new Date("2021-07-09T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "11/07/2021",
        JSDate: new Date("2021-07-10T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "17/07/2021",
        JSDate: new Date("2021-07-16T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "18/07/2021",
        JSDate: new Date("2021-07-17T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "24/07/2021",
        JSDate: new Date("2021-07-23T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "25/07/2021",
        JSDate: new Date("2021-07-24T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "31/07/2021",
        JSDate: new Date("2021-07-30T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "01/08/2021",
        JSDate: new Date("2021-07-31T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "07/08/2021",
        JSDate: new Date("2021-08-06T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "08/08/2021",
        JSDate: new Date("2021-08-07T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "14/08/2021",
        JSDate: new Date("2021-08-13T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "15/08/2021",
        JSDate: new Date("2021-08-14T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "21/08/2021",
        JSDate: new Date("2021-08-20T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "22/08/2021",
        JSDate: new Date("2021-08-21T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "28/08/2021",
        JSDate: new Date("2021-08-27T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "29/08/2021",
        JSDate: new Date("2021-08-28T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "04/09/2021",
        JSDate: new Date("2021-09-03T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "05/09/2021",
        JSDate: new Date("2021-09-04T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "11/09/2021",
        JSDate: new Date("2021-09-10T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "12/09/2021",
        JSDate: new Date("2021-09-11T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "18/09/2021",
        JSDate: new Date("2021-09-17T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "19/09/2021",
        JSDate: new Date("2021-09-18T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "25/09/2021",
        JSDate: new Date("2021-09-24T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "26/09/2021",
        JSDate: new Date("2021-09-25T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "02/10/2021",
        JSDate: new Date("2021-10-01T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "03/10/2021",
        JSDate: new Date("2021-10-02T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "09/10/2021",
        JSDate: new Date("2021-10-08T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "10/10/2021",
        JSDate: new Date("2021-10-09T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "16/10/2021",
        JSDate: new Date("2021-10-15T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "17/10/2021",
        JSDate: new Date("2021-10-16T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "23/10/2021",
        JSDate: new Date("2021-10-22T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "24/10/2021",
        JSDate: new Date("2021-10-23T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "30/10/2021",
        JSDate: new Date("2021-10-29T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "31/10/2021",
        JSDate: new Date("2021-10-30T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "06/11/2021",
        JSDate: new Date("2021-11-06T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "07/11/2021",
        JSDate: new Date("2021-11-07T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "13/11/2021",
        JSDate: new Date("2021-11-13T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "14/11/2021",
        JSDate: new Date("2021-11-14T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "20/11/2021",
        JSDate: new Date("2021-11-20T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "21/11/2021",
        JSDate: new Date("2021-11-21T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "27/11/2021",
        JSDate: new Date("2021-11-27T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "28/11/2021",
        JSDate: new Date("2021-11-28T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "04/12/2021",
        JSDate: new Date("2021-12-04T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "05/12/2021",
        JSDate: new Date("2021-12-05T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "11/12/2021",
        JSDate: new Date("2021-12-11T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "12/12/2021",
        JSDate: new Date("2021-12-12T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "18/12/2021",
        JSDate: new Date("2021-12-18T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "19/12/2021",
        JSDate: new Date("2021-12-19T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "25/12/2021",
        JSDate: new Date("2021-12-25T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "26/12/2021",
        JSDate: new Date("2021-12-26T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "01/01/2022",
        JSDate: new Date("2022-01-01T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "02/01/2022",
        JSDate: new Date("2022-01-02T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "08/01/2022",
        JSDate: new Date("2022-01-08T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "09/01/2022",
        JSDate: new Date("2022-01-09T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "15/01/2022",
        JSDate: new Date("2022-01-15T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    }
]
const weekends2022 = [
    {
        displayDate: "18/12/2021",
        JSDate: new Date("2021-12-18T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "19/12/2021",
        JSDate: new Date("2021-12-19T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "25/12/2021",
        JSDate: new Date("2021-12-25T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "26/12/2021",
        JSDate: new Date("2021-12-26T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "01/01/2022",
        JSDate: new Date("2022-01-01T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "02/01/2022",
        JSDate: new Date("2022-01-02T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "08/01/2022",
        JSDate: new Date("2022-01-08T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "09/01/2022",
        JSDate: new Date("2022-01-09T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "15/01/2022",
        JSDate: new Date("2022-01-15T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "16/01/2022",
        JSDate: new Date("2022-01-16T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "22/01/2022",
        JSDate: new Date("2022-01-22T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "23/01/2022",
        JSDate: new Date("2022-01-23T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "29/01/2022",
        JSDate: new Date("2022-01-29T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "30/01/2022",
        JSDate: new Date("2022-01-30T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "05/02/2022",
        JSDate: new Date("2022-02-05T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "06/02/2022",
        JSDate: new Date("2022-02-06T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "12/02/2022",
        JSDate: new Date("2022-02-12T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "13/02/2022",
        JSDate: new Date("2022-02-13T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "19/02/2022",
        JSDate: new Date("2022-02-19T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "20/02/2022",
        JSDate: new Date("2022-02-20T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "26/02/2022",
        JSDate: new Date("2022-02-26T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "27/02/2022",
        JSDate: new Date("2022-02-27T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "05/03/2022",
        JSDate: new Date("2022-03-05T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "06/03/2022",
        JSDate: new Date("2022-03-06T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "12/03/2022",
        JSDate: new Date("2022-03-12T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "13/03/2022",
        JSDate: new Date("2022-03-13T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "19/03/2022",
        JSDate: new Date("2022-03-19T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "20/03/2022",
        JSDate: new Date("2022-03-20T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "26/03/2022",
        JSDate: new Date("2022-03-26T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "27/03/2022",
        JSDate: new Date("2022-03-27T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "02/04/2022",
        JSDate: new Date("2022-04-01T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "03/04/2022",
        JSDate: new Date("2022-04-02T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "09/04/2022",
        JSDate: new Date("2022-04-08T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "10/04/2022",
        JSDate: new Date("2022-04-09T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "16/04/2022",
        JSDate: new Date("2022-04-15T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "17/04/2022",
        JSDate: new Date("2022-04-16T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "23/04/2022",
        JSDate: new Date("2022-04-22T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "24/04/2022",
        JSDate: new Date("2022-04-23T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "30/04/2022",
        JSDate: new Date("2022-04-29T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "01/05/2022",
        JSDate: new Date("2022-04-30T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "07/05/2022",
        JSDate: new Date("2022-05-06T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "08/05/2022",
        JSDate: new Date("2022-05-07T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "14/05/2022",
        JSDate: new Date("2022-05-13T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "15/05/2022",
        JSDate: new Date("2022-05-14T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "21/05/2022",
        JSDate: new Date("2022-05-20T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "22/05/2022",
        JSDate: new Date("2022-05-21T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "28/05/2022",
        JSDate: new Date("2022-05-27T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "29/05/2022",
        JSDate: new Date("2022-05-28T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "04/06/2022",
        JSDate: new Date("2022-06-03T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "05/06/2022",
        JSDate: new Date("2022-06-04T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "11/06/2022",
        JSDate: new Date("2022-06-10T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "12/06/2022",
        JSDate: new Date("2022-06-11T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "18/06/2022",
        JSDate: new Date("2022-06-17T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "19/06/2022",
        JSDate: new Date("2022-06-18T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "25/06/2022",
        JSDate: new Date("2022-06-24T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "26/06/2022",
        JSDate: new Date("2022-06-25T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "02/07/2022",
        JSDate: new Date("2022-07-01T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "03/07/2022",
        JSDate: new Date("2022-07-02T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "09/07/2022",
        JSDate: new Date("2022-07-08T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "10/07/2022",
        JSDate: new Date("2022-07-09T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "16/07/2022",
        JSDate: new Date("2022-07-15T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "17/07/2022",
        JSDate: new Date("2022-07-16T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "23/07/2022",
        JSDate: new Date("2022-07-22T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "24/07/2022",
        JSDate: new Date("2022-07-23T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "30/07/2022",
        JSDate: new Date("2022-07-29T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "31/07/2022",
        JSDate: new Date("2022-07-30T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "06/08/2022",
        JSDate: new Date("2022-08-05T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "07/08/2022",
        JSDate: new Date("2022-08-06T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "13/08/2022",
        JSDate: new Date("2022-08-12T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "14/08/2022",
        JSDate: new Date("2022-08-13T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "20/08/2022",
        JSDate: new Date("2022-08-19T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "21/08/2022",
        JSDate: new Date("2022-08-20T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "27/08/2022",
        JSDate: new Date("2022-08-26T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "28/08/2022",
        JSDate: new Date("2022-08-27T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "03/09/2022",
        JSDate: new Date("2022-09-02T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "04/09/2022",
        JSDate: new Date("2022-09-03T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "10/09/2022",
        JSDate: new Date("2022-09-09T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "11/09/2022",
        JSDate: new Date("2022-09-10T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "17/09/2022",
        JSDate: new Date("2022-09-16T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "18/09/2022",
        JSDate: new Date("2022-09-17T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "24/09/2022",
        JSDate: new Date("2022-09-23T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "25/09/2022",
        JSDate: new Date("2022-09-24T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "01/10/2022",
        JSDate: new Date("2022-09-30T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "02/10/2022",
        JSDate: new Date("2022-10-01T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "08/10/2022",
        JSDate: new Date("2022-10-07T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "09/10/2022",
        JSDate: new Date("2022-10-08T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "15/10/2022",
        JSDate: new Date("2022-10-14T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "16/10/2022",
        JSDate: new Date("2022-10-15T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "22/10/2022",
        JSDate: new Date("2022-10-21T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "23/10/2022",
        JSDate: new Date("2022-10-22T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "29/10/2022",
        JSDate: new Date("2022-10-28T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "30/10/2022",
        JSDate: new Date("2022-10-29T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "05/11/2022",
        JSDate: new Date("2022-11-05T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "06/11/2022",
        JSDate: new Date("2022-11-06T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "12/11/2022",
        JSDate: new Date("2022-11-12T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "13/11/2022",
        JSDate: new Date("2022-11-13T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "19/11/2022",
        JSDate: new Date("2022-11-19T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "20/11/2022",
        JSDate: new Date("2022-11-20T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "26/11/2022",
        JSDate: new Date("2022-11-26T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "27/11/2022",
        JSDate: new Date("2022-11-27T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "03/12/2022",
        JSDate: new Date("2022-12-03T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "04/12/2022",
        JSDate: new Date("2022-12-04T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "10/12/2022",
        JSDate: new Date("2022-12-10T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "11/12/2022",
        JSDate: new Date("2022-12-11T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "17/12/2022",
        JSDate: new Date("2022-12-17T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "18/12/2022",
        JSDate: new Date("2022-12-18T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "24/12/2022",
        JSDate: new Date("2022-12-24T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "25/12/2022",
        JSDate: new Date("2022-12-25T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "31/12/2022",
        JSDate: new Date("2022-12-31T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "01/01/2023",
        JSDate: new Date("2023-01-01T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "07/01/2023",
        JSDate: new Date("2023-01-07T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "08/01/2023",
        JSDate: new Date("2023-01-08T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "14/01/2023",
        JSDate: new Date("2023-01-14T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "15/01/2023",
        JSDate: new Date("2023-01-15T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    }
]
const weekends2023 = [
    {
        displayDate: "17/12/2022",
        JSDate: new Date("2022-12-17T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "18/12/2022",
        JSDate: new Date("2022-12-18T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "24/12/2022",
        JSDate: new Date("2022-12-24T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "25/12/2022",
        JSDate: new Date("2022-12-25T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "31/12/2022",
        JSDate: new Date("2022-12-31T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "01/01/2023",
        JSDate: new Date("2023-01-01T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "07/01/2023",
        JSDate: new Date("2023-01-07T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "08/01/2023",
        JSDate: new Date("2023-01-08T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "14/01/2023",
        JSDate: new Date("2023-01-14T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "15/01/2023",
        JSDate: new Date("2023-01-15T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "21/01/2023",
        JSDate: new Date("2023-01-21T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "22/01/2023",
        JSDate: new Date("2023-01-22T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "28/01/2023",
        JSDate: new Date("2023-01-28T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "29/01/2023",
        JSDate: new Date("2023-01-29T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "04/02/2023",
        JSDate: new Date("2023-02-04T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "05/02/2023",
        JSDate: new Date("2023-02-05T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "11/02/2023",
        JSDate: new Date("2023-02-11T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "12/02/2023",
        JSDate: new Date("2023-02-12T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "18/02/2023",
        JSDate: new Date("2023-02-18T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "19/02/2023",
        JSDate: new Date("2023-02-19T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "25/02/2023",
        JSDate: new Date("2023-02-25T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "26/02/2023",
        JSDate: new Date("2023-02-26T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "04/03/2023",
        JSDate: new Date("2023-03-04T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "05/03/2023",
        JSDate: new Date("2023-03-05T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "11/03/2023",
        JSDate: new Date("2023-03-11T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "12/03/2023",
        JSDate: new Date("2023-03-12T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "18/03/2023",
        JSDate: new Date("2023-03-18T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "19/03/2023",
        JSDate: new Date("2023-03-19T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "25/03/2023",
        JSDate: new Date("2023-03-25T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "26/03/2023",
        JSDate: new Date("2023-03-26T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "01/04/2023",
        JSDate: new Date("2023-03-31T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "02/04/2023",
        JSDate: new Date("2023-04-01T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "08/04/2023",
        JSDate: new Date("2023-04-07T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "09/04/2023",
        JSDate: new Date("2023-04-08T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "15/04/2023",
        JSDate: new Date("2023-04-14T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "16/04/2023",
        JSDate: new Date("2023-04-15T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "22/04/2023",
        JSDate: new Date("2023-04-21T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "23/04/2023",
        JSDate: new Date("2023-04-22T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "29/04/2023",
        JSDate: new Date("2023-04-28T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "30/04/2023",
        JSDate: new Date("2023-04-29T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "06/05/2023",
        JSDate: new Date("2023-05-05T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "07/05/2023",
        JSDate: new Date("2023-05-06T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "13/05/2023",
        JSDate: new Date("2023-05-12T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "14/05/2023",
        JSDate: new Date("2023-05-13T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "20/05/2023",
        JSDate: new Date("2023-05-19T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "21/05/2023",
        JSDate: new Date("2023-05-20T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "27/05/2023",
        JSDate: new Date("2023-05-26T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "28/05/2023",
        JSDate: new Date("2023-05-27T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "03/06/2023",
        JSDate: new Date("2023-06-02T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "04/06/2023",
        JSDate: new Date("2023-06-03T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "10/06/2023",
        JSDate: new Date("2023-06-09T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "11/06/2023",
        JSDate: new Date("2023-06-10T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "17/06/2023",
        JSDate: new Date("2023-06-16T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "18/06/2023",
        JSDate: new Date("2023-06-17T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "24/06/2023",
        JSDate: new Date("2023-06-23T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "25/06/2023",
        JSDate: new Date("2023-06-24T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "01/07/2023",
        JSDate: new Date("2023-06-30T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "02/07/2023",
        JSDate: new Date("2023-07-01T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "08/07/2023",
        JSDate: new Date("2023-07-07T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "09/07/2023",
        JSDate: new Date("2023-07-08T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "15/07/2023",
        JSDate: new Date("2023-07-14T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "16/07/2023",
        JSDate: new Date("2023-07-15T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "22/07/2023",
        JSDate: new Date("2023-07-21T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "23/07/2023",
        JSDate: new Date("2023-07-22T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "29/07/2023",
        JSDate: new Date("2023-07-28T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "30/07/2023",
        JSDate: new Date("2023-07-29T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "05/08/2023",
        JSDate: new Date("2023-08-04T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "06/08/2023",
        JSDate: new Date("2023-08-05T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "12/08/2023",
        JSDate: new Date("2023-08-11T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "13/08/2023",
        JSDate: new Date("2023-08-12T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "19/08/2023",
        JSDate: new Date("2023-08-18T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "20/08/2023",
        JSDate: new Date("2023-08-19T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "26/08/2023",
        JSDate: new Date("2023-08-25T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "27/08/2023",
        JSDate: new Date("2023-08-26T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "02/09/2023",
        JSDate: new Date("2023-09-01T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "03/09/2023",
        JSDate: new Date("2023-09-02T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "09/09/2023",
        JSDate: new Date("2023-09-08T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "10/09/2023",
        JSDate: new Date("2023-09-09T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "16/09/2023",
        JSDate: new Date("2023-09-15T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "17/09/2023",
        JSDate: new Date("2023-09-16T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "23/09/2023",
        JSDate: new Date("2023-09-22T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "24/09/2023",
        JSDate: new Date("2023-09-23T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "30/09/2023",
        JSDate: new Date("2023-09-29T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "01/10/2023",
        JSDate: new Date("2023-09-30T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "07/10/2023",
        JSDate: new Date("2023-10-06T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "08/10/2023",
        JSDate: new Date("2023-10-07T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "14/10/2023",
        JSDate: new Date("2023-10-13T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "15/10/2023",
        JSDate: new Date("2023-10-14T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "21/10/2023",
        JSDate: new Date("2023-10-20T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "22/10/2023",
        JSDate: new Date("2023-10-21T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "28/10/2023",
        JSDate: new Date("2023-10-27T23:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "29/10/2023",
        JSDate: new Date("2023-10-28T23:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "04/11/2023",
        JSDate: new Date("2023-11-04T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "05/11/2023",
        JSDate: new Date("2023-11-05T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "11/11/2023",
        JSDate: new Date("2023-11-11T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "12/11/2023",
        JSDate: new Date("2023-11-12T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "18/11/2023",
        JSDate: new Date("2023-11-18T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "19/11/2023",
        JSDate: new Date("2023-11-19T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "25/11/2023",
        JSDate: new Date("2023-11-25T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "26/11/2023",
        JSDate: new Date("2023-11-26T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "02/12/2023",
        JSDate: new Date("2023-12-02T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "03/12/2023",
        JSDate: new Date("2023-12-03T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "09/12/2023",
        JSDate: new Date("2023-12-09T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "10/12/2023",
        JSDate: new Date("2023-12-10T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "16/12/2023",
        JSDate: new Date("2023-12-16T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "17/12/2023",
        JSDate: new Date("2023-12-17T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "23/12/2023",
        JSDate: new Date("2023-12-23T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "24/12/2023",
        JSDate: new Date("2023-12-24T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "30/12/2023",
        JSDate: new Date("2023-12-30T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "31/12/2023",
        JSDate: new Date("2023-12-31T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "06/01/2024",
        JSDate: new Date("2024-01-06T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "07/01/2024",
        JSDate: new Date("2024-01-07T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    },
    {
        displayDate: "13/01/2024",
        JSDate: new Date("2024-01-13T00:00:00.000Z"),
        dayOfWeek: "Saturday"
    },
    {
        displayDate: "14/01/2024",
        JSDate: new Date("2024-01-14T00:00:00.000Z"),
        dayOfWeek: "Sunday"
    }
]

const nonProcessing2020 = [...bankHols2020, ...weekends2020];
const nonProcessing2021 = [...bankHols2021, ...weekends2021];
const nonProcessing2022 = [...bankHols2022, ...weekends2022];
const nonProcessing2023 = [...bankHols2023, ...weekends2023];

// convertMock(year2023original);

export { mockResults2020, mockResults2021, mockResults2022, mockResults2023, nonProcessing2020, nonProcessing2021, nonProcessing2022, nonProcessing2023 };