const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const JAMENDO_CLIENT_ID = process.env.JAMENDO_CLIENT_ID;

app.get("/", (req, res) => {
  res.send("Spotify Lingo server is running 🎵");
});

// ✅ Jamendo search (filter to lyrics-ready with onlyLyrics=1)
// Example: /api/jamendo/search?q=love&limit=10&onlyLyrics=1
// ✅ Jamendo search with language + lyrics filter
// Example: /api/jamendo/search?q=love&limit=10&onlyLyrics=1&lang=en
app.get("/api/jamendo/search", async (req, res) => {
  try {
    const q = (req.query.q || "").toString().trim();
    const limit = Number(req.query.limit || 10);
    const onlyLyrics = (req.query.onlyLyrics || "0").toString() === "1";
    const lang = (req.query.lang || "").toString().trim().toLowerCase(); // e.g. "en", "fr"

    if (!JAMENDO_CLIENT_ID) {
      return res.status(500).json({ error: "Missing JAMENDO_CLIENT_ID in .env" });
    }
    // Allow empty query if user wants language-only search
const safeQuery = q || "love";

    const url = new URL("https://api.jamendo.com/v3.0/tracks/");
    url.searchParams.set("client_id", JAMENDO_CLIENT_ID);
    url.searchParams.set("format", "json");
    url.searchParams.set("limit", String(Math.min(Math.max(limit, 1), 50)));
    url.searchParams.set("search", safeQuery);

    // ✅ Jamendo supports filtering by lyrics language with lang (2 letters)  [oai_citation:1‡developer.jamendo.com](https://developer.jamendo.com/v3.0/tracks)
    if (lang) {
      url.searchParams.set("lang", lang);
    }

    // ✅ Ask Jamendo to include lyrics so we can filter to lyric-ready tracks  [oai_citation:2‡developer.jamendo.com](https://developer.jamendo.com/v3.0/tracks)
    url.searchParams.set("include", "musicinfo+lyrics");

    const response = await fetch(url.toString());
    const data = await response.json();

    let results = (data.results || []).map((t) => {
      const lyrics =
        typeof t.lyrics === "string"
          ? t.lyrics.trim()
          : Array.isArray(t.lyrics)
          ? t.lyrics.join("\n").trim()
          : "";

      return {
        id: t.id,
        title: t.name,
        artist: t.artist_name,
        album: t.album_name,
        image: t.image,
        audio: t.audio,
        duration: t.duration,
        hasLyrics: lyrics.length > 0,
      };
    });

    if (onlyLyrics) {
      results = results.filter((t) => t.hasLyrics);
    }

    res.json({ results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Get lyrics for a track by id
// Example: /api/jamendo/lyrics/12345
app.get("/api/jamendo/lyrics/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!JAMENDO_CLIENT_ID) {
      return res.status(500).json({ error: "Missing JAMENDO_CLIENT_ID in .env" });
    }

    const url = new URL("https://api.jamendo.com/v3.0/tracks/");
    url.searchParams.set("client_id", JAMENDO_CLIENT_ID);
    url.searchParams.set("format", "json");
    url.searchParams.set("id", id);

    // Jamendo supports include=lyrics to append lyrics when available
    url.searchParams.set("include", "lyrics");

    const response = await fetch(url.toString());
    const data = await response.json();

    const track = (data.results || [])[0];
    const lyrics = track?.lyrics ?? null;

    res.json({ lyrics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});