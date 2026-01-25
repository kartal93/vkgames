// ===== VKGAMES.FR - Complete App =====

// ===== Audio =====
const audio = {
    bgMusic: document.getElementById('bg-music'),
    songPreview: document.getElementById('song-preview'),
    click: document.getElementById('sfx-click'),
    success: document.getElementById('sfx-success'),
    error: document.getElementById('sfx-error')
};

// Set volumes
if (audio.bgMusic) audio.bgMusic.volume = 0.15;
if (audio.songPreview) audio.songPreview.volume = 0.5;
if (audio.click) audio.click.volume = 0.2;
if (audio.success) audio.success.volume = 0.3;
if (audio.error) audio.error.volume = 0.3;

// ===== Game Configurations =====
const gameConfigs = {
    music: {
        icon: '🎵',
        title: 'Quiz Musical',
        modes: [
            { id: 'quiz', emoji: '🎯', name: 'Quiz', desc: 'Trouve l\'artiste' },
            { id: 'blind', emoji: '🎧', name: 'Blind Test', desc: 'Écoute et devine' },
            { id: 'higherlower', emoji: '📊', name: 'Higher/Lower', desc: 'Compare les streams' },
            { id: 'clash', emoji: '⚔️', name: 'Clash', desc: 'Tournoi d\'artistes' }
        ],
        genres: [
            { id: 'pop', emoji: '🎤', name: 'Pop' },
            { id: 'rap', emoji: '🎤', name: 'Rap' },
            { id: 'rock', emoji: '🎸', name: 'Rock' },
            { id: 'electro', emoji: '🎧', name: 'Electro' },
            { id: 'mixed', emoji: '🎲', name: 'Mix' }
        ],
        genreTitle: 'Genre musical',
        hlQuestion: 'Qui a le plus de streams ?',
        hlLabel: 'millions de streams',
        clashQuestion: 'Qui préfères-tu ?'
    },
    cinema: {
        icon: '🎬',
        title: 'Quiz Cinéma',
        modes: [
            { id: 'quiz', emoji: '🎯', name: 'Quiz', desc: 'Trouve le film/acteur' },
            { id: 'quotes', emoji: '🎭', name: 'Répliques', desc: 'Devine le film' },
            { id: 'higherlower', emoji: '📊', name: 'Box Office', desc: 'Compare les recettes' },
            { id: 'clash', emoji: '⚔️', name: 'Clash', desc: 'Tournoi d\'acteurs' }
        ],
        genres: [
            { id: 'action', emoji: '💥', name: 'Action' },
            { id: 'comedy', emoji: '😂', name: 'Comédie' },
            { id: 'drama', emoji: '🎭', name: 'Drame' },
            { id: 'scifi', emoji: '🚀', name: 'Sci-Fi' },
            { id: 'mixed', emoji: '🎲', name: 'Mix' }
        ],
        genreTitle: 'Genre de film',
        hlQuestion: 'Quel film a fait le plus au box-office ?',
        hlLabel: 'millions $ box-office',
        clashQuestion: 'Quel acteur préfères-tu ?'
    },
    sport: {
        icon: '⚽',
        title: 'Quiz Sport',
        modes: [
            { id: 'quiz', emoji: '🎯', name: 'Quiz', desc: 'Trouve le joueur/équipe' },
            { id: 'palmares', emoji: '🏆', name: 'Palmarès', desc: 'Devine les victoires' },
            { id: 'higherlower', emoji: '📊', name: 'Stats', desc: 'Compare les stats' },
            { id: 'clash', emoji: '⚔️', name: 'Clash', desc: 'Tournoi de joueurs' }
        ],
        genres: [
            { id: 'football', emoji: '⚽', name: 'Football' },
            { id: 'basketball', emoji: '🏀', name: 'Basketball' },
            { id: 'tennis', emoji: '🎾', name: 'Tennis' },
            { id: 'f1', emoji: '🏎️', name: 'F1' },
            { id: 'mixed', emoji: '🎲', name: 'Mix' }
        ],
        genreTitle: 'Sport',
        hlQuestion: 'Qui a marqué le plus ?',
        hlLabel: 'buts/points en carrière',
        clashQuestion: 'Quel joueur préfères-tu ?'
    },
    gaming: {
        icon: '🎮',
        title: 'Quiz Gaming',
        modes: [
            { id: 'quiz', emoji: '🎯', name: 'Quiz', desc: 'Trouve le jeu/studio' },
            { id: 'retro', emoji: '🕹️', name: 'Retro', desc: 'Jeux classiques' },
            { id: 'higherlower', emoji: '📊', name: 'Ventes', desc: 'Compare les ventes' },
            { id: 'clash', emoji: '⚔️', name: 'Clash', desc: 'Tournoi de jeux' }
        ],
        genres: [
            { id: 'fps', emoji: '🔫', name: 'FPS' },
            { id: 'rpg', emoji: '⚔️', name: 'RPG' },
            { id: 'sports', emoji: '⚽', name: 'Sport' },
            { id: 'adventure', emoji: '🗺️', name: 'Aventure' },
            { id: 'mixed', emoji: '🎲', name: 'Mix' }
        ],
        genreTitle: 'Genre de jeu',
        hlQuestion: 'Quel jeu s\'est le plus vendu ?',
        hlLabel: 'millions de copies',
        clashQuestion: 'Quel jeu préfères-tu ?'
    },
    geo: {
        icon: '🌍',
        title: 'Quiz Géo',
        modes: [
            { id: 'quiz', emoji: '🎯', name: 'Quiz', desc: 'Trouve le pays/capitale' },
            { id: 'flags', emoji: '🚩', name: 'Drapeaux', desc: 'Devine le pays' },
            { id: 'higherlower', emoji: '📊', name: 'Population', desc: 'Compare les populations' },
            { id: 'clash', emoji: '⚔️', name: 'Clash', desc: 'Tournoi de pays' }
        ],
        genres: [
            { id: 'europe', emoji: '🇪🇺', name: 'Europe' },
            { id: 'asia', emoji: '🌏', name: 'Asie' },
            { id: 'america', emoji: '🌎', name: 'Amériques' },
            { id: 'africa', emoji: '🌍', name: 'Afrique' },
            { id: 'mixed', emoji: '🎲', name: 'Monde' }
        ],
        genreTitle: 'Région',
        hlQuestion: 'Quel pays a le plus d\'habitants ?',
        hlLabel: 'millions d\'habitants',
        clashQuestion: 'Quel pays préfères-tu ?'
    }
};

