export const strict = false;

export const state = () => ({
    dialog: false,
    dialrlone: false,
    dialylone: false,
    dialblone: false,
    dialyltwo: false,
    dialbltwo: false,
    dialgline: false,
    dialvline: false,
    bvisible1: false,
    bvisible2: false,
    bvisible3: false,
    lines: [
      {
        title: 'Red Line',
        enabled: true,
        stations: "Dilshad Garden, Jhilmil, Mansarovar Park, Delhi Shahdara, Welcome, Seelampur, Shastri Park, Kashmere Gate, Tis Hazari, Pul Bangash, Pratap Nagar, Shastri Nagar, Inderlok, Kanhiya Nagar, Keshav Puram, Netaji Subhash Place, Kohat Enclave, Pitam Pura, Rohini East, Rohini West, Rithala",
        length: "24.4 KM",
        people: 734852,
        color: "rgba(255,99,132,1)"
      },
      {
        title: 'Yellow Line',
        enabled: true,
        stations: "Jahangirpuri, Adarsh Nagar, Azadpur, Model Town, GTB Nagar, Vishwa Vidyalaya, Vidhan Sabha, Civil Lines, Kashmere Gate, Chandni Chowk, Chawri Bazar, New Delhi, Rajiv Chowk, Patel Chowk, Central Secretariat, Udyog Bhawan, Race Course, Jor Bagh, INA, AIIMS, Green Park, Hauz Khas, Malviya Nagar, Saket, Qutub Minar, Chhatarpur, Sultanpur, Ghitorni, Arjan Garh, Guru Dronacharya, Sikandarpur, MG Road, IFFCO Chowk, HUDA City Centre",
        length: "43.7 KM",
        people: 1894564,
        color: "rgba(188, 184, 5, 1)"
      },
      {
        title: 'Blue Line',
        enabled: true,
        stations: "Noida City Centre, Noida Golf Course, Botanical Garden, Noida Sector 18, Noida Sector 16, Noida Sector 15, New Ashok Nagar, Mayur Vihar Extension, Mayur Vihar-I, Akshardham, Yamuna Bank, Indraprastha, Pragati Maidan, Mandi House, Barakhamba Road, Rajiv Chowk, R K Ashram Marg, Jhandewalan, Karol Bagh, Rajendra Place, Patel Nagar, Shadipur, Kirti Nagar, Moti Nagar, Ramesh Nagar, Rajouri Garden, Tagore Garden, Subhash Nagar, Janakpuri East, Janakpuri West, Uttam Nagar East, Uttam Nagar West, Nawada, Dwarka Mor, Dwarka, Dwarka Sector 14, Dwarka Sector 13, Dwarka Sector 12, Dwarka Sector 11, Dwarka Sector 10, Dwarka Sector 9, Dwarka Sector 8, Dwarka Sector 21",
        length: "57.0 KM",
        people: 1719498,
        color: "rgba(54, 162, 235, 1)"
      },
      {
        title: 'Green Line',
        enabled: true,
        stations: "Kirti Nagar, Inderlok, Satguru Ramsingh Marg, Ashok Park Main, Punjabi Bagh East, Shivaji Park, Madipur, Paschim Vihar East, Paschim Vihar West, Peera Garhi, Udyog Nagar, Surajmal Stadium, Nangloi, Nangloi Railway station, Rajdhani Park, Mundka",
        length: "17.0 KM",
        people: 243339,
        color: "rgba(75, 192, 192, 1)"
      },
      {
        title: 'Violet Line',
        enabled: true,
        stations: "ITO, Mandi House, Janpath, Central Secretariat, Khan Market, Jawaharlal Nehru Stadium, Jangpura, Lajpat Nagar, Moolchand, Kailash Colony, Nehru Place, Kalkaji Mandir, Govind Puri, Okhla Jasola, Sarita Vihar, Mohan Estate, Tughlakabad, Badarpur, Sarai N.H.P.C Chowk, Mewala Maharajpur, Sector 28 Faridabad, Badkal Mor, Old Faridabad, Neelam Chowk, Ajronda Bata Chowk, Escorts Mujesar",
        length: "22.7 KM",
        people: 516715,
        color: "rgba(153, 102, 255, 1)"
      }
    ]
})

export const getters = {
    getdialog: state => {
        return state.dialog;
      },
      dialrlone: state => {
        return state.dialrlone;
      },
      dialylone: state => {
        return state.dialylone;
      },
      dialblone: state => {
        return state.dialblone;
      },
      dialyltwo: state => {
        return state.dialyltwo;
      },
      dialbltwo: state => {
        return state.dialbltwo;
      },
      dialgline: state => {
        return state.dialgline;
      },
      dialvline: state => {
        return state.dialvline;
      },
      lines: state => {
        return state.lines;
      },
      bvisible1: state => {
        return state.bvisible1;
      },
      bvisible2: state => {
        return state.bvisible2;
      },
      bvisible3: state => {
        return state.bvisible3;
      }
  }

  export const mutations = {
    toggledialog: state => {
        state.dialog = !state.dialog;
      },
      toggledialrlone: state => {
        state.dialrlone = !state.dialrlone;
      },
      toggledialylone: state => {
        state.dialylone = !state.dialylone;
      },
      toggledialblone: state => {
        state.dialblone = !state.dialblone;
      },
      toggledialyltwo: state => {
        state.dialyltwo = !state.dialyltwo;
      },
      toggledialbltwo: state => {
        state.dialbltwo = !state.dialbltwo;
      },
      toggledialgline: state => {
        state.dialgline = !state.dialgline;
      },
      toggledialvline: state => {
        state.dialvline = !state.dialvline;
      },
      togglebvisible1: state => {
        state.bvisible1 = !state.bvisible1;
      },
      togglebvisible2: state => {
        state.bvisible2 = !state.bvisible2;
      },
      togglebvisible3: state => {
        state.bvisible3 = !state.bvisible3;
      },
      togglebvisible1f: state => {
        state.bvisible1 = false;
      },
      togglebvisible2f: state => {
        state.bvisible2 = false;
      },
      togglebvisible3f: state => {
        state.bvisible3 = false;
      }
  }