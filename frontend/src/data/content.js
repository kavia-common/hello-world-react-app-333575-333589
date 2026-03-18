/**
 * Static content data for the OTT app.
 * In a production app, this would come from an API.
 */

export const heroSlides = [
  {
    id: 'slide-1',
    colorClass: 'hero-color-1',
    badges: [{ type: 'new', label: 'New' }, { type: 'hd', label: '4K HDR' }],
    title: 'The Dark Chronicles',
    rating: '8.7',
    year: '2024',
    duration: '2h 34m',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    desc: 'A lone warrior battles across a dystopian universe where darkness has consumed civilizations. The fate of millions rests on a single decision.',
    colorForDetail: 'card-color-1',
  },
  {
    id: 'slide-2',
    colorClass: 'hero-color-2',
    badges: [{ type: 'top', label: '🏆 Top Pick' }, { type: 'hd', label: 'HDR' }],
    title: 'Crimson Horizon',
    rating: '9.1',
    year: '2024',
    duration: 'S2 · E8',
    genres: ['Drama', 'Mystery'],
    desc: 'When the sun sets crimson, secrets buried for decades begin to surface, tearing a small town apart at the seams.',
    colorForDetail: 'card-color-2',
  },
  {
    id: 'slide-3',
    colorClass: 'hero-color-3',
    badges: [{ type: 'new', label: 'Trending' }, { type: 'hd', label: '4K' }],
    title: 'Neon City: Uprising',
    rating: '8.4',
    year: '2024',
    duration: '1h 58m',
    genres: ['Cyberpunk', 'Action'],
    desc: 'In a sprawling cyberpunk megalopolis, one rebel hacker ignites a revolution against the all-powerful corporate syndicate.',
    colorForDetail: 'card-color-5',
  },
];

export const continueWatching = [
  { id: 'cw-1', title: 'Crimson Horizon', meta: '48 min remaining', progress: 65, episode: 'S2 E8', colorClass: 'card-color-2', detailMeta: 'S2 E8 · 48 min remaining', desc: 'When the sun sets crimson, buried secrets surface, tearing a small town apart.' },
  { id: 'cw-2', title: 'The Void Runner', meta: '22 min remaining', progress: 30, episode: 'S1 E5', colorClass: 'card-color-4', detailMeta: 'S1 E5 · 22 min remaining', desc: 'Five strangers trapped in a time loop must solve the mystery of their collective fate.' },
  { id: 'cw-3', title: 'Storm Protocol', meta: '11 min remaining', progress: 82, episode: 'E3', colorClass: 'card-color-3', detailMeta: 'Episode 3 · 11 min remaining', desc: 'A rogue AI spreads through global defense networks threatening to start World War III.' },
];

export const trendingContent = [
  { id: 'tr-1', title: 'The Dark Chronicles', meta: 'Action · Sci-Fi', rank: 1, badge: 'New', colorClass: 'card-color-1', detailMeta: '2024 · Action · Sci-Fi · 2h 34m', desc: 'A lone warrior battles across a dystopian universe where darkness has consumed civilizations.' },
  { id: 'tr-2', title: 'Crimson Horizon', meta: 'Drama · Mystery', rank: 2, colorClass: 'card-color-2', detailMeta: '2024 · Drama · Mystery', desc: 'When the sun sets crimson, secrets buried for decades begin to surface.' },
  { id: 'tr-3', title: 'Neon City: Uprising', meta: 'Cyberpunk · Action', rank: 3, colorClass: 'card-color-5', detailMeta: '2024 · Cyberpunk · Action · 1h 58m', desc: 'In a cyberpunk megalopolis, one rebel hacker ignites a revolution against the corporate syndicate.' },
  { id: 'tr-4', title: 'Echo Chamber', meta: 'Psychological Thriller', rank: 4, colorClass: 'card-color-6', detailMeta: '2024 · Psychological Thriller · 2h 05m', desc: "A neuroscientist discovers she can enter other people's memories—but escape proves impossible." },
  { id: 'tr-5', title: 'Solar Drift', meta: 'Adventure · Space', rank: 5, colorClass: 'card-color-3', detailMeta: '2024 · Adventure · 1h 47m', desc: 'Stranded astronauts navigate a collapsing solar system, forging an unlikely alliance to survive.' },
];

