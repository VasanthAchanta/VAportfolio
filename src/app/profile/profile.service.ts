import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
      livedemo: 'https://mehulk05.github.io/MyShop/#/',
      githurl: 'https://github.com/mehulk05/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/z26.png',
      tech: 'React, Node, MongoDB, Express'
    },


    {
      id: 3,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/mehulk05/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },


    {
      id: 5,
      title: 'Integrate Medium Blogs on your React App',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/z4.png',
      tech: 'React JS'
    },



    {
      id: 6,
      title: 'News App using ReactJS (Parsing XML to JSON)',
      desc: '',
      livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
      githurl: 'https://github.com/mehulk05/NewsApp-using-React',
      mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
      imgUrl: 'assets/images/z24.png',
      tech: 'React JS, XMl to JSON'
    },



    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-Book/',
      githurl: 'https://github.com/mehulk05/Blog-Book',
      mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: 'https://mehulk05.github.io/COVOID-19/',
      githurl: 'https://github.com/mehulk05/COVOID-19',
      mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Weather App with React',
      desc: '',
      livedemo: 'https://mehulk05.github.io/React-Weather/',
      githurl: 'https://github.com/mehulk05/React-Weather-App',
      mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      tech: 'Angular8, Java ,Hibernate'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
      mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
      mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
      imgUrl: 'assets/images/z12.png',
      tech: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05',
      mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
      imgUrl: 'assets/images/z13.png',
      tech: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
      mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = `Software Developer with around 2 years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ versions,Python,Javascript and  UI with Responsive Designs .
  Have good understanding of Jquery, Bootstrap, SQL DB`

  about = "Lover of innovation and everything related to generate new knowledge.Accept challenging situations and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1CbJtNa3xbD3vnyt8N9dSceyrjkPR7z9B/view?usp=share_link"

  skillsData: any = [    
    {
      'id': '1',
      'skill': 'FIGMA',
      'progress': '80%',
      'icon': 'assets/images/figma.png'
    },
    {
      'id': '2',
      'skill': 'HTML',
      'progress': '80%',
      'icon': 'assets/images/html.png'
    },
    {
      'id': '3',
      'skill': 'CSS',
      'progress': '85%',
      'icon': 'assets/images/css.png'
    },
    {
      'id': '4',
      'skill': 'JAVASCRIPT',
      'progress': '80%',
      'icon': 'assets/images/js.png'
    },
    {
      'id': '5',
      'skill': 'TYPESCRIPT',
      'progress': '80%',
      'icon': 'assets/images/ts.png'
    },
    {
      'id': '6',
      'skill': 'ANGULAR 2+',
      'progress': '85%',
      'icon': 'assets/images/angular.png'
    },
    {
      'id': '7',
      'skill': 'SQLITE3',
      'progress': '75%',
      'icon': 'assets/images/sqlite.png'
    },
    {
      'id': '8',
      'skill': 'INFLUX DB',
      'progress': '75%',
      'icon': 'assets/images/influxGrafana.png'
    },
    // {
    //   'id': '5',
    //   'skill': 'REACT JS',
    //   'progress': '75%',
    //   'icon': ''
    // },
    {
      'id': '9',
      'skill': 'PYTHON',
      'progress': '70%',
      'icon': 'assets/images/python.png'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      // 'info': `S.R.K.R Engineering College Affiliated To Andhra University`,
      'institution': 'S.R.K.R Engineering College Affiliated To Andhra University, Bhimavaram , Andhra Pradesh'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'Sasi Junior College',
//       'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
// There was also a good base on physics, mathematics and chemistry.
// Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'Bhashyam Public School',
//       'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
// Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Agneyas Labs',
      location: 'Bengaluru(INDIA)',
      timeline: 'Oct 2021 to Present',
      role: 'Software Engineer',
      work: `Developed UI/UX model using FIGMA wire framing and prototyping . 
      Developed multiple components in the Angular based web application using HTML,CSS,Typescript to make responsive web page . 
      Developed a dashboard component along with CSS animations which displays real time values received over UDP with its corresponding animations and also posts command requests to control the charging state . 
      Developed datatables using Ajax jquery and html tables using REST APIs through HTTP and Websocket requests to Python using Python Flask. Developed backend code for multiple components using Python to write queries in Sqlite3 database and various libraries such as OS, Threading, csv, logging, etc.for reports generation, downloading reports in local system, uploading files from local system, forming new insights using data.`
    },
    {
      id: 3,
      company: 'Al Malki Group(CATDUCT)',
      location: 'Doha(QATAR)',
      timeline: 'Feb 2020 to Apr 2021',
      role: 'Technical Sales Engineer',
      work: `Identifying and establishing new business .
      Managing database on clients using MS Excel . 
      Preparing tenders, proposals and quotations using MS Access .
      Creating reports and insights of performance and opportunities using spreadsheets .
      Negotiating contracts, terms and conditions .
      Providing product education and advice .
      Ensuring that sales targets are met ` 
    },
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

    {
      id: 1,
      company: 'IndiGo Airline',
      location: 'Hyderabad(INDIA)',
      timeline: 'May 2019 - Dec 2021',
      role: 'Skipper(Customer Service Executive)',
      work: `Ensuring smooth flight operations from arrival to departure of the flight .
      Managing the flight departures, arrivals, baggage handling using airlines software(CLI Format) .
      Responsible for balancing the flight using Load and Trim sheet .
      Responsible for documenting each flight operations sheet in the portal . 
      Coordinating with multiple teams and handling multiple teams at a time to ensure safety and time targets are achieved `
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
