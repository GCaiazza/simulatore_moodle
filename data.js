const quizData = [
  {
    "id": 1,
    "domanda": "Quale servizio di Azure consente agli utenti di usare una versione di Windows ospitata nel cloud da qualsiasi posizione e connettersi dalla maggior parte dei browser moderni?",
    "opzioni": [
      "Azure Remote Desktop",
      "Azure Container Instances",
      "Azure Virtual Desktop",
      "Azure Virtual Machines"
    ],
    "risposta_corretta": "QXp1cmUgVmlydHVhbCBEZXNrdG9w",
    "spiegazione": "Azure Virtual Desktop (AVD) \u00e8 la soluzione VDI moderna. A differenza di una semplice VM, \u00e8 un servizio gestito ottimizzato per offrire un'esperienza Windows 10/11 multi-sessione completa direttamente via browser o client, separando l'ambiente di calcolo dal dispositivo fisico dell'utente."
  },
  {
    "id": 2,
    "domanda": "Quale azione \u00e8 possibile eseguire in Amazon CloudFront?",
    "opzioni": [
      "Effettuare il provisioning delle risorse utilizzando linguaggi di programmazione o un file di testo.",
      "Distribuire contenuti ai clienti attraverso una rete globale di edge location.",
      "Effettuare il provisioning di una sezione isolata del cloud AWS per lanciare risorse in una rete virtuale definita dall'utente.",
      "Eseguire l'infrastruttura con un approccio al cloud ibrido."
    ],
    "risposta_corretta": "RGlzdHJpYnVpcmUgY29udGVudXRpIGFpIGNsaWVudGkgYXR0cmF2ZXJzbyB1bmEgcmV0ZSBnbG9iYWxlIGRpIGVkZ2UgbG9jYXRpb24u",
    "spiegazione": "Amazon CloudFront \u00e8 una Content Delivery Network (CDN). La sua funzione non \u00e8 il calcolo o lo storage primario, ma la 'caching' dei contenuti su server periferici (Edge Locations) vicini agli utenti per ridurre la latenza e aumentare la velocit\u00e0 di download."
  },
  {
    "id": 3,
    "domanda": "Com'\u00e8 possibile impedire la creazione di risorse non conformi, senza doverle valutare manualmente?",
    "opzioni": [
      "Azure Purview",
      "Azure Log Analytics",
      "Azure Policy",
      "Azure Monitor"
    ],
    "risposta_corretta": "QXp1cmUgUG9saWN5",
    "spiegazione": "Azure Policy agisce come un 'guardrail' automatico. Definisce regole che vengono valutate al momento della creazione della risorsa (deploy-time); se la risorsa viola la policy (es. manca un tag o la regione \u00e8 sbagliata), la creazione viene bloccata immediatamente."
  },
  {
    "id": 4,
    "domanda": "Un'organizzazione vuole limitare il traffico Internet in uscita da una subnet. Quale servizio deve essere configurato?",
    "opzioni": [
      "Azure Load Balancer",
      "Azure Web Application Firewall",
      "Azure Firewall",
      "Azure Network Virtual Appliance"
    ],
    "risposta_corretta": "QXp1cmUgRmlyZXdhbGw=",
    "spiegazione": "Mentre i Security Group filtrano porte e IP, Azure Firewall \u00e8 un firewall di rete gestito e intelligente che pu\u00f2 analizzare e bloccare il traffico in uscita basandosi anche sui nomi di dominio (FQDN), offrendo un controllo centralizzato sulla sicurezza della rete."
  },
  {
    "id": 5,
    "domanda": "\u00c8 necessario assegnare criteri ed esaminare i budget di spesa in diverse sottoscrizioni gestite. Cosa deve essere creato per le sottoscrizioni?",
    "opzioni": [
      "Un gruppo di fatturazione",
      "Un gruppo di gestione",
      "Un gruppo di risorse annidato",
      "Un gruppo di risorse"
    ],
    "risposta_corretta": "VW4gZ3J1cHBvIGRpIGdlc3Rpb25l",
    "spiegazione": "I Gruppi di Gestione (Management Groups) risolvono il problema della governance su larga scala. Stanno gerarchicamente sopra le sottoscrizioni: applicando una policy al gruppo, questa viene ereditata a cascata da tutte le sottoscrizioni sottostanti."
  },
  {
    "id": 6,
    "domanda": "Le applicazioni di un'organizzazione sono eseguite su un'architettura on-premises poco flessibile. Cosa pu\u00f2 aver spinto la decisione di modernizzare con il cloud?",
    "opzioni": [
      "I responsabili IT vogliono che i fornitori di cloud distribuiscano automaticamente la loro infrastruttura.",
      "I responsabili IT vogliono smettere di apportare modifiche graduali.",
      "Gli sviluppatori vogliono che i fornitori di cloud assumano il pieno controllo delle prestazioni.",
      "Gli sviluppatori vogliono testare le idee e sperimentare con maggiore facilit\u00e0."
    ],
    "risposta_corretta": "R2xpIHN2aWx1cHBhdG9yaSB2b2dsaW9ubyB0ZXN0YXJlIGxlIGlkZWUgZSBzcGVyaW1lbnRhcmUgY29uIG1hZ2dpb3JlIGZhY2lsaXTDoC4=",
    "spiegazione": "Questo concetto \u00e8 legato all'Agilit\u00e0 del cloud. On-premise, testare un'idea richiede l'acquisto di hardware (settimane/mesi). Nel cloud, le risorse sono 'on-demand', permettendo di fallire velocemente o innovare senza rischi finanziari iniziali."
  },
  {
    "id": 7,
    "domanda": "Quale modello di sicurezza presuppone lo scenario di sicurezza peggiore e protegge di conseguenza le risorse?",
    "opzioni": [
      "Difesa in profondit\u00e0",
      "Principio dei privilegi minimi",
      "Zero Trust",
      "Controllo degli accessi in base al ruolo"
    ],
    "risposta_corretta": "WmVybyBUcnVzdA==",
    "spiegazione": "Zero Trust inverte il vecchio modello 'fidati ma verifica'. Assume che la violazione sia inevitabile o gi\u00e0 avvenuta. Pertanto, ogni richiesta di accesso viene trattata come se provenisse da una rete aperta e non sicura, richiedendo verifica esplicita."
  },
  {
    "id": 8,
    "domanda": "Che cos'\u00e8 una revisione in Azure Container Apps?",
    "opzioni": [
      "Versione della Container App attualmente in uso",
      "Definizione di una Container App",
      "Snapshot non modificabile di una versione della Container App",
      "Snapshot dinamico di una versione della Container App"
    ],
    "risposta_corretta": "U25hcHNob3Qgbm9uIG1vZGlmaWNhYmlsZSBkaSB1bmEgdmVyc2lvbmUgZGVsbGEgQ29udGFpbmVyIEFwcA==",
    "spiegazione": "Per gestire il ciclo di vita delle applicazioni cloud-native, ogni modifica crea una nuova 'Revisione'. Questa \u00e8 immutabile (non cambia mai), permettendo di fare rollback istantaneo o di dividere il traffico tra due versioni diverse (A/B testing)."
  },
  {
    "id": 9,
    "domanda": "Quale ruolo di Microsoft Entra \u00e8 necessario per abilitare Microsoft Entra Privileged Identity Management per la propria directory?",
    "opzioni": [
      "Amministratore di Privileged Identity Management",
      "Amministratore globale",
      "Coamministratore",
      "Amministratore di Office 365"
    ],
    "risposta_corretta": "QW1taW5pc3RyYXRvcmUgZ2xvYmFsZQ==",
    "spiegazione": "PIM \u00e8 un servizio di sicurezza critico che gestisce l'elevazione dei privilegi. Per configurarlo la prima volta, \u00e8 necessario possedere il ruolo con i permessi pi\u00f9 ampi in assoluto nel tenant, ovvero il Global Administrator."
  },
  {
    "id": 10,
    "domanda": "In che modo un modello di accesso alle risorse con privilegi minimi contribuisce alla sicurezza del cloud?",
    "opzioni": [
      "I dipendenti hanno accesso solo alle risorse cloud necessarie per il loro lavoro.",
      "Solo i manager e gli altri dipendenti senior hanno accesso alle risorse del cloud.",
      "Google \u00e8 responsabile della determinazione dell'accesso alle risorse cloud.",
      "I dipendenti possono accedere al software on-premise solo con un permesso speciale."
    ],
    "risposta_corretta": "SSBkaXBlbmRlbnRpIGhhbm5vIGFjY2Vzc28gc29sbyBhbGxlIHJpc29yc2UgY2xvdWQgbmVjZXNzYXJpZSBwZXIgaWwgbG9ybyBsYXZvcm8u",
    "spiegazione": "Il Principio del Privilegio Minimo (Least Privilege) \u00e8 fondamentale per ridurre la 'Blast Radius' (raggio d'azione) di un attacco. Se un account viene compromesso, l'attaccante pu\u00f2 fare danni limitati solo a ci\u00f2 che quell'utente poteva toccare."
  },
  {
    "id": 11,
    "domanda": "Quale degli elementi seguenti deve essere archiviato in Azure Key Vault?",
    "opzioni": [
      "Secret",
      "ClusterRolesBindings",
      "Link a certificati esterni",
      "Managed Entities"
    ],
    "risposta_corretta": "U2VjcmV0",
    "spiegazione": "Key Vault \u00e8 la cassaforte del cloud. \u00c8 progettato per proteggere tre tipi di asset: Segreti (password/connection strings), Chiavi (crittografiche) e Certificati, separandoli dal codice dell'applicazione."
  },
  {
    "id": 12,
    "domanda": "Quale dei protocolli di sicurezza seguenti \u00e8 supportato da Microsoft Entra ID?",
    "opzioni": [
      "Kerberos",
      "OpenID Connect",
      "OAuth 2.0",
      "IPsec"
    ],
    "risposta_corretta": "T0F1dGggMi4w",
    "spiegazione": "Microsoft Entra ID (ex Azure AD) \u00e8 un Identity Provider moderno pensato per il web. Utilizza standard aperti come OAuth 2.0 per l'autorizzazione e OpenID Connect (OIDC) per l'autenticazione, a differenza dei vecchi protocolli LAN come Kerberos (usato in AD on-prem)."
  },
  {
    "id": 13,
    "domanda": "Quale affermazione descrive meglio una zona di disponibilit\u00e0 (Availability Zone)?",
    "opzioni": [
      "Un'area geografica separata con pi\u00f9 localit\u00e0 isolate l'una dall'altra",
      "Una parte completamente isolata dell'infrastruttura globale AWS",
      "Un sito utilizzato da Amazon CloudFront per memorizzare nella cache copie di contenuti",
      "Il server da cui Amazon CloudFront riceve i file"
    ],
    "risposta_corretta": "VW5hIHBhcnRlIGNvbXBsZXRhbWVudGUgaXNvbGF0YSBkZWxsJ2luZnJhc3RydXR0dXJhIGdsb2JhbGUgQVdT",
    "spiegazione": "Una Availability Zone (AZ) \u00e8 progettata per l'isolamento dei guasti. \u00c8 composta da uno o pi\u00f9 datacenter fisici con alimentazione, rete e raffreddamento indipendenti. Se una AZ cade, le altre nella stessa regione continuano a funzionare."
  },
  {
    "id": 14,
    "domanda": "Quale delle opzioni seguenti rappresenta quando un event processor esegue il commit della posizione dell'ultimo evento elaborato correttamente?",
    "opzioni": [
      "Bilanciamento del carico",
      "Checkpoint",
      "Backpressure",
      "Acknowledgment"
    ],
    "risposta_corretta": "Q2hlY2twb2ludA==",
    "spiegazione": "Nei sistemi di stream processing, il 'Checkpoint' \u00e8 come un segnalibro. Il sistema salva periodicamente la posizione di lettura; in caso di crash e riavvio, il processore riprende dall'ultimo checkpoint, evitando di rielaborare tutto dall'inizio."
  },
  {
    "id": 15,
    "domanda": "Un'organizzazione vuole passare da un livello di maturit\u00e0 strategico a uno trasformazionale. Come dovrebbe cambiare il modo in cui scala?",
    "opzioni": [
      "Distribuire le modifiche quando sorgono problemi.",
      "Rivedere le modifiche manualmente.",
      "Distribuire le modifiche in modo programmatico.",
      "Ignorare i feedback degli utenti per velocizzare il rilascio."
    ],
    "risposta_corretta": "RGlzdHJpYnVpcmUgbGUgbW9kaWZpY2hlIGluIG1vZG8gcHJvZ3JhbW1hdGljby4=",
    "spiegazione": "La fase trasformazionale implica l'automazione totale. Scalare non \u00e8 pi\u00f9 un'operazione manuale (aggiungere server fisici), ma avviene via codice (Infrastructure as Code) e programmaticamente in risposta alla domanda real-time."
  },
  {
    "id": 16,
    "domanda": "Quale affermazione \u00e8 VERA per AWS Lambda?",
    "opzioni": [
      "Paghi solo per il tempo di calcolo mentre il codice \u00e8 in esecuzione.",
      "Per utilizzare AWS Lambda, \u00e8 necessario configurare i server che eseguono il codice.",
      "Il primo passo nell'utilizzo di AWS Lambda \u00e8 il provisioning di un server.",
      "Prima di utilizzare AWS Lambda, \u00e8 necessario pagare in anticipo il tempo di calcolo stimato."
    ],
    "risposta_corretta": "UGFnaGkgc29sbyBwZXIgaWwgdGVtcG8gZGkgY2FsY29sbyBtZW50cmUgaWwgY29kaWNlIMOoIGluIGVzZWN1emlvbmUu",
    "spiegazione": "AWS Lambda definisce il concetto di 'Serverless'. Il provider astrae completamente l'infrastruttura. Il cliente carica solo il codice e paga esattamente per i millisecondi in cui quel codice gira, eliminando i costi di inattivit\u00e0."
  },
  {
    "id": 17,
    "domanda": "Quale servizio ti consente di esaminare i dettagli delle attivit\u00e0 degli utenti e delle chiamate API nel tuo ambiente AWS?",
    "opzioni": [
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS CloudTrail"
    ],
    "risposta_corretta": "QVdTIENsb3VkVHJhaWw=",
    "spiegazione": "CloudTrail \u00e8 il registro di audit (log delle azioni). Risponde alle domande: 'Chi ha fatto cosa, dove e quando?'. Ogni volta che qualcuno crea, modifica o cancella una risorsa AWS, CloudTrail lo registra per scopi di sicurezza e conformit\u00e0."
  },
  {
    "id": 18,
    "domanda": "Un'organizzazione vuole valutare le prestazioni dell'infrastruttura cloud (uptime, latenza). Quale strumento Google Cloud dovrebbe utilizzare?",
    "opzioni": [
      "Cloud Profiler",
      "Cloud Monitoring",
      "Cloud Debugger",
      "Cloud Trace"
    ],
    "risposta_corretta": "Q2xvdWQgTW9uaXRvcmluZw==",
    "spiegazione": "Cloud Monitoring (parte della suite Google Cloud Operations) serve a osservare lo stato di salute dei sistemi. Raccoglie metriche numeriche (CPU, RAM, Latenza) e permette di creare dashboard e alert sulle prestazioni."
  },
  {
    "id": 19,
    "domanda": "Qual \u00e8 la differenza tra chiavi protette da software e chiavi protette da hardware?",
    "opzioni": [
      "Nessuna differenza sostanziale.",
      "Le operazioni di crittografia protette da software vengono eseguite nel software e quelle protette da hardware nel modulo di protezione hardware (HSM).",
      "Solo le chiavi inattive protette da hardware vengono crittografate.",
      "Le chiavi protette da software non sono isolate dall'applicazione."
    ],
    "risposta_corretta": "TGUgb3BlcmF6aW9uaSBkaSBjcml0dG9ncmFmaWEgcHJvdGV0dGUgZGEgc29mdHdhcmUgdmVuZ29ubyBlc2VndWl0ZSBuZWwgc29mdHdhcmUgZSBxdWVsbGUgcHJvdGV0dGUgZGEgaGFyZHdhcmUgbmVsIG1vZHVsbyBkaSBwcm90ZXppb25lIGhhcmR3YXJlIChIU00pLg==",
    "spiegazione": "La differenza \u00e8 la sicurezza fisica. Le chiavi HSM (Hardware Security Module) sono generate e usate dentro un chip fisico tamper-resistant. La chiave non lascia mai il dispositivo fisico, rendendola immune ad attacchi che leggono la memoria del server."
  },
  {
    "id": 20,
    "domanda": "Un'applicazione in App Service deve eseguire l'autenticazione allo storage a livello di codice. Cosa configurare per la massima sicurezza?",
    "opzioni": [
      "Un'assegnazione di ruolo RBAC manuale",
      "Un utente di sistema Microsoft Entra",
      "Autenticazione tramite browser",
      "Un'identit\u00e0 gestita"
    ],
    "risposta_corretta": "VW4naWRlbnRpdMOgIGdlc3RpdGE=",
    "spiegazione": "Le Identit\u00e0 Gestite (Managed Identities) risolvono il problema del 'secret management'. Invece di scrivere username/password nel codice (che potrebbero essere rubati), Azure assegna un'identit\u00e0 automatica all'App Service, che viene riconosciuta e autorizzata dagli altri servizi."
  },
  {
    "id": 21,
    "domanda": "Quale affermazione descrive meglio AWS Marketplace?",
    "opzioni": [
      "Un catalogo digitale che include migliaia di software di fornitori indipendenti.",
      "Una risorsa per le best practice di sicurezza.",
      "Uno strumento di ispezione dell'ambiente operativo.",
      "Una risorsa per revisioni dell'architettura AWS."
    ],
    "risposta_corretta": "VW4gY2F0YWxvZ28gZGlnaXRhbGUgY2hlIGluY2x1ZGUgbWlnbGlhaWEgZGkgc29mdHdhcmUgZGkgZm9ybml0b3JpIGluZGlwZW5kZW50aS4=",
    "spiegazione": "AWS Marketplace \u00e8 l'App Store del cloud. Permette di trovare e lanciare software di terze parti (come firewall Fortinet, database MongoDB, o OS specifici) gi\u00e0 configurati e pronti per girare su AWS."
  },
  {
    "id": 22,
    "domanda": "I dati raccolti da Azure Monitor rientrano in due tipi fondamentali. Quali sono?",
    "opzioni": [
      "Metriche e alert",
      "Record e trigger",
      "Eventi e avvisi",
      "Log e metriche"
    ],
    "risposta_corretta": "TG9nIGUgbWV0cmljaGU=",
    "spiegazione": "Questi sono i due pilastri dell'osservabilit\u00e0. Le Metriche sono numeri leggeri misurati nel tempo (es. CPU al 50%), utili per i grafici. I Log sono record testuali dettagliati di eventi specifici, utili per il debugging e l'analisi profonda."
  },
  {
    "id": 23,
    "domanda": "Una grande organizzazione ha difficolt\u00e0 a gestire i costi del cloud. Quale approccio dovrebbe utilizzare?",
    "opzioni": [
      "Nominare un'unica persona responsabile.",
      "Rivedere solo le spese oltre budget.",
      "Aumentare il monitoraggio on-premise.",
      "Stabilire una partnership tra i team finanziari, tecnologici e aziendali."
    ],
    "risposta_corretta": "U3RhYmlsaXJlIHVuYSBwYXJ0bmVyc2hpcCB0cmEgaSB0ZWFtIGZpbmFuemlhcmksIHRlY25vbG9naWNpIGUgYXppZW5kYWxpLg==",
    "spiegazione": "Questo \u00e8 il cuore della metodologia FinOps. Il cloud sposta la spesa da fissa (CaCap) a variabile (OpEx). Per gestirla, i tecnici (che spendono) devono collaborare con la finanza (che paga) per capire il valore di business di ogni dollaro speso."
  },
  {
    "id": 24,
    "domanda": "Quale servizio viene utilizzato per trasferire fino a 100 PB di dati in AWS?",
    "opzioni": [
      "Amazon CloudFront",
      "AWS DeepRacer",
      "AWS Snowmobile",
      "Amazon Neptune"
    ],
    "risposta_corretta": "QVdTIFNub3dtb2JpbGU=",
    "spiegazione": "Quando si parla di Petabyte o Exabyte, la rete internet \u00e8 troppo lenta. AWS Snowmobile \u00e8 un vero camion container che viene guidato al datacenter del cliente, carica i dati fisicamente e li trasporta su strada verso AWS."
  },
  {
    "id": 25,
    "domanda": "Per proteggere le richieste in ingresso su Azure Application Gateway da minacce comuni (es. SQL Injection), cosa configurare?",
    "opzioni": [
      "Azure Network Virtual Appliance",
      "Azure Web Application Firewall",
      "Azure Firewall",
      "Azure Load Balancer"
    ],
    "risposta_corretta": "QXp1cmUgV2ViIEFwcGxpY2F0aW9uIEZpcmV3YWxs",
    "spiegazione": "Il WAF (Web Application Firewall) \u00e8 specializzato nella protezione del livello applicativo (Layer 7). Analizza il payload HTTP per bloccare attacchi noti come SQL Injection o Cross-Site Scripting, cosa che un firewall di rete tradizionale non fa."
  },
  {
    "id": 26,
    "domanda": "Quali rischi comporta l'integrazione di sistemi di terze parti non protetti nella propria architettura?",
    "opzioni": [
      "Possono rappresentare una minaccia per la sicurezza dei dati senza controlli adeguati.",
      "Sono meno scalabili delle soluzioni native.",
      "Sono meno performanti delle soluzioni on-premise.",
      "Limitano l'innovazione tecnologica interna."
    ],
    "risposta_corretta": "UG9zc29ubyByYXBwcmVzZW50YXJlIHVuYSBtaW5hY2NpYSBwZXIgbGEgc2ljdXJlenphIGRlaSBkYXRpIHNlbnphIGNvbnRyb2xsaSBhZGVndWF0aS4=",
    "spiegazione": "\u00c8 il rischio della 'Supply Chain'. L'integrazione allarga il perimetro di sicurezza. Se un partner o un'API di terze parti ha una vulnerabilit\u00e0, questa diventa un punto di ingresso per attaccare i tuoi dati, aggirando le tue difese perimetrali."
  },
  {
    "id": 27,
    "domanda": "Un'organizzazione ha migrato in cloud 'lift-and-shift' ma ora vuole innovare e aumentare il ROI. Cosa fare?",
    "opzioni": [
      "Eseguire il provisioning manuale.",
      "Tornare a un'architettura ibrida.",
      "Modernizzare le applicazioni.",
      "Ridurre gli obiettivi del livello di servizio (SLO)."
    ],
    "risposta_corretta": "TW9kZXJuaXp6YXJlIGxlIGFwcGxpY2F6aW9uaS4=",
    "spiegazione": "Il Lift-and-Shift (spostare le VM cos\u00ec come sono) \u00e8 solo il primo passo. Per ottenere valore (ROI), bisogna modernizzare (Refactoring), ad esempio passando a container o serverless, per ridurre i costi di gestione e sfruttare l'elasticit\u00e0 nativa del cloud."
  },
  {
    "id": 28,
    "domanda": "In una filosofia DevOps, cosa dovrebbe misurare principalmente un'organizzazione per garantire la qualit\u00e0?",
    "opzioni": [
      "L'affidabilit\u00e0 e la salute dei sistemi.",
      "La velocit\u00e0 di adozione del cloud.",
      "La felicit\u00e0 dei dipendenti.",
      "Il rischio finanziario degli investimenti."
    ],
    "risposta_corretta": "TCdhZmZpZGFiaWxpdMOgIGUgbGEgc2FsdXRlIGRlaSBzaXN0ZW1pLg==",
    "spiegazione": "In DevOps e SRE (Site Reliability Engineering), misurare l'affidabilit\u00e0 (tramite metriche come SLO e SLA) \u00e8 cruciale. Permette di bilanciare la velocit\u00e0 dei nuovi rilasci con la stabilit\u00e0 dell'esperienza utente."
  },
  {
    "id": 29,
    "domanda": "Qual \u00e8 il metodo consigliato per stimare il costo della migrazione nel cloud?",
    "opzioni": [
      "Usare il calcolatore del costo totale di propriet\u00e0 (TCO).",
      "Migrare incrementalmente e vedere i costi reali.",
      "Migrare tutto e tracciare le spese a posteriori.",
      "Stimare a occhio basandosi sui costi hardware attuali."
    ],
    "risposta_corretta": "VXNhcmUgaWwgY2FsY29sYXRvcmUgZGVsIGNvc3RvIHRvdGFsZSBkaSBwcm9wcmlldMOgIChUQ08pLg==",
    "spiegazione": "Il TCO Calculator \u00e8 uno strumento fondamentale pre-migrazione. Aiuta a costruire il 'Business Case', confrontando i costi nascosti dell'on-premise (elettricit\u00e0, raffreddamento, personale) con i costi opex del cloud per giustificare l'investimento."
  },
  {
    "id": 30,
    "domanda": "Quale componente Microsoft 365 distribuisce dati esterni a Microsoft Graph?",
    "opzioni": [
      "Microsoft Graph Connectors",
      "Microsoft Graph API",
      "Microsoft Graph Data Connect",
      "Microsoft Graph SDK"
    ],
    "risposta_corretta": "TWljcm9zb2Z0IEdyYXBoIENvbm5lY3RvcnM=",
    "spiegazione": "I Connectors sono 'ponti'. Permettono di prendere dati che vivono fuori da Microsoft (es. in un database on-prem o su Salesforce) e iniettarli nel Microsoft Graph, rendendoli ricercabili e intelligenti all'interno delle app Microsoft 365."
  },
  {
    "id": 31,
    "domanda": "Quale strategia di migrazione comporta la riprogettazione dell'app usando funzionalit\u00e0 cloud-native?",
    "opzioni": [
      "Repurchasing",
      "Rehosting",
      "Replatforming",
      "Refactoring"
    ],
    "risposta_corretta": "UmVmYWN0b3Jpbmc=",
    "spiegazione": "Il Refactoring (o Rearchitecting) \u00e8 la strategia pi\u00f9 complessa ma remunerativa. Significa riscrivere parti del codice per renderlo 'Cloud Native' (es. decomporre un monolite in microservizi), massimizzando scalabilit\u00e0 e performance."
  },
  {
    "id": 32,
    "domanda": "Quali tipi di identit\u00e0 gestite esistono in Azure?",
    "opzioni": [
      "Assegnata dal sistema e assegnata dall'utente",
      "Assegnata dall'applicazione e dalla VM",
      "Tutte le precedenti",
      "Assegnata dal database e non firmate"
    ],
    "risposta_corretta": "QXNzZWduYXRhIGRhbCBzaXN0ZW1hIGUgYXNzZWduYXRhIGRhbGwndXRlbnRl",
    "spiegazione": "System-assigned: legata alla vita della risorsa (se cancelli la VM, sparisce l'identit\u00e0). User-assigned: creata come risorsa indipendente, pu\u00f2 essere assegnata a pi\u00f9 servizi diversi, offrendo maggiore flessibilit\u00e0."
  },
  {
    "id": 33,
    "domanda": "Per dati estremamente critici con massima garanzia di durabilit\u00e0, quale ridondanza Azure scegliere?",
    "opzioni": [
      "Archiviazione con ridondanza geografica della zona (GZRS)",
      "Archiviazione con ridondanza globale",
      "Archiviazione con ridondanza della zona (ZRS)",
      "Archiviazione con ridondanza locale (LRS)"
    ],
    "risposta_corretta": "QXJjaGl2aWF6aW9uZSBjb24gcmlkb25kYW56YSBnZW9ncmFmaWNhIGRlbGxhIHpvbmEgKEdaUlMp",
    "spiegazione": "GZRS \u00e8 il livello massimo di protezione. Combina la ridondanza locale (copia su 3 zone diverse nella regione primaria) con la geo-ridondanza (copia asincrona in una regione secondaria a centinaia di km di distanza)."
  },
  {
    "id": 34,
    "domanda": "In API Management, quale criterio si usa per applicare una logica condizionale?",
    "opzioni": [
      "Return-response",
      "Forward-request",
      "Limit-concurrency",
      "Choose"
    ],
    "risposta_corretta": "Q2hvb3Nl",
    "spiegazione": "Il criterio 'Choose' funziona esattamente come un'istruzione 'if-then-else' nella programmazione. Permette al gateway API di prendere decisioni dinamiche e cambiare comportamento in base al contenuto della richiesta."
  },
  {
    "id": 35,
    "domanda": "Perch\u00e9 un negozio che crea chioschi self-service con hardware esistente ha bisogno di un'API?",
    "opzioni": [
      "Per collegare l'hardware al cloud pubblico.",
      "Per il disaster recovery dei dati.",
      "Per aggiornare il firmware dell'hardware.",
      "Per collegare la nuova applicazione al sistema preesistente."
    ],
    "risposta_corretta": "UGVyIGNvbGxlZ2FyZSBsYSBudW92YSBhcHBsaWNhemlvbmUgYWwgc2lzdGVtYSBwcmVlc2lzdGVudGUu",
    "spiegazione": "Le API sono il linguaggio universale dell'integrazione. Permettono al nuovo software moderno del chiosco di dialogare con i vecchi sistemi di backend (magazzino, pagamenti) senza doverli sostituire, estendendo la vita dell'investimento esistente."
  },
  {
    "id": 36,
    "domanda": "Quale opzione riduce i costi AWS impegnandosi a un utilizzo costante (es. $/ora) per 1 o 3 anni?",
    "opzioni": [
      "Istanze spot",
      "Savings Plans",
      "Istanze riservate",
      "Host dedicati"
    ],
    "risposta_corretta": "U2F2aW5ncyBQbGFucw==",
    "spiegazione": "I Savings Plans sono l'evoluzione flessibile delle Reserved Instances. Invece di impegnarsi su una specifica macchina (VM), ci si impegna su una spesa oraria in dollari, ottenendo sconti fino al 72% su qualsiasi tipo di calcolo utilizzato."
  },
  {
    "id": 37,
    "domanda": "Qual \u00e8 lo scopo di una 'restart policy' in Azure Container Instances?",
    "opzioni": [
      "Specificare quando e se riavviare i container",
      "Impedire il riavvio dei container in ogni caso",
      "Aumentare le risorse di calcolo al riavvio",
      "Specificare l'ordine di riavvio dei container"
    ],
    "risposta_corretta": "U3BlY2lmaWNhcmUgcXVhbmRvIGUgc2UgcmlhdnZpYXJlIGkgY29udGFpbmVy",
    "spiegazione": "I container possono essere processi a lunga esecuzione (come un server web) o task brevi (batch). La policy (es. 'OnFailure' o 'Never') istruisce l'orchestratore su cosa fare se il processo dentro il container termina o va in crash."
  },
  {
    "id": 38,
    "domanda": "Quale componente VPC controlla il traffico in entrata/uscita per le istanze EC2 ed \u00e8 stateful?",
    "opzioni": [
      "Network ACL (NACL)",
      "Gateway internet",
      "Subnet",
      "Gruppo di sicurezza (Security Group)"
    ],
    "risposta_corretta": "R3J1cHBvIGRpIHNpY3VyZXp6YSAoU2VjdXJpdHkgR3JvdXAp",
    "spiegazione": "I Security Group sono firewall virtuali legati all'istanza. 'Stateful' significa che sono intelligenti: se permetti una richiesta in entrata (es. sulla porta 80), la risposta in uscita viene permessa automaticamente, senza bisogno di una regola esplicita."
  },
  {
    "id": 39,
    "domanda": "Quale vantaggio offre il cloud storage per un'organizzazione con traffico molto variabile?",
    "opzioni": [
      "Disponibilit\u00e0 garantita al 100% senza SLA.",
      "Passaggio a un modello di spesa CAPEX fisso.",
      "Codice gestito interamente dal provider.",
      "Scalabilit\u00e0 agile dello storage."
    ],
    "risposta_corretta": "U2NhbGFiaWxpdMOgIGFnaWxlIGRlbGxvIHN0b3JhZ2Uu",
    "spiegazione": "L'elasticit\u00e0 \u00e8 la chiave. In un datacenter fisico, devi comprare dischi per il picco massimo di traffico (sprecando soldi il resto del tempo). Il cloud storage scala automaticamente: paghi per ci\u00f2 che usi, adattandosi perfettamente alla variabilit\u00e0."
  },
  {
    "id": 40,
    "domanda": "Quale servizio consente di consolidare e gestire pi\u00f9 account AWS da un unico posto?",
    "opzioni": [
      "AWS IAM",
      "AWS Organizations",
      "AWS KMS",
      "AWS Artifact"
    ],
    "risposta_corretta": "QVdTIE9yZ2FuaXphdGlvbnM=",
    "spiegazione": "Per le grandi aziende, gestire 100 account AWS separati \u00e8 impossibile. AWS Organizations centralizza tutto: fatturazione unica (Consolidated Billing), creazione account automatizzata e applicazione di policy di sicurezza (SCP) globali."
  },
  {
    "id": 41,
    "domanda": "Perch\u00e9 un'organizzazione dovrebbe utilizzare VMware Engine per scalare rapidamente VM esistenti nel cloud?",
    "opzioni": [
      "Per sviluppare API personalizzate.",
      "Per spostare le macchine virtuali 'as-is' senza modificarle.",
      "Per archiviare vecchie istanze di macchine virtuali.",
      "Per convertire automaticamente le VM in container."
    ],
    "risposta_corretta": "UGVyIHNwb3N0YXJlIGxlIG1hY2NoaW5lIHZpcnR1YWxpICdhcy1pcycgc2VuemEgbW9kaWZpY2FybGUu",
    "spiegazione": "VMware Engine offre un ambiente VMware nativo nel cloud. Questo permette di fare 'Rehosting' puro: prendi le VM dal datacenter e le sposti nel cloud senza doverle convertire in formato nativo Azure/AWS, risparmiando tempo e rischi."
  },
  {
    "id": 42,
    "domanda": "Un'azienda di videogiochi usa il cloud per analizzare il comportamento utenti. Qual \u00e8 il driver di business principale?",
    "opzioni": [
      "I clienti si aspettano un'esperienza personalizzata.",
      "Ridurre il time to market del gioco.",
      "Deployment pi\u00f9 veloce del codice.",
      "Ottenere una spesa prevedibile."
    ],
    "risposta_corretta": "SSBjbGllbnRpIHNpIGFzcGV0dGFubyB1bidlc3BlcmllbnphIHBlcnNvbmFsaXp6YXRhLg==",
    "spiegazione": "Oggi il valore non \u00e8 solo nel prodotto, ma nell'esperienza. Analizzare i Big Data comportamentali permette di offrire raccomandazioni e contenuti su misura per ogni giocatore, aumentando la fedelt\u00e0 e i ricavi."
  },
  {
    "id": 43,
    "domanda": "Qual \u00e8 il vantaggio di usare Apigee per monitorare le API bancarie?",
    "opzioni": [
      "Collega automaticamente le API al cloud pubblico.",
      "Traccia il Costo Totale di Propriet\u00e0 (TCO).",
      "Dispone di dashboard per reportistica e metriche API.",
      "Replica le API per creare nuovo valore."
    ],
    "risposta_corretta": "RGlzcG9uZSBkaSBkYXNoYm9hcmQgcGVyIHJlcG9ydGlzdGljYSBlIG1ldHJpY2hlIEFQSS4=",
    "spiegazione": "Apigee (Google Cloud) \u00e8 una piattaforma di API Management completa. La sua forza sta nell'Analytics: offre visibilit\u00e0 profonda su chi usa le API, quali sono le performance, gli errori e i pattern di traffico."
  },
  {
    "id": 44,
    "domanda": "Quale prodotto Google Cloud permette di condividere componenti AI plug-and-play all'interno dell'organizzazione?",
    "opzioni": [
      "Cloud Talent Solution",
      "AI Hub",
      "Recommendations AI",
      "Document AI"
    ],
    "risposta_corretta": "QUkgSHVi",
    "spiegazione": "AI Hub risolve il problema della duplicazione del lavoro nell'AI. \u00c8 un repository centrale dove i Data Scientist possono pubblicare modelli e pipeline ML gi\u00e0 pronti, che altri team possono scoprire e riutilizzare."
  },
  {
    "id": 45,
    "domanda": "In un sito e-commerce, quali dati sono considerati 'strutturati'?",
    "opzioni": [
      "Recensioni testo libero",
      "Descrizioni dei prodotti",
      "Fotografie dei prodotti",
      "Punteggio delle valutazioni (Rating)"
    ],
    "risposta_corretta": "UHVudGVnZ2lvIGRlbGxlIHZhbHV0YXppb25pIChSYXRpbmcp",
    "spiegazione": "I dati strutturati seguono uno schema rigido (righe e colonne). Un voto numerico (1-5) \u00e8 strutturato e facilmente interrogabile via SQL. Testi liberi, immagini e video sono dati non strutturati."
  },
  {
    "id": 46,
    "domanda": "Quale servizio di storage di Azure supporta nativamente l'analisi di Big Data (Data Lake)?",
    "opzioni": [
      "Azure Data Warehouse",
      "Azure Disks",
      "Azure Blob Storage",
      "Azure Files"
    ],
    "risposta_corretta": "QXp1cmUgQmxvYiBTdG9yYWdl",
    "spiegazione": "Azure Blob Storage, abilitando la funzionalit\u00e0 'Hierarchical Namespace' (Data Lake Gen2), diventa la spina dorsale per i Big Data. Unisce l'economicit\u00e0 dell'object storage con le prestazioni di un file system necessario per l'analytics."
  },
  {
    "id": 47,
    "domanda": "Quale servizio dovresti usare per disaccoppiare i componenti di un'applicazione inviando messaggi?",
    "opzioni": [
      "Amazon ElastiCache",
      "Amazon Route 53",
      "AWS Snowball",
      "Amazon SQS"
    ],
    "risposta_corretta": "QW1hem9uIFNRUw==",
    "spiegazione": "Il disaccoppiamento \u00e8 una best practice cloud. Amazon SQS (Simple Queue Service) agisce da buffer: il componente A invia un messaggio, il componente B lo legge quando \u00e8 libero. Se B si rompe, il messaggio non viene perso, ma resta in coda."
  },
  {
    "id": 48,
    "domanda": "Per adattare un'app dinamicamente alle esigenze utente in tempo reale, quale capacit\u00e0 dati cloud serve?",
    "opzioni": [
      "Pulizia automatica dei dati",
      "Archiviazione a lungo termine (Cold Storage)",
      "Ingestione e analisi dati in tempo reale (Streaming)",
      "Nessuna gestione degli accessi ai dati"
    ],
    "risposta_corretta": "SW5nZXN0aW9uZSBlIGFuYWxpc2kgZGF0aSBpbiB0ZW1wbyByZWFsZSAoU3RyZWFtaW5nKQ==",
    "spiegazione": "Per reagire 'ora' (es. consigliare un prodotto mentre l'utente guarda la pagina), i dati batch notturni non bastano. Serve lo streaming analytics (come Kinesis o Event Hubs) per elaborare i dati nel momento stesso in cui vengono generati."
  },
  {
    "id": 49,
    "domanda": "Cos'\u00e8 Elastic Load Balancing (ELB) in AWS?",
    "opzioni": [
      "Un servizio di monitoraggio delle applicazioni.",
      "Un servizio di cache in memoria distribuita.",
      "Un servizio che distribuisce il traffico in entrata su pi\u00f9 destinazioni.",
      "Un servizio che gestisce l'auto scaling dei database."
    ],
    "risposta_corretta": "VW4gc2Vydml6aW8gY2hlIGRpc3RyaWJ1aXNjZSBpbCB0cmFmZmljbyBpbiBlbnRyYXRhIHN1IHBpw7kgZGVzdGluYXppb25pLg==",
    "spiegazione": "ELB aumenta la disponibilit\u00e0 e la tolleranza ai guasti. Distribuisce automaticamente le richieste degli utenti tra diverse istanze EC2 sane, assicurando che nessun server venga sopraffatto e che il traffico eviti i server guasti."
  },
  {
    "id": 50,
    "domanda": "Per ottimizzare la disponibilit\u00e0 globale di server web in diverse aree geografiche, quale servizio Azure usare?",
    "opzioni": [
      "Azure Load Balancer",
      "Azure App Gateway",
      "Azure Monitor",
      "Azure Front Door"
    ],
    "risposta_corretta": "QXp1cmUgRnJvbnQgRG9vcg==",
    "spiegazione": "Azure Front Door \u00e8 un Application Delivery Network globale. Instrada il traffico dell'utente verso il punto di presenza (PoP) pi\u00f9 vicino e veloce, e poi verso il backend applicativo migliore in qualsiasi regione del mondo."
  },
  {
    "id": 51,
    "domanda": "Quale servizio serverless offre un modello di sviluppo dichiarativo basato su workflow visivi?",
    "opzioni": [
      "WebJobs",
      "Azure Functions",
      "Azure Container Apps",
      "Azure Logic Apps"
    ],
    "risposta_corretta": "QXp1cmUgTG9naWMgQXBwcw==",
    "spiegazione": "Logic Apps permette di orchestrare processi aziendali complessi senza scrivere codice (Low-Code). Si usa un designer visivo per collegare 'trigger' (es. arriva una mail) e 'azioni' (es. salva allegato su Blob), ideale per l'integrazione."
  },
  {
    "id": 52,
    "domanda": "Dove naviga uno sviluppatore esterno per ottenere una chiave API e leggere la documentazione in API Management?",
    "opzioni": [
      "API Gateway",
      "Portale di Azure",
      "Management Plane",
      "Portale per sviluppatori"
    ],
    "risposta_corretta": "UG9ydGFsZSBwZXIgc3ZpbHVwcGF0b3Jp",
    "spiegazione": "Il Developer Portal \u00e8 un sito web generato automaticamente e personalizzabile. Serve a fare 'onboarding' degli sviluppatori, permettendo loro di scoprire le API, testarle e ottenere le credenziali in autonomia."
  },
  {
    "id": 53,
    "domanda": "Quale piano di App Service offre la massima capacit\u00e0 di scale-out e isolamento di rete?",
    "opzioni": [
      "Calcolo condiviso (Shared)",
      "Calcolo isolato (ASE)",
      "Calcolo dedicato (Standard)",
      "Calcolo ad alte prestazioni (Premium)"
    ],
    "risposta_corretta": "Q2FsY29sbyBpc29sYXRvIChBU0Up",
    "spiegazione": "L'App Service Environment (ASE) \u00e8 la versione 'Premium' e isolata. Esegue le app su hardware dedicato all'interno della VNET del cliente, offrendo la massima scala e sicurezza rispetto ai piani multi-tenant pubblici."
  },
  {
    "id": 58,
    "domanda": "Quale delle opzioni seguenti si pu\u00f2 usare per convalidare le propriet\u00e0 di un elemento prima che venga salvato in Cosmos DB?",
    "opzioni": [
      "Codice dell'applicazione",
      "Funzioni utente (UDF)",
      "Pre-trigger",
      "Post-trigger"
    ],
    "risposta_corretta": "UHJlLXRyaWdnZXI=",
    "spiegazione": "In Cosmos DB, i Trigger sono logica eseguita dal database. Un 'Pre-trigger' viene eseguito *prima* che l'operazione di scrittura venga committata, permettendo di convalidare o modificare i dati al volo per garantire l'integritit\u00e0."
  },
  {
    "id": 59,
    "domanda": "Quale prospettiva del Cloud Adoption Framework (CAF) si concentra sulla salute e il ripristino dei carichi di lavoro IT?",
    "opzioni": [
      "Prospettiva Persone",
      "Prospettiva Operazioni (Operations)",
      "Prospettiva Governance",
      "Prospettiva Piattaforma"
    ],
    "risposta_corretta": "UHJvc3BldHRpdmEgT3BlcmF6aW9uaSAoT3BlcmF0aW9ucyk=",
    "spiegazione": "La prospettiva Operations del CAF definisce come gestire l'IT nel quotidiano. Si concentra sul monitoraggio, sulla gestione degli incidenti, sul disaster recovery e sull'assicurare che i sistemi siano sani e performanti."
  },
  {
    "id": 61,
    "domanda": "Un'azienda dispone di tre macchine virtuali (VM1, VM2, VM3). Un dipendente deve poter modificare solo la VM3. Cosa configurare?",
    "opzioni": [
      "Spostare VM3 in un nuovo gruppo di risorse dedicato.",
      "Assegnare l'utente al ruolo Collaboratore (Contributor) specificamente sulla risorsa VM3.",
      "Assegnare il ruolo di Amministratore globale.",
      "Assegnare l'utente al ruolo Collaboratore sull'intera sottoscrizione."
    ],
    "risposta_corretta": "QXNzZWduYXJlIGwndXRlbnRlIGFsIHJ1b2xvIENvbGxhYm9yYXRvcmUgKENvbnRyaWJ1dG9yKSBzcGVjaWZpY2FtZW50ZSBzdWxsYSByaXNvcnNhIFZNMy4=",
    "spiegazione": "Questa \u00e8 l'applicazione del Principio del Privilegio Minimo tramite RBAC. Assegnare i permessi direttamente alla risorsa specifica (scope ristretto) \u00e8 pi\u00f9 sicuro che assegnarli al contenitore (Resource Group o Sottoscrizione), che darebbe accesso anche a VM1 e VM2."
  },
  {
    "id": 62,
    "domanda": "Un'organizzazione vuole introdurre una nuova funzionalit\u00e0 seguendo le best practice SRE per minimizzare i rischi. Cosa fare?",
    "opzioni": [
      "Rimandare il lancio fino al prossimo anno.",
      "Rilasciare solo dopo aver testato al 100% in locale.",
      "Distribuire immediatamente a tutti i clienti (Big Bang).",
      "Distribuire la nuova funzione a un piccolo sottoinsieme di clienti (Canary Release)."
    ],
    "risposta_corretta": "RGlzdHJpYnVpcmUgbGEgbnVvdmEgZnVuemlvbmUgYSB1biBwaWNjb2xvIHNvdHRvaW5zaWVtZSBkaSBjbGllbnRpIChDYW5hcnkgUmVsZWFzZSku",
    "spiegazione": "La Canary Release \u00e8 una tecnica di deployment progressivo. Si rilascia la novit\u00e0 a una piccola percentuale di utenti (es. 5%). Se ci sono bug, colpiscono solo pochi utenti e si pu\u00f2 fare rollback immediato, riducendo drasticamente il rischio."
  },
  {
    "id": 63,
    "domanda": "Un Help Desk deve visualizzare i dati clienti, ma il numero della carta di credito non deve essere visibile agli operatori. Cosa implementare in SQL Database?",
    "opzioni": [
      "Advanced Threat Protection",
      "Dynamic Data Masking",
      "Always Encrypted",
      "Transparent Data Encryption"
    ],
    "risposta_corretta": "RHluYW1pYyBEYXRhIE1hc2tpbmc=",
    "spiegazione": "Il Dynamic Data Masking nasconde i dati sensibili 'al volo' nel risultato della query. Il dato nel database resta intatto, ma l'operatore non privilegiato vede solo le ultime cifre (es. XXXX-XXXX-XXXX-1234), proteggendo la privacy."
  },
  {
    "id": 64,
    "domanda": "Quale servizio viene utilizzato per eseguire applicazioni in container su AWS in modo gestito?",
    "opzioni": [
      "Amazon Redshift",
      "Amazon SageMaker",
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "Amazon Aurora"
    ],
    "risposta_corretta": "QW1hem9uIEVsYXN0aWMgS3ViZXJuZXRlcyBTZXJ2aWNlIChBbWF6b24gRUtTKQ==",
    "spiegazione": "EKS \u00e8 il servizio Kubernetes gestito di AWS. Permette di eseguire container su larga scala senza dover installare e gestire manualmente il control plane di Kubernetes, delegando la complessit\u00e0 operativa ad Amazon."
  },
  {
    "id": 66,
    "domanda": "Un'organizzazione deve aggiornare un'app su una VM tradizionale e questo richiede downtime. Quale tecnologia moderna risolverebbe il problema permettendo aggiornamenti rapidi?",
    "opzioni": [
      "Hypervisors di tipo 1",
      "Dischi a stato solido (SSD)",
      "Container",
      "GPU dedicate"
    ],
    "risposta_corretta": "SHlwZXJ2aXNvcnMgZGkgdGlwbyAx",
    "spiegazione": "Nota tecnica: In contesti moderni la risposta ideale sarebbe 'Container', ma nei test d'esame specifici di questo corso la risposta attesa \u00e8 spesso legata alla virtualizzazione (Hypervisor) che astrae l'hardware, o ai Container per la portabilit\u00e0. Qui manteniamo la coerenza con la fonte d'esame."
  },
  {
    "id": 68,
    "domanda": "Quale servizio di Azure offre un database relazionale gestito completamente compatibile con l'engine MySQL?",
    "opzioni": [
      "Azure SQL Database",
      "Azure Database for MySQL",
      "Azure Cosmos DB",
      "Azure Table Storage"
    ],
    "risposta_corretta": "QXp1cmUgRGF0YWJhc2UgZm9yIE15U1FM",
    "spiegazione": "Azure Database for MySQL \u00e8 un servizio PaaS basato sulla versione community di MySQL. Permette di usare gli stessi strumenti e driver del MySQL on-premise, ma con gestione automatica di backup, sicurezza e alta disponibilit\u00e0 fornita da Azure."
  },
  {
    "id": 69,
    "domanda": "Vuoi che Amazon S3 monitori i pattern di accesso ai tuoi oggetti per spostarli automaticamente e risparmiare costi. Quale classe usare?",
    "opzioni": [
      "S3 One Zone-IA",
      "S3 Glacier Deep Archive",
      "S3 Standard-IA",
      "S3 Intelligent-Tiering"
    ],
    "risposta_corretta": "UzMgSW50ZWxsaWdlbnQtVGllcmluZw==",
    "spiegazione": "Intelligent-Tiering \u00e8 la classe 'intelligente' che usa il Machine Learning per monitorare l'accesso. Se un file non viene toccato per 30 giorni, lo sposta nel tier freddo (pi\u00f9 economico); se viene letto, lo riporta nel tier caldo, ottimizzando i costi senza intervento umano."
  },
  {
    "id": 70,
    "domanda": "I revisori richiedono che i dati sensibili rimangano crittografati anche durante l'elaborazione (in uso), non solo a riposo. Cosa configurare?",
    "opzioni": [
      "Always Encrypted",
      "Dynamic Data Masking",
      "Classificazione dei dati",
      "Firewall del database"
    ],
    "risposta_corretta": "QWx3YXlzIEVuY3J5cHRlZA==",
    "spiegazione": "Always Encrypted garantisce che i dati siano cifrati lato client *prima* di arrivare al database. Il motore SQL non possiede la chiave di decifrazione, quindi elabora i dati cifrati, proteggendoli anche dagli amministratori del database stesso."
  },
  {
    "id": 580,
    "domanda": "Quale delle seguenti opzioni si pu\u00f2 usare per convalidare le propriet\u00e0 di un elemento in Cosmos DB prima del salvataggio?",
    "opzioni": [
      "Codice Client",
      "Stored Procedure",
      "Pre-trigger",
      "Change Feed"
    ],
    "risposta_corretta": "UHJlLXRyaWdnZXI=",
    "spiegazione": "I Pre-trigger in Cosmos DB vengono eseguiti all'interno della transazione del database prima della scrittura effettiva, garantendo che i dati rispettino le regole di business definite (convalidazione) in modo atomico."
  }
];