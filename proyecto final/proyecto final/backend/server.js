const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const playlists = {

    feliz: [

        {
            titulo: "Luna",
            artista: "Feid",
            imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/luna%20feid",
            youtube: "https://www.youtube.com/results?search_query=feid+luna"
        },

        {
            titulo: "Monaco",
            artista: "Bad Bunny",
            imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/monaco%20bad%20bunny",
            youtube: "https://www.youtube.com/results?search_query=bad+bunny+monaco"
        },

        {
            titulo: "Provenza",
            artista: "Karol G",
            imagen: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/provenza%20karol%20g",
            youtube: "https://www.youtube.com/results?search_query=provenza+karol+g"
        },

        {
            titulo: "Classy 101",
            artista: "Feid",
            imagen: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/classy%20101",
            youtube: "https://www.youtube.com/results?search_query=classy+101"
        },

        {
            titulo: "Ojitos Lindos",
            artista: "Bad Bunny",
            imagen: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/ojitos%20lindos",
            youtube: "https://www.youtube.com/results?search_query=ojitos+lindos"
        },

        {
            titulo: "Dakiti",
            artista: "Bad Bunny",
            imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/dakiti",
            youtube: "https://www.youtube.com/results?search_query=dakiti"
        }

    ],

    triste: [

        {
            titulo: "Everything I Wanted",
            artista: "Billie Eilish",
            imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/everything%20i%20wanted",
            youtube: "https://www.youtube.com/results?search_query=everything+i+wanted"
        },

        {
            titulo: "Easy On Me",
            artista: "Adele",
            imagen: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/easy%20on%20me",
            youtube: "https://www.youtube.com/results?search_query=adele+easy+on+me"
        },

        {
            titulo: "Someone Like You",
            artista: "Adele",
            imagen: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/someone%20like%20you",
            youtube: "https://www.youtube.com/results?search_query=someone+like+you"
        },

        {
            titulo: "Lovely",
            artista: "Billie Eilish",
            imagen: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/lovely",
            youtube: "https://www.youtube.com/results?search_query=lovely+billie+eilish"
        },

        {
            titulo: "Stay",
            artista: "Rihanna",
            imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/stay%20rihanna",
            youtube: "https://www.youtube.com/results?search_query=stay+rihanna"
        }

    ],

    motivado: [

        {
            titulo: "Lose Yourself",
            artista: "Eminem",
            imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/lose%20yourself",
            youtube: "https://www.youtube.com/results?search_query=lose+yourself+eminem"
        },

        {
            titulo: "Believer",
            artista: "Imagine Dragons",
            imagen: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/believer",
            youtube: "https://www.youtube.com/results?search_query=believer+imagine+dragons"
        },

        {
            titulo: "Stronger",
            artista: "Kanye West",
            imagen: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/stronger",
            youtube: "https://www.youtube.com/results?search_query=stronger+kanye+west"
        },

        {
            titulo: "Titanium",
            artista: "David Guetta",
            imagen: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/titanium",
            youtube: "https://www.youtube.com/results?search_query=titanium"
        },

        {
            titulo: "Remember The Name",
            artista: "Fort Minor",
            imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/remember%20the%20name",
            youtube: "https://www.youtube.com/results?search_query=remember+the+name"
        }

    ],

    relajado: [

        {
            titulo: "Lo-fi Dreams",
            artista: "Chill Studio",
            imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/lofi",
            youtube: "https://www.youtube.com/results?search_query=lofi+chill"
        },

        {
            titulo: "Night Chill",
            artista: "Lo-fi Mix",
            imagen: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/night%20chill",
            youtube: "https://www.youtube.com/results?search_query=night+chill+lofi"
        },

        {
            titulo: "Ocean Waves",
            artista: "Nature Sounds",
            imagen: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/ocean%20waves",
            youtube: "https://www.youtube.com/results?search_query=ocean+waves"
        },

        {
            titulo: "Deep Focus",
            artista: "Study Music",
            imagen: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/deep%20focus",
            youtube: "https://www.youtube.com/results?search_query=deep+focus"
        },

        {
            titulo: "Moonlight",
            artista: "Ambient Mix",
            imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
            spotify: "https://open.spotify.com/search/moonlight%20ambient",
            youtube: "https://www.youtube.com/results?search_query=moonlight+ambient"
        }

    ]
};

app.get('/playlist/:mood', (req, res) => {

    const mood = req.params.mood;

    res.json({
        mood,
        canciones: playlists[mood]
    });
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {

    console.log(
        `Servidor ejecutándose en http://localhost:${PUERTO}`
    );
});
