// Card data - State Cards
const stateCards = [
    {
        id: 1,
        title: "Podwójna świadomość",
        simpleDescription: "Bądź jednocześnie sobą i postacią, którą grasz.",
        advancedDescription: "Utrzymuj jednocześnie pełną świadomość siebie jako improwizatora i postaci, którą tworzysz. Pozwól, by granica między tymi wymiarami stawała się przepuszczalna.",
        simpleExercise: "W trakcie sceny, co 30 sekund przełączaj się między \"aktorem\" a \"postacią\" - nie przerywając działania.",
        advancedExercise: "Improwizując scenę, co 30 sekund płynnie przechodź między \"ja-aktorem\" a \"ja-postacią\", nie przerywając akcji. Obserwuj jak te dwie świadomości wzajemnie się przenikają."
    },
    {
        id: 2,
        title: "Słuchające ciało",
        simpleDescription: "Pozwól swojemu ciału reagować, zanim pomyślisz.",
        advancedDescription: "Przenieś punkt percepcji z głowy do całego ciała. Pozwól, by ciało \"słuchało\" przestrzeni i innych aktorów, reagując bezpośrednio, zanim pojawi się myśl.",
        simpleExercise: "Improwizuj z zamkniętymi oczami, reagując ciałem na dźwięki i ruch wokół ciebie.",
        advancedExercise: "Improwizuj z zamkniętymi oczami, pozwalając ciału prowadzić interakcję. Otwórz oczy dopiero po minucie. Zwróć uwagę na różnicę w jakości ruchu przed i po otwarciu oczu."
    },
    {
        id: 3,
        title: "Rozszerzona teraźniejszość",
        simpleDescription: "Bądź całkowicie tu i teraz, pamiętając co było i wyczuwając co będzie.",
        advancedDescription: "Zanurz się całkowicie w teraźniejszym momencie, jednocześnie utrzymując świadomość tego, co właśnie minęło i co może nastąpić. Doświadcz teraźniejszości jako rozciągniętej w czasie.",
        simpleExercise: "Podczas improwizacji, co 15 sekund przypomnij sobie dokładnie co się wydarzyło 10 sekund temu.",
        advancedExercise: "W trakcie improwizacji, utrzymuj w świadomości dokładnie to, co wydarzyło się 10 sekund temu, jednocześnie będąc w pełni obecnym i wyczuwając możliwe kierunki rozwoju akcji."
    },
    {
        id: 4,
        title: "Zawieś ocenianie",
        simpleDescription: "Nie oceniaj tego co się dzieje jako dobre czy złe - po prostu przyjmuj wszystko.",
        advancedDescription: "Zawieś automatyczne ocenianie i kategoryzowanie doświadczeń jako dobre/złe, interesujące/nudne, właściwe/niewłaściwe. Praktykuj radykalną akceptację wszystkiego, co się pojawia.",
        simpleExercise: "Improwizuj scenę, w której każdy \"błąd\" czy zaskoczenie traktujesz jako wartościową możliwość.",
        advancedExercise: "Improwizuj scenę, w której wszystko, co się wydarza – każdy błąd, potknięcie, zaskoczenie – jest traktowane jako cenny dar i możliwość, a nie przeszkoda. Obserwuj, jak zmienia się twoje wewnętrzne nastawienie."
    },
    {
        id: 5,
        title: "Przezroczyste wnętrze",
        simpleDescription: "Pokazuj publiczności swoje prawdziwe myśli i uczucia podczas gry.",
        advancedDescription: "Pozwól, by twój wewnętrzny monolog, impulsy, wahania i reakcje stały się widoczne dla publiczności, jednocześnie utrzymując dramaturgiczną integralność sceny.",
        simpleExercise: "Co jakiś czas zatrzymaj scenę i powiedz na głos, co naprawdę myślisz jako aktor.",
        advancedExercise: "Improwizuj scenę, w której co 20 sekund \"zamrażasz\" akcję i wyrażasz głośno swoje wewnętrzne myśli jako aktor, po czym wracasz do improwizacji, jakby przerwy nie było."
    },
    {
        id: 6,
        title: "Kontrola i poddanie",
        simpleDescription: "Przełączaj się między prowadzeniem akcji a poddawaniem się jej.",
        advancedDescription: "Eksploruj napięcie między aktywnym kształtowaniem improwizacji a poddawaniem się jej emergentnej dynamice. Praktykuj świadome przełączanie się między tymi modalnościami.",
        simpleExercise: "Zacznij scenę kontrolując wszystko, potem stopniowo oddawaj kontrolę, aż całkowicie poddasz się temu, co się dzieje.",
        advancedExercise: "Rozpocznij improwizację z pełną kontrolą nad jej kierunkiem, następnie stopniowo oddawaj kontrolę, aby ostatecznie całkowicie poddać się jej nurtowi, obserwując wewnętrzne zmiany w twoim doświadczeniu."
    },
    {
        id: 7,
        title: "Widzenie peryferyjne",
        simpleDescription: "Zamiast skupiać się na jednym punkcie, bądź świadomy całej przestrzeni wokół.",
        advancedDescription: "Przesuń swoją uwagę z centrum na peryferie pola percepcji. Bądź świadomy całości przestrzeni, wykorzystując widzenie peryferyjne i rozproszoną uwagę słuchową.",
        simpleExercise: "Improwizuj utrzymując wzrok lekko rozmazany, reagując na ruch z brzegu pola widzenia.",
        advancedExercise: "Improwizując, utrzymuj główny punkt skupienia wzroku rozmazany, a uwagę rozproszoną na całej przestrzeni. Reaguj na impulsy pochodzące z peryferii twojego postrzegania."
    },
    {
        id: 8,
        title: "Zmiana intensywności",
        simpleDescription: "Graj z różnymi poziomami intensywności swojej obecności scenicznej.",
        advancedDescription: "Świadomie moduluj intensywność swojej obecności scenicznej, eksplorując pełne spektrum od ledwie wyczuwalnej obecności po maksymalną ekspresję. Praktykuj płynne przejścia między tymi stanami.",
        simpleExercise: "Ustal skalę od 1 do 10 i improwizuj zmieniając poziomy intensywności.",
        advancedExercise: "Stwórz skalę intensywności od 1 do 10. Improwizując scenę, przesuwaj się świadomie po różnych poziomach intensywności, eksplorując nieoczywiste kombinacje (np. bardzo cicha mowa połączona z intensywnym ruchem)."
    },
    {
        id: 9,
        title: "Czujące ciało",
        simpleDescription: "Wyczuwaj najmniejsze sygnały swojego ciała i reaguj na nie.",
        advancedDescription: "Wyostrz świadomość najsubtelniejszych doznań cielesnych – mikro-napięć, przepływu energii, zmian w oddechu. Wykorzystaj te minimalne sygnały jako impulsy do działania.",
        simpleExercise: "Przed improwizacją spędź minutę na skanowaniu odczuć swojego ciała, potem pozwól tym odczuciom prowadzić twoją grę.",
        advancedExercise: "Przed rozpoczęciem improwizacji, wykonaj skan ciała, a następnie pozwól, by najdrobniejsze doznania somatyczne kierowały twoimi decyzjami scenicznymi."
    },
    {
        id: 10,
        title: "Pole możliwości",
        simpleDescription: "W każdym momencie wyobraź sobie różne możliwe drogi rozwoju sceny.",
        advancedDescription: "Doświadcz każdego momentu improwizacji jako pola nieskończonych możliwości, które zapadają się w konkretną rzeczywistość dopiero w momencie działania. Utrzymuj świadomość alternatywnych ścieżek.",
        simpleExercise: "W kluczowych momentach sceny zatrzymaj się na sekundę i pomyśl o trzech różnych możliwych kontynuacjach.",
        advancedExercise: "W kluczowych momentach improwizacji, zatrzymaj się na krótką chwilę i wyobraź sobie różne możliwe kontynuacje, zanim wybierzesz jedną z nich. Utrzymuj świadomość tych niewykorzystanych możliwości."
    },
    {
        id: 11,
        title: "Obserwator wewnętrzny",
        simpleDescription: "Obserwuj siebie podczas gry tak, jakbyś patrzył na siebie z boku.",
        advancedDescription: "Bądź świadomy swojej świadomości. Obserwuj siebie obserwującego. Stwórz wewnętrznego meta-obserwatora, który rejestruje nie tylko zewnętrzne wydarzenia, ale również twoje wewnętrzne procesy.",
        simpleExercise: "Graj scenę jednocześnie będąc w niej i obserwując siebie z dystansu.",
        advancedExercise: "Improwizując, utrzymuj jednocześnie trzy poziomy świadomości: zaangażowanie w akcję, obserwację siebie w akcji oraz obserwację siebie obserwującego."
    },
    {
        id: 12,
        title: "Stan przejściowy",
        simpleDescription: "Bądź \"pomiędzy\" - między jednym stanem a drugim, jedną tożsamością a drugą.",
        advancedDescription: "Eksploruj stany progowe, przejściowe, będące \"pomiędzy\" ustalonymi kategoriami – między rolami, tożsamościami, emocjami, stanami świadomości. Zamieszkuj te przestrzenie graniczne.",
        simpleExercise: "Stwórz postać, która jest w trakcie przemiany (np. między życiem a śmiercią, między jawą a snem).",
        advancedExercise: "Stwórz postać, która znajduje się w stanie przejściowym (między życiem a śmiercią, między jawą a snem, między jedną tożsamością a drugą) i eksploruj tę liminalną przestrzeń."
    },
    {
        id: 13,
        title: "Otwartość na wszystko",
        simpleDescription: "Przyjmuj z wdzięcznością wszystko co przychodzi z zewnątrz podczas improwizacji.",
        advancedDescription: "Praktykuj ekstremalną otwartość na to, co przychodzi z zewnątrz – od partnerów, przestrzeni, publiczności. Traktuj każdy bodziec jako dar, który można twórczo przetworzyć.",
        simpleExercise: "Improwizuj bez planu, reagując tylko na to, co otrzymujesz od innych i od przestrzeni.",
        advancedExercise: "Rozpocznij improwizację bez żadnego prekonceptualizowanego planu, reagując wyłącznie na to, co przychodzi do ciebie od zewnątrz, traktując każdy impuls jako zaproszenie."
    },
    {
        id: 14,
        title: "Zmieniające się wzory",
        simpleDescription: "Patrz na scenę jak na kalejdoskop - te same elementy układają się ciągle w nowe wzory.",
        advancedDescription: "Doświadczaj rzeczywistości improwizacyjnej jako ciągle zmieniającego się wzoru, gdzie te same elementy układają się w nowe konstelacje znaczeń i relacji. Bądź świadomy tych rekonfiguracji.",
        simpleExercise: "Co jakiś czas spójrz na scenę w nowy sposób, odkrywając nowe połączenia między istniejącymi elementami.",
        advancedExercise: "W trakcie improwizacji, co jakiś czas mentalnie \"przekręć kalejdoskop\", szukając nowych wzorów i połączeń między istniejącymi elementami."
    },
    {
        id: 15,
        title: "Poza słowami",
        simpleDescription: "Doświadczaj i działaj bez nazywania tego w myślach słowami.",
        advancedDescription: "Wykraczaj poza granice myślenia językowego, eksplorując modalności świadomości, które nie są zapośredniczone przez słowa ani konceptualne kategorie.",
        simpleExercise: "Improwizuj stopniowo wyciszając wewnętrzny dialog, aż osiągniesz stan działania bez wewnętrznego komentarza.",
        advancedExercise: "Przeprowadź improwizację, w której stopniowo wycofujesz się z myślenia werbalnego, aż do osiągnięcia stanu, w którym działasz bez wewnętrznej narracji słownej."
    }
];