// ===== Game Data =====
const allGameData = {
    music: {
        quiz: {
            pop: [
                { q: "Shape of You", a: "Ed Sheeran", opts: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Charlie Puth"] },
                { q: "Bad Guy", a: "Billie Eilish", opts: ["Billie Eilish", "Dua Lipa", "Ariana Grande", "Halsey"] },
                { q: "Blinding Lights", a: "The Weeknd", opts: ["The Weeknd", "Bruno Mars", "Drake", "Post Malone"] },
                { q: "Levitating", a: "Dua Lipa", opts: ["Dua Lipa", "Charli XCX", "Doja Cat", "Lizzo"] },
                { q: "Derniere Danse", a: "Indila", opts: ["Indila", "Zaz", "Aya Nakamura", "Louane"] },
                { q: "Papaoutai", a: "Stromae", opts: ["Stromae", "Maitre Gims", "Black M", "Soprano"] },
                { q: "Hello", a: "Adele", opts: ["Adele", "Beyonce", "Rihanna", "Lady Gaga"] },
                { q: "Uptown Funk", a: "Bruno Mars", opts: ["Bruno Mars", "The Weeknd", "Pharrell", "Justin Timberlake"] },
                { q: "Roar", a: "Katy Perry", opts: ["Katy Perry", "Taylor Swift", "Pink", "Miley Cyrus"] },
                { q: "Djadja", a: "Aya Nakamura", opts: ["Aya Nakamura", "Wejdene", "Eva", "Marwa Loud"] }
            ],
            rap: [
                { q: "God's Plan", a: "Drake", opts: ["Drake", "Kendrick Lamar", "J. Cole", "Travis Scott"] },
                { q: "HUMBLE.", a: "Kendrick Lamar", opts: ["Kendrick Lamar", "Drake", "J. Cole", "Kanye West"] },
                { q: "Sicko Mode", a: "Travis Scott", opts: ["Travis Scott", "Drake", "Future", "21 Savage"] },
                { q: "Blanka", a: "PNL", opts: ["PNL", "Ninho", "Jul", "Nekfeu"] },
                { q: "Au DD", a: "PNL", opts: ["PNL", "Ninho", "Booba", "Kaaris"] },
                { q: "Bande organisee", a: "Jul", opts: ["Jul", "SCH", "Naps", "Soso Maness"] },
                { q: "Old Town Road", a: "Lil Nas X", opts: ["Lil Nas X", "Post Malone", "DaBaby", "Roddy Ricch"] },
                { q: "Lose Yourself", a: "Eminem", opts: ["Eminem", "50 Cent", "Dr. Dre", "Jay-Z"] }
            ],
            rock: [
                { q: "Bohemian Rhapsody", a: "Queen", opts: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"] },
                { q: "Smells Like Teen Spirit", a: "Nirvana", opts: ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains"] },
                { q: "Sweet Child O' Mine", a: "Guns N' Roses", opts: ["Guns N' Roses", "Bon Jovi", "Aerosmith", "Motley Crue"] },
                { q: "Back in Black", a: "AC/DC", opts: ["AC/DC", "Metallica", "Led Zeppelin", "Black Sabbath"] },
                { q: "Wonderwall", a: "Oasis", opts: ["Oasis", "Blur", "Radiohead", "The Verve"] },
                { q: "Enter Sandman", a: "Metallica", opts: ["Metallica", "Megadeth", "Slayer", "Anthrax"] }
            ],
            electro: [
                { q: "Get Lucky", a: "Daft Punk", opts: ["Daft Punk", "Justice", "Deadmau5", "Calvin Harris"] },
                { q: "Titanium", a: "David Guetta", opts: ["David Guetta", "Calvin Harris", "Avicii", "Tiesto"] },
                { q: "Wake Me Up", a: "Avicii", opts: ["Avicii", "David Guetta", "Calvin Harris", "Tiesto"] },
                { q: "Animals", a: "Martin Garrix", opts: ["Martin Garrix", "Hardwell", "Tiesto", "Avicii"] },
                { q: "Faded", a: "Alan Walker", opts: ["Alan Walker", "Marshmello", "Kygo", "Martin Garrix"] },
                { q: "Lean On", a: "Major Lazer", opts: ["Major Lazer", "DJ Snake", "Diplo", "Skrillex"] }
            ]
        },
        higherLower: [
            { title: "Blinding Lights", artist: "The Weeknd", value: 4600, emoji: "🌟" },
            { title: "Shape of You", artist: "Ed Sheeran", value: 4100, emoji: "💃" },
            { title: "Someone You Loved", artist: "Lewis Capaldi", value: 3400, emoji: "💔" },
            { title: "Dance Monkey", artist: "Tones and I", value: 3000, emoji: "🐒" },
            { title: "Sunflower", artist: "Post Malone", value: 3200, emoji: "🌻" },
            { title: "One Dance", artist: "Drake", value: 2900, emoji: "🕺" },
            { title: "Believer", artist: "Imagine Dragons", value: 2700, emoji: "🔥" },
            { title: "Starboy", artist: "The Weeknd", value: 2800, emoji: "⭐" },
            { title: "Bad Guy", artist: "Billie Eilish", value: 2700, emoji: "😈" },
            { title: "Bohemian Rhapsody", artist: "Queen", value: 2400, emoji: "👑" }
        ],
        clash: [
            { name: "Taylor Swift", info: "Pop", emoji: "🎤", votes: 65 },
            { name: "Drake", info: "Rap", emoji: "🦉", votes: 68 },
            { name: "The Weeknd", info: "R&B", emoji: "⭐", votes: 62 },
            { name: "Billie Eilish", info: "Pop", emoji: "🖤", votes: 58 },
            { name: "Kendrick Lamar", info: "Rap", emoji: "🎯", votes: 66 },
            { name: "Dua Lipa", info: "Pop", emoji: "💃", votes: 60 },
            { name: "Ed Sheeran", info: "Pop", emoji: "🎸", votes: 55 },
            { name: "Beyonce", info: "R&B", emoji: "👑", votes: 70 }
        ]
    },
    cinema: {
        quiz: {
            action: [
                { q: "Quel acteur joue Iron Man ?", a: "Robert Downey Jr.", opts: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"] },
                { q: "Qui realise Inception ?", a: "Christopher Nolan", opts: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Ridley Scott"] },
                { q: "Dans quel film Tom Cruise escalade le Burj Khalifa ?", a: "Mission Impossible 4", opts: ["Mission Impossible 4", "Mission Impossible 5", "Mission Impossible 6", "Mission Impossible 3"] },
                { q: "Qui joue Neo dans Matrix ?", a: "Keanu Reeves", opts: ["Keanu Reeves", "Brad Pitt", "Tom Cruise", "Johnny Depp"] },
                { q: "Quel est le vrai nom de Batman ?", a: "Bruce Wayne", opts: ["Bruce Wayne", "Clark Kent", "Peter Parker", "Tony Stark"] },
                { q: "Qui joue John Wick ?", a: "Keanu Reeves", opts: ["Keanu Reeves", "Tom Hardy", "Jason Statham", "Vin Diesel"] }
            ],
            comedy: [
                { q: "Qui joue dans Intouchables avec Omar Sy ?", a: "Francois Cluzet", opts: ["Francois Cluzet", "Jean Dujardin", "Gad Elmaleh", "Dany Boon"] },
                { q: "Quel acteur joue Ace Ventura ?", a: "Jim Carrey", opts: ["Jim Carrey", "Adam Sandler", "Will Ferrell", "Ben Stiller"] },
                { q: "Dans quel film entend-on 'C'est bon ?'", a: "Asterix Mission Cleopatre", opts: ["Asterix Mission Cleopatre", "Les Visiteurs", "Le Diner de Cons", "Bienvenue chez les Ch'tis"] },
                { q: "Qui realise Very Bad Trip ?", a: "Todd Phillips", opts: ["Todd Phillips", "Judd Apatow", "Adam McKay", "Seth Rogen"] },
                { q: "Quel comedien joue dans La Cite de la Peur ?", a: "Alain Chabat", opts: ["Alain Chabat", "Jamel Debbouze", "Franck Dubosc", "Jean-Paul Rouve"] }
            ],
            drama: [
                { q: "Qui realise Titanic ?", a: "James Cameron", opts: ["James Cameron", "Steven Spielberg", "Martin Scorsese", "Ridley Scott"] },
                { q: "Quel acteur joue dans Le Parrain ?", a: "Marlon Brando", opts: ["Marlon Brando", "Robert De Niro", "Al Pacino", "Joe Pesci"] },
                { q: "Qui joue dans Forrest Gump ?", a: "Tom Hanks", opts: ["Tom Hanks", "Robin Williams", "Jim Carrey", "Bill Murray"] },
                { q: "Quel film a remporte l'Oscar 2020 ?", a: "Parasite", opts: ["Parasite", "1917", "Joker", "Once Upon a Time"] },
                { q: "Qui realise La Liste de Schindler ?", a: "Steven Spielberg", opts: ["Steven Spielberg", "Roman Polanski", "Quentin Tarantino", "Martin Scorsese"] }
            ],
            scifi: [
                { q: "De quelle planete vient Superman ?", a: "Krypton", opts: ["Krypton", "Mars", "Titan", "Vulcain"] },
                { q: "Qui realise Star Wars Episode 4 ?", a: "George Lucas", opts: ["George Lucas", "Steven Spielberg", "J.J. Abrams", "Ridley Scott"] },
                { q: "Quel acteur joue dans Interstellar ?", a: "Matthew McConaughey", opts: ["Matthew McConaughey", "Leonardo DiCaprio", "Brad Pitt", "Tom Hardy"] },
                { q: "En quelle annee se deroule Blade Runner ?", a: "2019", opts: ["2019", "2029", "2039", "2049"] },
                { q: "Qui joue dans E.T. l'extra-terrestre ?", a: "Drew Barrymore", opts: ["Drew Barrymore", "Winona Ryder", "Molly Ringwald", "Jennifer Connelly"] }
            ]
        },
        quotes: [
            { q: "Je suis ton pere", a: "Star Wars", opts: ["Star Wars", "Le Parrain", "Forrest Gump", "Matrix"] },
            { q: "Que la Force soit avec toi", a: "Star Wars", opts: ["Star Wars", "Le Seigneur des Anneaux", "Harry Potter", "Avengers"] },
            { q: "Il est pas interdit, il est regulemente !", a: "Asterix Mission Cleopatre", opts: ["Asterix Mission Cleopatre", "Les Visiteurs", "Le Diner de Cons", "OSS 117"] },
            { q: "C'est cela, oui", a: "Le Pere Noel est une Ordure", opts: ["Le Pere Noel est une Ordure", "Les Bronzes", "Le Splendid", "Les Nuls"] },
            { q: "J'aurais pu avoir une classe", a: "La Haine", opts: ["La Haine", "Les Miserables", "Banlieue 13", "Intouchables"] },
            { q: "I'll be back", a: "Terminator", opts: ["Terminator", "Predator", "Total Recall", "Robocop"] },
            { q: "Here's Johnny!", a: "Shining", opts: ["Shining", "Psychose", "L'Exorciste", "Halloween"] },
            { q: "Tu vois, le monde se divise en deux categories", a: "Le Bon la Brute et le Truand", opts: ["Le Bon la Brute et le Truand", "Il etait une fois dans l'Ouest", "Pour une poignee de dollars", "Impitoyable"] }
        ],
        higherLower: [
            { title: "Avatar", artist: "James Cameron", value: 2923, emoji: "🌿" },
            { title: "Avengers: Endgame", artist: "Marvel", value: 2798, emoji: "🦸" },
            { title: "Titanic", artist: "James Cameron", value: 2195, emoji: "🚢" },
            { title: "Star Wars 7", artist: "Disney", value: 2068, emoji: "⭐" },
            { title: "Avengers: Infinity War", artist: "Marvel", value: 2048, emoji: "💎" },
            { title: "Jurassic World", artist: "Universal", value: 1670, emoji: "🦖" },
            { title: "Le Roi Lion (2019)", artist: "Disney", value: 1656, emoji: "🦁" },
            { title: "The Avengers", artist: "Marvel", value: 1518, emoji: "🛡️" },
            { title: "Fast & Furious 7", artist: "Universal", value: 1516, emoji: "🚗" },
            { title: "Frozen 2", artist: "Disney", value: 1450, emoji: "❄️" }
        ],
        clash: [
            { name: "Leonardo DiCaprio", info: "Acteur", emoji: "🎬", votes: 72 },
            { name: "Tom Hanks", info: "Acteur", emoji: "🏆", votes: 68 },
            { name: "Meryl Streep", info: "Actrice", emoji: "👑", votes: 65 },
            { name: "Brad Pitt", info: "Acteur", emoji: "✨", votes: 63 },
            { name: "Scarlett Johansson", info: "Actrice", emoji: "🖤", votes: 60 },
            { name: "Denzel Washington", info: "Acteur", emoji: "🎯", votes: 67 },
            { name: "Margot Robbie", info: "Actrice", emoji: "💫", votes: 58 },
            { name: "Morgan Freeman", info: "Acteur", emoji: "🎙️", votes: 70 }
        ]
    },
    sport: {
        quiz: {
            football: [
                { q: "Qui a le plus de Ballons d'Or ?", a: "Lionel Messi", opts: ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Johan Cruyff"] },
                { q: "Quelle equipe a gagne la Coupe du Monde 2018 ?", a: "France", opts: ["France", "Croatie", "Bresil", "Allemagne"] },
                { q: "Qui est le meilleur buteur de l'histoire du Real Madrid ?", a: "Cristiano Ronaldo", opts: ["Cristiano Ronaldo", "Raul", "Benzema", "Di Stefano"] },
                { q: "En quelle annee Zidane a-t-il mis son coup de tete ?", a: "2006", opts: ["2006", "2002", "1998", "2010"] },
                { q: "Quel joueur est surnomme 'El Pibe de Oro' ?", a: "Diego Maradona", opts: ["Diego Maradona", "Pele", "Ronaldinho", "Neymar"] },
                { q: "Combien de Champions League a gagne le Real Madrid ?", a: "15", opts: ["15", "13", "14", "12"] }
            ],
            basketball: [
                { q: "Combien de titres NBA a Michael Jordan ?", a: "6", opts: ["6", "5", "7", "4"] },
                { q: "Pour quelle equipe joue LeBron James en 2024 ?", a: "Los Angeles Lakers", opts: ["Los Angeles Lakers", "Miami Heat", "Cleveland Cavaliers", "Golden State Warriors"] },
                { q: "Qui est le meilleur marqueur de l'histoire NBA ?", a: "LeBron James", opts: ["LeBron James", "Kareem Abdul-Jabbar", "Michael Jordan", "Kobe Bryant"] },
                { q: "Quel joueur est surnomme 'The Greek Freak' ?", a: "Giannis Antetokounmpo", opts: ["Giannis Antetokounmpo", "Luka Doncic", "Nikola Jokic", "Joel Embiid"] },
                { q: "Combien de titres NBA ont les Boston Celtics ?", a: "18", opts: ["18", "17", "16", "15"] }
            ],
            tennis: [
                { q: "Qui a le plus de titres du Grand Chelem masculin ?", a: "Novak Djokovic", opts: ["Novak Djokovic", "Rafael Nadal", "Roger Federer", "Pete Sampras"] },
                { q: "Combien de Roland-Garros a gagne Nadal ?", a: "14", opts: ["14", "13", "12", "11"] },
                { q: "Quelle joueuse a le plus de titres du Grand Chelem ?", a: "Margaret Court", opts: ["Margaret Court", "Serena Williams", "Steffi Graf", "Martina Navratilova"] },
                { q: "En quelle annee Federer a gagne son 1er Wimbledon ?", a: "2003", opts: ["2003", "2001", "2004", "2002"] }
            ],
            f1: [
                { q: "Qui a le plus de titres de Champion du Monde F1 ?", a: "Michael Schumacher / Lewis Hamilton", opts: ["Michael Schumacher / Lewis Hamilton", "Ayrton Senna", "Alain Prost", "Sebastian Vettel"] },
                { q: "Pour quelle ecurie Max Verstappen court-il ?", a: "Red Bull Racing", opts: ["Red Bull Racing", "Mercedes", "Ferrari", "McLaren"] },
                { q: "Quel pilote francais a ete Champion du Monde ?", a: "Alain Prost", opts: ["Alain Prost", "Jean Alesi", "Rene Arnoux", "Jacques Laffite"] },
                { q: "Combien de victoires a Ayrton Senna ?", a: "41", opts: ["41", "51", "31", "61"] }
            ]
        },
        palmares: [
            { q: "Combien de Coupes du Monde a le Bresil ?", a: "5", opts: ["5", "4", "6", "3"] },
            { q: "Quelle equipe a gagne l'Euro 2020 ?", a: "Italie", opts: ["Italie", "Angleterre", "Espagne", "France"] },
            { q: "Combien de Ligues des Champions a l'AC Milan ?", a: "7", opts: ["7", "6", "5", "8"] },
            { q: "Quelle nation a le plus de Coupes du Monde de Rugby ?", a: "Nouvelle-Zelande / Afrique du Sud", opts: ["Nouvelle-Zelande / Afrique du Sud", "Australie", "Angleterre", "France"] },
            { q: "Combien de medailles d'or olympiques a Usain Bolt ?", a: "8", opts: ["8", "9", "7", "6"] }
        ],
        higherLower: [
            { title: "Cristiano Ronaldo", artist: "Football", value: 900, emoji: "⚽" },
            { title: "Lionel Messi", artist: "Football", value: 850, emoji: "🐐" },
            { title: "LeBron James", artist: "Basketball", value: 40474, emoji: "🏀" },
            { title: "Tom Brady", artist: "Football US", value: 649, emoji: "🏈" },
            { title: "Wayne Gretzky", artist: "Hockey", value: 894, emoji: "🏒" },
            { title: "Michael Jordan", artist: "Basketball", value: 32292, emoji: "🐂" },
            { title: "Pele", artist: "Football", value: 767, emoji: "👑" },
            { title: "Roger Federer", artist: "Tennis", value: 103, emoji: "🎾" }
        ],
        clash: [
            { name: "Lionel Messi", info: "Football", emoji: "🐐", votes: 75 },
            { name: "Cristiano Ronaldo", info: "Football", emoji: "⚽", votes: 73 },
            { name: "Michael Jordan", info: "Basketball", emoji: "🐂", votes: 80 },
            { name: "LeBron James", info: "Basketball", emoji: "👑", votes: 72 },
            { name: "Tom Brady", info: "Football US", emoji: "🏈", votes: 65 },
            { name: "Roger Federer", info: "Tennis", emoji: "🎾", votes: 68 },
            { name: "Usain Bolt", info: "Athletisme", emoji: "⚡", votes: 70 },
            { name: "Serena Williams", info: "Tennis", emoji: "🏆", votes: 66 }
        ]
    },
    gaming: {
        quiz: {
            fps: [
                { q: "Quel studio a cree Call of Duty ?", a: "Infinity Ward", opts: ["Infinity Ward", "DICE", "Bungie", "Respawn"] },
                { q: "En quelle annee est sorti Counter-Strike ?", a: "1999", opts: ["1999", "2000", "2001", "1998"] },
                { q: "Quel est le nom du personnage principal de Halo ?", a: "Master Chief", opts: ["Master Chief", "Doom Guy", "Marcus Fenix", "Commander Shepard"] },
                { q: "Quel jeu a popularise le Battle Royale ?", a: "PlayerUnknown's Battlegrounds", opts: ["PlayerUnknown's Battlegrounds", "Fortnite", "Apex Legends", "H1Z1"] },
                { q: "Quel studio a cree Overwatch ?", a: "Blizzard", opts: ["Blizzard", "Valve", "Epic Games", "Respawn"] }
            ],
            rpg: [
                { q: "Quel studio a cree The Witcher 3 ?", a: "CD Projekt RED", opts: ["CD Projekt RED", "BioWare", "Bethesda", "From Software"] },
                { q: "Quel est le nom du heros de Zelda ?", a: "Link", opts: ["Link", "Zelda", "Ganondorf", "Epona"] },
                { q: "Quel jeu a le slogan 'Prepare to Die' ?", a: "Dark Souls", opts: ["Dark Souls", "Elden Ring", "Bloodborne", "Sekiro"] },
                { q: "Quel studio a cree Skyrim ?", a: "Bethesda", opts: ["Bethesda", "BioWare", "Obsidian", "CD Projekt RED"] },
                { q: "Quel est le nom du protagoniste de Final Fantasy 7 ?", a: "Cloud Strife", opts: ["Cloud Strife", "Squall Leonhart", "Noctis", "Tidus"] }
            ],
            sports: [
                { q: "Quel studio developpe FIFA/EA FC ?", a: "EA Sports", opts: ["EA Sports", "2K Games", "Konami", "Sony"] },
                { q: "Comment s'appelle le mode carriere de NBA 2K ?", a: "MyCareer", opts: ["MyCareer", "Be A Pro", "Journey", "Career Mode"] },
                { q: "Quel jeu de foot de Konami a ete renomme eFootball ?", a: "PES", opts: ["PES", "FIFA", "Football Manager", "Top Eleven"] }
            ],
            adventure: [
                { q: "Quel studio a cree The Last of Us ?", a: "Naughty Dog", opts: ["Naughty Dog", "Santa Monica", "Insomniac", "Sucker Punch"] },
                { q: "Quel est le nom du protagoniste de Red Dead Redemption 2 ?", a: "Arthur Morgan", opts: ["Arthur Morgan", "John Marston", "Dutch van der Linde", "Micah Bell"] },
                { q: "Quel jeu a lieu dans la ville de Raccoon City ?", a: "Resident Evil", opts: ["Resident Evil", "Silent Hill", "Dead Space", "The Evil Within"] },
                { q: "Quel studio a cree God of War ?", a: "Santa Monica", opts: ["Santa Monica", "Naughty Dog", "Insomniac", "From Software"] },
                { q: "Comment s'appelle le heros de Uncharted ?", a: "Nathan Drake", opts: ["Nathan Drake", "Lara Croft", "Joel", "Kratos"] }
            ]
        },
        retro: [
            { q: "En quelle annee est sorti le premier Super Mario Bros ?", a: "1985", opts: ["1985", "1983", "1987", "1990"] },
            { q: "Quel jeu a cree le genre Metroidvania ?", a: "Metroid / Castlevania", opts: ["Metroid / Castlevania", "Mega Man", "Contra", "Ghosts 'n Goblins"] },
            { q: "Quel est le nom du fantome rose dans Pac-Man ?", a: "Pinky", opts: ["Pinky", "Blinky", "Inky", "Clyde"] },
            { q: "Quelle console a lance Sonic ?", a: "Sega Genesis/Mega Drive", opts: ["Sega Genesis/Mega Drive", "Super Nintendo", "NES", "Master System"] },
            { q: "Quel jeu d'arcade a introduit le 'combo' ?", a: "Street Fighter II", opts: ["Street Fighter II", "Mortal Kombat", "Tekken", "King of Fighters"] }
        ],
        higherLower: [
            { title: "Minecraft", artist: "Mojang", value: 300, emoji: "⛏️" },
            { title: "GTA V", artist: "Rockstar", value: 200, emoji: "🚗" },
            { title: "Tetris", artist: "Various", value: 520, emoji: "🧱" },
            { title: "Wii Sports", artist: "Nintendo", value: 82, emoji: "🎾" },
            { title: "PUBG", artist: "Krafton", value: 75, emoji: "🔫" },
            { title: "Mario Kart 8", artist: "Nintendo", value: 64, emoji: "🏎️" },
            { title: "Red Dead Redemption 2", artist: "Rockstar", value: 61, emoji: "🤠" },
            { title: "The Witcher 3", artist: "CD Projekt", value: 50, emoji: "⚔️" },
            { title: "Elden Ring", artist: "FromSoftware", value: 25, emoji: "💍" },
            { title: "Fortnite", artist: "Epic Games", value: 500, emoji: "🎮" }
        ],
        clash: [
            { name: "Minecraft", info: "Sandbox", emoji: "⛏️", votes: 85 },
            { name: "GTA V", info: "Action", emoji: "🚗", votes: 80 },
            { name: "The Witcher 3", info: "RPG", emoji: "⚔️", votes: 78 },
            { name: "Red Dead Redemption 2", info: "Action", emoji: "🤠", votes: 75 },
            { name: "God of War", info: "Action", emoji: "🪓", votes: 73 },
            { name: "The Last of Us", info: "Adventure", emoji: "🍄", votes: 76 },
            { name: "Zelda: Breath of the Wild", info: "Adventure", emoji: "🗡️", votes: 82 },
            { name: "Elden Ring", info: "RPG", emoji: "💍", votes: 77 }
        ]
    },
    geo: {
        quiz: {
            europe: [
                { q: "Quelle est la capitale de la Suisse ?", a: "Berne", opts: ["Berne", "Zurich", "Geneve", "Lausanne"] },
                { q: "Quel pays a le drapeau bleu-blanc-rouge vertical ?", a: "France", opts: ["France", "Pays-Bas", "Russie", "Luxembourg"] },
                { q: "Quelle est la plus grande ville d'Europe ?", a: "Istanbul", opts: ["Istanbul", "Londres", "Paris", "Moscou"] },
                { q: "Quel fleuve traverse Paris ?", a: "La Seine", opts: ["La Seine", "La Loire", "Le Rhone", "La Garonne"] },
                { q: "Quelle est la capitale de la Pologne ?", a: "Varsovie", opts: ["Varsovie", "Cracovie", "Gdansk", "Wroclaw"] }
            ],
            asia: [
                { q: "Quelle est la capitale du Japon ?", a: "Tokyo", opts: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"] },
                { q: "Quel est le plus grand pays d'Asie ?", a: "Russie", opts: ["Russie", "Chine", "Inde", "Kazakhstan"] },
                { q: "Quelle est la capitale de la Thailande ?", a: "Bangkok", opts: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"] },
                { q: "Quel pays a le drapeau avec un cercle rouge ?", a: "Japon", opts: ["Japon", "Bangladesh", "Palau", "Laos"] },
                { q: "Quelle est la capitale du Vietnam ?", a: "Hanoi", opts: ["Hanoi", "Ho Chi Minh", "Da Nang", "Hue"] }
            ],
            america: [
                { q: "Quelle est la capitale du Bresil ?", a: "Brasilia", opts: ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Salvador"] },
                { q: "Quel est le plus grand pays d'Amerique du Sud ?", a: "Bresil", opts: ["Bresil", "Argentine", "Colombie", "Perou"] },
                { q: "Quelle est la capitale du Canada ?", a: "Ottawa", opts: ["Ottawa", "Toronto", "Montreal", "Vancouver"] },
                { q: "Quel pays a le drapeau avec une feuille d'erable ?", a: "Canada", opts: ["Canada", "Etats-Unis", "Mexique", "Jamaique"] },
                { q: "Quelle est la capitale de l'Argentine ?", a: "Buenos Aires", opts: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"] }
            ],
            africa: [
                { q: "Quelle est la capitale de l'Egypte ?", a: "Le Caire", opts: ["Le Caire", "Alexandrie", "Louxor", "Assouan"] },
                { q: "Quel est le plus grand pays d'Afrique ?", a: "Algerie", opts: ["Algerie", "RD Congo", "Soudan", "Libye"] },
                { q: "Quelle est la capitale du Maroc ?", a: "Rabat", opts: ["Rabat", "Casablanca", "Marrakech", "Fes"] },
                { q: "Quel fleuve traverse l'Egypte ?", a: "Le Nil", opts: ["Le Nil", "Le Congo", "Le Niger", "Le Zambeze"] },
                { q: "Quelle est la capitale de l'Afrique du Sud ?", a: "Pretoria", opts: ["Pretoria", "Johannesburg", "Le Cap", "Durban"] }
            ]
        },
        flags: [
            { q: "fr", a: "France", opts: ["France", "Italie", "Belgique", "Irlande"] },
            { q: "jp", a: "Japon", opts: ["Japon", "Chine", "Corée du Sud", "Vietnam"] },
            { q: "br", a: "Brésil", opts: ["Brésil", "Argentine", "Portugal", "Mexique"] },
            { q: "de", a: "Allemagne", opts: ["Allemagne", "Belgique", "Autriche", "Suisse"] },
            { q: "gb", a: "Royaume-Uni", opts: ["Royaume-Uni", "Australie", "Nouvelle-Zélande", "Islande"] },
            { q: "it", a: "Italie", opts: ["Italie", "Irlande", "Mexique", "Hongrie"] },
            { q: "es", a: "Espagne", opts: ["Espagne", "Portugal", "Andorre", "Monaco"] },
            { q: "ca", a: "Canada", opts: ["Canada", "États-Unis", "Suisse", "Autriche"] },
            { q: "au", a: "Australie", opts: ["Australie", "Nouvelle-Zélande", "Royaume-Uni", "Fidji"] },
            { q: "kr", a: "Corée du Sud", opts: ["Corée du Sud", "Japon", "Chine", "Taïwan"] },
            { q: "us", a: "États-Unis", opts: ["États-Unis", "Royaume-Uni", "Australie", "Liberia"] },
            { q: "cn", a: "Chine", opts: ["Chine", "Vietnam", "Japon", "Corée du Nord"] },
            { q: "in", a: "Inde", opts: ["Inde", "Niger", "Irlande", "Côte d'Ivoire"] },
            { q: "ru", a: "Russie", opts: ["Russie", "Pays-Bas", "Luxembourg", "Serbie"] },
            { q: "mx", a: "Mexique", opts: ["Mexique", "Italie", "Irlande", "Hongrie"] },
            { q: "ar", a: "Argentine", opts: ["Argentine", "Uruguay", "Honduras", "Salvador"] },
            { q: "za", a: "Afrique du Sud", opts: ["Afrique du Sud", "Ghana", "Kenya", "Nigeria"] },
            { q: "eg", a: "Égypte", opts: ["Égypte", "Irak", "Yémen", "Syrie"] },
            { q: "tr", a: "Turquie", opts: ["Turquie", "Tunisie", "Algérie", "Pakistan"] },
            { q: "se", a: "Suède", opts: ["Suède", "Finlande", "Norvège", "Danemark"] }
        ],
        higherLower: [
            { title: "Chine", artist: "Asie", value: 1412, emoji: "🇨🇳" },
            { title: "Inde", artist: "Asie", value: 1408, emoji: "🇮🇳" },
            { title: "Etats-Unis", artist: "Amerique", value: 332, emoji: "🇺🇸" },
            { title: "Indonesie", artist: "Asie", value: 276, emoji: "🇮🇩" },
            { title: "Bresil", artist: "Amerique", value: 215, emoji: "🇧🇷" },
            { title: "Nigeria", artist: "Afrique", value: 218, emoji: "🇳🇬" },
            { title: "Russie", artist: "Europe/Asie", value: 144, emoji: "🇷🇺" },
            { title: "Japon", artist: "Asie", value: 125, emoji: "🇯🇵" },
            { title: "France", artist: "Europe", value: 68, emoji: "🇫🇷" },
            { title: "Allemagne", artist: "Europe", value: 84, emoji: "🇩🇪" }
        ],
        clash: [
            { name: "France", info: "Europe", emoji: "🇫🇷", votes: 70 },
            { name: "Japon", info: "Asie", emoji: "🇯🇵", votes: 75 },
            { name: "Italie", info: "Europe", emoji: "🇮🇹", votes: 68 },
            { name: "Bresil", info: "Amerique", emoji: "🇧🇷", votes: 65 },
            { name: "Australie", info: "Oceanie", emoji: "🇦🇺", votes: 60 },
            { name: "Canada", info: "Amerique", emoji: "🇨🇦", votes: 62 },
            { name: "Espagne", info: "Europe", emoji: "🇪🇸", votes: 67 },
            { name: "Suisse", info: "Europe", emoji: "🇨🇭", votes: 58 }
        ]
    }
};

// ===== Live Players Mock Data =====
const mockLivePlayers = [
    { name: "DarkVador42", avatar: "👤", game: "music", gameIcon: "🎵", mode: "Quiz", score: 850, time: "2min" },
    { name: "Gamer_Pro", avatar: "🎮", game: "gaming", gameIcon: "🎮", mode: "Higher/Lower", score: 1200, time: "5min" },
    { name: "CineFan99", avatar: "🎬", game: "cinema", gameIcon: "🎬", mode: "Repliques", score: 620, time: "1min" },
    { name: "FootballKing", avatar: "⚽", game: "sport", gameIcon: "⚽", mode: "Stats", score: 900, time: "3min" },
    { name: "GeoMaster", avatar: "🌍", game: "geo", gameIcon: "🌍", mode: "Drapeaux", score: 450, time: "30s" },
    { name: "MusicLover", avatar: "🎧", game: "music", gameIcon: "🎵", mode: "Blind Test", score: 780, time: "4min" }
];

// ===== State =====
let state = {
    user: null,
    currentGame: null,
    mode: null,
    genre: null,
    difficulty: null,
    questions: [],
    currentQ: 0,
    score: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
    timer: 30,
    timerInterval: null,
    isAnswered: false,
    isTransitioning: false,
    soundEnabled: true,
    lastVolume: 30,
    audioStarted: false,
    hlCurrent: null,
    hlNext: null,
    hlUsed: [],
    hlBest: parseInt(localStorage.getItem('vkgames_hl_best')) || 0,
    clashBracket: [],
    clashWinners: [],
    clashRound: 0,
    tempAvatar: null,
    adminPassword: localStorage.getItem('vkgames_admin_pwd') || 'admin123',
    theme: localStorage.getItem('vkgames_theme') || 'particles',
    accentColor: localStorage.getItem('vkgames_color') || 'blue',
    rewards: JSON.parse(localStorage.getItem('vkgames_rewards')) || {
        1: "Champion - Badge Or",
        2: "Vice-champion - Badge Argent",
        3: "3eme place - Badge Bronze",
        4: "Badge Exclusif",
        5: "Badge Exclusif"
    },
    socialLinks: JSON.parse(localStorage.getItem('vkgames_social')) || {},
    reports: JSON.parse(localStorage.getItem('vkgames_reports')) || []
};

// ===== Particles Animation =====
let particlesCtx, particlesArray = [];

function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    particlesCtx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particlesArray = [];
    const numParticles = Math.floor((canvas.width * canvas.height) / 12000);

    for (let i = 0; i < numParticles; i++) {
        particlesArray.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2.5 + 0.8,
            speedX: (Math.random() - 0.5) * 0.6,
            speedY: (Math.random() - 0.5) * 0.6,
            opacity: Math.random() * 0.6 + 0.3,
            pulse: Math.random() * Math.PI * 2
        });
    }

    animateParticles();
}

function animateParticles() {
    if (!particlesCtx) return;
    const canvas = particlesCtx.canvas;

    particlesCtx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.02;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulseOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        const pulseSize = p.size * (0.9 + 0.1 * Math.sin(p.pulse));

        particlesCtx.beginPath();
        particlesCtx.arc(p.x, p.y, pulseSize * 2, 0, Math.PI * 2);
        particlesCtx.fillStyle = `rgba(34, 197, 94, ${pulseOpacity * 0.12})`;
        particlesCtx.fill();

        particlesCtx.beginPath();
        particlesCtx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
        particlesCtx.fillStyle = `rgba(200, 255, 220, ${pulseOpacity})`;
        particlesCtx.fill();
    });

    for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
                const opacity = 0.12 * (1 - dist / 120);
                particlesCtx.beginPath();
                particlesCtx.strokeStyle = `rgba(34, 197, 94, ${opacity})`;
                particlesCtx.lineWidth = 0.5;
                particlesCtx.moveTo(particlesArray[i].x, particlesArray[i].y);
                particlesCtx.lineTo(particlesArray[j].x, particlesArray[j].y);
                particlesCtx.stroke();
            }
        }
    }

    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// ===== Init =====
function init() {
    document.body.setAttribute('data-theme', state.theme);
    document.body.setAttribute('data-color', state.accentColor);

    initParticles();
    initLivePlayers();

    // Volume
    document.getElementById('volume-btn')?.addEventListener('click', toggleMute);
    document.getElementById('volume-slider')?.addEventListener('input', handleVolumeChange);
    updateVolumeIcon();

    // Auth
    document.getElementById('btn-login')?.addEventListener('click', showAuthModal);
    document.getElementById('close-auth')?.addEventListener('click', hideAuthModal);
    document.getElementById('show-register')?.addEventListener('click', () => toggleAuthTab(true));
    document.getElementById('show-login')?.addEventListener('click', () => toggleAuthTab(false));
    document.getElementById('login-form')?.addEventListener('submit', handleLogin);
    document.getElementById('register-form')?.addEventListener('submit', handleRegister);

    // Google Sign-In buttons
    document.getElementById('google-login')?.addEventListener('click', handleGoogleSignIn);
    document.getElementById('google-register')?.addEventListener('click', handleGoogleSignIn);

    // Hero CTA - Opens register modal
    document.getElementById('hero-cta')?.addEventListener('click', () => {
        showAuthModal();
        toggleAuthTab(true);
    });

    // User menu
    document.getElementById('btn-settings')?.addEventListener('click', showSettings);
    document.getElementById('btn-admin')?.addEventListener('click', showAdminAuth);
    document.getElementById('btn-logout')?.addEventListener('click', logout);

    // Avatar
    document.getElementById('avatar-input')?.addEventListener('change', handleAvatarUpload);
    document.getElementById('settings-avatar-input')?.addEventListener('change', handleSettingsAvatar);
    document.getElementById('remove-avatar')?.addEventListener('click', removeAvatar);

    // Settings
    document.getElementById('settings-form')?.addEventListener('submit', saveSettings);
    document.getElementById('back-settings')?.addEventListener('click', () => showScreen('home-screen'));

    // Admin
    document.getElementById('admin-auth-form')?.addEventListener('submit', handleAdminAuth);
    document.getElementById('cancel-admin')?.addEventListener('click', hideAdminAuth);
    document.getElementById('back-admin')?.addEventListener('click', () => showScreen('home-screen'));
    document.getElementById('save-rewards')?.addEventListener('click', saveRewards);
    document.getElementById('change-admin-pwd')?.addEventListener('click', changeAdminPassword);
    document.getElementById('reset-leaderboard')?.addEventListener('click', resetLeaderboard);
    document.getElementById('export-data')?.addEventListener('click', exportData);

    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => switchAdminTab(tab.dataset.tab));
    });

    document.querySelectorAll('.theme-card').forEach(card => {
        card.addEventListener('click', () => setTheme(card.dataset.theme));
    });

    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => setColor(btn.dataset.color));
    });

    document.getElementById('save-social')?.addEventListener('click', saveSocialLinks);
    document.getElementById('clear-reports')?.addEventListener('click', clearReports);

    // Report
    document.getElementById('report-btn')?.addEventListener('click', showReportModal);
    document.getElementById('close-report')?.addEventListener('click', hideReportModal);
    document.getElementById('report-form')?.addEventListener('submit', submitReport);

    // Game cards
    document.querySelectorAll('.game-card-large').forEach(card => {
        card.addEventListener('click', () => {
            playClickSound();
            openGameMenu(card.dataset.game);
        });
    });

    updateHomeStats();

    // Back buttons
    document.getElementById('back-home')?.addEventListener('click', () => {
        playClickSound();
        showScreen('home-screen');
    });

    // Difficulty
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => selectDiff(btn.dataset.diff));
    });

    // Play
    document.getElementById('play-btn')?.addEventListener('click', () => {
        playClickSound();
        startGame();
    });

    // Quit
    document.getElementById('quit-game')?.addEventListener('click', showQuitModal);
    document.getElementById('quit-hl')?.addEventListener('click', showQuitModal);
    document.getElementById('quit-clash')?.addEventListener('click', showQuitModal);
    document.getElementById('cancel-quit')?.addEventListener('click', hideQuitModal);
    document.getElementById('confirm-quit')?.addEventListener('click', confirmQuit);

    // Result
    document.getElementById('retry-btn')?.addEventListener('click', () => { playClickSound(); startGame(); });
    document.getElementById('home-btn')?.addEventListener('click', goHome);
    document.getElementById('share-btn')?.addEventListener('click', shareResult);
    document.getElementById('clash-retry')?.addEventListener('click', () => { playClickSound(); startGame(); });
    document.getElementById('clash-home')?.addEventListener('click', goHome);

    // Higher/Lower
    document.getElementById('btn-higher')?.addEventListener('click', () => hlGuess('higher'));
    document.getElementById('btn-lower')?.addEventListener('click', () => hlGuess('lower'));

    // Leaderboard
    document.getElementById('view-leaderboard')?.addEventListener('click', showLeaderboard);
    document.getElementById('back-leaderboard')?.addEventListener('click', () => showScreen('home-screen'));

    // Modal overlays
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            hideAuthModal();
            hideQuitModal();
            hideAdminAuth();
            hideReportModal();
        });
    });

    // Saved user - only use localStorage if Firebase Auth is not available
    // Firebase Auth will handle login state via onAuthStateChanged in initAuthListener
    if (!window.firebaseAuth) {
        const savedUser = localStorage.getItem('vkgames_user');
        if (savedUser) {
            state.user = JSON.parse(savedUser);
            updateUserUI();
            setTimeout(() => {
                initFriendsSystem();
            }, 1000);
        }
    }

    // Start audio on interaction
    document.body.addEventListener('click', startAudio, { once: true });
    document.body.addEventListener('touchstart', startAudio, { once: true });

    loadLeaderboard();
    loadRewardsConfig();
    loadSocialLinks();
}

