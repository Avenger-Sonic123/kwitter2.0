# Kwitter 2.0

A chat-room prototype connecting a username and room interface to Firebase.

**Repository created:** 2021-10-11  
**Project status:** Learning project / historical snapshot  
**Earliest recorded commit (author date):** 2021-10-11

## Features and implementation

- Store username and room name in localStorage.
- Listen for room records.
- Create and select rooms.

## Technologies

HTML, CSS, JavaScript, Bootstrap, jQuery, Firebase.

## Project structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Main page and user interface |
| [`kwitter.js`](kwitter.js) | Username and page navigation |
| [`kwitter_room.html`](kwitter_room.html) | Room interface |
| [`kwitter_room.js`](kwitter_room.js) | Room and database logic |
| [`style.css`](style.css) | Page styling |

Key functions in the source:
- `kwitter.js`: `addUser()`.
- `kwitter_room.js`: `getData()`, `addRoom()`, `redirectToRoomName()`.

## Run or explore locally

```bash
git clone https://github.com/Avenger-Sonic123/kwitter2.0.git
cd kwitter2.0
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. The local server requires Python 3; browser-based dependencies may also require internet access.

With a test Firebase project, enter a username and create or select a room.

Before testing, review Firebase configuration and security rules and use an isolated project that you control. Do not connect to a production database or enter sensitive information.

Use a Firebase project you own or are authorized to access before testing any database writes. Configure appropriate database security rules; the username input alone is not authentication.

## Current status and limitations

The linked message page is absent; authentication and complete messaging are not implemented.

## Related project snapshots

Other repositories in this project family:
- [Kwitter_HW](https://github.com/Avenger-Sonic123/Kwitter_HW) — repository created 2021-09-19
- [Kwitter](https://github.com/Avenger-Sonic123/Kwitter) — repository created 2021-10-11
- [Kwitter_app_unfinished](https://github.com/Avenger-Sonic123/Kwitter_app_unfinished) — repository created 2021-10-11

---

Source reference: [`e25d85fa`](https://github.com/Avenger-Sonic123/kwitter2.0/tree/e25d85fa7ca7443a7a38724bbd85d2417897863b) on `main`, verified against GitHub on 2026-11-24. Documentation is based on static source review; runtime behavior has not been tested.
