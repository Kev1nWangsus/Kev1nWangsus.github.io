var app = new Vue({
  el: '#page',
  data: {
    webPage: 'Shuo Wang',
    name: 'Shuo Wang',
    email: '1875689740ws@gmail.com',
    address: '',
    briefintro: 'Computer Engineering Undergrad @ UCSB',
    profileurl: 'images/Kevin.jpg',

    contact: [
      {
        type: 'git',
        link: 'https://kev1nwangsus.github.com'
      },
      {
        type: 'bilibili',
        link: 'https://live.bilibili.com/14862896'
      },
      {
        type: 'email',
        link: 'mailto:1875689740ws@gmail.com'
      }
    ],
    hi: "Yo! What's up!",
    content: "My name is Shuo Wang. I'm a second-year computer engineering student in UC Santa Barbara. I enjoy working on hardware projects including embedded system and PCB design. I also code games in my leisure time.",
    /** Personal resume*/
    interns: [
      // {
      //   occupation: '',
      //   company: '',
      //   time: '',
      //   intro: ''
      // }
    ],
    /** Education background*/
    education: [
      {
        Level: 'High School',
        SchoolName: 'Nanjing Foreign Language School',
        Time: '2016 - 2019',
        Intro: ''
      },
      {
        Level: 'College',
        SchoolName: 'UC Santa Barbara',
        Time: '2019 - Present',
        Intro: 'Major: Computer Engineering'
      },
    ],
    /** ability*/
    ability: [
      {
        name: '唱',
        intro: 'Sing'
      },
      {
        name: '跳',
        intro: 'Jump'
      },
      {
        name: 'RAP',
        intro: 'rap'
      },
      {
        name: '篮球',
        intro: 'Basketball'
      },
    ],
    /** skill*/
    skills: [
      {
        name: 'Python',
        percent: 70,
      },
      {
        name: 'C/C++',
        percent: 50
      },
      {
        name: 'html/css',
        percent: 60
      },
      {
        name: 'Linux',
        percent: 30
      },
      {
        name: 'Embedded System',
        percent: 10
      }
    ],
    /** work*/
    work: [
      {
        name: '2048',
        link: '2048.html',
        pic: 'images/2048.png',
        intro: '2048 based on JavaScript'
      },
      {
        name: 'Tetris',
        link: 'https://github.com/Kev1nWangsus/Arduino_tft',
        pic: 'images/tetris.jpg',
        intro: 'Tetris game based on Teensy 3.2'
      }
    ]
  },
  mounted () {
    document.title = this.webPage
  }
})