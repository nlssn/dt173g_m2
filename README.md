# DT173G, Moment 2

## Syfte

## Moduler / Paket
Min automatiserade miljö använder följande moduler:
- **gulp** -
- **gulp-concat** -
- **gulp-postcss** -
- **cssnano** -
- **autoprefixer** -
- **gulp-terser** -
- **gulp-imagemin** -
- **browser-sync** -
- **del** -

## Installation
För att installera den automatiserade miljön lokalt så använder du följande kommandon:

```
git clone https://github.com/nlssn/dt173g_m2.git dt173g_m2
cd /dt173g_m2
npm install
```

Vad som sker är att detta git repository klonas till en katalog som heter 'dt173g_m2'. Ifrån den katalogen kan npm installera alla moduler genom att läsa igenom filen 'package.json'. 

## Starta Gulp
Det allra enklaste är att köra gulpfilen med standardkommandot ``gulp``. Då körs alla _tasks_ i en förbestämd ordning för att bygga webbplatsen. Därefter gulp.watch koll efter eventuella uppdateringar av filer och kör passande _tasks_ vid behov.

Varje _task_ är också publikt exporterad och kan därför köras individuellt med kommandot ``gulp <task>``. Ett exempel:
```
gulp styles
```

### Tillgängliga tasks
Gulpfilen består av ett antal _tasks_ som har specifika uppgifter. De är följande:

- **clean** - rensar bort en existerande 'dist/' mapp, för att säkerställa att inga gamla filer ligger kvar och skapar problem.
- **html** - flyttar alla HTML-filer till 'dist/' mappen.
- **styles** - konkatenerar alla CSS-filer till en, samt lägger till automatiska "vendor prefixes" och minifierar koden.
- **scripts** - kontatenerar alla JS-filer till en, samt minifierar koden.
- **images** - minifierar alla bildfiler (oavsett filformat).
- **serve** - startar en browserSync server och håller därefter koll (gulp.watch) på alla filer i 'src/' för att kunna köra en passande _task_ när de blir ändrade/uppdaterade.
