import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';

const users: User[] = [
  {
    id: 1,
    name: 'BeingSalmanKhan',
    username: 'BeingSalmanKhan',
    avatar: 'https://pbs.twimg.com/profile_images/838562307/IMG00882-20100416-0034_400x400.jpg'
  },
  {
    id: 2,
    name: 'iamsrk',
    username: 'iamsrk',
    avatar: 'https://pbs.twimg.com/profile_images/661679664/keep_it_onn_400x400.jpg'
  },
  {
    id: 3,
    name: 'SrBachchan',
    username: 'SrBachchan',
    avatar: 'https://pbs.twimg.com/profile_images/768780297437450240/FJBOm5n8_400x400.jpg'
  }
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  users: User[] = users;
  constructor() { }

  ngOnInit() {
  }

}
