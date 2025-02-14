const allQuestionsMedii = [
  {
    text: "Care din urmatoarele afirmatii sunt adevarate intr-o aplicatie ASP.NET Core realizata cu pagini Razor?",
    options: [
      { text: "Autorizarea se refera la procesul care permite anumite actiuni unui utilizator neautentificat", correct: false },
      { text: "Pentru a autoriza accesului unui utilizator intr-o pagina utilizam atributul [AUTHORIZE] pentru metoda care necesita autorizare", correct: false },
      { text: "Autorizarea se refera la procesul care permite anumite actiuni unui utilizator autentificat", correct: true },
      { text: "In aceeasi aplicatie putem avea pagini cu acces anonim si pagini cu acces autorizat", correct: true }
    ]
  },
  {
    text: "Care din urmatoarele declanseaza executia imediata pentru interogarile LINQ?",
    options: [
      { text: "Apelul metodei ToDictionary()", correct: true },
      { text: "Apelul metodei ToArray()", correct: true },
      { text: "Apelul metodei ToList()", correct: true }
    ]
  },
  {
    text: "Care din urmatoarele directive Razor indica clasa utilizata pentru transmiterea de date?",
    options: [
      { text: "@page", correct: false },
      { text: "@inherits", correct: false },
      { text: "@using", correct: false },
      { text: "@model", correct: true }
    ]
  },
  {
    text: "Care din urmatoarele afirmatii este adevarata referitor la Validation Message TagHelper?",
    options: [
      { text: "Este utilizat cu atributul asp-validation-for a unui element HTML", correct: true },
      { text: "Afiseaza un mesaj de validare pentru proprietatea aferenta", correct: true },
      { text: "Este utilizat dupa un tag helper input pentru aceasi propietate", correct: true }
    ]
  },
  {
    text: "Care din urmatoarele nu reprezinta o adnotare in Entity Framework",
    options: [
      { text: "Required", correct: false },
      { text: "NotMapped", correct: false },
      { text: "ForeignKey", correct: false },
      { text: "PrimaryKey", correct: true },
    ]
  },
  {
    text: "Care din urmatoarele afirmatii sunt adevarate referitoare la serviciile REST?",
    options: [
      { text: "Raspunsul primit de la server in urma unei cereri este o resursa in format .json", correct: true },
      { text: "Raspunsul primit de la server in urma unei cereri este o resursa in format .xml si cod executabil.", correct: true },
      { text: "Raspunsul unei cereri depende de cererea anterioara.", correct: false },
      { text: "Raspunsul unei cereri va fi o copie din cache daca exista un cache valid", correct: true },
    ]
  },
  {
    text: "Care din urmatoarele afirmatii nu este adevarata referitor la mecanismul ASP.NET dependency injection?",
    options: [
      { text: "Dependency injection ofera o cuplare puternica a componentelor din aplicatie", correct: true },
      { text: "Niciuna din variante", correct: false },
      { text: "Dependency injection separa contractul serviciului de implementarea serviciului", correct: false },
      { text: "Dependency injection utilizeaza constructori care au argumente de tip interfata", correct: false }
    ]
  },
  {
    text: "Care din urmatoarele reprezinta stari ale entitatile in Entity Framework?",
    options: [
      { text: "Detached", correct: true },
      { text: "Changed", correct: false },
      { text: "Unchanged", correct: true },
      { text: "Added", correct: true }
    ]
  },
  {
    text: "Care din urmatoarele afirmatii este adevarata",
    options: [
      { text: "Tag Helpers foloses limbaj C#", correct: false },
      { text: "Toate variantele", correct: true },
      { text: "Experienta de dezvoltare cu Tag Helpers este similara cu HTML", correct: false },
      { text: "Tag Helpers permit codului de tip server-side sa participle la crearea si afisarea elementelor HTML", correct: false }
    ]
  },
  {
    text: "In .NET MAUI, o clasa Shell poate contine elementele:",
    options: [
      { text: "FlyoutBar", correct: false },
      { text: "TabBar", correct: true },
      { text: "TabItem", correct: false },
      { text: "ShellContent", correct: true }
    ]
  },
  {
    text: "Care dintre urmatoarele afirmatii sunt adevarate despre DataBinding?",
    options: [
      { text: "Ofera aplicatiei o metoda consistenta de a gasi si interactiona cu datele", correct: true },
      { text: "Cand datele din sursa de date isi schimba valoarea, elementele care sunt link-uite (legate) acelor date se schimba automat", correct: true },
      { text: "Cand datele sunt schimbate in elemetele de interfata, sursa datelor poate sa se schimbe automat pentru a reflecta schimbarile", correct: true }
    ]
  },
  {
    text: "In aplicatiile facute cu Razor Pages directiva addTagHelper...",
    options: [
      { text: "Este adaugata in _ViewImports.cshtml file", correct: true },
      { text: "Are efectul de a crea un TagHelper customizat", correct: false },
      { text: "Este adaugat in _Layout.cshtml file", correct: false },
      { text: "Are efectul ca TagHelper-ii devin disponibili/vizibili in paginile aplicatiei", correct: true }
    ]
  },
  {
    text: "Care din urmatoarele afirmatii sunt adevarate privind executia interogarile LINQ?",
    options: [
      { text: "Executia amanata se refera la faptul ca interogarea/query-ul este executat cand metoda ToList() este apelata", correct: false },
      { text: "Executia amanata se refera la faptul ca interogarea este executata cand variabila tipului interogarii este iterata", correct: true },
      { text: "Executia imediata se refera la faptul ca interogarea este executata cand metoda ToArray este apelata", correct: true },
      { text: "Executia imediata se refera la faptul ca interogarea este executata in momentul in care se face conectarea la baza de date", correct: false }
    ]
  },
  {
    text: "In EF ca sa ai o relatie completa intre doua entitati:",
    options: [
      { text: "Definim navigation properties in entitatea principala si in cea dependenta si o cheie straina in entitatea principala", correct: false },
      { text: "Definim navigation properties in entitatea principala si in cea dependenta si o cheie straina in entitatea dependenta", correct: true },
      { text: "Definim navigation properties in entitatea principala si in cea dependenta si o cheie primara in entitatea principala", correct: false },
      { text: "Definim navigation properties in entitatea principala si in cea dependenta, o cheie straina in entitatea dependenta si o cheie primara in entitatea principala", correct: false }
    ]
  },
  {
    text: "Care dintre afirmatiile urmatoare sunt adevarate privind extensia XAML markup?",
    options: [
      { text: "Este o cale de a exprima atributul unui element", correct: true },
      { text: "Valoarea atributului anexat (enclosed) foloseste simbolurile(} este o extensie XAML markup", correct: true },
      { text: "Custom XAML markup extension nu poate fi definit", correct: false },
    ]
  },
  {
    text: "Care dintre afirmatiile urmatoare sunt adevarate privind Behaviours in .NET MAUI?",
    options: [
      { text: "Pot fi folosite pentru a crea reguli de validare", correct: true },
      { text: "Pentru a crea Behaviours trebuie sa suprascriem (override) metoda OnAttachedTo si metoda OnDetachingFrom", correct: true },
      { text: "Nu dau voie functionalitatilor aditionale sa preia controlul interfetei", correct: true },
      { text: "Pentru a crea Behaviours trebuie sa suprascriem metoda OnAttachedFrom si metoda OnDetachingTo", correct: false },
    ]
  },
  {
    text: "Care din urmatoareele tipuri de autorizari pot fi folosite intr-o aplicatie .NET Core?",
    options: [
      { text: "Role-based authorization", correct: true },
      { text: "Credential-base authorization", correct: false },
      { text: "Autorizarea bazata pe Authorize attribute", correct: true },
      { text: "Autorizarea pana la conventie", correct: true },
    ]
  },
  {
    text: "Care dintre urmatoarele afirmatii sunt adevarate referitor la aplicatiile .NET MAUI?",
    options: [
      { text: "Fisierul App.xaml.cs contine resurse XAML la nivel the aplicatie", correct: false },
      { text: "Fisierul App.xaml contine cod care instantiaza aplicatia Shell", correct: false },
      { text: "Fisierul AppShell.xaml defineste ierarhia vizuala si a aplicatiei", correct: true },
    ]
  },
  {
    text: "Navigation URLs in aplicatiile .NET MAUI pot contine:",
    options: [
      { text: "Query parameters", correct: true },
      { text: "Routing parameters", correct: false },
      { text: "A route from the hierachy", correct: true },
      { text: "A details page", correct: true },
    ]
  },
  {
    text: "Care dintre urmatoarele nu este o adnotare in Entity Framework?",
    options: [
      { text: "NotMapped", correct: false },
      { text: "PrimaryKey", correct: true },
      { text: "Required", correct: false },
      { text: "ForeignKey", correct: false },
    ]
  },
  {
    text: "Care dintre urmatoarele afirmatii sunt adevarate despre Razor Pages?",
    options: [
      { text: "Pagina wewStart aduce o privire unitara pentru toata aplicatia", correct: false },
      { text: "Pagina Layout aduce o privire unitara pentru toata aplicatia", correct: true },
      { text: "@RenderBody() placeholder allows displaying specific content for each page", correct: true },
      { text: "@Body() placeholder allows displaying specific content for page friction", correct: false },
    ]
  },
  {
    text: "Care dintre urmatoarele afirmatii sunt adevarate despre REST services?",
    options: [
      { text: "Raspunsul primit de la server urmand o cerere este o resursa in format .json", correct: true },
      { text: "Raspunsul primit de la server urmand o cerere este o resursa in format .xml si cod executabil", correct: true },
      { text: "Raspunsul unei cereri depinde de cererea anterioara", correct: false },
      { text: "Raspunsul unei cereri va fi copiat din cache daca exista cache valid", correct: true },
    ]
  },
  {
    text: "Care dintre urmatoarele reprezinta starile entitatilor in Entity Framework?",
    options: [
      { text: "Detached", correct: true },
      { text: "Changed", correct: false },
      { text: "Unchanged", correct: true },
      { text: "Added", correct: true },
    ]
  },
  {
    text: "Care dintre urmatoarele afirmatii sunt adevarate privind navigarea in aplicatiile .Net Maui?",
    options: [
      { text: "Navigarea este facuta invocand metoda GoToAsync", correct: true },
      { text: "Cand navigarea este completa, evenimetul Navigating este declansat", correct: false },
      { text: "Navigarea este facuta invocand metoda PushAsync", correct: true },
    ]
  },
  {
    text: "Care dintre urmatoarele afirmatii sunt adevarate privind DataBinding",
    options: [
      { text: "Foloseste un event handler care transfera datele de la un obiect la altul", correct: true },
      { text: "DataBinding targheteaza obiectele care pot fi obiecte UI", correct: true },
      { text: "Directia datelor este mereu de la susrsa obiectului la obiectul targhetat", correct: false },
    ]
  },
  {
    text: "Care din urmatoarele reprezinta tipuri de data binding",
    options: [
      { text: "OneWay", correct: true },
      { text: "TwoWayToSource", correct: false },
      { text: "OneWayToSource", correct: true },
      { text: "TwoWay", correct: true },
    ]
  },
  {
    text: "Care din urmatoarele reprezinta tipuri de data binding",
    options: [
      { text: "OneWay", correct: true },
      { text: "TwoWayToSource", correct: false },
      { text: "OneWayToSource", correct: true },
      { text: "TwoWay", correct: true },
    ]
  },
  {
    text: "Care din urmatoarele directive Razor indica clasa folosita pentru colectiile de date?",
    options: [
      { text: "@model", correct: true },
      { text: "@inherits", correct: false },
      { text: "@using", correct: false },
      { text: "@page", correct: false },
    ]
  },
  {
    text: "Care dintre urmatoarele afirmatii sunt adevarate in Entity Framework privind incarcarea datelor in entitati?",
    options: [
      { text: "Este apelata incarcarea Eager (Eager loading) cand o interogare pentru o anumita entitate incarca entitati asociate ca parte si aceleasi interogari", correct: true },
      { text: "Este apelata incarcarea Explicit (Explicit loading) cand o interogare pentru o anumita entitate incarca entitati asociate ca parte a aceleasi interogari", correct: false },
      { text: "Eager test se efectueaza folosind metoda Include()", correct: true },
      { text: "Explicit loading is done folosind metoda Include()", correct: false },
    ]
  },
  {
    text: "Care dintre urmatoarele afirmatii sunt adevarate cand folosim Entity Framework",
    options: [
      { text: "Cand metoda Save() este apelata, inregistrarea este salvata in baza de date", correct: false },
      { text: "Cand metoda SaveChanges() este apelata, instructiunile SQL sunt generate pentru new records", correct: false },
      { text: "Salvarea inregistrarii in baza de date este facuta cand metoda SaveChanges() este apelata", correct: true },
      { text: "Salvarea inregistrarii in baza de date este facuta cand metoda Add() este apelata", correct: false },
    ]
  },
  {
    text: "Care din urmatoarele afirmatii este adevarata referitor la XAML?",
    options: [
      { text: "Separa designul de logica aplicatiei", correct: true },
      { text: "Instrumente precum Blend nu suporta XAML", correct: false },
      { text: "XAML este independent platforma", correct: false },
      { text: "Toate variantele de mai sus", correct: false },
    ]
  },
  {
    text: "Care din urmatoarele afirmatii este adevarata?",
    options: [
      { text: "eXtensible Application Markup Language este un limbaj declarativ", correct: false },
      { text: "fiecare element din XAML reprezinta o clasa in .NET", correct: false },
      { text: "atributele intr-un fisier XAML reprezinta o proprietate, metoda sau eveniment in cadrul unei clase .NET", correct: false },
      { text: "Toate variantele de mai sus", correct: true },
    ]
  },
  {
    text: "Care din urmatoarele afirmatii sunt adevarate referitor la pagina Razor",
    options: [
      { text: "pagina Layout furnizeaza un Layout unitar pentru intreaga aplicatie", correct: false },
      { text: "pagina Layout permite containerului HTML pentru layout sa fie specificat intr-un singur loc", correct: false },
      { text: "pagina Layout permite containerului HTML pentru layout sa fie utilizat pentru pagini multiple", correct: false },
      { text: "Toate variantele de mai sus", correct: true },
    ]
  },
  {
    text: "Obiectele de tipul ICollectionView suporta:",
    options: [
      { text: "Sortare", correct: false },
      { text: "Filtrare", correct: false },
      { text: "Grupare", correct: false },
      { text: "Toate variantele de mai sus", correct: true },
    ]
  },
  {
    text: "Care este prima directiva care apare intr-o pagina Razor?",
    options: [
      { text: "@model", correct: false },
      { text: "@inherits", correct: false },
      { text: "@page", correct: true },
      { text: "@namespace", correct: false },
    ]
  },
  {
    text: "Care din urmatoarele nu reprezinta un mecanism de gestiune a starii in ASP.Net Core?",
    options: [
      { text: "Cookies", correct: false },
      { text: "TempData", correct: false },
      { text: "QueryState", correct: true },
      { text: "Hidden Fields", correct: false },
    ]
  },
];