// ===== Live Players =====
function initLivePlayers() {
    const container = document.getElementById('live-players');
    if (!container) return;

    if (mockLivePlayers.length === 0) {
        container.innerHTML = '<div class="live-empty">Aucun joueur en ligne</div>';
        return;
    }

    container.innerHTML = mockLivePlayers.map(player => `
        <div class="live-player">
            <div class="live-avatar">${player.avatar}</div>
            <div class="live-info">
                <div class="live-name">${player.name}</div>
                <div class="live-game">
                    <span class="live-game-icon">${player.gameIcon}</span>
                    <span>${gameConfigs[player.game]?.title || 'Quiz'}</span>
                </div>
                <div class="live-mode">${player.mode}</div>
                <div class="live-stats">
                    <span class="live-stat">Score: <span>${player.score}</span></span>
                    <span class="live-stat">${player.time}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Audio =====
function startAudio() {
    if (state.audioStarted) return;
    state.audioStarted = true;

    const vol = parseInt(document.getElementById('volume-slider')?.value || 30);
    setVolume(vol);

    if (state.soundEnabled && audio.bgMusic) {
        audio.bgMusic.play().catch(() => {});
    }
}

function stopBgMusic() {
    if (audio.bgMusic) {
        audio.bgMusic.pause();
        audio.bgMusic.currentTime = 0;
    }
}

function resumeBgMusic() {
    if (state.soundEnabled && audio.bgMusic) {
        audio.bgMusic.play().catch(() => {});
    }
}

function toggleMute() {
    const slider = document.getElementById('volume-slider');
    if (state.soundEnabled) {
        state.soundEnabled = false;
        state.lastVolume = parseInt(slider.value);
        slider.value = 0;
        setVolume(0);
    } else {
        state.soundEnabled = true;
        slider.value = state.lastVolume || 30;
        setVolume(state.lastVolume || 30);
    }
    updateVolumeIcon();
}

function handleVolumeChange(e) {
    const vol = parseInt(e.target.value);
    setVolume(vol);
    state.soundEnabled = vol > 0;
    updateVolumeIcon();
}

function setVolume(vol) {
    const v = vol / 100;
    document.getElementById('volume-value').textContent = vol + '%';

    if (audio.bgMusic) audio.bgMusic.volume = v * 0.3;
    if (audio.click) audio.click.volume = v * 0.3;
    if (audio.success) audio.success.volume = v * 0.4;
    if (audio.error) audio.error.volume = v * 0.4;

    if (vol > 0 && state.audioStarted && audio.bgMusic?.paused) {
        audio.bgMusic.play().catch(() => {});
    } else if (vol === 0) {
        audio.bgMusic?.pause();
    }
}

function updateVolumeIcon() {
    const vol = parseInt(document.getElementById('volume-slider')?.value || 30);
    const emoji = document.getElementById('vol-emoji');

    if (emoji) {
        if (vol === 0) emoji.textContent = '🔇';
        else if (vol < 30) emoji.textContent = '🔈';
        else if (vol < 70) emoji.textContent = '🔉';
        else emoji.textContent = '🔊';
    }
}

function playClickSound() {
    if (!state.soundEnabled || !audio.click) return;
    audio.click.currentTime = 0;
    audio.click.play().catch(() => {});
}

function playSuccessSound() {
    if (!state.soundEnabled || !audio.success) return;
    audio.success.currentTime = 0;
    audio.success.play().catch(() => {});
}

function playErrorSound() {
    if (!state.soundEnabled || !audio.error) return;
    audio.error.currentTime = 0;
    audio.error.play().catch(() => {});
}

function updateHomeStats() {
    const users = JSON.parse(localStorage.getItem('vkgames_users') || '[]');
    const statPlayers = document.getElementById('stat-players');
    if (statPlayers) statPlayers.textContent = users.length;
}

// ===== Auth =====
function showAuthModal() { document.getElementById('auth-modal').classList.remove('hidden'); }
function hideAuthModal() { document.getElementById('auth-modal').classList.add('hidden'); }

function toggleAuthTab(showRegister) {
    document.getElementById('login-tab').classList.toggle('hidden', showRegister);
    document.getElementById('register-tab').classList.toggle('hidden', !showRegister);
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!window.firebaseAuth) {
        // Fallback to localStorage if Firebase not available
        const users = JSON.parse(localStorage.getItem('vkgames_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            state.user = user;
            localStorage.setItem('vkgames_user', JSON.stringify(user));
            updateUserUI();
            hideAuthModal();
            playSuccessSound();
            showToast('Connexion réussie !', 'success');
        } else {
            playErrorSound();
            showToast('Email ou mot de passe incorrect', 'error');
        }
        return;
    }

    // Firebase Auth login
    window.firebaseAuth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in - onAuthStateChanged will handle the rest
            hideAuthModal();
            playSuccessSound();
            showToast('Connexion réussie !', 'success');
        })
        .catch((error) => {
            playErrorSound();
            let message = 'Email ou mot de passe incorrect';
            if (error.code === 'auth/user-not-found') message = 'Aucun compte avec cet email';
            if (error.code === 'auth/wrong-password') message = 'Mot de passe incorrect';
            if (error.code === 'auth/invalid-email') message = 'Email invalide';
            if (error.code === 'auth/too-many-requests') message = 'Trop de tentatives, réessayez plus tard';
            showToast(message, 'error');
        });
}

function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (!username || username.length < 3) {
        playErrorSound();
        showToast('Le pseudo doit faire au moins 3 caractères', 'error');
        return;
    }

    if (password.length < 6) {
        playErrorSound();
        showToast('Le mot de passe doit faire au moins 6 caractères', 'error');
        return;
    }

    if (!window.firebaseAuth) {
        // Fallback to localStorage
        const users = JSON.parse(localStorage.getItem('vkgames_users') || '[]');
        if (users.find(u => u.email === email)) {
            playErrorSound();
            showToast('Email déjà utilisé', 'error');
            return;
        }
        const newUser = {
            id: 'local_' + Date.now(),
            username, email,
            avatar: state.tempAvatar || null,
            score: 0,
            createdAt: Date.now()
        };
        users.push(newUser);
        localStorage.setItem('vkgames_users', JSON.stringify(users));
        state.user = newUser;
        localStorage.setItem('vkgames_user', JSON.stringify(newUser));
        updateUserUI();
        hideAuthModal();
        playSuccessSound();
        showToast('Compte créé !', 'success');
        return;
    }

    // Firebase Auth register
    window.firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Save user profile to Firebase Database
            const userData = {
                id: user.uid,
                username: username,
                email: email,
                avatar: state.tempAvatar || null,
                score: 0,
                xp: 0,
                level: 1,
                createdAt: Date.now()
            };

            return window.firebaseDB.ref('users/' + user.uid).set(userData)
                .then(() => {
                    state.tempAvatar = null;
                    hideAuthModal();
                    playSuccessSound();
                    showToast('Compte créé !', 'success');
                });
        })
        .catch((error) => {
            playErrorSound();
            let message = 'Erreur lors de la création du compte';
            if (error.code === 'auth/email-already-in-use') message = 'Email déjà utilisé';
            if (error.code === 'auth/invalid-email') message = 'Email invalide';
            if (error.code === 'auth/weak-password') message = 'Mot de passe trop faible (min 6 caractères)';
            showToast(message, 'error');
        });
}

function logout() {
    if (window.firebaseAuth) {
        window.firebaseAuth.signOut();
    }
    state.user = null;
    localStorage.removeItem('vkgames_user');
    updateUserUI();
    showScreen('home-screen');
    showToast('Déconnecté', 'success');
}

// Google Sign-In
function handleGoogleSignIn() {
    if (!window.firebaseAuth) {
        showToast('Connexion Google non disponible', 'error');
        return;
    }

    const provider = new firebase.auth.GoogleAuthProvider();

    window.firebaseAuth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            const isNewUser = result.additionalUserInfo?.isNewUser;

            if (isNewUser) {
                // Create user profile in database
                const userData = {
                    id: user.uid,
                    username: user.displayName || 'Joueur',
                    email: user.email,
                    avatar: user.photoURL || null,
                    score: 0,
                    xp: 0,
                    level: 1,
                    createdAt: Date.now()
                };

                window.firebaseDB.ref('users/' + user.uid).set(userData)
                    .then(() => {
                        hideAuthModal();
                        playSuccessSound();
                        showToast('Compte créé avec Google !', 'success');
                    });
            } else {
                hideAuthModal();
                playSuccessSound();
                showToast('Connexion réussie !', 'success');
            }
        })
        .catch((error) => {
            playErrorSound();
            console.error('Google sign-in error:', error);

            let message = 'Erreur de connexion Google';
            if (error.code === 'auth/popup-closed-by-user') {
                message = 'Connexion annulée';
            } else if (error.code === 'auth/popup-blocked') {
                message = 'Pop-up bloquée. Autorise les pop-ups pour ce site.';
            }
            showToast(message, 'error');
        });
}

// Firebase Auth State Listener - handles login persistence
function initAuthListener() {
    if (!window.firebaseAuth) return;

    window.firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
            // User is signed in - load their data from Firebase
            loadUserFromFirebase(user.uid);
        } else {
            // User is signed out
            state.user = null;
            updateUserUI();
        }
    });
}

function loadUserFromFirebase(uid) {
    if (!window.firebaseDB) return;

    window.firebaseDB.ref('users/' + uid).once('value')
        .then((snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                state.user = {
                    id: uid,
                    username: userData.username,
                    email: userData.email,
                    avatar: userData.avatar,
                    score: userData.score || 0,
                    xp: userData.xp || 0,
                    level: userData.level || 1,
                    createdAt: userData.createdAt
                };

                // Cache locally
                localStorage.setItem('vkgames_user', JSON.stringify(state.user));

                // Load user data (XP, stats, badges, etc.)
                loadUserData(uid);

                updateUserUI();
                initFriendsSystem();
                updateXPDisplay();
                updateRankDisplay();
            }
        });
}

function loadUserData(uid) {
    if (!window.firebaseDB) return;

    // Load XP data
    window.firebaseDB.ref('userData/' + uid + '/xp').once('value').then((snap) => {
        const xpData = snap.val();
        if (xpData) {
            localStorage.setItem('vkgames_user_xp_' + uid, JSON.stringify(xpData));
            updateXPDisplay();
            updateRankDisplay();
        }
    });

    // Load badges
    window.firebaseDB.ref('userData/' + uid + '/badges').once('value').then((snap) => {
        const badges = snap.val();
        if (badges) {
            localStorage.setItem('vkgames_badges_' + uid, JSON.stringify(badges));
            updateBadgesDisplay();
        }
    });

    // Load stats
    window.firebaseDB.ref('userData/' + uid + '/stats').once('value').then((snap) => {
        const stats = snap.val();
        if (stats) {
            const allStats = JSON.parse(localStorage.getItem('vkgames_user_stats') || '{}');
            allStats[uid] = stats;
            localStorage.setItem('vkgames_user_stats', JSON.stringify(allStats));
        }
    });

    // Load unlocked themes
    window.firebaseDB.ref('userData/' + uid + '/themes').once('value').then((snap) => {
        const themes = snap.val();
        if (themes) {
            localStorage.setItem('vkgames_themes_' + uid, JSON.stringify(themes));
        }
        applyTheme(getEquippedTheme());
    });
}

function handleAvatarUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            state.tempAvatar = event.target.result;
            document.getElementById('avatar-preview').innerHTML = `<img src="${event.target.result}" alt="Avatar">`;
        };
        reader.readAsDataURL(file);
    }
}

function updateUserUI() {
    const loginBtn = document.getElementById('btn-login');
    const userMenu = document.getElementById('user-menu');
    const heroCta = document.getElementById('hero-cta');

    if (state.user) {
        loginBtn.classList.add('hidden');
        userMenu.classList.remove('hidden');
        if (heroCta) heroCta.classList.add('hidden');

        document.getElementById('nav-username').textContent = state.user.username;
        document.getElementById('dropdown-score').textContent = (state.user.score || 0) + ' pts';

        const avatar = document.getElementById('nav-avatar');
        if (state.user.avatar) {
            avatar.innerHTML = `<img src="${state.user.avatar}" alt="Avatar">`;
        }
    } else {
        loginBtn.classList.remove('hidden');
        userMenu.classList.add('hidden');
        if (heroCta) heroCta.classList.remove('hidden');
    }
}

// ===== Settings =====
function showSettings() {
    if (!state.user) return;

    document.getElementById('settings-username').value = state.user.username;
    document.getElementById('settings-email').value = state.user.email;
    document.getElementById('settings-password').value = '';
    document.getElementById('settings-password-confirm').value = '';

    const avatar = document.getElementById('settings-avatar');
    if (state.user.avatar) {
        avatar.innerHTML = `<img src="${state.user.avatar}" alt="Avatar">`;
    }

    showScreen('settings-screen');
}

function handleSettingsAvatar(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            state.user.avatar = event.target.result;
            document.getElementById('settings-avatar').innerHTML = `<img src="${event.target.result}" alt="Avatar">`;
        };
        reader.readAsDataURL(file);
    }
}

function removeAvatar() {
    if (!state.user) return;

    playClickSound();

    // Remove avatar
    state.user.avatar = null;
    localStorage.setItem('vkgames_user', JSON.stringify(state.user));

    // Update settings display
    document.getElementById('settings-avatar').innerHTML = `
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
        </svg>
    `;

    // Update nav avatar
    document.getElementById('nav-avatar').innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
        </svg>
    `;

    showToast('Photo de profil supprimée', 'success');
}

function saveSettings(e) {
    e.preventDefault();

    const username = document.getElementById('settings-username').value;
    const email = document.getElementById('settings-email').value;
    const password = document.getElementById('settings-password').value;
    const confirmPassword = document.getElementById('settings-password-confirm').value;

    if (password && password !== confirmPassword) {
        playErrorSound();
        showToast('Les mots de passe ne correspondent pas', 'error');
        return;
    }

    state.user.username = username;
    state.user.email = email;
    if (password) state.user.password = password;

    localStorage.setItem('vkgames_user', JSON.stringify(state.user));

    const users = JSON.parse(localStorage.getItem('vkgames_users') || '[]');
    const idx = users.findIndex(u => u.id === state.user.id);
    if (idx >= 0) {
        users[idx] = state.user;
        localStorage.setItem('vkgames_users', JSON.stringify(users));
    }

    updateUserUI();
    playSuccessSound();
    showToast('Paramètres sauvegardés !', 'success');
    showScreen('home-screen');
}

// ===== Admin =====
function showAdminAuth() { document.getElementById('admin-auth-modal').classList.remove('hidden'); }
function hideAdminAuth() {
    document.getElementById('admin-auth-modal').classList.add('hidden');
    document.getElementById('admin-pwd-input').value = '';
}

function handleAdminAuth(e) {
    e.preventDefault();
    const pwd = document.getElementById('admin-pwd-input').value;

    if (pwd === state.adminPassword) {
        hideAdminAuth();
        showAdminPanel();
        playSuccessSound();
    } else {
        playErrorSound();
        showToast('Mot de passe incorrect', 'error');
    }
}

function showAdminPanel() {
    loadRewardsConfig();
    loadSocialConfig();
    loadReports();

    document.querySelectorAll('.theme-card').forEach(c => {
        c.classList.toggle('selected', c.dataset.theme === state.theme);
    });

    document.querySelectorAll('.color-btn').forEach(c => {
        c.classList.toggle('selected', c.dataset.color === state.accentColor);
    });

    showScreen('admin-screen');
}

function switchAdminTab(tab) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.add('hidden'));
    document.getElementById(`panel-${tab}`).classList.remove('hidden');
}

