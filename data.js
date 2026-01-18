const quizData = [
  {
    "id": 1,
    "domanda": "In che modo un modello di accesso alle risorse con privilegi minimi contribuisce alla sicurezza del cloud?",
    "opzioni": [
      "I dipendenti hanno accesso solo alle risorse cloud necessarie per il loro lavoro.",
      "Solo i manager e gli altri dipendenti senior hanno accesso alle risorse del cloud.",
      "Google \u00e8 responsabile della determinazione dell'accesso alle risorse cloud.",
      "I dipendenti possono accedere al software on-premise solo con un permesso speciale."
    ],
    "risposta_corretta": "SSBkaXBlbmRlbnRpIGhhbm5vIGFjY2Vzc28gc29sbyBhbGxlIHJpc29yc2UgY2xvdWQgbmVjZXNzYXJpZSBwZXIgaWwgbG9ybyBsYXZvcm8u",
    "spiegazione": "Il principio del privilegio minimo (Least Privilege) stabilisce che un utente deve avere solo i permessi strettamente necessari per svolgere i suoi compiti, riducendo la superficie di attacco in caso di compromissione dell'account."
  },
  {
    "id": 2,
    "domanda": "Quale opzione di calcolo riduce i costi quando ci si impegna a un utilizzo costante dell'elaborazione per un periodo di 1 anno o 3 anni?",
    "opzioni": [
      "Istanze spot",
      "Savings Plans",
      "Istanze riservate",
      "Host dedicati"
    ],
    "risposta_corretta": "U2F2aW5ncyBQbGFucw==",
    "spiegazione": "I Savings Plans offrono sconti significativi in cambio di un impegno di spesa oraria (es. $10/ora) per 1 o 3 anni. Sono pi\u00f9 flessibili delle vecchie Istanze Riservate perch\u00e9 si applicano a diverse famiglie di istanze e regioni."
  },
  {
    "id": 3,
    "domanda": "Quale delle opzioni seguenti si pu\u00f2 usare per convalidare le propriet\u00e0 di un elemento che deve essere salvato?",
    "opzioni": [
      "Funzioni utente",
      "Funzioni utente",
      "Pre-trigger",
      "Post-trigger"
    ],
    "risposta_corretta": "UHJlLXRyaWdnZXI=",
    "spiegazione": ""
  },
  {
    "id": 4,
    "domanda": "Qual \u00e8 il metodo consigliato per stimare il costo della migrazione nel cloud?",
    "opzioni": [
      "Usare il calcolatore del costo totale di propriet\u00e0 per stimare i costi previsti",
      "Migrare l'ambiente in maniera incrementale",
      "Eseguire la migrazione nel cloud e tracciare l'utilizzo",
      "Eseguire la migrazione di una parte e tracciare i costi"
    ],
    "risposta_corretta": "VXNhcmUgaWwgY2FsY29sYXRvcmUgZGVsIGNvc3RvIHRvdGFsZSBkaSBwcm9wcmlldMOgIHBlciBzdGltYXJlIGkgY29zdGkgcHJldmlzdGk=",
    "spiegazione": "Il calcolatore TCO (Total Cost of Ownership) \u00e8 uno strumento pre-migrazione che aiuta a confrontare i costi attuali on-premise con i costi stimati su Azure/AWS, fornendo un business case solido prima di spostare qualsiasi risorsa."
  },
  {
    "id": 5,
    "domanda": "Le applicazioni di un'organizzazione sono eseguite su un'architettura on-premises poco flessibile. L'organizzazione ha deciso di modernizzare le applicazioni esistenti con il cloud. Cosa pu\u00f2 aver spinto questa decisione aziendale?",
    "opzioni": [
      "I responsabili IT vogliono che i fornitori di cloud distribuiscano automaticamente la loro infrastruttura.",
      "I responsabili IT vogliono smettere di apportare modifiche graduali.",
      "Gli sviluppatori vogliono che i fornitori di cloud assumano il pieno controllo delle prestazioni delle loro applicazioni.",
      "Gli sviluppatori vogliono testare le idee e sperimentare con maggiore facilit\u00e0."
    ],
    "risposta_corretta": "R2xpIHN2aWx1cHBhdG9yaSB2b2dsaW9ubyB0ZXN0YXJlIGxlIGlkZWUgZSBzcGVyaW1lbnRhcmUgY29uIG1hZ2dpb3JlIGZhY2lsaXTDoC4=",
    "spiegazione": "Uno dei vantaggi chiave del cloud \u00e8 l'agilit\u00e0. In un ambiente on-premise rigido, provare nuove idee richiede tempo per l'hardware; nel cloud, gli sviluppatori possono creare e distruggere ambienti di test in pochi minuti."
  },
  {
    "id": 6,
    "domanda": "Quale prospettiva di AWS Cloud Adoption Framework si concentra sul ripristino dei carichi di lavoro IT per soddisfare i requisiti delle parti interessate aziendali?",
    "opzioni": [
      "Prospettiva personale",
      "Prospettiva operazioni",
      "Prospettiva governance",
      "Prospettiva aziendale"
    ],
    "risposta_corretta": "UHJvc3BldHRpdmEgb3BlcmF6aW9uaQ==",
    "spiegazione": ""
  },
  {
    "id": 7,
    "domanda": "Com'\u00e8 possibile impedire la creazione di risorse non conformi, senza doverle valutare manualmente?",
    "opzioni": [
      "Azure Purview",
      "Azure Log Analytics",
      "Azure Policy",
      "Azure Monitor"
    ],
    "risposta_corretta": "QXp1cmUgUG9saWN5",
    "spiegazione": "Azure Policy serve proprio alla governance: definisce regole che le risorse devono rispettare. Se provi a creare una risorsa che viola una policy (es. in una region non permessa), Azure Policy blocca l'azione preventivamente."
  },
  {
    "id": 8,
    "domanda": "Un\u2019azienda dispone di tre macchine virtuali (VM1, VM2 e VM3) in un gruppo di risorse. Il supporto tecnico assume un nuovo dipendente, che deve essere in grado di modificare le impostazioni in VM3, ma non in VM1 e VM2. La soluzione adottata deve ridurre al minimo il sovraccarico amministrativo. Cosa deve essere configurato?",
    "opzioni": [
      "Spostare VM3 in un nuovo gruppo di risorse e assegnare l'utente al ruolo Collaboratore in VM3",
      "Assegnare l'utente al ruolo Collaboratore in VM3",
      "Assegnare il ruolo di Amministratore globale",
      "Assegnare l'utente al ruolo Collaboratore nel gruppo di risorse "
    ],
    "risposta_corretta": "QXNzZWduYXJlIGwndXRlbnRlIGFsIHJ1b2xvIENvbGxhYm9yYXRvcmUgaW4gVk0z",
    "spiegazione": ""
  },
  {
    "id": 9,
    "domanda": "Un'organizzazione di videogiochi ha investito in una tecnologia cloud per generare informazioni sui comportamenti degli utenti. Vuole assicurarsi che le raccomandazioni dei giochi siano allineate agli interessi dei giocatori. Cosa pu\u00f2 aver spinto questa decisione aziendale?",
    "opzioni": [
      "I clienti si aspettano un time to market pi\u00f9 rapido per i giochi.",
      "I dipendenti si aspettano una spesa pi\u00f9 prevedibile per la gestione dei dati.",
      "I dipendenti si aspettano che le modifiche al codice sorgente vengano distribuite pi\u00f9 velocemente.",
      " I clienti si aspettano un'esperienza personalizzata."
    ],
    "risposta_corretta": "SSBjbGllbnRpIHNpIGFzcGV0dGFubyB1bidlc3BlcmllbnphIHBlcnNvbmFsaXp6YXRhLg==",
    "spiegazione": ""
  },
  {
    "id": 10,
    "domanda": "Un'organizzazione vuole introdurre una nuova funzionalit\u00e0 nella propria applicazione rivolta ai clienti. Vuole seguire le best practice SRE. Cosa dovrebbe fare l'organizzazione?",
    "opzioni": [
      "Rimandare il lancio della nuova funzione fino a quando l'automazione del lavoro non sar\u00e0 ridotta al minimo",
      "Rimandare il lancio della nuova funzione fino a quando non si \u00e8 sicuri al 100% che non ci saranno bug",
      "Distribuire la nuova funzione a tutti i clienti, in modo che nessun cliente si senta escluso",
      "Distribuire la nuova funzione a un sottoinsieme di clienti per testarla"
    ],
    "risposta_corretta": "RGlzdHJpYnVpcmUgbGEgbnVvdmEgZnVuemlvbmUgYSB1biBzb3R0b2luc2llbWUgZGkgY2xpZW50aSBwZXIgdGVzdGFybGEu",
    "spiegazione": ""
  },
  {
    "id": 11,
    "domanda": "Quale delle opzioni seguenti rappresenta quando un event processor esegue il commit della posizione dell'ultimo evento elaborato correttamente all'interno di una partizione?",
    "opzioni": [
      "Bilanciamento del carico",
      "Checkpoint",
      "Backpressure",
      "Acknowlegment"
    ],
    "risposta_corretta": "Q2hlY2twb2ludA==",
    "spiegazione": "Nel contesto dell'elaborazione eventi (come Event Hubs), il 'Checkpointing' \u00e8 il meccanismo con cui il processore segna il punto in cui \u00e8 arrivato. Se il processore si riavvia, riprender\u00e0 a leggere dall'ultimo checkpoint salvato."
  },
  {
    "id": 12,
    "domanda": "Quale modello di sicurezza presuppone lo scenario di sicurezza peggiore e protegge di conseguenza le risorse?",
    "opzioni": [
      "Difesa in profondit\u00e0",
      "Principio dei privilegi minimi",
      "Zero Trust",
      "Controllo degli accessi in base al ruolo"
    ],
    "risposta_corretta": "WmVybyBUcnVzdA==",
    "spiegazione": "Il modello Zero Trust si basa sul motto 'non fidarti mai, verifica sempre'. Presuppone che la violazione sia gi\u00e0 avvenuta o sia imminente, quindi ogni richiesta di accesso viene verificata come se provenisse da una rete non sicura."
  },
  {
    "id": 13,
    "domanda": "Un'organizzazione fornisce un Help Desk per i propri clienti. Gli addetti al servizio devono identificare i chiamanti usando gli ultimi quattro numeri della loro carta di credito. \u00c8 necessario assicurarsi che il numero completo della carta di credito non sia completamente esposto agli addetti al servizio. Quale delle seguenti funzionalit\u00e0 deve essere implementata?",
    "opzioni": [
      "Advanced Threat Protection",
      "Dynamic Data Masking",
      "Always Encrypted",
      "Classificazione dei dati"
    ],
    "risposta_corretta": "RHluYW1pYyBEYXRhIE1hc2tpbmc=",
    "spiegazione": ""
  },
  {
    "id": 14,
    "domanda": "Un'organizzazione vuole valutare le prestazioni dell'intera infrastruttura cloud, comprese metriche come i tempi di attivit\u00e0 dei server e i rapporti sulla velocit\u00e0 di risposta. Quale strumento di Google Cloud dovrebbe utilizzare l'organizzazione?",
    "opzioni": [
      "Cloud Profiler",
      "Cloud Monitoring",
      "Cloud Debugger",
      "Cloud Trace"
    ],
    "risposta_corretta": "Q2xvdWQgTW9uaXRvcmluZw==",
    "spiegazione": "Cloud Monitoring (parte della suite operativa di Google Cloud) raccoglie metriche, eventi e metadati dai servizi Google Cloud, permettendo di visualizzare lo stato di salute, l'uptime e le prestazioni generali dell'infrastruttura."
  },
  {
    "id": 15,
    "domanda": "Quale servizio viene utilizzato per eseguire applicazioni in container su AWS?",
    "opzioni": [
      "Amazon Redshift",
      "Amazon SageMaker",
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "Amazon Aurora"
    ],
    "risposta_corretta": "QW1hem9uIEVsYXN0aWMgS3ViZXJuZXRlcyBTZXJ2aWNlIChBbWF6b24gRUtTKQ==",
    "spiegazione": ""
  },
  {
    "id": 16,
    "domanda": "Quale servizio di storage di Azure supporta l'analisi di Big Data, oltre alla gestione dei dati?",
    "opzioni": [
      "Azure Data Warehouse",
      "Azure Disks",
      "Azure BLOB",
      "Azure Files"
    ],
    "risposta_corretta": "QXp1cmUgQkxPQg==",
    "spiegazione": "Azure Blob Storage \u00e8 la base per i Data Lake nel cloud. \u00c8 economico, scalabile ed \u00e8 progettato per archiviare enormi quantit\u00e0 di dati non strutturati che vengono poi analizzati da motori di Big Data."
  },
  {
    "id": 17,
    "domanda": "Quale affermazione descrive meglio AWS Marketplace?",
    "opzioni": [
      "Un catalogo digitale che include migliaia di elenchi di software di fornitori di software indipendenti",
      "Una risorsa in grado di rispondere a domande sulle best practice",
      "Uno strumento online che ispeziona il tuo ambiente AWS",
      "Una risorsa che fornisce indicazioni e revisioni dell'architettura"
    ],
    "risposta_corretta": "VW4gY2F0YWxvZ28gZGlnaXRhbGUgY2hlIGluY2x1ZGUgbWlnbGlhaWEgZGkgZWxlbmNoaSBkaSBzb2Z0d2FyZSBkaSBmb3JuaXRvcmkgZGkgc29mdHdhcmUgaW5kaXBlbmRlbnRp",
    "spiegazione": "AWS Marketplace \u00e8 come un app store per il cloud. Permette di trovare, acquistare e distribuire software di terze parti (come firewall, database, o OS specifici) che girano su AWS."
  },
  {
    "id": 18,
    "domanda": "Quale degli elementi seguenti deve essere archiviato in Azure Key Vault?",
    "opzioni": [
      "Secret",
      "ClusterRolesBindings",
      "Link a certificati esterni",
      "Managed Entities"
    ],
    "risposta_corretta": "U2VjcmV0",
    "spiegazione": "Azure Key Vault \u00e8 progettato specificamente per custodire informazioni sensibili. I 'Secret' (come password, stringhe di connessione, token API) sono una delle categorie principali di dati protetti da questo servizio."
  },
  {
    "id": 19,
    "domanda": "Un'organizzazione esegue la propria applicazione su una macchina virtuale, ma ogni volta che desidera modificare determinate funzionalit\u00e0 deve mettere il sistema offline per aggiornare l'applicazione. Quale sarebbe una soluzione pi\u00f9 appropriata per la loro applicazione?",
    "opzioni": [
      "Hypervisors",
      "Solid State Disk",
      "Containers",
      "GPUs"
    ],
    "risposta_corretta": "Q29udGFpbmVycw==",
    "spiegazione": "I container consentono aggiornamenti rolling/zero-downtime: si distribuisce una nuova versione mentre quella vecchia continua a servire traffico"
  },
  {
    "id": 20,
    "domanda": "Quale dei seguenti criteri di API Management \u00e8 necessario usare per applicare un criterio in base a una condizione?",
    "opzioni": [
      "Return-response",
      "Forward-request",
      "Limit-concurrency",
      "Choose"
    ],
    "risposta_corretta": "Q2hvb3Nl",
    "spiegazione": "Il criterio 'Choose' funziona come un blocco if-then-else nella programmazione. Permette di definire logiche condizionali all'interno del flusso di gestione delle API (es. 'se l'header \u00e8 X, fai questo, altrimenti fai quello')."
  },
  {
    "id": 21,
    "domanda": "Un'organizzazione ha creato un sito web di e-commerce. Quali dati di questo sito web sono considerati dati strutturati?",
    "opzioni": [
      "Recensioni sui prodotti",
      "Descrizioni dei prodotti",
      "Fotografie dei prodotti",
      "Punteggio delle valutazioni dei prodotti"
    ],
    "risposta_corretta": "UHVudGVnZ2lvIGRlbGxlIHZhbHV0YXppb25pIGRlaSBwcm9kb3R0aQ==",
    "spiegazione": "I dati strutturati sono quelli altamente organizzati e facili da cercare, tipicamente numeri o categorie fisse. Il punteggio (es. 4.5 su 5) \u00e8 un dato strutturato, mentre foto e descrizioni testuali libere sono dati non strutturati."
  },
  {
    "id": 22,
    "domanda": "Un negozio al dettaglio ha scoperto una soluzione economica per creare chioschi self-service. Pu\u00f2 utilizzare l'hardware di cassa esistente e acquistare un'applicazione di assistenza clienti virtuale. Perch\u00e9 hanno bisogno di un'API?",
    "opzioni": [
      "Per collegare l'hardware di check-out al cloud pubblico",
      "Per migrare tutti i dati dei clienti per il disaster recovery.",
      "Per aggiornare l'hardware delle casse in remoto.",
      "Per collegare la nuova applicazione al sistema preesistente."
    ],
    "risposta_corretta": "UGVyIGNvbGxlZ2FyZSBsYSBudW92YSBhcHBsaWNhemlvbmUgYWwgc2lzdGVtYSBwcmVlc2lzdGVudGUu",
    "spiegazione": "Le API (Application Programming Interface) fungono da 'colla' o interprete. Permettono alla nuova app moderna del chiosco di parlare e scambiare dati con il vecchio sistema di gestione del magazzino o dei pagamenti senza doverlo sostituire."
  },
  {
    "id": 23,
    "domanda": "Vuoi inviare e ricevere messaggi tra i componenti dell'applicazione distribuiti. Quale servizio dovresti usare?",
    "opzioni": [
      "Amazon ElastiCache",
      "Amazon Route 53",
      "AWS Snowball",
      "Amazon SQS"
    ],
    "risposta_corretta": "QW1hem9uIFNRUw==",
    "spiegazione": "Amazon SQS (Simple Queue Service) \u00e8 un servizio di coda messaggi. Permette di disaccoppiare i componenti di un'applicazione: un componente invia un messaggio in coda e l'altro lo legge quando \u00e8 pronto, senza dover essere connessi simultaneamente."
  },
  {
    "id": 24,
    "domanda": "Un'organizzazione vuole adattare dinamicamente la propria applicazione per soddisfare le diverse esigenze degli utenti. Quali sono i vantaggi dell'archiviazione dei dati nel cloud per questo caso d'uso?",
    "opzioni": [
      "Pulizia e convalida automatica dei dati",
      "I dati possono essere archiviati per un accesso a lungo termine.",
      "Ingestione e analisi dei dati in tempo reale",
      "Non \u00e8 richiesta la gestione dell'accesso ai dati"
    ],
    "risposta_corretta": "SW5nZXN0aW9uZSBlIGFuYWxpc2kgZGVpIGRhdGkgaW4gdGVtcG8gcmVhbGU=",
    "spiegazione": "Per adattarsi 'dinamicamente', l'app deve sapere cosa succede ora. Il cloud eccelle nell'ingestire flussi di dati in tempo reale (streaming) e analizzarli istantaneamente per permettere all'app di reagire subito al comportamento utente."
  },
  {
    "id": 25,
    "domanda": "Quale strategia di migrazione comporta la modifica del modo in cui un'applicazione viene progettata e sviluppata, in genere utilizzando funzionalit\u00e0 native per il cloud?",
    "opzioni": [
      "Repurchasing",
      "Rehosting",
      "Replatforming",
      "Refactoring"
    ],
    "risposta_corretta": "UmVmYWN0b3Jpbmc=",
    "spiegazione": "Il Refactoring (o Rearchitecting) \u00e8 la strategia pi\u00f9 complessa ma remunerativa: implica riscrivere parti del codice dell'applicazione per sfruttare appieno le caratteristiche cloud-native come autoscaling, serverless e microservizi."
  },
  {
    "id": 26,
    "domanda": "Quale azione \u00e8 possibile eseguire in Amazon CloudFront?",
    "opzioni": [
      "Effettuare il provisioning delle risorse utilizzando linguaggi di programmazione o un file di testo.",
      "Distribuire contenuti ai clienti attraverso una rete globale di edge location.",
      "Effettuare il provisioning di una sezione isolata del cloud AWS per lanciare risorse in una rete virtuale definita dall'utente.",
      "Eseguire l'infrastruttura con un approccio al cloud ibrido."
    ],
    "risposta_corretta": "RGlzdHJpYnVpcmUgY29udGVudXRpIGFpIGNsaWVudGkgYXR0cmF2ZXJzbyB1bmEgcmV0ZSBnbG9iYWxlIGRpIGVkZ2UgbG9jYXRpb24u",
    "spiegazione": "Amazon CloudFront \u00e8 una CDN (Content Delivery Network). La sua funzione principale \u00e8 memorizzare i contenuti nella cache di server distribuiti in tutto il mondo (edge location) per servirli agli utenti con la latenza pi\u00f9 bassa possibile."
  },
  {
    "id": 27,
    "domanda": "Quale affermazione descrive meglio Elastic Load Balancing?",
    "opzioni": [
      "Un servizio che fornisce dati per monitorare le applicazioni",
      "Un servizio che gestisce cache in memoria",
      "Un servizio che distribuisce il traffico in entrata su pi\u00f9 destinazioni, come le istanze Amazon EC2",
      "Un servizio che rimuove automaticamente la capacit\u00e0"
    ],
    "risposta_corretta": "VW4gc2Vydml6aW8gY2hlIGRpc3RyaWJ1aXNjZSBpbCB0cmFmZmljbyBpbiBlbnRyYXRhIHN1IHBpw7kgZGVzdGluYXppb25pLCBjb21lIGxlIGlzdGFuemUgQW1hem9uIEVDMg==",
    "spiegazione": "ELB (Elastic Load Balancing) \u00e8 il vigile urbano del cloud. Prende tutto il traffico in arrivo dal sito web e lo smista equamente tra i vari server (istanze) disponibili per evitare che uno si sovraccarichi."
  },
  {
    "id": 28,
    "domanda": "Un'organizzazione ha server Web in aree diverse e vuole ottimizzarne la disponibilit\u00e0. Quale delle opzioni di sicurezza di rete \u00e8 pi\u00f9 adatta a questo scopo?",
    "opzioni": [
      "Azure Load Balancer",
      "Azure Application Gateway",
      "Azure Monitor",
      "Azure Front Door"
    ],
    "risposta_corretta": "QXp1cmUgRnJvbnQgRG9vcg==",
    "spiegazione": "Azure Front Door \u00e8 un bilanciatore di carico globale. A differenza del Load Balancer locale, Front Door instrada il traffico utente verso la regione (area) pi\u00f9 vicina o pi\u00f9 veloce in tutto il mondo, garantendo alta disponibilit\u00e0 globale."
  },
  {
    "id": 29,
    "domanda": "Un'organizzazione vuole implementare un flusso di lavoro serverless per risolvere un problema aziendale. Uno dei requisiti \u00e8 che la soluzione debba usare un modello di sviluppo dichiarativo. Quale delle scelte seguenti soddisfa i requisiti?",
    "opzioni": [
      "WebJobs",
      "Azure Functions",
      "Azure Container Apps",
      "Azure Logic Apps"
    ],
    "risposta_corretta": "QXp1cmUgTG9naWMgQXBwcw==",
    "spiegazione": "Le Logic Apps sono 'low-code' e dichiarative. Invece di scrivere codice (imperativo) come in Azure Functions, qui disegni visivamente il flusso di lavoro collegando blocchi predefiniti (trigger e azioni)."
  },
  {
    "id": 30,
    "domanda": "Quale tra le seguenti categorie dei piani di App Service offre le funzionalit\u00e0 massime di scale-out?",
    "opzioni": [
      "Calcolo condiviso",
      "Calcolo isolato",
      "Calcolo dedicato",
      "Calcolo ad alte prestazioni"
    ],
    "risposta_corretta": "Q2FsY29sbyBpc29sYXRv",
    "spiegazione": "Il piano 'Isolated' (ASE - App Service Environment) gira su hardware dedicato e isolato in una rete virtuale privata. Offre le capacit\u00e0 di scalabilit\u00e0 pi\u00f9 elevate e sicure rispetto ai piani condivisi o standard"
  },
  {
    "id": 31,
    "domanda": "In quanti gruppi di risorse pu\u00f2 essere presente una risorsa contemporaneamente?",
    "opzioni": [
      "Molti",
      "Nessuno",
      "Uno",
      "AI pi\u00f9 tre"
    ],
    "risposta_corretta": "VW5v",
    "spiegazione": ""
  },
  {
    "id": 32,
    "domanda": "Un'organizzazione attualmente archivia i propri dati in sede e riceve diversi livelli di traffico sul proprio sito web ogni mese. In che modo l'organizzazione potrebbe trarre vantaggio dalla modernizzazione dell'infrastruttura con la tecnologia cloud?",
    "opzioni": [
      "Disponibilit\u00e0 del servizio al 100%.",
      "Possono passare da una forte spesa operativa a un modello di spesa in conto capitale.",
      "Possono affidarsi al provider cloud per tutto il codice sorgente.",
      "Scalabilit\u00e0 agile dello storage."
    ],
    "risposta_corretta": "U2NhbGFiaWxpdMOgIGFnaWxlIGRlbGxvIHN0b3JhZ2Uu",
    "spiegazione": "Il vantaggio chiave qui \u00e8 l'elasticit\u00e0. Se il traffico aumenta, lo storage cloud scala automaticamente per accogliere i dati senza dover comprare nuovi dischi fisici; se il traffico cala, paghi di meno."
  },
  {
    "id": 33,
    "domanda": "Quale servizio consente di consolidare e gestire pi\u00f9 account AWS da un unico posto?",
    "opzioni": [
      "AWS Identity and Access Management (IAM)",
      "AWS Organizations",
      "AWS Key Management Service (AWS KMS)",
      "AWS Artifact"
    ],
    "risposta_corretta": "QVdTIE9yZ2FuaXphdGlvbnM=",
    "spiegazione": "AWS Organizations \u00e8 il servizio di governance gerarchica. Permette di creare un'organizzazione centrale per gestire la fatturazione consolidata, applicare policy di sicurezza e creare nuovi account AWS in modo centralizzato."
  },
  {
    "id": 34,
    "domanda": "Un'organizzazione vuole scalare l'architettura di macchine virtuali esistente il pi\u00f9 rapidamente possibile. Perch\u00e9 l'organizzazione dovrebbe utilizzare VMware Engine?",
    "opzioni": [
      "Per distribuire API personalizzate senza problemi.",
      "Per riformattare le macchine virtuali cos\u00ec come sono.",
      "Per archiviare istanze di macchine virtuali.",
      "Per migrare le macchine virtuali ai container."
    ],
    "risposta_corretta": "UGVyIHJpZm9ybWF0dGFyZSBsZSBtYWNjaGluZSB2aXJ0dWFsaSBjb3PDrCBjb21lIHNvbm8u",
    "spiegazione": "La risposta contiene un probabile errore di traduzione nel testo originale ('riformattare' invece di 'rehosting' o 'spostare'), ma il concetto \u00e8: VMware Engine permette di prendere le VM VMware on-premise e spostarle nel cloud 'as-is' senza doverle convertire o modificare."
  },
  {
    "id": 35,
    "domanda": "Una banca vuole monitorare il successo della rete di sportelli automatici esistente, che \u00e8 stata modernizzata con API per notificare istantaneamente ai clienti i loro trasferimenti. Qual \u00e8 il vantaggio di utilizzare Apigee per raggiungere questo obiettivo?",
    "opzioni": [
      "Permette agli sviluppatori di collegare le API bancarie al cloud pubblico.",
      "Misura e traccia il costo totale di propriet\u00e0 (TCO).",
      "Dispone di dashboard che tracciano dimensioni e metriche per la reportistica sulle API.",
      "Replica le API bancarie per creare nuovo valore aziendale."
    ],
    "risposta_corretta": "RGlzcG9uZSBkaSBkYXNoYm9hcmQgY2hlIHRyYWNjaWFubyBkaW1lbnNpb25pIGUgbWV0cmljaGUgcGVyIGxhIHJlcG9ydGlzdGljYSBzdWxsZSBBUEku",
    "spiegazione": "Apigee (piattaforma di API Management di Google) eccelle nell'analytics. Fornisce visibilit\u00e0 dettagliata su come vengono usate le API, il traffico, gli errori e la latenza, permettendo alla banca di monitorare la salute del servizio."
  },
  {
    "id": 36,
    "domanda": "Una grande organizzazione ha difficolt\u00e0 a gestire in modo efficace i costi del cloud. Vuole aumentare la visibilit\u00e0 dei costi del cloud. Quale approccio di gestione dei costi dovrebbe utilizzare l'organizzazione?",
    "opzioni": [
      "Nominare un'unica persona per monitorare la spesa cloud.",
      "Rivedere tutte le spese cloud che superano il budget di errore.",
      "Stabilire una partnership tra i team finanziari, tecnologici e aziendali.",
      "Aumentare il monitoraggio dell'infrastruttura on-premises."
    ],
    "risposta_corretta": "U3RhYmlsaXJlIHVuYSBwYXJ0bmVyc2hpcCB0cmEgaSB0ZWFtIGZpbmFuemlhcmksIHRlY25vbG9naWNpIGUgYXppZW5kYWxpLg==",
    "spiegazione": "Questo approccio \u00e8 noto come FinOps. La gestione dei costi cloud non \u00e8 solo un problema tecnico, ma richiede collaborazione culturale tra chi spende (Tech), chi paga (Finance) e chi trae valore (Business)."
  },
  {
    "id": 37,
    "domanda": "\u00c8 necessario assegnare criteri ed esaminare i budget di spesa in diverse sottoscrizioni gestite. Cosa deve essere creato per le sottoscrizioni?",
    "opzioni": [
      "Un gruppo di fatturazione",
      "Un gruppo di gestione",
      "Un gruppo di risorse annidato",
      "Un gruppo di risorse"
    ],
    "risposta_corretta": "VW4gZ3J1cHBvIGRpIGdlc3Rpb25l",
    "spiegazione": "I Gruppi di gestione (Management Groups) sono contenitori gerarchici che stanno sopra le sottoscrizioni. Applicando una policy o un budget a un gruppo di gestione, questo viene ereditato automaticamente da tutte le sottoscrizioni sottostanti."
  },
  {
    "id": 38,
    "domanda": "Un responsabile vuole maggiori informazioni sulle chiavi protette da software e sulle chiavi protette da hardware.",
    "opzioni": [
      "Nessuna differenza",
      "Le operazioni di crittografia protette da software vengono eseguite nel software e le operazioni di crittografia protette da hardware vengono eseguite all'interno del modulo di protezione hardware",
      "Solo le chiavi inattive protette da hardware vengono crittografate",
      "Le chiavi protette da software non sono isolate dall'applicazione"
    ],
    "risposta_corretta": "TGUgb3BlcmF6aW9uaSBkaSBjcml0dG9ncmFmaWEgcHJvdGV0dGUgZGEgc29mdHdhcmUgdmVuZ29ubyBlc2VndWl0ZSBuZWwgc29mdHdhcmUgZSBsZSBvcGVyYXppb25pIGRpIGNyaXR0b2dyYWZpYSBwcm90ZXR0ZSBkYSBoYXJkd2FyZSB2ZW5nb25vIGVzZWd1aXRlIGFsbCdpbnRlcm5vIGRlbCBtb2R1bG8gZGkgcHJvdGV6aW9uZSBoYXJkd2FyZQ==",
    "spiegazione": "La differenza sta nel 'dove' avviene la crittografia. Le chiavi Hardware (HSM) offrono una sicurezza superiore perch\u00e9 le operazioni crittografiche avvengono in un chip fisico dedicato e tamper-resistant, mai esposte alla memoria del software principale."
  },
  {
    "id": 39,
    "domanda": "Un'organizzazione vuole cercare e condividere componenti AI plug-and-play che permettano di integrare facilmente i servizi di ML nel proprio progetto. Quale prodotto Google Cloud dovrebbe utilizzare l'organizzazione?",
    "opzioni": [
      "Cloud Talent Solution",
      "AI Hub",
      "Recommendations AI",
      "Document AI"
    ],
    "risposta_corretta": "QUkgSHVi",
    "spiegazione": "AI Hub \u00e8 un catalogo di risorse per l'intelligenza artificiale. Permette di scoprire, condividere e riutilizzare componenti ML gi\u00e0 pronti (come pipeline o modelli addestrati) per accelerare lo sviluppo senza partire da zero."
  },
  {
    "id": 40,
    "domanda": "Un'organizzazione ha migrato completamente tutta la propria infrastruttura nel cloud per beneficiare della sua agilit\u00e0. Ora vuole innovare pi\u00f9 velocemente e ottenere un maggiore ritorno sugli investimenti. Cosa dovrebbe fare l'organizzazione?",
    "opzioni": [
      "Eseguire il provisioning manuale di tutta l'infrastruttura.",
      "Tornare a un'architettura ibrida.",
      "Modernizzare le applicazioni.",
      "Ridurre l'obiettivo del livello di servizio (SLO)"
    ],
    "risposta_corretta": "TW9kZXJuaXp6YXJlIGxlIGFwcGxpY2F6aW9uaS4=",
    "spiegazione": "Dopo la migrazione 'lift-and-shift' (spostare le VM cos\u00ec come sono), il vero valore del cloud si sblocca modernizzando le app (es. passando a container, serverless o database gestiti) per ridurre i costi di gestione e aumentare la velocit\u00e0."
  },
  {
    "id": 41,
    "domanda": "Che cos'\u00e8 una revisione in Azure Container Apps?",
    "opzioni": [
      "Versione della Container App attualmente in uso",
      "Definizione di una Container App",
      "Snapshot non modificabile di una versione della Container App",
      "Snapshot dinamico di una versione della Container App"
    ],
    "risposta_corretta": "U25hcHNob3Qgbm9uIG1vZGlmaWNhYmlsZSBkaSB1bmEgdmVyc2lvbmUgZGVsbGEgQ29udGFpbmVyIEFwcA==",
    "spiegazione": "In Azure Container Apps, ogni volta che aggiorni l'applicazione, viene creata una nuova 'revisione'. Questa \u00e8 un'istantanea immutabile (non modificabile) di quella specifica versione, utile per gestire il traffico o fare rollback."
  },
  {
    "id": 42,
    "domanda": "Quale strumento viene utilizzato per automatizzare le azioni per i servizi e le applicazioni AWS tramite script?",
    "opzioni": [
      "Amazon Redshift",
      "AWS Bash",
      "AWS Snowball",
      "AWS Command Line Interface"
    ],
    "risposta_corretta": "QVdTIENvbW1hbmQgTGluZSBJbnRlcmZhY2U=",
    "spiegazione": ""
  },
  {
    "id": 43,
    "domanda": "Quale delle funzionalit\u00e0 avanzate di Azure Service Bus permette di avere garanzie FIFO (First-In, First Out)?",
    "opzioni": [
      "Recapito pianificato",
      "Sessioni",
      "Transazioni",
      "Accodamento"
    ],
    "risposta_corretta": "U2Vzc2lvbmk=",
    "spiegazione": ""
  },
  {
    "id": 44,
    "domanda": "Vuoi che Amazon S3 monitori i pattern di accesso ai tuoi oggetti. Quale classe di archiviazione utilizzare?",
    "opzioni": [
      "S3 One Zone-accesso infrequente",
      "S3 CGlacier",
      "S3 Standard-accesso infrequente",
      "S3 Intelligent-Tiering"
    ],
    "risposta_corretta": "UzMgSW50ZWxsaWdlbnQtVGllcmluZw==",
    "spiegazione": ""
  },
  {
    "id": 45,
    "domanda": "I revisori devono essere certi che i dati sensibili del database rimangano sempre crittografati quando sono inattivi, in transito e in uso. Per garantire ai revisori che questa operazione venga eseguita, quale delle funzionalit\u00e0 seguenti viene configurata?",
    "opzioni": [
      "Always Encrypted",
      "Dynamic Data Masking",
      "Classificazione dei dati",
      "Advanced Threat Protection"
    ],
    "risposta_corretta": "QWx3YXlzIEVuY3J5cHRlZA==",
    "spiegazione": ""
  },
  {
    "id": 46,
    "domanda": "Quale ruolo di Microsoft Entra \u00e8 necessario per abilitare Microsoft Entra Privileged Identity Management per la propria directory?",
    "opzioni": [
      "Amministratore di Privileged Identity Management",
      "Amministratore globale",
      "Coamministratore",
      "Amministratore di Office 365"
    ],
    "risposta_corretta": "QW1taW5pc3RyYXRvcmUgZ2xvYmFsZQ==",
    "spiegazione": "Per attivare e configurare inizialmente servizi critici di sicurezza come PIM (Privileged Identity Management), \u00e8 richiesto il livello di privilegio pi\u00f9 alto, ovvero il ruolo di Amministratore globale (Global Admin)."
  },
  {
    "id": 47,
    "domanda": "Quale servizio di Azure consente agli utenti di usare una versione di Windows ospitata nel cloud da qualsiasi posizione e connettersi dalla maggior parte dei browser moderni?",
    "opzioni": [
      "Azure Remote Desktop",
      "Azure Container Instances",
      "Azure Virtual Desktop",
      "Azure Virtual Machines"
    ],
    "risposta_corretta": "QXp1cmUgVmlydHVhbCBEZXNrdG9w",
    "spiegazione": "Azure Virtual Desktop \u00e8 la soluzione VDI (Virtual Desktop Infrastructure) specifica per offrire desktop Windows virtualizzati accessibili via web. A differenza di una semplice Virtual Machine, \u00e8 ottimizzato per l'esperienza desktop remota multi-sessione."
  },
  {
    "id": 48,
    "domanda": "Un'organizzazione vuole limitare il traffico Internet in uscita da una subnet. Quale servizio deve essere configurato?",
    "opzioni": [
      "Azure Load Balancer",
      "Azure Web Application Firewall",
      "Azure Firewall",
      "Azure Network Virtual Appliance"
    ],
    "risposta_corretta": "QXp1cmUgRmlyZXdhbGw=",
    "spiegazione": "Azure Firewall \u00e8 un servizio di sicurezza di rete gestito che protegge le risorse della rete virtuale di Azure. Permette di creare regole centralizzate per filtrare il traffico in entrata e in uscita (es. bloccare tutto tranne specifici domini)."
  },
  {
    "id": 49,
    "domanda": "Un'organizzazione vuole misurare tutto nell'ambito della sua nuova filosofia DevOps. Cosa dovr\u00e0 monitorare?",
    "opzioni": [
      "L'affidabilit\u00e0 e la salute dei sistemi.",
      "La velocit\u00e0 del processo di adozione del cloud.",
      "La soddisfazione e la felicit\u00e0 dei dipendenti.",
      "Il rischio e la ricompensa dei propri investimenti."
    ],
    "risposta_corretta": "TCdhZmZpZGFiaWxpdMOgIGUgbGEgc2FsdXRlIGRlaSBzaXN0ZW1pLg==",
    "spiegazione": "In ambito DevOps/SRE, misurare l'affidabilit\u00e0 e la salute (tramite SLO e SLA) \u00e8 fondamentale per capire se si sta rilasciando software troppo velocemente a scapito della stabilit\u00e0 o viceversa"
  },
  {
    "id": 50,
    "domanda": "Quale servizio ti consente di esaminare i dettagli delle attivit\u00e0 degli utenti e delle chiamate API che si sono verificate nel tuo ambiente AWS?",
    "opzioni": [
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS CloudTrail"
    ],
    "risposta_corretta": "QVdTIENsb3VkVHJhaWw=",
    "spiegazione": "CloudTrail \u00e8 il 'registratore di volo' del tuo account AWS. Tiene traccia di ogni chiamata API fatta (chi ha fatto cosa, quando e da dove), fondamentale per l'auditing e la sicurezza."
  },
  {
    "id": 51,
    "domanda": "La tua applicazione gestisce dati estremamente critici ed ha bisogno di garanzie massime. Quale tipo di archiviazione offre il massimo grado di durabilit\u00e0?",
    "opzioni": [
      "Archiviazione con ridondanza geografica della zona",
      "Archiviazione con ridondanza globale",
      "Archiviazione con ridondanza della zona",
      "Archiviazione con ridondanza locale"
    ],
    "risposta_corretta": "QXJjaGl2aWF6aW9uZSBjb24gcmlkb25kYW56YSBnZW9ncmFmaWNhIGRlbGxhIHpvbmE=",
    "spiegazione": "L'opzione GZRS (Geo-Zone-Redundant Storage) combina il meglio dei due mondi: copia i dati su 3 zone di disponibilit\u00e0 nella regione primaria E in pi\u00f9 li replica anche in una regione secondaria geograficamente distante."
  },
  {
    "id": 52,
    "domanda": "Quale dei protocolli di sicurezza seguenti \u00e8 supportato da Microsoft Entra ID?",
    "opzioni": [
      "Kerberos",
      "OpenID Connect",
      "OAuth 2.0",
      "IPsec"
    ],
    "risposta_corretta": "T0F1dGggMi4w",
    "spiegazione": "Microsoft Entra ID (ex Azure AD) \u00e8 un provider di identit\u00e0 moderno che supporta protocolli standard per il web come OAuth 2.0 (per l'autorizzazione) e OpenID Connect (per l'autenticazione)."
  },
  {
    "id": 53,
    "domanda": "Quale affermazione descrive meglio una zona di disponibilit\u00e0?",
    "opzioni": [
      "Un'area geografica separata con pi\u00f9 localit\u00e0 isolate l'una dall'altra",
      "Una parte completamente isolata dell'infrastruttura globale AWS",
      "Un sito utilizzato da Amazon CloudFront per memorizzare nella cache copie di contenuti",
      "Il server da cui Amazon CloudFront riceve i file"
    ],
    "risposta_corretta": "VW5hIHBhcnRlIGNvbXBsZXRhbWVudGUgaXNvbGF0YSBkZWxsJ2luZnJhc3RydXR0dXJhIGdsb2JhbGUgQVdT",
    "spiegazione": "Una Zona di Disponibilit\u00e0 (AZ) \u00e8 uno o pi\u00f9 data center fisici all'interno di una Regione, dotati di alimentazione, rete e raffreddamento indipendenti. Offrono isolamento dai guasti che colpiscono altre zone."
  },
  {
    "id": 54,
    "domanda": "Un'organizzazione vuole passare da un livello di maturit\u00e0 strategico di adozione del cloud a uno trasformazionale. Come dovrebbe cambiare il modo in cui l'organizzazione scala?",
    "opzioni": [
      "Distribuire le modifiche quando sorgono problemi.",
      "Rivedere le modifiche manualmente.",
      "Distribuire le modifiche in modo programmatico."
    ],
    "risposta_corretta": "RGlzdHJpYnVpcmUgbGUgbW9kaWZpY2hlIGluIG1vZG8gcHJvZ3JhbW1hdGljby4=",
    "spiegazione": "Il passaggio alla fase 'trasformazionale' implica l'automazione completa. Scalare non significa pi\u00f9 aggiungere server a mano, ma usare codice (Infrastructure as Code) per distribuire e gestire le risorse automaticamente."
  },
  {
    "id": 55,
    "domanda": "Quale affermazione \u00e8 VERA per AWS Lambda?",
    "opzioni": [
      "Paghi solo per il tempo di calcolo mentre il codice \u00e8 in esecuzione.",
      "Per utilizzare AWS Lambda, \u00e8 necessario configurare i server che eseguono il codice.",
      "Il primo passo nell'utilizzo di AWS Lambda \u00e8 il provisioning di un server.",
      "Prima di utilizzare AWS Lambda, \u00e8 necessario pagare in anticipo il tempo di calcolo stimato."
    ],
    "risposta_corretta": "UGFnaGkgc29sbyBwZXIgaWwgdGVtcG8gZGkgY2FsY29sbyBtZW50cmUgaWwgY29kaWNlIMOoIGluIGVzZWN1emlvbmUu",
    "spiegazione": "AWS Lambda \u00e8 un servizio 'serverless'. Non gestisci server e il modello di costo \u00e8 a consumo puro: paghi solo per i millisecondi esatti in cui la tua funzione sta elaborando una richiesta."
  },
  {
    "id": 56,
    "domanda": "Quali tipi di identit\u00e0 gestite \u00e8 possibile creare?",
    "opzioni": [
      "Assegnata dal sistema e assegnata dall'utente",
      "Assegnata dall'applicazione e assegnata dalla macchina virtuale",
      "Tutte le precedenti",
      "Assegnata dal database e non firmate"
    ],
    "risposta_corretta": "QXNzZWduYXRhIGRhbCBzaXN0ZW1hIGUgYXNzZWduYXRhIGRhbGwndXRlbnRl",
    "spiegazione": "Esistono due tipi: 'System-assigned' (legata indissolubilmente al ciclo di vita di una singola risorsa, muore con essa) e 'User-assigned' (creata come risorsa autonoma, pu\u00f2 essere assegnata a pi\u00f9 servizi diversi)."
  },
  {
    "id": 57,
    "domanda": "Un'applicazione in App Service archivia dati in uno storage account di Azure. L'app deve eseguire l'autenticazione a livello di codice, cosa \u00e8 necessario configurare?",
    "opzioni": [
      "Un'assegnazione di ruolo in controllo degli accessi in base al ruolo",
      "Un utente di sistema Microsoft Entra",
      "Autenticazione tramite browser",
      "Un'identit\u00e0 gestita"
    ],
    "risposta_corretta": "VW4naWRlbnRpdMOgIGdlc3RpdGE=",
    "spiegazione": "Le Identit\u00e0 Gestite (Managed Identities) eliminano la necessit\u00e0 di salvare credenziali nel codice. Forniscono all'App Service un'identit\u00e0 automatica in Azure AD che pu\u00f2 essere usata per autenticarsi in modo sicuro verso altri servizi (come lo Storage)."
  },
  {
    "id": 58,
    "domanda": "I dati raccolti da Azure Monitor rientrano in uno dei due tipi fondamentali. Quali sono questi tipi?",
    "opzioni": [
      "Metriche e alert",
      "Record e trigger",
      "Eventi e avvisi",
      "Log e metriche"
    ],
    "risposta_corretta": "TG9nIGUgbWV0cmljaGU=",
    "spiegazione": "Azure Monitor si basa su due pilastri: le Metriche (valori numerici misurati nel tempo, es. CPU al 80%) e i Log (record testuali di eventi specifici, es. 'il server si \u00e8 riavviato alle 10:00')."
  },
  {
    "id": 59,
    "domanda": "Quale servizio viene utilizzato per trasferire fino a 100 PB di dati in AWS?",
    "opzioni": [
      "Amazon CloudFront",
      "AWS DeepRacer",
      "AWS Snowmobile",
      "Amazon Neptune"
    ],
    "risposta_corretta": "QVdTIFNub3dtb2JpbGU=",
    "spiegazione": "AWS Snowmobile \u00e8 letteralmente un camion container che trasporta un data center mobile. Viene guidato fino alla tua sede per trasferire quantit\u00e0 esorbitanti di dati (Exabyte scale) fisicamente verso AWS, pi\u00f9 veloce della rete internet."
  },
  {
    "id": 60,
    "domanda": "Quando si distribuisce Azure Application Gateway ed \u00e8 necessario garantire che le richieste in ingresso siano esaminate per individuare eventuali minacce alla sicurezza, come cross-site scripting, cosa bisogna configurare?",
    "opzioni": [
      "Azure Network Virtual Appliance",
      "Azure Web Application Firewall",
      "Azure Firewall",
      "Azure Load Balancer"
    ],
    "risposta_corretta": "QXp1cmUgV2ViIEFwcGxpY2F0aW9uIEZpcmV3YWxs",
    "spiegazione": ""
  },
  {
    "id": 61,
    "domanda": "Quali problemi possono sorgere quando le organizzazioni integrano sistemi di terze parti nella propria infrastruttura cloud?",
    "opzioni": [
      "Senza misure di sicurezza sufficienti e controlli regolari, i sistemi di terze parti non protetti possono rappresentare una minaccia per la sicurezza dei dati.",
      "I sistemi di terze parti sono meno in grado di soddisfare i requisiti di sicurezza.",
      "I sistemi di terze parti potrebbero non essere abbastanza potenti.",
      "L'eccessiva dipendenza da sistemi di terze parti limita l'innovazione."
    ],
    "risposta_corretta": "U2VuemEgbWlzdXJlIGRpIHNpY3VyZXp6YSBzdWZmaWNpZW50aSBlIGNvbnRyb2xsaSByZWdvbGFyaSwgaSBzaXN0ZW1pIGRpIHRlcnplIHBhcnRpIG5vbiBwcm90ZXR0aSBwb3Nzb25vIHJhcHByZXNlbnRhcmUgdW5hIG1pbmFjY2lhIHBlciBsYSBzaWN1cmV6emEgZGVpIGRhdGku",
    "spiegazione": ""
  },
  {
    "id": 62,
    "domanda": "Quale componente di cloud privato virtuale (VPC) controlla il traffico in entrata e in uscita per le istanze Amazon EC2?",
    "opzioni": [
      "Lista di controllo degli accessi di rete (NACL)",
      "Gateway internet",
      "Sottorete",
      "Gruppo di sicurezza"
    ],
    "risposta_corretta": "R3J1cHBvIGRpIHNpY3VyZXp6YQ==",
    "spiegazione": "I Security Groups agiscono come un firewall virtuale a livello di istanza (VM). Sono stateful e controllano specificamente quale traffico \u00e8 permesso raggiungere o lasciare la singola istanza EC2."
  },
  {
    "id": 63,
    "domanda": "Qual \u00e8 lo scopo di un criterio di riavvio in Azure Container Instances?",
    "opzioni": [
      "Per specificare quando e se riavviare i container",
      "Per assicurarsi che i container non vengano mai riavviati",
      "Per specificare pi\u00f9 risorse di calcolo",
      "Per specificare come riavviare i container"
    ],
    "risposta_corretta": "UGVyIHNwZWNpZmljYXJlIHF1YW5kbyBlIHNlIHJpYXZ2aWFyZSBpIGNvbnRhaW5lcg==",
    "spiegazione": "La restart policy definisce il comportamento del container quando il processo al suo interno termina. Ad esempio, 'OnFailure' riavvia il container solo se l'app \u00e8 crashata, mentre 'Never' \u00e8 utile per task che devono girare una volta sola."
  },
  {
    "id": 64,
    "domanda": "Quale dei componenti della piattaforma Microsoft 365 viene usato per distribuire dati esterni all'interno di Microsoft Graph?",
    "opzioni": [
      "Microsoft Graph Connectors",
      "Microsoft Graph API",
      "Microsoft Graph Data Connect",
      "Microsoft Graph SDK"
    ],
    "risposta_corretta": "TWljcm9zb2Z0IEdyYXBoIENvbm5lY3RvcnM=",
    "spiegazione": "I Graph Connectors permettono di ingerire dati da fonti esterne (come Salesforce, ServiceNow o file server on-prem) dentro Microsoft Graph, rendendoli ricercabili e utilizzabili nelle app Microsoft 365."
  },
  {
    "id": 65,
    "domanda": "Quale dei componenti seguenti del servizio API Management userebbe uno sviluppatore per creare un account e iscriversi per ottenere l'accesso alla chiave per un'API?",
    "opzioni": [
      "API Gateway",
      "Portale di Azure",
      "Management Plane",
      "Portale per sviluppatori"
    ],
    "risposta_corretta": "UG9ydGFsZSBwZXIgc3ZpbHVwcGF0b3Jp",
    "spiegazione": "Il Developer Portal \u00e8 la faccia pubblica delle tue API. \u00c8 un sito web generato automaticamente dove gli sviluppatori esterni possono leggere la documentazione, testare le API e, soprattutto, ottenere le chiavi di accesso (API Key)."
  }
];