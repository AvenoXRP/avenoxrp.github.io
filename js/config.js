/* ============================================================
   CONFIGURAZIONE AvenoX RP
   Modifica qui sotto i tuoi dati: link, prodotti, streamer, regole.
   ============================================================ */

const CONFIG = {

  // Link YouTube del trailer (usa il formato embed)
  trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",

  // Link social per la endbar
  social: {
    discord: "https://discord.gg/EVQhH7caQV",
    tiktok: "https://www.tiktok.com/@tuoprofilo",
    youtube: "https://www.youtube.com/@tuocanale"
  },

  // Codice server FiveM/cfx (es: "abcd12" da cfx.re/join/abcd12)
  server: {
    joinCode: "3ygeopz",
    statusLink: "https://cfx.re/join/3ygeopz"
  },

  // ============================================================
  // SHOP - Catalogo prodotti (nessun carrello, solo consultazione)
  // Metti le immagini in assets/shop/ e indicane il percorso in "img".
  // "cover" è l'immagine mostrata sulla card di categoria in shop.html.
  // "details" sono le informazioni aggiuntive mostrate al click sul prodotto.
  // "available" indica se il prodotto è disponibile (true) o non disponibile
  // (false). Se ometti il campo, viene considerato disponibile di default.
  // ============================================================
  shopCategories: [
    {
      id: "locali",
      title: "Locali",
      icon: "🍸",
      cover: "assets/shop/vanillau.jpg",
      products: [
        {
          name: "Vanilla Unicorn", desc: "Club notturno con spettacoli di intrattenimento esclusivi, dotato di motel annesso con stanze a tema per un’esperienza unica.", price: "€ 200", img: "assets/shop/locali/vanillau.jpg",
          details: ["Civico: centro città"]
        },
        {
          name: "Tequi-la-la", desc: "Bar rock di Vinewood, famoso per musica dal vivo, drink forti e notti selvagge.", price: "€ 150", img: "assets/shop/locali/tequilala.jpg",
          details: ["Civico: centro città"]
        },
        {
          name: "Luxxx Club", desc: "Il locale più esclusivo di Los Santos: luci, musica, cibo raffinato e le donne più affascinanti della città.", price: "€ 150", img: "assets/shop/locali/luxxxclub.jpg",
          details: ["Civico: centro città"]
        },
        {
          name: "Split Sides", desc: "Comedy club popolare, perfetto per una serata tra risate e drink.", price: "€ 150", img: "assets/shop/locali/splitsides.jpg",
          details: ["Civico: centro città"]
        },
        {
          name: "Asgard Beach", desc: "Una vivace discoteca e stabilimento balneare situato sulla fittizia Del Perro Beach.", price: "€ 150", img: "assets/shop/locali/asgardbeach.jpg",
          details: ["Civico: centro città"]
        },
        {
          name: "LD Organics", desc: "Coffee shop dove è possibile acquistare e consumare prodotti a base di cannabis legale, in un ambiente sicuro e rilassante.", price: "€ 150", img: "assets/shop/locali/ldorganics.jpg",
          details: ["Civico: centro città"]
        },
        {
          name: "Malibù Club", desc: "Discoteca esclusiva, frequentata da VIP e nottambuli.", price: "€ 150", img: "assets/shop/locali/malibuclub.jpg",
          details: ["Civico: centro città"]
        }
      ]
    },
    {
      id: "officine",
      title: "Officine",
      icon: "🔧",
      cover: "assets/shop/officina-custom.jpg",
      products: [
        {
          name: "Officina Meccanica Base", desc: "Officina per riparazioni e tuning veicoli.", price: "€ 200.000", img: "assets/shop/officina-base.jpg",
          details: ["2 ponti sollevatori", "Kit riparazione base", "Magazzino ricambi piccolo"]
        },
        {
          name: "Officina Custom Garage", desc: "Officina avanzata con verniciatura.", price: "€ 350.000", img: "assets/shop/officina-custom.jpg",
          details: ["4 ponti sollevatori", "Cabina di verniciatura", "Magazzino ricambi grande", "Area esposizione veicoli"]
        }
      ]
    },
    {
      id: "strutture",
      title: "Strutture",
      icon: "🏭",
      cover: "assets/shop/magazzino.jpg",
      products: [
        {
          name: "Magazzino Industriale", desc: "Ampio spazio per stoccaggio merci.", price: "€ 300.000", img: "assets/shop/magazzino.jpg",
          details: ["Superficie: 500 mq", "Accesso mezzi pesanti", "Sistema di sicurezza incluso"]
        },
        {
          name: "Deposito Privato", desc: "Struttura sicura per attività legali e non.", price: "€ 220.000", img: "assets/shop/deposito.jpg",
          details: ["Superficie: 250 mq", "Accesso riservato", "Zona isolata dalla città"]
        }
      ]
    },
    {
      id: "moto",
      title: "Moto",
      icon: "🏍️",
      cover: "assets/shop/moto/25wmanc.jpg",
      subcategories: [
        {
          id: "moto-15",
          title: "Moto da 15",
          cover: "assets/shop/moto/25wmanc.jpg",
          products: [
            { name: "Tmax 560", desc: "25wmanc", price: "€ 15.000", img: "assets/shop/moto/25wmanc.jpg", details: [] },
            { name: "Honda X-ADV 750", desc: "25xadv750", price: "€ 15.000", img: "assets/shop/moto/25xadv750.jpg", details: [] },
            { name: "Yamaha Ténéré 700", desc: "xt700", price: "€ 15.000", img: "assets/shop/moto/xt700.jpg", details: [] },
            { name: "Super Sanchez", desc: "supersanchez", price: "€ 15.000", img: "assets/shop/moto/supersanchez.jpg", details: [] },
            { name: "Kawasaki Z 900 A2", desc: "karmaz90021", price: "€ 15.000", img: "assets/shop/moto/karmaz90021.jpg", details: [] },
            { name: "Yamaha Tracer", desc: "phtracer", price: "€ 15.000", img: "assets/shop/moto/phtracer.jpg", details: [] },
            { name: "Harley Davidson Streetglide", desc: "streetglide18", price: "€ 15.000", img: "assets/shop/moto/streetglide18.jpg", details: [] }
          ]
        },
        {
          id: "moto-30",
          title: "Moto da 30",
          cover: "assets/shop/moto/nhyperion.jpg",
          products: [
            { name: "Kawasaki Ninja H2R", desc: "nhyperion", price: "€ 30.000", img: "assets/shop/moto/nhyperion.jpg", details: [] },
            { name: "Ducati Panigale V4 S", desc: "21sv4", price: "€ 30.000", img: "assets/shop/moto/21sv4.jpg", details: [] },
            { name: "Ducati Streetfighter V4", desc: "pnakedv4", price: "€ 30.000", img: "assets/shop/moto/pnakedv4.jpg", details: [] },
            { name: "KTM 1390 Super Duke R EVO", desc: "ksd", price: "€ 30.000", img: "assets/shop/moto/ksd.jpg", details: [] },
            { name: "Yamaha MT10", desc: "20mt10", price: "€ 30.000", img: "assets/shop/moto/20mt10.jpg", details: [] },
            { name: "Yamaha MT09", desc: "mt09", price: "€ 30.000", img: "assets/shop/moto/mt09.jpg", details: [] },
            { name: "Yamaha XSR900", desc: "25xsr900", price: "€ 30.000", img: "assets/shop/moto/25xsr900.jpg", details: [] },
            { name: "BMW S1000R", desc: "21s1000r", price: "€ 30.000", img: "assets/shop/moto/21s1000r.jpg", details: [] },
            { name: "Triumph Speed Triple", desc: "phstreet", price: "€ 30.000", img: "assets/shop/moto/phstreet.jpg", details: [] },
            { name: "BMW R 1300 GS", desc: "24r1300gs", price: "€ 30.000", img: "assets/shop/moto/24r1300gs.jpg", details: [] },
            { name: "Ducati Multistrada 1260 S", desc: "multistrada1260s", price: "€ 30.000", img: "assets/shop/moto/multistrada1260s.jpg", details: [] },
            { name: "BMW S 1000 RR", desc: "ubermachtr100r", price: "€ 30.000", img: "assets/shop/moto/ubermachtr100r.jpg", details: [] }
          ]
        }
      ]
    },
    {
      id: "macchine",
      title: "Macchine",
      icon: "🚗",
      cover: "assets/shop/macchine/ikx3m2p23.webp",
      subcategories: [
        {
          id: "macchine-30",
          title: "Macchine da 30",
          cover: "assets/shop/macchine/ubermachtqv.webp",
          products: [
            { name: "Alfa Romeo Giulia", desc: "ubermachtqv", price: "€ 30.000", img: "assets/shop/macchine/ubermachtqv.webp", details: [] },
            { name: "Audi SQ5", desc: "asq522", price: "€ 30.000", img: "assets/shop/macchine/asq522.webp", details: [] },
            { name: "Audi RS3", desc: "rs322", price: "€ 30.000", img: "assets/shop/macchine/rs322.webp", details: [] },
            { name: "Audi RS6 C6", desc: "rs6c6s", price: "€ 30.000", img: "assets/shop/macchine/rs6c6s.webp", details: [] },
            { name: "BMW M2 (G87) M Performance", desc: "ikx3m2p23", price: "€ 30.000", img: "assets/shop/macchine/ikx3m2p23.webp", details: [] },
            { name: "BMW M3 E36", desc: "bm3e36", price: "€ 30.000", img: "assets/shop/macchine/bm3e36.webp", details: [] },
            { name: "BMW M4 Cabrio", desc: "bm4f82cab", price: "€ 30.000", img: "assets/shop/macchine/bm4f82cab.webp", details: [] },
            { name: "BMW M2 G87", desc: "m2g87", price: "€ 30.000", img: "assets/shop/macchine/m2g87.webp", details: [] },
            { name: "BMW M3 G80", desc: "m3g80", price: "€ 30.000", img: "assets/shop/macchine/m3g80.webp", details: [] },
            { name: "BMW M3 G80 50TH Edition", desc: "oycm3", price: "€ 30.000", img: "assets/shop/macchine/oycm3.webp", details: [] },
            { name: "BMW 850CSi", desc: "850", price: "€ 30.000", img: "assets/shop/macchine/850.webp", details: [] },
            { name: "Chevrolet Camaro", desc: "18camaro", price: "€ 30.000", img: "assets/shop/macchine/18camaro.webp", details: [] },
            { name: "Cupra Formentor", desc: "cupra22f", price: "€ 30.000", img: "assets/shop/macchine/cupra22f.webp", details: [] },
            { name: "Dodge Charger del 1969", desc: "69charger", price: "€ 30.000", img: "assets/shop/macchine/69charger.webp", details: [] },
            { name: "Dodge Challenger SRT Scat", desc: "ikx3_scatb", price: "€ 30.000", img: "assets/shop/macchine/ikx3_scatb.webp", details: [] },
            { name: "Dodge Charger SXT", desc: "dchargersxt", price: "€ 30.000", img: "assets/shop/macchine/dchargersxt.webp", details: [] },
            { name: "Honda Civic Type R EK9", desc: "civicek9", price: "€ 30.000", img: "assets/shop/macchine/civicek9.webp", details: [] },
            { name: "Honda s2000", desc: "hs2000", price: "€ 30.000", img: "assets/shop/macchine/hs2000.webp", details: [] },
            { name: "Hyundai Tucson", desc: "ikx3_son25b", price: "€ 30.000", img: "assets/shop/macchine/ikx3_son25b.webp", details: [] },
            { name: "Jeep Grand Cherokee Trackhawk", desc: "trhawk", price: "€ 30.000", img: "assets/shop/macchine/trhawk.webp", details: [] },
            { name: "Lancia Delta Integrale", desc: "deltaintegrale", price: "€ 30.000", img: "assets/shop/macchine/deltaintegrale.webp", details: [] },
            { name: "Maserati GranTurismo", desc: "msldgt", price: "€ 30.000", img: "assets/shop/macchine/msldgt.webp", details: [] },
            { name: "Mazda RX8", desc: "mrx811", price: "€ 30.000", img: "assets/shop/macchine/mrx811.webp", details: [] },
            { name: "Mazda MX-5 Miata", desc: "mx5na", price: "€ 30.000", img: "assets/shop/macchine/mx5na.webp", details: [] },
            { name: "Mercedes-Benz AMG A45", desc: "a45trg", price: "€ 30.000", img: "assets/shop/macchine/a45trg.webp", details: [] },
            { name: "Mercedes-Benz CLA 250", desc: "cla250", price: "€ 30.000", img: "assets/shop/macchine/cla250.webp", details: [] },
            { name: "Mercedes-Benz CLA EV", desc: "mclaev25", price: "€ 30.000", img: "assets/shop/macchine/mclaev25.webp", details: [] },
            { name: "Mercedes-Benz Classe C", desc: "tc2022c", price: "€ 30.000", img: "assets/shop/macchine/tc2022c.webp", details: [] },
            { name: "Mercedes-Benz AMG GLC 63 S Coupé", desc: "oycglc63s", price: "€ 30.000", img: "assets/shop/macchine/oycglc63s.webp", details: [] },
            { name: "Mitsubishi Eclipse", desc: "eclipse", price: "€ 30.000", img: "assets/shop/macchine/eclipse.webp", details: [] },
            { name: "Mitsubishi Lancer Evolution X", desc: "esnevox", price: "€ 30.000", img: "assets/shop/macchine/esnevox.webp", details: [] },
            { name: "Mitsubishi Lancer Evolution IX", desc: "mevo9t", price: "€ 30.000", img: "assets/shop/macchine/mevo9t.webp", details: [] },
            { name: "Nissan Silvia 14", desc: "nsilvias14z", price: "€ 30.000", img: "assets/shop/macchine/nsilvias14z.webp", details: [] },
            { name: "Nissan Silvia S13", desc: "nis13", price: "€ 30.000", img: "assets/shop/macchine/nis13.webp", details: [] },
            { name: "Nissan Z Nismo", desc: "nznismo24", price: "€ 30.000", img: "assets/shop/macchine/nznismo24.webp", details: [] },
            { name: "Porsche Carrera S", desc: "p993cs", price: "€ 30.000", img: "assets/shop/macchine/p993cs.webp", details: [] },
            { name: "Seat Leon Cupra", desc: "sleonc21", price: "€ 30.000", img: "assets/shop/macchine/sleonc21.webp", details: [] },
            { name: "Tesla Model Y", desc: "modely25", price: "€ 30.000", img: "assets/shop/macchine/modely25.webp", details: [] },
            { name: "Tesla Model Y", desc: "oycmodeley", price: "€ 30.000", img: "assets/shop/macchine/oycmodeley.webp", details: [] },
            { name: "Toyota Chaser JZX100", desc: "tchaserjzx100", price: "€ 30.000", img: "assets/shop/macchine/tchaserjzx100.webp", details: [] },
            { name: "Toyota GR Yaris", desc: "xp210", price: "€ 30.000", img: "assets/shop/macchine/xp210.webp", details: [] },
            { name: "Volkswagen Golf R", desc: "karmag25r", price: "€ 30.000", img: "assets/shop/macchine/karmag25r.webp", details: [] },
            { name: "Volvo XC40", desc: "gcmxc40r", price: "€ 30.000", img: "assets/shop/macchine/gcmxc40r.webp", details: [] }
          ]
        },
        {
          id: "macchine-50",
          title: "Macchine da 50",
          cover: "assets/shop/macchine/ikx3_gtam21.webp",
          products: [
            { name: "Alfa Romeo Giulia GTAm", desc: "ikx3_gtam21", price: "€ 50.000", img: "assets/shop/macchine/ikx3_gtam21.webp", details: [] },
            { name: "Alfa Romeo Stelvio", desc: "ubermachtdelta", price: "€ 50.000", img: "assets/shop/macchine/ubermachtdelta.webp", details: [] },
            { name: "Aston Martin DBX", desc: "ikx3_dbxs26", price: "€ 50.000", img: "assets/shop/macchine/ikx3_dbxs26.webp", details: [] },
            { name: "Audi RS6", desc: "ars620", price: "€ 50.000", img: "assets/shop/macchine/ars620.webp", details: [] },
            { name: "Audi RS5 Sportback", desc: "audirs5sportback2026wb", price: "€ 50.000", img: "assets/shop/macchine/audirs5sportback2026wb.webp", details: [] },
            { name: "Audi R8 Spyder", desc: "gcmr8spyder2022", price: "€ 50.000", img: "assets/shop/macchine/gcmr8spyder2022.webp", details: [] },
            { name: "Audi RS7", desc: "rs721", price: "€ 50.000", img: "assets/shop/macchine/rs721.webp", details: [] },
            { name: "Audi RS Q8", desc: "arsq8", price: "€ 50.000", img: "assets/shop/macchine/arsq8.webp", details: [] },
            { name: "Bentley Continental GT Speed", desc: "ikx3_gtspeed25", price: "€ 50.000", img: "assets/shop/macchine/ikx3_gtspeed25.webp", details: [] },
            { name: "BMW XM", desc: "tw_bxm22", price: "€ 50.000", img: "assets/shop/macchine/tw_bxm22.webp", details: [] },
            { name: "BMW M5 F90", desc: "bmci", price: "€ 50.000", img: "assets/shop/macchine/bmci.webp", details: [] },
            { name: "BMW M5 Touring", desc: "m5g60w", price: "€ 50.000", img: "assets/shop/macchine/m5g60w.webp", details: [] },
            { name: "Cadillac Escalade", desc: "escaladev25", price: "€ 50.000", img: "assets/shop/macchine/escaladev25.webp", details: [] },
            { name: "Ferrari 288 GTO", desc: "ikx3_288gto", price: "€ 50.000", img: "assets/shop/macchine/ikx3_288gto.webp", details: [] },
            { name: "Ford Mustang", desc: "alcdh25", price: "€ 50.000", img: "assets/shop/macchine/alcdh25.webp", details: [] },
            { name: "Lamborghini Huracan", desc: "lhuracant", price: "€ 50.000", img: "assets/shop/macchine/lhuracant.webp", details: [] },
            { name: "Lamborghini Urus", desc: "urus", price: "€ 50.000", img: "assets/shop/macchine/urus.webp", details: [] },
            { name: "Mazda RX7", desc: "mrx7", price: "€ 50.000", img: "assets/shop/macchine/mrx7.webp", details: [] },
            { name: "Mercedes-AMG GT Black Series", desc: "ikx3gtblack", price: "€ 50.000", img: "assets/shop/macchine/ikx3gtblack.webp", details: [] },
            { name: "Mercedes-AMG GLE 63 S", desc: "gle63sgg", price: "€ 50.000", img: "assets/shop/macchine/gle63sgg.webp", details: [] },
            { name: "Mercedes-AMG GT 63", desc: "rmodgt63", price: "€ 50.000", img: "assets/shop/macchine/rmodgt63.webp", details: [] },
            { name: "Mercedes-AMG G 63", desc: "g63amg25", price: "€ 50.000", img: "assets/shop/macchine/g63amg25.webp", details: [] },
            { name: "Mitsubishi Lancer Evolution X", desc: "esnevox", price: "€ 50.000", img: "assets/shop/macchine/esnevox.webp", details: [] },
            { name: "Nissan Skyline GTR R34", desc: "nskygtrr34", price: "€ 50.000", img: "assets/shop/macchine/nskygtrr34.webp", details: [] },
            { name: "Nissan GTR R35", desc: "ngtrr35", price: "€ 50.000", img: "assets/shop/macchine/ngtrr35.webp", details: [] },
            { name: "Porsche Taycan Turbo GT", desc: "ikx3_ttgt25", price: "€ 50.000", img: "assets/shop/macchine/ikx3_ttgt25.webp", details: [] },
            { name: "Porsche 911 GT3 RS", desc: "ikx3gt3rs23", price: "€ 50.000", img: "assets/shop/macchine/ikx3gt3rs23.webp", details: [] },
            { name: "Porsche 911 GT3 Touring", desc: "gt3touring", price: "€ 50.000", img: "assets/shop/macchine/gt3touring.webp", details: [] },
            { name: "Porsche Cayenne Turbo GT", desc: "ikx3_turbogt22b", price: "€ 50.000", img: "assets/shop/macchine/ikx3_turbogt22b.webp", details: [] },
            { name: "Porsche 911 Turbo S", desc: "p911ts", price: "€ 50.000", img: "assets/shop/macchine/p911ts.webp", details: [] },
            { name: "Rolls-Royce Ghost", desc: "ghost24", price: "€ 50.000", img: "assets/shop/macchine/ghost24.webp", details: [] },
            { name: "Rolls-Royce Wraith", desc: "wraith19", price: "€ 50.000", img: "assets/shop/macchine/wraith19.webp", details: [] },
            { name: "Toyota GR GT", desc: "tgrgt", price: "€ 50.000", img: "assets/shop/macchine/tgrgt.webp", details: [] },
            { name: "Toyota Supra MK4", desc: "toysupmk4", price: "€ 50.000", img: "assets/shop/macchine/toysupmk4.webp", details: [] }
          ]
        },
        {
          id: "macchine-70",
          title: "Macchine da 70",
          cover: "assets/shop/macchine/ie.webp",
          products: [
            { name: "Apollo Intensa Emozione", desc: "ie", price: "€ 70.000", img: "assets/shop/macchine/ie.webp", details: [] },
            { name: "Bentley Mulliner Batur", desc: "gcmbatur2024", price: "€ 70.000", img: "assets/shop/macchine/gcmbatur2024.webp", details: [] },
            { name: "Ferrari 488", desc: "488", price: "€ 70.000", img: "assets/shop/macchine/488.webp", details: [] },
            { name: "Ferrari Aperta", desc: "aperta", price: "€ 70.000", img: "assets/shop/macchine/aperta.webp", details: [] },
            { name: "Ferrari F40", desc: "f40", price: "€ 70.000", img: "assets/shop/macchine/f40.webp", details: [] },
            { name: "Ferrari f812", desc: "f812", price: "€ 70.000", img: "assets/shop/macchine/f812.webp", details: [] },
            { name: "Ferrari sf90 xx", desc: "fsf90xx", price: "€ 70.000", img: "assets/shop/macchine/fsf90xx.webp", details: [] },
            { name: "Ferrari sf90", desc: "sf90", price: "€ 70.000", img: "assets/shop/macchine/sf90.webp", details: [] },
            { name: "Ferrari fxxk evo", desc: "fxxkevo2024", price: "€ 70.000", img: "assets/shop/macchine/fxxkevo2024.webp", details: [] },
            { name: "Ferrari 849 Testarossa", desc: "ikx3_test26", price: "€ 70.000", img: "assets/shop/macchine/ikx3_test26.webp", details: [] },
            { name: "Ferrari 12Cilindri", desc: "f12cilindri24", price: "€ 70.000", img: "assets/shop/macchine/f12cilindri24.webp", details: [] },
            { name: "Ferrari Purosangue", desc: "ikx3sangue23", price: "€ 70.000", img: "assets/shop/macchine/ikx3sangue23.webp", details: [] },
            { name: "KTM X-Bow", desc: "bow", price: "€ 70.000", img: "assets/shop/macchine/bow.webp", details: [] },
            { name: "Lamborghini Fenomeno", desc: "ikx3_fen26", price: "€ 70.000", img: "assets/shop/macchine/ikx3_fen26.webp", details: [] },
            { name: "Lamborghini Revuelto", desc: "lrevuelto", price: "€ 70.000", img: "assets/shop/macchine/lrevuelto.webp", details: [] },
            { name: "Porsche 918 Spyder", desc: "tw_p918s15", price: "€ 70.000", img: "assets/shop/macchine/tw_p918s15.webp", details: [] },
            { name: "Rimac Nevera", desc: "rnr25", price: "€ 70.000", img: "assets/shop/macchine/rnr25.webp", details: [] },
            { name: "Rolls-Royce Cullinan Series II", desc: "cullinan24bb", price: "€ 70.000", img: "assets/shop/macchine/cullinan24bb.webp", details: [] }
          ]
        }
      ]
    },
    {
      id: "elieaerei",
      title: "Elicotteri e Aerei",
      icon: "🚁",
      cover: "assets/shop/elicottero-trasporto.jpg",
      subcategories: [
        {
          id: "elieaerei-30",
          title: "Elicotteri e Aerei da 30",
          cover: "assets/shop/elicottero-base.jpg",
          products: [
            {
              name: "Elicottero Base", desc: "Ideale per spostamenti rapidi.", price: "€ 500.000", img: "assets/shop/elicottero-base.jpg",
              details: ["4 posti", "Autonomia media", "Facile da pilotare"]
            }
          ]
        },
        {
          id: "elieaerei-50",
          title: "Elicotteri e Aerei da 50",
          cover: "assets/shop/elicottero-trasporto.jpg",
          products: [
            {
              name: "Elicottero da Trasporto", desc: "Capiente e versatile.", price: "€ 750.000", img: "assets/shop/elicottero-trasporto.jpg",
              details: ["8 posti", "Vano di carico ampio", "Autonomia elevata"]
            }
          ]
        }
      ]
    },
    {
      id: "case",
      title: "Case",
      icon: "🏠",
      cover: "assets/shop/case/vigneto.png",
      products: [
        {
          name: "Vigneto 409", desc: "Vigneto.", price: "€ 900.000", img: "assets/shop/case/vigneto.png",
          details: ["6 stanze", "Giardino privato e piscina", "Garage per 4 veicoli"]
        },
        {
          name: "Villa 421", desc: "Villa 421.", price: "€ 900.000", img: "assets/shop/case/mansion17.png",
          details: ["6 stanze", "Giardino privato e piscina", "Garage per 4 veicoli"]
        },
        {
          name: "Villa 425", desc: "Villa 425.", price: "€ 900.000", img: "assets/shop/case/mansion12.png",
          details: ["6 stanze", "Giardino privato e piscina", "Garage per 4 veicoli"]
        },
        {
          name: "Fattoria 367", desc: "Fattoria 367.", price: "€ 900.000", img: "assets/shop/case/farmhouse2.png",
          details: ["6 stanze", "Giardino privato e piscina", "Garage per 4 veicoli"]
        },
        {
          name: "Villa 496", desc: "Villa 496.", price: "€ 900.000", img: "assets/shop/case/mansion19.png",
          details: ["6 stanze", "Giardino privato e piscina", "Garage per 4 veicoli"]
        },
        {
          name: "Villa 498", desc: "Villa 498.", price: "€ 900.000", img: "assets/shop/case/mansion6.png",
          details: ["6 stanze", "Giardino privato e piscina", "Garage per 4 veicoli"]
        },
        {
          name: "Villa 499", desc: "Villa 499.", price: "€ 900.000", img: "assets/shop/case/mansion16.png",
          details: ["6 stanze", "Giardino privato e piscina", "Garage per 4 veicoli"]
        },
        {
          name: "Villa 500", desc: "Villa 500.", price: "€ 900.000", img: "assets/shop/case/mansion3.png",
          details: ["6 stanze", "Giardino privato e piscina", "Garage per 4 veicoli"]
        },
        {
          name: "Villa 508", desc: "Villa 508.", price: "€ 900.000", img: "assets/shop/case/mansion15.png",
          details: ["6 stanze", "Giardino privato e piscina", "Garage per 4 veicoli"]
        },
        {
          name: "Villa 509", desc: "Villa 509.", price: "€ 900.000", img: "assets/shop/case/mansion24.png",
          details: ["6 stanze", "Giardino privato e piscina", "Garage per 4 veicoli"]
        },
      ]
    },
    {
      id: "pacchetti",
      title: "Pacchetti",
      icon: "🎁",
      cover: "assets/shop/pack/packstarter.png",
      products: [
        {
          name: "Pacchetto Starter", desc: "Tutto ciò che serve per iniziare.", price: "€ 100.000", img: "assets/shop/pack/packstarter.png",
          details: ["✨ STARTER DRIVE — €50 | 🚗 2 Auto da 30 | 💵 + $100.000 in contanti", "🌊 OCEAN VISTA PACK — €90 | 🏎️ 1 Auto da 70 | 🏖️ Appartamento Ocean Vista vista mare | 💵 + $300.000 in contanti", "💎 PREMIUM ESCAPE — €120 | 🏎️ 2 Auto da 70 | 💰 + $500.000 in contanti"]
        }
      ]
    }
  ],

  // ============================================================
  // REGOLAMENTO - Ogni voce è una categoria con i suoi punti
  // ============================================================
  rules: [
    {
      id: "generale",
      title: "Regolamento Generale",
      points: [
        "Il Fail RP è proibito. Questo termine include qualsiasi comportamento irrealistico, forzato o incoerente con le dinamiche della vita reale.",
        "Il Powergame è proibito. Questo comportamento include l'abuso delle meccaniche di gioco per compiere azioni inverosimili (come scalare una montagna a bordo di un'auto sportiva). Sebbene alcune manovre azzardate siano concesse, nel caso in cui l'azione provochi uno schianto violento, il conducente ha l'obbligo assoluto di fermarsi e simulare l'impatto.",
        "Il VDM (Vehicle Deathmatch) e l'RDM (Random Deathmatch) sono categoricamente proibiti. Nello specifico, è vietato investire deliberatamente qualcuno con un veicolo o uccidere un altro giocatore senza una valida motivazione di Roleplay.<br /> • Esempio di RDM: Aprire il fuoco contro la polizia durante un banale controllo stradale senza un reale e grave motivo di fondo.",
        "Il Metagame è proibito. Questo comportamento include l'utilizzo in-game di qualsiasi informazione ottenuta al di fuori della propria storia e del contesto RP.<br /> • Nota sullo Stream Sniping: Questa infrazione include espressamente lo stream sniping; è pertanto tassativamente vietato guardare le dirette streaming di altri giocatori mentre si è all'interno del server.",
        "Il No-Fear è proibito. Questo comportamento consiste nel non simulare adeguatamente la paura del proprio personaggio in situazioni di reale pericolo.<br /> • Nota sul Permadeath: In casi di No-Fear estremo e palese, la parte lesa potrà richiedere il permadeath (CK) del soggetto presentando una clip video in assistenza.",
        "Il Revenge Kill è proibito. Questo comportamento consiste nel cercare vendetta, uccidendo o tentando di uccidere, il personaggio che ha precedentemente causato il tuo atterramento o la tua morte.<br /> • Esempio: Se vieni ucciso da un altro giocatore, una volta risvegliato in ospedale non puoi assolutamente cercarlo per vendicarti, poiché il tuo personaggio non ha memoria di chi sia stato l'aggressore senza prima averlo riscoperto tramite dinamiche IC (In Game).",
        "Il Mixchat è proibito. Questo comportamento consiste nel confondere o unire i canali di comunicazione IC (In Character) con quelli OOC (Out of Character).<br /> • Nota di gioco: Le informazioni relative alla vita reale o al di fuori del gioco non devono mai essere scritte nelle chat dedicate all'interpretazione del personaggio, e viceversa.",
        "Le offese OOC verso i giocatori o i membri dello Staff sono tassativamente proibite e non saranno tollerate in alcun modo. Con questo termine si intende qualsiasi insulto o mancanza di rispetto rivolta alla persona reale e non al personaggio interpretato.<br /> • Condotta vietata: Non sono ammessi catcalling, battute sessiste o maschiliste, discriminazioni di genere o qualsiasi altra allusione discriminatoria.",
        "Il Car Surf è proibito. Questo comportamento consiste nel rimanere sopra un veicolo in movimento senza essere regolarmente posizionati all'interno dell'abitacolo o sui sedili previsti.<br /> • Nota logica: Viaggiare sul tettuccio, sul cofano o sul bagagliaio di un mezzo in corsa è considerata un'azione irrealistica e sanzionabile.",
        "Il Carjack è proibito. Questo comportamento consiste nel rubare un veicolo altrui in modo repentino e senza che vi sia una scena avviata o una solida motivazione di Roleplay a giustificarlo.<br /> • Nota di gioco: Il furto di un mezzo deve sempre essere il risultato di un'interazione narrativa sensata e mai un'azione casuale o priva di contesto.",
        "L'abuso di bug e glitch è proibito. È dovere di ogni giocatore segnalare tempestivamente allo Staff qualsiasi errore di gioco o vulnerabilità tecnica di cui si venga a conoscenza, affinché si possa provvedere alla risoluzione nel minor tempo possibile.<br /> • Nota di condotta: Sfruttare queste falle a proprio vantaggio invece di segnalarle comporterà gravi sanzioni.",
        "L'utilizzo di qualsiasi Citizen modificata che possa agevolare il giocatore in game è tassativamente proibito su AvenoX e verrà punito al pari del cheating.<br /> • Modifiche non tollerate: È vietato l'uso di file volti a rimuovere elementi di gioco o ad alterare le prestazioni delle armi, come ad esempio: No props, No rolas, No water, Rapid fire, Damage boost e Bush 2D.",
        "Rimanere in modalità AFK per periodi di tempo prolungati è proibito. Qualora ci fosse la necessità di allontanarsi temporaneamente dal computer, si ha l'obbligo di posizionare il proprio personaggio in una zona isolata e lontana dagli altri giocatori.<br /> • Nota sulle scene attive: È tassativamente vietato allontanarsi o andare AFK durante qualsiasi tipo di azione RP in corso.",
        "Il Combat Log è proibito. Una volta avviata un'azione, la partecipazione è riservata esclusivamente ai giocatori già presenti nel server in quel momento; chiunque effettui l'accesso successivamente non potrà, in alcun modo, inserirsi nella scena in corso.<br /> • Tempistiche per l'illegale: È inoltre vietato intraprendere o prendere parte ad attività illegali prima che siano trascorsi almeno 15 minuti dal proprio login nel server.",
      ]
    },
    {
      id: "telefono",
      title: "Regolamento Telefono",
      points: [
        "Per confermare la cancellazione di un messaggio o di una conversazione dal proprio telefono, è obbligatorio digitare la dicitura esatta nella chat di gioco.<br /> • Frase da utilizzare: chat eliminata.",
        "La cancellazione del registro chiamate è valida solo se eseguita tramite dinamiche RP. Per convalidare l'azione, è obbligatorio seguire questa precisa procedura: \<br /> • Salvare in rubrica un contatto chiamato (Chiamate Cancellate) con il numero 0000. <br /> • Effettuare una chiamata verso questo contatto. <br /> Solo dopo aver completato questi passaggi la cronologia sarà considerata azzerata. Qualsiasi altro metodo verrà ritenuto nullo, non RP e sanzionabile.",
      ]
    },
    {
      id: "assistenze",
      title: "Regolamento Assistenze",
      points: [
        "Per richiedere supporto o assistenza riguardo a un'azione è obbligatorio fornire prove video adeguate. Le richieste di risarcimento o rimborso non verranno prese in considerazione senza il supporto di un media valido.<br /> • Requisiti dei file: È necessario una clip video (completa dell'audio sia del proprio microfono che di quello degli altri giocatori) oppure uno screenshot chiaro che includa obbligatoriamente la data di gioco.",
        "Per richiedere la verifica o la valutazione di un'azione, è obbligatorio attendere che la scena si sia conclusa interamente. La richiesta deve essere effettuata compilando l'apposito modulo entro il limite massimo di 1 ora dal termine dell'azione.<br /> • Modalità di gestione: Una volta inviato il modulo, i giocatori coinvolti dovranno accedere ai canali vocali dedicati su Discord per ricevere supporto dallo Staff.",
        "L'esito di un'assistenza può essere rivalutata da un Admin solo su richiesta, da inviare tramite l'apposito modulo nel canale dedicato entro il limite massimo di 24 ore. Il riesame della pratica dovrà avvenire obbligatoriamente alla presenza dello staffer che ha espresso il giudizio iniziale.<br /> • Qualora la rivalutazione confermi il verdetto precedente (esito invariato), al giocatore che ha richiesto il riesame verrà applicata una sanzione.",
        "L'utilizzo di materiale multimediale registrato da terzi (come clip o dirette streaming) è proibito all'interno dei ticket o assistenza. Questo materiale può essere preso in considerazione esclusivamente se l'autore della registrazione era un partecipante attivo e presente nella scena in oggetto.<br /> • Prove fornite da spettatori esterni o non coinvolti nell'azione non avranno alcun valore probatorio.",
        "L'apertura di ticket o richieste di assistenza per futili motivi, o con l'evidente fine di cercare un pretesto per annullare una scena, sarà soggetta a rigida valutazione da parte dello Staff.<br /> • Sanzioni applicabili: Qualora la richiesta venga ritenuta pretestuosa, lo Staff non solo negherà l'assistenza, ma procederà ad applicare un BAN ARMI di 2 ore a tutti i giocatori che hanno sottoscritto la richiesta."
      ]
    },
    {
      id: "permadeath",
      title: "Regolamento Permadeath",
      points: [
        "Avere almeno 5 validi motivi RP e aprire un ticket convalida, che sarà approvato a maggioranza.",
        "Una volta ricevuta l'approvazione del ticket di convalida, il giocatore ha a disposizione un limite massimo di una settimana per eseguire l'azione all'interno del server.",
        "L'azione convalidata potrà essere tentata una sola ed unica volta. In caso di fallimento della scena, non sarà più possibile richiedere il permadeath del bersaglio basandosi sulle medesime motivazioni.",
        "Il capo di una fazione ha la facoltà di applicare il permadeath a un proprio membro senza la necessità di una richiesta preventiva allo Staff, a patto che sussistano motivazioni valide e una solida coerenza narrativa all'interno della scena RP.",
        "Le limitazioni, le tempistiche e le procedure descritte nei punti precedenti non si applicano in alcun modo ai casi di permadeath derivanti da NoFear Estremo.",
        "In caso di permadeath accertato o di una scena che comporti un concreto rischio di permadeath, si applicano i seguenti divieti tassativi: <br /> • Beni materiali: È severamente vietato redigere testamenti o trasferire denaro, armi e veicoli ad altri giocatori. La violazione di questa regola comporterà il WIPE totale di entrambi i player coinvolti. <br /> • Creazione e Background: Non è consentito ricreare un personaggio identico al precedente, né intraprendere con il nuovo PG lo stesso identico percorso lavorativo o di fazione. <br /> • Interazioni e Meta-RP: È proibito tornare a giocare o affiliarsi agli stessi gruppi criminali/fazioni organizzandosi tramite canali OOC.",
        "E’ severamente vietato simulare, inscenare o tentare il suicidio senza aver prima ottenuto l'approvazione di un ticket di permadeath.",
        "I medici hanno il diritto di segnalare, tramite prova video, chiunque metta in atto comportamenti scorretti all'interno delle strutture ospedaliere o in presenza del personale sanitario. Questo include atteggiamenti da troll, il rifiuto di interpretare e ruolare le ferite ricevute o qualsiasi azione che rovini l'esperienza di Roleplay.",
        "A seguito di un permadeath, lo Staff si riserva la facoltà di concedere un'eccezione speciale, permettendo al giocatore di rientrare immediatamente nelle dinamiche criminali con il nuovo personaggio senza l'applicazione del canonico BAN ARMI di 24 ore.",
      ]
    },
    {
      id: "fermcoma",
      title: "Regolamento Ferimento e Coma",
      points: [
        "Il personale medico può essere allertato esclusivamente al termine dell'azione. Per poter inoltrare la richiesta di soccorso, il ferito deve essere obbligatoriamente in possesso di un telefono funzionante. I soccorsi possono essere richiesti anche da un giocatore terzo, estraneo all'azione, qualora si trovasse a passare casualmente nella zona del ritrovamento.",
        "A seguito di un atterramento, una volta rianimati da un medico, è fatto assoluto obbligo di interpretare e simulare uno stato di ferimento grave per una durata minima di 5 minuti.",
        "La gestione dei ricordi a seguito di un ferimento grave è regolata dalle seguenti tempistiche e modalità: <br /> • Cura da parte di un medico: Il giocatore che viene rianimato sul posto da un medico potrà recuperare i ricordi della scena che ha causato il ferimento solo dopo che sia trascorsa 1 ora reale. <br /> • Risveglio in Ospedale (Respawn): In caso di respawn automatico in ospedale, il giocatore dimentica completamente l'intera azione. <br /> • Eccezione per i Rapimenti: Qualora l'azione conclusasi con il respawn sia stata un rapimento, al giocatore è concesso ricordare le dinamiche della scena.",
        "Nel caso in cui non ci siano medici in servizio e la rianimazione venga effettuata da un Admin, l'azione non potrà in alcun modo essere ricordata dal giocatore.",
      ]
    },
    {
      id: "medici",
      title: "Regolamento Medici",
      points: [
        "I medici appartengono a una fazione che collabora con le forze dell'ordine: durante il turno di servizio possono contattare la Polizia in presenza di reati manifesti o situazioni di pericolo, oltre a raccogliere informazioni utili durante il soccorso e segnalarle qualora configurino un reato.",
        "Fuori dal servizio, il medico è libero di compiere qualsiasi azione, lecita o meno, ma se sorpreso sarà trattato come un normale cittadino; eventuali provvedimenti disciplinari restano a discrezione del primario. Non è ammesso effettuare una chiamata EMS con il solo scopo di attirare e rapire il medico.<br /> • Le informazioni apprese durante il servizio non possono essere condivise se non con le Forze dell'Ordine tramite regolare mandato.",
        "Il rapimento di un medico in servizio all'interno della struttura ospedaliera è consentito solo in presenza di motivazioni RP particolarmente solide.",
        "Dopo essere stato rianimato, il ferito deve obbligatoriamente interpretare uno stato di shock e debolezza (ad esempio non potrà correre); sarà compito del medico effettuare gli accertamenti del caso, sul posto se lievi o in ospedale se gravi.",
        "Se un medico ritiene necessario il ricovero di un paziente, questo non potrà rifiutarsi e dovrà recarsi obbligatoriamente in ospedale.",
        "In caso di cadute da grandi altezze o incidenti gravi, il medico può richiedere il permadeath del giocatore coinvolto.",
        "Nelle azioni che coinvolgono esclusivamente criminali, il medico ha l'obbligo di soccorrere tutti i feriti presenti; la chiamata alle autorità potrà avvenire solo al termine di tutte le rianimazioni, per dare modo ai criminali di allontanarsi.",
      ]
    },
    {
      id: "fdo",
      title: "Regolamento Forze dell'Ordine",
      points: [
        "La polizia non può sparare per prima se non in risposta a un colpo esploso da terzi (mortale o meno), fatta eccezione per i colpi alle ruote; questa restrizione decade in presenza di un reale pericolo di vita per sé, per un collega o per un cittadino.",
        "Non è consentito entrare in polizia con l'intento di essere corrotti; per interpretare un agente corrotto è obbligatorio aprire preventivamente un ticket Ninjo. Violare questa regola comporta il permaban.",
        "Gli agenti possono richiedere un documento in qualsiasi momento; chi ne è sprovvisto sarà condotto in centrale per l'identificazione tramite impronte digitali, già raccolte in dogana all'ingresso in città.",
        "Le perquisizioni personali sono ammesse solo con un valido motivo RP nel rispetto dell'Art. C.P.P. 1.14 (es. segnalazioni di spaccio, fughe, zone rosse, mancato rispetto dell'alt, soggetti armati, indizi gravi).<br /> • Dopo una sparatoria la polizia deve perquisire tutti i coinvolti e i veicoli, sequestrando armi e oggetti illegali. <br /> • Le perquisizioni domiciliari richiedono un regolare mandato rilasciato da un giudice o un facente funzione su richiesta di un procuratore. <br /> • In centrale sono ammesse ulteriori perquisizioni cautelative a tutela della sicurezza di agenti e presenti.",
        "Al termine di un arresto con più di 5 soggetti coinvolti è necessario organizzare un trasporto detenuti verso il penitenziario.",
        "Un ex agente sorpreso a compiere azioni illegali entro 15 giorni dal licenziamento o dall'allontanamento rischia un processo con richiesta di ergastolo; la regola si applica solo a chi ha ricoperto almeno il ruolo di agente.<br /> • È inoltre possibile richiedere il wipe del personaggio dopo l'allontanamento, per iniziare una nuova storia.",
        "È vietato intercettare la frequenza radio di un soggetto durante un'azione in corso; tale informazione può essere ottenuta esclusivamente in sede di interrogatorio.",
        "Ogni agente può utilizzare al massimo una striscia chiodata per azione.",
        "Nei controlli su veicoli rubati a NPC o ad altri giocatori, la polizia non può più perquisire né arrestare i soggetti colti in flagranza.",
        "In presenza di uno o più agenti rapiti, le forze dell'ordine possono far intervenire quattro agenti aggiuntivi per ogni collega rapito.",
        "La regola del non aprire il fuoco per primi non vale quando un'azione si conclude in un edificio senza vie di fuga, multipiano o con un unico accesso, con soggetti armati, mascherati e chiaramente intenzionati a sparare o posizionati per farlo: in questo unico caso la polizia può sparare per prima.",
      ]
    },
    {
      id: "safezone",
      title: "Regolamento Safe Zone",
      points: [
        "Sono Safe Zone gli interni e un raggio di 100 metri attorno a ospedali, negozi di abbigliamento, tatuaggi, maschere, parrucchieri e chiese, dove è vietato compiere azioni illegali.<br /> • Nelle chiese e nei loro pressi sono inoltre vietate violenza, insulti razziali o religiosi, trolling e armi impugnate.",
        "Le stazioni delle forze dell'ordine sono semi-safe zone: possono essere assaltate solo con un valido motivo RP e previa approvazione tramite ticket.",
        "L'assalto alla centrale può coinvolgere fino a 12 criminali contro un numero illimitato di agenti (Polizia, Marshall, Sceriffi); è permesso l'uso di tutte le armi e i caschi disponibili in game.<br /> • Se catturati, i criminali saranno processati per terrorismo e non potranno attaccare il convoglio fino al processo.",
        "Qualsiasi comportamento di nofear RP durante l'assalto comporta il permadeath del giocatore.",
      ]
    },
    {
      id: "illegali",
      title: "Regolamento Azioni Illegali",
      points: [
        "Un'azione illegale può coinvolgere al massimo 8 criminali e 12 poliziotti. Le azioni a scopo di puro loot sono severamente vietate: non si può derubare qualcuno senza una valida motivazione RP.",
        "L'azione deve restare entro un raggio di 300 metri: chi si allontana dalla zona è considerato in fuga e non potrà più prendervi parte in alcun modo.",
        "Nelle azioni freeroam vengono conteggiati tutti i membri della fazione presenti nel raggio d'azione, anche se non partecipano attivamente; non vengono invece conteggiati gli ostaggi.",
        "Non è consentito costringere una persona a prelevare contanti al bancomat o a effettuare bonifici.",
        "È vietato usare una chiamata ai servizi (Polizia, Medici, Meccanici, Avvocati, Concessionari, ecc.) per organizzare un'azione illegale premeditata, come un rapimento.",
        "La collaborazione tra fazioni criminali avversarie (\"teste\") è assolutamente vietata.",
        "Se vince la polizia, non è possibile avviare una nuova azione fino alla partenza del convoglio verso la centrale o il carcere; nel frattempo l'azione è considerata freeroam (pistola, senza casco).<br /> • I criminali arrestati restano esterni all'azione e non possono usare comandi per uscire dai veicoli, pena l'annullamento dell'assalto; potranno tentare la fuga solo a scena conclusa.",
        "L'assalto al convoglio richiede una motivazione seria (es. il capo fazione rischia il processo): motivazioni futili comportano l'annullamento.<br /> • Non si possono recuperare tutti gli oggetti sequestrati, e l'assalto può essere tentato una sola volta, con massimo 6 criminali e 12 poliziotti, solo dopo che il convoglio ha percorso almeno 500 metri. Una volta ingaggiato, il convoglio deve fermarsi e mettere in sicurezza la zona.",
        "Se un membro della controparte finisce a terra, non è possibile chiamare i medici per proseguire o avviare una nuova azione con gli stessi soggetti, né usare il medikit per procedere a un rapimento.",
        "Durante un rapimento, se la controparte ingaggia uno scontro a fuoco e viene sconfitta, è possibile rianimare uno dei suoi membri per proseguire con il rapimento; questo non vale nei confronti delle forze dell'ordine.",
        "Casco e animazioni non sono ammessi durante le azioni freeroam.",
        "Nei conflitti tra fazioni criminali, chi apre il fuoco per primo è la fazione in attacco ed è obbligata a proseguire; la fazione in difesa può scegliere se rispondere o restare passiva. Entrambe possono disingaggiare in qualsiasi momento.<br /> • Solo la polizia e gli enti statali/federali devono sempre mettere in sicurezza la zona.",
        "Chi si reca nelle zone del ghetto (Groove, Barrio, ecc.) con l'intento di attaccare le gang locali rischia il permadeath, poiché tali aree sono equiparate alle case fazione delle mafie; anche il trolling in queste zone è punito severamente.",
        "Se in un'azione tra due o più fazioni una risulta in sovrannumero, perde automaticamente e deve cedere il proprio loot alla fazione vincente, a discrezione dello staff, per evitare l'abuso del sovrannumero come scusa per annullare l'azione.",
        "Un ostaggio preso durante una rapina non può essere derubato: se perquisito dalla polizia, gli potranno essere contestati solo eventuali soldi non tracciabili, mai altri oggetti dell'inventario.",
        "Nel rapimento del Procuratore Federale o del Capo della Polizia, le forze dell'ordine possono intervenire senza limiti di numero.",
        "Il tablet della polizia non può essere utilizzato per finalità di rapimento, né alcun tablet trovato nell'inventario altrui può essere usato per estorcere informazioni: va sempre interpretato come un normale tablet.",
        "È vietato camperare nei pressi di punti critici come inizio missioni o punti vendita per avviare azioni criminali.",
        "Durante le azioni freeroam è vietato usare l'elicottero per atterrare su tetti non raggiungibili a piedi.",
        "Tetti, terrazzi, balconi e altri spazi sopraelevati sono vietati nelle azioni freeroam e in ogni tipo di scontro, ad eccezione del Kortz Center e dell'Osservatorio; multipiani e montagnette non sono considerati tetti, essendo più accessibili.",
        "È severamente vietato girare per la mappa alla ricerca di punti illegali, droga, veicoli, persone o rapiti senza un'informazione certa; con una zona confermata e documentata da clip, la ricerca è ammessa solo nelle aree limitrofe entro 500 metri.",
        "È possibile trascinare i corpi dei propri alleati (mai quelli della fazione avversaria) per nasconderli o disimpegnarsi insieme a loro; una volta usciti dal raggio d'azione non si può rientrare.<br /> • La polizia può spostare i corpi di criminali o altri agenti solo se si trovano in mezzo alla strada, portandoli sul marciapiede.",
        "Gli scontri tra fazioni criminali sono 8 contro 8; la polizia può intervenire come terza fazione con un massimo di 12 membri, salvo che l'azione non sia già dichiarata conclusa.",
        "Il loot segue queste regole: la polizia non può mai essere derubata; tra criminali il loot è ammesso solo a fine azione, salvo la necessità di un item specifico per proseguire; è possibile prendere solo l'arma usata nell'azione e le relative munizioni; in caso di disingaggio si possono lootare solo i propri membri prima di allontanarsi.",
        "Respawn e ospedale sono accessibili solo dopo essere stati lootati dalla fazione vincitrice; se vince la polizia, i criminali non possono respawnare e devono subire l'arresto.",
        "Sparare dai veicoli è vietato, salvo durante un drive-by di una gang o in casi di nofear estremo, dove il bersaglio ignora in modo palesemente irrealistico una minaccia armata o un pericolo di morte imminente.",
      ]
    },
    {
      id: "assaltocasa",
      title: "Regolamento Assalto Casa Fazione",
      points: [
        "Ogni casa fazione ha un'area di 100 metri considerata territorio della fazione: rondare ripetutamente questa zona equivale a un ingaggio e quindi a un assalto, a cui possono rispondere tutti i membri della fazione rondata.",
        "Se l'ingaggio inizia fuori da quest'area e si sposta al suo interno, l'azione prosegue come una normale freeroam 8 contro 8; i membri della fazione visti all'interno della propria casa possono essere atterrati ma non derubati: il loot riguarda solo gli 8 membri della squadra attaccante.",
        "Per rondare l'area di una casa fazione servono validi motivi RP, da convalidare tramite ticket; vista la possibile presenza di molti giocatori all'interno, va sempre interpretato correttamente il fear.",
      ]
    },
    {
      id: "pizzo",
      title: "Regolamento Pizzo",
      points: [
        "La richiesta di pizzo può essere effettuata una sola volta a settimana, per una cifra simbolica non superiore a 30.000.",
        "La richiesta non deve interferire con l'RP dell'attività (chiusure, occupazioni prolungate, ecc.).",
        "La fazione che ottiene un accordo di pizzo deve poi proteggere l'attività da ulteriori richieste o attacchi: l'obiettivo non può essere la sola estorsione, altrimenti l'azione viene considerata a scopo di loot.",
        "I criminali coinvolti nella richiesta di pizzo devono rispettare i numeri previsti dal regolamento Freeroam; la violazione comporta un richiamo fazione.",
      ]
    },
    {
      id: "zonemalfamate",
      title: "Regolamento Zone Malfamate",
      points: [
        "Le zone malfamate sono indicate sulla mappa ufficiale e comprendono ghetti, Sandy Shores, Paleto e altre aree controllate da gruppi criminali.",
        "Entrando in una zona malfamata, il giocatore accetta implicitamente il rischio di furti o rapine da parte degli occupanti del territorio, con la possibilità di perdere fino al 50% degli oggetti trasportati; tale percentuale massima va sempre rispettata.",
        "Gli oggetti sottratti devono essere coerenti con il contesto RP e non finalizzati a danneggiare l'esperienza altrui.<br /> • Nel rispetto di questi limiti lo staff non interviene su lamentele; oltre il 50% o in presenza di comportamenti non RP, scattano le sanzioni.",
      ]
    },
    {
      id: "terzefazioni",
      title: "Regolamento Partecipazione Terze Fazioni",
      points: [
        "Se una terza o ulteriore fazione interviene volontariamente in un'azione non consensuale (scontro, sparatoria, rapimento), il loot ottenuto viene diviso tra le due fazioni originariamente coinvolte, mentre lo staff trattiene 8 pistole aggiuntive come sanzione, che vengono confiscate e rimosse dal gioco.",
        "La fazione che interviene volontariamente in questo modo può incorrere in provvedimenti disciplinari, dal warn fazione fino a sospensioni o ban dei membri coinvolti, a discrezione dello staff criminalità.",
      ]
    },
  ],

  // ============================================================
  // STREAMER - Inserisci qui i canali Twitch
  // "isLive" va impostato manualmente qui (true/false) perché
  // controllare lo stato live reale richiede l'API Twitch con
  // Client-ID + Access Token, che va richiesta da un backend
  // (non può essere fatta in sicurezza solo con HTML/JS).
  // Se in futuro avrai un backend, sostituisci semplicemente
  // "isLive" con il dato restituito dall'API Twitch.
  // ============================================================
  streamers: [
    { username: "twitchstreamer1", displayName: "Streamer Uno", isLive: true, avatar: "", title: "In live su AvenoX RP!" },
    { username: "twitchstreamer2", displayName: "Streamer Due", isLive: false, avatar: "", title: "" },
    { username: "twitchstreamer3", displayName: "Streamer Tre", isLive: false, avatar: "", title: "" },
    { username: "twitchstreamer4", displayName: "Streamer Quattro", isLive: true, avatar: "", title: "Roleplay serio, vieni a trovarmi!" }
  ]
};