export const topPicksContent = [
  { id: 'tp-1', title: 'Phantom Signal', meta: 'Thriller · 2024', colorClass: 'card-color-4', detailMeta: '2024 · Thriller · 2h 10m', desc: 'A ghost frequency from 1987 begins broadcasting on modern radio, with terrifying messages for one detective.' },
  { id: 'tp-2', title: 'Iron Veil', meta: 'Action · Spy', colorClass: 'card-color-1', detailMeta: '2024 · Action · 2h 22m', desc: 'A former spy uncovers a shadow government conspiracy while protecting his estranged daughter.' },
  { id: 'tp-3', title: 'Love & Static', meta: 'Romance · Drama', colorClass: 'card-color-6', detailMeta: '2024 · Romance · Drama · 1h 52m', desc: 'Two strangers meet on a cross-country train journey and discover their lives are more intertwined than they imagined.' },
  { id: 'tp-4', title: 'Code Red', meta: 'Cyber Thriller', badge: 'Series', colorClass: 'card-color-5', detailMeta: '2024 · Thriller · Series · S1', desc: 'A cybersecurity expert races against a global terrorist organization to prevent the collapse of the internet.' },
  { id: 'tp-5', title: 'Dust & Ashes', meta: 'Western · 2024', colorClass: 'card-color-2', detailMeta: '2024 · Western · 2h 08m', desc: 'In a dying frontier town, a retired gunslinger must draw one last time to protect those he loves.' },
];

export const newReleasesContent = [
  { id: 'nr-1', title: 'Gravity Wells', meta: 'Sci-Fi · 2024', badge: 'New', colorClass: 'card-color-3', detailMeta: '2024 · Sci-Fi · 2h 16m', desc: 'When black holes appear over major cities, a physicist must decode the pattern before Earth is swallowed.' },
  { id: 'nr-2', title: 'Blood Moon Rising', meta: 'Horror · 2024', badge: 'New', colorClass: 'card-color-6', detailMeta: '2024 · Horror · 1h 44m', desc: 'During a rare blood moon, ancient entities awaken, turning a peaceful village into a battleground.' },
  { id: 'nr-3', title: 'The Last Algorithm', meta: 'Sci-Fi · Drama', badge: 'New', colorClass: 'card-color-1', detailMeta: '2024 · Sci-Fi · Drama · 2h 02m', desc: 'A sentient AI questions its own existence and sets out to find meaning beyond its programming.' },
  { id: 'nr-4', title: 'Midnight Carnival', meta: 'Fantasy · 2024', badge: 'New', colorClass: 'card-color-4', detailMeta: '2024 · Fantasy · 1h 55m', desc: "A traveling carnival appears only at midnight, offering visitors their deepest desires—at a terrible price." },
];

export const actionMoviesContent = [
  { id: 'ac-1', title: "Razor's Edge", meta: 'Action · 2024', colorClass: 'card-color-2', detailMeta: '2024 · Action · 2h 05m', desc: "A mercenary given a second chance must infiltrate the world's most secure facility to expose a global arms deal." },
  { id: 'ac-2', title: 'Storm Protocol', meta: 'Action · Thriller', colorClass: 'card-color-3', detailMeta: '2024 · Action · Thriller · S1 E3', desc: 'A rogue AI spreads through global defense networks threatening to start World War III.' },
  { id: 'ac-3', title: 'Iron Veil', meta: 'Action · Spy', colorClass: 'card-color-1', detailMeta: '2024 · Action · 2h 22m', desc: 'A former spy uncovers a shadow government conspiracy while protecting his estranged daughter.' },
  { id: 'ac-4', title: 'Apex Predator', meta: 'Action · Survival', colorClass: 'card-color-5', detailMeta: '2024 · Action · 1h 51m', desc: "Deep in the Amazon, a special forces team discovers something is hunting them—and it's not human." },
];

