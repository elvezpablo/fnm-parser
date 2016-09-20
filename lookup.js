module.exports = {
  '01A': [
    {
      id: '010',
      position: 1,
      length: 3,
      label: 'Mortgage Type and Terms',
    },
    {
      id: '020',
      position: 4,
      length: 2,
      label: 'Mortgage Applied For (Other)',
      process: (d) => {
        const s = {
          '01': 'Conventional',
          '02': 'VA',
          '03': 'FHA',
          '04': 'USDA / Rural Housing Service',
          '07': 'Other',
        };
        return (d in s) ? s[d] : '';
      },
    },
    {
      position: 131,
      length: 15,
      label: 'Loan Amount',
      process: (a) => {
        return parseFloat(a);
      },
    },
    {
      position: 146,
      length: 7,
      label: 'Interest Rate',
      process: (a) => {
        return parseFloat(a);
      },
    },
    {
      position: 153,
      length: 3,
      label: 'No. of Months',
      process: function (a) {
        return parseInt(a);
      },
    },
    {
      position: 156,
      length: 2,
      label: 'Amortization Type',
      process: function (a) {
        const l = {
          '01': 'Adjustable Rate',
          '04': 'GEM',
          '05': 'Fixed Rate',
          '06': 'GPM',
          '13': 'Other',
        };
        if (a in l) {
          return l[a];
        }
        return '';
      },
    },
    {
      position: 158,
      length: 80,
      label: 'Amortization Type Other Explanation',
    },

  ],
  '02A': [
    {
      position: 1,
      length: 3,
      label: 'Information',
    },
    {
      position: 4,
      length: 50,
      label: 'Street Address',
    },
    {
      position: 54,
      length: 35,
      label: 'City',
    },
    {
      position: 89,
      length: 2,
      label: 'State',
    },
    {
      position: 91,
      length: 5,
      label: 'Zip Code',
    },

  ],
  '03A': [
    {
      position: 1,
      length: 3,
      label: 'Applicant(s) Data',
    },
    {
      position: 4,
      length: 2,
      label: 'Applicant or Co-Applicant',
      process: function (d) {
        return (d && d == 'BW') ? 'Applicant' : 'Co-Applicant';
      },
    },
    {
      position: 6,
      length: 9,
      label: 'SSN',
    },
    {
      position: 15,
      length: 35,
      label: 'First Name',
    },
    {
      position: 50,
      length: 35,
      label: 'Middle Name',
    },
    {
      position: 85,
      length: 35,
      label: 'Last Name',
    },
    {
      position: 120,
      length: 4,
      label: 'Generation',
    },
    {
      position: 124,
      length: 10,
      label: 'Home Phone',
    },
    {
      position: 134,
      length: 3,
      label: 'Age',
    },
    {
      position: 137,
      length: 2,
      label: 'Years School',
    },
    {
      position: 139,
      length: 1,
      label: 'Martial Status',
      process: function (d) {
        const s = {
          M: 'Married',
          S: 'Separated',
          U: 'Unmarried',
        };
        if (d in s) {
          return s[d];
        }
      },
    },
  ],
  '03C': [
    {
      position: 1,
      length: 3,
      label: 'Applicant(s) Address',
    },
    {
      position: 4,
      length: 9,
      label: 'SSN',
    },
    {
      position: 13,
      length: 2,
      label: 'Residency Type',
      process: function (d) {
        const s = {
          F4: 'Former Residence',
          ZG: 'Present Residence',
          BH: 'Mailing Address',
        };
        if (d in s) {
          return s[d];
        }
      },
    },
    {
      position: 15,
      length: 50,
      label: 'Street Address',
    },
    {
      position: 65,
      length: 35,
      label: 'City',
    },
    {
      position: 100,
      length: 2,
      label: 'State',
    },
    {
      position: 102,
      length: 5,
      label: 'Zip Code',
    },
    {
      position: 107,
      length: 4,
      label: 'Zip Code Plus Four',
    },
    {
      position: 111,
      length: 1,
      label: 'Basis Type',
      process: (d) => {
        const s = {
          X: 'Living Rent Free',
          R: 'Rent',
          O: 'Own',
        };
        if (d in s) {
          return s[d];
        }
      },
    },
    {
      position: 112,
      length: 2,
      label: 'Duration Years',
      process: (d) => {
        return (d) ? parseInt(d, 10) : '';
      },
    },
    {
      position: 114,
      length: 2,
      label: 'Duration Months',
      process: function (d) {
        if (d) {
          d = parseInt(d);
          if (d > 11 && d < 0) {
            d = '';
          }
        }
        return d;
      },
    },
    {
      position: 116,
      length: 50,
      label: 'Country',
    },
  ],
  '04A': [
    {
      position: 1,
      length: 3,
      label: 'Borrower Employer',
    },
    {
      position: 4,
      length: 9,
      label: 'SSN',
    },
    {
      position: 13,
      length: 35,
      label: 'Employer Name',
    },
    {
      position: 48,
      length: 35,
      label: 'Employer Street Address',
    },
    {
      position: 83,
      length: 35,
      label: 'Employer City',
    },
    {
      position: 118,
      length: 2,
      label: 'Employer State',
    },
    {
      position: 120,
      length: 5,
      label: 'Employer Zip Code',
    },
    {
      position: 125,
      length: 4,
      label: 'Employer Zip Code Plus Four',
    },
    {
      position: 129,
      length: 1,
      label: 'Self Employed',
    },
    {
      position: 130,
      length: 2,
      label: 'Years On Job',
    },
    {
      position: 132,
      length: 2,
      label: 'Months On Job',
    },
    {
      position: 134,
      length: 2,
      label: 'Number of Years in this line of work',
    },
    {
      position: 136,
      length: 25,
      label: 'Employment Position Description',
    },
    {
      position: 161,
      length: 10,
      label: 'Employer Phone Number',
    },
  ],
  '10B': [
    {
      position: 1,
      length: 3,
      label: 'Loan Originator Information',
    },
    {
      position: 4,
      length: 1,
      label: 'This application was taken by',
      process: (d) => {
        const s = {
          F: 'Face-to-Face',
          M: 'Mail or Fax',
          T: 'Telephone',
          I: 'Internet or E-Mail',
        };
        return (d in s) ? s[d] : '';
      },
    },
    {
      position: 5,
      length: 60,
      label: 'Name',

    },
    {
      position: 65,
      length: 8,
      label: 'The date of loan origin',
    },
    {
      position: 73,
      length: 10,
      label: 'Phone number',
    },
    {
      position: 83,
      length: 35,
      label: 'Name',
    },
    {
      position: 118,
      length: 35,
      label: 'Street Address',
    },
    {
      position: 153,
      length: 35,
      label: 'Street Address 2',
    },
    {
      position: 223,
      length: 2,
      label: 'State Code',
    },
    {
      position: 225,
      length: 5,
      label: 'Zip Code',
    },
    {
      position: 230,
      length: 4,
      label: 'Zip Code Plus 4',
    },
  ],
};
