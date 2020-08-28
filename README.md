# DT173G, Moment 2

## Paket

## Hur det fungerar
Det allra enklaste är att köra gulpfilen med standardkommandot ``gulp``. Då körs alla _tasks_ i en förbestämd ordning för att bygga webbplatsen. Därefter håller browserSync  koll efter eventuella uppdateringar av filer och laddar om.

Varje _task_ är också publikt exporterad och kan därför köras individuellt med kommandot ``gulp <task>``. Ett exempel:
```
gulp html
```

## Tillgängliga tasks
Gulpfilen består av ett antal _tasks_ som har specifika uppgifter. De är följande:

- **clean** - rensar bort en existerande 'dist/' mapp, för att säkerställa att inga gamla filer ligger kvar och skapar problem.
- **html** - flyttar alla HTML-filer till 'dist/' mappen.
- **styles** - konkatenerar alla CSS-filer till en, samt lägger till automatiska "vendor prefixes" och minifierar koden.
- **scripts** - kontatenerar alla JS-filer till en, samt minifierar koden.
- **images** - minifierar alla bildfiler (oavsett filformat).
- **serve** - startar en browserSync server och håller därefter koll (gulp.watch) på alla filer i 'src/' för att kunna köra en passande _task_ när de blir ändrade/uppdaterade.
