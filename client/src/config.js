export default {
  ENUMS: {
    UI: {
      TABLE_TITLE: 'COVID-19 US Data By State',
      TABLE_COLUMNS: [
        { header: 'State', id: 'name' },
        { header: 'Recovered', id: 'recovered' },
        { header: 'Currently Hospitalized', id: 'hospitalizedCurrently' },
        { header: 'Deaths', id: 'deaths' },
        { header: 'Deaths (past 3 days)', id: 'deathsPast3days' },
      ],
      NA: 'N/A',
    },
    COLOUR: {
      GREY: '#494949',
      WHITE: 'white',
    },
  },
  URL: {
    github: 'https://github.com/Beadsley/Covid-19-webapp',
  },
  mockdata: [
    {
      state: 'AK',
      name: 'Alaska',
      recovered: 318,
      hospitalizedCurrently: 8,
      deaths: 10,
      deathsPast3days: 30,
    },
    {
      state: 'AL',
      name: 'Alabama',
      recovered: null,
      hospitalizedCurrently: null,
      deaths: 388,
      deathsPast3days: 1112,
    },
    {
      state: 'AR',
      name: 'Arkansas',
      recovered: 2968,
      hospitalizedCurrently: 64,
      deaths: 88,
      deathsPast3days: 263,
    },
    {
      state: 'AS',
      name: 'American Samoa',
      recovered: null,
      hospitalizedCurrently: null,
      deaths: 0,
      deathsPast3days: 0,
    },
    {
      state: 'AZ',
      name: 'Arizona',
      recovered: 2684,
      hospitalizedCurrently: 739,
      deaths: 532,
      deathsPast3days: 1499,
    },
    {
      state: 'CA',
      name: 'California',
      recovered: null,
      hospitalizedCurrently: 4538,
      deaths: 2678,
      deathsPast3days: 7767,
    },
    {
      state: 'CO',
      name: 'Colorado',
      recovered: 2974,
      hospitalizedCurrently: 790,
      deaths: 960,
      deathsPast3days: 2842,
    },
    {
      state: 'CT',
      name: 'Connecticut',
      recovered: 5413,
      hospitalizedCurrently: 1301,
      deaths: 2932,
      deathsPast3days: 8603,
    },
    {
      state: 'DC',
      name: 'District Of Columbia',
      recovered: 879,
      hospitalizedCurrently: 447,
      deaths: 311,
      deathsPast3days: 900,
    },
    {
      state: 'DE',
      name: 'Delaware',
      recovered: 2450,
      hospitalizedCurrently: 288,
      deaths: 221,
      deathsPast3days: 636,
    },
    {
      state: 'FL',
      name: 'Florida',
      recovered: null,
      hospitalizedCurrently: null,
      deaths: 1785,
      deathsPast3days: 5190,
    },
    {
      state: 'GA',
      name: 'Georgia',
      recovered: null,
      hospitalizedCurrently: null,
      deaths: 1400,
      deathsPast3days: 4113,
    },
    {
      state: 'GU',
      name: 'Guam',
      recovered: 124,
      hospitalizedCurrently: null,
      deaths: 5,
      deathsPast3days: 15,
    },
    {
      state: 'HI',
      name: 'Hawaii',
      recovered: 566,
      hospitalizedCurrently: null,
      deaths: 17,
      deathsPast3days: 51,
    },
    {
      state: 'IA',
      name: 'Iowa',
      recovered: 5011,
      hospitalizedCurrently: 402,
      deaths: 252,
      deathsPast3days: 726,
    },
    {
      state: 'ID',
      name: 'Idaho',
      recovered: 1442,
      hospitalizedCurrently: null,
      deaths: 67,
      deathsPast3days: 200,
    },
    {
      state: 'IL',
      name: 'Illinois',
      recovered: null,
      hospitalizedCurrently: 4739,
      deaths: 3349,
      deathsPast3days: 9701,
    },
    {
      state: 'IN',
      name: 'Indiana',
      recovered: null,
      hospitalizedCurrently: 1361,
      deaths: 1490,
      deathsPast3days: 4351,
    },
    {
      state: 'KS',
      name: 'Kansas',
      recovered: 350,
      hospitalizedCurrently: null,
      deaths: 157,
      deathsPast3days: 456,
    },
    {
      state: 'KY',
      name: 'Kentucky',
      recovered: 2266,
      hospitalizedCurrently: 369,
      deaths: 298,
      deathsPast3days: 875,
    },
    {
      state: 'LA',
      name: 'Louisiana',
      recovered: 20316,
      hospitalizedCurrently: 1333,
      deaths: 2267,
      deathsPast3days: 6702,
    },
    {
      state: 'MA',
      name: 'Massachusetts',
      recovered: null,
      hospitalizedCurrently: 3229,
      deaths: 4840,
      deathsPast3days: 14094,
    },
    {
      state: 'MD',
      name: 'Maryland',
      recovered: 2159,
      hospitalizedCurrently: 1665,
      deaths: 1614,
      deathsPast3days: 4677,
    },
    {
      state: 'ME',
      name: 'Maine',
      recovered: 857,
      hospitalizedCurrently: 43,
      deaths: 64,
      deathsPast3days: 189,
    },
    {
      state: 'MI',
      name: 'Michigan',
      recovered: 22686,
      hospitalizedCurrently: 1531,
      deaths: 4526,
      deathsPast3days: 13262,
    },
    {
      state: 'MN',
      name: 'Minnesota',
      recovered: 6322,
      hospitalizedCurrently: 476,
      deaths: 558,
      deathsPast3days: 1600,
    },
    {
      state: 'MO',
      name: 'Missouri',
      recovered: null,
      hospitalizedCurrently: 855,
      deaths: 472,
      deathsPast3days: 1339,
    },
    {
      state: 'MP',
      name: 'Northern Mariana Islands',
      recovered: 12,
      hospitalizedCurrently: null,
      deaths: 2,
      deathsPast3days: 6,
    },
    {
      state: 'MS',
      name: 'Mississippi',
      recovered: 4421,
      hospitalizedCurrently: 607,
      deaths: 421,
      deathsPast3days: 1226,
    },
    {
      state: 'MT',
      name: 'Montana',
      recovered: 422,
      hospitalizedCurrently: 4,
      deaths: 16,
      deathsPast3days: 48,
    },
    {
      state: 'NC',
      name: 'North Carolina',
      recovered: null,
      hospitalizedCurrently: 513,
      deaths: 544,
      deathsPast3days: 1578,
    },
    {
      state: 'ND',
      name: 'North Dakota',
      recovered: 762,
      hospitalizedCurrently: 34,
      deaths: 35,
      deathsPast3days: 99,
    },
    {
      state: 'NE',
      name: 'Nebraska',
      recovered: null,
      hospitalizedCurrently: null,
      deaths: 92,
      deathsPast3days: 268,
    },
    {
      state: 'NH',
      name: 'New Hampshire',
      recovered: 1210,
      hospitalizedCurrently: 112,
      deaths: 121,
      deathsPast3days: 346,
    },
    {
      state: 'NJ',
      name: 'New Jersey',
      recovered: 15642,
      hospitalizedCurrently: 4628,
      deaths: 9116,
      deathsPast3days: 26869,
    },
    {
      state: 'NM',
      name: 'New Mexico',
      recovered: 1189,
      hospitalizedCurrently: 201,
      deaths: 181,
      deathsPast3days: 522,
    },
    {
      state: 'NV',
      name: 'Nevada',
      recovered: 205,
      hospitalizedCurrently: null,
      deaths: 301,
      deathsPast3days: 880,
    },
    {
      state: 'NY',
      name: 'New York',
      recovered: 57180,
      hospitalizedCurrently: 7776,
      deaths: 21271,
      deathsPast3days: 63144,
    },
    {
      state: 'OH',
      name: 'Ohio',
      recovered: null,
      hospitalizedCurrently: 929,
      deaths: 1331,
      deathsPast3days: 3908,
    },
    {
      state: 'OK',
      name: 'Oklahoma',
      recovered: 3154,
      hospitalizedCurrently: 177,
      deaths: 270,
      deathsPast3days: 796,
    },
    {
      state: 'OR',
      name: 'Oregon',
      recovered: 1125,
      hospitalizedCurrently: 139,
      deaths: 127,
      deathsPast3days: 372,
    },
    {
      state: 'PA',
      name: 'Pennsylvania',
      recovered: null,
      hospitalizedCurrently: 2285,
      deaths: 3688,
      deathsPast3days: 10720,
    },
    {
      state: 'PR',
      name: 'Puerto Rico',
      recovered: null,
      hospitalizedCurrently: 161,
      deaths: 108,
      deathsPast3days: 317,
    },
    {
      state: 'RI',
      name: 'Rhode Island',
      recovered: 772,
      hospitalizedCurrently: 292,
      deaths: 418,
      deathsPast3days: 1205,
    },
    {
      state: 'SC',
      name: 'South Carolina',
      recovered: 4120,
      hospitalizedCurrently: null,
      deaths: 330,
      deathsPast3days: 951,
    },
    {
      state: 'SD',
      name: 'South Dakota',
      recovered: 2125,
      hospitalizedCurrently: 79,
      deaths: 34,
      deathsPast3days: 96,
    },
    {
      state: 'TN',
      name: 'Tennessee',
      recovered: 7369,
      hospitalizedCurrently: null,
      deaths: 242,
      deathsPast3days: 720,
    },
    {
      state: 'TX',
      name: 'Texas',
      recovered: 20141,
      hospitalizedCurrently: 1735,
      deaths: 1049,
      deathsPast3days: 3026,
    },
    {
      state: 'UT',
      name: 'Utah',
      recovered: 2901,
      hospitalizedCurrently: 172,
      deaths: 66,
      deathsPast3days: 188,
    },
    {
      state: 'VA',
      name: 'Virginia',
      recovered: 3124,
      hospitalizedCurrently: 1593,
      deaths: 827,
      deathsPast3days: 2408,
    },
    {
      state: 'VI',
      name: 'US Virgin Islands',
      recovered: 57,
      hospitalizedCurrently: null,
      deaths: 4,
      deathsPast3days: 12,
    },
    {
      state: 'VT',
      name: 'Vermont',
      recovered: 744,
      hospitalizedCurrently: 21,
      deaths: 53,
      deathsPast3days: 159,
    },
    {
      state: 'WA',
      name: 'Washington',
      recovered: null,
      hospitalizedCurrently: 393,
      deaths: 905,
      deathsPast3days: 2666,
    },
    {
      state: 'WI',
      name: 'Wisconsin',
      recovered: 4875,
      hospitalizedCurrently: 543,
      deaths: 398,
      deathsPast3days: 1156,
    },
    {
      state: 'WV',
      name: 'West Virginia',
      recovered: 761,
      hospitalizedCurrently: 53,
      deaths: 53,
      deathsPast3days: 155,
    },
    {
      state: 'WY',
      name: 'Wyoming',
      recovered: 438,
      hospitalizedCurrently: 12,
      deaths: 7,
      deathsPast3days: 21,
    },
  ],
};