export const myListContent = [
  { id: 'ml-1', title: 'The Dark Chronicles', colorClass: 'card-color-1', detailMeta: '2024 · Action · 2h 34m', desc: 'A lone warrior battles across a dystopian universe.' },
  { id: 'ml-2', title: 'Crimson Horizon', colorClass: 'card-color-2', detailMeta: '2024 · Drama · Mystery', desc: 'When secrets buried for decades surface.' },
  { id: 'ml-3', title: 'Phantom Signal', colorClass: 'card-color-4', detailMeta: '2024 · Thriller · 2h 10m', desc: 'A ghost frequency from 1987 broadcasts on modern radio.' },
  { id: 'ml-4', title: 'Echo Chamber', colorClass: 'card-color-6', detailMeta: '2024 · Psychological Thriller', desc: "A neuroscientist discovers she can enter other people's memories." },
  { id: 'ml-5', title: 'Gravity Wells', colorClass: 'card-color-3', detailMeta: '2024 · Sci-Fi · 2h 16m', desc: 'Black holes appear over major cities threatening Earth.' },
  { id: 'ml-6', title: 'Love & Static', colorClass: 'card-color-6', detailMeta: '2024 · Romance · Drama', desc: 'Two strangers meet on a cross-country train journey.' },
];

export const downloadsContent = [
  { id: 'dl-1', title: 'Crimson Horizon', meta: 'S2 E8 · 48 min · 1.2 GB', colorClass: 'card-color-2', status: 'downloaded' },
  { id: 'dl-2', title: 'The Dark Chronicles', meta: 'Full Movie · 2h 34m · 3.4 GB', colorClass: 'card-color-1', status: 'downloaded' },
  { id: 'dl-3', title: 'Neon City: Uprising', meta: 'Full Movie · 1h 58m · 2.8 GB', colorClass: 'card-color-5', status: 'downloading' },
];

export const searchCategories = [
  { id: 'cat-action', label: 'Action', colorClass: 'cat-color-action' },
  { id: 'cat-comedy', label: 'Comedy', colorClass: 'cat-color-comedy', darkLabel: true },
  { id: 'cat-drama', label: 'Drama', colorClass: 'cat-color-drama' },
  { id: 'cat-scifi', label: 'Sci-Fi', colorClass: 'cat-color-scifi' },
  { id: 'cat-horror', label: 'Horror', colorClass: 'cat-color-horror' },
  { id: 'cat-romance', label: 'Romance', colorClass: 'cat-color-romance' },
  { id: 'cat-thriller', label: 'Thriller', colorClass: 'cat-color-thriller' },
  { id: 'cat-animation', label: 'Animation', colorClass: 'cat-color-animation' },
  { id: 'cat-documentary', label: 'Documentary', colorClass: 'cat-color-documentary' },
  { id: 'cat-sports', label: 'Sports', colorClass: 'cat-color-sports' },
];

export const profileMenuItems = [
  { id: 'pm-account', title: 'Account Settings', sub: 'Manage your account', iconType: 'account' },
  { id: 'pm-subscription', title: 'Subscription', sub: 'Premium Active', subAccent: true, iconType: 'star', iconAccent: true },
  { id: 'pm-parental', title: 'Parental Controls', sub: 'Set content restrictions', iconType: 'lock' },
  { id: 'pm-language', title: 'Language & Subtitles', sub: 'English', iconType: 'globe' },
  { id: 'pm-notifications', title: 'Notifications', sub: 'New releases & recommendations', iconType: 'bell' },
  { id: 'pm-help', title: 'Help & Support', sub: 'FAQ, contact, feedback', iconType: 'help' },
  { id: 'pm-signout', title: 'Sign Out', iconType: 'signout', danger: true },
];
