const allQuestionsEABD = [
  {
      text: "Care din următoarele nu este o strategie de alocare a relațiilor nefragmentate?",
      options: [
          { text: "Replicarea acestora pe fiecare sit în parte", correct: false },
          { text: "Nu se poate proiecta un sistem distribuit care să conțină chiar și parțial relații nefragmentate", correct: true },
          { text: "Menținerea lor în acele noduri unde se utilizează cel mai des", correct: false }
      ]
  },
  {
      text: "Care din următoarele NU reprezintă o etapă a procesării interogărilor în cadrul sistemelor de baze de date distribuite?",
      options: [
          { text: "Descompunerea interogărilor", correct: false },
          { text: "Analiza cererii globale", correct: true },
          { text: "Localizarea datelor", correct: false },
          { text: "Optimizarea cererilor locale", correct: false },
          { text: "Optimizarea cererilor globale", correct: false }
      ]
  },
  {
      text: "Care din următoarele NU reprezintă o caracteristică a Sistemelor federative?",
      options: [
          { text: "Heterogenitatea", correct: false },
          { text: "Partajarea resurselor", correct: true },
          { text: "Autonomia", correct: false },
          { text: "Distribuirea", correct: false }
      ]
  },
  {
      text: "Care dintre următoarele NU reprezintă operații în cadrul cubului de date?",
      options: [
          { text: "Detalierea", correct: false },
          { text: "Transarea (Slicing)", correct: false },
          { text: "Pivotarea", correct: false },
          { text: "Mărunțirea (Dicing)", correct: false },
          { text: "Consolidarea/Sumarizarea", correct: false },
          { text: "Defrisarea/Tunderea (Pruning)", correct: true }
      ]
  },
  {
      text: "Care dintre următorii termeni NU sunt specifici pentru bazele de date distribuite?",
      options: [
          { text: "Fragmentare", correct: false },
          { text: "Alocare", correct: false },
          { text: "Replicare", correct: false },
          { text: "Redundanță", correct: true }
      ]
  },
  {
      text: "Care dintre următorii termeni nu este specific proiectării sistemelor de baze de date distribuite?",
      options: [
          { text: "INTEROGARE", correct: true },
          { text: "REPLICARE", correct: false },
          { text: "ALOCARE", correct: false },
          { text: "PARTIȚIONARE", correct: false }
      ]
  },
  {
      text: "Care dintre următoarele NU reprezintă un principiu a lui C.J. Date referitor la sistemele distribuite?",
      options: [
          { text: "Gestionarea distribuită a tranzacțiilor", correct: false },
          { text: "Independența de hardware", correct: false },
          { text: "Independența de software", correct: true },
          { text: "Prelucrarea distribuită a interogărilor", correct: false }
      ]
  },
  {
      text: "Care dintre următoarele elemente NU apare în convenția numelor de obiecte în strategia abordată pentru gestiunea catalogului sistemului R*?",
      options: [
          { text: "Identificatorul utilizatorului care a creat obiectul", correct: false },
          { text: "Denumirea locală a obiectului", correct: false },
          { text: "Identificatorul sitului în care a fost stocat inițial obiectul", correct: false },
          { text: "Data de creare a obiectului", correct: true },
          { text: "Identificatorul sitului în care s-a făcut operația de creare", correct: false }
      ]
  },
  {
      text: "Care din următoarele NU reprezintă un protocol de control al accesului concurent în medii distribuite?",
      options: [
          { text: "Protocolul 2PL centralizat", correct: false },
          { text: "Protocolul 2PL sincron", correct: true },
          { text: "Protocolul de zăvorâre al majorității", correct: false },
          { text: "Protocolul 2PL de copie primară", correct: false },
          { text: "Protocolul 2PL distribuit", correct: false }
      ]
  },
  {
      text: "Care din elementele de mai jos nu este o caracteristică a fragmentării?",
      options: [
          { text: "Caracterul disjunct", correct: false },
          { text: "Refacerea relației inițiale", correct: false },
          { text: "Contingentarea", correct: true },
          { text: "Completitudinea", correct: false }
      ]
  },
  {
      text: "La sistemele de baze de date centralizate, subsistemul tranzacțional al unui SGBD NU are în componentă:",
      options: [
          { text: "Administratorul de centralizare", correct: true },
          { text: "Administratorul de refacere", correct: false },
          { text: "Planificator", correct: false },
          { text: "Administratorul de buffere", correct: false },
          { text: "Administratorul de tranzacții", correct: false }
      ]
  },
  {
      text: "Pe lângă componentele subsistemului tranzacțional al unui SGBD dintr-un sistem centralizat, în cel distribuit mai avem:",
      options: [
          { text: "Administratorul de tranzacții", correct: false },
          { text: "Planificatorul", correct: false },
          { text: "Administratorul de tranzacții global", correct: true },
          { text: "Administratorul de buffere", correct: false }
      ]
  },
  {
      text: "Wrapper-ul este un termen care se leagă în principal de:",
      options: [
          { text: "Independența de sistemul SGBD", correct: true },
          { text: "Independența de rețea", correct: false },
          { text: "Independența de hardware", correct: false },
          { text: "Independența de sistemul de operare", correct: false }
      ]
  },
  {
      text: "Refacerea relației inițiale din fragmente verticale se face prin intermediul operatorului de:",
      options: [
          { text: "Uniune", correct: true },
          { text: "Selecție", correct: false },
          { text: "Proiecție", correct: false },
          { text: "Produs cartezian", correct: false },
          { text: "Intersecție", correct: false },
          { text: "Reuniune", correct: false }
      ]
  },
  {
      text: "Refacerea relației inițiale din fragmente orizontale se face prin intermediul operatorului de:",
      options: [
          { text: "Proiecție", correct: false },
          { text: "Intersecție", correct: false },
          { text: "Reuniune", correct: true },
          { text: "Uniune", correct: false },
          { text: "Produs cartezian", correct: false },
          { text: "Selecție", correct: false }
      ]
  },
  {
      text: "Desenul cu noduri interconectate este reprezentarea intuitivă a unui/unei:",
      options: [
          { text: "Baze de date locale", correct: false },
          { text: "Sistem de baze de date distribuite", correct: false },
          { text: "Sistem cu prelucrare distribuită", correct: true }
      ]
  },
  {
      text: "Care din următoarele sunt nume valide de identificatori PL/SQL?",
      options: [
          { text: "Nu_Stiu", correct: true },
          { text: "1_Aparitie", correct: false },
          { text: "Variabila ce contine_ numarul de_ ani", correct: false },
          { text: "Nume si Prenume", correct: false },
          { text: "Procent%", correct: false },
          { text: "Nume-Prenume", correct: false }
      ]
  },
  {
      text: "Care din următoarele nu reprezintă un beneficiu al limbajul PL/SQL?",
      options: [
          { text: "Optimizarea blocurilor anonime", correct: true },
          { text: "Dezvoltarea programării modularizate (structuri bloc)", correct: false },
          { text: "Integrarea construcțiilor procedurale cu limbajul SQL", correct: false },
          { text: "Tratarea excepțiilor", correct: false },
          { text: "Integrarea cu produsele Oracle", correct: false },
          { text: "Portabilitate (SO, platforme diferite)", correct: false },
          { text: "Sporirea performanței în exploatare", correct: false }
      ]
  },
  {
      text: "Care este nivelul de replicare în cadrul unui sistem de baze de date distribuite ce are următoarele caracteristici: Costurile de comunicație și de stocare sunt relativ reduse. Caracterul local al referinței, securitatea, fiabilitatea și disponibilitatea sunt apropiate de maxim.",
      options: [
          { text: "Baze de date replicate integral", correct: false },
          { text: "Baze de date partiționate, fragmentate sau nereplicate", correct: false },
          { text: "Baze de date centralizate", correct: false },
          { text: "Baze de date replicate parțial sau selectiv", correct: true }
      ]
  },
  {
      text: "Care este nivelul de replicare în cadrul unui sistem de baze de date distribuite ce are următoarele caracteristici: Caracterul local al referinței, disponibilitatea, securitatea și fiabilitatea sunt maxime. Probleme - costul ridicat al echipamentelor de stocare, comunicația aglomerată în cazul actualizărilor.",
      options: [
          { text: "Baze de date partiționate, fragmentate sau nereplicate", correct: false },
          { text: "Baze de date replicate integral", correct: true },
          { text: "Baze de date centralizate", correct: false },
          { text: "Baze de date replicate parțial sau selectiv", correct: false }
      ]
  },
  {
      text: "Care este nivelul de replicare în cadrul unui sistem de baze de date distribuite ce are următoarele caracteristici: Caracterul local al referinței este cel mai scăzut; securitatea, fiabilitatea și disponibilitatea sunt scăzute și depind în cea mai mare măsură de nodul central. Costul comunicației este ridicat.",
      options: [
          { text: "Baze de date replicate integral", correct: false },
          { text: "Baze de date partiționate, fragmentate sau nereplicate", correct: false },
          { text: "Baze de date centralizate", correct: true },
          { text: "Baze de date replicate parțial sau selectiv", correct: false }
      ]
  },
  {
      text: "În PL/SQL, ce anume se definește de către utilizator, se alocă acelor interogări care returnează mai mult de o singură linie și are un nume personalizat?",
      options: [
          { text: "Un trigger", correct: false },
          { text: "Un cursor implicit", correct: false },
          { text: "Un package", correct: false },
          { text: "Un cursor explicit", correct: true },
          { text: "O variabilă de tip înregistrare", correct: false }
      ]
  },
  {
      text: "Ce este în PL/SQL o zonă de memorie gestionată automat de serverul Oracle alocată la execuția unei instrucțiuni SQL de manipulare sau interogare ce returnează o linie?",
      options: [
          { text: "Un cursor implicit", correct: true },
          { text: "Un package", correct: false },
          { text: "O variabilă de tip înregistrare", correct: false },
          { text: "Un trigger", correct: false },
          { text: "Un cursor explicit", correct: false }
      ]
  },
  {
      text: "În legătură cu gestiunea catalogului în cadrul sistemelor de baze de date distribuite, care abordare are aceste caracteristici: 'Dezavantaj: necesită un trafic și un control al integrității suplimentar; afectează și autonomia siturilor prin această nevoie continuă de propagare a actualizărilor în fiecare sit'",
      options: [
          { text: "Replicare totală", correct: true },
          { text: "Fragmentare", correct: false },
          { text: "Localizare centralizată", correct: false }
      ]
  },
  {
      text: "În legătură cu gestiunea catalogului în cadrul sistemelor de baze de date distribuite, care abordare are aceste caracteristici: 'Nu este o soluție prea agreată pe motivul că încalcă principiul autonomiei și cel al independenței față de un sit central. Fiabilitatea și disponibilitatea sunt puse sub semnul întrebării'",
      options: [
          { text: "Replicare totală", correct: false },
          { text: "Fragmentare", correct: false },
          { text: "Localizare centralizată", correct: true }
      ]
  },
  {
    text: "În legătură cu gestiunea catalogului în cadrul sistemelor de baze de date distribuite, care abordare are aceste caracteristici: 'Această abordare sporește performanțele de prelucrare la distanță ale fragmentării, însă încalcă într-o anumită măsură și independența de situl central'",
    options: [
        { text: "Replicare totală", correct: false },
        { text: "Centralizată și fragmentare", correct: true },
        { text: "Localizare centralizată", correct: false }
    ]
},
{
    text: "Care din următoarele NU reprezintă o limitare a sistemelor de baze de date relaționale?",
    options: [
        { text: "Reprezentarea precară a entităților din lumea reală", correct: false },
        { text: "Set redus de operații", correct: false },
        { text: "Control insuficient al integrității și mecanisme deficitare de gestionare a constrângerilor de întreprindere", correct: false },
        { text: "Gestionarea greoaie a interogărilor recursive", correct: false },
        { text: "Limitarea semantică", correct: false },
        { text: "Spațiul de memorie ocupat", correct: true },
        { text: "Structură de date prea omogenă", correct: false }
    ]
},
{
    text: "Care din următoarele NU reprezintă o etapă a procesului de descompunere a interogărilor în cadrul sistemelor de baze de date distribuite?",
    options: [
        { text: "Simplificarea", correct: false },
        { text: "Normalizarea", correct: false },
        { text: "Analiza semantică", correct: false },
        { text: "Restructurarea interogărilor", correct: false },
        { text: "Optimizarea interogărilor", correct: true },
        { text: "Analiza preliminară", correct: false }
    ]
},
{
    text: "Care din următoarele NU reprezintă o categorie de baze de date NoSQL?",
    options: [
        { text: "Key-Value-stores", correct: false },
        { text: "Document databases", correct: false },
        { text: "Graph", correct: false },
        { text: "Column-Oriented Databases", correct: false },
        { text: "Chart Databases", correct: true }
    ]
},
{
    text: "Care din următoarele NU reprezintă o metodă de proiectare a fragmentării verticale?",
    options: [
        { text: "Gruparea atributelor", correct: false },
        { text: "Partiționarea atributelor", correct: false },
        { text: "Utilizarea predicatelor minterm", correct: true }
    ]
},
{
    text: "Predicatele minterm sunt:",
    options: [
        { text: "conjuncția dintre un predicat simplu și negația acestuia", correct: false },
        { text: "disjuncții de predicate simple sau negații ale acestora", correct: false },
        { text: "conjuncții de predicate simple sau negații ale acestora", correct: true }
    ]
},
{
    text: "Predicatele minterm stau la baza proiectării:",
    options: [
        { text: "Acestea sunt folosite pentru alocare", correct: false },
        { text: "Fragmentării Orizontale", correct: true },
        { text: "Fragmentării Verticale", correct: false },
        { text: "Acestea sunt folosite pentru replicare", correct: false }
    ]
},
{
    text: "În cazul în care avem n predicate simple, câte predicate minterm diferite putem constitui?",
    options: [
        { text: "2n", correct: false },
        { text: "3^n", correct: false },
        { text: "n^2", correct: false },
        { text: "2^n", correct: true }
    ]
},
{
    text: "În prelucrarea distribuită a interogărilor, problema este tratată:",
    options: [
        { text: "Atât la nivel local, cât și la nivel de server", correct: false },
        { text: "Doar la nivel global", correct: false },
        { text: "Atât la nivel global, cât și local", correct: true },
        { text: "Doar la nivel local", correct: false }
    ]
},
{
    text: "Implementarea unui sistem de baze de date pe modelul unei agenții de turism este un exemplu clasic de utilizare a:",
    options: [
        { text: "Bazelor de date centralizate", correct: false },
        { text: "Depozitelor de date", correct: false },
        { text: "Sistemelor distribuite", correct: false },
        { text: "Data mining-ului", correct: false },
        { text: "Bazelor de date federative", correct: true }
    ]
},
{
    text: "'Pentru utilizator, sistemul distribuit trebuie să arate și să se comporte la fel cu unul nedistribuit' este:",
    options: [
        { text: "Principiul transparenței", correct: false },
        { text: "Regula de aur pentru sisteme de baze de date distribuite", correct: true },
        { text: "Principiul distribuirii", correct: false },
        { text: "Principiul autonomiei locale", correct: false }
    ]
},
{
    text: "Care din următoarele anomalii este mai specifică sistemelor de baze de date distribuite?",
    options: [
        { text: "actualizarea pierdută", correct: false },
        { text: "dependența nefinalizată", correct: false },
        { text: "incoerența copiilor multiple", correct: true },
        { text: "analiza inconsistentă", correct: false }
    ]
},
{
    text: "Care din următoarele instrucțiuni SQL nu sunt admise în PL/SQL în mod direct?",
    options: [
        { text: "SELECT", correct: false },
        { text: "Instrucțiuni DML: INSERT, UPDATE și DELETE + MERGE", correct: false },
        { text: "Instrucțiuni de control al tranzacțiilor: COMMIT, ROLLBACK, sau SAVEPOINT", correct: false },
        { text: "Instrucțiuni DDL: CREATE TABLE, ALTER TABLE, DROP TABLE", correct: true }
    ]
},
{
    text: "Care din următoarele instrucțiuni SQL sunt admise în PL/SQL în mod direct?",
    options: [
        { text: "Instrucțiuni DCL: GRANT, REVOKE", correct: false },
        { text: "Instrucțiuni DML: INSERT, UPDATE și DELETE + MERGE", correct: true },
        { text: "Instrucțiuni DDL: CREATE TABLE, ALTER TABLE, DROP TABLE", correct: false }
    ]
},
{
    text: "Interfața vizuală oficială pentru MongoDB este:",
    options: [
        { text: "MongoDB Cloud Manager", correct: false },
        { text: "MongoDB Compass", correct: true },
        { text: "MongoDB Ops Manager", correct: false },
        { text: "MongoDB Enterprise Advanced", correct: false },
        { text: "MongoDB Atlas", correct: false },
        { text: "MongoDB Professional", correct: false }
    ]
},
{
    text: "Motorul de stocare MMAP v1 din MongoDB are următoarele caracteristici, CU EXCEPȚIA:",
    options: [
        { text: "Asigură blocare la nivel de document", correct: true },
        { text: "Permite actualizarea în memoria virtuală", correct: false },
        { text: "Este motorul originar MongoDB", correct: false },
        { text: "Asigură blocare la nivel de colecție", correct: false }
    ]
},
{
    text: "Care din proprietățile de mai jos nu sunt specifice sistemelor de baze de date distribuite?",
    options: [
        { text: "Repartizarea fizică", correct: false },
        { text: "Integrarea fizică", correct: true },
        { text: "Integrarea logică", correct: false }
    ]
},
{
    text: "Care din următoarele NU reprezintă un nivel de replicare în cadrul bazelor de date distribuite?",
    options: [
        { text: "Baze de date partiționate", correct: false },
        { text: "Baze de date replicate integral", correct: false },
        { text: "Baze de date modulare", correct: true },
        { text: "Baze de date replicate parțial sau selectiv", correct: false }
    ]
},
{
    text: "Ce este limbajul PL/SQL?",
    options: [
        { text: "O extensie neprocedurală 3GL Oracle a limbajului SQL (4GL)", correct: false },
        { text: "O extensie procedurală 4GL Oracle a limbajului SQL (3GL)", correct: false },
        { text: "O extensie procedurală 3GL Oracle a limbajului SQL (4GL)", correct: true }
    ]
},
{
    text: "Care din următorii operatori nu există în cadrul framework-ului de agregare din MongoDB?",
    options: [
        { text: "$project", correct: false },
        { text: "$match", correct: false },
        { text: "$select", correct: true },
        { text: "$group", correct: false },
        { text: "$unwind", correct: false },
        { text: "$sort", correct: false },
        { text: "$out", correct: false }
    ]
},
{
    text: "În PL/SQL operatorul de asociere '=>' nu se folosește în modul de pasare:",
    options: [
        { text: "Pozițional", correct: true },
        { text: "Nominal", correct: false },
        { text: "Combinat/Mixt", correct: false }
    ]
},
{
    text: "Care din următoarele NU reprezintă o caracteristică pentru bazele de date NoSQL?",
    options: [
        { text: "Caching Integrat", correct: false },
        { text: "Alocarea", correct: true },
        { text: "Replicarea", correct: false },
        { text: "Scheme dinamice", correct: false },
        { text: "Partiționarea automată", correct: false }
    ]
},
{
    text: "Principiul operării continue în cadrul sistemelor de baze de date distribuite se bazează pe următoarele proprietăți:",
    options: [
        { text: "Disponibilitate și fiabilitate", correct: true },
        { text: "Autonomie și fiabilitate", correct: false },
        { text: "Transparență și fiabilitate", correct: false },
        { text: "Disponibilitate, fiabilitate și optimalitate", correct: false }
    ]
},
{
    text: "'O colecție de date integrate logic, însă repartizate fizic pe nodurile unei rețele de calculatoare' este definiția pentru:",
    options: [
        { text: "O bază de date distribuită", correct: true },
        { text: "Un sistem cu prelucrare distribuită", correct: false },
        { text: "O rețea de calculatoare", correct: false }
    ]
},
{
    text: "'Extragerea datelor reprezintă descoperirea automată a unor tipare netriviale, anterior necunoscute și potențial folositoare, bine înrădăcinate în bazele de date.' este definiția pentru:",
    options: [
        { text: "Baze de date distribuite", correct: false },
        { text: "OLAP", correct: false },
        { text: "Baze de date centralizate", correct: false },
        { text: "Baze de date federative", correct: false },
        { text: "Data mining", correct: true },
        { text: "Cubul de date", correct: false }
    ]
},
{
    text: "Sinteza, analiza și consolidarea dinamică a unor volume vaste de date multidimensionale reprezintă:",
    options: [
        { text: "Prelucrarea analitică on-line", correct: true },
        { text: "OLTP", correct: false },
        { text: "Data mining", correct: false },
        { text: "Big data", correct: false }
    ]
},
{
    text: "Care din următoarele obiective ale MongoDB/bazelor de date NoSQL sunt obligatorii?",
    options: [
        { text: "scheme flexibile", correct: false },
        { text: "eliminarea anomaliilor de actualizare", correct: false },
        { text: "eliminarea redundanței", correct: false },
        { text: "schema bazei de date să fie în strânsă legătură cu logica de programare", correct: true }
    ]
},
{
    text: "Care din următoarele NU sunt motive în favoarea fragmentării?",
    options: [
        { text: "Controlul integrității", correct: true },
        { text: "Uzanța", correct: false },
        { text: "Securitatea", correct: false },
        { text: "Paralelismul", correct: false }
    ]
},
{
    text: "Care din următoarele sunt dezavantaje legate de fragmentare?",
    options: [
        { text: "Uzanța", correct: false },
        { text: "Controlul integrității", correct: true },
        { text: "Paralelismul", correct: false },
        { text: "Securitatea", correct: false }
    ]
},
{
    text: "În PL/SQL acest obiect poate returna unul sau mai mulți parametri:",
    options: [
        { text: "Declanșatorul", correct: false },
        { text: "Funcția", correct: false },
        { text: "Blocul anonim", correct: false },
        { text: "Procedura", correct: true }
    ]
},
{
  text: "Care va fi efectul comenzii db.colectie.find({$or:[{an:{$ne 1990}},{autor:{$eq \"ion\"}}]}).pretty() în MongoDB?",
  options: [
      { text: "afișează publicațiile din 1990 ale autorului Ion", correct: false },
      { text: "afișează atât publicațiile autorului Ion, cât și a celor care nu sunt din 1990", correct: true },
      { text: "afișează atât publicațiile care nu sunt ale autorului Ion, cât și a celor care nu sunt din 1990", correct: false },
      { text: "afișează publicațiile autorului Ion, care nu sunt din 1990", correct: false },
      { text: "afișează atât publicațiile autorului Ion, cât și a celor care sunt din 1990", correct: false }
  ]
},
{
  text: "Care va fi efectul comenzii db.colectie.find({\"an\":1990}, {titlu:0, _id:0}).pretty() în MongoDB?",
  options: [
      { text: "afișează titlul și id-ul pentru publicațiile din 1990", correct: false },
      { text: "find nu permite decât o singură pereche de acolade", correct: false },
      { text: "afișează toate titlurile cu valoarea și id-ul 0 pentru publicațiile din 1990", correct: false },
      { text: "afișează toate câmpurile, excluzând doar titlul și id-ul, pentru publicațiile din 1990", correct: true }
  ]
},
{
  text: "Care va fi efectul comenzii db.colectie.find({\"an\":1990}, {titlu:1, _id:0}).pretty() în MongoDB?",
  options: [
      { text: "find nu permite decât o singură pereche de acolade", correct: false },
      { text: "afișează toate titlurile cu valoarea 1 și id-ul 0 pentru publicațiile din 1990", correct: false },
      { text: "afișează doar titlul, chiar și id-ul este exclus, pentru publicațiile din 1990", correct: true },
      { text: "afișează titlul și id-ul pentru publicațiile din 1990", correct: false }
  ]
},
{
  text: "Care va fi efectul comenzii db.colectie.find({titlu:{$regex: /^Amintiri\\s*/}}) în MongoDB?",
  options: [
      { text: "afișează publicațiile ale căror prim cuvânt din titlu este 'Amintiri'", correct: true },
      { text: "afișează publicațiile ale căror titlu se termină cu cuvântul 'Amintiri'", correct: false },
      { text: "afișează publicațiile care conțin în titlu cuvântul 'Amintiri'", correct: false },
      { text: "afișează publicațiile care nu conțin în titlu cuvântul 'Amintiri'", correct: false }
  ]
},
{
  text: "Care va fi efectul comenzii db.colectie.find({an:{$ne 1990}}).count() în MongoDB?",
  options: [
      { text: "afișează numărul total de publicații din anul 1990", correct: false },
      { text: "afișează numărul total de publicații, cu excepția celor din 1990", correct: true },
      { text: "find nu permite utilizarea împreună cu count", correct: false },
      { text: "afișează numărul de ani scurși până în anul 1990", correct: false },
      { text: "afișează numărul de ani începând din anul 1990 până la data curentă", correct: false }
  ]
},
{
  text: "În MongoDB indicii unici sunt cei care ...",
  options: [
      { text: "Returnează un singur document", correct: false },
      { text: "Se realizează pe baza unei singure chei", correct: false },
      { text: "Au nume unic", correct: false },
      { text: "Conțin în comanda de creare opțiunea {unique:true}", correct: true }
  ]
},
{
  text: "În cadrul unui set de replici din MongoDB, pot exista următoarele tipuri de noduri, dar nu și:",
  options: [
      { text: "Nodul arbitru", correct: false },
      { text: "Nodul întârziat/obișnuit", correct: false },
      { text: "Nodul ascuns", correct: false },
      { text: "Nodul obișnuit (regular)", correct: false },
      { text: "Nodul progresiv", correct: true }
  ]
},
{
  text: "În MongoDB, consistența la scriere este caracterizată de următoarele, dar nu și de ...",
  options: [
      { text: "Aplicația scrie concomitent pe nodul primar, dar și pe cele secundare", correct: true },
      { text: "Citirile se pot efectua fie de pe acesta, fie de pe cele secundare", correct: false },
      { text: "Replicarea e asincronă", correct: false },
      { text: "Aplicația scrie întotdeauna pe nodul primar", correct: false },
      { text: "Poți efectua citirile de pe alte noduri, însă nu ai garanția că ai citit valoarea actualizată", correct: false }
  ]
},
{
  text: "În MongoDB, media și numărul matricol fiind date scalare, comanda db.studenti.createIndex({media:-1, matricol:1}) are ca efect ...",
  options: [
      { text: "Crearea unui index geospatial", correct: false },
      { text: "Nu se creează indicii în felul acesta", correct: false },
      { text: "Crearea unui index după numărul matricol, ignorându-se media", correct: false },
      { text: "Crearea unui index compus", correct: true },
      { text: "Crearea unui index multiplu", correct: false },
      { text: "Crearea unui index simplu", correct: false }
  ]
},
{
  text: "În MongoDB se realizează o operațiune de actualizare, dar datorită unei erori de rețea nu se primește confirmarea efectuării operațiunii în cauză. În ce condiții reluarea actualizării nu afectează integritatea bazei de date?",
  options: [
      { text: "Atunci când actualizarea folosește operatorul $inc", correct: false },
      { text: "Atunci când actualizarea e realizată prin intermediul unei ștergeri și inserări", correct: true },
      { text: "Atunci când actualizarea se face relativ la valori curente ale cheilor", correct: false }
  ]
},
{
  text: "În MongoDB sunt valabile următoarele afirmații despre indicii multicheie, CU EXCEPȚIA:",
  options: [
      { text: "Nu se pot crea indici compuși dacă avem mai mult de o cheie de tip array", correct: false },
      { text: "Se folosesc atunci când una din valorile cheilor este de tip array", correct: false },
      { text: "Se folosesc atunci când mai mult de una din valorile cheilor este de tip array", correct: true },
      { text: "Dacă atunci când cream indexul, cheia sau cheile sunt doar valori scalare, atunci nu vom avea index multicheie, însă acesta se va transforma într-un astfel de index atunci când facem prima inserare/actualizare și folosim un array în loc de valoare scalară la una dintre cheile de indexare", correct: false }
  ]
},
{
  text: "În MongoDB, următoarele aserțiuni sunt adevărate, CU EXCEPȚIA:",
  options: [
      { text: "La procesul 'electoral' participă majoritatea nodurilor inițiale", correct: false },
      { text: "Dacă după cădere își revine, vechea replică primară va deveni replică secundară", correct: false },
      { text: "Un nod este replica primară, iar aplicația se conectează doar la acest nod", correct: false },
      { text: "În cazul în care replica primară cade, dintre cele rămase se alege altul ca fiind primar, celelalte fiind secundare", correct: false },
      { text: "Dacă după cădere își revine, vechea replică primară o înlocuiește pe cea actuală, cea din urmă devenind secundară", correct: true },
      { text: "Numărul minim de replici e 3", correct: false }
  ]
},
{
  text: "Legat de modelarea relațiilor arborescente în MongoDB, care din următoarele NU reprezintă un design-pattern cunoscut?",
  options: [
      { text: "Modelarea arborelui prin referențierea părintelui", correct: false },
      { text: "Modelarea prin liste de ancestori", correct: false },
      { text: "Modelarea arborelui prin clasificarea zecimală a nodurilor", correct: false },
      { text: "Modelarea arborelui prin căi materializate", correct: false },
      { text: "Modelarea arborelui prin referențierea copilului", correct: false },
      { text: "Modelarea arborelui prin submulțimi de coordonate", correct: false },
      { text: "Modelarea arborelui prin referențierea nodurilor-frunză", correct: true }
  ]
},
{
  text: "Recompunerea relației inițiale fragmentată mixt, se realizează prin operatorul de:",
  options: [
      { text: "Reuniune și restricție", correct: false },
      { text: "Uniune și reuniune", correct: true },
      { text: "Proiecție și uniune", correct: false },
      { text: "Restricție și proiecție", correct: false }
  ]
},
{
  text: "Serviciul de replicare în MongoDB este controlat de ...",
  options: [
      { text: "mongos", correct: false },
      { text: "mongod", correct: true },
      { text: "mongop", correct: false },
      { text: "mongo", correct: false },
      { text: "mongom", correct: false },
      { text: "mongor", correct: false }
  ]
},
{
  text: "Clientul de baze de date MongoDB este ...",
  options: [
      { text: "mongod", correct: false },
      { text: "mongo", correct: true },
      { text: "mongos", correct: false },
      { text: "mongor", correct: false },
      { text: "mongop", correct: false },
      { text: "mongom", correct: false }
  ]
},
{
  text: "Gestiunea partițiilor orizontale în MongoDB sunt gestionate de către serviciul:",
  options: [
      { text: "mongop.exe", correct: false },
      { text: "mongod.exe", correct: false },
      { text: "mongos.exe", correct: true },
      { text: "mongo.exe", correct: false }
  ]
},
{
  text: "Conceptul de Big Data are la bază caracteristicile cunoscute sub acronimul:",
  options: [
      { text: "4V", correct: true },
      { text: "BDB", correct: false },
      { text: "4B", correct: false },
      { text: "5V", correct: false },
      { text: "4D", correct: false }
  ]
},
{
  text: "Dezvoltarea de sisteme SGBDOO NU se poate realiza prin următoarea metodă:",
  options: [
      { text: "Încapsularea construcțiilor specifice unui limbaj obiectual într-un SGBDR", correct: true },
      { text: "Extinderea unui limbaj de date convențional cu facilități obiectuale", correct: false },
      { text: "Crearea unei extensii spre baze de date pentru un limbaj de programare OO", correct: false },
      { text: "Punerea la dispoziție a unor biblioteci pentru gestiunea bazelor de date", correct: false },
      { text: "Proiectarea din temelii a unui limbaj de gestiune a bazelor de date", correct: false },
      { text: "Încapsularea construcțiilor specifice bazelor de date obiectuale într-un limbaj gazdă", correct: false }
  ]
},
{
  text: "Care din următoarele comenzi deschide serverul de baze de date, pe baza de date din directorul D:\\MongoData?",
  options: [
      { text: "D:\\MongoDB\\bin\\mongos.exe --dbpath D:\\MongoData", correct: false },
      { text: "D:\\MongoDB\\bin\\mongo.exe --dbpath D:\\MongoData", correct: false },
      { text: "D:\\MongoDB\\bin\\mongod.exe --dbpath D:\\MongoData", correct: true }
  ]
},
{
  text: "Care din următoarele comenzi MongoDB afișează în format BSON documentele găsite?",
  options: [
      { text: "db.catedra.find().BSON()", correct: false },
      { text: "db.catedra.pretty().find()", correct: false },
      { text: "db.catedra.show().pretty()", correct: false },
      { text: "db.catedra.find().pretty()", correct: true },
      { text: "db.catedra.show().BSON()", correct: false }
  ]
}
];