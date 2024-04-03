type SocialKeys = 'discord' | 'github' | 'patreon' | 'paypal' | 'reddit' | 'twitch' | 'twitter' | 'youtube';

type Socials = Record<
  SocialKeys,
  {
    name: string;
    link: string;
    color: string;
  }
>;

export const socials: Socials = {
  discord: { name: 'Discord', link: 'https://discord.minecolonies.com', color: '#7289da' },
  github: { name: 'Github', link: 'https://github.com/ldtteam/minecolonies', color: '#2b3137' },
  patreon: { name: 'Patreon', link: 'https://www.patreon.com/minecolonies', color: '#f96854' },
  paypal: { name: 'Paypal', link: 'https://www.paypal.me/ldtteam', color: '#003087' },
  reddit: { name: 'Reddit', link: 'https://reddit.com/r/minecolonies', color: '#ff4500' },
  twitch: { name: 'Twitch', link: 'https://www.twitch.tv/minecoloniesteam', color: '#6441a5' },
  twitter: { name: 'Twitter', link: 'https://twitter.com/minecoloniesmod', color: '#1da1f2' },
  youtube: { name: 'Youtube', link: 'https://www.youtube.com/user/MrPMardle', color: '#ff0000' }
};