function loadRewardsConfig() {
    for (let i = 1; i <= 5; i++) {
        const input = document.getElementById(`reward-${i}`);
        if (input) input.value = state.rewards[i] || '';
    }
}

function saveRewards() {
    for (let i = 1; i <= 5; i++) {
        const input = document.getElementById(`reward-${i}`);
        if (input) state.rewards[i] = input.value;
    }
    localStorage.setItem('vkgames_rewards', JSON.stringify(state.rewards));
    playSuccessSound();
    showToast('Récompenses sauvegardées !', 'success');
}

function setTheme(theme) {
    state.theme = theme;
    localStorage.setItem('vkgames_theme', theme);
    document.body.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-card').forEach(c => {
        c.classList.toggle('selected', c.dataset.theme === theme);
    });
    showToast('Thème appliqué !', 'success');
}

function setColor(color) {
    state.accentColor = color;
    localStorage.setItem('vkgames_color', color);
    document.body.setAttribute('data-color', color);
    document.querySelectorAll('.color-btn').forEach(c => {
        c.classList.toggle('selected', c.dataset.color === color);
    });
    showToast('Couleur appliquée !', 'success');
}

function changeAdminPassword() {
    const newPwd = document.getElementById('admin-password').value;
    if (newPwd && newPwd.length >= 4) {
        state.adminPassword = newPwd;
        localStorage.setItem('vkgames_admin_pwd', newPwd);
        document.getElementById('admin-password').value = '';
        playSuccessSound();
        showToast('Mot de passe admin changé !', 'success');
    } else {
        playErrorSound();
        showToast('Mot de passe trop court', 'error');
    }
}

function resetLeaderboard() {
    if (confirm('Voulez-vous vraiment effacer tous les scores ?')) {
        localStorage.removeItem('vkgames_scores');
        loadLeaderboard();
        showToast('Classement réinitialisé', 'success');
    }
}

function exportData() {
    const data = {
        users: JSON.parse(localStorage.getItem('vkgames_users') || '[]'),
        scores: JSON.parse(localStorage.getItem('vkgames_scores') || '[]'),
        rewards: state.rewards,
        theme: state.theme,
        color: state.accentColor,
        social: state.socialLinks,
        reports: state.reports
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vkgames-export.json';
    a.click();
    URL.revokeObjectURL(url);

    showToast('Données exportées !', 'success');
}

// ===== Social Links =====
function loadSocialLinks() {
    const links = state.socialLinks;
    ['x', 'instagram', 'tiktok', 'discord'].forEach(platform => {
        const btn = document.getElementById(`social-${platform}`);
        if (btn) {
            btn.href = links[platform] || '#';
        }
    });
}

function loadSocialConfig() {
    document.getElementById('social-x-url').value = state.socialLinks.x || '';
    document.getElementById('social-instagram-url').value = state.socialLinks.instagram || '';
    document.getElementById('social-tiktok-url').value = state.socialLinks.tiktok || '';
    document.getElementById('social-discord-url').value = state.socialLinks.discord || '';
}

function saveSocialLinks() {
    state.socialLinks = {
        x: document.getElementById('social-x-url').value.trim(),
        instagram: document.getElementById('social-instagram-url').value.trim(),
        tiktok: document.getElementById('social-tiktok-url').value.trim(),
        discord: document.getElementById('social-discord-url').value.trim()
    };
    localStorage.setItem('vkgames_social', JSON.stringify(state.socialLinks));
    loadSocialLinks();
    playSuccessSound();
    showToast('Liens sociaux sauvegardés !', 'success');
}

// ===== Reports =====
function showReportModal() {
    document.getElementById('report-modal').classList.remove('hidden');
    document.getElementById('report-form').reset();
    if (state.user?.email) {
        document.getElementById('report-email').value = state.user.email;
    }
}

function hideReportModal() { document.getElementById('report-modal').classList.add('hidden'); }

function submitReport(e) {
    e.preventDefault();
    const report = {
        id: Date.now(),
        type: document.getElementById('report-type').value,
        description: document.getElementById('report-description').value,
        email: document.getElementById('report-email').value || null,
        user: state.user?.username || 'Anonyme',
        date: new Date().toISOString()
    };
    state.reports.unshift(report);
    localStorage.setItem('vkgames_reports', JSON.stringify(state.reports));
    hideReportModal();
    playSuccessSound();
    showToast('Signalement envoyé !', 'success');
}

function loadReports() {
    const container = document.getElementById('reports-list');
    if (!container) return;

    if (state.reports.length === 0) {
        container.innerHTML = '<div class="reports-empty">Aucun signalement</div>';
        return;
    }

    const typeLabels = { bug: 'Bug', content: 'Contenu', suggestion: 'Suggestion', other: 'Autre' };

    container.innerHTML = state.reports.map(report => {
        const date = new Date(report.date).toLocaleDateString('fr-FR');
        return `
            <div class="report-card">
                <div class="report-card-header">
                    <span class="report-type ${report.type}">${typeLabels[report.type]}</span>
                    <span class="report-date">${date}</span>
                </div>
                <p class="report-description">${escapeHtml(report.description)}</p>
                ${report.email ? `<p class="report-email">${escapeHtml(report.email)}</p>` : ''}
                <button class="report-delete" onclick="deleteReport(${report.id})">Supprimer</button>
            </div>
        `;
    }).join('');
}

function deleteReport(id) {
    state.reports = state.reports.filter(r => r.id !== id);
    localStorage.setItem('vkgames_reports', JSON.stringify(state.reports));
    loadReports();
}

function clearReports() {
    if (confirm('Effacer tous les signalements ?')) {
        state.reports = [];
        localStorage.setItem('vkgames_reports', JSON.stringify(state.reports));
        loadReports();
        showToast('Signalements effacés', 'success');
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Navigation =====
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id)?.classList.add('active');
}

function openGameMenu(game) {
    state.currentGame = game;
    const config = gameConfigs[game];
    if (!config) return;

    document.getElementById('menu-icon').textContent = config.icon;
    document.getElementById('menu-title').textContent = config.title;

    // Build mode grid
    const modeGrid = document.getElementById('mode-grid');
    modeGrid.innerHTML = config.modes.map(mode => `
        <button class="mode-card" data-mode="${mode.id}">
            <div class="mode-emoji">${mode.emoji}</div>
            <div class="mode-info">
                <span class="mode-name">${mode.name}</span>
                <span class="mode-desc">${mode.desc}</span>
            </div>
        </button>
    `).join('');

    modeGrid.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', () => selectMode(card.dataset.mode));
    });

    // Build genre grid
    document.getElementById('genre-title').textContent = config.genreTitle;
    const genreGrid = document.getElementById('genre-grid');
    genreGrid.innerHTML = config.genres.map(genre => `
        <button class="genre-btn" data-genre="${genre.id}">
            <span>${genre.emoji}</span> ${genre.name}
        </button>
    `).join('');

    genreGrid.querySelectorAll('.genre-btn').forEach(btn => {
        btn.addEventListener('click', () => selectGenre(btn.dataset.genre));
    });

    resetSelections();
    showScreen('game-menu');
}

function goHome() {
    clearInterval(state.timerInterval);
    resumeBgMusic();
    resetSelections();
    loadLeaderboard();
    showScreen('home-screen');
}

// ===== Selection =====
function selectMode(mode) {
    state.mode = mode;
    document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`[data-mode="${mode}"]`)?.classList.add('selected');
    playClickSound();

    if (mode === 'higherlower' || mode === 'clash') {
        document.getElementById('genre-section').classList.add('hidden');
        document.getElementById('diff-section').classList.add('hidden');
        document.getElementById('play-btn').classList.remove('hidden');
    } else {
        document.getElementById('genre-section').classList.remove('hidden');
        document.getElementById('diff-section').classList.add('hidden');
        document.getElementById('play-btn').classList.add('hidden');
    }
}

function selectGenre(genre) {
    state.genre = genre;
    document.querySelectorAll('.genre-btn').forEach(c => c.classList.remove('selected'));
    document.querySelector(`[data-genre="${genre}"]`)?.classList.add('selected');
    playClickSound();

    document.getElementById('diff-section').classList.remove('hidden');
}

function selectDiff(diff) {
    state.difficulty = diff;
    document.querySelectorAll('.diff-btn').forEach(c => c.classList.remove('selected'));
    document.querySelector(`[data-diff="${diff}"]`)?.classList.add('selected');
    document.getElementById('play-btn').classList.remove('hidden');
    playClickSound();
}

function resetSelections() {
    document.querySelectorAll('.mode-card, .genre-btn, .diff-btn').forEach(c => c.classList.remove('selected'));
    document.getElementById('genre-section')?.classList.add('hidden');
    document.getElementById('diff-section')?.classList.add('hidden');
    document.getElementById('play-btn')?.classList.add('hidden');
    state.mode = null;
    state.genre = null;
    state.difficulty = null;
}

// ===== Game Start =====
function startGame() {
    state.currentQ = 0;
    state.score = 0;
    state.correct = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.isAnswered = false;
    state.isTransitioning = false;

    stopBgMusic();

    const mode = state.mode;
    const game = state.currentGame;

    if (mode === 'higherlower') {
        startHL();
    } else if (mode === 'clash') {
        startClash();
    } else {
        startQuiz();
    }
}

// ===== Quiz =====
function startQuiz() {
    const game = state.currentGame;
    const gameData = allGameData[game];
    let data = [];

    // Get the right data based on mode
    let sourceKey = state.mode;
    if (state.mode === 'blind') sourceKey = 'quiz'; // Use quiz data for blind
    if (state.mode === 'quotes' && gameData.quotes) {
        data = [...gameData.quotes];
    } else if (state.mode === 'palmares' && gameData.palmares) {
        data = [...gameData.palmares];
    } else if (state.mode === 'retro' && gameData.retro) {
        data = [...gameData.retro];
    } else if (state.mode === 'flags' && gameData.flags) {
        data = [...gameData.flags];
    } else if (gameData.quiz) {
        const genres = state.genre === 'mixed' ? Object.keys(gameData.quiz) : [state.genre];
        genres.forEach(g => {
            if (gameData.quiz[g]) {
                data = data.concat(gameData.quiz[g]);
            }
        });
    }

    if (data.length === 0) {
        showToast('Pas de questions disponibles', 'error');
        return;
    }

    state.questions = shuffle(data).slice(0, 10);
    document.getElementById('music-player').classList.add('hidden');
    document.getElementById('question-box').classList.remove('hidden');
    showScreen('game-screen');
    showQuestion();
}

function showQuestion() {
    const q = state.questions[state.currentQ];
    if (!q) return;

    state.isAnswered = false;
    state.isTransitioning = false;

    document.getElementById('game-score').textContent = state.score;
    document.getElementById('game-progress').textContent = `${state.currentQ + 1}/10`;

    // Build question text
    let questionText = '';
    const game = state.currentGame;

    // Remove previous flag display if any
    const existingFlag = document.querySelector('.flag-display');
    if (existingFlag) existingFlag.remove();
    document.getElementById('question-box').classList.remove('flag-question');

    if (q.q) {
        if (game === 'music') {
            questionText = `Qui chante "${q.q}" ?`;
        } else if (game === 'geo' && state.mode === 'flags') {
            questionText = `Quel pays a ce drapeau ?`;
            document.getElementById('question-box').classList.add('flag-question');

            // Create flag display element with image
            const flagDisplay = document.createElement('div');
            flagDisplay.className = 'flag-display';
            flagDisplay.innerHTML = `<img src="https://flagcdn.com/w320/${q.q}.png" alt="Drapeau" class="flag-img">`;
            const questionBox = document.getElementById('question-box');
            const questionTextEl = document.getElementById('question-text');
            questionBox.insertBefore(flagDisplay, questionTextEl);
        } else {
            questionText = q.q;
        }
    }

    document.getElementById('question-hint').textContent = '';
    document.getElementById('question-text').textContent = questionText;

    const grid = document.getElementById('answers-grid');
    grid.innerHTML = shuffle([...q.opts]).map(opt =>
        `<button class="answer-btn" data-answer="${opt}">${opt}</button>`
    ).join('');

    grid.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', () => checkAnswer(btn, q.a));
    });

    startTimer();
}

function checkAnswer(btn, correct) {
    if (state.isAnswered || state.isTransitioning) return;
    state.isAnswered = true;
    state.isTransitioning = true;

    document.querySelectorAll('.answer-btn').forEach(b => {
        b.disabled = true;
        b.style.pointerEvents = 'none';
    });

    clearInterval(state.timerInterval);

    const isCorrect = btn.dataset.answer === correct;

    document.querySelectorAll('.answer-btn').forEach(b => {
        if (b.dataset.answer === correct) b.classList.add('correct');
    });

    if (isCorrect) {
        btn.classList.add('correct');
        state.correct++;
        state.streak++;
        const pts = calcPoints();
        state.score += pts;
        if (state.streak > state.bestStreak) state.bestStreak = state.streak;
        playSuccessSound();
        showToast(`+${pts} points !`, 'success');
    } else {
        btn.classList.add('wrong');
        state.streak = 0;
        playErrorSound();
        showToast('Mauvaise réponse', 'error');
    }

    document.getElementById('game-score').textContent = state.score;

    const delay = isCorrect ? 1200 : 1500;
    setTimeout(() => {
        state.isAnswered = false;
        state.isTransitioning = false;
        state.currentQ++;
        if (state.currentQ >= state.questions.length || state.currentQ >= 10) {
            endGame();
        } else {
            showQuestion();
        }
    }, delay);
}

// ===== Higher/Lower =====
function startHL() {
    state.hlUsed = [];
    state.score = 0;
    state.streak = 0;

    const gameData = allGameData[state.currentGame];
    if (!gameData?.higherLower) {
        showToast('Pas de données disponibles', 'error');
        return;
    }

    const config = gameConfigs[state.currentGame];
    document.getElementById('hl-question').textContent = config.hlQuestion;
    document.getElementById('hl-left-label').textContent = config.hlLabel;
    document.getElementById('hl-right-label').textContent = config.hlLabel;

    const items = shuffle([...gameData.higherLower]);
    state.hlCurrent = items[0];
    state.hlNext = items[1];
    state.hlUsed.push(items[0].title, items[1].title);

    showScreen('hl-screen');
    updateHL();
}

function updateHL() {
    document.getElementById('hl-score').textContent = state.score;
    document.getElementById('hl-streak').textContent = state.streak;
    document.getElementById('hl-best').textContent = state.hlBest;

    const left = document.getElementById('hl-left');
    document.getElementById('hl-left-emoji').textContent = state.hlCurrent.emoji || '🎵';
    left.querySelector('.hl-title').textContent = state.hlCurrent.title;
    left.querySelector('.hl-artist').textContent = state.hlCurrent.artist || '';
    left.querySelector('.streams-num').textContent = state.hlCurrent.value;
    left.classList.remove('correct', 'wrong');

    const right = document.getElementById('hl-right');
    document.getElementById('hl-right-emoji').textContent = state.hlNext.emoji || '🎵';
    right.querySelector('.hl-title').textContent = state.hlNext.title;
    right.querySelector('.hl-artist').textContent = state.hlNext.artist || '';
    right.classList.remove('correct', 'wrong');

    const streams = right.querySelector('.hl-streams');
    streams.classList.add('hl-hidden');
    streams.classList.remove('revealed');

    right.querySelector('.hl-choice').classList.remove('hidden');
    document.getElementById('btn-higher').disabled = false;
    document.getElementById('btn-lower').disabled = false;
}

function hlGuess(guess) {
    document.getElementById('btn-higher').disabled = true;
    document.getElementById('btn-lower').disabled = true;
    playClickSound();

    const isCorrect = guess === 'higher'
        ? state.hlNext.value >= state.hlCurrent.value
        : state.hlNext.value <= state.hlCurrent.value;

    const right = document.getElementById('hl-right');
    right.querySelector('.streams-num').textContent = state.hlNext.value;
    right.querySelector('.hl-streams').classList.remove('hl-hidden');
    right.querySelector('.hl-streams').classList.add('revealed');
    right.querySelector('.hl-choice').classList.add('hidden');

    if (isCorrect) {
        right.classList.add('correct');
        state.score += 100;
        state.streak++;
        if (state.score > state.hlBest) {
            state.hlBest = state.score;
            localStorage.setItem('vkgames_hl_best', state.hlBest);
        }
        playSuccessSound();
        showToast('+100 points !', 'success');

        setTimeout(() => {
            state.hlCurrent = state.hlNext;
            const gameData = allGameData[state.currentGame];
            const pool = gameData.higherLower.filter(s => !state.hlUsed.includes(s.title));
            state.hlNext = shuffle(pool.length ? pool : gameData.higherLower)[0];
            state.hlUsed.push(state.hlNext.title);
            updateHL();
        }, 1500);
    } else {
        right.classList.add('wrong');
        playErrorSound();
        showToast('Game Over !', 'error');
        setTimeout(() => {
            saveScore(state.score);
            showResult();
        }, 1500);
    }

    document.getElementById('hl-score').textContent = state.score;
    document.getElementById('hl-streak').textContent = state.streak;
    document.getElementById('hl-best').textContent = state.hlBest;
}

// ===== Clash =====
function startClash() {
    const gameData = allGameData[state.currentGame];
    if (!gameData?.clash) {
        showToast('Pas de données disponibles', 'error');
        return;
    }

    const config = gameConfigs[state.currentGame];
    document.getElementById('clash-question').textContent = config.clashQuestion;

    state.clashBracket = shuffle([...gameData.clash]).slice(0, 8);
    state.clashWinners = [];
    state.clashRound = 0;

    showScreen('clash-screen');
    showClashRound();
}

function showClashRound() {
    const bracket = state.clashWinners.length > 0 ? state.clashWinners : state.clashBracket;

    if (bracket.length === 1) {
        showClashWinner(bracket[0]);
        return;
    }

    document.getElementById('clash-round').textContent = `${state.clashRound + 1}/${bracket.length / 2}`;

    const left = bracket[state.clashRound * 2];
    const right = bracket[state.clashRound * 2 + 1];

    const leftCard = document.getElementById('clash-left');
    const rightCard = document.getElementById('clash-right');

    [leftCard, rightCard].forEach(c => {
        c.classList.remove('selected', 'winner', 'loser');
        c.querySelector('.clash-votes').classList.add('hidden');
    });

    leftCard.querySelector('.clash-emoji').textContent = left.emoji;
    leftCard.querySelector('.clash-name').textContent = left.name;
    leftCard.querySelector('.clash-genre').textContent = left.info;

    rightCard.querySelector('.clash-emoji').textContent = right.emoji;
    rightCard.querySelector('.clash-name').textContent = right.name;
    rightCard.querySelector('.clash-genre').textContent = right.info;

    leftCard.onclick = () => selectClash(left, leftCard, rightCard, right);
    rightCard.onclick = () => selectClash(right, rightCard, leftCard, left);
}

function selectClash(winner, winCard, loseCard, loser) {
    playClickSound();
    winCard.onclick = null;
    loseCard.onclick = null;
    winCard.classList.add('selected');

    const total = winner.votes + loser.votes;
    const winPct = Math.round((winner.votes / total) * 100);
    const losePct = 100 - winPct;

    winCard.querySelector('.votes-fill').style.width = `${winPct}%`;
    winCard.querySelector('.votes-pct').textContent = `${winPct}%`;
    winCard.querySelector('.clash-votes').classList.remove('hidden');

    loseCard.querySelector('.votes-fill').style.width = `${losePct}%`;
    loseCard.querySelector('.votes-pct').textContent = `${losePct}%`;
    loseCard.querySelector('.clash-votes').classList.remove('hidden');

    setTimeout(() => {
        winCard.classList.add('winner');
        loseCard.classList.add('loser');

        state.clashWinners.push(winner);
        state.clashRound++;

        setTimeout(() => {
            const bracket = state.clashWinners.length >= state.clashBracket.length / 2 ? state.clashWinners : state.clashBracket;

            if (state.clashRound * 2 >= bracket.length) {
                if (state.clashWinners.length === 1) {
                    showClashWinner(state.clashWinners[0]);
                } else {
                    state.clashBracket = [...state.clashWinners];
                    state.clashWinners = [];
                    state.clashRound = 0;
                    showClashRound();
                }
            } else {
                showClashRound();
            }
        }, 1000);
    }, 1000);
}

function showClashWinner(winner) {
    document.getElementById('winner-emoji').textContent = winner.emoji;
    document.getElementById('winner-name').textContent = winner.name;
    playSuccessSound();
    resumeBgMusic();
    showScreen('winner-screen');
}