// Struktura dla pozostałych kategorii kart - na razie puste ale przygotowane do wypełnienia
const relationCards = [
    {
        id: 1,
        title: "Czuję co czujesz",
        simpleDescription: "Wyczuwaj emocje partnerów bez słów i reaguj na nie.",
        advancedDescription: "Dostraj się do subtelnych sygnałów emocjonalnych partnerów. Pozwól, by emocje przepływały między wami bez konieczności ich werbalizowania czy odgrywania.",
        simpleExercise: "Zagraj scenę komunikując się tylko poprzez zmiany emocji, bez nazywania ich.",
        advancedExercise: "Improwizuj scenę, w której komunikujesz się wyłącznie poprzez zmiany w intensywności i jakości emocji, bez nazywania ich. Pozwól emocjom przepływać między tobą a partnerami jak fale."
    },
    {
        id: 2,
        title: "Podaj dalej",
        simpleDescription: "Wszystko co wprowadza jedna osoba, musi zostać podchwycone przez innych.",
        advancedDescription: "Każdy impuls narracyjny wysłany przez jednego aktora jest podchwytywany i rozwijany przez innych, tworząc efekt kaskady narracyjnej.",
        simpleExercise: "Gdy ktoś wprowadza nowy element, co najmniej dwie osoby muszą go wykorzystać zanim pojawi się coś nowego.",
        advancedExercise: "W grupowej improwizacji, każdy nowy element wprowadzony przez aktora musi zostać podchwycony i rozwinięty przez co najmniej dwóch innych, zanim pojawi się kolejny."
    },
    {
        id: 3,
        title: "Mieszanie zamiarów",
        simpleDescription: "Miej własny plan, ale pozwól by zmieniał się pod wpływem innych.",
        advancedDescription: "Działaj z wyraźną intencją, jednocześnie pozostając otwarty na to, by intencje innych modyfikowały twoje działania. Pozwól, by z tego splecenia wyłoniło się coś nieoczekiwanego.",
        simpleExercise: "Rozpocznij z sekretnym celem, ale pozwól mu się zmieniać w trakcie interakcji z innymi.",
        advancedExercise: "Każdy aktor rozpoczyna z sekretną intencją. W miarę rozwoju improwizacji, pozwólcie, by wasze intencje stopniowo się ujawniały i transformowały pod wpływem innych."
    },
    {
        id: 4,
        title: "Rozmowa przestrzenią",
        simpleDescription: "Komunikuj się przez zmianę pozycji i odległości między osobami, bez słów.",
        advancedDescription: "Traktuj przestrzeń między improwizatorami jako aktywne pole dialogiczne, w którym relacje kształtują się poprzez napięcia, odległości i konstelacje ciał. Bądź świadomy przestrzennej dynamiki.",
        simpleExercise: "Stwórz scenę używając tylko ruchu w przestrzeni - zbliżania się, oddalania, otaczania.",
        advancedExercise: "Improwizuj tak, by zmiany w przestrzennych relacjach (zbliżanie się, oddalanie, otaczanie, przecinanie ścieżek) tworzyły dramaturgię sceny, bez polegania na dialogu werbalnym."
    },
    {
        id: 5,
        title: "Jeden organizm",
        simpleDescription: "Cała grupa działa jak jedno ciało o wielu częściach.",
        advancedDescription: "Doświadcz grupy improwizujących jako jednego, wieloczłonowego organizmu, gdzie działania indywidualne są aspektami kolektywnego ruchu. Praktykuj myślenie i czucie \"jako grupa\".",
        simpleExercise: "Poruszajcie się razem jak jedno ciało, dzieląc wspólny oddech i puls.",
        advancedExercise: "Grupa porusza się jak jeden organizm, dzieląc wspólny oddech i puls. Stopniowo ten kolektywny ruch ewoluuje w bardziej złożoną improwizację, przy zachowaniu świadomości wspólnego ciała."
    },
    {
        id: 6,
        title: "Mowa bez słów",
        simpleDescription: "Komunikuj się bez używania słów, tylko pozawerbalnymi sygnałami.",
        advancedDescription: "Eksploruj kanały komunikacji wykraczające poza słowa – mikroekspresje, zmiany w napięciu mięśniowym, synchronizację oddechową, dynamikę przestrzenną. Rozwijaj wrażliwość na te subtelne sygnały.",
        simpleExercise: "Zagraj całą scenę bez użycia słów, komunikując się tylko ciałem i dźwiękami.",
        advancedExercise: "Improwizuj scenę bez użycia słów, opierając się wyłącznie na pozawerbalnych sygnałach i obserwuj, jak rozwija się złożona komunikacja."
    },
    {
        id: 7,
        title: "Zmienny lider",
        simpleDescription: "Pozwól, by przywództwo w grupie naturalnie przechodziło między osobami.",
        advancedDescription: "Pozwól, by tymczasowe struktury przywództwa i podporządkowania wyłaniały się organicznie z dynamiki improwizacji, a następnie rozpuszczały się, ustępując miejsca nowym konfiguracjom.",
        simpleExercise: "Improwizujcie bez ustalania kto prowadzi. Obserwuj jak naturalnie pojawiają się i znikają liderzy.",
        advancedExercise: "Rozpocznij improwizację bez ustalonej hierarchii, pozwalając, by role lidera i naśladowcy emergowały spontanicznie i płynnie przechodziły między uczestnikami."
    },
    {
        id: 8,
        title: "Razem-osobno",
        simpleDescription: "Graj z momentami pełnej synchronizacji i momentami celowego kontrastu.",
        advancedDescription: "Pracuj ze świadomym modulowaniem synchronizacji i desynchronizacji w grupie – momentami pełnej harmonii i momentami twórczego dysonansu czy kontrapunktu.",
        simpleExercise: "Improwizujcie przechodząc między trzema stanami: wszyscy razem, podgrupy i kontrolowany chaos.",
        advancedExercise: "Grupa improwizuje, przechodząc między trzema stanami: pełnej synchronizacji, częściowej synchronizacji (podgrupy) i kontrolowanego chaosu, tworząc dynamiczną kompozycję."
    },
    {
        id: 9,
        title: "Zmieniające się sojusze",
        simpleDescription: "W trakcie improwizacji zmieniaj z kim współpracujesz i przeciwko komu działasz.",
        advancedDescription: "Eksploruj płynne, zmieniające się struktury relacji, gdzie sojusze, opozycje i konstelacje grup podlegają ciągłej rekonfiguracji w odpowiedzi na rozwój akcji.",
        simpleExercise: "Co jakiś czas zmień swoje sojusze, przechodząc nagle na stronę innej osoby.",
        advancedExercise: "W grupowej improwizacji, co jakiś czas zmień swoje sojusze, przechodząc do współpracy z innymi osobami i transformując dynamikę całej grupy."
    },
    {
        id: 10,
        title: "Twórcze nieporozumienie",
        simpleDescription: "Każdy rozumie sytuację inaczej - nie próbujcie tego uzgodnić.",
        advancedDescription: "Badaj przestrzenie niezrozumienia, nieporozumienia i interpretacyjnych różnic jako twórcze pola napięcia dramatycznego. Zamiast dążyć do pełnej jasności, eksploruj produktywną niejednoznaczność.",
        simpleExercise: "Stwórz scenę, gdzie każda postać inaczej interpretuje to, co się dzieje.",
        advancedExercise: "Improwizuj scenę, w której każda postać interpretuje sytuację inaczej. Nie dążcie do uzgodnienia perspektyw, lecz rozwijajcie napięcie wynikające z tych różnic."
    },
    {
        id: 11,
        title: "Wspólne tworzenie świata",
        simpleDescription: "Wspólnie ustalajcie i zmieniajcie zasady świata, w którym się znajdujecie.",
        advancedDescription: "Wspólnie negocjujcie i rekonfigurujcie parametry świata, w którym rozgrywa się improwizacja – jego zasady, ograniczenia, możliwości. Bądźcie świadomi metapoziomu tej negocjacji.",
        simpleExercise: "Zaczynajcie z minimalnym zestawem założeń o świecie, dodając stopniowo nowe elementy.",
        advancedExercise: "Rozpocznij improwizację z minimalnym zestawem założeń, stopniowo rozwijając \"reguły świata\" poprzez działania sceniczne. Obserwuj, jak każdy uczestnik przyczynia się do definiowania tych ram."
    },
    {
        id: 12,
        title: "Prowadzenie-podążanie",
        simpleDescription: "Płynnie przełączaj się między prowadzeniem a podążaniem za partnerami.",
        advancedDescription: "Praktykuj płynne przechodzenie między prowadzeniem a podążaniem, między dominacją a uległością, między proponowaniem a akceptowaniem. Utrzymuj dynamiczną wymianę tych polarności.",
        simpleExercise: "W parach, eksplorujcie kontinuum prowadzenie-podążanie, regularnie się przełączając.",
        advancedExercise: "W parach, eksplorujcie kontinuum prowadzenie-podążanie, świadomie przesuwając się między tymi biegunami i obserwując punkt równowagi, w którym trudno określić, kto prowadzi, a kto podąża."
    },
    {
        id: 13,
        title: "Różne tempa",
        simpleDescription: "Każdy z was działa w innym tempie - od super wolnego po bardzo szybkie.",
        advancedDescription: "Eksploruj różnorodne rytmy i tempa w grupie, tworząc złożone polirytmiczne struktury, gdzie różni improwizatorzy operują w różnych czasowościach, które jednak tworzą spójną całość.",
        simpleExercise: "Każdy uczestnik przyjmuje inne tempo - od ekstremalnie wolnego po bardzo szybkie.",
        advancedExercise: "Każdy uczestnik improwizacji przyjmuje inne tempo działania – od ekstremalnie spowolnionego po bardzo szybkie. Wspólnie poszukujcie harmonii w tej różnorodności rytmów."
    },
    {
        id: 14,
        title: "Zmiana relacji",
        simpleDescription: "Przekształcaj relację między postaciami w jej przeciwieństwo (np. z wrogów w przyjaciół).",
        advancedDescription: "Praktykuj radykalne transformacje charakteru relacji między postaciami (np. z wrogości w intymność, z obojętności w intensywną fascynację) przy zachowaniu psychologicznej wiarygodności.",
        simpleExercise: "Zacznij od jasnej relacji między postaciami, potem stopniowo zmień ją w przeciwieństwo.",
        advancedExercise: "Rozpocznij improwizację od jasno zdefiniowanej relacji między postaciami, a następnie stopniowo transformuj ją w jej przeciwieństwo, odkrywając wszystkie stany pośrednie."
    },
    {
        id: 15,
        title: "Bliscy nieznajomi",
        simpleDescription: "Graj postać, która czuje silną więź z innymi, ale kompletnie ich nie rozumie.",
        advancedDescription: "Eksploruj paradoksalne doświadczenie równoczesnej bliskości i dystansu, intymności i obcości, znajomości i nieprzewidywalności w relacjach między improwizatorami.",
        simpleExercise: "Stwórz postać, która jest emocjonalnie blisko innych, ale zupełnie ich nie rozumie.",
        advancedExercise: "Improwizuj scenę, w której postacie doświadczają jednocześnie głębokiej więzi emocjonalnej i fundamentalnego niezrozumienia siebie nawzajem. Utrzymuj to napięcie jako siłę napędową dramaturgii."
    }
];
const mindCards = [
    {
        id: 1,
        title: "Skoki myślowe",
        simpleDescription: "Pozwól sobie na nieoczywiste połączenia między pomysłami i obrazami.",
        advancedDescription: "Pozwól umysłowi na nieoczywiste asocjacje, przechodząc między odległymi konceptami, obrazami i ideami. Wykorzystaj te skoki jako twórczy impuls.",
        simpleExercise: "Co 20 sekund zrób skok do zupełnie innego tematu, a potem znajdź sposób, by go połączyć z poprzednim.",
        advancedExercise: "Co 20 sekund wykonuj asocjacyjny skok do pozornie niepowiązanego tematu, a następnie znajdź sposób, by połączyć go z dotychczasową narracją."
    },
    {
        id: 2,
        title: "Rozbijanie schematów",
        simpleDescription: "Rozpoznawaj powtarzające się wzorce i zmieniaj je w nieoczekiwany sposób.",
        advancedDescription: "Świadomie rozpoznawaj i destabilizuj schematy poznawcze – własne oraz te pojawiające się w grupie. Przekieruj improwizację w niespodziewanym kierunku.",
        simpleExercise: "Zauważ, kiedy pojawia się przewidywalny wzorzec w improwizacji i celowo go przełam.",
        advancedExercise: "Zidentyfikuj schemat (narracyjny, relacyjny, ruchowy) rozwijający się w improwizacji i wprowadź element, który go zakłóci, ale nie zniszczy całkowicie."
    },
    {
        id: 3,
        title: "Zmiana perspektywy",
        simpleDescription: "Zmień sposób, w jaki postrzegasz czas, przestrzeń, przedmioty i ludzi wokół ciebie.",
        advancedDescription: "Zmień sposób, w jaki postrzegasz przestrzeń, czas, obiekty i innych aktorów. Przyjmij radykalnie odmienną perspektywę percepcyjną.",
        simpleExercise: "Improwizuj scenę, w której czas płynie inaczej - szybciej, wolniej lub wstecz.",
        advancedExercise: "Improwizuj scenę, w której czas płynie nielinearnie – możesz doświadczać przyszłości jako przeszłości, teraźniejszości jako rozciągniętej lub skondensowanej."
    },
    {
        id: 4,
        title: "Paradoks poznawczy",
        simpleDescription: "Utrzymuj w głowie dwie sprzeczne myśli jednocześnie i działaj z nich obu.",
        advancedDescription: "Praktykuj utrzymywanie sprzecznych założeń, perspektyw czy interpretacji jednocześnie, bez dążenia do ich rozstrzygnięcia. Eksploruj napięcie między nimi jako źródło twórczej energii.",
        simpleExercise: "Graj postać, która szczerze wierzy w dwie wzajemnie wykluczające się rzeczy.",
        advancedExercise: "Rozwijaj improwizację operując na dwóch sprzecznych poziomach rozumienia jednocześnie. Pozwól, by ta wewnętrzna sprzeczność generowała złożone, niejednoznaczne działania."
    },
    {
        id: 5,
        title: "Meta-myślenie",
        simpleDescription: "Bądź świadomy, jak myślisz o tym, co robisz, podczas gdy to robisz.",
        advancedDescription: "Rozwijaj świadomość własnych procesów poznawczych podczas improwizacji - jak tworzysz znaczenia, jak podejmujesz decyzje, jak interpretujesz działania innych. Wykorzystaj tę meta-świadomość jako narzędzie.",
        simpleExercise: "Podczas improwizacji zwracaj uwagę na swoje własne myśli i sposób, w jaki tworzysz decyzje.",
        advancedExercise: "Podczas improwizacji utrzymuj świadomość własnych wzorców myślowych, preferencji i nawyków poznawczych. Eksperymentuj z celowym przekraczaniem tych nawyków."
    },
    {
        id: 6,
        title: "Zmiana ramy",
        simpleDescription: "Nagle zmień kontekst tego, co się dzieje - tak jak zmiana gatunku filmowego.",
        advancedDescription: "Praktykuj nagłe rekontekstualizacje, zmieniając ramy interpretacyjne tego, co się dzieje. Eksploraj, jak ta sama sekwencja zdarzeń nabiera radykalnie innego znaczenia w nowym kontekście.",
        simpleExercise: "W trakcie sceny nagle zmień gatunek - z dramatu w komedię, z horroru w romans itp.",
        advancedExercise: "W kluczowym momencie improwizacji, zaproponuj radykalną zmianę ramy interpretacyjnej, przekształcając dotychczasową narrację. Obserwuj, jak ta sama sekwencja zdarzeń zyskuje nowe znaczenie."
    },
    {
        id: 7,
        title: "Twórcze ograniczenia",
        simpleDescription: "Nałóż na siebie ograniczenie, które zmusi cię do myślenia inaczej.",
        advancedDescription: "Wprowadzaj celowe ograniczenia poznawcze lub formalne, które wymuszają nowe ścieżki myślenia i działania. Wykorzystaj te ograniczenia jako katalizator kreatywności.",
        simpleExercise: "Nałóż na siebie jedno konkretne ograniczenie (np. nie możesz używać pytań, musisz mówić tylko 5-słownymi zdaniami).",
        advancedExercise: "Przed rozpoczęciem improwizacji, wybierz znaczące ograniczenie (formalne, językowe, ruchowe), które zmusi cię do porzucenia nawykowych ścieżek ekspresji. Wykorzystaj to ograniczenie jako dźwignię do odkrycia nowych możliwości."
    },
    {
        id: 8,
        title: "Szybkie skojarzenia",
        simpleDescription: "Reaguj pierwszym skojarzeniem, które pojawia się w twojej głowie, bez cenzury.",
        advancedDescription: "Ćwicz natychmiastowe reagowanie pierwszym skojarzeniem, które pojawia się w odpowiedzi na bodziec, bez filtrowania czy oceniania. Zauważaj wzorce w tych spontanicznych asocjacjach.",
        simpleExercise: "Reaguj natychmiast pierwszym, nawet najbardziej szalonym skojarzeniem, które pojawia się w twojej głowie.",
        advancedExercise: "Przez całą improwizację reaguj natychmiast pierwszym asocjacyjnym impulsem, bez zatrzymywania się na ocenie jego \"jakości\" czy \"sensowności\". Jednocześnie utrzymuj meta-świadomość wzorców tych skojarzeń."
    },
    {
        id: 9,
        title: "Świadome zapominanie",
        simpleDescription: "Celowo zapominaj wcześniejsze elementy sceny, tworząc nowe możliwości.",
        advancedDescription: "Praktykuj strategiczne \"zapominanie\" ustaleń, elementów narracji czy cech postaci, które ograniczają rozwój improwizacji. Używaj tej techniki świadomie, by otworzyć nowe możliwości.",
        simpleExercise: "Co jakiś czas celowo \"zapomnij\" o jakimś elemencie sceny i zastąp go czymś nowym.",
        advancedExercise: "Rozpoznaj moment, gdy improwizacja utknęła w martwym punkcie i strategicznie \"zapomnij\" element, który ją ogranicza. Obserwuj, jak ta luka w ciągłości otwiera przestrzeń dla nowych możliwości."
    },
    {
        id: 10,
        title: "Wiele warstw znaczeń",
        simpleDescription: "Mów i działaj tak, by twoje słowa i gesty miały kilka różnych znaczeń jednocześnie.",
        advancedDescription: "Twórz działania i wypowiedzi, które celowo zawierają wiele warstw znaczeniowych - od dosłownej, przez metaforyczną, po symboliczną. Eksploruj napięcie między tymi warstwami.",
        simpleExercise: "Mów tak, by twoje wypowiedzi miały podwójne znaczenie - inne dla postaci w scenie, inne dla widzów.",
        advancedExercise: "Konstruuj wielopoziomowe wypowiedzi i działania, które mogą być interpretowane na różnych poziomach znaczeniowych jednocześnie. Bądź świadomy tych różnych warstw i graj z ich wzajemnym napięciem."
    },
    {
        id: 11,
        title: "Połączenie przez metaforę",
        simpleDescription: "Znajdź nieoczywistą metaforę, która połączy różne elementy sceny w nowy sposób.",
        advancedDescription: "Poszukuj głębokich metaforycznych połączeń między pozornie niepowiązanymi elementami improwizacji. Wykorzystuj te metafory jako fundamenty dla emergentnej struktury znaczeniowej.",
        simpleExercise: "Znajdź metaforę, która niespodziewanie łączy różne elementy sceny i rozwiń ją.",
        advancedExercise: "W trakcie improwizacji, identyfikuj emergentne metafory, które mogą połączyć różnorodne wątki, emocje i obrazy. Rozwijaj te metafory, pozwalając im stopniowo stawać się organizującą zasadą całej sceny."
    },
    {
        id: 12,
        title: "Myślenie nielinearne",
        simpleDescription: "Porzuć myślenie przyczynowo-skutkowe i pozwól, by wydarzenia nie musiały logicznie wynikać z siebie.",
        advancedDescription: "Przełamuj nawyk myślenia linearnego i przyczynowo-skutkowego. Eksploruj nielinearne, asocjacyjne, równoległe czy emergentne sposoby organizacji doświadczenia i narracji.",
        simpleExercise: "Przez całą scenę unikaj logicznego wynikania - niech każde kolejne zdarzenie będzie zaskakujące.",
        advancedExercise: "Praktykuj improwizację, w której wydarzenia nie są połączone związkami przyczynowo-skutkowymi, ale innymi typami relacji - asocjacyjnymi, rytmicznymi, emocjonalnymi, symbolicznymi."
    },
    {
        id: 13,
        title: "Poza językiem",
        simpleDescription: "Myśl obrazami, dźwiękami, ruchem - omijając etap przekładu na język.",
        advancedDescription: "Eksploruj pozawerbalne modalności myślenia - wizualne, kinestetyczne, dźwiękowe. Działaj bezpośrednio z tych modalności, bez pośrednictwa języka werbalnego.",
        simpleExercise: "Przez minutę improwizuj myśląc wyłącznie obrazami, nie słowami, i działaj bezpośrednio z tych obrazów.",
        advancedExercise: "Przez całą improwizację, przełączaj się między różnymi modalnościami poznawczymi - wizualną, kinestetyczną, dźwiękową, przestrzenną - unikając wewnętrznego dialogu werbalnego."
    },
    {
        id: 14,
        title: "Synchroniczność",
        simpleDescription: "Traktuj przypadkowe zbiegi okoliczności jako znaczące i rozwijaj je.",
        advancedDescription: "Bądź wyczulony na synchroniczności - pozornie przypadkowe zbiegi okoliczności, które wydają się mieć znaczenie. Traktuj je jako wskazówki dla rozwoju improwizacji.",
        simpleExercise: "Zwracaj uwagę na przypadkowe zbiegi okoliczności na scenie i traktuj je jako bardzo ważne dla fabuły.",
        advancedExercise: "Rozwijaj podwyższoną wrażliwość na synchroniczne zdarzenia w improwizacji - zbieżności tematyczne, powtórzenia, echa. Traktuj te przypadkowe wzorce jako znaczące i rozwijaj je jako osnowę dramaturgiczną."
    },
    {
        id: 15,
        title: "Jednoczesność przeciwieństw",
        simpleDescription: "Eksploruj stany i idee, które zawierają w sobie własne przeciwieństwa.",
        advancedDescription: "Badaj stany, idee i sytuacje, które zawierają w sobie własne przeciwieństwa - jednoczesność chaotyczności i uporządkowania, bliskości i dystansu, lekkości i ciężaru, humoru i powagi.",
        simpleExercise: "Stwórz postać lub sytuację, która zawiera w sobie dwa przeciwstawne elementy jednocześnie.",
        advancedExercise: "Eksploruj zjawisko coincidentia oppositorum - jednoczesności przeciwieństw. Poszukuj stanów, działań i relacji, które wymykają się dychotomicznym kategoryzacjom, zawierając w sobie dialektyczne napięcie przeciwstawnych jakości."
    }
];
const systemCards = [
    {
        id: 1,
        title: "Emergentne granice",
        simpleDescription: "Pozwól, by z chaosu stopniowo wyłoniła się jakaś struktura lub porządek.",
        advancedDescription: "Pozwól, by z pozornego chaosu wyłoniły się tymczasowe granice i struktury. Nie narzucaj ich, ale rozpoznaj moment ich emergencji i wykorzystaj ich potencjał.",
        simpleExercise: "Zacznij od całkowitego chaosu, a potem rozpoznaj moment, gdy pojawia się jakiś wzorzec i rozwijaj go.",
        advancedExercise: "Rozpocznij od chaotycznej, niestrukturyzowanej improwizacji, następnie rozpoznaj moment, gdy wyłania się wzorzec lub struktura i podążaj za nim, wzmacniając go subtelnymi działaniami."
    },
    {
        id: 2,
        title: "Rozwidlenia akcji",
        simpleDescription: "Zauważaj momenty, kiedy scena może pójść w różnych kierunkach i świadomie wybieraj te mniej oczywiste.",
        advancedDescription: "Zidentyfikuj momenty, w których system (improwizacja) może pójść w różnych kierunkach. Uświadom sobie te rozwidlenia i świadomie wybieraj drogi mniej oczywiste.",
        simpleExercise: "W kluczowych momentach sceny zatrzymaj się na chwilę, pomyśl o najbardziej oczywistej kontynuacji, a potem wybierz inną.",
        advancedExercise: "W kluczowych momentach improwizacji, zatrzymaj się na sekundę, zidentyfikuj najbardziej oczywistą kontynuację, a następnie wybierz inną możliwość."
    },
    {
        id: 3,
        title: "Kontrolowany chaos",
        simpleDescription: "Balansuj na granicy porządku i chaosu, zwiększając złożoność, ale utrzymując spójność.",
        advancedDescription: "Zwiększaj złożoność improwizowanego systemu, jednocześnie utrzymując jego adaptacyjność i spójność. Balansuj na granicy uporządkowania i chaosu.",
        simpleExercise: "Każdy dodaje nowy element złożoności (wątek, postać, motyw), a grupa pracuje nad połączeniem wszystkiego w spójną całość.",
        advancedExercise: "Każdy aktor wprowadza nową warstwę złożoności (nowy wątek, postać, motyw), a grupa pracuje nad integracją tych elementów w spójną całość."
    },
    {
        id: 4,
        title: "Pętle zwrotne",
        simpleDescription: "Twórz pętle przyczynowo-skutkowe, gdzie efekt staje się przyczyną kolejnych zdarzeń.",
        advancedDescription: "Buduj świadome pętle sprzężenia zwrotnego w improwizacji, gdzie efekty działań stają się przyczynami kolejnych. Obserwuj, jak te pętle mogą być zarówno wzmacniające (amplifikujące), jak i równoważące (stabilizujące).",
        simpleExercise: "Wprowadź element, który później powraca jako konsekwencja i powoduje nowe działania.",
        advancedExercise: "Stwórz dwie pętle zwrotne w improwizacji - jedną wzmacniającą (gdzie efekty narastają) i jedną równoważącą (która stabilizuje system) - i obserwuj ich wzajemną dynamikę."
    },
    {
        id: 5,
        title: "Efekt motyla",
        simpleDescription: "Mały, pozornie nieistotny gest lub słowo prowadzi do ogromnych konsekwencji w dalszej akcji.",
        advancedDescription: "Eksploruj nieliniowe związki przyczynowo-skutkowe, gdzie drobne zdarzenia wywołują nieproporcjonalnie duże efekty. Badaj wrażliwość systemu improwizacyjnego na warunki początkowe.",
        simpleExercise: "Wybierz drobny, pozornie nieistotny element i stopniowo rozwijaj jego konsekwencje, aż staną się głównym elementem sceny.",
        advancedExercise: "Rozpocznij od minimalnego impulsu (mikro-gest, lekkie westchnienie, niemal niezauważalny ruch) i pozwól, by jego efekty były wzmacniane przez system, prowadząc do znaczących transformacji całej improwizacji."
    },
    {
        id: 6,
        title: "Emergentne role",
        simpleDescription: "Nie ustalaj z góry, kim jesteś - pozwól, by twoja rola wyłoniła się z interakcji z innymi.",
        advancedDescription: "Zamiast definiować role i relacje na początku, pozwól im emergować organicznie z interakcji. Bądź wrażliwy na subtelne sygnały systemowe, które definiują twoją pozycję w powstającej strukturze.",
        simpleExercise: "Rozpocznij improwizację bez określania, kim jesteś - pozwól, by twoja rola wyłoniła się z działań i reakcji innych.",
        advancedExercise: "Wejdź w improwizację jako 'czysta potencjalność', bez predefiniowanej roli, tożsamości czy relacji. Reaguj na sygnały systemowe i pozwól, by twoja funkcja w systemie wyłoniła się z wielowymiarowej sieci interakcji."
    },
    {
        id: 7,
        title: "Autopoiesis",
        simpleDescription: "Stwórz system, który sam się utrzymuje i regeneruje - każde działanie wzmacnia całość.",
        advancedDescription: "Twórz improwizacje o charakterze autopoietycznym - samotworzącym się i samopodtrzymującym. Buduj dynamikę, w której działania uczestników nawzajem się wspierają i regenerują całość systemu.",
        simpleExercise: "Stwórz scenę, w której każde działanie wzmacnia i podtrzymuje całą sytuację, zamiast ją podważać czy niszczyć.",
        advancedExercise: "Stwórz improwizację, w której każdy gest, replika i działanie jest jednocześnie wspierane przez całość systemu i wspiera tę całość. Znajdź równowagę między autonomią elementów a spójnością całości."
    },
    {
        id: 8,
        title: "Ukryte wzorce",
        simpleDescription: "Odkrywaj i wykorzystuj niewidoczne na pierwszy rzut oka prawidłowości w tym, co dzieje się na scenie.",
        advancedDescription: "Rozwijaj wrażliwość na emergentne wzorce, które nie są natychmiast widoczne. Praktykuj rozpoznawanie ukrytych struktur i wykorzystuj je do pogłębiania dramaturgii improwizacji.",
        simpleExercise: "W trakcie improwizacji, szukaj nieoczywistych powtórzeń, rytmów lub wzorców i subtelnie je podkreślaj.",
        advancedExercise: "Rozwijaj 'systemową intuicję' - zdolność rozpoznawania subtelnych wzorców emergujących z całości improwizacji. Gdy zauważysz taki wzorzec, nie nazywaj go explicite, ale działaj z jego świadomością, wzmacniając jego obecność."
    },
    {
        id: 9,
        title: "Dźwignie systemowe",
        simpleDescription: "Znajdź te małe zmiany, które mogą spowodować wielkie przemiany w całej scenie.",
        advancedDescription: "Identyfikuj i wykorzystuj punkty dźwigni w systemie - miejsca, gdzie stosunkowo niewielka interwencja może spowodować znaczące zmiany w całym systemie. Eksperymentuj z różnymi poziomami dźwigni.",
        simpleExercise: "Wprowadź drobną zmianę (nowe słowo, gest, rekwizyt) i pozwól, by całkowicie zmieniła kierunek całej sceny.",
        advancedExercise: "Zidentyfikuj punkt dźwigni w toczącym się systemie improwizacyjnym - miejsce, gdzie minimalna interwencja może wywołać maksymalny efekt. Eksperymentuj z różnymi typami dźwigni systemowej: od zmiany parametrów po transformację paradygmatu."
    },
    {
        id: 10,
        title: "Adaptacyjne krawędzie",
        simpleDescription: "Działaj na granicy swojej strefy komfortu, stale rozszerzając ją o nowe możliwości.",
        advancedDescription: "Praktykuj improwizację na adaptacyjnej krawędzi - w przestrzeni między znanym a nieznanym, między komfortem a wyzwaniem. Wykorzystuj tę przestrzeń liminalna jako źródło innowacji i rozwoju.",
        simpleExercise: "Zidentyfikuj swoje nawyki improwizacyjne i celowo wykraczaj poza nie, eksplorując nowe terytorium.",
        advancedExercise: "Rozpoznaj swoją aktualną 'adaptacyjną krawędź' - miejsce, gdzie jesteś wystarczająco stabilny, by eksperymentować, ale wystarczająco niestabilny, by się rozwijać. Improwizuj świadomie w tej przestrzeni, jednocześnie rozszerzając jej granice."
    },
    {
        id: 11,
        title: "Fraktalne wzorce",
        simpleDescription: "To co dzieje się w małej skali (między dwiema postaciami) powtarza się w dużej skali (cała grupa/historia).",
        advancedDescription: "Twórz fraktalne struktury w improwizacji, gdzie wzorce pojawiające się na mikro-poziomie są odzwierciedlane na makro-poziomie. Eksploruj samopodobieństwo między różnymi skalami systemu.",
        simpleExercise: "Znajdź wzorzec interakcji między dwiema postaciami i powtórz go w większej skali w całej grupie lub całej historii.",
        advancedExercise: "Rozpoznaj emergentny wzorzec na jednym poziomie systemu (np. w relacji między dwiema postaciami) i świadomie replikuj go na innych poziomach (w strukturze całej historii, w dynamice grupy, w rytmie improwizacji), tworząc rezonujący system fraktalny."
    },
    {
        id: 12,
        title: "Samoorganizacja",
        simpleDescription: "Pozwól, by z prostych zasad wyłonił się złożony i uporządkowany system - jak w ławicy ryb czy kolonii mrówek.",
        advancedDescription: "Eksploruj zasadę samoorganizacji, gdzie złożony porządek wyłania się z prostych zasad interakcji między elementami, bez centralnej kontroli. Praktykuj budowanie emergentnej złożoności poprzez proste, lokalne działania.",
        simpleExercise: "Ustal jedną prostą zasadę dla wszystkich (np. zawsze powtarzaj ostatni gest osoby po twojej lewej) i obserwuj, jak tworzy się złożony wzorzec.",
        advancedExercise: "Ustanów minimalne, lokalne reguły interakcji (np. zawsze utrzymuj tę samą odległość od dwóch najbliższych osób; twoja energia jest odwrotnie proporcjonalna do energii osoby po prawej) i obserwuj, jak z tych prostych zasad wyłania się złożona, samoorganizująca się struktura."
    },
    {
        id: 13,
        title: "Adaptacja do zakłóceń",
        simpleDescription: "Celowo wprowadzaj zakłócenia do sceny i obserwuj, jak system się do nich dostosowuje i ewoluuje.",
        advancedDescription: "Badaj odporność i adaptacyjność systemu poprzez celowe wprowadzanie zakłóceń i obserwowanie, jak system na nie reaguje - czy załamuje się, czy ewoluuje w nowe formy. Wykorzystuj zakłócenia jako katalizatory ewolucji.",
        simpleExercise: "Co jakiś czas wprowadź coś, co kompletnie zaburza obecny kierunek sceny i obserwuj, jak grupa się adaptuje.",
        advancedExercise: "Wprowadzaj systematyczne zakłócenia o różnej intensywności i charakterze (od drobnych anomalii po fundamentalne wstrząsy) i obserwuj różnorodne strategie adaptacyjne systemu. Zwracaj uwagę na momenty transformacyjne, gdy zakłócenie prowadzi do emergencji nowego porządku."
    },
    {
        id: 14,
        title: "Współzależne sieci",
        simpleDescription: "Twórz gęstą sieć połączeń, gdzie wszystko jest powiązane ze wszystkim, bezpośrednio lub pośrednio.",
        advancedDescription: "Twórz wielowymiarowe sieci współzależności między elementami improwizacji - postaciami, wątkami, obiektami, przestrzeniami. Eksploruj, jak zmiany w jednej części sieci wpływają na całość systemu.",
        simpleExercise: "Każdy element wprowadzony do improwizacji musi być połączony przynajmniej z trzema innymi elementami.",
        advancedExercise: "Buduj złożoną sieć wzajemnych zależności między wszystkimi elementami improwizacji. Kiedy wprowadzasz nowy element, natychmiast łącz go z istniejącą siecią na wielu poziomach. Eksperymentuj z różnymi typami połączeń (przyczynowe, symboliczne, tematyczne, emocjonalne) i obserwuj efekty systemowe."
    },
    {
        id: 15,
        title: "Pełna historia",
        simpleDescription: "Twórz scenę tak, jakby była częścią większej całości - z przeszłością i przyszłością, których nie widać, ale które wpływają na to, co się dzieje.",
        advancedDescription: "Praktykuj holistyczne podejście do improwizacji, gdzie każdy moment zawiera w sobie całość historii. Twórz z świadomością rozległego kontekstu - przeszłości, która doprowadziła do teraźniejszości, i przyszłości, która się z niej wyłoni.",
        simpleExercise: "Improwizuj jakby obecna scena była środkowym fragmentem dużo większej historii - z bogatą przeszłością i konsekwencjami w przyszłości.",
        advancedExercise: "Improwizuj każdy moment z pełną świadomością jego osadzenia w wielowymiarowym kontinuum czasowym. Każdy gest, każde słowo powinny nieść w sobie ślady przeszłości i nasiona przyszłości. Praktykuj ‚głęboką teraźniejszość', gdzie cała historia jest implicitnie obecna w każdym momencie."
    }
];
const traditionCards = [
    {
        id: 1,
        title: "Commedia dell'arte",
        simpleDescription: "Wykorzystaj typowe postacie (np. sprytny służący, skąpy staruszek) jako punkt wyjścia do współczesnej improwizacji.",
        advancedDescription: "Wykorzystaj archetypowe maski i konwencje commedia dell'arte jako punkt wyjścia do współczesnej improwizacji. Eksploruj napięcie między konwencją a jej przekroczeniem.",
        simpleExercise: "Wybierz jedną z klasycznych postaci commedia (np. Arlekin, Pantalone, Doktor) i umieść ją we współczesnym kontekście.",
        advancedExercise: "Przyjmij podstawową charakterystykę jednej z masek commedia (Arlecchino, Pantalone, il Dottore, Colombina), ale umieść ją we współczesnym kontekście. Zachowaj esencję archetypu, jednocześnie transformując jego formę."
    },
    {
        id: 2,
        title: "Butō - ciało w kryzysie",
        simpleDescription: "Inspiruj się japońskim tańcem butō, eksplorując stany transformacji ciała między różnymi stanami i kategoriami.",
        advancedDescription: "Zainspiruj się japońskim tańcem butō, eksplorując stany kryzysu, transformacji i liminalne przestrzenie między kategoriami (życie/śmierć, ludzkie/nie-ludzkie).",
        simpleExercise: "Zacznij improwizację od ekstremalnie spowolnionego ruchu, pozwalając ciału przechodzić przez różne stany transformacji.",
        advancedExercise: "Rozpocznij improwizację od ekstremalnie spowolnionego ruchu, pozwalając ciału przechodzić przez stany kryzysowe i transformacyjne. Eksploruj granice między tym, co ludzkie i nie-ludzkie, żywe i martwe, obecne i nieobecne."
    },
    {
        id: 3,
        title: "Błazen/Trickster",
        simpleDescription: "Wciel się w postać, która może łamać zasady, mówić prawdę i odwracać role, używając humoru jako narzędzia.",
        advancedDescription: "Wciel się w archetypową figurę błazna/trickstera, który przekracza granice, obnaża paradoksy i odwraca ustalone hierarchie. Wykorzystaj humor jako narzędzie transformacji.",
        simpleExercise: "Graj postać, która może mówić prawdę, łamać czwartą ścianę i komentować to, co się dzieje na scenie.",
        advancedExercise: "Improwizuj jako postać, która ma licencję na kwestionowanie wszystkiego, łamanie czwartej ściany i wprowadzanie metakomentarza do improwizacji. Wykorzystaj tę pozycję do obnażania ukrytych mechanizmów i paradoksów."
    },
    {
        id: 4,
        title: "Griot - opowiadacz historii",
        simpleDescription: "Przyjmij rolę afrykańskiego griota - opowiadacza historii, który łączy przeszłość z teraźniejszością poprzez opowieść.",
        advancedDescription: "Czerp inspirację z tradycji zachodnioafrykańskich griotów - strażników pamięci i opowiadaczy historii. Praktykuj płynne przejścia między narracją a ucieleśnieniem, między przeszłością a teraźniejszością.",
        simpleExercise: "Przełączaj się między opowiadaniem historii a jej odgrywaniem, wciągając innych do swojej narracji.",
        advancedExercise: "Improwizuj w stylu griota, płynnie przechodząc między rolą narratora a aktora, między odległą przeszłością a żywą teraźniejszością. Wykorzystuj rytm, powtórzenia i bezpośrednie zwroty do publiczności, tworząc wspólnotowe doświadczenie opowieści."
    },
    {
        id: 5,
        title: "Teatr Nō",
        simpleDescription: "Inspiruj się japońskim teatrem Nō, koncentrując się na spowolnieniu, precyzji i symbolicznym geście.",
        advancedDescription: "Czerp inspirację z estetyki i filozofii japońskiego teatru Nō, z jego koncentracją na ma (interwał/pauza), yugen (tajemnicza głębia) i redukcji do esencji. Eksploruj napięcie między formą a pustką.",
        simpleExercise: "Improwizuj używając niezwykle oszczędnych, powolnych i precyzyjnych gestów, gdzie każdy ruch ma znaczenie.",
        advancedExercise: "Stwórz improwizację inspirowaną estetyką Nō, gdzie każdy gest jest zredukowany do esencji, a pauzy i przestrzenie między działaniami są równie znaczące jak same działania. Eksploruj koncepcję 'kontrolowanej intensywności' - maksymalnej ekspresji przy minimalnym ruchu zewnętrznym."
    },
    {
        id: 6,
        title: "Klaunada",
        simpleDescription: "Eksploruj naiwność, bezbronność i autentyczność klauna, który szczerze reaguje na świat.",
        advancedDescription: "Eksploruj esencję klaunady jako stanu autentycznej bezbronności, naiwności i otwartości. Praktykuj stan 'najmniejszej maski', gdzie najmniejsze impulsy wewnętrzne są natychmiast widoczne.",
        simpleExercise: "Improwizuj jako klaun, który doświadcza wszystkiego po raz pierwszy, z absolutną szczerością i otwartością.",
        advancedExercise: "Wejdź w stan klaunady, gdzie twoja wewnętrzna wrażliwość jest bezpośrednio widoczna, a najmniejsze impulsy są natychmiast amplifikowane i wyrażane. Praktykuj radykalną szczerość i bezbronność, pozwalając sobie na całkowite porażki i absolutne zachwyty."
    },
    {
        id: 7,
        title: "Kathakali",
        simpleDescription: "Czerp z indyjskiej tradycji Kathakali, wykorzystując skodyfikowane gesty dłoni (mudry) i wyraziste ekspresje twarzy.",
        advancedDescription: "Inspiruj się indyjskim teatrem Kathakali, z jego bogatym językiem mudr (gestów dłoni), rasami (emocjami) i abhinaya (ekspresją). Eksploruj związek między skodyfikowaną formą a żywą ekspresją.",
        simpleExercise: "Improwizuj używając wyrazistych gestów rąk i twarzy, które mają konkretne znaczenia symboliczne.",
        advancedExercise: "Stwórz własny 'słownik' gestów inspirowany systemem mudr Kathakali, gdzie każdy układ dłoni ma konkretne znaczenie. Improwizuj wykorzystując ten język gestyczny w połączeniu z intensywną ekspresją twarzy (eksplorując dziewięć podstawowych ras - stanów emocjonalnych)."
    },
    {
        id: 8,
        title: "Teatr cieni",
        simpleDescription: "Wykorzystaj cień jako środek ekspresji, skupiając się na sylwetce i prostych, wyrazistych kształtach.",
        advancedDescription: "Czerp inspirację z tradycji teatru cieni (wayang kulit, karagöz), koncentrując się na sylwetce, konturze i projekcji. Eksploruj granicę między widzialnym a niewidzialnym, obecnością a nieobecnością.",
        simpleExercise: "Improwizuj tak, jakbyś był cieniem - upraszczając gesty, koncentrując się na wyrazistej sylwetce.",
        advancedExercise: "Improwizuj w estetyce teatru cieni, gdzie liczy się przede wszystkim sylwetka i kontur. Eksperymentuj z różnymi odległościami od (wyobrażonego) ekranu/źródła światła, transformując swoją obecność między pełnym ciałem a czystą projekcją. Badaj napięcie między dwu- a trójwymiarowością."
    },
    {
        id: 9,
        title: "Minstrel story",
        simpleDescription: "Opowiadaj historię jednocześnie wcielając się w wiele postaci i dodając elementy muzyczne.",
        advancedDescription: "Nawiązuj do tradycji minstrelskich opowieści, gdzie pojedynczy performer wciela się w wiele postaci, łączy narrację z dialogiem, ruchem i elementami muzycznymi. Praktykuj płynne przejścia między różnymi modalnościami ekspresji.",
        simpleExercise: "Opowiadaj historię jednocześnie grając wszystkie postacie, dodając efekty dźwiękowe i elementy rytmiczne.",
        advancedExercise: "Stwórz wielowarstwową opowieść w stylu minstrelskim, gdzie płynnie przechodzisz między rolą narratora a różnymi postaciami, integrując słowo, gest, rytm i melodię. Eksperymentuj z różnymi stylami narracji, tempem i dynamiką, tworząc bogatą foniczną i wizualną kompozycję."
    },
    {
        id: 10,
        title: "Bufon",
        simpleDescription: "Inspiruj się średniowieczną tradycją bufona - groteskowej, cielesnej postaci, która wyśmiewa i podważa autorytet.",
        advancedDescription: "Eksploruj tradycję bufona - groteskowej, transgresyjnej figury, która poprzez wyolbrzymienie cielesności, niestosowność i wywrócenie hierarchii obnaża społeczne hipokryzje i tabu. Wykorzystuj groteskę jako narzędzie transformacji.",
        simpleExercise: "Stwórz postać, która jest celowo przesadna, groteskowa i łamie społeczne konwenanse, aby ujawnić prawdę.",
        advancedExercise: "Eksploruj 'ciało groteskowe' bufona - cielesne, przesadne, przekraczające granice 'dobrego smaku'. Wykorzystuj strategie odwrócenia, wyolbrzymienia i profanacji, by obnażać społeczne normy i hierarchie. Praktykuj jednoczesne przyciąganie i odpychanie publiczności, balansując między fascynacją a niepokojem."
    },
    {
        id: 11,
        title: "Bouffon",
        simpleDescription: "Czerp z tradycji francuskiego bouffona (w wersji Lecoqa) - postaci parodiującej społeczne normy poprzez groteskowe naśladowanie.",
        advancedDescription: "Zanurz się w tradycji bouffona w ujęciu Jacques'a Lecoqa, gdzie marginalizowane postacie parodiują dominującą kulturę poprzez wyrafinowaną, subtelną imitację. Wykorzystuj parodię i groteskę jako narzędzia krytycznej refleksji.",
        simpleExercise: "Stwórz postać, która naśladuje i delikatnie wyolbrzymia charakterystyczne cechy jakiejś grupy społecznej.",
        advancedExercise: "Przyjmij bouffoński sposób naśladowania, który nie jest prostą parodią, ale subtelnymi środkami obnaża ukryte mechanizmy i absurdy społecznych konwenansów. Eksploruj stan 'bycia poza społeczeństwem', który daje ci licencję na jego krytyczne odbijanie. Pamiętaj, że bouffon nie szydzi bezpośrednio - on po prostu pokazuje lustro."
    },
    {
        id: 12,
        title: "Teatr fizyczny",
        simpleDescription: "Zainspiruj się tradycją teatru fizycznego (Meyerhold, Grotowski, Decroux), koncentrując się na ciele jako głównym nośniku znaczeń.",
        advancedDescription: "Czerp z różnorodnych tradycji teatru fizycznego (biomechanika Meyerholda, teatr ubogi Grotowskiego, mim korpolarny Decroux), gdzie ciało aktora jest pierwotnym nośnikiem znaczeń, a tekst jest wtórny lub nieobecny. Eksploruj cielesną partyturę jako podstawę improwizacji.",
        simpleExercise: "Twórz znaczenia przede wszystkim poprzez fizyczne działania, traktując słowa jako dodatek lub całkowicie je eliminując.",
        advancedExercise: "Stwórz fizyczną partyturę działań, która będzie strukturalną bazą dla twojej improwizacji. Eksploruj różne jakości energetyczne ciała, przeciwstawne wektory i napięcia. Praktykuj redukcję - eliminowanie wszystkiego, co nie jest absolutnie niezbędne, docierając do esencji cielesnego wyrazu."
    },
    {
        id: 13,
        title: "Teatr epicki",
        simpleDescription: "Inspiruj się Brechtem, przełamując iluzję teatralną i pokazując mechanizmy tworzenia fikcji.",
        advancedDescription: "Czerp inspirację z teatru epickiego Bertolta Brechta, z jego efektem alienacji (Verfremdungseffekt), dialektycznym podejściem i przełamywaniem iluzji. Praktykuj jednoczesne tworzenie fikcji i pokazywanie mechanizmów jej konstrukcji.",
        simpleExercise: "W trakcie improwizacji co jakiś czas 'wychodź z roli', komentując to, co się dzieje, albo pokazując proces tworzenia.",
        advancedExercise: "Improwizuj dialektycznie, jednocześnie tworząc fikcję i obnażając mechanizmy jej tworzenia. Praktykuj strategie alienacyjne Brechta: bezpośrednie zwroty do publiczności, śpiew, przerwanie akcji, cytat gestyczny. Pokaż sceniczne 'jak' obok scenicznego 'co', tworząc przestrzeń dla krytycznej refleksji."
    },
    {
        id: 14,
        title: "Koreański Pansori",
        simpleDescription: "Zainspiruj się koreańską tradycją opowiadania historii poprzez intensywny wokalny i emocjonalny wyraz.",
        advancedDescription: "Czerp inspirację z koreańskiej tradycji pansori, z jej intensywnym wokalnym wyrazem, emocjonalną głębią i zdolnością do transformacji między narracją a dramatycznym ucieleśnieniem. Eksploruj koncept han - głębokiego, niewypowiedzianego cierpienia.",
        simpleExercise: "Opowiadaj i odgrywaj historię z niezwykłą intensywnością głosu i emocji, przechodząc między narracją a grą postaci.",
        advancedExercise: "Eksploruj pełne spektrum głosu - od szeptu po krzyk, od mowy po śpiew - w tradycji pansori. Praktykuj gwałtowne przejścia między opowiadaniem a wcielaniem się w postacie. Poszukuj ekspresji han - głębokiego, kolektywnego bólu, który transcenduje indywidualne doświadczenie."
    },
    {
        id: 15,
        title: "Teatr absurdu",
        simpleDescription: "Czerp z tradycji teatru absurdu (Ionesco, Beckett), tworząc sytuacje, które łamią logikę i oczekiwania.",
        advancedDescription: "Zanurzaj się w estetyce teatru absurdu (Beckett, Ionesco, Adamov), z jego podważaniem sensu, łamaniem przyczynowości i ekspresją egzystencjalnego niepokoju. Eksploruj napięcie między komicznym a tragicznym, między banałem a metafizyką.",
        simpleExercise: "Stwórz pozornie normalną sytuację, a potem stopniowo wprowadzaj elementy, które łamią logikę i oczekiwania.",
        advancedExercise: "Twórz sceniczne sytuacje w duchu teatru absurdu, gdzie codzienna rzeczywistość stopniowo ujawnia swoją arbitralność i absurdalność. Eksploruj powtórzenia, które prowadzą donikąd, działania pozbawione celu, język, który traci zdolność komunikacji. Badaj egzystencjalny niepokój ukryty pod komiczną powierzchnią."
    }
];
