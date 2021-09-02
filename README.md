# DT173G, Moment 2

## Syfte
Syftet med denna automatiserade miljö är att snabba upp, effektivisera och förenkla utvecklingsprocessen. Att ta bort små, repetitiva arbetsuppgifter gör att du som utvecklare istället kan fokusera på koden & designen av din webbplats. 

Min miljö automatiserar:
- konkatenerning och minifiering av JavaScript-filer,
- konkatenering, minifiering och använding av webbläsarspecifika prefix i CSS
- lossless minifiering av bilder

Dessa tre delar ser till att den färdiga webbplatsen består av så få filer som möjligt, med så liten filstorlek som möjligt. Detta gör att webbplatsen i slutändan kommer ladda snabbare för besökaren.

Automatiseringen säkerställer att dessa uppgifter blir gjorda på ett korrekt och enhetligt sätt - varje gång.

För att ytterligare underlätta för dig som utvecklare startas används också BrowserSync. En lokal server som öppnar en webbläsare så att du kan se din webbsida och den uppdateras live när du sparar en fil i projektet. Det fungerar också att besöka webbplatsen från din mobil eller surfplatta (på samma nätverk).

## Paket
Min automatiserade miljö använder följande paket:
- **gulp** - Själva systemet som används för att skapa den automatiserade miljön
- **gulp-concat** - Sköter konkatenering (sammanslagning) av flera filer. Valde denna eftersom den är generisk och kan således hantera både JS och CSS.
- **gulp-postcss** - Används som en mellanhand för att köra samma CSS genom flera andra moduler. CSS läses bara in en gång, vilket gör att det blir en snabbare process.
- **cssnano** - Minifierar CSS. Byggd för att fungera med gulp-postcss, valde därför den över andra minifingsmoduler.
- **autoprefixer** - Lägger till webbläsarspecifika CSS-prefix. Används av Google, Twitter och Alibaba - vilket gör att det känns pålitligt.
- **gulp-terser** - Minifierar JavaScript. Detta plugin minifierar även ES6, så valde detta plugin över _gulp-uglify_.
- **gulp-imagemin** - Minifierar bilder (filstorlek) av både PNG, JPEG, GIF och SVG-format.
- **browser-sync** - En liten utvecklingsserver som tillåter "livereloading" och injecerar ny CSS. Används för att kunna direkt kunna se din kods ändringar i webbläsare - på flera synkroniserade enheter! Väldigt populär modul.
- **del** - En enkel liten modul som gör det möjligt att radera filer och kataloger.

## Installation
För att installera den automatiserade miljön lokalt så använder du följande tre kommandon:

```
git clone https://github.com/nlssn/dt173g_m2.git
cd dt173g_m2/
npm install
```

Vad som sker är att detta git repository klonas till en katalog som heter 'dt173g_m2'. Ifrån den katalogen kan npm installera alla moduler genom att läsa igenom filen 'package.json'. 

## Tillgängliga tasks
Standardkommandot ``gulp`` kör alla _tasks_ i en förbestämd ordning för att bygga projektet. När alla filer är klara så börjar BrowserSync att serva dem automatiskt. Därefter håller 'gulp.watch' koll efter eventuella uppdateringar av filer och kör passande _tasks_ vid behov.

Kommandot ``gulp build`` kan användas om du endast vill generera nya filer i '/dist' och inte köra igång den lokala utvecklingsservern.