// ===== Timer =====
function startTimer() {
    state.timer = state.difficulty === 'hard' ? 15 : state.difficulty === 'medium' ? 20 : 30;
    const timerEl = document.getElementById('game-timer');
    const timerBox = document.getElementById('timer-box');
    const timerFill = document.getElementById('timer-fill');
    const maxTime = state.timer;

    timerEl.textContent = state.timer;
    timerBox.classList.remove('warning', 'danger');
    timerFill.classList.remove('warning', 'danger');
    timerFill.style.width = '100%';

    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        state.timer--;
        timerEl.textContent = state.timer;
        timerFill.style.width = `${(state.timer / maxTime) * 100}%`;

        if (state.timer <= 5) {
            timerBox.classList.add('danger');
            timerFill.classList.add('danger');
        } else if (state.timer <= 10) {
            timerBox.classList.add('warning');
            timerFill.classList.add('warning');
        }

        if (state.timer <= 0) {
            clearInterval(state.timerInterval);
            timeUp();
        }
    }, 1000);
}

function timeUp() {
    if (state.isAnswered) return;
    state.isAnswered = true;
    state.streak = 0;

    const q = state.questions[state.currentQ];
    const correct = q.a;

    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === correct) btn.classList.add('correct');
    });

    playErrorSound();
    showToast('Temps écoulé !', 'error');

    setTimeout(() => {
        state.currentQ++;
        if (state.currentQ >= 10) endGame();
        else showQuestion();
    }, 2000);
}

// ===== End Game =====
function endGame() {
    clearInterval(state.timerInterval);
    resumeBgMusic();
    saveScore(state.score);
    showResult();
}

function showResult() {
    const accuracy = state.questions?.length ? Math.round((state.correct / state.questions.length) * 100) : 0;

    let icon = '💪', title = 'Continue !';
    if (accuracy >= 80) { icon = '🏆'; title = 'Excellent !'; }
    else if (accuracy >= 60) { icon = '🎉'; title = 'Bien joué !'; }
    else if (accuracy >= 40) { icon = '👍'; title = 'Pas mal !'; }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('final-score').textContent = state.score;
    document.getElementById('result-correct').textContent = state.correct || state.streak;
    document.getElementById('result-accuracy').textContent = accuracy + '%';
    document.getElementById('result-streak').textContent = state.bestStreak || state.streak;

    showScreen('result-screen');
}

// ===== Quit =====
function showQuitModal() { document.getElementById('quit-modal').classList.remove('hidden'); }
function hideQuitModal() { document.getElementById('quit-modal').classList.add('hidden'); }

function confirmQuit() {
    clearInterval(state.timerInterval);
    hideQuitModal();
    goHome();
}

// ===== Leaderboard =====
function saveScore(score) {
    if (!state.user) return;

    const scores = JSON.parse(localStorage.getItem('vkgames_scores') || '[]');
    scores.push({
        name: state.user.username,
        score: score,
        game: state.currentGame,
        mode: state.mode,
        date: Date.now()
    });
    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem('vkgames_scores', JSON.stringify(scores.slice(0, 100)));

    state.user.score = (state.user.score || 0) + score;
    localStorage.setItem('vkgames_user', JSON.stringify(state.user));

    const users = JSON.parse(localStorage.getItem('vkgames_users') || '[]');
    const idx = users.findIndex(u => u.id === state.user.id);
    if (idx >= 0) {
        users[idx].score = state.user.score;
        localStorage.setItem('vkgames_users', JSON.stringify(users));
    }

    // Save to history
    const history = JSON.parse(localStorage.getItem('vkgames_history') || '[]');
    history.unshift({
        id: Date.now(),
        game: state.currentGame,
        mode: state.mode,
        score: score,
        correct: state.correct,
        date: new Date().toISOString(),
        isMultiplayer: false,
        players: 1
    });
    localStorage.setItem('vkgames_history', JSON.stringify(history.slice(0, 50)));

    // Update stats
    const stats = JSON.parse(localStorage.getItem('vkgames_user_stats') || '{}');
    if (!stats[state.user.id]) {
        stats[state.user.id] = { totalGames: 0, totalScore: 0, wins: 0, bestScore: 0, gamesPerCategory: {} };
    }
    const userStats = stats[state.user.id];
    userStats.totalGames++;
    userStats.totalScore += score;
    if (score > userStats.bestScore) userStats.bestScore = score;
    userStats.gamesPerCategory[state.currentGame] = (userStats.gamesPerCategory[state.currentGame] || 0) + 1;
    if (state.bestStreak > (userStats.bestStreak || 0)) userStats.bestStreak = state.bestStreak;
    stats[state.user.id] = userStats;
    localStorage.setItem('vkgames_user_stats', JSON.stringify(stats));

    // Add XP based on score
    const xpEarned = Math.floor(score / 10) + 25; // Base 25 XP + score/10
    addXP(xpEarned);

    // Track challenges
    updateChallengeProgress('games', null, 1);
    updateChallengeProgress('category', state.currentGame, 1);

    // Check for streak challenge
    if (state.bestStreak >= 10) {
        updateChallengeProgress('streak', null, state.bestStreak);
    }

    // Check for perfect game
    const accuracy = state.questions?.length ? (state.correct / state.questions.length) : 0;
    if (accuracy === 1) {
        updateChallengeProgress('perfect', null, 1);
        checkBadge('perfect');
    }

    // Check badges
    if (userStats.totalGames >= 50) checkBadge('games_50');
    if (userStats.totalGames >= 100) checkBadge('games_100');
    if (state.bestStreak >= 10) checkBadge('streak_10');

    // Save to game history
    addGameToHistory({
        game: state.currentGame,
        mode: state.mode,
        score: score,
        correct: state.correct,
        total: state.questions?.length || 0,
        multiplayer: false
    });

    // Sync score and stats to Firebase
    if (window.firebaseDB && state.user) {
        window.firebaseDB.ref('users/' + state.user.id + '/score').set(state.user.score);
        window.firebaseDB.ref('userData/' + state.user.id + '/stats').set(userStats);
    }

    updateUserUI();
}

function loadLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('vkgames_scores') || '[]');
    const preview = document.getElementById('leaderboard-preview');
    const badges = ['🥇', '🥈', '🥉', '4', '5'];

    if (scores.length) {
        preview.innerHTML = scores.slice(0, 5).map((s, i) => `
            <div class="leader-row">
                <span class="leader-rank"><span class="leader-badge">${badges[i] || i + 1}</span></span>
                <span class="leader-name">${s.name}</span>
                <span class="leader-score">${s.score}</span>
            </div>
        `).join('');
    } else {
        preview.innerHTML = '<div class="leaderboard-empty">Aucun score pour le moment</div>';
    }
}

function showLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('vkgames_scores') || '[]');
    const full = document.getElementById('leaderboard-full');
    const badges = ['🥇', '🥈', '🥉'];

    full.innerHTML = scores.slice(0, 20).map((s, i) => `
        <div class="leader-row">
            <span class="leader-rank"><span class="leader-badge">${badges[i] || i + 1}</span></span>
            <span class="leader-name">${s.name}</span>
            <span class="leader-score">${s.score}</span>
        </div>
    `).join('') || '<div class="leaderboard-empty">Aucun score</div>';

    showScreen('leaderboard-screen');
}

// ===== Share =====
function shareResult() {
    const text = `🎮 VKGAMES.FR\n🏆 Score: ${state.score}\n✅ ${state.correct}/10\n🎯 ${Math.round((state.correct / 10) * 100)}%\n\nJoue sur vkgames.fr !`;

    if (navigator.share) {
        navigator.share({ title: 'VKGAMES.FR', text });
    } else {
        navigator.clipboard.writeText(text);
        showToast('Copié !', 'success');
    }
}

// ===== Utils =====
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function calcPoints() {
    const base = state.difficulty === 'hard' ? 150 : state.difficulty === 'medium' ? 100 : 50;
    return base + Math.floor(state.timer * 10) + Math.floor(state.streak * 20);
}

function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = msg;
    toast.className = `toast ${type} show`;
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== Multiplayer State =====
let mpState = {
    code: null,
    isHost: false,
    myId: null,
    players: [],
    maxPlayers: 4,
    game: 'music',
    category: 'mixed',
    timePerQuestion: 20,
    rounds: 10,
    currentRound: 0,
    questions: [],
    scores: {},
    answered: {},
    timerInterval: null,
    timer: 20,
    roundStartTime: 0,
    gameRef: null,
    listeners: [],
    visibility: 'public',
    gameStarted: false,
    roundTransitioning: false,
    editingLobby: false,
    gameMode: 'solo', // solo or duo
    teams: null
};

// ===== Multiplayer Functions =====
function initMultiplayer() {
    // Create multiplayer button
    document.getElementById('create-multiplayer')?.addEventListener('click', () => {
        playClickSound();
        showScreen('multiplayer-setup');
        updateMpCategories();
        loadPublicGames();
    });

    document.getElementById('join-multiplayer')?.addEventListener('click', () => {
        playClickSound();
        document.getElementById('join-code').value = '';
        document.getElementById('join-modal').classList.remove('hidden');
    });

    document.getElementById('close-join')?.addEventListener('click', () => {
        document.getElementById('join-modal').classList.add('hidden');
    });

    document.getElementById('join-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const code = document.getElementById('join-code').value.toUpperCase();
        joinMpGame(code);
    });

    // Setup screen
    document.getElementById('back-mp-setup')?.addEventListener('click', () => {
        playClickSound();
        showScreen('home-screen');
    });

    // Player selection
    document.querySelectorAll('.mp-player-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mp-player-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            mpState.maxPlayers = parseInt(btn.dataset.players);
            playClickSound();
        });
    });

    // Game selection
    document.querySelectorAll('.mp-game-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mp-game-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            mpState.game = btn.dataset.game;
            updateMpCategories();
            playClickSound();
        });
    });

    // Time selection
    document.querySelectorAll('.mp-time-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mp-time-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            mpState.timePerQuestion = parseInt(btn.dataset.time);
            playClickSound();
        });
    });

    // Rounds selection
    document.querySelectorAll('.mp-rounds-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mp-rounds-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            mpState.rounds = parseInt(btn.dataset.rounds);
            playClickSound();
        });
    });

    // Visibility toggle
    document.querySelectorAll('.mp-visibility-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mp-visibility-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            mpState.visibility = btn.dataset.visibility;
            playClickSound();
        });
    });

    // Refresh public games button
    document.getElementById('refresh-public-games')?.addEventListener('click', () => {
        playClickSound();
        loadPublicGames();
    });

    // Create game
    document.getElementById('create-mp-game')?.addEventListener('click', createMpGame);

    // Lobby
    document.getElementById('copy-lobby-code')?.addEventListener('click', copyLobbyCode);
    document.getElementById('share-lobby-link')?.addEventListener('click', shareLobbyLink);
    document.getElementById('leave-lobby')?.addEventListener('click', leaveLobby);
    document.getElementById('start-mp-game')?.addEventListener('click', startMpGame);
    document.getElementById('change-lobby-settings')?.addEventListener('click', changeLobbySettings);

    // Results
    document.getElementById('mp-rematch')?.addEventListener('click', mpRematch);
    document.getElementById('mp-change-theme')?.addEventListener('click', mpChangeTheme);
    document.getElementById('mp-new-game')?.addEventListener('click', () => {
        leaveLobby();
        showScreen('multiplayer-setup');
        loadPublicGames();
    });
    document.getElementById('mp-reset-scores')?.addEventListener('click', mpResetScores);
    document.getElementById('mp-quit')?.addEventListener('click', () => {
        leaveLobby();
        showScreen('home-screen');
    });
}

function updateMpCategories() {
    const grid = document.getElementById('mp-category-grid');
    const config = gameConfigs[mpState.game];
    if (!config || !grid) return;

    grid.innerHTML = config.genres.map((g, i) => `
        <button class="mp-category-btn ${i === 0 || g.id === 'mixed' ? 'selected' : ''}" data-category="${g.id}">
            ${g.emoji} ${g.name}
        </button>
    `).join('');

    grid.querySelectorAll('.mp-category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mp-category-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            mpState.category = btn.dataset.category;
            playClickSound();
        });
    });

    // Select mixed by default
    const mixedBtn = grid.querySelector('[data-category="mixed"]');
    if (mixedBtn) {
        document.querySelectorAll('.mp-category-btn').forEach(b => b.classList.remove('selected'));
        mixedBtn.classList.add('selected');
        mpState.category = 'mixed';
    }
}

function loadPublicGames() {
    const listEl = document.getElementById('public-games-list');
    if (!listEl || !window.firebaseDB) {
        if (listEl) listEl.innerHTML = '<p class="no-games">Firebase non connecté</p>';
        return;
    }

    listEl.innerHTML = '<p class="no-games">Chargement...</p>';

    // Get all public games that are waiting for players
    window.firebaseDB.ref('games').orderByChild('visibility').equalTo('public').once('value')
        .then((snapshot) => {
            const games = snapshot.val();
            if (!games) {
                listEl.innerHTML = '<p class="no-games">Aucune partie publique disponible</p>';
                return;
            }

            // Filter only waiting games that aren't full
            const availableGames = Object.values(games).filter(g => {
                if (g.status !== 'waiting') return false;
                const playerCount = g.players ? Object.keys(g.players).length : 0;
                return playerCount < g.maxPlayers;
            });

            if (availableGames.length === 0) {
                listEl.innerHTML = '<p class="no-games">Aucune partie publique disponible</p>';
                return;
            }

            listEl.innerHTML = availableGames.map(game => {
                const config = gameConfigs[game.game];
                const playerCount = game.players ? Object.keys(game.players).length : 0;
                const hostPlayer = game.players ? Object.values(game.players).find(p => p.isHost) : null;

                return `
                    <div class="public-game-card">
                        <div class="public-game-info">
                            <div class="public-game-title">
                                ${config?.icon || '🎮'} ${config?.title || game.game}
                            </div>
                            <div class="public-game-details">
                                Hôte: ${hostPlayer?.name || 'Inconnu'} • ${game.rounds} manches • ${game.timePerQuestion}s/question
                            </div>
                        </div>
                        <div class="public-game-players">
                            👥 ${playerCount}/${game.maxPlayers}
                        </div>
                        <button class="public-game-join" onclick="joinMpGame('${game.code}')">
                            Rejoindre
                        </button>
                    </div>
                `;
            }).join('');
        })
        .catch((error) => {
            console.error('Erreur chargement parties:', error);
            listEl.innerHTML = '<p class="no-games">Erreur de chargement</p>';
        });
}

function generateGameCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function createMpGame() {
    if (!window.firebaseDB) {
        showToast('Firebase non configuré !', 'error');
        return;
    }

    playClickSound();

    // If editing existing lobby, update settings instead of creating new game
    if (mpState.editingLobby && mpState.gameRef) {
        mpState.gameRef.update({
            maxPlayers: mpState.maxPlayers,
            game: mpState.game,
            category: mpState.category,
            timePerQuestion: mpState.timePerQuestion,
            rounds: mpState.rounds,
            visibility: mpState.visibility
        }).then(() => {
            mpState.editingLobby = false;
            showScreen('multiplayer-lobby');
            showToast('Paramètres mis à jour !', 'success');
        }).catch((error) => {
            console.error('Erreur Firebase:', error);
            showToast('Erreur de mise à jour', 'error');
        });
        return;
    }

    mpState.code = generateGameCode();
    mpState.isHost = true;
    mpState.myId = state.user?.id || 'player_' + Date.now();

    const playerData = {
        id: mpState.myId,
        name: state.user?.username || 'Joueur 1',
        avatar: state.user?.avatar || null,
        isHost: true,
        score: 0,
        answered: false
    };

    // Create game in Firebase
    const gameData = {
        code: mpState.code,
        hostId: mpState.myId,
        maxPlayers: mpState.maxPlayers,
        game: mpState.game,
        category: mpState.category,
        timePerQuestion: mpState.timePerQuestion,
        rounds: mpState.rounds,
        visibility: mpState.visibility,
        status: 'waiting', // waiting, playing, finished
        currentRound: 0,
        createdAt: Date.now(),
        players: {
            [mpState.myId]: playerData
        }
    };

    mpState.gameStarted = false;
    mpState.editingLobby = false;
    mpState.gameRef = window.firebaseDB.ref('games/' + mpState.code);
    mpState.gameRef.set(gameData)
        .then(() => {
            // Listen for changes
            setupGameListeners();
            showScreen('multiplayer-lobby');
            showToast('Partie créée !', 'success');
        })
        .catch((error) => {
            console.error('Erreur Firebase:', error);
            showToast('Erreur de connexion', 'error');
        });
}

function joinMpGame(code) {
    if (!window.firebaseDB) {
        showToast('Firebase non configuré !', 'error');
        return;
    }

    code = code.toUpperCase();
    mpState.gameRef = window.firebaseDB.ref('games/' + code);

    mpState.gameRef.once('value')
        .then((snapshot) => {
            const game = snapshot.val();

            if (!game) {
                playErrorSound();
                showToast('Code invalide', 'error');
                return;
            }

            if (game.status !== 'waiting') {
                playErrorSound();
                showToast('Partie déjà commencée', 'error');
                return;
            }

            const playerCount = game.players ? Object.keys(game.players).length : 0;
            if (playerCount >= game.maxPlayers) {
                playErrorSound();
                showToast('Partie pleine', 'error');
                return;
            }

            mpState.code = code;
            mpState.isHost = false;
            mpState.myId = state.user?.id || 'player_' + Date.now();
            mpState.maxPlayers = game.maxPlayers;
            mpState.game = game.game;
            mpState.category = game.category;
            mpState.timePerQuestion = game.timePerQuestion;
            mpState.rounds = game.rounds;
            mpState.gameStarted = false;

            const playerData = {
                id: mpState.myId,
                name: state.user?.username || 'Joueur ' + (playerCount + 1),
                avatar: state.user?.avatar || null,
                isHost: false,
                score: 0,
                answered: false
            };

            // Add player to Firebase
            mpState.gameRef.child('players/' + mpState.myId).set(playerData)
                .then(() => {
                    document.getElementById('join-modal').classList.add('hidden');
                    setupGameListeners();
                    showScreen('multiplayer-lobby');
                    playSuccessSound();
                    showToast('Partie rejointe !', 'success');
                });
        })
        .catch((error) => {
            console.error('Erreur Firebase:', error);
            playErrorSound();
            showToast('Erreur de connexion', 'error');
        });
}

function setupGameListeners() {
    if (!mpState.gameRef) return;

    // Clear old listeners
    mpState.listeners.forEach(unsub => unsub());
    mpState.listeners = [];

    // Listen for player changes
    const playersRef = mpState.gameRef.child('players');
    const playersListener = playersRef.on('value', (snapshot) => {
        const players = snapshot.val() || {};
        mpState.players = Object.values(players);
        mpState.scores = {};
        mpState.answered = {};
        mpState.players.forEach(p => {
            mpState.scores[p.id] = p.score || 0;
            mpState.answered[p.id] = p.answered || false;
        });
        updateLobbyUI();
        updateMpScoreboard();
        updatePlayersStatus();

        // Host checks if all players answered when game is playing
        if (mpState.isHost && mpState.gameStarted && mpState.players.length > 0) {
            const allAnswered = mpState.players.every(p => p.answered === true);
            if (allAnswered && !mpState.roundTransitioning) {
                mpState.roundTransitioning = true;
                clearInterval(mpState.timerInterval);
                setTimeout(() => {
                    proceedToNextRound();
                    mpState.roundTransitioning = false;
                }, 2000);
            }
        }
    });
    mpState.listeners.push(() => playersRef.off('value', playersListener));

    // Listen for game status changes
    const statusListener = mpState.gameRef.child('status').on('value', (snapshot) => {
        const status = snapshot.val();
        if (status === 'playing') {
            mpState.gameStarted = true;
            if (!mpState.isHost) {
                // Game started by host
                mpState.gameRef.once('value').then((snap) => {
                    const game = snap.val();
                    if (game.questions) {
                        mpState.questions = game.questions;
                        mpState.currentRound = game.currentRound || 0;
                        stopBgMusic();
                        showScreen('multiplayer-game');
                        showMpQuestion();
                    }
                });
            }
        } else if (status === 'waiting' && mpState.gameStarted) {
            // Host reset the game (change theme)
            mpState.gameStarted = false;
            if (!mpState.isHost) {
                showScreen('multiplayer-lobby');
                showToast('L\'hôte a changé les paramètres', 'info');
            }
        } else if (status === 'finished' && mpState.gameStarted) {
            // Only end if game was actually started
            endMpGame();
        }
    });
    mpState.listeners.push(() => mpState.gameRef.child('status').off('value', statusListener));

    // Listen for round changes
    const roundListener = mpState.gameRef.child('currentRound').on('value', (snapshot) => {
        const round = snapshot.val();
        if (round !== null && round !== mpState.currentRound && mpState.questions.length > 0) {
            mpState.currentRound = round;
            if (round >= mpState.rounds) {
                endMpGame();
            } else {
                showMpQuestion();
            }
        }
    });
    mpState.listeners.push(() => mpState.gameRef.child('currentRound').off('value', roundListener));

    // Setup chat listener
    clearChat();
    setupChatListener();
}

