# LagoonField — progetto pronto per il deploy

Esportazione del 24 ottobre 2026. Sito statico completo: i file HTML, CSS e JavaScript sono sia i sorgenti modificabili sia i file da pubblicare. Non sono necessari compilazione, Node.js, database o dipendenze.

## Pubblicazione
1. Carica tutto il contenuto di questa cartella nella cartella pubblica del tuo hosting (ad esempio public_html, www oppure la directory scelta dal provider).
2. Mantieni la cartella assets e i nomi dei file. index.html deve essere nella radice pubblicata.
3. Se il provider chiede la cartella di pubblicazione, seleziona questa cartella. Nessun comando di build.
4. Apri la home e verifica menu, pagine interne, video e contatti anche da telefono.

I collegamenti sono relativi: il sito può essere pubblicato nel dominio principale oppure in una sottocartella. Usa un hosting statico con HTTPS e supporto ai normali file MP4. L’esportazione non richiede accesso a ChatGPT.

## File da modificare
- index.html: home e video della hero.
- piattaforma.html: piattaforma.
- chi-siamo.html: pagina chi siamo, founder e logo Tech Lagoon.
- contatti.html: contatti e richiesta demo.
- styles.css: impaginazione, colori e versione mobile.
- app.js: menu, schede, video e preparazione email.
- assets/: loghi, immagine e video.

## Video
È incluso il video attuale, assets/hero-video-720p.mp4: 1280 × 720, 24 fps, circa 30 secondi e 16,8 MB. La traccia video mantiene la qualità originale; il contenitore MP4 è predisposto per il caricamento progressivo. La versione 1080p non è stata fornita e non è inclusa.
Il video è silenzioso, in loop e con riproduzione inline. La pausa mostra l’immagine della laguna; la ripresa continua dal punto di pausa. Se la riproduzione automatica viene bloccata dal browser, è possibile usare il pulsante Riprendi video. Con movimento ridotto viene mostrata l’immagine statica.
Per una futura sostituzione con il file 1080p, copia il nuovo MP4 in assets e aggiorna data-src nel tag source di index.html. Non è necessario modificare il layout.

## Contatti e contenuti
Il modulo prepara un’email per sales@lagoonfield.com: l’utente la invia dal proprio programma di posta. Non è presente un servizio di invio automatico dal server.
La pagina Chi siamo contiene il testo segnaposto concordato, da completare prima del lancio definitivo. Sono indicati Alfonso Severino (founder) e Angelo Rondinò (co-founder). I prezzi della presentazione non sono inclusi nel sito.

## Anteprima locale
Puoi aprire index.html per consultare le pagine. Per verificare il comportamento completo del video, usa un server locale oppure l’anteprima del tuo hosting.
