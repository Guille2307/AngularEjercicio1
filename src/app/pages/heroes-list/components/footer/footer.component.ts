import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  public twitter: string = 'twitter';
  public urlTwitter: string = 'https://twitter.com/marvelspain';

  public facebook: string = 'facebook';
  public urlFacebook: string =
    'https://www.facebook.com/MarvelESP/?brand_redir=6883542487';

  public instagram: string = 'instagram';
  public urlInstagram: string = 'https://www.instagram.com/marvel/?hl=es';

  ngOnInit(): void {}
}