function updateLobbyUI() {
    document.getElementById('lobby-code').textContent = mpState.code;

    const config = gameConfigs[mpState.game];
    document.getElementById('lobby-game').textContent = `${config.icon} ${config.title}`;

    const genre = config.genres.find(g => g.id === mpState.category);
    document.getElementById('lobby-category').textContent = genre ? `${genre.emoji} ${genre.name}` : 'Mix';

    document.getElementById('lobby-time').textContent = `${mpState.timePerQuestion}s`;
    document.getElementById('lobby-rounds').textContent = mpState.rounds;
    document.getElementById('lobby-player-count').textContent = mpState.players.length;
    document.getElementById('lobby-max-players').textContent = mpState.maxPlayers;

    const playersList = document.getElementById('lobby-players-list');
    playersList.innerHTML = mpState.players.map(p => `
        <div class="lobby-player ${p.isHost ? 'host' : ''}">
            <div class="lobby-player-avatar">
                ${p.avatar ? `<img src="${p.avatar}" alt="">` : '👤'}
            </div>
            <span class="lobby-player-name">${p.name}</span>
            ${p.isHost ? '<span class="lobby-player-host">👑 Hôte</span>' : ''}
        </div>
    `).join('');

    const startBtn = document.getElementById('start-mp-game');
    const settingsDiv = document.getElementById('lobby-change-settings');
    if (mpState.isHost) {
        startBtn.disabled = mpState.players.length < 2;
        startBtn.style.display = 'block';
        if (settingsDiv) settingsDiv.style.display = 'block';
    } else {
        startBtn.style.display = 'none';
        if (settingsDiv) settingsDiv.style.display = 'none';
    }
}

function copyLobbyCode() {
    navigator.clipboard.writeText(mpState.code);
    playClickSound();
    showToast('Code copié !', 'success');
}

function shareLobbyLink() {
    const url = `${window.location.origin}?join=${mpState.code}`;
    const text = `🎮 Rejoins ma partie VKGames !\nCode: ${mpState.code}\n${url}`;

    // Always copy to clipboard
    navigator.clipboard.writeText(url).then(() => {
        showToast('Lien copié !', 'success');
    });

    // Also show native share dialog if available
    if (navigator.share) {
        navigator.share({ title: 'VKGames - Partie Multijoueur', text, url }).catch(() => {});
    }
}

function changeLobbySettings() {
    if (!mpState.isHost) {
        showToast('Seul l\'hôte peut modifier', 'error');
        return;
    }
    playClickSound();
    mpState.editingLobby = true;
    showScreen('multiplayer-setup');

    // Pre-fill the form with current settings
    document.querySelectorAll('.mp-game-btn').forEach(b => {
        b.classList.toggle('selected', b.dataset.game === mpState.game);
    });
    updateMpCategories();
    document.querySelectorAll('.mp-category-btn').forEach(b => {
        b.classList.toggle('selected', b.dataset.category === mpState.category);
    });
    document.querySelectorAll('.mp-time-btn').forEach(b => {
        b.classList.toggle('selected', parseInt(b.dataset.time) === mpState.timePerQuestion);
    });
    document.querySelectorAll('.mp-rounds-btn').forEach(b => {
        b.classList.toggle('selected', parseInt(b.dataset.rounds) === mpState.rounds);
    });
    document.querySelectorAll('.mp-players-btn').forEach(b => {
        b.classList.toggle('selected', parseInt(b.dataset.players) === mpState.maxPlayers);
    });
    document.querySelectorAll('.mp-visibility-btn').forEach(b => {
        b.classList.toggle('selected', b.dataset.visibility === mpState.visibility);
    });

    showToast('Modifie les paramètres puis clique sur "Créer la partie"', 'info');
}

function leaveLobby() {
    if (mpState.gameRef) {
        // Clear listeners
        mpState.listeners.forEach(unsub => unsub());
        mpState.listeners = [];

        if (mpState.isHost) {
            // Delete the entire game
            mpState.gameRef.remove();
        } else {
            // Just remove this player
            mpState.gameRef.child('players/' + mpState.myId).remove();
        }
    }

    mpState.gameRef = null;
    mpState.code = null;
    showScreen('home-screen');
    showToast('Partie quittée', 'success');
}

function startMpGame() {
    if (!mpState.isHost || !mpState.gameRef) return;

    playClickSound();
    stopBgMusic();

    mpState.gameStarted = true;

    // Prepare questions
    const gameData = allGameData[mpState.game];
    let data = [];

    if (gameData.quiz) {
        const genres = mpState.category === 'mixed' ? Object.keys(gameData.quiz) : [mpState.category];
        genres.forEach(g => {
            if (gameData.quiz[g]) {
                data = data.concat(gameData.quiz[g]);
            }
        });
    }

    if (gameData.flags && mpState.game === 'geo') {
        data = data.concat(gameData.flags);
    }

    mpState.questions = shuffle(data).slice(0, mpState.rounds);
    mpState.currentRound = 0;

    // Reset scores in Firebase
    const updates = {
        status: 'playing',
        currentRound: 0,
        questions: mpState.questions
    };

    // Reset all player scores
    mpState.players.forEach(p => {
        updates['players/' + p.id + '/score'] = 0;
        updates['players/' + p.id + '/answered'] = false;
    });

    mpState.gameRef.update(updates).then(() => {
        showScreen('multiplayer-game');
        showMpQuestion();
    });
}

function showMpQuestion() {
    const q = mpState.questions[mpState.currentRound];
    if (!q) {
        endMpGame();
        return;
    }

    mpState.answered = {};
    mpState.roundStartTime = Date.now();

    document.getElementById('mp-current-round').textContent = `${mpState.currentRound + 1}/${mpState.rounds}`;

    // Update mini scoreboard
    updateMpScoreboard();
    updatePlayersStatus();

    // Question text
    let questionText = '';
    let flagDisplay = '';

    if (mpState.game === 'music' && q.q) {
        questionText = `Qui chante "${q.q}" ?`;
    } else if (mpState.game === 'geo' && q.q && q.q.length <= 3) {
        questionText = 'Quel pays a ce drapeau ?';
        flagDisplay = `<div class="flag-display"><img src="https://flagcdn.com/w320/${q.q}.png" alt="Drapeau" class="flag-img"></div>`;
    } else {
        questionText = q.q;
    }

    document.getElementById('mp-question-text').innerHTML = flagDisplay + questionText;

    // Answers
    const grid = document.getElementById('mp-answers-grid');
    grid.innerHTML = shuffle([...q.opts]).map(opt =>
        `<button class="mp-answer-btn" data-answer="${opt}">${opt}</button>`
    ).join('');

    grid.querySelectorAll('.mp-answer-btn').forEach(btn => {
        btn.addEventListener('click', () => checkMpAnswer(btn, q.a));
    });

    // Timer
    mpState.timer = mpState.timePerQuestion;
    startMpTimer();
}

function updateMpScoreboard() {
    const scoreboard = document.getElementById('mp-scoreboard-mini');
    const sorted = [...mpState.players].sort((a, b) =>
        (mpState.scores[b.id] || 0) - (mpState.scores[a.id] || 0)
    );

    scoreboard.innerHTML = sorted.map(p => {
        const isCurrent = p.id === (state.user?.id || mpState.players[0].id);
        return `
            <div class="mp-score-mini ${isCurrent ? 'current' : ''}">
                <div class="mp-score-avatar">${p.avatar ? `<img src="${p.avatar}" alt="">` : '👤'}</div>
                <span>${p.name.substring(0, 8)}</span>
                <strong>${mpState.scores[p.id] || 0}</strong>
            </div>
        `;
    }).join('');
}

function updatePlayersStatus() {
    const statusEl = document.getElementById('mp-players-status');
    if (!statusEl) return;

    statusEl.innerHTML = mpState.players.map(p => {
        const hasAnswered = mpState.answered[p.id] || false;
        return `
            <div class="mp-player-status ${hasAnswered ? 'answered' : 'waiting'}">
                <div class="mp-player-status-avatar">
                    ${p.avatar ? `<img src="${p.avatar}" alt="">` : '👤'}
                </div>
                <span>${p.name.substring(0, 6)}</span>
                <span>${hasAnswered ? '✓' : '...'}</span>
            </div>
        `;
    }).join('');
}

function startMpTimer() {
    const timerEl = document.getElementById('mp-timer');
    const timerCircle = document.getElementById('mp-timer-circle');

    timerEl.textContent = mpState.timer;
    timerCircle.classList.remove('warning', 'danger');

    clearInterval(mpState.timerInterval);
    mpState.timerInterval = setInterval(() => {
        mpState.timer--;
        timerEl.textContent = mpState.timer;

        if (mpState.timer <= 5) {
            timerCircle.classList.add('danger');
        } else if (mpState.timer <= 10) {
            timerCircle.classList.add('warning');
        }

        if (mpState.timer <= 0) {
            clearInterval(mpState.timerInterval);
            mpTimeUp();
        }
    }, 1000);
}

function checkMpAnswer(btn, correct) {
    if (mpState.answered[mpState.myId]) return;

    mpState.answered[mpState.myId] = true;

    const isCorrect = btn.dataset.answer === correct;
    const responseTime = Date.now() - mpState.roundStartTime;

    // Disable all buttons
    document.querySelectorAll('.mp-answer-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.answer === correct) b.classList.add('correct');
    });

    let points = 0;
    if (isCorrect) {
        btn.classList.add('correct');
        // Points based on speed: faster = more points
        const maxPoints = 1000;
        const minPoints = 100;
        const maxTime = mpState.timePerQuestion * 1000;
        points = Math.floor(minPoints + (maxPoints - minPoints) * Math.max(0, 1 - responseTime / maxTime));

        mpState.scores[mpState.myId] = (mpState.scores[mpState.myId] || 0) + points;

        showMpFeedback(true, points);
        playSuccessSound();
    } else {
        btn.classList.add('wrong');
        showMpFeedback(false, 0);
        playErrorSound();
    }

    // Update score in Firebase
    if (mpState.gameRef) {
        mpState.gameRef.child('players/' + mpState.myId).update({
            score: mpState.scores[mpState.myId] || 0,
            answered: true
        });
    }

    updateMpScoreboard();
    updatePlayersStatus();

    // Check if all players have answered (host handles round transition)
    checkAllPlayersAnswered();
}

function checkAllPlayersAnswered() {
    // Now handled by the playersListener in setupGameListeners
    // This function is kept for backwards compatibility but does nothing
    // The playersListener detects when all players answered and triggers round transition
}

function proceedToNextRound() {
    if (!mpState.isHost || !mpState.gameRef) return;

    const nextRound = mpState.currentRound + 1;
    if (nextRound >= mpState.rounds) {
        mpState.gameRef.update({ status: 'finished', currentRound: nextRound });
    } else {
        // Reset answered status for all players
        const updates = { currentRound: nextRound };
        mpState.players.forEach(p => {
            updates['players/' + p.id + '/answered'] = false;
        });
        mpState.gameRef.update(updates);
    }
}

function mpTimeUp() {
    if (mpState.answered[mpState.myId]) return;

    mpState.answered[mpState.myId] = true;

    const q = mpState.questions[mpState.currentRound];
    document.querySelectorAll('.mp-answer-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.answer === q.a) b.classList.add('correct');
    });

    showMpFeedback(false, 0);
    playErrorSound();

    // Update in Firebase
    if (mpState.gameRef) {
        mpState.gameRef.child('players/' + mpState.myId).update({
            answered: true
        });
    }

    updatePlayersStatus();

    // Check if all players have answered
    checkAllPlayersAnswered();

    // Host handles round transition after timeout (fallback if not all answered)
    if (mpState.isHost) {
        setTimeout(() => {
            proceedToNextRound();
        }, 3000);
    }
}

function showMpFeedback(isCorrect, points) {
    const feedback = document.getElementById('mp-feedback');
    const icon = document.getElementById('mp-feedback-icon');
    const pointsEl = document.getElementById('mp-feedback-points');

    feedback.classList.remove('wrong');
    if (isCorrect) {
        icon.textContent = '✓';
        pointsEl.textContent = `+${points}`;
    } else {
        feedback.classList.add('wrong');
        icon.textContent = '✗';
        pointsEl.textContent = '+0';
    }

    feedback.classList.add('show');
    setTimeout(() => feedback.classList.remove('show'), 1500);
}

function endMpGame() {
    clearInterval(mpState.timerInterval);
    resumeBgMusic();

    // Save to history
    saveGameHistory();

    // Sort players by score
    const sorted = [...mpState.players].sort((a, b) =>
        (mpState.scores[b.id] || 0) - (mpState.scores[a.id] || 0)
    );

    // Build podium (reordered: 2nd, 1st, 3rd)
    const podium = document.getElementById('mp-podium');
    const podiumOrder = sorted.length >= 3 ? [sorted[1], sorted[0], sorted[2]] : sorted;

    podium.innerHTML = podiumOrder.slice(0, 3).map((p, i) => {
        const realPosition = sorted.indexOf(p) + 1;
        const medals = ['🥇', '🥈', '🥉'];
        return `
            <div class="mp-podium-place">
                <div class="mp-podium-avatar">${p.avatar ? '👤' : '👤'}</div>
                <div class="mp-podium-name">${p.name}</div>
                <div class="mp-podium-score">${mpState.scores[p.id] || 0} pts</div>
                <div class="mp-podium-stand">${medals[realPosition - 1] || realPosition}</div>
            </div>
        `;
    }).join('');

    // Full ranking
    const ranking = document.getElementById('mp-full-ranking');
    ranking.innerHTML = sorted.slice(3).map((p, i) => `
        <div class="mp-rank-row">
            <span class="mp-rank-position">${i + 4}</span>
            <div class="mp-rank-avatar">${p.avatar ? `<img src="${p.avatar}" alt="">` : '👤'}</div>
            <span class="mp-rank-name">${p.name}</span>
            <span class="mp-rank-score">${mpState.scores[p.id] || 0} pts</span>
        </div>
    `).join('');

    showScreen('multiplayer-results');
    playSuccessSound();
}

function mpRematch() {
    if (!mpState.isHost || !mpState.gameRef) {
        showToast('Seul l\'hôte peut relancer', 'error');
        return;
    }

    playClickSound();
    stopBgMusic();

    // Shuffle questions and reset
    mpState.questions = shuffle(mpState.questions);
    mpState.currentRound = 0;

    const updates = {
        status: 'playing',
        currentRound: 0,
        questions: mpState.questions
    };

    mpState.players.forEach(p => {
        updates['players/' + p.id + '/score'] = 0;
        updates['players/' + p.id + '/answered'] = false;
    });

    mpState.gameRef.update(updates).then(() => {
        showScreen('multiplayer-game');
        showMpQuestion();
    });
}

function mpChangeTheme() {
    if (!mpState.isHost || !mpState.gameRef) {
        showToast('Seul l\'hôte peut changer le thème', 'error');
        return;
    }

    playClickSound();

    // Reset scores
    mpState.players.forEach(p => {
        mpState.scores[p.id] = 0;
    });

    // Go back to lobby with reset state
    const updates = {
        status: 'waiting',
        currentRound: 0,
        questions: null
    };

    mpState.players.forEach(p => {
        updates['players/' + p.id + '/score'] = 0;
        updates['players/' + p.id + '/answered'] = false;
    });

    mpState.gameRef.update(updates).then(() => {
        mpState.gameStarted = false;
        showScreen('multiplayer-lobby');
        showToast('Choisis un nouveau thème et relance !', 'success');
    });
}

function mpResetScores() {
    mpState.players.forEach(p => {
        mpState.scores[p.id] = 0;
    });
    showToast('Scores réinitialisés', 'success');
}

// ===== Game History =====
function saveGameHistory() {
    if (!state.user) return;

    const history = JSON.parse(localStorage.getItem('vkgames_history') || '[]');
    const myId = state.user.id;
    const myScore = mpState.scores[myId] || state.score || 0;

    const entry = {
        id: Date.now(),
        game: mpState.game || state.currentGame,
        mode: mpState.category || state.mode,
        score: myScore,
        date: new Date().toISOString(),
        isMultiplayer: !!mpState.code,
        players: mpState.players?.length || 1,
        position: mpState.players ?
            [...mpState.players].sort((a, b) => (mpState.scores[b.id] || 0) - (mpState.scores[a.id] || 0))
                .findIndex(p => p.id === myId) + 1 : null
    };

    history.unshift(entry);
    localStorage.setItem('vkgames_history', JSON.stringify(history.slice(0, 50)));

    // Update user stats
    updateUserStats(entry);

    // Add XP for multiplayer
    let xpEarned = Math.floor(myScore / 10) + 50; // Base 50 XP for MP + score/10

    // Bonus XP for position
    if (entry.position === 1) {
        xpEarned += 100; // Winner bonus
        checkBadge('first_win');
    } else if (entry.position === 2) {
        xpEarned += 50;
    } else if (entry.position === 3) {
        xpEarned += 25;
    }

    addXP(xpEarned);

    // Track multiplayer challenge
    updateChallengeProgress('multiplayer', null, 1);

    // Track wins
    if (entry.position === 1) {
        const stats = JSON.parse(localStorage.getItem('vkgames_user_stats') || '{}');
        if (stats[state.user.id]) {
            const mpWins = (stats[state.user.id].mpWins || 0) + 1;
            stats[state.user.id].mpWins = mpWins;
            localStorage.setItem('vkgames_user_stats', JSON.stringify(stats));
            if (mpWins >= 10) checkBadge('mp_win_10');
        }
    }
}

function getUserStats() {
    if (!state.user) return { totalGames: 0, wins: 0, bestStreak: 0, totalScore: 0 };

    const stats = JSON.parse(localStorage.getItem('vkgames_user_stats') || '{}');
    return stats[state.user.id] || { totalGames: 0, wins: 0, bestStreak: 0, totalScore: 0 };
}

function updateUserStats(entry) {
    if (!state.user) return;

    const stats = JSON.parse(localStorage.getItem('vkgames_user_stats') || '{}');
    const userId = state.user.id;

    if (!stats[userId]) {
        stats[userId] = {
            totalGames: 0,
            totalScore: 0,
            wins: 0,
            bestScore: 0,
            gamesPerCategory: {}
        };
    }

    const userStats = stats[userId];
    userStats.totalGames++;
    userStats.totalScore += entry.score;
    if (entry.position === 1) userStats.wins++;
    if (entry.score > userStats.bestScore) userStats.bestScore = entry.score;

    const cat = entry.game;
    userStats.gamesPerCategory[cat] = (userStats.gamesPerCategory[cat] || 0) + 1;

    stats[userId] = userStats;
    localStorage.setItem('vkgames_user_stats', JSON.stringify(stats));
}

function loadUserStats() {
    if (!state.user) return null;

    const stats = JSON.parse(localStorage.getItem('vkgames_user_stats') || '{}');
    return stats[state.user.id] || {
        totalGames: 0,
        totalScore: 0,
        wins: 0,
        bestScore: 0,
        gamesPerCategory: {}
    };
}

function loadGameHistory() {
    if (!state.user) return [];

    const history = JSON.parse(localStorage.getItem('vkgames_history') || '[]');
    return history;
}

// Add stats panel to settings
function addStatsToSettings() {
    const settingsScreen = document.getElementById('settings-screen');
    if (!settingsScreen || document.getElementById('stats-panel')) return;

    const stats = loadUserStats();
    const history = loadGameHistory().slice(0, 5);

    const statsPanel = document.createElement('div');
    statsPanel.id = 'stats-panel';
    statsPanel.className = 'stats-panel';
    statsPanel.innerHTML = `
        <div class="stats-header">
            <h3>📊 Mes statistiques</h3>
        </div>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-card-value">${stats.totalGames}</div>
                <div class="stat-card-label">Parties</div>
            </div>
            <div class="stat-card">
                <div class="stat-card-value">${stats.totalScore}</div>
                <div class="stat-card-label">Score total</div>
            </div>
            <div class="stat-card">
                <div class="stat-card-value">${stats.bestScore}</div>
                <div class="stat-card-label">Meilleur score</div>
            </div>
        </div>
        <div class="history-section">
            <h4>📜 Historique récent</h4>
            <div class="history-list">
                ${history.length === 0 ? '<p style="color: var(--text-muted); text-align: center;">Aucune partie jouée</p>' :
                history.map(h => {
                    const config = gameConfigs[h.game];
                    const date = new Date(h.date).toLocaleDateString('fr-FR');
                    return `
                        <div class="history-item">
                            <span class="history-icon">${config?.icon || '🎮'}</span>
                            <div class="history-info">
                                <div class="history-game">${config?.title || h.game}</div>
                                <div class="history-details">${h.isMultiplayer ? `👥 ${h.players} joueurs - #${h.position}` : 'Solo'}</div>
                            </div>
                            <div>
                                <div class="history-score">${h.score} pts</div>
                                <div class="history-date">${date}</div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    const settingsForm = settingsScreen.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.parentNode.insertBefore(statsPanel, settingsForm.nextSibling);
    }
}

