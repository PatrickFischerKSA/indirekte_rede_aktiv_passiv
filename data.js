window.WORKSHOP_DATA = {
  storageKey: "indirekte-rede-aktiv-passiv-progress-v1",
  topics: ["Indirekte Rede", "Aktiv/Passiv", "Kombiniert"],
  formats: [
    "Umformen",
    "Lückentext",
    "Fehlerdiagnose",
    "Frage/Aufforderung",
    "Textrevision",
    "Mehrschritt"
  ],
  levels: [
    {
      id: "basis",
      title: "Basis",
      strapline: "klare Grundmuster sichern",
      description:
        "Grundformen der indirekten Rede und des Passivs mit überschaubaren Satzmustern, eindeutigen Bezugswörtern und einfachen Perspektivwechseln.",
      theory: [
        {
          title: "Indirekte Rede",
          points: [
            "Hauptsignal ist meist der Konjunktiv I: er sage, sie habe, es sei.",
            "Personalpronomen und Possessivpronomen müssen zur neuen Sprecherperspektive passen.",
            "Zeit- und Ortsangaben bleiben nur dann gleich, wenn die Perspektive gleich bleibt."
          ]
        },
        {
          title: "Aktiv und Passiv",
          points: [
            "Im Vorgangspassiv steht werden plus Partizip II: Der Brief wird geschrieben.",
            "Der Handelnde kann mit von oder durch ergänzt werden, muss aber nicht genannt sein.",
            "Beim Rückumformen ins Aktiv braucht der Satz wieder ein handelndes Subjekt."
          ]
        },
        {
          title: "Kombinierte Aufgaben",
          points: [
            "Erst die Aussage sichern, dann Zeitform, Pronomen und Satzperspektive anpassen.",
            "Bei Aufforderungen in der indirekten Rede hilft oft sollen.",
            "Bei mehrschrittigen Umbauten lohnt sich ein kurzer Zwischenentwurf."
          ]
        }
      ],
      modules: [
        {
          id: "basis-ir",
          topic: "Indirekte Rede",
          title: "Basis: direkte Rede sicher umformen",
          intro:
            "Diese Aufgaben trainieren die Grundmuster der indirekten Rede mit klaren Pronomen- und Tempusbezügen.",
          tasks: [
            {
              id: "basis-ir-1",
              title: "Später kommen",
              format: "Umformen",
              prompt: "Forme den Aussagesatz in die indirekte Rede um.",
              source: ["Mia sagt: „Ich komme heute später, weil ich noch trainiere.“"],
              solution: [
                "Mia sagt, sie komme heute später, weil sie noch trainiere."
              ],
              focus: ["Konjunktiv I", "Pronomenwechsel"]
            },
            {
              id: "basis-ir-2",
              title: "Bücher mitbringen",
              format: "Umformen",
              prompt: "Achte auf den Pronomen- und Zeitwechsel.",
              source: ["Tom erklärt Lea: „Wir bringen dir morgen unsere Bücher mit.“"],
              solution: [
                "Tom erklärt Lea, sie brächten ihr am nächsten Tag ihre Bücher mit."
              ],
              focus: ["Zeitangabe", "Possessivpronomen"]
            },
            {
              id: "basis-ir-3",
              title: "Fehler finden",
              format: "Fehlerdiagnose",
              prompt: "Korrigiere die indirekte Rede.",
              source: [
                "Fehlersatz: Anna meint, ich habe heute keine Zeit."
              ],
              solution: [
                "Anna meint, sie habe heute keine Zeit.",
                "Das Pronomen muss aus Annas Perspektive in die dritte Person wechseln."
              ],
              focus: ["Sprecherwechsel", "Subjektbezug"]
            },
            {
              id: "basis-ir-4",
              title: "Lückentext zum Konjunktiv",
              format: "Lückentext",
              prompt: "Setze die passende Form ein.",
              source: [
                "Der Trainer sagt, die Mannschaft ______ heute sehr konzentriert. (arbeiten)"
              ],
              solution: [
                "Der Trainer sagt, die Mannschaft arbeite heute sehr konzentriert."
              ],
              focus: ["Konjunktiv I", "Singularformen"]
            },
            {
              id: "basis-ir-5",
              title: "Aufforderung wiedergeben",
              format: "Frage/Aufforderung",
              prompt: "Gib die Aufforderung in indirekter Rede wieder.",
              source: [
                "Frau Keller sagt zu Ben: „Schick mir die Datei heute noch.“"
              ],
              solution: [
                "Frau Keller sagt zu Ben, er solle ihr die Datei noch heute schicken."
              ],
              focus: ["sollen", "Dativpronomen"]
            },
            {
              id: "basis-ir-6",
              title: "Ja-Nein-Frage",
              format: "Frage/Aufforderung",
              prompt: "Forme die Frage in indirekte Rede um.",
              source: ["Lara fragt: „Kann ich morgen später anfangen?“"],
              solution: [
                "Lara fragt, ob sie am nächsten Tag später anfangen könne."
              ],
              focus: ["ob-Satz", "Modalverb"]
            }
          ]
        },
        {
          id: "basis-ap",
          topic: "Aktiv/Passiv",
          title: "Basis: Aktiv und Passiv erkennen und bilden",
          intro:
            "Hier stehen einfache Aktiv-Passiv-Umbauten mit klaren handelnden Personen und gut sichtbaren Objekten im Zentrum.",
          tasks: [
            {
              id: "basis-ap-1",
              title: "Raum dekorieren",
              format: "Umformen",
              prompt: "Setze den Aktivsatz ins Passiv.",
              source: ["Die Klasse dekoriert den Raum."],
              solution: [
                "Der Raum wird von der Klasse dekoriert."
              ],
              focus: ["Vorgangspassiv", "von-Ergänzung"]
            },
            {
              id: "basis-ap-2",
              title: "Probe untersuchen",
              format: "Umformen",
              prompt: "Setze den Aktivsatz ins Passiv.",
              source: ["Im Labor untersucht man die Probe."],
              solution: [
                "Die Probe wird im Labor untersucht."
              ],
              focus: ["man-Satz", "Passiv ohne Agens"]
            },
            {
              id: "basis-ap-3",
              title: "Türen öffnen",
              format: "Umformen",
              prompt: "Setze den Passivsatz ins Aktiv.",
              source: ["Die Türen werden um acht Uhr geöffnet."],
              solution: [
                "Man öffnet die Türen um acht Uhr."
              ],
              focus: ["Aktivrückbildung", "Subjekt ergänzen"]
            },
            {
              id: "basis-ap-4",
              title: "Brand löschen",
              format: "Umformen",
              prompt: "Setze den Aktivsatz ins Passiv.",
              source: ["Die Feuerwehr löschte den Brand schnell."],
              solution: [
                "Der Brand wurde von der Feuerwehr schnell gelöscht."
              ],
              focus: ["Präteritum", "Vorgangspassiv"]
            },
            {
              id: "basis-ap-5",
              title: "Fehlersatz korrigieren",
              format: "Fehlerdiagnose",
              prompt: "Der Satz ist kein korrektes Passiv. Verbessere ihn.",
              source: ["Fehlersatz: Das Essen wurde kocht."],
              solution: [
                "Das Essen wurde gekocht.",
                "Im Passiv steht das Partizip II: gekocht."
              ],
              focus: ["Partizip II", "Formenlehre"]
            },
            {
              id: "basis-ap-6",
              title: "Paket zustellen",
              format: "Lückentext",
              prompt: "Ergänze die passende Passivform.",
              source: [
                "Das Paket ______ morgen zugestellt. (werden)"
              ],
              solution: [
                "Das Paket wird morgen zugestellt."
              ],
              focus: ["Präsens Passiv", "Hilfsverb werden"]
            }
          ]
        },
        {
          id: "basis-kombi",
          topic: "Kombiniert",
          title: "Basis: indirekte Rede mit Aktiv-Passiv-Umbau verbinden",
          intro:
            "Diese Aufgaben verbinden beide Themen in gut überschaubaren Schritten und zeigen, wie aus direkter Rede sofort ein passivischer Bericht werden kann.",
          tasks: [
            {
              id: "basis-kombi-1",
              title: "Tests korrigieren",
              format: "Mehrschritt",
              prompt: "Forme den Satz in indirekte Rede um und setze die Handlung ins Passiv.",
              source: [
                "Die Lehrerin sagt: „Wir korrigieren morgen die Tests.“"
              ],
              solution: [
                "Die Lehrerin sagt, die Tests würden am nächsten Tag korrigiert."
              ],
              focus: ["Konjunktiv", "Passiv", "Zeitwechsel"]
            },
            {
              id: "basis-kombi-2",
              title: "Brief verschicken",
              format: "Mehrschritt",
              prompt: "Gib die Aussage in indirekter Rede wieder und formuliere den Aktivsatz ins Passiv um.",
              source: [
                "Nora erzählt: „Ich verschicke den Brief heute Abend.“"
              ],
              solution: [
                "Nora erzählt, der Brief werde an diesem Abend verschickt."
              ],
              focus: ["Perspektivwechsel", "Passivbildung"]
            },
            {
              id: "basis-kombi-3",
              title: "Sekretariat anrufen",
              format: "Textrevision",
              prompt: "Forme den gemischten Bericht korrekt um.",
              source: [
                "Ausgangssatz: Jonas berichtet: „Das Sekretariat hat mich gestern angerufen.“"
              ],
              solution: [
                "Jonas berichtet, er sei am Vortag vom Sekretariat angerufen worden."
              ],
              focus: ["Perfekt in indirekter Rede", "Passivperfekt"]
            },
            {
              id: "basis-kombi-4",
              title: "Einladung senden",
              format: "Frage/Aufforderung",
              prompt: "Gib die Aufforderung in indirekter Rede wieder und setze die Handlung ins Passiv.",
              source: [
                "Die Chefin sagt zu Amir: „Sende die Einladung noch heute.“"
              ],
              solution: [
                "Die Chefin sagt zu Amir, die Einladung solle noch heute gesendet werden."
              ],
              focus: ["sollen", "Passivinfinitiv"]
            },
            {
              id: "basis-kombi-5",
              title: "Frage nach dem Bericht",
              format: "Mehrschritt",
              prompt: "Forme die Frage in indirekte Rede um und setze das Verb ins Passiv.",
              source: [
                "Lea fragt: „Schreibt ihr den Bericht morgen?“"
              ],
              solution: [
                "Lea fragt, ob der Bericht am nächsten Tag geschrieben werde."
              ],
              focus: ["ob-Satz", "Passiv Präsens"]
            },
            {
              id: "basis-kombi-6",
              title: "Fehler im Doppelumbau",
              format: "Fehlerdiagnose",
              prompt: "Korrigiere den doppelten Umbau.",
              source: [
                "Fehlersatz: Sina sagt, der Kuchen wird gestern gebacken."
              ],
              solution: [
                "Sina sagt, der Kuchen sei am Vortag gebacken worden.",
                "Bei einer vergangenen Handlung braucht man in der indirekten Rede eine passende Vergangenheitsform."
              ],
              focus: ["Vergangenheit", "Passivperfekt"]
            }
          ]
        }
      ]
    },
    {
      id: "erhoeht",
      title: "Erhöhte Ansprüche",
      strapline: "Perspektiven gezielt verschieben",
      description:
        "Die Aufgaben verlangen sichere Entscheidungen bei Fragen, Aufforderungen, Modalverben und mehreren möglichen Referenzen.",
      theory: [
        {
          title: "Konjunktiv präzise wählen",
          points: [
            "Ist der Konjunktiv I gleich wie der Indikativ, darf der Konjunktiv II oder eine würde-Form ausweichen.",
            "Bei Fragen helfen ob-Sätze oder Fragewörter, bei Aufforderungen häufig sollen.",
            "Modalverben wandern mit: er könne, sie müsse, sie dürfe."
          ]
        },
        {
          title: "Passiv differenzieren",
          points: [
            "Modalverb plus Passiv: Der Antrag muss geprüft werden.",
            "Nicht jedes Aktiv braucht ein genanntes Agens im Passiv.",
            "Vorgangspassiv beschreibt das Geschehen, Zustandspassiv das Ergebnis."
          ]
        },
        {
          title: "Mehrschrittig arbeiten",
          points: [
            "Bei zwei Umbauten zuerst die Satzinformation sichern, dann die Form umstellen.",
            "Besonders sorgfältig sind deiktische Wörter wie hier, morgen, gestern, wir und unser.",
            "Lange Sätze lassen sich oft zuerst in Kernhandlung und Zusatzinformationen zerlegen."
          ]
        }
      ],
      modules: [
        {
          id: "erhoeht-ir",
          topic: "Indirekte Rede",
          title: "Erhöhte Ansprüche: Fragen, Modalität und Pronomenknoten",
          intro:
            "Diese Einheit trainiert schwierigere Redeformen mit Fragen, Aufforderungen, Modalverben und mehrdeutigen Bezügen.",
          tasks: [
            {
              id: "erhoeht-ir-1",
              title: "Unterlagen mitbringen",
              format: "Umformen",
              prompt: "Achte auf mehrere Pronomen und die Zeitangabe.",
              source: [
                "Herr Brandt sagt zu Frau Loos: „Ich bringe Ihnen morgen meine Unterlagen mit.“"
              ],
              solution: [
                "Herr Brandt sagt zu Frau Loos, er bringe ihr am nächsten Tag seine Unterlagen mit."
              ],
              focus: ["Dativpronomen", "Possessivwechsel"]
            },
            {
              id: "erhoeht-ir-2",
              title: "Warum bleibst du hier",
              format: "Frage/Aufforderung",
              prompt: "Forme die w-Frage in indirekte Rede um.",
              source: [
                "Der Reporter fragt Mila: „Warum bleibst du heute hier?“"
              ],
              solution: [
                "Der Reporter fragt Mila, warum sie an diesem Tag dort bleibe."
              ],
              focus: ["w-Frage", "Orts- und Zeitdeixis"]
            },
            {
              id: "erhoeht-ir-3",
              title: "Mehrere Modalverben",
              format: "Umformen",
              prompt: "Forme den Satz mit beiden Modalverben in indirekte Rede um.",
              source: [
                "Der Arzt erklärt den Patientinnen: „Ihr müsst heute viel trinken und dürft morgen wieder arbeiten.“"
              ],
              solution: [
                "Der Arzt erklärt den Patientinnen, sie müssten heute viel trinken und dürften am nächsten Tag wieder arbeiten."
              ],
              focus: ["Modalverben", "Pluralbezug"]
            },
            {
              id: "erhoeht-ir-4",
              title: "Bitte melden",
              format: "Frage/Aufforderung",
              prompt: "Bilde eine knappe indirekte Wiedergabe der Aufforderung.",
              source: [
                "Die Seminarleitung sagte zu uns: „Bitte meldet euch bis Freitag bei mir.“"
              ],
              solution: [
                "Die Seminarleitung sagte zu uns, wir sollten uns bis Freitag bei ihr melden."
              ],
              focus: ["sollen", "Reflexivpronomen"]
            },
            {
              id: "erhoeht-ir-5",
              title: "Identische Form vermeiden",
              format: "Fehlerdiagnose",
              prompt: "Verbessere den Satz so, dass die indirekte Rede klar markiert ist.",
              source: [
                "Fehlersatz: Sie sagen, sie kommen später."
              ],
              solution: [
                "Sie sagen, sie kämen später.",
                "Alternativ ist auch möglich: Sie sagen, sie würden später kommen."
              ],
              focus: ["Konjunktiv II", "Eindeutigkeit"]
            },
            {
              id: "erhoeht-ir-6",
              title: "Vorzeitigkeit ausdrücken",
              format: "Lückentext",
              prompt: "Setze die passende Form ein.",
              source: [
                "Pia berichtet, sie ______ die Nachricht schon am Morgen ______. (lesen)"
              ],
              solution: [
                "Pia berichtet, sie habe die Nachricht schon am Morgen gelesen."
              ],
              focus: ["Vorzeitigkeit", "Perfekt in indirekter Rede"]
            }
          ]
        },
        {
          id: "erhoeht-ap",
          topic: "Aktiv/Passiv",
          title: "Erhöhte Ansprüche: Passivvarianten und Modalformen",
          intro:
            "Diese Aufgaben gehen über das Grundschema hinaus und trainieren Modalverbpassiv, Zustandspassiv und stilistische Entscheidungen.",
          tasks: [
            {
              id: "erhoeht-ap-1",
              title: "Antrag prüfen",
              format: "Umformen",
              prompt: "Setze den Aktivsatz mit Modalverb ins Passiv.",
              source: ["Die Verwaltung muss den Antrag sofort prüfen."],
              solution: [
                "Der Antrag muss sofort geprüft werden."
              ],
              focus: ["Modalverbpassiv", "Infinitiv Passiv"]
            },
            {
              id: "erhoeht-ap-2",
              title: "Saaltüren schließen",
              format: "Umformen",
              prompt: "Setze den Passivsatz ins Aktiv. Wähle ein passendes Subjekt.",
              source: ["Die Saaltüren wurden nach der Vorstellung geschlossen."],
              solution: [
                "Man schloss die Saaltüren nach der Vorstellung."
              ],
              focus: ["Präteritum", "Aktivrückbildung"]
            },
            {
              id: "erhoeht-ap-3",
              title: "Zustand oder Vorgang",
              format: "Fehlerdiagnose",
              prompt: "Korrigiere den Satz, wenn ein Zustand beschrieben werden soll.",
              source: [
                "Fehlersatz: Als wir ankamen, wird die Aula dekoriert."
              ],
              solution: [
                "Als wir ankamen, war die Aula dekoriert.",
                "Wenn das Ergebnis gemeint ist, braucht man das Zustandspassiv mit sein."
              ],
              focus: ["Zustandspassiv", "sein + Partizip II"]
            },
            {
              id: "erhoeht-ap-4",
              title: "Durch oder von",
              format: "Textrevision",
              prompt: "Entscheide dich für eine sinnvolle Passivform mit passender Ergänzung.",
              source: [
                "Aktivsatz: Der Sturm beschädigte mehrere Dächer."
              ],
              solution: [
                "Mehrere Dächer wurden durch den Sturm beschädigt."
              ],
              focus: ["durch-Ergänzung", "Naturkraft"]
            },
            {
              id: "erhoeht-ap-5",
              title: "Passiv im Perfekt",
              format: "Lückentext",
              prompt: "Setze die korrekte Form ein.",
              source: [
                "Die Ergebnisse ______ bereits veröffentlicht ______. (sein)"
              ],
              solution: [
                "Die Ergebnisse sind bereits veröffentlicht worden."
              ],
              focus: ["Perfekt Passiv", "worden"]
            },
            {
              id: "erhoeht-ap-6",
              title: "Unpersönliches Passiv",
              format: "Umformen",
              prompt: "Bilde aus dem Aktivsatz ein unpersönliches Passiv.",
              source: ["Im Kurs diskutierte man lange über den Roman."],
              solution: [
                "Im Kurs wurde lange über den Roman diskutiert."
              ],
              focus: ["unpersönliches Passiv", "Präteritum"]
            }
          ]
        },
        {
          id: "erhoeht-kombi",
          topic: "Kombiniert",
          title: "Erhöhte Ansprüche: Grammatik in mehreren Schritten",
          intro:
            "Hier werden beide Themen systematisch verschränkt: Bericht, Modus, Perspektive und Passiv müssen gemeinsam stimmen.",
          tasks: [
            {
              id: "erhoeht-kombi-1",
              title: "Antrag heute abschicken",
              format: "Mehrschritt",
              prompt: "Forme in indirekte Rede um und setze die Handlung ins Passiv mit Modalverb.",
              source: [
                "Die Sachbearbeiterin sagt: „Wir müssen den Antrag heute noch abschicken.“"
              ],
              solution: [
                "Die Sachbearbeiterin sagt, der Antrag müsse noch heute abgeschickt werden."
              ],
              focus: ["Modalverb", "Passiv", "Konjunktiv"]
            },
            {
              id: "erhoeht-kombi-2",
              title: "Bericht bis morgen",
              format: "Frage/Aufforderung",
              prompt: "Gib die Aufforderung indirekt wieder und wandle die Kernhandlung ins Passiv um.",
              source: [
                "Der Redaktor sagte zu Jana: „Überarbeite den Bericht bitte bis morgen.“"
              ],
              solution: [
                "Der Redaktor sagte zu Jana, der Bericht solle bis zum nächsten Tag überarbeitet werden."
              ],
              focus: ["Aufforderung", "Passivinfinitiv"]
            },
            {
              id: "erhoeht-kombi-3",
              title: "Wer hat die Daten geprüft",
              format: "Mehrschritt",
              prompt: "Forme die Frage in indirekte Rede um und setze den Inhalt ins Passiv.",
              source: [
                "Levin fragt: „Wer hat die Daten gestern geprüft?“"
              ],
              solution: [
                "Levin fragt, von wem die Daten am Vortag geprüft worden seien."
              ],
              focus: ["Fragewort", "Passivperfekt"]
            },
            {
              id: "erhoeht-kombi-4",
              title: "Fehler im Bericht",
              format: "Fehlerdiagnose",
              prompt: "Verbessere den doppelten Grammatikumbau.",
              source: [
                "Fehlersatz: Die Leiterin erklärt, die Räume müssen morgen reinigen werden."
              ],
              solution: [
                "Die Leiterin erklärt, die Räume müssten am nächsten Tag gereinigt werden."
              ],
              focus: ["Modalverbpassiv", "Pluralform"]
            },
            {
              id: "erhoeht-kombi-5",
              title: "Kurztext umarbeiten",
              format: "Textrevision",
              prompt: "Forme den Text vollständig um: indirekte Rede plus passende Passivierung der markierten Handlung.",
              source: [
                "Direkte Rede: „Ich habe die Proben schon sortiert. Morgen etikettieren wir sie neu.“"
              ],
              solution: [
                "Sie berichtet, sie habe die Proben schon sortiert; am nächsten Tag würden sie neu etikettiert."
              ],
              focus: ["Vorzeitigkeit", "Folgehandlung im Passiv"]
            },
            {
              id: "erhoeht-kombi-6",
              title: "Antwort für das Plenum",
              format: "Lückentext",
              prompt: "Ergänze eine sinnvolle indirekte Wiedergabe im Passiv.",
              source: [
                "Die Dozentin meint, die Frage ______ im Plenum noch einmal ______. (besprechen)"
              ],
              solution: [
                "Die Dozentin meint, die Frage werde im Plenum noch einmal besprochen."
              ],
              focus: ["Passiv Präsens", "Konjunktiv I"]
            }
          ]
        }
      ]
    },
    {
      id: "experte",
      title: "Experte",
      strapline: "komplexe Perspektiven souverän steuern",
      description:
        "Die Expertinnen- und Expertenstufe verbindet längere Redeberichte, verdeckte Sprecherwechsel, Passivnuancen und dichte Mehrfachumbauten.",
      theory: [
        {
          title: "Perspektivtreue",
          points: [
            "Jedes Pronomen muss auf den neuen Erzählerstandpunkt abgestimmt werden.",
            "Bei verschachtelten Berichten hilft es, erst den ursprünglichen Sprecher und dann die Bezugspersonen zu markieren.",
            "Konjunktiv I zeigt Distanz, Konjunktiv II sichert die Form, wenn sonst Gleichheit mit dem Indikativ droht."
          ]
        },
        {
          title: "Passiv bewusst einsetzen",
          points: [
            "Passiv verschiebt den Informationsfokus auf Vorgang oder Ergebnis.",
            "Nicht jede Passivierung ist stilistisch sinnvoll; manchmal muss ein Agens ergänzt oder weggelassen werden.",
            "Im Zustandspassiv steht das Ergebnis im Vordergrund, im Vorgangspassiv das Geschehen."
          ]
        },
        {
          title: "Komplexe Umbauten",
          points: [
            "Mehrteilige Satzgefüge lassen sich in Teilschritte zerlegen und anschließend neu zusammensetzen.",
            "Bei gemischten Zeitverhältnissen ist die Reihenfolge der Ereignisse wichtiger als die Form der direkten Rede.",
            "Akzeptabel sind oft mehrere Lösungen, wenn Perspektive, Modus und Struktur konsequent bleiben."
          ]
        }
      ],
      modules: [
        {
          id: "experte-ir",
          topic: "Indirekte Rede",
          title: "Experte: Modus, Deixis und mehrdeutige Bezüge",
          intro:
            "Diese Aufgaben verlangen präzise Entscheidungen bei mehrdeutigen Referenzen, Vorzeitigkeit und stilistisch kontrollierter indirekter Rede.",
          tasks: [
            {
              id: "experte-ir-1",
              title: "Meine Schwester und ich",
              format: "Umformen",
              prompt: "Forme den Satz in indirekte Rede um und löse die Pronomen sauber auf.",
              source: [
                "Eva sagte zu Daniel: „Meine Schwester bringt dir morgen ihre Unterlagen, und ich erkläre sie dir dann.“"
              ],
              solution: [
                "Eva sagte zu Daniel, ihre Schwester bringe ihm am nächsten Tag deren Unterlagen, und sie selbst erkläre sie ihm dann."
              ],
              focus: ["mehrdeutige Possessiva", "Sprecherpräzisierung"]
            },
            {
              id: "experte-ir-2",
              title: "Ob wir bleiben dürfen",
              format: "Frage/Aufforderung",
              prompt: "Gib die Ja-Nein-Frage in indirekter Rede mit passendem Modus wieder.",
              source: [
                "Die Gäste fragten: „Dürfen wir nach der Veranstaltung noch hier bleiben?“"
              ],
              solution: [
                "Die Gäste fragten, ob sie nach der Veranstaltung noch dort bleiben dürften."
              ],
              focus: ["dürften", "Ortsdeixis"]
            },
            {
              id: "experte-ir-3",
              title: "Spätere Folgehandlung",
              format: "Mehrschritt",
              prompt: "Forme die Aussage so um, dass die zeitliche Abfolge deutlich bleibt.",
              source: [
                "Nico berichtet: „Ich habe den Vertrag gestern unterschrieben und schicke ihn euch morgen zu.“"
              ],
              solution: [
                "Nico berichtet, er habe den Vertrag am Vortag unterschrieben und werde ihn ihnen am nächsten Tag zuschicken."
              ],
              focus: ["Vor- und Nachzeitigkeit", "Futur in indirekter Rede"]
            },
            {
              id: "experte-ir-4",
              title: "Klarere Distanz markieren",
              format: "Fehlerdiagnose",
              prompt: "Formuliere den berichteten Satz mit eindeutiger Distanzmarkierung um.",
              source: [
                "Fehlersatz: Der Sprecher sagt, die Leute sind verunsichert."
              ],
              solution: [
                "Der Sprecher sagt, die Leute seien verunsichert."
              ],
              focus: ["seien", "Distanzierung"]
            },
            {
              id: "experte-ir-5",
              title: "Indirekter Auftrag im Nebensatz",
              format: "Textrevision",
              prompt: "Wandle den Satz vollständig in indirekte Rede um.",
              source: [
                "Die Leiterin sagte: „Wenn ihr heute fertig werdet, legt mir bitte eure Entwürfe auf den Tisch.“"
              ],
              solution: [
                "Die Leiterin sagte, wenn sie an diesem Tag fertig würden, sollten sie ihr ihre Entwürfe auf den Tisch legen."
              ],
              focus: ["Bedingungssatz", "Aufforderung", "Pronomen"]
            },
            {
              id: "experte-ir-6",
              title: "Lückentext mit Ausweichform",
              format: "Lückentext",
              prompt: "Ergänze eine eindeutige Form der indirekten Rede.",
              source: [
                "Die Studierenden erklärten, sie ______ später, weil ihr Zug Verspätung ______. (kommen / haben)"
              ],
              solution: [
                "Die Studierenden erklärten, sie kämen später, weil ihr Zug Verspätung habe."
              ],
              focus: ["Ausweichkonjunktiv", "gemischte Formen"]
            }
          ]
        },
        {
          id: "experte-ap",
          topic: "Aktiv/Passiv",
          title: "Experte: Passiv als Stil- und Strukturmittel",
          intro:
            "Im Zentrum stehen hier komplexere Passivformen, Zustandspassiv, Agensentscheidungen und stilistisch bewusste Rückumformungen.",
          tasks: [
            {
              id: "experte-ap-1",
              title: "Bericht wird geprüft worden sein",
              format: "Umformen",
              prompt: "Setze den Aktivsatz in ein Futur-II-Passiv um.",
              source: ["Die Kommission wird den Bericht bis morgen geprüft haben."],
              solution: [
                "Der Bericht wird bis morgen geprüft worden sein."
              ],
              focus: ["Futur II Passiv", "Formensicherheit"]
            },
            {
              id: "experte-ap-2",
              title: "Stilistisch aktivieren",
              format: "Textrevision",
              prompt: "Setze den Passivsatz in einen präzisen Aktivsatz um.",
              source: ["Im Protokoll wurde festgestellt, dass der Zugang blockiert war."],
              solution: [
                "Im Protokoll stellte man fest, dass der Zugang blockiert war."
              ],
              focus: ["stilistische Aktivierung", "man-Konstruktion"]
            },
            {
              id: "experte-ap-3",
              title: "Zustandspassiv im Plusquamperfekt",
              format: "Lückentext",
              prompt: "Setze die passende Form ein.",
              source: [
                "Als die Techniker ankamen, ______ die Anlage bereits abgeschaltet ______. (sein)"
              ],
              solution: [
                "Als die Techniker ankamen, war die Anlage bereits abgeschaltet gewesen."
              ],
              focus: ["Zustandspassiv", "Plusquamperfekt"]
            },
            {
              id: "experte-ap-4",
              title: "Agens sinnvoll wählen",
              format: "Fehlerdiagnose",
              prompt: "Verbessere die Passivergänzung.",
              source: [
                "Fehlersatz: Die Küste wurde von dem Sturm verwüstet."
              ],
              solution: [
                "Die Küste wurde durch den Sturm verwüstet."
              ],
              focus: ["durch statt von", "Naturgewalt"]
            },
            {
              id: "experte-ap-5",
              title: "Unpersönliches Passiv im Perfekt",
              format: "Umformen",
              prompt: "Bilde aus dem Aktivsatz ein unpersönliches Passiv im Perfekt.",
              source: ["Bei der Sitzung hat man lange über die Finanzierung diskutiert."],
              solution: [
                "Bei der Sitzung ist lange über die Finanzierung diskutiert worden."
              ],
              focus: ["unpersönliches Passiv", "Perfekt"]
            },
            {
              id: "experte-ap-6",
              title: "Passiv mit eingebettetem Infinitiv",
              format: "Mehrschritt",
              prompt: "Setze den Aktivsatz in ein Passiv mit Modalverb und Infinitivgruppe um.",
              source: ["Die Jury ließ die finalen Texte noch einmal prüfen."],
              solution: [
                "Die finalen Texte mussten noch einmal geprüft werden."
              ],
              focus: ["Modalisierung", "Passiversatz"]
            }
          ]
        },
        {
          id: "experte-kombi",
          topic: "Kombiniert",
          title: "Experte: komplexe Berichte neu bauen",
          intro:
            "Die Schlussstufe bündelt indirekte Rede und Aktiv-Passiv-Umbauten auf Satz- und Textebene. Mehrere Lösungen sind möglich, solange sie konsequent bleiben.",
          tasks: [
            {
              id: "experte-kombi-1",
              title: "Bericht über die Unterlagen",
              format: "Mehrschritt",
              prompt: "Forme den Text in indirekte Rede um und setze die markierte Handlung ins Passiv.",
              source: [
                "Direkte Rede: „Ich habe deine Unterlagen gestern geprüft. Morgen schicken wir sie an die Kommission.“"
              ],
              solution: [
                "Er berichtet, er habe die Unterlagen am Vortag geprüft; am nächsten Tag würden sie an die Kommission geschickt."
              ],
              focus: ["Vorzeitigkeit", "Folgehandlung im Passiv"]
            },
            {
              id: "experte-kombi-2",
              title: "Doppelte Perspektive",
              format: "Textrevision",
              prompt: "Gib den Bericht aus externer Erzählerperspektive wieder und passiviere die zweite Handlung.",
              source: [
                "Sara sagte zu Leon: „Ich informiere deine Gruppe heute, und morgen prüfen wir euren Vorschlag noch einmal.“"
              ],
              solution: [
                "Sara sagte zu Leon, sie informiere seine Gruppe an diesem Tag, und am nächsten Tag werde ihr Vorschlag noch einmal geprüft."
              ],
              focus: ["Possessivwechsel", "Passivierung"]
            },
            {
              id: "experte-kombi-3",
              title: "Verschachtelte Aufforderung",
              format: "Frage/Aufforderung",
              prompt: "Wandle die Aufforderung in indirekte Rede um und setze die Handlung ins Passiv.",
              source: [
                "Der Professor sagte: „Wenn ihr die Zitate überprüft habt, ergänzt bitte morgen die Fußnoten.“"
              ],
              solution: [
                "Der Professor sagte, wenn sie die Zitate überprüft hätten, sollten die Fußnoten am nächsten Tag ergänzt werden."
              ],
              focus: ["Bedingung", "Aufforderung", "Passiv"]
            },
            {
              id: "experte-kombi-4",
              title: "Frage nach der Reparatur",
              format: "Mehrschritt",
              prompt: "Forme die Frage in indirekte Rede um und setze den Reparaturvorgang ins Passivperfekt.",
              source: [
                "Der Kunde fragte: „Warum hat Ihre Werkstatt mein Fahrrad gestern nicht repariert?“"
              ],
              solution: [
                "Der Kunde fragte, warum sein Fahrrad am Vortag nicht repariert worden sei."
              ],
              focus: ["w-Frage", "Passivperfekt", "Possessivwechsel"]
            },
            {
              id: "experte-kombi-5",
              title: "Fehlerkette korrigieren",
              format: "Fehlerdiagnose",
              prompt: "Im Satz stecken mehrere Fehler. Korrigiere Modus, Zeit und Passivform.",
              source: [
                "Fehlersatz: Die Sprecherin erklärt, die Ergebnisse werden gestern von ihr vorstellen."
              ],
              solution: [
                "Die Sprecherin erklärt, die Ergebnisse seien am Vortag von ihr vorgestellt worden."
              ],
              focus: ["Passivperfekt", "Konjunktiv", "Zeitangabe"]
            },
            {
              id: "experte-kombi-6",
              title: "Mini-Abschnitt komplett umformen",
              format: "Textrevision",
              prompt: "Schreibe den Abschnitt als indirekten Bericht um und passiviere alle markierten Vorgänge.",
              source: [
                "Direkte Rede: „Wir haben die Geräte gestern gereinigt. Heute testen wir sie erneut, und danach schicken wir die Daten an unsere Partner.“"
              ],
              solution: [
                "Sie berichten, sie hätten die Geräte am Vortag gereinigt; an diesem Tag würden sie erneut getestet, und danach würden die Daten an ihre Partner geschickt."
              ],
              focus: ["Abschnittsumbau", "mehrere Passivierungen"]
            }
          ]
        }
      ]
    }
  ]
};

