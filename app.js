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
            { id: 'higherlower', emoji: '📊', name: 'Higher/Lower', desc: 'Compare les streams' }
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
        hlLabel: 'millions de streams'
    },
    cinema: {
        icon: '🎬',
        title: 'Quiz Cinéma',
        modes: [
            { id: 'quiz', emoji: '🎯', name: 'Quiz', desc: 'Trouve le film/acteur' },
            { id: 'quotes', emoji: '🎭', name: 'Répliques', desc: 'Devine le film' },
            { id: 'higherlower', emoji: '📊', name: 'Box Office', desc: 'Compare les recettes' }
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
        hlLabel: 'millions $ box-office'
    },
    sport: {
        icon: '⚽',
        title: 'Quiz Sport',
        modes: [
            { id: 'quiz', emoji: '🎯', name: 'Quiz', desc: 'Trouve le joueur/équipe' },
            { id: 'palmares', emoji: '🏆', name: 'Palmarès', desc: 'Devine les victoires' },
            { id: 'higherlower', emoji: '📊', name: 'Stats', desc: 'Compare les stats' }
        ],
        genres: [
            { id: 'football', emoji: '⚽', name: 'Football' },
            { id: 'basketball', emoji: '🏀', name: 'Basketball' },
            { id: 'tennis', emoji: '🎾', name: 'Tennis' }
        ],
        genreTitle: 'Sport',
        hlQuestion: {
            football: 'Qui a marqué le plus de buts ?',
            basketball: 'Qui a marqué le plus de points ?',
            tennis: 'Qui a gagné le plus de Grand Chelem ?'
        },
        hlLabel: {
            football: 'buts en carrière',
            basketball: 'points en carrière',
            tennis: 'titres Grand Chelem'
        }
    },
    gaming: {
        icon: '🎮',
        title: 'Quiz Gaming',
        modes: [
            { id: 'quiz', emoji: '🎯', name: 'Quiz', desc: 'Trouve le jeu/studio' },
            { id: 'retro', emoji: '🕹️', name: 'Retro', desc: 'Jeux classiques' },
            { id: 'higherlower', emoji: '📊', name: 'Ventes', desc: 'Compare les ventes' }
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
        hlLabel: 'millions de copies'
    },
    geo: {
        icon: '🌍',
        title: 'Quiz Géo',
        modes: [
            { id: 'quiz', emoji: '🎯', name: 'Quiz', desc: 'Trouve le pays/capitale' },
            { id: 'flags', emoji: '🚩', name: 'Drapeaux', desc: 'Devine le pays' },
            { id: 'cityguesser', emoji: '🏙️', name: 'City Guesser', desc: 'Trouve la ville sur la carte' },
            { id: 'higherlower', emoji: '📊', name: 'Population', desc: 'Compare les populations' }
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
        hlLabel: 'millions d\'habitants'
    },
    blindtest: {
        icon: '🔊',
        title: 'Blind Test',
        modes: [
            { id: 'sounds', emoji: '🔫', name: 'Sons', desc: 'Sons d\'armes et bruitages' },
            { id: 'ost', emoji: '🎵', name: 'OST', desc: 'Musiques de jeux vidéo' }
        ],
        genres: [
            { id: 'cod', emoji: '🔫', name: 'Call of Duty' },
            { id: 'minecraft', emoji: '⛏️', name: 'Minecraft' },
            { id: 'gta', emoji: '🚗', name: 'GTA' },
            { id: 'nintendo', emoji: '🍄', name: 'Nintendo' },
            { id: 'mixed', emoji: '🎲', name: 'Mix' }
        ],
        genreTitle: 'Jeu',
        isAudioGame: true
    },
    screenshot: {
        icon: '📸',
        title: 'Screenshot Quiz',
        modes: [
            { id: 'classic', emoji: '🎯', name: 'Classic', desc: 'Devine le jeu' },
            { id: 'zoom', emoji: '🔍', name: 'Zoom', desc: 'Image zoomée qui se révèle' }
        ],
        genres: [
            { id: 'fps', emoji: '🔫', name: 'FPS' },
            { id: 'openworld', emoji: '🗺️', name: 'Open World' },
            { id: 'retro', emoji: '🕹️', name: 'Retro' },
            { id: 'recent', emoji: '✨', name: 'Récents' },
            { id: 'mixed', emoji: '🎲', name: 'Mix' }
        ],
        genreTitle: 'Genre',
        isImageGame: true
    },
    logo: {
        icon: '🏷️',
        title: 'Logo Quiz',
        modes: [
            { id: 'games', emoji: '🎮', name: 'Jeux', desc: 'Logos de jeux vidéo' },
            { id: 'studios', emoji: '🏢', name: 'Studios', desc: 'Logos de studios' }
        ],
        genres: [
            { id: 'games', emoji: '🎮', name: 'Jeux' },
            { id: 'studios', emoji: '🏢', name: 'Studios' },
            { id: 'tech', emoji: '💻', name: 'Tech' },
            { id: 'mixed', emoji: '🎲', name: 'Mix' }
        ],
        genreTitle: 'Catégorie',
        isImageGame: true
    },
    fakereal: {
        icon: '🤔',
        title: 'Vrai ou Faux',
        modes: [
            { id: 'facts', emoji: '📰', name: 'Faits', desc: 'Ce fait est-il vrai ou faux ?' }
        ],
        genres: [
            { id: 'facts', emoji: '📰', name: 'Faits' }
        ],
        genreTitle: 'Mode',
        skipModeSelect: true
    },
    facemerge: {
        icon: '👥',
        title: 'Face Merge',
        disabled: true, // Désactivé - nécessite des images de visages fusionnés
        modes: [
            { id: 'actors', emoji: '🎬', name: 'Acteurs', desc: 'Acteurs mélangés' },
            { id: 'singers', emoji: '🎤', name: 'Chanteurs', desc: 'Chanteurs mélangés' }
        ],
        genres: [
            { id: 'actors', emoji: '🎬', name: 'Acteurs' },
            { id: 'singers', emoji: '🎤', name: 'Chanteurs' },
            { id: 'mixed', emoji: '🎲', name: 'Mix' }
        ],
        genreTitle: 'Catégorie',
        isImageGame: true
    },
    zoomrace: {
        icon: '🔍',
        title: 'Zoom Race',
        modes: [
            { id: 'games', emoji: '🎮', name: 'Jeux', desc: 'Personnages de jeux' },
            { id: 'movies', emoji: '🎬', name: 'Films', desc: 'Scènes de films' },
            { id: 'logos', emoji: '🏷️', name: 'Logos', desc: 'Logos zoomés' }
        ],
        genres: [
            { id: 'games', emoji: '🎮', name: 'Jeux' },
            { id: 'movies', emoji: '🎬', name: 'Films' },
            { id: 'logos', emoji: '🏷️', name: 'Logos' },
            { id: 'mixed', emoji: '🎲', name: 'Mix' }
        ],
        genreTitle: 'Catégorie',
        isImageGame: true,
        isZoomGame: true
    },
    memory: {
        icon: '🧠',
        title: 'Memory',
        modes: [
            { id: 'colors', emoji: '🎨', name: 'Couleurs', desc: 'Séquence de couleurs' },
            { id: 'sounds', emoji: '🔊', name: 'Sons', desc: 'Séquence de sons' }
        ],
        genres: [
            { id: 'colors', emoji: '🎨', name: 'Couleurs' },
            { id: 'sounds', emoji: '🔊', name: 'Sons' },
            { id: 'mixed', emoji: '🎲', name: 'Mix' }
        ],
        genreTitle: 'Mode',
        isMemoryGame: true
    },
    categorysprint: {
        icon: '⚡',
        title: 'Category Sprint',
        modes: [
            { id: 'movies', emoji: '🎬', name: 'Films', desc: 'Films d\'un acteur, genre...' },
            { id: 'music', emoji: '🎵', name: 'Musique', desc: 'Chansons d\'un artiste...' },
            { id: 'geo', emoji: '🌍', name: 'Géo', desc: 'Pays d\'un continent...' }
        ],
        genres: [
            { id: 'movies', emoji: '🎬', name: 'Films' },
            { id: 'music', emoji: '🎵', name: 'Musique' },
            { id: 'geo', emoji: '🌍', name: 'Géo' },
            { id: 'mixed', emoji: '🎲', name: 'Mix' }
        ],
        genreTitle: 'Thème',
        isSprintGame: true
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
        blind: {
            pop: [
                { deezerId: 139470659, a: "Ed Sheeran", title: "Shape of You", opts: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Charlie Puth"] },
                { deezerId: 908604612, a: "The Weeknd", title: "Blinding Lights", opts: ["The Weeknd", "Bruno Mars", "Drake", "Post Malone"] },
                { deezerId: 1109737767, a: "Dua Lipa", title: "Levitating", opts: ["Dua Lipa", "Charli XCX", "Doja Cat", "Lizzo"] },
                { deezerId: 655095912, a: "Billie Eilish", title: "Bad Guy", opts: ["Billie Eilish", "Ariana Grande", "Halsey", "Lorde"] },
                { deezerId: 1518703492, a: "Harry Styles", title: "As It Was", opts: ["Harry Styles", "One Direction", "Zayn", "Niall Horan"] }
            ],
            rap: [
                { deezerId: 533609232, a: "Drake", title: "God's Plan", opts: ["Drake", "Kendrick Lamar", "J. Cole", "Travis Scott"] },
                { deezerId: 350171311, a: "Kendrick Lamar", title: "HUMBLE.", opts: ["Kendrick Lamar", "Drake", "J. Cole", "Kanye West"] },
                { deezerId: 536421002, a: "Travis Scott", title: "SICKO MODE", opts: ["Travis Scott", "Drake", "Future", "21 Savage"] },
                { deezerId: 491446942, a: "Post Malone", title: "Rockstar", opts: ["Post Malone", "21 Savage", "Future", "Lil Uzi Vert"] },
                { deezerId: 1109731, a: "Eminem", title: "Lose Yourself", opts: ["Eminem", "50 Cent", "Dr. Dre", "Snoop Dogg"] }
            ],
            rock: [
                { deezerId: 9997018, a: "Queen", title: "Bohemian Rhapsody", opts: ["Queen", "Led Zeppelin", "The Beatles", "Pink Floyd"] },
                { deezerId: 13791930, a: "Nirvana", title: "Smells Like Teen Spirit", opts: ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains"] },
                { deezerId: 92720046, a: "AC/DC", title: "Back in Black", opts: ["AC/DC", "Guns N' Roses", "Metallica", "Led Zeppelin"] },
                { deezerId: 528330441, a: "Imagine Dragons", title: "Believer", opts: ["Imagine Dragons", "OneRepublic", "Coldplay", "Maroon 5"] },
                { deezerId: 676183, a: "Linkin Park", title: "In The End", opts: ["Linkin Park", "Green Day", "Blink-182", "Sum 41"] }
            ],
            electro: [
                { deezerId: 66609426, a: "Daft Punk", title: "Get Lucky", opts: ["Daft Punk", "Justice", "Deadmau5", "Calvin Harris"] },
                { deezerId: 70266756, a: "Avicii", title: "Wake Me Up", opts: ["Avicii", "David Guetta", "Calvin Harris", "Tiesto"] },
                { deezerId: 140295501, a: "Alan Walker", title: "Faded", opts: ["Alan Walker", "Marshmello", "Kygo", "Martin Garrix"] },
                { deezerId: 14383880, a: "Martin Garrix", title: "Animals", opts: ["Martin Garrix", "Hardwell", "Tiesto", "Avicii"] },
                { deezerId: 62847142, a: "David Guetta", title: "Titanium", opts: ["David Guetta", "Calvin Harris", "Avicii", "Tiesto"] }
            ]
        }
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
        higherLower: {
            football: [
                { title: "Cristiano Ronaldo", artist: "Portugal", value: 900, emoji: "⚽" },
                { title: "Lionel Messi", artist: "Argentine", value: 850, emoji: "⚽" },
                { title: "Pelé", artist: "Brésil", value: 767, emoji: "⚽" },
                { title: "Romario", artist: "Brésil", value: 755, emoji: "⚽" },
                { title: "Robert Lewandowski", artist: "Pologne", value: 660, emoji: "⚽" },
                { title: "Neymar", artist: "Brésil", value: 450, emoji: "⚽" },
                { title: "Zlatan Ibrahimović", artist: "Suède", value: 570, emoji: "⚽" },
                { title: "Karim Benzema", artist: "France", value: 450, emoji: "⚽" },
                { title: "Kylian Mbappé", artist: "France", value: 280, emoji: "⚽" },
                { title: "Erling Haaland", artist: "Norvège", value: 250, emoji: "⚽" }
            ],
            basketball: [
                { title: "LeBron James", artist: "Lakers", value: 40474, emoji: "🏀" },
                { title: "Kareem Abdul-Jabbar", artist: "Lakers", value: 38387, emoji: "🏀" },
                { title: "Karl Malone", artist: "Jazz", value: 36928, emoji: "🏀" },
                { title: "Kobe Bryant", artist: "Lakers", value: 33643, emoji: "🏀" },
                { title: "Michael Jordan", artist: "Bulls", value: 32292, emoji: "🏀" },
                { title: "Kevin Durant", artist: "Nets", value: 28000, emoji: "🏀" },
                { title: "Stephen Curry", artist: "Warriors", value: 22000, emoji: "🏀" },
                { title: "Shaquille O'Neal", artist: "Lakers", value: 28596, emoji: "🏀" }
            ],
            tennis: [
                { title: "Novak Djokovic", artist: "Serbie", value: 24, emoji: "🎾" },
                { title: "Rafael Nadal", artist: "Espagne", value: 22, emoji: "🎾" },
                { title: "Roger Federer", artist: "Suisse", value: 20, emoji: "🎾" },
                { title: "Pete Sampras", artist: "États-Unis", value: 14, emoji: "🎾" },
                { title: "Serena Williams", artist: "États-Unis", value: 23, emoji: "🎾" },
                { title: "Steffi Graf", artist: "Allemagne", value: 22, emoji: "🎾" },
                { title: "Margaret Court", artist: "Australie", value: 24, emoji: "🎾" },
                { title: "Carlos Alcaraz", artist: "Espagne", value: 2, emoji: "🎾" }
            ]
        }
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
            { title: "Chine", artist: "Asie", value: 1412, flag: "cn" },
            { title: "Inde", artist: "Asie", value: 1408, flag: "in" },
            { title: "États-Unis", artist: "Amérique", value: 332, flag: "us" },
            { title: "Indonésie", artist: "Asie", value: 276, flag: "id" },
            { title: "Brésil", artist: "Amérique", value: 215, flag: "br" },
            { title: "Nigeria", artist: "Afrique", value: 218, flag: "ng" },
            { title: "Russie", artist: "Europe/Asie", value: 144, flag: "ru" },
            { title: "Japon", artist: "Asie", value: 125, flag: "jp" },
            { title: "France", artist: "Europe", value: 68, flag: "fr" },
            { title: "Allemagne", artist: "Europe", value: 84, flag: "de" },
            { title: "Royaume-Uni", artist: "Europe", value: 67, flag: "gb" },
            { title: "Italie", artist: "Europe", value: 59, flag: "it" },
            { title: "Mexique", artist: "Amérique", value: 128, flag: "mx" },
            { title: "Espagne", artist: "Europe", value: 47, flag: "es" },
            { title: "Canada", artist: "Amérique", value: 38, flag: "ca" }
        ],
        cityguesser: [
            { image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600", city: "Paris", country: "France", lat: 48.8566, lng: 2.3522 },
            { image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600", city: "Londres", country: "Royaume-Uni", lat: 51.5074, lng: -0.1278 },
            { image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600", city: "New York", country: "États-Unis", lat: 40.7128, lng: -74.0060 },
            { image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600", city: "Tokyo", country: "Japon", lat: 35.6762, lng: 139.6503 },
            { image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600", city: "Rome", country: "Italie", lat: 41.9028, lng: 12.4964 },
            { image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600", city: "Sydney", country: "Australie", lat: -33.8688, lng: 151.2093 },
            { image: "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=600", city: "Munich", country: "Allemagne", lat: 48.1351, lng: 11.5820 },
            { image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600", city: "Dubaï", country: "Émirats arabes unis", lat: 25.2048, lng: 55.2708 },
            { image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600", city: "Rio de Janeiro", country: "Brésil", lat: -22.9068, lng: -43.1729 },
            { image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600", city: "Barcelone", country: "Espagne", lat: 41.3851, lng: 2.1734 },
            { image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600", city: "San Francisco", country: "États-Unis", lat: 37.7749, lng: -122.4194 },
            { image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600", city: "Moscou", country: "Russie", lat: 55.7558, lng: 37.6173 },
            { image: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=600", city: "Amsterdam", country: "Pays-Bas", lat: 52.3676, lng: 4.9041 },
            { image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=600", city: "Berlin", country: "Allemagne", lat: 52.5200, lng: 13.4050 },
            { image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600", city: "Los Angeles", country: "États-Unis", lat: 34.0522, lng: -118.2437 }
        ]
    },
    blindtest: {
        sounds: {
            cod: [
                { audio: "https://www.myinstants.com/media/sounds/cod-hitmarker.mp3", a: "Hitmarker", opts: ["Hitmarker", "Headshot", "Kill", "Double Kill"] },
                { audio: "https://www.myinstants.com/media/sounds/intervention-sound.mp3", a: "Intervention", opts: ["Intervention", "Barrett .50cal", "M40A3", "L96A1"] },
                { audio: "https://www.myinstants.com/media/sounds/mw2-nuke.mp3", a: "Tactical Nuke", opts: ["Tactical Nuke", "MOAB", "DNA Bomb", "V2 Rocket"] },
                { audio: "https://www.myinstants.com/media/sounds/call-of-duty-headshot.mp3", a: "Headshot", opts: ["Headshot", "One Shot Kill", "Hitmarker", "Collateral"] },
                { audio: "https://www.myinstants.com/media/sounds/ac-130.mp3", a: "AC-130", opts: ["AC-130", "Chopper Gunner", "Harrier", "Pave Low"] }
            ],
            minecraft: [
                { audio: "https://www.myinstants.com/media/sounds/minecraft-oof.mp3", a: "Dégâts (Oof)", opts: ["Dégâts (Oof)", "Mort", "Chute", "Explosion"] },
                { audio: "https://www.myinstants.com/media/sounds/minecraft-explosion.mp3", a: "Explosion", opts: ["Explosion", "TNT", "Creeper", "Ghast"] },
                { audio: "https://www.myinstants.com/media/sounds/minecraft-cave-sound.mp3", a: "Son de cave", opts: ["Son de cave", "Enderman", "Warden", "Nether"] },
                { audio: "https://www.myinstants.com/media/sounds/minecraft-xp.mp3", a: "XP Orb", opts: ["XP Orb", "Level Up", "Enchantement", "Item pickup"] },
                { audio: "https://www.myinstants.com/media/sounds/minecraft-door.mp3", a: "Porte", opts: ["Porte", "Coffre", "Trappe", "Portail"] }
            ],
            gta: [
                { audio: "https://www.myinstants.com/media/sounds/gta-wasted.mp3", a: "Wasted", opts: ["Wasted", "Busted", "Mission Failed", "Game Over"] },
                { audio: "https://www.myinstants.com/media/sounds/gta-san-andreas-mission-passed.mp3", a: "Mission Passed", opts: ["Mission Passed", "Respect+", "Mission Complete", "Level Up"] },
                { audio: "https://www.myinstants.com/media/sounds/gta-5-phone.mp3", a: "Téléphone", opts: ["Téléphone", "SMS", "Email", "Notification"] },
                { audio: "https://www.myinstants.com/media/sounds/here-we-go-again.mp3", a: "Here we go again", opts: ["Here we go again", "Follow the train CJ", "Grove Street", "You picked the wrong house"] }
            ],
            nintendo: [
                { audio: "https://www.myinstants.com/media/sounds/mario-coin.mp3", a: "Mario - Pièce", opts: ["Mario - Pièce", "Mario - 1UP", "Sonic - Ring", "Zelda - Rubis"] },
                { audio: "https://www.myinstants.com/media/sounds/mario-1up.mp3", a: "Mario - 1UP", opts: ["Mario - 1UP", "Mario - Power Up", "Mario - Pièce", "Mario - Star"] },
                { audio: "https://www.myinstants.com/media/sounds/zelda-secret.mp3", a: "Zelda - Secret", opts: ["Zelda - Secret", "Zelda - Coffre", "Mario - Tuyau", "Pokemon - Capture"] },
                { audio: "https://www.myinstants.com/media/sounds/pokemon-battle.mp3", a: "Pokemon - Combat", opts: ["Pokemon - Combat", "Pokemon - Capture", "Pokemon - Evolution", "Pokemon - Center"] },
                { audio: "https://www.myinstants.com/media/sounds/super-smash-bros-game.mp3", a: "Smash Bros - Game!", opts: ["Smash Bros - Game!", "Smash Bros - GO!", "Smash Bros - KO", "Smash Bros - Time!"] }
            ]
        },
        ost: {
            cod: [
                { audio: "https://www.youtube.com/watch?v=_oMIJ3XPBDE", a: "MW2 - Main Theme", opts: ["MW2 - Main Theme", "MW3 - Main Theme", "BO2 - Main Theme", "WAW - Main Theme"], youtube: true },
                { audio: "https://www.youtube.com/watch?v=nLMddj-Z_RI", a: "BO1 - Damned", opts: ["BO1 - Damned", "BO2 - Zombies", "MW2 - Zombies", "WAW - Zombies"], youtube: true }
            ],
            minecraft: [
                { audio: "https://www.youtube.com/watch?v=aBkTkxKDduc", a: "Sweden - C418", opts: ["Sweden - C418", "Minecraft - C418", "Wet Hands - C418", "Aria Math - C418"], youtube: true },
                { audio: "https://www.youtube.com/watch?v=Dg0IjOzopYU", a: "Wet Hands - C418", opts: ["Wet Hands - C418", "Sweden - C418", "Mice on Venus", "Living Mice"], youtube: true }
            ],
            gta: [
                { audio: "https://www.youtube.com/watch?v=W4VTq0sa9yg", a: "GTA San Andreas Theme", opts: ["GTA San Andreas Theme", "GTA V Theme", "GTA IV Theme", "GTA Vice City Theme"], youtube: true },
                { audio: "https://www.youtube.com/watch?v=QOI1FsNZpWg", a: "GTA IV Theme", opts: ["GTA IV Theme", "GTA V Theme", "GTA San Andreas", "GTA Vice City"], youtube: true }
            ],
            nintendo: [
                { audio: "https://www.youtube.com/watch?v=wAPpVplHiDE", a: "Zelda - Main Theme", opts: ["Zelda - Main Theme", "Mario - Main Theme", "Metroid - Theme", "Kirby - Theme"], youtube: true },
                { audio: "https://www.youtube.com/watch?v=NTa6Xbzfq1U", a: "Mario - Ground Theme", opts: ["Mario - Ground Theme", "Mario - Underground", "Mario - Castle", "Mario - Star"], youtube: true },
                { audio: "https://www.youtube.com/watch?v=Y12_cVX8Ew0", a: "Pokemon - Route 1", opts: ["Pokemon - Route 1", "Pokemon - Lavender Town", "Pokemon - Battle", "Pokemon - Center"], youtube: true }
            ],
            mixed: [
                { audio: "https://www.youtube.com/watch?v=Jxk2_vV_oqU", a: "Tetris Theme", opts: ["Tetris Theme", "Dr. Mario", "Puyo Puyo", "Columns"], youtube: true },
                { audio: "https://www.youtube.com/watch?v=uyMKWJ5e1kg", a: "Halo Theme", opts: ["Halo Theme", "Gears of War", "Call of Duty", "Battlefield"], youtube: true },
                { audio: "https://www.youtube.com/watch?v=MPkhhLC1tf8", a: "Skyrim - Dragonborn", opts: ["Skyrim - Dragonborn", "Oblivion - Theme", "Morrowind - Theme", "Fallout - Theme"], youtube: true },
                { audio: "https://www.youtube.com/watch?v=VTsD2FjmLsw", a: "Undertale - Megalovania", opts: ["Undertale - Megalovania", "Toby Fox - Other", "Deltarune", "Earthbound"], youtube: true }
            ]
        }
    },
    screenshot: {
        quiz: {
            fps: [
                { image: "https://cdn2.steamgriddb.com/hero/c0c7c76d30bd3dcaefc96f40275bdc0a.jpg", a: "Counter-Strike 2", opts: ["Counter-Strike 2", "Valorant", "Rainbow Six Siege", "Overwatch 2"] },
                { image: "https://cdn2.steamgriddb.com/hero/c20ad4d76fe97759aa27a0c99bff6710.jpg", a: "Halo Infinite", opts: ["Halo Infinite", "Destiny 2", "Titanfall 2", "Doom Eternal"] },
                { image: "https://cdn2.steamgriddb.com/hero/37693cfc748049e45d87b8c7d8b9aacd.jpg", a: "Valorant", opts: ["Valorant", "CS2", "Apex Legends", "Overwatch 2"] },
                { image: "https://cdn2.steamgriddb.com/hero/a684eceee76fc522773286a895bc8436.jpg", a: "Apex Legends", opts: ["Apex Legends", "Fortnite", "PUBG", "Warzone"] },
                { image: "https://cdn2.steamgriddb.com/hero/182be0c5cdcd5072bb1864cdee4d3d6e.jpg", a: "Call of Duty MW2", opts: ["Call of Duty MW2", "Battlefield 2042", "Call of Duty MW3", "Warzone 2"] }
            ],
            openworld: [
                { image: "https://cdn2.steamgriddb.com/hero/c74d97b01eae257e44aa9d5bade97baf.jpg", a: "Elden Ring", opts: ["Elden Ring", "Dark Souls 3", "Sekiro", "Bloodborne"] },
                { image: "https://cdn2.steamgriddb.com/hero/d645920e395fedad7bbbed0eca3fe2e0.jpg", a: "Red Dead Redemption 2", opts: ["Red Dead Redemption 2", "GTA V", "The Witcher 3", "Assassin's Creed"] },
                { image: "https://cdn2.steamgriddb.com/hero/3c59dc048e8850243be8079a5c74d079.jpg", a: "GTA V", opts: ["GTA V", "Watch Dogs 2", "Saints Row", "Sleeping Dogs"] },
                { image: "https://cdn2.steamgriddb.com/hero/70efdf2ec9b086079795c442636b55fb.jpg", a: "Zelda: Breath of the Wild", opts: ["Zelda: Breath of the Wild", "Genshin Impact", "Immortals Fenyx", "Zelda: Tears of the Kingdom"] },
                { image: "https://cdn2.steamgriddb.com/hero/6f4922f45568161a8cdf4ad2299f6d23.jpg", a: "The Witcher 3", opts: ["The Witcher 3", "Skyrim", "Dragon Age", "Elden Ring"] }
            ],
            retro: [
                { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1xm6.jpg", a: "Super Mario Bros", opts: ["Super Mario Bros", "Donkey Kong", "Pac-Man", "Sonic"] },
                { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x78.jpg", a: "DOOM (1993)", opts: ["DOOM (1993)", "Wolfenstein 3D", "Duke Nukem", "Quake"] },
                { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x8t.jpg", a: "Tetris", opts: ["Tetris", "Dr. Mario", "Puyo Puyo", "Columns"] },
                { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co20wf.jpg", a: "Pac-Man", opts: ["Pac-Man", "Space Invaders", "Galaga", "Frogger"] },
                { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7k.jpg", a: "Zelda: Ocarina of Time", opts: ["Zelda: Ocarina of Time", "Zelda: A Link to the Past", "Zelda: Majora's Mask", "Zelda: Wind Waker"] }
            ],
            recent: [
                { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5pii.jpg", a: "Hogwarts Legacy", opts: ["Hogwarts Legacy", "Harry Potter Quidditch", "Fantastic Beasts", "LEGO Harry Potter"] },
                { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.jpg", a: "God of War Ragnarok", opts: ["God of War Ragnarok", "God of War (2018)", "Assassin's Creed Valhalla", "Horizon Forbidden West"] },
                { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co670h.jpg", a: "Baldur's Gate 3", opts: ["Baldur's Gate 3", "Divinity Original Sin 2", "Pillars of Eternity", "Pathfinder"] },
                { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vst.jpg", a: "Starfield", opts: ["Starfield", "No Man's Sky", "Mass Effect", "Star Citizen"] },
                { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6g2d.jpg", a: "Spider-Man 2", opts: ["Spider-Man 2", "Spider-Man Miles Morales", "Batman Arkham Knight", "Gotham Knights"] }
            ]
        }
    },
    logo: {
        quiz: {
            games: [
                { image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Minecraft_logo.svg", a: "Minecraft", opts: ["Minecraft", "Roblox", "Terraria", "LEGO Worlds"] },
                { image: "https://cdn.iconscout.com/icon/free/png-256/free-fortnite-1722953-1462076.png", a: "Fortnite", opts: ["Fortnite", "PUBG", "Apex Legends", "Call of Duty Warzone"] },
                { image: "https://cdn.iconscout.com/icon/free/png-256/free-league-of-legends-3521653-2944971.png", a: "League of Legends", opts: ["League of Legends", "Dota 2", "Heroes of the Storm", "Smite"] },
                { image: "https://cdn.iconscout.com/icon/free/png-256/free-overwatch-3521628-2945054.png", a: "Overwatch", opts: ["Overwatch", "Paladins", "Team Fortress 2", "Valorant"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Grand_Theft_Auto_V_Logo.svg", a: "GTA V", opts: ["GTA V", "Watch Dogs", "Saints Row", "Sleeping Dogs"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Rocket_League_logo.svg", a: "Rocket League", opts: ["Rocket League", "FIFA", "PES", "Turbo League"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Among_Us_logo.svg", a: "Among Us", opts: ["Among Us", "Fall Guys", "Gang Beasts", "Human Fall Flat"] },
                { image: "https://cdn.iconscout.com/icon/free/png-256/free-genshin-impact-3521674-2944990.png", a: "Genshin Impact", opts: ["Genshin Impact", "Honkai Star Rail", "Tower of Fantasy", "Blue Protocol"] }
            ],
            studios: [
                { image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Rockstar_Games_Logo.svg", a: "Rockstar Games", opts: ["Rockstar Games", "Take-Two", "2K Games", "Bethesda"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Ubisoft_2017.svg", a: "Ubisoft", opts: ["Ubisoft", "EA", "Activision", "Bethesda"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/EA_Sports_monochrome_logo.svg", a: "EA Sports", opts: ["EA Sports", "2K Sports", "Konami", "Take-Two"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Activision.svg", a: "Activision", opts: ["Activision", "EA", "Ubisoft", "Take-Two"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Nintendo_logo.svg", a: "Nintendo", opts: ["Nintendo", "Sony", "Sega", "Microsoft"] },
                { image: "https://cdn.iconscout.com/icon/free/png-256/free-epic-games-3628926-3030070.png", a: "Epic Games", opts: ["Epic Games", "Valve", "Unity", "Unreal"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Valve_logo.svg", a: "Valve", opts: ["Valve", "Epic Games", "Blizzard", "Riot Games"] },
                { image: "https://cdn.iconscout.com/icon/free/png-256/free-playstation-3521629-2945055.png", a: "PlayStation Studios", opts: ["PlayStation Studios", "Xbox Game Studios", "Nintendo EPD", "Sega"] }
            ],
            tech: [
                { image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", a: "Google", opts: ["Google", "Microsoft", "Apple", "Amazon"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Discord_logo.svg", a: "Discord", opts: ["Discord", "Slack", "TeamSpeak", "Skype"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg", a: "Steam", opts: ["Steam", "Epic Games", "Origin", "GOG"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Twitch_logo.svg", a: "Twitch", opts: ["Twitch", "YouTube Gaming", "Kick", "Facebook Gaming"] },
                { image: "https://cdn.iconscout.com/icon/free/png-256/free-playstation-3521629-2945055.png", a: "PlayStation", opts: ["PlayStation", "Xbox", "Nintendo", "Sega"] },
                { image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg", a: "Xbox", opts: ["Xbox", "PlayStation", "Nintendo", "Steam"] }
            ]
        }
    },
    fakereal: {
        facts: [
            { fact: "Les flamants roses naissent blancs et deviennent roses à cause de leur alimentation", isReal: true, explanation: "Vrai ! Les crevettes et algues qu'ils mangent contiennent des pigments caroténoïdes" },
            { fact: "La Grande Muraille de Chine est visible depuis la Lune", isReal: false, explanation: "Faux ! Elle est trop étroite pour être vue depuis l'espace, même depuis l'orbite terrestre" },
            { fact: "Un groupe de corbeaux s'appelle un 'meurtre'", isReal: true, explanation: "Vrai ! En anglais, on dit 'a murder of crows'" },
            { fact: "Les humains n'utilisent que 10% de leur cerveau", isReal: false, explanation: "Faux ! Nous utilisons toutes les parties de notre cerveau, juste pas toutes en même temps" },
            { fact: "Le miel ne périme jamais", isReal: true, explanation: "Vrai ! On a retrouvé du miel comestible dans des tombes égyptiennes vieilles de 3000 ans" },
            { fact: "Les poissons rouges ont une mémoire de 3 secondes", isReal: false, explanation: "Faux ! Ils peuvent se souvenir de choses pendant des mois" },
            { fact: "Cléopâtre vivait plus proche de l'invention de l'iPhone que de la construction des pyramides", isReal: true, explanation: "Vrai ! ~2500 ans séparent les pyramides de Cléopâtre, ~2000 ans séparent Cléopâtre de l'iPhone" },
            { fact: "Les vaches ont des meilleurs amis", isReal: true, explanation: "Vrai ! Elles sont stressées quand elles sont séparées de leurs amies" },
            { fact: "Les éclairs ne frappent jamais deux fois au même endroit", isReal: false, explanation: "Faux ! L'Empire State Building est frappé environ 25 fois par an" },
            { fact: "Les autruches mettent leur tête dans le sable quand elles ont peur", isReal: false, explanation: "Faux ! C'est un mythe, elles se couchent au sol pour se camoufler" },
            { fact: "Une journée sur Vénus est plus longue qu'une année sur Vénus", isReal: true, explanation: "Vrai ! Vénus tourne très lentement sur elle-même (243 jours) mais orbite vite autour du Soleil (225 jours)" },
            { fact: "Les koalas ont des empreintes digitales presque identiques à celles des humains", isReal: true, explanation: "Vrai ! Même les experts légistes peuvent les confondre" },
            { fact: "Napoléon était très petit", isReal: false, explanation: "Faux ! Il mesurait 1m69, soit la taille moyenne de l'époque" },
            { fact: "Il y a plus d'étoiles dans l'univers que de grains de sable sur Terre", isReal: true, explanation: "Vrai ! On estime qu'il y a environ 10^24 étoiles contre 10^23 grains de sable" },
            { fact: "Les chats retombent toujours sur leurs pattes grâce à leur queue", isReal: false, explanation: "Faux ! C'est grâce à leur réflexe de redressement et leur colonne vertébrale flexible" },
            { fact: "Le cœur d'une crevette est situé dans sa tête", isReal: true, explanation: "Vrai ! Comme beaucoup de crustacés" },
            { fact: "On peut voir la Muraille de Chine depuis l'espace", isReal: false, explanation: "Faux ! Elle n'est pas visible à l'œil nu depuis l'orbite" },
            { fact: "Les bananes sont radioactives", isReal: true, explanation: "Vrai ! Elles contiennent du potassium-40, mais en quantité inoffensive" },
            { fact: "Les vikings portaient des casques à cornes", isReal: false, explanation: "Faux ! C'est une invention du 19ème siècle pour l'opéra" },
            { fact: "Un octopus a 3 cœurs", isReal: true, explanation: "Vrai ! 2 pour les branchies et 1 pour le corps" }
        ]
    },
    facemerge: {
        actors: [
            { image: "placeholder_merge1.jpg", persons: ["Brad Pitt", "Leonardo DiCaprio"], opts: [["Brad Pitt", "Leonardo DiCaprio"], ["Tom Cruise", "Johnny Depp"], ["George Clooney", "Matt Damon"], ["Chris Hemsworth", "Chris Evans"]] },
            { image: "placeholder_merge2.jpg", persons: ["Scarlett Johansson", "Emma Watson"], opts: [["Scarlett Johansson", "Emma Watson"], ["Jennifer Lawrence", "Emma Stone"], ["Natalie Portman", "Anne Hathaway"], ["Margot Robbie", "Gal Gadot"]] }
        ],
        singers: [
            { image: "placeholder_merge3.jpg", persons: ["Beyoncé", "Rihanna"], opts: [["Beyoncé", "Rihanna"], ["Taylor Swift", "Ariana Grande"], ["Lady Gaga", "Katy Perry"], ["Adele", "Sia"]] }
        ]
    },
    zoomrace: {
        games: [
            { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49wj.jpg", a: "Minecraft", opts: ["Minecraft", "Roblox", "Terraria", "LEGO Worlds"] },
            { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.jpg", a: "GTA V", opts: ["GTA V", "Watch Dogs", "Saints Row", "Red Dead Redemption"] },
            { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.jpg", a: "Zelda: Tears of the Kingdom", opts: ["Zelda: Tears of the Kingdom", "Zelda: Breath of the Wild", "Genshin Impact", "Immortals Fenyx Rising"] },
            { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg", a: "The Witcher 3", opts: ["The Witcher 3", "Skyrim", "Dark Souls", "Elden Ring"] },
            { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4hmg.jpg", a: "Among Us", opts: ["Among Us", "Fall Guys", "Gang Beasts", "Human Fall Flat"] },
            { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r76.jpg", a: "Fortnite", opts: ["Fortnite", "PUBG", "Apex Legends", "Warzone"] },
            { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg", a: "Red Dead Redemption 2", opts: ["Red Dead Redemption 2", "GTA V", "The Witcher 3", "Skyrim"] },
            { image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg", a: "Elden Ring", opts: ["Elden Ring", "Dark Souls 3", "Sekiro", "Bloodborne"] }
        ],
        movies: [
            { image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg", a: "Inception", opts: ["Inception", "Interstellar", "The Matrix", "Tenet"] },
            { image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tuj1BGeK25h8BfUg.jpg", a: "Avengers: Endgame", opts: ["Avengers: Endgame", "Infinity War", "Age of Ultron", "The Avengers"] },
            { image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", a: "Joker", opts: ["Joker", "The Dark Knight", "Batman Begins", "Suicide Squad"] },
            { image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", a: "Interstellar", opts: ["Interstellar", "Inception", "Gravity", "The Martian"] },
            { image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", a: "The Matrix", opts: ["The Matrix", "Inception", "Blade Runner", "Tron"] }
        ],
        logos: [
            { image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Rockstar_Games_Logo.svg", a: "Rockstar Games", opts: ["Rockstar Games", "Take-Two", "2K Games", "Bethesda"] },
            { image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Nintendo_logo.svg", a: "Nintendo", opts: ["Nintendo", "Sony", "Sega", "Microsoft"] },
            { image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg", a: "Steam", opts: ["Steam", "Epic Games", "Origin", "GOG"] },
            { image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", a: "Google", opts: ["Google", "Microsoft", "Apple", "Amazon"] },
            { image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Ubisoft_2017.svg", a: "Ubisoft", opts: ["Ubisoft", "EA", "Activision", "Bethesda"] }
        ]
    },
    memory: {
        colors: ['red', 'blue', 'green', 'yellow'],
        sounds: ['do', 're', 'mi', 'fa']
    },
    categorysprint: {
        movies: [
            { category: "Films avec Leonardo DiCaprio", answers: ["Titanic", "Inception", "The Revenant", "Django Unchained", "The Wolf of Wall Street", "Shutter Island", "Catch Me If You Can", "The Departed", "Once Upon a Time in Hollywood", "Don't Look Up"] },
            { category: "Films Marvel", answers: ["Iron Man", "Avengers", "Spider-Man", "Thor", "Captain America", "Black Panther", "Guardians of the Galaxy", "Doctor Strange", "Ant-Man", "Black Widow", "Hulk", "Deadpool"] },
            { category: "Films de Quentin Tarantino", answers: ["Pulp Fiction", "Kill Bill", "Django Unchained", "Inglourious Basterds", "Reservoir Dogs", "Once Upon a Time in Hollywood", "The Hateful Eight", "Jackie Brown"] }
        ],
        music: [
            { category: "Chansons de Michael Jackson", answers: ["Thriller", "Billie Jean", "Beat It", "Bad", "Smooth Criminal", "Black or White", "Man in the Mirror", "The Way You Make Me Feel", "Dirty Diana", "Earth Song"] },
            { category: "Chansons de Queen", answers: ["Bohemian Rhapsody", "We Will Rock You", "We Are the Champions", "Don't Stop Me Now", "Somebody to Love", "Radio Ga Ga", "Killer Queen", "Another One Bites the Dust", "Under Pressure", "I Want to Break Free"] },
            { category: "Artistes français", answers: ["Stromae", "Indila", "Aya Nakamura", "Jul", "PNL", "Maitre Gims", "Soprano", "Nekfeu", "Orelsan", "Angèle", "Zaz", "Edith Piaf", "Charles Aznavour"] }
        ],
        geo: [
            { category: "Capitales européennes", answers: ["Paris", "Londres", "Berlin", "Madrid", "Rome", "Lisbonne", "Amsterdam", "Bruxelles", "Vienne", "Prague", "Varsovie", "Budapest", "Athènes", "Stockholm", "Oslo", "Copenhague", "Dublin", "Berne"] },
            { category: "Pays d'Afrique", answers: ["Maroc", "Algérie", "Tunisie", "Egypte", "Afrique du Sud", "Nigeria", "Kenya", "Sénégal", "Côte d'Ivoire", "Ghana", "Cameroun", "Ethiopie", "Tanzanie", "Mali", "Congo"] },
            { category: "Pays d'Asie", answers: ["Japon", "Chine", "Corée du Sud", "Inde", "Vietnam", "Thaïlande", "Indonésie", "Philippines", "Malaisie", "Singapour", "Pakistan", "Bangladesh", "Népal", "Sri Lanka", "Cambodge"] }
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
    currentAudio: null,
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

    // Report subtabs
    document.querySelectorAll('.report-subtab').forEach(tab => {
        tab.addEventListener('click', () => switchReportSubtab(tab.dataset.subtab));
    });
    document.getElementById('refresh-player-reports')?.addEventListener('click', loadPlayerReports);
    document.getElementById('clear-player-reports')?.addEventListener('click', clearPlayerReports);

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

                // Listen for game invitations
                listenForGameInvites(uid);
            }
        });
}

function listenForGameInvites(uid) {
    if (!window.firebaseDB) return;

    const invitesRef = window.firebaseDB.ref('users/' + uid + '/gameInvites');
    invitesRef.on('child_added', (snapshot) => {
        const invite = snapshot.val();
        if (invite && Date.now() - invite.timestamp < 60000) {
            // Invite is less than 1 minute old
            showGameInviteModal(invite, snapshot.key);
        }
        // Clean up old invite
        snapshot.ref.remove();
    });
}

function showGameInviteModal(invite, inviteKey) {
    // Create invite modal if it doesn't exist
    let modal = document.getElementById('invite-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'invite-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="hideInviteModal()"></div>
            <div class="modal-box modal-sm">
                <h3 style="margin-bottom: 1rem;">🎮 Invitation</h3>
                <p id="invite-message" style="margin-bottom: 1.5rem;"></p>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-secondary" onclick="hideInviteModal()" style="flex: 1;">Refuser</button>
                    <button class="btn btn-primary" id="accept-invite-btn" style="flex: 1;">Rejoindre</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    document.getElementById('invite-message').textContent = `${invite.hostName} t'invite à rejoindre sa partie !`;
    document.getElementById('accept-invite-btn').onclick = () => {
        hideInviteModal();
        document.getElementById('join-code').value = invite.code;
        joinMpGame();
    };

    modal.classList.remove('hidden');
    playSuccessSound();
}

function hideInviteModal() {
    const modal = document.getElementById('invite-modal');
    if (modal) modal.classList.add('hidden');
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

// ===== Report Subtabs & Player Reports =====
function switchReportSubtab(subtab) {
    document.querySelectorAll('.report-subtab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.report-subtab[data-subtab="${subtab}"]`)?.classList.add('active');

    document.querySelectorAll('.reports-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`section-${subtab}`)?.classList.remove('hidden');

    if (subtab === 'players') {
        loadPlayerReports();
    }
}

function loadPlayerReports() {
    const container = document.getElementById('player-reports-list');
    if (!container) return;

    if (!window.firebaseDB) {
        container.innerHTML = '<div class="reports-empty">Firebase non connecté</div>';
        return;
    }

    container.innerHTML = '<div class="reports-empty">Chargement...</div>';

    window.firebaseDB.ref('playerReports').orderByChild('timestamp').once('value').then(snapshot => {
        const reports = snapshot.val();

        if (!reports || Object.keys(reports).length === 0) {
            container.innerHTML = '<div class="reports-empty">Aucun joueur signalé</div>';
            return;
        }

        const reasonLabels = {
            'triche': 'Triche',
            'insultes': 'Insultes',
            'spam': 'Spam',
            'autre': 'Autre'
        };

        const reportsArray = Object.entries(reports).map(([id, r]) => ({ id, ...r }));
        reportsArray.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

        container.innerHTML = reportsArray.map(report => {
            const date = report.timestamp ? new Date(report.timestamp).toLocaleDateString('fr-FR') : 'Date inconnue';
            const reason = reasonLabels[report.reason] || report.reason || 'Non spécifié';

            return `
                <div class="player-report-card">
                    <div class="player-report-header">
                        <span class="player-report-user">
                            <span>⚠️</span>
                            ${escapeHtml(report.reportedUsername || report.reportedUser)}
                        </span>
                        <span class="player-report-reason">${reason}</span>
                    </div>
                    <div class="player-report-info">
                        Signalé par: ${escapeHtml(report.reporterUsername || 'Anonyme')} - ${date}
                    </div>
                    <div class="player-report-actions">
                        <button class="btn-secondary btn-sm" onclick="viewPlayerProfile('${report.reportedUser}')">Voir profil</button>
                        <button class="btn-danger btn-sm" onclick="deletePlayerReport('${report.id}')">Supprimer</button>
                    </div>
                </div>
            `;
        }).join('');
    }).catch(err => {
        console.error('Error loading player reports:', err);
        container.innerHTML = '<div class="reports-empty">Erreur de chargement</div>';
    });
}

function deletePlayerReport(reportId) {
    if (!window.firebaseDB) return;

    if (confirm('Supprimer ce signalement ?')) {
        window.firebaseDB.ref('playerReports/' + reportId).remove().then(() => {
            showToast('Signalement supprimé', 'success');
            loadPlayerReports();
        }).catch(() => {
            showToast('Erreur lors de la suppression', 'error');
        });
    }
}

function clearPlayerReports() {
    if (!window.firebaseDB) return;

    if (confirm('Effacer tous les signalements de joueurs ?')) {
        window.firebaseDB.ref('playerReports').remove().then(() => {
            showToast('Tous les signalements effacés', 'success');
            loadPlayerReports();
        }).catch(() => {
            showToast('Erreur lors de la suppression', 'error');
        });
    }
}

function viewPlayerProfile(userId) {
    if (!window.firebaseDB) return;

    window.firebaseDB.ref('users/' + userId).once('value').then(snapshot => {
        const user = snapshot.val();
        if (user) {
            alert(`Profil de ${user.username || userId}\n\nNiveau: ${user.level || 1}\nXP Total: ${user.totalXp || 0}\nParties jouées: ${user.gamesPlayed || 0}`);
        } else {
            showToast('Utilisateur non trouvé', 'error');
        }
    });
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
    } else if (mode === 'cityguesser') {
        startCityGuesser();
    } else if (game === 'fakereal') {
        startFakeReal();
    } else if (game === 'facemerge') {
        startFacemerge();
    } else if (game === 'zoomrace') {
        startZoomRace();
    } else if (game === 'memory') {
        startMemory();
    } else if (game === 'categorysprint') {
        startCategorySprint();
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
    if (state.mode === 'quotes' && gameData.quotes) {
        data = [...gameData.quotes];
    } else if (state.mode === 'blind' && gameData.blind) {
        // Handle Blind Test for Quiz Musical with audio previews
        const genres = state.genre === 'mixed' ? Object.keys(gameData.blind) : [state.genre];
        genres.forEach(g => {
            if (gameData.blind[g]) {
                data = data.concat(gameData.blind[g]);
            }
        });
    } else if (state.mode === 'palmares' && gameData.palmares) {
        data = [...gameData.palmares];
    } else if (state.mode === 'retro' && gameData.retro) {
        data = [...gameData.retro];
    } else if (state.mode === 'flags' && gameData.flags) {
        data = [...gameData.flags];
    } else if (game === 'blindtest') {
        // Handle Blind Test Audio game
        const sourceData = state.mode === 'ost' ? gameData.ost : gameData.sounds;
        if (sourceData) {
            const genres = state.genre === 'mixed' ? Object.keys(sourceData) : [state.genre];
            genres.forEach(g => {
                if (sourceData[g]) {
                    data = data.concat(sourceData[g]);
                }
            });
        }
    } else if (game === 'screenshot' || game === 'logo') {
        // Handle Screenshot and Logo Quiz games
        if (gameData.quiz) {
            const genres = state.genre === 'mixed' ? Object.keys(gameData.quiz) : [state.genre];
            genres.forEach(g => {
                if (gameData.quiz[g]) {
                    data = data.concat(gameData.quiz[g]);
                }
            });
        }
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

    // Remove previous media displays (flag, image, audio)
    const existingFlag = document.querySelector('.flag-display');
    if (existingFlag) existingFlag.remove();
    const existingMedia = document.querySelector('.media-display');
    if (existingMedia) existingMedia.remove();
    const existingAudio = document.querySelector('.audio-display');
    if (existingAudio) existingAudio.remove();
    document.getElementById('question-box').classList.remove('flag-question', 'media-question', 'audio-question');

    // Stop any playing audio
    if (state.currentAudio) {
        state.currentAudio.pause();
        state.currentAudio = null;
    }

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
    } else if ((game === 'blindtest' || (game === 'music' && state.mode === 'blind')) && (q.audio || q.deezerId)) {
        // Blind Test Audio game (both for gaming sounds and music blind test)
        questionText = game === 'music' ? 'Qui chante cette chanson ?' : 'Quel est ce son ?';
        document.getElementById('question-box').classList.add('audio-question');

        const audioDisplay = document.createElement('div');
        audioDisplay.className = 'audio-display';

        if (q.deezerId) {
            // Deezer track - fetch preview dynamically
            audioDisplay.innerHTML = `
                <div class="audio-player-container">
                    <div class="audio-icon">🎵</div>
                    <button class="play-audio-btn" onclick="playDeezerPreview(${q.deezerId})">
                        <span class="play-icon">▶</span> Écouter
                    </button>
                    <div class="audio-hint">Clique pour écouter l'extrait</div>
                </div>
            `;
        } else if (q.youtube) {
            // YouTube video - extract video ID and use embed
            const videoId = q.audio.includes('watch?v=') ? q.audio.split('watch?v=')[1].split('&')[0] : q.audio;
            audioDisplay.innerHTML = `
                <div class="audio-player-container">
                    <div class="audio-icon">🎵</div>
                    <iframe
                        width="0"
                        height="0"
                        src="https://www.youtube.com/embed/${videoId}?autoplay=1&start=0&end=30"
                        frameborder="0"
                        allow="autoplay"
                        style="display:none;">
                    </iframe>
                    <button class="play-audio-btn" onclick="playBlindTestAudio('${q.audio}', true)">
                        <span class="play-icon">▶</span> Écouter
                    </button>
                    <div class="audio-hint">Écoute attentivement...</div>
                </div>
            `;
        } else {
            // Direct audio file
            audioDisplay.innerHTML = `
                <div class="audio-player-container">
                    <div class="audio-icon">🔊</div>
                    <button class="play-audio-btn" onclick="playBlindTestAudio('${q.audio}', false)">
                        <span class="play-icon">▶</span> Écouter
                    </button>
                    <div class="audio-hint">Clique pour écouter le son</div>
                </div>
            `;
        }

        const questionBox = document.getElementById('question-box');
        const questionTextEl = document.getElementById('question-text');
        questionBox.insertBefore(audioDisplay, questionTextEl);

        // Auto-play for Deezer tracks
        if (q.deezerId) {
            setTimeout(() => playDeezerPreview(q.deezerId), 500);
        } else if (!q.youtube) {
            setTimeout(() => playBlindTestAudio(q.audio, false), 500);
        }
    } else if ((game === 'screenshot' || game === 'logo') && q.image) {
        // Screenshot or Logo Quiz game
        questionText = game === 'screenshot' ? 'Quel est ce jeu ?' : 'Quel est ce logo ?';
        document.getElementById('question-box').classList.add('media-question');

        const mediaDisplay = document.createElement('div');
        mediaDisplay.className = 'media-display';
        mediaDisplay.innerHTML = `
            <div class="image-container ${state.mode === 'zoom' ? 'zoom-mode' : ''}">
                <img src="${q.image}" alt="Image" class="quiz-image" onerror="this.src='https://via.placeholder.com/400x300?text=Image+non+disponible'">
            </div>
        `;

        const questionBox = document.getElementById('question-box');
        const questionTextEl = document.getElementById('question-text');
        questionBox.insertBefore(mediaDisplay, questionTextEl);
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

// Function to play blind test audio
function playBlindTestAudio(audioUrl, isYoutube) {
    if (state.currentAudio) {
        state.currentAudio.pause();
    }

    if (isYoutube) {
        // For YouTube, open in a small window or use iframe
        window.open(audioUrl, '_blank', 'width=400,height=300');
    } else {
        state.currentAudio = new Audio(audioUrl);
        state.currentAudio.volume = 0.7;
        state.currentAudio.play().catch(e => {
            console.log('Erreur lecture audio:', e);
            showToast('Impossible de lire l\'audio', 'error');
        });
    }

    // Update button state
    const playBtn = document.querySelector('.play-audio-btn');
    if (playBtn) {
        playBtn.innerHTML = '<span class="play-icon">🔊</span> En cours...';
        playBtn.classList.add('playing');
    }
}

// Function to fetch Deezer preview and play it
async function playDeezerPreview(trackId) {
    const playBtn = document.querySelector('.play-audio-btn');
    if (playBtn) {
        playBtn.innerHTML = '<span class="play-icon">⏳</span> Chargement...';
        playBtn.disabled = true;
    }

    try {
        // Liste de proxies CORS à essayer
        const proxies = [
            `https://api.allorigins.win/raw?url=${encodeURIComponent('https://api.deezer.com/track/' + trackId)}`,
            `https://corsproxy.io/?https://api.deezer.com/track/${trackId}`,
            `https://api.codetabs.com/v1/proxy?quest=https://api.deezer.com/track/${trackId}`
        ];

        let data = null;
        for (const proxyUrl of proxies) {
            try {
                const response = await fetch(proxyUrl);
                if (response.ok) {
                    data = await response.json();
                    if (data.preview) break;
                }
            } catch (err) {
                console.log('Proxy failed:', proxyUrl);
            }
        }

        if (data && data.preview) {
            if (state.currentAudio) {
                state.currentAudio.pause();
            }

            state.currentAudio = new Audio(data.preview);
            state.currentAudio.volume = 0.7;
            await state.currentAudio.play();

            if (playBtn) {
                playBtn.innerHTML = '<span class="play-icon">🔊</span> En cours...';
                playBtn.classList.add('playing');
                playBtn.disabled = false;
            }
        } else {
            throw new Error('No preview available');
        }
    } catch (e) {
        console.log('Erreur Deezer:', e);
        if (playBtn) {
            playBtn.innerHTML = '<span class="play-icon">❌</span> Erreur';
            playBtn.disabled = false;
        }
        showToast('Impossible de charger l\'audio', 'error');
    }
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

    // Gérer les Higher/Lower avec sous-catégories (comme sport)
    let hlData;
    let hlQuestion = config.hlQuestion;
    let hlLabel = config.hlLabel;

    if (Array.isArray(gameData.higherLower)) {
        // Format simple : tableau direct
        hlData = gameData.higherLower;
    } else if (typeof gameData.higherLower === 'object') {
        // Format avec sous-catégories (sport par exemple)
        const genre = state.genre || Object.keys(gameData.higherLower)[0];
        hlData = gameData.higherLower[genre];

        if (!hlData) {
            showToast('Sélectionne un sport spécifique', 'error');
            return;
        }

        // Questions et labels dynamiques selon le sport
        if (typeof config.hlQuestion === 'object') {
            hlQuestion = config.hlQuestion[genre] || 'Qui a le plus ?';
        }
        if (typeof config.hlLabel === 'object') {
            hlLabel = config.hlLabel[genre] || 'valeur';
        }
    }

    if (!hlData || hlData.length < 2) {
        showToast('Pas assez de données disponibles', 'error');
        return;
    }

    document.getElementById('hl-question').textContent = hlQuestion;
    document.getElementById('hl-left-label').textContent = hlLabel;
    document.getElementById('hl-right-label').textContent = hlLabel;

    const items = shuffle([...hlData]);
    state.hlCurrent = items[0];
    state.hlNext = items[1];
    state.hlUsed.push(items[0].title, items[1].title);
    state.hlPool = hlData; // Garder la référence pour hlGuess

    showScreen('hl-screen');
    updateHL();
}

function updateHL() {
    document.getElementById('hl-score').textContent = state.score;
    document.getElementById('hl-streak').textContent = state.streak;
    document.getElementById('hl-best').textContent = state.hlBest;

    const left = document.getElementById('hl-left');
    const leftEmoji = document.getElementById('hl-left-emoji');
    const rightEmoji = document.getElementById('hl-right-emoji');

    // Afficher drapeau ou emoji selon les données
    if (state.hlCurrent.flag) {
        leftEmoji.innerHTML = `<img src="https://flagcdn.com/w80/${state.hlCurrent.flag}.png" alt="${state.hlCurrent.title}" class="hl-flag">`;
    } else {
        leftEmoji.textContent = state.hlCurrent.emoji || '🎵';
    }
    left.querySelector('.hl-title').textContent = state.hlCurrent.title;
    left.querySelector('.hl-artist').textContent = state.hlCurrent.artist || '';
    left.querySelector('.streams-num').textContent = state.hlCurrent.value;
    left.classList.remove('correct', 'wrong');

    const right = document.getElementById('hl-right');
    if (state.hlNext.flag) {
        rightEmoji.innerHTML = `<img src="https://flagcdn.com/w80/${state.hlNext.flag}.png" alt="${state.hlNext.title}" class="hl-flag">`;
    } else {
        rightEmoji.textContent = state.hlNext.emoji || '🎵';
    }
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
            const pool = state.hlPool.filter(s => !state.hlUsed.includes(s.title));
            state.hlNext = shuffle(pool.length ? pool : state.hlPool)[0];
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

// ===== City Guesser =====
let cityMap = null;
let cityMarker = null;
let cityGuessLatLng = null;

function startCityGuesser() {
    const gameData = allGameData.geo;
    if (!gameData?.cityguesser || gameData.cityguesser.length === 0) {
        showToast('Pas de données disponibles', 'error');
        return;
    }

    state.cgQuestions = shuffle([...gameData.cityguesser]).slice(0, 10);
    state.cgCurrent = 0;
    state.score = 0;
    state.correct = 0;

    showScreen('cityguesser-screen');

    // Initialize map if not already done
    setTimeout(() => {
        if (!cityMap) {
            cityMap = L.map('city-map').setView([20, 0], 2);
            // Utiliser OpenStreetMap France pour les labels en français
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap France',
                maxZoom: 19
            }).addTo(cityMap);

            cityMap.on('click', function(e) {
                cityGuessLatLng = e.latlng;
                if (cityMarker) {
                    cityMarker.setLatLng(e.latlng);
                } else {
                    cityMarker = L.marker(e.latlng).addTo(cityMap);
                }
                document.getElementById('cg-confirm-btn').disabled = false;
            });
        } else {
            cityMap.setView([20, 0], 2);
            if (cityMarker) {
                cityMap.removeLayer(cityMarker);
                cityMarker = null;
            }
        }
        cityGuessLatLng = null;
        document.getElementById('cg-confirm-btn').disabled = true;

        showCityQuestion();
    }, 100);
}

function showCityQuestion() {
    const q = state.cgQuestions[state.cgCurrent];
    if (!q) {
        endCityGuesser();
        return;
    }

    const totalQuestions = Math.min(state.cgQuestions.length, 10);
    document.getElementById('cg-score').textContent = state.score;
    document.getElementById('cg-progress').textContent = `${state.cgCurrent + 1}/${totalQuestions}`;
    document.getElementById('city-image').src = q.image;

    // Reset map view and marker
    if (cityMap) {
        cityMap.setView([20, 0], 2);
        if (cityMarker) {
            cityMap.removeLayer(cityMarker);
            cityMarker = null;
        }
    }
    cityGuessLatLng = null;
    document.getElementById('cg-confirm-btn').disabled = true;
}

function confirmCityGuess() {
    if (!cityGuessLatLng) return;

    const q = state.cgQuestions[state.cgCurrent];
    const correctLatLng = L.latLng(q.lat, q.lng);
    const distance = cityGuessLatLng.distanceTo(correctLatLng) / 1000; // en km

    // Afficher la bonne position
    const correctMarker = L.marker([q.lat, q.lng], {
        icon: L.divIcon({
            className: 'correct-city-marker',
            html: '✓',
            iconSize: [30, 30]
        })
    }).addTo(cityMap);

    // Tracer une ligne entre la réponse et la bonne position
    const line = L.polyline([cityGuessLatLng, correctLatLng], {color: 'red', dashArray: '5, 10'}).addTo(cityMap);

    // Calculer le score basé sur la distance
    let points = 0;
    if (distance < 50) {
        points = 1000;
        playSuccessSound();
        showToast(`Parfait ! ${q.city}, ${q.country} - ${Math.round(distance)} km`, 'success');
        state.correct++;
    } else if (distance < 200) {
        points = 800;
        playSuccessSound();
        showToast(`Très proche ! ${q.city} - ${Math.round(distance)} km`, 'success');
        state.correct++;
    } else if (distance < 500) {
        points = 500;
        showToast(`Pas mal ! ${q.city} - ${Math.round(distance)} km`, 'success');
    } else if (distance < 1000) {
        points = 200;
        showToast(`${q.city} - ${Math.round(distance)} km`, 'info');
    } else {
        points = 50;
        playErrorSound();
        showToast(`C'était ${q.city}, ${q.country} - ${Math.round(distance)} km`, 'error');
    }

    state.score += points;
    document.getElementById('cg-score').textContent = state.score;

    // Zoom sur la zone
    const bounds = L.latLngBounds([cityGuessLatLng, correctLatLng]);
    cityMap.fitBounds(bounds, { padding: [50, 50] });

    setTimeout(() => {
        // Nettoyer
        cityMap.removeLayer(correctMarker);
        cityMap.removeLayer(line);

        state.cgCurrent++;
        if (state.cgCurrent >= state.cgQuestions.length || state.cgCurrent >= 10) {
            endCityGuesser();
        } else {
            showCityQuestion();
        }
    }, 2500);
}

function endCityGuesser() {
    resumeBgMusic();
    saveScore(state.score);

    // Adapter les résultats
    state.questions = state.cgQuestions;
    state.bestStreak = state.correct;
    showResult();
}

// ===== Fake or Real =====
function startFakeReal() {
    const gameData = allGameData.fakereal;
    if (!gameData || !gameData.facts) {
        showToast('Pas de données disponibles', 'error');
        return;
    }

    // Utiliser uniquement les faits
    const data = gameData.facts.map(item => ({ ...item, type: 'fact' }));

    state.frQuestions = shuffle(data).slice(0, 10);
    state.frCurrent = 0;
    state.score = 0;
    state.correct = 0;
    state.isAnswered = false;

    showScreen('fakereal-screen');
    showFakeRealQuestion();
}

function showFakeRealQuestion() {
    const q = state.frQuestions[state.frCurrent];
    if (!q) {
        endFakeReal();
        return;
    }

    state.isAnswered = false;

    const totalQuestions = Math.min(state.frQuestions.length, 10);
    document.getElementById('fr-score').textContent = state.score;
    document.getElementById('fr-progress').textContent = `${state.frCurrent + 1}/${totalQuestions}`;

    const imageEl = document.getElementById('fr-image');
    const factEl = document.getElementById('fr-fact');
    const resultEl = document.getElementById('fr-result');

    resultEl.classList.add('hidden');

    // Toujours afficher comme un fait (mode images désactivé)
    imageEl.classList.add('hidden');
    if (q.fact) {
        factEl.textContent = q.fact;
        factEl.classList.remove('hidden');
        imageEl.classList.add('hidden');
    }

    // Réactiver les boutons
    document.querySelectorAll('.fr-btn').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'wrong');
    });
}

function answerFakeReal(isReal) {
    if (state.isAnswered) return;
    state.isAnswered = true;

    playClickSound();

    const q = state.frQuestions[state.frCurrent];
    const isCorrect = isReal === q.isReal;

    // Désactiver les boutons
    document.querySelectorAll('.fr-btn').forEach(btn => btn.disabled = true);

    // Highlight des boutons
    const realBtn = document.querySelector('.fr-real');
    const fakeBtn = document.querySelector('.fr-fake');

    if (q.isReal) {
        realBtn.classList.add('correct');
        if (!isCorrect) fakeBtn.classList.add('wrong');
    } else {
        fakeBtn.classList.add('correct');
        if (!isCorrect) realBtn.classList.add('wrong');
    }

    // Afficher l'explication
    const resultEl = document.getElementById('fr-result');
    resultEl.innerHTML = `
        <div class="fr-verdict ${isCorrect ? 'correct' : 'wrong'}">
            ${isCorrect ? '✓ Correct !' : '✗ Faux !'}
        </div>
        <p class="fr-explanation">${q.explanation}</p>
    `;
    resultEl.classList.remove('hidden');

    if (isCorrect) {
        state.score += 100;
        state.correct++;
        playSuccessSound();
    } else {
        playErrorSound();
    }

    document.getElementById('fr-score').textContent = state.score;

    setTimeout(() => {
        state.frCurrent++;
        if (state.frCurrent >= state.frQuestions.length || state.frCurrent >= 10) {
            endFakeReal();
        } else {
            showFakeRealQuestion();
        }
    }, 2500);
}

function endFakeReal() {
    resumeBgMusic();
    saveScore(state.score);
    state.questions = state.frQuestions;
    state.bestStreak = state.correct;
    showResult();
}

// ===== Face Merge =====
function startFacemerge() {
    const gameData = allGameData.facemerge;
    if (!gameData) {
        showToast('Pas de données disponibles', 'error');
        return;
    }

    // Récupérer les données selon le mode
    let data = [];
    if (state.mode && gameData[state.mode]) {
        data = [...gameData[state.mode]];
    } else {
        // Mode mixte
        Object.values(gameData).forEach(arr => {
            if (Array.isArray(arr)) data = data.concat(arr);
        });
    }

    if (data.length === 0) {
        showToast('Pas de données disponibles', 'error');
        return;
    }

    state.fmQuestions = shuffle(data).slice(0, 10);
    state.fmCurrent = 0;
    state.score = 0;
    state.correct = 0;
    state.isAnswered = false;

    showScreen('facemerge-screen');
    showFacemergeQuestion();
}

function showFacemergeQuestion() {
    const q = state.fmQuestions[state.fmCurrent];
    if (!q) return;

    state.isAnswered = false;

    document.getElementById('fm-score').textContent = state.score;
    document.getElementById('fm-progress').textContent = `${state.fmCurrent + 1}/10`;
    document.getElementById('fm-image').src = q.image;

    // Les réponses sont des paires de noms
    const answersEl = document.getElementById('fm-answers');
    answersEl.innerHTML = shuffle([...q.opts]).map((pair, idx) => {
        const pairStr = pair.join(' + ');
        return `<button class="answer-btn fm-answer" data-index="${idx}" data-pair="${pair.join(',')}">${pairStr}</button>`;
    }).join('');

    answersEl.querySelectorAll('.fm-answer').forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedPair = btn.dataset.pair.split(',');
            fmAnswer(selectedPair, q.persons);
        });
    });
}

function fmAnswer(selected, correct) {
    if (state.isAnswered) return;
    state.isAnswered = true;

    playClickSound();

    // Vérifier si la paire est correcte (ordre indifférent)
    const isCorrect = (selected[0] === correct[0] && selected[1] === correct[1]) ||
                      (selected[0] === correct[1] && selected[1] === correct[0]);

    const correctStr = correct.join(' + ');

    document.querySelectorAll('.fm-answer').forEach(btn => {
        btn.disabled = true;
        const btnPair = btn.dataset.pair.split(',');
        const isBtnCorrect = (btnPair[0] === correct[0] && btnPair[1] === correct[1]) ||
                             (btnPair[0] === correct[1] && btnPair[1] === correct[0]);

        if (isBtnCorrect) {
            btn.classList.add('correct');
        } else if (btn.dataset.pair === selected.join(',') && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    if (isCorrect) {
        state.score += 100;
        state.correct++;
        playSuccessSound();
        showToast('+100 points !', 'success');
    } else {
        playErrorSound();
        showToast(`C'était ${correctStr}`, 'error');
    }

    document.getElementById('fm-score').textContent = state.score;

    setTimeout(() => {
        state.fmCurrent++;
        if (state.fmCurrent >= 10 || state.fmCurrent >= state.fmQuestions.length) {
            endFacemerge();
        } else {
            showFacemergeQuestion();
        }
    }, 2000);
}

function endFacemerge() {
    resumeBgMusic();
    saveScore(state.score);
    state.questions = state.fmQuestions;
    state.bestStreak = state.correct;
    showResult();
}

// ===== Zoom Race =====
let zrInterval = null;
let zrZoomLevel = 500;

function startZoomRace() {
    const gameData = allGameData.zoomrace;
    if (!gameData) {
        showToast('Pas de données disponibles', 'error');
        return;
    }

    // Récupérer les données selon le mode
    let data = [];
    if (state.mode && gameData[state.mode]) {
        data = [...gameData[state.mode]];
    } else {
        // Mode mixte - combiner tout
        Object.values(gameData).forEach(arr => {
            if (Array.isArray(arr)) data = data.concat(arr);
        });
    }

    if (data.length === 0) {
        showToast('Pas de données disponibles', 'error');
        return;
    }

    state.zrQuestions = shuffle(data).slice(0, 10);
    state.zrCurrent = 0;
    state.score = 0;
    state.correct = 0;

    showScreen('zoomrace-screen');
    showZoomQuestion();
}

function showZoomQuestion() {
    const q = state.zrQuestions[state.zrCurrent];
    if (!q) {
        // Plus de questions disponibles
        endZoomRace();
        return;
    }

    state.isAnswered = false;
    zrZoomLevel = 500; // Très zoomé au départ

    const totalQuestions = Math.min(state.zrQuestions.length, 10);
    document.getElementById('zr-score').textContent = state.score;
    document.getElementById('zr-progress').textContent = `${state.zrCurrent + 1}/${totalQuestions}`;

    const imageEl = document.getElementById('zr-image');
    imageEl.src = q.image;
    imageEl.style.transform = `scale(${zrZoomLevel / 100})`;

    // Timer bar
    const timerFill = document.getElementById('zr-timer-fill');
    timerFill.style.width = '100%';

    // Afficher les réponses
    const answersEl = document.getElementById('zr-answers');
    answersEl.innerHTML = shuffle([...q.opts]).map(opt =>
        `<button class="answer-btn zr-answer" data-answer="${opt}">${opt}</button>`
    ).join('');

    answersEl.querySelectorAll('.zr-answer').forEach(btn => {
        btn.addEventListener('click', () => zrAnswer(btn.dataset.answer, q.a));
    });

    // Démarrer le dézoom progressif
    let elapsed = 0;
    const duration = 10000; // 10 secondes

    if (zrInterval) clearInterval(zrInterval);
    zrInterval = setInterval(() => {
        if (state.isAnswered) {
            clearInterval(zrInterval);
            return;
        }

        elapsed += 50;
        const progress = elapsed / duration;

        // Dézoom progressif de 500% à 100%
        zrZoomLevel = 500 - (400 * progress);
        if (zrZoomLevel < 100) zrZoomLevel = 100;
        imageEl.style.transform = `scale(${zrZoomLevel / 100})`;

        // Timer bar
        timerFill.style.width = `${(1 - progress) * 100}%`;

        if (elapsed >= duration) {
            clearInterval(zrInterval);
            if (!state.isAnswered) {
                zrTimeUp(q.a);
            }
        }
    }, 50);
}

function zrAnswer(answer, correct) {
    if (state.isAnswered) return;
    state.isAnswered = true;

    if (zrInterval) clearInterval(zrInterval);
    playClickSound();

    const isCorrect = answer === correct;

    // Highlight les réponses
    document.querySelectorAll('.zr-answer').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === correct) {
            btn.classList.add('correct');
        } else if (btn.dataset.answer === answer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    // Révéler l'image complète
    document.getElementById('zr-image').style.transform = 'scale(1)';

    if (isCorrect) {
        // Plus de points si répondu tôt (quand très zoomé)
        const bonus = Math.round((zrZoomLevel - 100) / 4);
        const points = 100 + bonus;
        state.score += points;
        state.correct++;
        playSuccessSound();
        showToast(`+${points} points !`, 'success');
    } else {
        playErrorSound();
        showToast('Mauvaise réponse !', 'error');
    }

    document.getElementById('zr-score').textContent = state.score;

    setTimeout(() => {
        state.zrCurrent++;
        if (state.zrCurrent >= state.zrQuestions.length || state.zrCurrent >= 10) {
            endZoomRace();
        } else {
            showZoomQuestion();
        }
    }, 2000);
}

function zrTimeUp(correct) {
    state.isAnswered = true;
    playErrorSound();

    document.querySelectorAll('.zr-answer').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === correct) {
            btn.classList.add('correct');
        }
    });

    showToast('Temps écoulé !', 'error');

    setTimeout(() => {
        state.zrCurrent++;
        if (state.zrCurrent >= state.zrQuestions.length || state.zrCurrent >= 10) {
            endZoomRace();
        } else {
            showZoomQuestion();
        }
    }, 2000);
}

function endZoomRace() {
    if (zrInterval) clearInterval(zrInterval);
    resumeBgMusic();
    saveScore(state.score);
    state.questions = state.zrQuestions;
    state.bestStreak = state.correct;
    showResult();
}

// ===== Memory Sequence =====
let memSequence = [];
let memPlayerSequence = [];
let memLevel = 1;
let memIsPlaying = false;
let memIsPlayerTurn = false;

function startMemory() {
    memSequence = [];
    memPlayerSequence = [];
    memLevel = 1;
    state.score = 0;
    memIsPlaying = false;
    memIsPlayerTurn = false;

    showScreen('memory-screen');

    document.getElementById('mem-level').textContent = memLevel;
    document.getElementById('mem-score').textContent = state.score;

    // Message différent selon le mode
    const isSoundMode = state.mode === 'sounds';
    if (isSoundMode) {
        document.getElementById('mem-instruction').textContent = '🔊 Mode Son - Écoute attentivement !';
        document.getElementById('memory-grid').classList.add('sound-mode');
    } else {
        document.getElementById('mem-instruction').textContent = '🎨 Mode Couleurs - Regarde bien !';
        document.getElementById('memory-grid').classList.remove('sound-mode');
    }

    const startBtn = document.getElementById('mem-start-btn');
    startBtn.textContent = 'Commencer';
    startBtn.classList.remove('hidden');
    startBtn.onclick = startMemoryRound;

    // Setup button clicks
    document.querySelectorAll('.memory-btn').forEach(btn => {
        btn.onclick = () => memoryBtnClick(btn.dataset.color);
    });
}

function startMemoryRound() {
    document.getElementById('mem-start-btn').classList.add('hidden');
    document.getElementById('mem-instruction').textContent = 'Regarde la séquence...';

    // Ajouter une couleur à la séquence
    const colors = ['red', 'blue', 'green', 'yellow'];
    memSequence.push(colors[Math.floor(Math.random() * colors.length)]);

    memPlayerSequence = [];
    memIsPlayerTurn = false;

    // Jouer la séquence
    playMemorySequence();
}

function playMemorySequence() {
    memIsPlaying = true;
    let i = 0;

    const playNext = () => {
        if (i >= memSequence.length) {
            memIsPlaying = false;
            memIsPlayerTurn = true;
            document.getElementById('mem-instruction').textContent = 'À ton tour !';
            return;
        }

        const color = memSequence[i];
        highlightMemoryBtn(color);
        i++;

        setTimeout(playNext, 600);
    };

    setTimeout(playNext, 500);
}

function highlightMemoryBtn(color, isPlayerAction = false) {
    const btn = document.querySelector(`.memory-btn[data-color="${color}"]`);
    if (!btn) return;

    const isSoundMode = state.mode === 'sounds';

    // En mode son, ne montrer le highlight que si c'est l'action du joueur
    if (!isSoundMode || isPlayerAction) {
        btn.classList.add('active');
        setTimeout(() => {
            btn.classList.remove('active');
        }, 400);
    }

    playMemorySound(color);
}

function playMemorySound(color) {
    // Créer un son basé sur la couleur
    const frequencies = { red: 261.63, blue: 329.63, green: 392.00, yellow: 523.25 };
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.frequency.value = frequencies[color] || 440;
    oscillator.type = 'sine';
    gainNode.gain.value = 0.3;

    oscillator.start();
    setTimeout(() => oscillator.stop(), 200);
}

function memoryBtnClick(color) {
    if (!memIsPlayerTurn || memIsPlaying) return;

    highlightMemoryBtn(color, true); // true = action du joueur, toujours montrer
    memPlayerSequence.push(color);

    // Vérifier si correct
    const currentIndex = memPlayerSequence.length - 1;
    if (memPlayerSequence[currentIndex] !== memSequence[currentIndex]) {
        // Erreur !
        memoryGameOver();
        return;
    }

    // Séquence complète ?
    if (memPlayerSequence.length === memSequence.length) {
        memIsPlayerTurn = false;
        state.score += memLevel * 100;
        memLevel++;

        document.getElementById('mem-level').textContent = memLevel;
        document.getElementById('mem-score').textContent = state.score;

        playSuccessSound();
        showToast(`Niveau ${memLevel - 1} réussi ! +${(memLevel - 1) * 100} pts`, 'success');

        document.getElementById('mem-instruction').textContent = 'Bien joué ! Prépare-toi...';

        setTimeout(startMemoryRound, 1500);
    }
}

function memoryGameOver() {
    memIsPlayerTurn = false;
    playErrorSound();

    document.getElementById('mem-instruction').textContent = `Game Over ! Niveau atteint: ${memLevel}`;

    const startBtn = document.getElementById('mem-start-btn');
    startBtn.textContent = 'Rejouer';
    startBtn.classList.remove('hidden');
    startBtn.onclick = () => {
        document.getElementById('mem-quit-btn').classList.add('hidden');
        memSequence = [];
        memLevel = 1;
        state.score = 0;
        document.getElementById('mem-level').textContent = memLevel;
        document.getElementById('mem-score').textContent = state.score;
        startMemoryRound();
    };

    // Afficher le bouton quitter
    document.getElementById('mem-quit-btn').classList.remove('hidden');

    // Sauvegarder le score
    saveScore(state.score);
}

function quitMemory() {
    memIsPlayerTurn = false;
    memIsPlaying = false;
    memSequence = [];
    memLevel = 1;
    document.getElementById('mem-quit-btn').classList.add('hidden');
    document.getElementById('mem-start-btn').textContent = 'Commencer';
    resumeBgMusic();
    showScreen('home-screen');
}

// ===== Category Sprint =====
let sprintTimer = null;
let sprintTimeLeft = 30;
let sprintFoundAnswers = [];

function startCategorySprint() {
    const gameData = allGameData.categorysprint;
    if (!gameData) {
        showToast('Pas de données disponibles', 'error');
        return;
    }

    // Récupérer les catégories selon le mode
    let categories = [];
    if (state.mode && gameData[state.mode]) {
        categories = [...gameData[state.mode]];
    } else {
        // Mode mixte - toutes les catégories
        Object.values(gameData).forEach(arr => {
            if (Array.isArray(arr)) categories = categories.concat(arr);
        });
    }

    if (categories.length === 0) {
        showToast('Pas de catégories disponibles', 'error');
        return;
    }

    // Choisir une catégorie aléatoire
    state.sprintCategory = shuffle(categories)[0];
    state.score = 0;
    sprintFoundAnswers = [];
    sprintTimeLeft = 30;

    showScreen('sprint-screen');

    document.getElementById('sprint-category').textContent = state.sprintCategory.category;
    document.getElementById('sprint-score').textContent = '0';
    document.getElementById('sprint-timer').textContent = '30';
    document.getElementById('sprint-answers').innerHTML = '';
    document.getElementById('sprint-input').value = '';
    document.getElementById('sprint-input').focus();

    // Setup input
    const input = document.getElementById('sprint-input');
    const submitBtn = document.getElementById('sprint-submit');

    input.onkeypress = (e) => {
        if (e.key === 'Enter') checkSprintAnswer();
    };
    submitBtn.onclick = checkSprintAnswer;

    // Démarrer le timer
    startSprintTimer();
}

function startSprintTimer() {
    if (sprintTimer) clearInterval(sprintTimer);

    sprintTimer = setInterval(() => {
        sprintTimeLeft--;
        document.getElementById('sprint-timer').textContent = sprintTimeLeft;

        if (sprintTimeLeft <= 5) {
            document.getElementById('sprint-timer').classList.add('danger');
        }

        if (sprintTimeLeft <= 0) {
            endCategorySprint();
        }
    }, 1000);
}

// Fonction pour normaliser les chaînes (enlever accents, espaces, etc.)
function normalizeString(str) {
    return str.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
        .replace(/[^a-z0-9]/g, ''); // Garder que lettres et chiffres
}

function checkSprintAnswer() {
    const input = document.getElementById('sprint-input');
    const answer = input.value.trim().toLowerCase();
    const normalizedAnswer = normalizeString(answer);

    if (!answer) return;

    input.value = '';
    input.focus();

    // Vérifier si déjà trouvé
    if (sprintFoundAnswers.some(a => normalizeString(a) === normalizedAnswer)) {
        showToast('Déjà trouvé !', 'info');
        return;
    }

    // Vérifier si correct (comparaison flexible avec normalisation)
    const isCorrect = state.sprintCategory.answers.some(valid => {
        const normalizedValid = normalizeString(valid);
        return normalizedValid === normalizedAnswer ||
               normalizedValid.includes(normalizedAnswer) ||
               normalizedAnswer.includes(normalizedValid) ||
               levenshteinDistance(normalizedValid, normalizedAnswer) <= 2;
    });

    if (isCorrect) {
        // Trouver la réponse exacte correspondante
        const matchedAnswer = state.sprintCategory.answers.find(a => {
            const normalizedA = normalizeString(a);
            return normalizedA === normalizedAnswer ||
                normalizedA.includes(normalizedAnswer) ||
                normalizedAnswer.includes(normalizedA) ||
                levenshteinDistance(normalizedA, normalizedAnswer) <= 2;
        });

        if (matchedAnswer && !sprintFoundAnswers.includes(matchedAnswer)) {
            sprintFoundAnswers.push(matchedAnswer);
            state.score += 100;

            playSuccessSound();
            document.getElementById('sprint-score').textContent = state.score;

            // Afficher la réponse
            const answersEl = document.getElementById('sprint-answers');
            answersEl.innerHTML = sprintFoundAnswers.map(a =>
                `<span class="sprint-found">${a}</span>`
            ).join('');

            // Bonus de temps
            sprintTimeLeft += 2;
            document.getElementById('sprint-timer').textContent = sprintTimeLeft;
        }
    } else {
        playErrorSound();
        showToast('Pas dans la liste !', 'error');
    }
}

// Fonction de distance de Levenshtein pour la tolérance aux fautes
function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }

    return dp[m][n];
}

function endCategorySprint() {
    if (sprintTimer) {
        clearInterval(sprintTimer);
        sprintTimer = null;
    }

    document.getElementById('sprint-timer').classList.remove('danger');

    resumeBgMusic();
    saveScore(state.score);

    // Afficher les réponses non trouvées
    const missed = state.sprintCategory.answers.filter(a => !sprintFoundAnswers.includes(a));

    if (missed.length > 0) {
        showToast(`Réponses manquées: ${missed.slice(0, 3).join(', ')}${missed.length > 3 ? '...' : ''}`, 'info');
    }

    // Adapter pour le résultat
    state.questions = [{ answers: state.sprintCategory.answers }];
    state.correct = sprintFoundAnswers.length;
    state.bestStreak = sprintFoundAnswers.length;
    showResult();
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
    // Stop any playing audio from blind test
    if (state.currentAudio) {
        state.currentAudio.pause();
        state.currentAudio = null;
    }
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

    // Refresh home public games button
    document.getElementById('refresh-home-games')?.addEventListener('click', () => {
        playClickSound();
        loadHomePublicGames();
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

function loadHomePublicGames() {
    const listEl = document.getElementById('home-public-games-list');
    if (!listEl || !window.firebaseDB) {
        if (listEl) listEl.innerHTML = '<p class="no-games">Connecte-toi pour voir les parties</p>';
        return;
    }

    listEl.innerHTML = '<p class="no-games">Chargement...</p>';

    // Get all public games that are waiting for players
    window.firebaseDB.ref('games').orderByChild('visibility').equalTo('public').once('value')
        .then((snapshot) => {
            const games = snapshot.val();
            if (!games) {
                listEl.innerHTML = '<p class="no-games">Aucune partie en cours</p>';
                return;
            }

            // Filter only waiting games that aren't full
            const availableGames = Object.values(games).filter(g => {
                if (g.status !== 'waiting') return false;
                const playerCount = g.players ? Object.keys(g.players).length : 0;
                return playerCount < g.maxPlayers;
            });

            if (availableGames.length === 0) {
                listEl.innerHTML = '<p class="no-games">Aucune partie en cours</p>';
                return;
            }

            // Show max 4 games on home
            listEl.innerHTML = availableGames.slice(0, 4).map(game => {
                const config = gameConfigs[game.game];
                const playerCount = game.players ? Object.keys(game.players).length : 0;
                const hostPlayer = game.players ? Object.values(game.players).find(p => p.isHost) : null;

                return `
                    <div class="public-game-card home-game-card">
                        <div class="public-game-info">
                            <div class="public-game-title">
                                ${config?.icon || '🎮'} ${config?.title || game.game}
                            </div>
                            <div class="public-game-details">
                                Hôte: ${hostPlayer?.name || 'Inconnu'}
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

    // Get code from input if not provided
    if (!code) {
        code = document.getElementById('join-code')?.value;
    }

    if (!code) {
        showToast('Code invalide', 'error');
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

            // Check if player is already in the game (host or already joined)
            const myId = state.user?.id || 'player_' + Date.now();
            if (game.players && game.players[myId]) {
                playErrorSound();
                showToast('Tu es déjà dans cette partie !', 'error');
                return;
            }

            mpState.code = code;
            mpState.isHost = false;
            mpState.myId = myId;
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

    // Update presence to show we're in a game
    updatePresenceGame(mpState.code);

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

    // Listen for game settings changes (for non-host players in lobby)
    if (!mpState.isHost) {
        const settingsFields = ['game', 'category', 'timePerQuestion', 'rounds', 'maxPlayers'];
        settingsFields.forEach(field => {
            const fieldListener = mpState.gameRef.child(field).on('value', (snapshot) => {
                const value = snapshot.val();
                if (value !== null && value !== mpState[field]) {
                    mpState[field] = value;
                    updateLobbyUI();
                }
            });
            mpState.listeners.push(() => mpState.gameRef.child(field).off('value', fieldListener));
        });
    }

    // Listen for game status changes
    const statusListener = mpState.gameRef.child('status').on('value', (snapshot) => {
        const status = snapshot.val();
        if (status === 'playing') {
            mpState.gameStarted = true;
            if (!mpState.isHost) {
                // Game started by host - fetch ALL game data including game type
                mpState.gameRef.once('value').then((snap) => {
                    const game = snap.val();
                    if (game.questions) {
                        // Update all game settings from Firebase
                        mpState.game = game.game || mpState.game;
                        mpState.category = game.category || mpState.category;
                        mpState.timePerQuestion = game.timePerQuestion || mpState.timePerQuestion;
                        mpState.rounds = game.rounds || mpState.rounds;
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
                // Also update game settings when returning to lobby
                mpState.gameRef.once('value').then((snap) => {
                    const game = snap.val();
                    if (game) {
                        mpState.game = game.game || mpState.game;
                        mpState.category = game.category || mpState.category;
                        mpState.timePerQuestion = game.timePerQuestion || mpState.timePerQuestion;
                        mpState.rounds = game.rounds || mpState.rounds;
                    }
                });
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

    // Listen for game deletion (host left)
    if (!mpState.isHost) {
        const gameExistsListener = mpState.gameRef.on('value', (snapshot) => {
            if (!snapshot.exists()) {
                // Game was deleted - host left
                mpState.listeners.forEach(unsub => unsub());
                mpState.listeners = [];
                mpState.gameRef = null;
                mpState.code = null;
                mpState.gameStarted = false;
                updatePresenceGame(null);
                showScreen('home-screen');
                showToast('L\'hôte a quitté la partie', 'error');
                resumeBgMusic();
            }
        });
        mpState.listeners.push(() => mpState.gameRef?.off('value', gameExistsListener));

        // Listen for being kicked
        const kickedRef = window.firebaseDB.ref('games/' + mpState.code + '/kicked/' + mpState.myId);
        const kickedListener = kickedRef.on('value', (snapshot) => {
            if (snapshot.val() === true) {
                mpState.listeners.forEach(unsub => unsub());
                mpState.listeners = [];
                mpState.gameRef = null;
                mpState.code = null;
                mpState.gameStarted = false;
                updatePresenceGame(null);
                showScreen('home-screen');
                showToast('Vous avez été expulsé de la partie', 'error');
                resumeBgMusic();
            }
        });
        mpState.listeners.push(() => kickedRef.off('value', kickedListener));
    }

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
                ${p.avatar ? `<img src="${p.avatar}" alt="" onerror="this.style.display='none';this.parentNode.innerHTML='👤';">` : '👤'}
            </div>
            <span class="lobby-player-name">${p.name}</span>
            ${p.isHost ? '<span class="lobby-player-host">👑 Hôte</span>' : ''}
            ${mpState.isHost && !p.isHost ? `<button class="kick-btn" onclick="kickPlayer('${p.id}')" title="Expulser">✕</button>` : ''}
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
    // Get the base URL including the path (for GitHub Pages subdirectory)
    const basePath = window.location.pathname.replace(/\/[^\/]*$/, '');
    const url = `${window.location.origin}${basePath}/?join=${mpState.code}`;
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

    // Clear presence game
    updatePresenceGame(null);

    mpState.gameRef = null;
    mpState.code = null;
    showScreen('home-screen');
    showToast('Partie quittée', 'success');
}

function kickPlayer(playerId) {
    if (!mpState.isHost || !mpState.gameRef) return;

    const player = mpState.players.find(p => p.id === playerId);
    if (!player || player.isHost) return;

    // Remove player from Firebase and mark as kicked
    mpState.gameRef.child('players/' + playerId).remove();
    mpState.gameRef.child('kicked/' + playerId).set(true);

    playClickSound();
    showToast(`${player.name} a été expulsé`, 'success');
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
        updates['players/' + p.id + '/answerStatus'] = null;
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
                <div class="mp-score-avatar">${p.avatar ? `<img src="${p.avatar}" alt="" onerror="this.style.display='none';this.parentNode.innerHTML='👤';">` : '👤'}</div>
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
        const answerStatus = p.answerStatus || null; // 'correct', 'wrong', or null
        const hasAnswered = answerStatus !== null;
        const statusClass = hasAnswered ? (answerStatus === 'correct' ? 'correct' : 'wrong') : 'waiting';
        const statusIcon = hasAnswered ? (answerStatus === 'correct' ? '✓' : '✗') : '...';

        return `
            <div class="mp-player-status ${statusClass}">
                <div class="mp-player-status-avatar">
                    ${p.avatar ? `<img src="${p.avatar}" alt="" onerror="this.style.display='none';this.parentNode.innerHTML='👤';">` : '👤'}
                </div>
                <span>${p.name.substring(0, 6)}</span>
                <span class="status-icon">${statusIcon}</span>
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

    // Update score and answer status in Firebase
    if (mpState.gameRef) {
        mpState.gameRef.child('players/' + mpState.myId).update({
            score: mpState.scores[mpState.myId] || 0,
            answered: true,
            answerStatus: isCorrect ? 'correct' : 'wrong'
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
            updates['players/' + p.id + '/answerStatus'] = null;
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
            answered: true,
            answerStatus: 'wrong'
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
    updatePresenceGame(null);

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
        const positionClass = realPosition === 1 ? 'first' : realPosition === 2 ? 'second' : 'third';
        return `
            <div class="mp-podium-place ${positionClass}">
                <div class="mp-podium-avatar">${p.avatar ? `<img src="${p.avatar}" alt="" onerror="this.style.display='none';this.parentNode.innerHTML='👤';">` : '👤'}</div>
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
            <div class="mp-rank-avatar">${p.avatar ? `<img src="${p.avatar}" alt="" onerror="this.style.display='none';this.parentNode.innerHTML='👤';">` : '👤'}</div>
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
        updates['players/' + p.id + '/answerStatus'] = null;
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
        updates['players/' + p.id + '/answerStatus'] = null;
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
                avatar: state.user.avatar || null,
                currentGame: null
            });

            // When we disconnect, update lastSeen
            myPresenceRef.onDisconnect().set({
                online: false,
                lastSeen: Date.now(),
                username: state.user.username,
                avatar: state.user.avatar || null,
                currentGame: null
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

function updatePresenceGame(gameCode) {
    if (!window.firebaseDB || !state.user) return;
    window.firebaseDB.ref('presence/' + state.user.id + '/currentGame').set(gameCode);
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

        // Sort: favorites first, then online, then by name
        const favorites = getFavorites();
        friends.sort((a, b) => {
            const aFav = favorites.includes(a.id);
            const bFav = favorites.includes(b.id);
            if (aFav && !bFav) return -1;
            if (!aFav && bFav) return 1;
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
                let statusText = friend.online ? 'En ligne' : formatLastSeen(friend.lastSeen);
                if (friend.online && friend.currentGame) {
                    statusText = '🎮 En partie';
                }
                const statusClass = friend.online ? 'online' : 'offline';

                const isFavorite = getFavorites().includes(friend.id);
                return `
                    <div class="friend-card ${isFavorite ? 'favorite' : ''}" onclick="showFriendProfile('${friend.id}')">
                        ${isFavorite ? '<span class="favorite-star">⭐</span>' : ''}
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

// ===== Friend Profile =====
function getFavorites() {
    return JSON.parse(localStorage.getItem('vkgames_favorites') || '[]');
}

function toggleFavorite(friendId) {
    let favorites = getFavorites();
    if (favorites.includes(friendId)) {
        favorites = favorites.filter(id => id !== friendId);
        showToast('Retiré des favoris', 'success');
    } else {
        favorites.push(friendId);
        showToast('Ajouté aux favoris', 'success');
    }
    localStorage.setItem('vkgames_favorites', JSON.stringify(favorites));
    renderFriendsList();
    // Update profile modal if open
    const modal = document.getElementById('friend-profile-modal');
    if (modal && !modal.classList.contains('hidden')) {
        showFriendProfile(friendId);
    }
}

function showFriendProfile(friendId) {
    const friend = friendsState.friends.find(f => f.id === friendId);
    if (!friend) return;

    playClickSound();

    // Create modal if it doesn't exist
    let modal = document.getElementById('friend-profile-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'friend-profile-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }

    const isFavorite = getFavorites().includes(friendId);
    let statusText = friend.online ? 'En ligne' : formatLastSeen(friend.lastSeen);
    const statusClass = friend.online ? 'online' : 'offline';

    // Check if friend is in a game
    const inGame = friend.currentGame || null;
    if (friend.online && inGame) {
        statusText = '🎮 En partie - Cliquez pour rejoindre';
    }

    // Build action buttons
    let actionButtons = '';

    // If we're in a lobby as host, show invite button
    if (mpState.isHost && mpState.code && friend.online) {
        actionButtons += `<button class="profile-action-btn primary" onclick="inviteFriend('${friendId}'); hideFriendProfile();">
            📨 Inviter à ma partie
        </button>`;
    }

    // If friend is in a game, show join button
    if (inGame && friend.online) {
        actionButtons += `<button class="profile-action-btn success" onclick="joinFriendGame('${friendId}')">
            🎮 Rejoindre sa partie
        </button>`;
    }

    modal.innerHTML = `
        <div class="modal-overlay" onclick="hideFriendProfile()"></div>
        <div class="modal-box" style="max-width: 380px;">
            <button class="modal-close" onclick="hideFriendProfile()">✕</button>

            <div class="friend-profile-header">
                <div class="friend-profile-avatar">
                    ${friend.avatar ? `<img src="${friend.avatar}" alt="">` : '👤'}
                    <span class="friend-status-dot large ${statusClass}"></span>
                </div>
                <h3 class="friend-profile-name">${friend.username || 'Joueur'}</h3>
                <p class="friend-profile-status ${statusClass}">${statusText}</p>
            </div>

            <div class="friend-profile-stats" id="friend-profile-stats">
                <div class="profile-stat-loading">Chargement des stats...</div>
            </div>

            <div class="friend-profile-actions">
                ${actionButtons}
                <button class="profile-action-btn ${isFavorite ? 'warning' : 'secondary'}" onclick="toggleFavorite('${friendId}')">
                    ${isFavorite ? '⭐ Retirer des favoris' : '☆ Ajouter aux favoris'}
                </button>
                <button class="profile-action-btn danger-outline" onclick="reportFriend('${friendId}')">
                    🚩 Signaler
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');

    // Load friend stats from Firebase
    loadFriendStats(friendId);
}

function loadFriendStats(friendId) {
    const statsEl = document.getElementById('friend-profile-stats');
    if (!statsEl || !window.firebaseDB) {
        statsEl.innerHTML = '<p class="no-stats">Stats non disponibles</p>';
        return;
    }

    // Load user data
    window.firebaseDB.ref('users/' + friendId).once('value').then(userSnap => {
        const userData = userSnap.val() || {};

        // Load XP data
        window.firebaseDB.ref('userData/' + friendId + '/xp').once('value').then(xpSnap => {
            const xpData = xpSnap.val() || {};

            // Load game stats
            window.firebaseDB.ref('userData/' + friendId + '/stats').once('value').then(statsSnap => {
                const stats = statsSnap.val() || {};

                const level = xpData.level || 1;
                const xp = xpData.xp || 0;
                const gamesPlayed = stats.gamesPlayed || 0;
                const wins = stats.wins || 0;
                const winRate = gamesPlayed > 0 ? Math.round((wins / gamesPlayed) * 100) : 0;

                // Get rank
                const rank = rankConfig.slice().reverse().find(r => level >= r.minLevel) || rankConfig[0];

                statsEl.innerHTML = `
                    <div class="profile-stats-grid">
                        <div class="profile-stat">
                            <span class="profile-stat-value">${rank.icon}</span>
                            <span class="profile-stat-label">${rank.name}</span>
                        </div>
                        <div class="profile-stat">
                            <span class="profile-stat-value">${level}</span>
                            <span class="profile-stat-label">Niveau</span>
                        </div>
                        <div class="profile-stat">
                            <span class="profile-stat-value">${gamesPlayed}</span>
                            <span class="profile-stat-label">Parties</span>
                        </div>
                        <div class="profile-stat">
                            <span class="profile-stat-value">${winRate}%</span>
                            <span class="profile-stat-label">Victoires</span>
                        </div>
                    </div>
                `;
            });
        });
    }).catch(() => {
        statsEl.innerHTML = '<p class="no-stats">Stats non disponibles</p>';
    });
}

function hideFriendProfile() {
    const modal = document.getElementById('friend-profile-modal');
    if (modal) modal.classList.add('hidden');
}

function joinFriendGame(friendId) {
    const friend = friendsState.friends.find(f => f.id === friendId);
    if (!friend || !friend.currentGame) {
        showToast('Cet ami n\'est pas dans une partie', 'error');
        return;
    }

    hideFriendProfile();
    joinMpGame(friend.currentGame);
}

function reportFriend(friendId) {
    const friend = friendsState.friends.find(f => f.id === friendId);
    if (!friend) return;

    // Create player report modal (different from bug report modal)
    let reportModal = document.getElementById('player-report-modal');
    if (!reportModal) {
        reportModal = document.createElement('div');
        reportModal.id = 'player-report-modal';
        reportModal.className = 'modal';
        document.body.appendChild(reportModal);
    }

    reportModal.innerHTML = `
        <div class="modal-overlay" onclick="hidePlayerReportModal()"></div>
        <div class="modal-box modal-sm">
            <h3 style="margin-bottom: 1rem;">🚩 Signaler ${friend.username}</h3>
            <p style="margin-bottom: 1rem; color: var(--text-secondary); font-size: 0.9rem;">
                Pourquoi signalez-vous cet utilisateur ?
            </p>
            <div class="report-options">
                <button class="report-option" onclick="submitPlayerReport('${friendId}', 'spam')">Spam</button>
                <button class="report-option" onclick="submitPlayerReport('${friendId}', 'harassment')">Harcèlement</button>
                <button class="report-option" onclick="submitPlayerReport('${friendId}', 'inappropriate')">Contenu inapproprié</button>
                <button class="report-option" onclick="submitPlayerReport('${friendId}', 'cheating')">Triche</button>
                <button class="report-option" onclick="submitPlayerReport('${friendId}', 'other')">Autre</button>
            </div>
            <button class="btn btn-secondary" onclick="hidePlayerReportModal()" style="width: 100%; margin-top: 1rem;">Annuler</button>
        </div>
    `;

    reportModal.classList.remove('hidden');
    hideFriendProfile();
}

function hidePlayerReportModal() {
    const modal = document.getElementById('player-report-modal');
    if (modal) modal.classList.add('hidden');
}

function submitPlayerReport(friendId, reason) {
    if (!window.firebaseDB || !state.user) {
        showToast('Erreur lors du signalement', 'error');
        return;
    }

    const friend = friendsState.friends.find(f => f.id === friendId);

    window.firebaseDB.ref('playerReports').push({
        reportedUser: friendId,
        reportedUsername: friend?.username || 'Unknown',
        reportedBy: state.user.id,
        reporterUsername: state.user.username,
        reason: reason,
        timestamp: Date.now()
    }).then(() => {
        hidePlayerReportModal();
        showToast('Signalement envoyé. Merci !', 'success');
    }).catch(() => {
        showToast('Erreur lors du signalement', 'error');
    });
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

// ===== Cleanup Old Games =====
function cleanupOldGames() {
    if (!window.firebaseDB) return;

    const fiveMinutesAgo = Date.now() - (5 * 60 * 1000); // 5 minutes

    window.firebaseDB.ref('games').once('value').then((snapshot) => {
        const games = snapshot.val();
        if (!games) return;

        Object.entries(games).forEach(([code, game]) => {
            // Delete games older than 5 minutes that are still waiting
            if (game.status === 'waiting' && game.createdAt < fiveMinutesAgo) {
                window.firebaseDB.ref('games/' + code).remove();
                console.log('Cleaned up old game:', code);
            }
            // Delete finished games older than 10 minutes
            if (game.status === 'finished' && game.createdAt < (Date.now() - 10 * 60 * 1000)) {
                window.firebaseDB.ref('games/' + code).remove();
                console.log('Cleaned up finished game:', code);
            }
        });
    });
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', () => {
    init();
    initAuthListener();
    initMultiplayer();
    initNewFeatures();
    checkJoinCode();
    scheduleFirebaseSync();
    loadHomePublicGames();

    // Cleanup old games on load and every 2 minutes
    cleanupOldGames();
    setInterval(cleanupOldGames, 2 * 60 * 1000);
});