// Override showSettings to include stats
const originalShowSettings = showSettings;
showSettings = function() {
    originalShowSettings();
    setTimeout(addStatsToSettings, 100);
};

// Check for join code in URL
function checkJoinCode() {
    const urlParams = new URLSearchParams(window.location.search);
    const joinCode = urlParams.get('join');
    if (joinCode) {
        document.getElementById('join-code').value = joinCode;
        document.getElementById('join-modal').classList.remove('hidden');
    }
}

// ===== User Sync to Firebase =====
function syncUserToFirebase() {
    if (!window.firebaseDB || !state.user) return;

    const uid = state.user.id;

    // Sync basic user data
    window.firebaseDB.ref('users/' + uid).update({
        username: state.user.username,
        avatar: state.user.avatar || null,
        score: state.user.score || 0,
        lastActive: Date.now()
    }).catch(err => console.log('Firebase sync error:', err));

    // Sync XP data
    const xpData = JSON.parse(localStorage.getItem('vkgames_user_xp_' + uid) || '{}');
    if (xpData.level) {
        window.firebaseDB.ref('userData/' + uid + '/xp').set(xpData);
    }

    // Sync badges
    const badges = JSON.parse(localStorage.getItem('vkgames_badges_' + uid) || '[]');
    if (badges.length > 0) {
        window.firebaseDB.ref('userData/' + uid + '/badges').set(badges);
    }

    // Sync stats
    const allStats = JSON.parse(localStorage.getItem('vkgames_user_stats') || '{}');
    if (allStats[uid]) {
        window.firebaseDB.ref('userData/' + uid + '/stats').set(allStats[uid]);
    }

    // Sync unlocked themes
    const themes = JSON.parse(localStorage.getItem('vkgames_themes_' + uid) || '["default"]');
    window.firebaseDB.ref('userData/' + uid + '/themes').set(themes);
}

// Sync to Firebase periodically and on important events
function scheduleFirebaseSync() {
    // Sync every 2 minutes
    setInterval(() => {
        if (state.user) syncUserToFirebase();
    }, 120000);

    // Sync before page unload
    window.addEventListener('beforeunload', () => {
        if (state.user) syncUserToFirebase();
    });
}

// ===== Friends System =====
let friendsState = {
    friends: [],
    requests: [],
    currentTab: 'online',
    presenceRef: null
};

function initFriendsSystem() {
    if (!window.firebaseDB || !state.user) return;

    // Set up presence system
    setupPresence();

    // Load friends list
    loadFriends();

    // Set up event listeners
    document.getElementById('add-friend-btn')?.addEventListener('click', () => {
        document.getElementById('add-friend-modal').classList.remove('hidden');
        document.getElementById('friend-username-input').value = '';
        document.getElementById('friend-username-input').focus();
    });

    document.getElementById('cancel-add-friend')?.addEventListener('click', () => {
        document.getElementById('add-friend-modal').classList.add('hidden');
    });

    document.getElementById('send-friend-request')?.addEventListener('click', sendFriendRequest);

    document.getElementById('friend-username-input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendFriendRequest();
    });

    // Tab switching
    document.querySelectorAll('.friends-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.friends-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            friendsState.currentTab = tab.dataset.tab;
            renderFriendsList();
        });
    });
}

function setupPresence() {
    if (!window.firebaseDB || !state.user) return;

    const myPresenceRef = window.firebaseDB.ref('presence/' + state.user.id);
    const connectedRef = window.firebaseDB.ref('.info/connected');

    connectedRef.on('value', (snapshot) => {
        if (snapshot.val() === true) {
            // We're connected
            myPresenceRef.set({
                online: true,
                lastSeen: Date.now(),
                username: state.user.username,
                avatar: state.user.avatar || null
            });

            // When we disconnect, update lastSeen
            myPresenceRef.onDisconnect().set({
                online: false,
                lastSeen: Date.now(),
                username: state.user.username,
                avatar: state.user.avatar || null
            });
        }
    });

    // Update lastSeen periodically
    setInterval(() => {
        if (state.user) {
            myPresenceRef.update({ lastSeen: Date.now() });
        }
    }, 60000); // Every minute
}

function loadFriends() {
    if (!window.firebaseDB || !state.user) {
        renderFriendsList();
        return;
    }

    const friendsRef = window.firebaseDB.ref('users/' + state.user.id + '/friends');
    const requestsRef = window.firebaseDB.ref('users/' + state.user.id + '/friendRequests');

    // Listen for friends changes
    friendsRef.on('value', (snapshot) => {
        const friendIds = snapshot.val() || {};
        const friendPromises = Object.keys(friendIds).map(id => {
            return window.firebaseDB.ref('presence/' + id).once('value').then(snap => {
                const presence = snap.val() || {};
                return {
                    id,
                    ...presence,
                    online: presence.online || false
                };
            });
        });

        Promise.all(friendPromises).then(friends => {
            friendsState.friends = friends;
            renderFriendsList();
        });
    });

    // Listen for friend requests
    requestsRef.on('value', (snapshot) => {
        const requests = snapshot.val() || {};
        friendsState.requests = Object.entries(requests).map(([id, data]) => ({
            id,
            ...data
        }));
        updateRequestsCount();
        renderFriendsList();
    });

    // Listen for presence changes of friends
    window.firebaseDB.ref('presence').on('child_changed', (snapshot) => {
        const friendId = snapshot.key;
        const presence = snapshot.val();
        const friendIndex = friendsState.friends.findIndex(f => f.id === friendId);
        if (friendIndex !== -1) {
            friendsState.friends[friendIndex] = { ...friendsState.friends[friendIndex], ...presence };
            renderFriendsList();
        }
    });
}