(function enhanceWorkshopData() {
  const data = window.WORKSHOP_DATA;
  const moduleMap = new Map();
  const taskMap = new Map();

  data.levels.forEach((level) => {
    level.modules.forEach((module) => {
      moduleMap.set(module.id, module);
      module.tasks.forEach((task) => taskMap.set(task.id, task));
    });
  });

  if (!data.formats.includes("Multiple Choice")) {
    data.formats.push("Multiple Choice");
  }

  const taskEnhancements = {
    "basis-ir-2": {
      acceptedAnswers: [
        "Tom erklärt Lea, sie brächten ihr ihre Bücher am nächsten Tag mit."
      ],
      hint: "Wechsle zuerst wir zu sie, dann dir zu ihr und passe danach morgen an."
    },
    "basis-ir-5": {
      acceptedAnswers: [
        "Frau Keller sagt zu Ben, er solle die Datei ihr noch heute schicken."
      ],
      hint: "Es geht um eine Aufforderung. Nutze deshalb eine Form mit sollen und achte auf das Dativpronomen."
    },
    "basis-ap-1": {
      acceptedAnswers: [
        "Der Raum wird dekoriert.",
        "Der Raum wird von der Klasse dekoriert."
      ],
      hint: "Das Objekt aus dem Aktivsatz wird im Passiv zum Subjekt."
    },
    "basis-ap-3": {
      acceptedAnswers: [
        "Jemand öffnet die Türen um acht Uhr."
      ],
      hint: "Im Aktiv brauchst du wieder ein handelndes Subjekt, zum Beispiel man."
    },
    "basis-kombi-1": {
      acceptedAnswers: [
        "Die Lehrerin sagt, die Tests würden am nächsten Tag korrigiert werden."
      ],
      hint: "Arbeite in zwei Schritten: bilde erst den Bericht und bringe dann die Tests ins Passiv."
    },
    "basis-kombi-4": {
      acceptedAnswers: [
        "Die Chefin sagt zu Amir, die Einladung solle noch heute verschickt werden."
      ],
      hint: "Die Aufforderung braucht sollen; die Einladung steht danach im Passiv."
    },
    "erhoeht-ir-2": {
      hint: "Die Frage beginnt mit warum. Dieses Fragewort bleibt erhalten, aber heute und hier muessen zur Berichtssituation passen."
    },
    "erhoeht-ir-3": {
      hint: "Beide Modalverben bleiben erhalten. Achte darauf, dass ihr in der indirekten Rede zu sie wird."
    },
    "erhoeht-ap-1": {
      acceptedAnswers: [
        "Der Antrag muss von der Verwaltung sofort geprüft werden."
      ],
      hint: "Beim Modalverbpassiv steht das Modalverb finit und geprüft werden am Ende."
    },
    "erhoeht-ap-3": {
      hint: "Gefragt ist das Ergebnis, nicht der laufende Vorgang. Deshalb brauchst du sein statt werden."
    },
    "erhoeht-kombi-3": {
      acceptedAnswers: [
        "Levin fragt, durch wen die Daten am Vortag geprüft worden seien."
      ],
      hint: "Bei wer im Aktiv brauchst du im Passiv eine Wendung mit von wem oder durch wen."
    },
    "erhoeht-kombi-5": {
      source: [
        "Nora berichtet: „Ich habe die Proben schon sortiert. Morgen etikettieren wir sie neu.“"
      ],
      solution: [
        "Nora berichtet, sie habe die Proben schon sortiert; am nächsten Tag würden sie neu etikettiert."
      ],
      hint: "Nora ist jetzt ausdrücklich die Sprecherin. Achte deshalb auf sie habe und auf den Zeitwechsel bei morgen."
    },
    "experte-ir-1": {
      solution: [
        "Eva sagte zu Daniel, ihre Schwester bringe ihm am nächsten Tag ihre eigenen Unterlagen, und sie selbst erkläre sie ihm dann."
      ],
      hint: "Trenne die beiden Sprecherbezüge sauber: die Schwester bringt die Unterlagen, Eva selbst erklärt sie später."
    },
    "experte-ir-3": {
      acceptedAnswers: [
        "Nico berichtet, er habe den Vertrag am Vortag unterschrieben und werde ihn euch am nächsten Tag zuschicken."
      ],
      hint: "Die erste Handlung liegt vorher, die zweite nachher. Diese Zeitstaffelung muss sichtbar bleiben."
    },
    "experte-ap-2": {
      acceptedAnswers: [
        "Im Protokoll stellte die Leitung fest, dass der Zugang blockiert war.",
        "Im Protokoll stellte man fest, dass der Zugang blockiert war."
      ],
      hint: "Beim Aktivieren des Satzes braucht der Befund wieder ein handelndes Subjekt."
    },
    "experte-ap-3": {
      title: "Zustandspassiv in der Vergangenheit",
      prompt: "Setze die passende Form ein.",
      source: [
        "Als die Techniker ankamen, ______ die Anlage bereits abgeschaltet. (sein)"
      ],
      solution: [
        "Als die Techniker ankamen, war die Anlage bereits abgeschaltet."
      ],
      focus: ["Zustandspassiv", "Ergebnis"],
      hint: "Hier geht es um einen bereits erreichten Zustand, nicht um ein kompliziertes Plusquamperfekt."
    },
    "experte-ap-6": {
      acceptedAnswers: [
        "Die finalen Texte sollten noch einmal geprüft werden.",
        "Die finalen Texte mussten noch einmal geprüft werden."
      ],
      hint: "Das lassen wird hier in eine sinnvolle passive Modalstruktur übertragen."
    },
    "experte-kombi-2": {
      solution: [
        "Sara sagte zu Leon, sie informiere seine Gruppe an diesem Tag, und am nächsten Tag werde der Vorschlag seiner Gruppe noch einmal geprüft."
      ],
      hint: "Zuerst wechselst du Saras Perspektive, dann passivierst du nur die zweite Handlung und löst euren Vorschlag eindeutig auf."
    },
    "experte-kombi-1": {
      source: [
        "Noah berichtet: „Ich habe deine Unterlagen gestern geprüft. Morgen schicken wir sie an die Kommission.“"
      ],
      solution: [
        "Noah berichtet, er habe die Unterlagen am Vortag geprüft; am nächsten Tag würden sie an die Kommission geschickt."
      ],
      hint: "Noah ist jetzt ausdrücklich der Sprecher. Die erste Handlung ist vorzeitig, die zweite wird passivisch in die Zukunft des Berichts verschoben."
    },
    "experte-kombi-6": {
      source: [
        "Die Techniker berichten: „Wir haben die Geräte gestern gereinigt. Heute testen wir sie erneut, und danach schicken wir die Daten an unsere Partner.“"
      ],
      solution: [
        "Die Techniker berichten, sie hätten die Geräte am Vortag gereinigt; an diesem Tag würden sie erneut getestet, und danach würden die Daten an ihre Partner geschickt."
      ],
      acceptedAnswers: [
        "Sie berichten, sie hätten die Geräte am Vortag gereinigt; an diesem Tag würden sie erneut getestet und danach würden die Daten an ihre Partner geschickt."
      ],
      hint: "Die Techniker sind nun ausdrücklich genannt. Halte die drei Zeitebenen und beide Passivierungen sauber auseinander."
    }
  };

  Object.entries(taskEnhancements).forEach(([taskId, enhancement]) => {
    const task = taskMap.get(taskId);
    if (!task) {
      return;
    }

    Object.assign(task, enhancement);
  });

  const multipleChoiceTasks = {
    "basis-ir": [
      {
        id: "basis-ir-mc-1",
        type: "multiple-choice",
        title: "Multiple Choice: sichere Wiedergabe",
        format: "Multiple Choice",
        prompt: "Wähle die grammatisch korrekte indirekte Rede.",
        source: [
          "Direkte Rede: Lea sagt: „Ich bin heute sehr müde.“"
        ],
        correctOptionId: "c",
        options: [
          { id: "a", text: "Lea sagt, ich sei heute sehr müde." },
          { id: "b", text: "Lea sagt, sie ist heute sehr müde." },
          { id: "c", text: "Lea sagt, sie sei heute sehr müde." },
          { id: "d", text: "Lea sagt, sie sei morgen sehr müde." }
        ],
        solution: [
          "Lea sagt, sie sei heute sehr müde."
        ],
        focus: ["Konjunktiv I", "Pronomenwechsel"],
        hint: "Achte gleichzeitig auf das neue Pronomen und auf die berichtete Verbform."
      }
    ],
    "basis-ap": [
      {
        id: "basis-ap-mc-1",
        type: "multiple-choice",
        title: "Multiple Choice: richtiges Passiv",
        format: "Multiple Choice",
        prompt: "Welche Passivform passt zum Aktivsatz?",
        source: [
          "Aktivsatz: Die Klasse schmückt den Saal."
        ],
        correctOptionId: "a",
        options: [
          { id: "a", text: "Der Saal wird von der Klasse geschmückt." },
          { id: "b", text: "Der Saal ist von der Klasse schmücken." },
          { id: "c", text: "Die Klasse wird den Saal geschmückt." },
          { id: "d", text: "Der Saal wurde von der Klasse schmückt." }
        ],
        solution: [
          "Der Saal wird von der Klasse geschmückt."
        ],
        focus: ["Vorgangspassiv", "Partizip II"],
        hint: "Im Vorgangspassiv brauchst du werden plus Partizip II."
      }
    ],
    "basis-kombi": [
      {
        id: "basis-kombi-mc-1",
        type: "multiple-choice",
        title: "Multiple Choice: doppelter Umbau",
        format: "Multiple Choice",
        prompt: "Wähle die passende Kombination aus indirekter Rede und Passiv.",
        source: [
          "Direkte Rede: Eva sagt: „Wir schreiben den Bericht morgen.“"
        ],
        correctOptionId: "d",
        options: [
          { id: "a", text: "Eva sagt, wir schreiben den Bericht morgen." },
          { id: "b", text: "Eva sagt, der Bericht wird morgen geschrieben." },
          { id: "c", text: "Eva sagt, der Bericht wurde am nächsten Tag geschrieben." },
          { id: "d", text: "Eva sagt, der Bericht werde am nächsten Tag geschrieben." }
        ],
        solution: [
          "Eva sagt, der Bericht werde am nächsten Tag geschrieben."
        ],
        focus: ["Konjunktiv I", "Passiv", "Zeitwechsel"],
        hint: "Die richtige Lösung braucht gleichzeitig eine berichtete Form und eine passive Satzperspektive."
      }
    ],
    "erhoeht-ir": [
      {
        id: "erhoeht-ir-mc-1",
        type: "multiple-choice",
        title: "Multiple Choice: Fragebericht",
        format: "Multiple Choice",
        prompt: "Welche Form gibt die Frage korrekt in indirekter Rede wieder?",
        source: [
          "Direkte Rede: Der Reporter fragt: „Warum kommst du morgen nicht hierher?“"
        ],
        correctOptionId: "b",
        options: [
          { id: "a", text: "Der Reporter fragt, warum du morgen nicht hierher kommst." },
          { id: "b", text: "Der Reporter fragt, warum sie am nächsten Tag nicht dorthin komme." },
          { id: "c", text: "Der Reporter fragt, ob sie morgen nicht hierher komme." },
          { id: "d", text: "Der Reporter fragt, warum sie gestern nicht dorthin komme." }
        ],
        solution: [
          "Der Reporter fragt, warum sie am nächsten Tag nicht dorthin komme."
        ],
        focus: ["w-Frage", "Deixis", "Konjunktiv I"],
        hint: "Das Fragewort bleibt erhalten; morgen und hierher müssen aber verschoben werden."
      }
    ],
    "erhoeht-ap": [
      {
        id: "erhoeht-ap-mc-1",
        type: "multiple-choice",
        title: "Multiple Choice: Modalverbpassiv",
        format: "Multiple Choice",
        prompt: "Wähle die korrekte Passivform mit Modalverb.",
        source: [
          "Aktivsatz: Die Verwaltung muss den Antrag prüfen."
        ],
        correctOptionId: "d",
        options: [
          { id: "a", text: "Der Antrag muss prüfen werden." },
          { id: "b", text: "Der Antrag wird prüfen müssen." },
          { id: "c", text: "Der Antrag muss von der Verwaltung prüfen." },
          { id: "d", text: "Der Antrag muss geprüft werden." }
        ],
        solution: [
          "Der Antrag muss geprüft werden."
        ],
        focus: ["Modalverbpassiv", "Infinitiv Passiv"],
        hint: "Die feste Klammer lautet hier: Modalverb + Partizip II + werden."
      }
    ],
    "erhoeht-kombi": [
      {
        id: "erhoeht-kombi-mc-1",
        type: "multiple-choice",
        title: "Multiple Choice: Frage und Passiv",
        format: "Multiple Choice",
        prompt: "Welche Lösung bildet Fragebericht und Passiv korrekt?",
        source: [
          "Direkte Rede: Mia fragt: „Habt ihr die Einladung gestern verschickt?“"
        ],
        correctOptionId: "a",
        options: [
          { id: "a", text: "Mia fragt, ob die Einladung am Vortag verschickt worden sei." },
          { id: "b", text: "Mia fragt, ob ihr die Einladung gestern verschickt habt." },
          { id: "c", text: "Mia fragt, ob die Einladung gestern verschickt werde." },
          { id: "d", text: "Mia fragt, warum die Einladung am Vortag verschickt worden sei." }
        ],
        solution: [
          "Mia fragt, ob die Einladung am Vortag verschickt worden sei."
        ],
        focus: ["ob-Satz", "Passivperfekt", "Zeitwechsel"],
        hint: "Es ist eine Ja-Nein-Frage in der Vergangenheit. Suche also nach ob plus Passivperfekt."
      }
    ],
    "experte-ir": [
      {
        id: "experte-ir-mc-1",
        type: "multiple-choice",
        title: "Multiple Choice: komplexer Sprecherwechsel",
        format: "Multiple Choice",
        prompt: "Welche indirekte Rede löst die Perspektive korrekt auf?",
        source: [
          "Direkte Rede: Sara sagt zu Leon: „Ich schicke deiner Gruppe morgen meine Notizen.“"
        ],
        correctOptionId: "c",
        options: [
          { id: "a", text: "Sara sagt zu Leon, ich schicke deiner Gruppe morgen meine Notizen." },
          { id: "b", text: "Sara sagt zu Leon, sie schickt seiner Gruppe morgen ihre Notizen." },
          { id: "c", text: "Sara sagt zu Leon, sie schicke seiner Gruppe am nächsten Tag ihre Notizen." },
          { id: "d", text: "Sara sagt zu Leon, seine Gruppe schicke ihr am nächsten Tag die Notizen." }
        ],
        solution: [
          "Sara sagt zu Leon, sie schicke seiner Gruppe am nächsten Tag ihre Notizen."
        ],
        focus: ["Pronomenwechsel", "Dativpronomen", "Zeitangabe"],
        hint: "Die Besitzerin der Notizen bleibt Sara, die Gruppe gehört aber Leon."
      }
    ],
    "experte-ap": [
      {
        id: "experte-ap-mc-1",
        type: "multiple-choice",
        title: "Multiple Choice: Zustand oder Vorgang",
        format: "Multiple Choice",
        prompt: "Welche Form beschreibt einen Zustand nach abgeschlossener Handlung?",
        source: [
          "Kontext: Als wir eintraten, war die Tür bereits ..."
        ],
        correctOptionId: "b",
        options: [
          { id: "a", text: "wird geschlossen" },
          { id: "b", text: "geschlossen" },
          { id: "c", text: "geschlossen worden" },
          { id: "d", text: "werden geschlossen" }
        ],
        solution: [
          "Als wir eintraten, war die Tür bereits geschlossen."
        ],
        focus: ["Zustandspassiv", "Ergebnis"],
        hint: "Gesucht ist kein laufender Vorgang, sondern das bereits erreichte Ergebnis."
      }
    ],
    "experte-kombi": [
      {
        id: "experte-kombi-mc-1",
        type: "multiple-choice",
        title: "Multiple Choice: komplexer Gesamtumbau",
        format: "Multiple Choice",
        prompt: "Wähle die vollständig korrekte Umformung.",
        source: [
          "Direkte Rede: Der Kunde fragte: „Warum hat Ihre Werkstatt mein Fahrrad gestern nicht repariert?“"
        ],
        correctOptionId: "a",
        options: [
          { id: "a", text: "Der Kunde fragte, warum sein Fahrrad am Vortag nicht repariert worden sei." },
          { id: "b", text: "Der Kunde fragte, warum seine Werkstatt mein Fahrrad gestern nicht repariert habe." },
          { id: "c", text: "Der Kunde fragte, ob sein Fahrrad am Vortag nicht repariert worden sei." },
          { id: "d", text: "Der Kunde fragte, warum sein Fahrrad gestern nicht repariert werde." }
        ],
        solution: [
          "Der Kunde fragte, warum sein Fahrrad am Vortag nicht repariert worden sei."
        ],
        focus: ["w-Frage", "Passivperfekt", "Possessivwechsel"],
        hint: "Die Kundenperspektive verändert Ihr zu sein; außerdem braucht die Vergangenheitsfrage ein Passivperfekt."
      }
    ]
  };

  Object.entries(multipleChoiceTasks).forEach(([moduleId, tasks]) => {
    const module = moduleMap.get(moduleId);
    if (!module) {
      return;
    }

    tasks.forEach((task) => {
      if (!module.tasks.some((existingTask) => existingTask.id === task.id)) {
        module.tasks.push(task);
      }
    });
  });
})();