function renderFriendsList() {
    const listEl = document.getElementById('friends-list');
    if (!listEl) return;

    if (!state.user) {
        listEl.innerHTML = '<p class="no-friends">Connectez-vous pour voir vos amis</p>';
        return;
    }

    let html = '';

    if (friendsState.currentTab === 'requests') {
        if (friendsState.requests.length === 0) {
            html = '<p class="no-friends">Aucune demande d\'ami</p>';
        } else {
            html = friendsState.requests.map(req => `
                <div class="friend-request-card">
                    <div class="friend-request-info">
                        <div class="friend-avatar">
                            ${req.avatar ? `<img src="${req.avatar}" alt="">` : '👤'}
                        </div>
                        <div class="friend-info">
                            <div class="friend-name">${req.username || 'Joueur'}</div>
                            <div class="friend-status-text">Demande d'ami</div>
                        </div>
                    </div>
                    <div class="friend-request-actions">
                        <button class="friend-request-btn accept" onclick="acceptFriendRequest('${req.id}')">Accepter</button>
                        <button class="friend-request-btn decline" onclick="declineFriendRequest('${req.id}')">Refuser</button>
                    </div>
                </div>
            `).join('');
        }
    } else {
        let friends = friendsState.friends;

        if (friendsState.currentTab === 'online') {
            friends = friends.filter(f => f.online);
        }

        // Sort: online first, then by name
        friends.sort((a, b) => {
            if (a.online && !b.online) return -1;
            if (!a.online && b.online) return 1;
            return (a.username || '').localeCompare(b.username || '');
        });

        if (friends.length === 0) {
            if (friendsState.currentTab === 'online') {
                html = '<p class="no-friends">Aucun ami en ligne</p>';
            } else {
                html = '<p class="no-friends">Aucun ami ajouté</p>';
            }
        } else {
            html = friends.map(friend => {
                const statusText = friend.online ? 'En ligne' : formatLastSeen(friend.lastSeen);
                const statusClass = friend.online ? 'online' : 'offline';

                return `
                    <div class="friend-card" onclick="inviteFriend('${friend.id}')">
                        <div class="friend-avatar">
                            ${friend.avatar ? `<img src="${friend.avatar}" alt="">` : '👤'}
                            <span class="friend-status-dot ${statusClass}"></span>
                        </div>
                        <div class="friend-info">
                            <div class="friend-name">${friend.username || 'Joueur'}</div>
                            <div class="friend-status-text ${statusClass}">${statusText}</div>
                        </div>
                        <div class="friend-actions">
                            <button class="friend-action-btn danger" onclick="event.stopPropagation(); removeFriend('${friend.id}')" title="Supprimer">✕</button>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    listEl.innerHTML = html;
}

function formatLastSeen(timestamp) {
    if (!timestamp) return 'Hors ligne';

    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'À l\'instant';
    if (minutes < 60) return `Il y a ${minutes} min`;
    if (hours < 24) return `Il y a ${hours}h`;
    if (days < 7) return `Il y a ${days}j`;
    return 'Hors ligne';
}

function updateRequestsCount() {
    const countEl = document.getElementById('friend-requests-count');
    if (countEl) {
        countEl.textContent = friendsState.requests.length > 0 ? friendsState.requests.length : '';
    }
}

function sendFriendRequest() {
    const input = document.getElementById('friend-username-input');
    const username = input.value.trim();

    if (!username) {
        showToast('Entrez un nom d\'utilisateur', 'error');
        return;
    }

    if (!window.firebaseDB || !state.user) {
        showToast('Vous devez être connecté', 'error');
        return;
    }

    if (username.toLowerCase() === state.user.username.toLowerCase()) {
        showToast('Vous ne pouvez pas vous ajouter vous-même', 'error');
        return;
    }

    // Search for user by username
    window.firebaseDB.ref('users').orderByChild('username').equalTo(username).once('value')
        .then((snapshot) => {
            const users = snapshot.val();
            if (!users) {
                showToast('Utilisateur non trouvé', 'error');
                return;
            }

            const targetUserId = Object.keys(users)[0];
            const targetUser = users[targetUserId];

            // Check if already friends
            const friendsRef = window.firebaseDB.ref('users/' + state.user.id + '/friends/' + targetUserId);
            return friendsRef.once('value').then((friendSnap) => {
                if (friendSnap.val()) {
                    showToast('Vous êtes déjà amis', 'info');
                    return;
                }

                // Send friend request
                return window.firebaseDB.ref('users/' + targetUserId + '/friendRequests/' + state.user.id).set({
                    username: state.user.username,
                    avatar: state.user.avatar || null,
                    timestamp: Date.now()
                }).then(() => {
                    showToast('Demande envoyée !', 'success');
                    document.getElementById('add-friend-modal').classList.add('hidden');
                });
            });
        })
        .catch((error) => {
            console.error('Error sending friend request:', error);
            showToast('Erreur lors de l\'envoi', 'error');
        });
}

function acceptFriendRequest(requesterId) {
    if (!window.firebaseDB || !state.user) return;

    const request = friendsState.requests.find(r => r.id === requesterId);
    if (!request) return;

    // Add to both users' friends lists
    const updates = {};
    updates['users/' + state.user.id + '/friends/' + requesterId] = true;
    updates['users/' + requesterId + '/friends/' + state.user.id] = true;
    updates['users/' + state.user.id + '/friendRequests/' + requesterId] = null;

    window.firebaseDB.ref().update(updates)
        .then(() => {
            showToast('Ami ajouté !', 'success');
            playSuccessSound();
        })
        .catch((error) => {
            console.error('Error accepting friend request:', error);
            showToast('Erreur', 'error');
        });
}

function declineFriendRequest(requesterId) {
    if (!window.firebaseDB || !state.user) return;

    window.firebaseDB.ref('users/' + state.user.id + '/friendRequests/' + requesterId).remove()
        .then(() => {
            showToast('Demande refusée', 'info');
        })
        .catch((error) => {
            console.error('Error declining friend request:', error);
            showToast('Erreur', 'error');
        });
}

function removeFriend(friendId) {
    if (!window.firebaseDB || !state.user) return;

    if (!confirm('Voulez-vous vraiment supprimer cet ami ?')) return;

    const updates = {};
    updates['users/' + state.user.id + '/friends/' + friendId] = null;
    updates['users/' + friendId + '/friends/' + state.user.id] = null;

    window.firebaseDB.ref().update(updates)
        .then(() => {
            showToast('Ami supprimé', 'info');
        })
        .catch((error) => {
            console.error('Error removing friend:', error);
            showToast('Erreur', 'error');
        });
}

function inviteFriend(friendId) {
    // If in a multiplayer lobby as host, invite friend
    if (mpState.isHost && mpState.code) {
        const friend = friendsState.friends.find(f => f.id === friendId);
        if (friend && friend.online) {
            // Send game invitation
            window.firebaseDB.ref('users/' + friendId + '/gameInvites/' + mpState.code).set({
                hostName: state.user.username,
                code: mpState.code,
                game: mpState.game,
                timestamp: Date.now()
            }).then(() => {
                showToast(`Invitation envoyée à ${friend.username}`, 'success');
            });
        } else {
            showToast('Cet ami n\'est pas en ligne', 'info');
        }
    }
}

// ===== XP & Level System =====
const levelConfig = {
    xpPerLevel: 100, // Base XP needed per level
    xpMultiplier: 1.2, // Each level requires more XP
    maxLevel: 100
};

const rankConfig = [
    { name: 'Bronze', icon: '🥉', minLevel: 1, class: 'rank-bronze' },
    { name: 'Argent', icon: '🥈', minLevel: 10, class: 'rank-silver' },
    { name: 'Or', icon: '🥇', minLevel: 20, class: 'rank-gold' },
    { name: 'Platine', icon: '💎', minLevel: 35, class: 'rank-platinum' },
    { name: 'Diamant', icon: '💠', minLevel: 50, class: 'rank-diamond' },
    { name: 'Maître', icon: '👑', minLevel: 75, class: 'rank-master' }
];

const badgesList = [
    { id: 'first_win', icon: '🏆', name: 'Première victoire', desc: 'Gagne ta première partie' },
    { id: 'streak_10', icon: '🔥', name: 'En feu', desc: 'Fais une série de 10' },
    { id: 'games_50', icon: '🎮', name: 'Joueur assidu', desc: 'Joue 50 parties' },
    { id: 'games_100', icon: '🎯', name: 'Vétéran', desc: 'Joue 100 parties' },
    { id: 'perfect', icon: '⭐', name: 'Parfait', desc: '100% de bonnes réponses' },
    { id: 'social', icon: '👥', name: 'Social', desc: 'Ajoute 5 amis' },
    { id: 'mp_win_10', icon: '⚔️', name: 'Gladiateur', desc: 'Gagne 10 parties multi' },
    { id: 'level_25', icon: '🌟', name: 'Étoile montante', desc: 'Atteins le niveau 25' },
    { id: 'all_categories', icon: '🌈', name: 'Polyvalent', desc: 'Joue dans toutes les catégories' }
];

function getUserXP() {
    if (!state.user) return { xp: 0, level: 1, totalXp: 0 };
    const userData = JSON.parse(localStorage.getItem('vkgames_user_xp_' + state.user.id) || '{}');
    return {
        xp: userData.xp || 0,
        level: userData.level || 1,
        totalXp: userData.totalXp || 0
    };
}

function getXPForLevel(level) {
    return Math.floor(levelConfig.xpPerLevel * Math.pow(levelConfig.xpMultiplier, level - 1));
}

function addXP(amount) {
    if (!state.user) return;

    let userData = getUserXP();
    userData.xp += amount;
    userData.totalXp += amount;

    // Level up check
    let xpNeeded = getXPForLevel(userData.level);
    while (userData.xp >= xpNeeded && userData.level < levelConfig.maxLevel) {
        userData.xp -= xpNeeded;
        userData.level++;
        xpNeeded = getXPForLevel(userData.level);
        showToast(`🎉 Niveau ${userData.level} atteint !`, 'success');
        playSuccessSound();
        checkBadge('level_' + userData.level);
    }

    localStorage.setItem('vkgames_user_xp_' + state.user.id, JSON.stringify(userData));
    updateXPDisplay();
    updateRankDisplay();

    // Sync to Firebase
    if (window.firebaseDB && state.user) {
        window.firebaseDB.ref('userData/' + state.user.id + '/xp').set(userData);
        window.firebaseDB.ref('users/' + state.user.id + '/level').set(userData.level);
    }
}

function getUserRank() {
    const { level } = getUserXP();
    let currentRank = rankConfig[0];
    for (const rank of rankConfig) {
        if (level >= rank.minLevel) {
            currentRank = rank;
        }
    }
    return currentRank;
}

function updateXPDisplay() {
    const { xp, level } = getUserXP();
    const xpNeeded = getXPForLevel(level);
    const percentage = Math.min((xp / xpNeeded) * 100, 100);

    // Update dropdown
    const dropdownLevel = document.getElementById('dropdown-level');
    const dropdownXpFill = document.getElementById('dropdown-xp-fill');
    const dropdownXpText = document.getElementById('dropdown-xp-text');

    if (dropdownLevel) dropdownLevel.textContent = `Niv. ${level}`;
    if (dropdownXpFill) dropdownXpFill.style.width = percentage + '%';
    if (dropdownXpText) dropdownXpText.textContent = `${xp} / ${xpNeeded} XP`;

    // Update profile modal
    const profileLevel = document.getElementById('profile-level');
    const profileXp = document.getElementById('profile-xp');
    const profileLevelFill = document.getElementById('profile-level-fill');

    if (profileLevel) profileLevel.textContent = `Niveau ${level}`;
    if (profileXp) profileXp.textContent = `${xp} / ${xpNeeded} XP`;
    if (profileLevelFill) profileLevelFill.style.width = percentage + '%';
}

function updateRankDisplay() {
    const rank = getUserRank();

    // Update dropdown
    const dropdownRank = document.getElementById('dropdown-rank');
    if (dropdownRank) {
        dropdownRank.innerHTML = `
            <span class="rank-icon">${rank.icon}</span>
            <span class="rank-name ${rank.class}">${rank.name}</span>
        `;
    }

    // Update profile
    const profileRank = document.getElementById('profile-rank');
    if (profileRank) {
        profileRank.innerHTML = `
            <span class="rank-icon">${rank.icon}</span>
            <span class="${rank.class}">${rank.name}</span>
        `;
    }
}

// ===== Badges System =====
function getUserBadges() {
    if (!state.user) return [];
    return JSON.parse(localStorage.getItem('vkgames_badges_' + state.user.id) || '[]');
}

function checkBadge(badgeId) {
    if (!state.user) return;

    const badges = getUserBadges();
    if (badges.includes(badgeId)) return;

    const badge = badgesList.find(b => b.id === badgeId);
    if (badge) {
        badges.push(badgeId);
        localStorage.setItem('vkgames_badges_' + state.user.id, JSON.stringify(badges));
        showToast(`🏅 Badge débloqué: ${badge.name}`, 'success');
        updateBadgesDisplay();

        // Sync to Firebase
        if (window.firebaseDB) {
            window.firebaseDB.ref('userData/' + state.user.id + '/badges').set(badges);
        }
    }
}

function updateBadgesDisplay() {
    const badgesGrid = document.getElementById('profile-badges');
    if (!badgesGrid) return;

    const userBadges = getUserBadges();

    badgesGrid.innerHTML = badgesList.map(badge => {
        const unlocked = userBadges.includes(badge.id);
        return `
            <div class="badge ${unlocked ? 'unlocked' : 'locked'}" title="${badge.name}: ${badge.desc}">
                ${unlocked ? badge.icon : '🔒'}
            </div>
        `;
    }).join('');
}

// ===== Daily Challenges =====
const dailyChallenges = [
    { id: 'music_wins', icon: '🎵', name: 'Mélomane', desc: 'Gagne 3 parties de Quiz Musical', target: 3, xp: 150, category: 'music' },
    { id: 'streak_10', icon: '🔥', name: 'En feu', desc: 'Fais une série de 10 bonnes réponses', target: 10, xp: 100, type: 'streak' },
    { id: 'mp_games', icon: '⚔️', name: 'Challenger', desc: 'Joue 5 parties multijoueur', target: 5, xp: 200, type: 'multiplayer' },
    { id: 'cinema_wins', icon: '🎬', name: 'Cinéphile', desc: 'Gagne 3 parties de Quiz Cinéma', target: 3, xp: 150, category: 'cinema' },
    { id: 'perfect_round', icon: '⭐', name: 'Perfectionniste', desc: 'Fais un sans faute', target: 1, xp: 250, type: 'perfect' },
    { id: 'games_played', icon: '🎮', name: 'Joueur', desc: 'Joue 10 parties', target: 10, xp: 100, type: 'games' },
    { id: 'sport_wins', icon: '⚽', name: 'Sportif', desc: 'Gagne 3 parties de Quiz Sport', target: 3, xp: 150, category: 'sport' },
    { id: 'fast_answer', icon: '⚡', name: 'Éclair', desc: 'Réponds en moins de 3s 5 fois', target: 5, xp: 175, type: 'speed' }
];

function getDailyChallenges() {
    const today = new Date().toDateString();
    const stored = JSON.parse(localStorage.getItem('vkgames_daily_challenges') || '{}');

    if (stored.date !== today) {
        // Generate new daily challenges
        const shuffled = [...dailyChallenges].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 3);

        const newChallenges = {
            date: today,
            challenges: selected.map(c => ({ ...c, progress: 0, completed: false }))
        };

        localStorage.setItem('vkgames_daily_challenges', JSON.stringify(newChallenges));
        return newChallenges.challenges;
    }

    return stored.challenges;
}

function updateChallengeProgress(type, category = null, amount = 1) {
    if (!state.user) return;

    const stored = JSON.parse(localStorage.getItem('vkgames_daily_challenges') || '{}');
    if (!stored.challenges) return;

    let updated = false;

    stored.challenges.forEach(challenge => {
        if (challenge.completed) return;

        let matches = false;
        if (challenge.type === type) matches = true;
        if (challenge.category && challenge.category === category) matches = true;

        if (matches) {
            challenge.progress = Math.min(challenge.progress + amount, challenge.target);
            updated = true;

            if (challenge.progress >= challenge.target && !challenge.completed) {
                challenge.completed = true;
                addXP(challenge.xp);
                showToast(`✅ Défi complété: ${challenge.name} (+${challenge.xp} XP)`, 'success');
            }
        }
    });

    if (updated) {
        localStorage.setItem('vkgames_daily_challenges', JSON.stringify(stored));
        renderDailyChallenges();
    }
}

function renderDailyChallenges() {
    const grid = document.getElementById('challenges-grid');
    if (!grid) return;

    const challenges = getDailyChallenges();

    grid.innerHTML = challenges.map((c, i) => `
        <div class="challenge-card ${c.completed ? 'completed' : ''}" data-challenge="${i}">
            <div class="challenge-icon">${c.icon}</div>
            <div class="challenge-info">
                <h4>${c.name}</h4>
                <p>${c.desc}</p>
                <div class="challenge-progress">
                    <div class="challenge-bar">
                        <div class="challenge-fill" style="width: ${(c.progress / c.target) * 100}%"></div>
                    </div>
                    <span>${c.progress}/${c.target}</span>
                </div>
            </div>
            <div class="challenge-reward">
                <span class="reward-xp">${c.completed ? '✓' : '+' + c.xp + ' XP'}</span>
            </div>
        </div>
    `).join('');

    // Update timer
    updateChallengesTimer();
}

function updateChallengesTimer() {
    const timerEl = document.getElementById('challenges-timer');
    if (!timerEl) return;

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const diff = tomorrow - now;
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);

    timerEl.textContent = `Renouvellement dans ${hours}h${minutes.toString().padStart(2, '0')}`;
}

// ===== Game History =====
function getGameHistory() {
    if (!state.user) return [];
    return JSON.parse(localStorage.getItem('vkgames_history_' + state.user.id) || '[]');
}

function addGameToHistory(gameData) {
    if (!state.user) return;

    const history = getGameHistory();
    history.unshift({
        id: Date.now(),
        ...gameData,
        date: new Date().toISOString()
    });

    // Keep only last 100 games
    if (history.length > 100) history.pop();

    localStorage.setItem('vkgames_history_' + state.user.id, JSON.stringify(history));
}

function renderGameHistory(filter = 'all') {
    const listEl = document.getElementById('history-list');
    if (!listEl) return;

    let history = getGameHistory();

    if (filter === 'solo') {
        history = history.filter(g => !g.multiplayer);
    } else if (filter === 'multi') {
        history = history.filter(g => g.multiplayer);
    }

    if (history.length === 0) {
        listEl.innerHTML = '<p class="history-empty">Aucune partie jouée</p>';
        return;
    }

    const gameIcons = { music: '🎵', cinema: '🎬', sport: '⚽', gaming: '🎮', geo: '🌍' };

    listEl.innerHTML = history.slice(0, 50).map(game => {
        const date = new Date(game.date);
        const dateStr = date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });

        return `
            <div class="history-item">
                <div class="history-icon">${gameIcons[game.game] || '🎮'}</div>
                <div class="history-info">
                    <h4>${game.game ? gameConfigs[game.game]?.title || 'Quiz' : 'Quiz'}</h4>
                    <p>${game.mode || 'Quiz'} • ${dateStr}</p>
                </div>
                <div class="history-result">
                    <div class="history-score">${game.score} pts</div>
                    ${game.position ? `<div class="history-position ${game.position === 1 ? 'win' : ''}">${game.position === 1 ? '🥇 1er' : game.position + 'e'}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// ===== Themes Shop =====
const themesConfig = {
    default: { name: 'Nature', cost: 0, levelRequired: 1 },
    neon: { name: 'Néon', cost: 500, levelRequired: 5 },
    galaxy: { name: 'Galaxie', cost: 1000, levelRequired: 10 },
    sunset: { name: 'Coucher de soleil', cost: 1500, levelRequired: 15 },
    ocean: { name: 'Océan', cost: 2000, levelRequired: 20 },
    fire: { name: 'Feu', cost: 3000, levelRequired: 25 }
};

function getUnlockedThemes() {
    if (!state.user) return ['default'];
    return JSON.parse(localStorage.getItem('vkgames_themes_' + state.user.id) || '["default"]');
}

function getEquippedTheme() {
    if (!state.user) return 'default';
    return localStorage.getItem('vkgames_equipped_theme_' + state.user.id) || 'default';
}

function unlockTheme(themeId) {
    if (!state.user) {
        showToast('Connectez-vous pour débloquer des thèmes', 'error');
        return;
    }

    const theme = themesConfig[themeId];
    if (!theme) return;

    const { level } = getUserXP();
    const userScore = state.user.score || 0;

    // Check if already unlocked
    const unlocked = getUnlockedThemes();
    if (unlocked.includes(themeId)) {
        equipTheme(themeId);
        return;
    }

    // Check level requirement
    if (level >= theme.levelRequired) {
        unlocked.push(themeId);
        localStorage.setItem('vkgames_themes_' + state.user.id, JSON.stringify(unlocked));
        equipTheme(themeId);
        showToast(`🎨 Thème "${theme.name}" débloqué !`, 'success');
        renderThemesShop();
        return;
    }

    // Check points
    if (userScore >= theme.cost) {
        state.user.score -= theme.cost;
        localStorage.setItem('vkgames_user', JSON.stringify(state.user));

        unlocked.push(themeId);
        localStorage.setItem('vkgames_themes_' + state.user.id, JSON.stringify(unlocked));
        equipTheme(themeId);
        showToast(`🎨 Thème "${theme.name}" acheté !`, 'success');
        updateUserUI();
        renderThemesShop();
    } else {
        showToast(`Points insuffisants (${userScore}/${theme.cost})`, 'error');
    }
}

function equipTheme(themeId) {
    if (!state.user) return;

    localStorage.setItem('vkgames_equipped_theme_' + state.user.id, themeId);
    applyTheme(themeId);
    renderThemesShop();
}

function applyTheme(themeId) {
    const themeStyles = {
        default: { bg: '#0a1210', accent: '#3b82f6' },
        neon: { bg: '#0f0f23', accent: '#ff00ff' },
        galaxy: { bg: '#0f0c29', accent: '#8b5cf6' },
        sunset: { bg: '#1a0a0a', accent: '#ff7e5f' },
        ocean: { bg: '#0a1a1a', accent: '#2193b0' },
        fire: { bg: '#1a0a00', accent: '#f12711' }
    };

    const style = themeStyles[themeId] || themeStyles.default;
    document.documentElement.style.setProperty('--bg-primary', style.bg);
    // Additional theme customizations can be added here
}

function renderThemesShop() {
    const grid = document.getElementById('themes-grid');
    const balance = document.getElementById('themes-balance');

    if (balance && state.user) {
        balance.textContent = state.user.score || 0;
    }

    if (!grid) return;

    const unlocked = getUnlockedThemes();
    const equipped = getEquippedTheme();
    const { level } = getUserXP();

    grid.innerHTML = Object.entries(themesConfig).map(([id, theme]) => {
        const isUnlocked = unlocked.includes(id);
        const isEquipped = equipped === id;
        const canUnlockByLevel = level >= theme.levelRequired;

        let buttonText = 'Débloquer';
        let buttonClass = 'btn-theme';

        if (isEquipped) {
            buttonText = 'Équipé';
            buttonClass += ' equipped';
        } else if (isUnlocked) {
            buttonText = 'Équiper';
        }

        return `
            <div class="theme-card ${isUnlocked ? 'owned' : ''}" data-theme="${id}">
                <div class="theme-preview ${id}-preview"></div>
                <h4>${theme.name}</h4>
                <p>${theme.cost === 0 ? 'Gratuit' : (canUnlockByLevel ? `Niveau ${theme.levelRequired}` : `${theme.cost} pts`)}</p>
                <button class="${buttonClass}" onclick="unlockTheme('${id}')" ${isEquipped ? 'disabled' : ''}>
                    ${buttonText}
                </button>
            </div>
        `;
    }).join('');
}

// ===== Tournaments =====
let tournamentsState = {
    live: [],
    upcoming: [],
    my: []
};

function loadTournaments() {
    if (!window.firebaseDB) return;

    // Load live tournaments
    window.firebaseDB.ref('tournaments').orderByChild('status').equalTo('live').on('value', (snapshot) => {
        tournamentsState.live = snapshot.val() ? Object.entries(snapshot.val()).map(([id, t]) => ({ id, ...t })) : [];
        renderTournaments();
    });

    // Load upcoming tournaments
    window.firebaseDB.ref('tournaments').orderByChild('status').equalTo('upcoming').on('value', (snapshot) => {
        tournamentsState.upcoming = snapshot.val() ? Object.entries(snapshot.val()).map(([id, t]) => ({ id, ...t })) : [];
        renderTournaments();
        renderHomeTournaments();
    });
}

function renderTournaments(tab = 'live') {
    const list = document.getElementById('tournaments-list');
    if (!list) return;

    const tournaments = tab === 'live' ? tournamentsState.live :
                        tab === 'upcoming' ? tournamentsState.upcoming :
                        tournamentsState.my;

    if (tournaments.length === 0) {
        list.innerHTML = '<p class="history-empty">Aucun tournoi disponible</p>';
        return;
    }

    const gameIcons = { music: '🎵', cinema: '🎬', sport: '⚽', gaming: '🎮', geo: '🌍' };

    list.innerHTML = tournaments.map(t => `
        <div class="tournament-card ${t.status}">
            <div class="tournament-status">${t.status === 'live' ? '🔴 EN COURS' : '⏰ BIENTÔT'}</div>
            <div class="tournament-icon">${gameIcons[t.game] || '🎮'}</div>
            <h4>${t.name || 'Tournoi'}</h4>
            <p>${t.participants || 0}/${t.maxParticipants || 32} participants</p>
            <div class="tournament-time">${t.status === 'live' ? 'En cours' : formatTournamentTime(t.startTime)}</div>
            <button class="btn-tournament ${t.status === 'live' ? 'spectate' : 'join'}"
                onclick="${t.status === 'live' ? `spectateTournament('${t.id}')` : `joinTournament('${t.id}')`}">
                ${t.status === 'live' ? '👁️ Regarder' : 'S\'inscrire'}
            </button>
        </div>
    `).join('');
}

function renderHomeTournaments() {
    const grid = document.getElementById('tournaments-grid');
    if (!grid) return;

    const allTournaments = [...tournamentsState.live, ...tournamentsState.upcoming].slice(0, 3);

    if (allTournaments.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">Aucun tournoi en cours</p>';
        return;
    }

    const gameIcons = { music: '🎵', cinema: '🎬', sport: '⚽', gaming: '🎮', geo: '🌍' };

    grid.innerHTML = allTournaments.map(t => `
        <div class="tournament-card ${t.status}">
            <div class="tournament-status">${t.status === 'live' ? '🔴 EN COURS' : '⏰ BIENTÔT'}</div>
            <div class="tournament-icon">${gameIcons[t.game] || '🎮'}</div>
            <h4>${t.name || 'Tournoi'}</h4>
            <p>${t.participants || 0}/${t.maxParticipants || 32}</p>
            <div class="tournament-time">${t.status === 'live' ? 'En cours' : formatTournamentTime(t.startTime)}</div>
            <button class="btn-tournament ${t.status === 'live' ? 'spectate' : 'join'}"
                onclick="${t.status === 'live' ? `spectateTournament('${t.id}')` : `joinTournament('${t.id}')`}">
                ${t.status === 'live' ? '👁️ Regarder' : 'S\'inscrire'}
            </button>
        </div>
    `).join('');
}

function formatTournamentTime(timestamp) {
    if (!timestamp) return 'Bientôt';
    const date = new Date(timestamp);
    const now = new Date();
    const diff = date - now;

    if (diff < 0) return 'Terminé';
    if (diff < 3600000) return `Dans ${Math.floor(diff / 60000)}min`;
    if (diff < 86400000) return `Dans ${Math.floor(diff / 3600000)}h`;
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

function joinTournament(tournamentId) {
    if (!state.user) {
        showToast('Connectez-vous pour participer', 'error');
        return;
    }

    if (!window.firebaseDB) return;

    window.firebaseDB.ref('tournaments/' + tournamentId + '/registrations/' + state.user.id).set({
        username: state.user.username,
        avatar: state.user.avatar || null,
        registeredAt: Date.now()
    }).then(() => {
        showToast('Inscription réussie !', 'success');
    }).catch(() => {
        showToast('Erreur d\'inscription', 'error');
    });
}

function spectateTournament(tournamentId) {
    // Open spectator modal
    document.getElementById('spectator-modal').classList.remove('hidden');

    if (!window.firebaseDB) return;

    // Load tournament data
    window.firebaseDB.ref('tournaments/' + tournamentId).on('value', (snapshot) => {
        const tournament = snapshot.val();
        if (!tournament) return;

        const gameEl = document.getElementById('spectator-game');
        const playersEl = document.getElementById('spectator-players');

        if (gameEl && tournament.currentQuestion) {
            gameEl.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="margin-bottom: 1rem;">${tournament.currentQuestion.text || 'Question en cours...'}</h3>
                    <div style="font-size: 2rem;">${tournament.currentQuestion.icon || '❓'}</div>
                </div>
            `;
        }

        if (playersEl && tournament.players) {
            const players = Object.values(tournament.players);
            playersEl.innerHTML = players.map(p => `
                <div class="spectator-player">
                    <div class="spectator-player-avatar ${p.answered ? 'answered' : ''}">
                        ${p.avatar ? `<img src="${p.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : '👤'}
                    </div>
                    <span class="spectator-player-name">${p.username || 'Joueur'}</span>
                    <span class="spectator-player-score">${p.score || 0} pts</span>
                </div>
            `).join('');
        }
    });
}

// ===== In-Game Chat =====
let chatState = {
    messages: [],
    unread: 0
};

function initChat() {
    const toggle = document.getElementById('chat-toggle');
    const panel = document.getElementById('chat-panel');
    const closeBtn = document.getElementById('chat-close');
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');

    toggle?.addEventListener('click', () => {
        panel.classList.toggle('hidden');
        if (!panel.classList.contains('hidden')) {
            chatState.unread = 0;
            updateChatBadge();
            input?.focus();
        }
    });

    closeBtn?.addEventListener('click', () => {
        panel.classList.add('hidden');
    });

    sendBtn?.addEventListener('click', sendChatMessage);

    input?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });

    // Quick messages
    document.querySelectorAll('.quick-msg').forEach(btn => {
        btn.addEventListener('click', () => {
            const msg = btn.dataset.msg;
            if (msg) {
                document.getElementById('chat-input').value = msg;
                sendChatMessage();
            }
        });
    });
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input?.value.trim();

    if (!message || !mpState.gameRef || !state.user) return;

    mpState.gameRef.child('chat').push({
        author: state.user.username,
        authorId: state.user.id,
        text: message,
        timestamp: Date.now()
    });

    input.value = '';
}

function setupChatListener() {
    if (!mpState.gameRef) return;

    mpState.gameRef.child('chat').orderByChild('timestamp').limitToLast(50).on('child_added', (snapshot) => {
        const msg = snapshot.val();
        chatState.messages.push(msg);
        renderChatMessage(msg);

        // Increment unread if panel is hidden
        const panel = document.getElementById('chat-panel');
        if (panel?.classList.contains('hidden') && msg.authorId !== state.user?.id) {
            chatState.unread++;
            updateChatBadge();
        }
    });
}

function renderChatMessage(msg) {
    const container = document.getElementById('chat-messages');
    if (!container) return;

    const isOwn = msg.authorId === state.user?.id;

    const msgEl = document.createElement('div');
    msgEl.className = `chat-message ${isOwn ? 'own' : ''}`;
    msgEl.innerHTML = `
        <div class="chat-message-author">${msg.author}</div>
        <div class="chat-message-text">${escapeHtml(msg.text)}</div>
    `;

    container.appendChild(msgEl);
    container.scrollTop = container.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function updateChatBadge() {
    const badge = document.getElementById('chat-badge');
    if (badge) {
        badge.textContent = chatState.unread;
        badge.classList.toggle('hidden', chatState.unread === 0);
    }
}

function clearChat() {
    chatState.messages = [];
    chatState.unread = 0;
    const container = document.getElementById('chat-messages');
    if (container) container.innerHTML = '';
    updateChatBadge();
}

// ===== Duo Mode =====
function initDuoMode() {
    document.querySelectorAll('.mp-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mp-mode-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            mpState.gameMode = btn.dataset.mode;

            // Update player count options for duo
            if (btn.dataset.mode === 'duo') {
                document.querySelectorAll('.mp-player-btn').forEach(b => {
                    const count = parseInt(b.dataset.players);
                    b.disabled = count % 2 !== 0;
                    if (count === 4) b.click();
                });
            } else {
                document.querySelectorAll('.mp-player-btn').forEach(b => b.disabled = false);
            }
        });
    });
}

function assignTeams(players) {
    // Shuffle and assign to teams
    const shuffled = [...players].sort(() => Math.random() - 0.5);
    const team1 = shuffled.slice(0, shuffled.length / 2);
    const team2 = shuffled.slice(shuffled.length / 2);

    return { team1, team2 };
}

function calculateTeamScore(teamPlayers, scores) {
    return teamPlayers.reduce((sum, p) => sum + (scores[p.id] || 0), 0);
}

// ===== Profile Modal =====
function showProfileModal() {
    if (!state.user) {
        showToast('Connectez-vous pour voir votre profil', 'error');
        return;
    }

    const modal = document.getElementById('profile-modal');
    modal.classList.remove('hidden');

    // Update profile info
    document.getElementById('profile-username').textContent = state.user.username;

    const avatarEl = document.getElementById('profile-avatar');
    if (state.user.avatar) {
        avatarEl.innerHTML = `<img src="${state.user.avatar}" alt="">`;
    } else {
        avatarEl.textContent = '👤';
    }

    // Get user stats
    const stats = getUserStats();
    document.getElementById('profile-games').textContent = stats.totalGames;
    document.getElementById('profile-wins').textContent = stats.wins;
    document.getElementById('profile-winrate').textContent = stats.totalGames > 0 ?
        Math.round((stats.wins / stats.totalGames) * 100) + '%' : '0%';
    document.getElementById('profile-best-streak').textContent = stats.bestStreak || 0;

    updateXPDisplay();
    updateRankDisplay();
    updateBadgesDisplay();
}

// ===== Initialize New Features =====
function initNewFeatures() {
    // Profile button
    document.getElementById('btn-profile')?.addEventListener('click', showProfileModal);
    document.getElementById('close-profile')?.addEventListener('click', () => {
        document.getElementById('profile-modal').classList.add('hidden');
    });

    // History button
    document.getElementById('btn-history')?.addEventListener('click', () => {
        document.getElementById('history-modal').classList.remove('hidden');
        renderGameHistory();
    });
    document.getElementById('close-history')?.addEventListener('click', () => {
        document.getElementById('history-modal').classList.add('hidden');
    });

    // History filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGameHistory(btn.dataset.filter);
        });
    });

    // Themes shop
    document.getElementById('btn-themes-shop')?.addEventListener('click', () => {
        document.getElementById('themes-modal').classList.remove('hidden');
        renderThemesShop();
    });
    document.getElementById('close-themes')?.addEventListener('click', () => {
        document.getElementById('themes-modal').classList.add('hidden');
    });

    // Tournaments
    document.getElementById('view-tournaments')?.addEventListener('click', () => {
        document.getElementById('tournaments-modal').classList.remove('hidden');
        renderTournaments('live');
    });
    document.getElementById('close-tournaments')?.addEventListener('click', () => {
        document.getElementById('tournaments-modal').classList.add('hidden');
    });

    // Tournament tabs
    document.querySelectorAll('.tournament-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tournament-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderTournaments(tab.dataset.tab);
        });
    });

    // Spectator
    document.getElementById('close-spectator')?.addEventListener('click', () => {
        document.getElementById('spectator-modal').classList.add('hidden');
    });

    // Initialize features
    renderDailyChallenges();
    loadTournaments();
    initChat();
    initDuoMode();

    // Update displays if logged in
    if (state.user) {
        updateXPDisplay();
        updateRankDisplay();
        applyTheme(getEquippedTheme());
    }

    // Update challenges timer every minute
    setInterval(updateChallengesTimer, 60000);
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', () => {
    init();
    initAuthListener();
    initMultiplayer();
    initNewFeatures();
    checkJoinCode();
    scheduleFirebaseSync();
});
