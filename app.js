(function () {
  const data = window.WORKSHOP_DATA;
  const allTasks = flattenTasks(data.levels);
  const taskMap = new Map(allTasks.map((task) => [task.id, task]));

  const state = {
    filters: {
      level: "all",
      topic: "all",
      format: "all",
      onlyOpen: false
    },
    completed: loadProgress(),
    responses: {},
    spotlightId: allTasks[0]?.id || null
  };

  const elements = {
    heroTaskCount: document.querySelector("#heroTaskCount"),
    statsGrid: document.querySelector("#statsGrid"),
    levelFilters: document.querySelector("#levelFilters"),
    topicFilters: document.querySelector("#topicFilters"),
    formatFilters: document.querySelector("#formatFilters"),
    toggleOpenButton: document.querySelector("#toggleOpenButton"),
    randomTaskButton: document.querySelector("#randomTaskButton"),
    resetProgressButton: document.querySelector("#resetProgressButton"),
    spotlightTask: document.querySelector("#spotlightTask"),
    theoryGrid: document.querySelector("#theoryGrid"),
    resultCount: document.querySelector("#resultCount"),
    moduleList: document.querySelector("#moduleList")
  };

  bindEvents();
  render();

  function flattenTasks(levels) {
    return levels.flatMap((level) =>
      level.modules.flatMap((module) =>
        module.tasks.map((task) => ({
          ...task,
          levelId: level.id,
          levelTitle: level.title,
          levelStrapline: level.strapline,
          moduleId: module.id,
          moduleTitle: module.title,
          moduleIntro: module.intro,
          topic: module.topic
        }))
      )
    );
  }

  function bindEvents() {
    elements.toggleOpenButton.addEventListener("click", () => {
      state.filters.onlyOpen = !state.filters.onlyOpen;
      render();
    });

    elements.randomTaskButton.addEventListener("click", () => {
      const pool = getFilteredTasks();
      if (!pool.length) {
        return;
      }
      const randomTask = pool[Math.floor(Math.random() * pool.length)];
      state.spotlightId = randomTask.id;
      renderSpotlight(pool);
      document.querySelector(".spotlight-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    elements.resetProgressButton.addEventListener("click", () => {
      state.completed = {};
      state.responses = {};
      saveProgress();
      render();
    });

    document.addEventListener("click", (event) => {
      const filterButton = event.target.closest("[data-filter-group]");
      if (filterButton) {
        const group = filterButton.dataset.filterGroup;
        const value = filterButton.dataset.filterValue;
        state.filters[group] = value;
        render();
        return;
      }

      const spotlightButton = event.target.closest("[data-spotlight-task]");
      if (spotlightButton) {
        state.spotlightId = spotlightButton.dataset.spotlightTask;
        renderSpotlight(getFilteredTasks());
        return;
      }

      const checkButton = event.target.closest("[data-check-task]");
      if (checkButton) {
        evaluateTask(checkButton.dataset.checkTask);
        return;
      }

      const resetButton = event.target.closest("[data-reset-task]");
      if (resetButton) {
        resetTask(resetButton.dataset.resetTask);
      }
    });

    document.addEventListener("input", (event) => {
      const input = event.target.closest("[data-answer-task]");
      if (!input) {
        return;
      }

      const taskId = input.dataset.answerTask;
      const response = ensureResponse(taskId);
      response.answer = input.value;

      if (response.status === "empty") {
        response.status = "idle";
      }
    });

    document.addEventListener("change", (event) => {
      const choice = event.target.closest("[data-choice-task]");
      if (!choice) {
        return;
      }

      const taskId = choice.dataset.choiceTask;
      const response = ensureResponse(taskId);
      response.selectedOption = choice.value;

      if (response.status === "empty") {
        response.status = "idle";
      }
    });
  }

  function evaluateTask(taskId) {
    const task = taskMap.get(taskId);
    const response = ensureResponse(taskId);
    const answer = task.type === "multiple-choice"
      ? response.selectedOption
      : response.answer.trim();

    if (!answer) {
      response.status = "empty";
      render();
      return;
    }

    if (isCorrectAnswer(task, answer)) {
      response.attempts += 1;
      response.status = "correct";
      state.completed[taskId] = true;
      saveProgress();
      render();
      return;
    }

    response.attempts += 1;

    if (response.attempts === 1) {
      response.status = "wrong-1";
    } else if (response.attempts === 2) {
      response.status = "wrong-2";
    } else {
      response.status = "revealed";
    }

    render();
  }

  function resetTask(taskId) {
    state.responses[taskId] = createEmptyResponse(taskMap.get(taskId));
    render();
  }

  function createEmptyResponse(task) {
    const response = {
      answer: "",
      selectedOption: "",
      attempts: 0,
      status: "idle"
    };

    if (task?.type === "multiple-choice") {
      response.optionOrder = shuffle(task.options.map((option) => option.id));
    }

    return response;
  }

  function getOptionOrder(task, response) {
    if (task.type !== "multiple-choice") {
      return [];
    }

    if (!response.optionOrder?.length) {
      response.optionOrder = shuffle(task.options.map((option) => option.id));
    }

    return response.optionOrder;
  }

  function getOrderedOptions(task, response) {
    const optionMap = new Map(task.options.map((option) => [option.id, option]));
    return getOptionOrder(task, response)
      .map((id) => optionMap.get(id))
      .filter(Boolean);
  }

  function renderAnswerArea(task, response, isLocked, isSpotlight) {
    if (task.type === "multiple-choice") {
      return renderMultipleChoice(task, response, isLocked);
    }

    return `
      <div class="answer-stack">
        <label class="answer-label" for="answer-${task.id}">Deine Antwort</label>
        <textarea
          id="answer-${task.id}"
          class="answer-input"
          data-answer-task="${task.id}"
          rows="${isSpotlight ? 5 : 4}"
          placeholder="Schreibe hier deine Umformung oder Korrektur."
          ${isLocked ? "disabled" : ""}
        >${escapeHtml(response.answer)}</textarea>

        <div class="answer-controls">
          <button
            class="button primary"
            type="button"
            data-check-task="${task.id}"
            ${isLocked ? "disabled" : ""}
          >
            Antwort prüfen
          </button>
          <button class="button ghost" type="button" data-reset-task="${task.id}">
            Neu starten
          </button>
        </div>
      </div>
    `;
  }

  function renderMultipleChoice(task, response, isLocked) {
    const options = getOrderedOptions(task, response);

    return `
      <fieldset class="answer-stack choice-stack" ${isLocked ? "disabled" : ""}>
        <legend class="answer-label">Wähle eine Antwort</legend>
        <div class="choice-list">
          ${options
            .map((option, index) => {
              const checked = response.selectedOption === option.id ? "checked" : "";
              const optionLabel = String.fromCharCode(65 + index);
              return `
                <label class="choice-option">
                  <input
                    type="radio"
                    name="choice-${task.id}"
                    value="${option.id}"
                    data-choice-task="${task.id}"
                    ${checked}
                  >
                  <span class="choice-badge">${optionLabel}</span>
                  <span class="choice-text">${escapeHtml(option.text)}</span>
                </label>
              `;
            })
            .join("")}
        </div>

        <div class="answer-controls">
          <button
            class="button primary"
            type="button"
            data-check-task="${task.id}"
            ${isLocked ? "disabled" : ""}
          >
            Antwort prüfen
          </button>
          <button class="button ghost" type="button" data-reset-task="${task.id}">
            Neu mischen
          </button>
        </div>
      </fieldset>
    `;
  }

  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }

    return result;
  }

  function ensureResponse(taskId) {
    if (!state.responses[taskId]) {
      state.responses[taskId] = createEmptyResponse(taskMap.get(taskId));
    }

    return state.responses[taskId];
  }

  function render() {
    if (elements.heroTaskCount) {
      elements.heroTaskCount.textContent = `${allTasks.length} Aufgaben`;
    }

    renderStats();
    renderFilters();
    renderTheory();
    renderModules();
    renderSpotlight(getFilteredTasks());

    elements.toggleOpenButton.textContent = state.filters.onlyOpen
      ? "Alle Aufgaben zeigen"
      : "Nur offene Aufgaben";
  }

  function renderStats() {
    const filteredTasks = getFilteredTasks();
    const completedCount = Object.values(state.completed).filter(Boolean).length;
    const openFilteredCount = filteredTasks.filter((task) => !state.completed[task.id]).length;
    const completedFilteredCount = filteredTasks.filter((task) => state.completed[task.id]).length;
    const moduleCount = new Set(filteredTasks.map((task) => task.moduleId)).size;

    const stats = [
      { label: "Aufgaben gesamt", value: allTasks.length },
      { label: "Richtig gelöst", value: completedCount },
      { label: "Treffer im Filter", value: filteredTasks.length },
      { label: "Noch offen", value: openFilteredCount },
      { label: "Im Filter gelöst", value: completedFilteredCount },
      { label: "Module im Filter", value: moduleCount }
    ];

    elements.statsGrid.innerHTML = stats
      .map(
        (stat) => `
          <article class="stat-card">
            <strong>${stat.value}</strong>
            <span>${stat.label}</span>
          </article>
        `
      )
      .join("");
  }

  function renderFilters() {
    renderFilterGroup(elements.levelFilters, "level", [
      { value: "all", label: "Alle Levels" },
      ...data.levels.map((level) => ({
        value: level.id,
        label: level.title
      }))
    ]);

    renderFilterGroup(elements.topicFilters, "topic", [
      { value: "all", label: "Alle Themen" },
      ...data.topics.map((topic) => ({ value: topic, label: topic }))
    ]);

    renderFilterGroup(elements.formatFilters, "format", [
      { value: "all", label: "Alle Formate" },
      ...data.formats.map((format) => ({ value: format, label: format }))
    ]);
  }

  function renderFilterGroup(container, group, items) {
    container.innerHTML = items
      .map((item) => {
        const isActive = state.filters[group] === item.value;
        return `
          <button
            class="chip-button ${isActive ? "active" : ""}"
            type="button"
            data-filter-group="${group}"
            data-filter-value="${item.value}"
          >
            ${item.label}
          </button>
        `;
      })
      .join("");
  }

  function renderTheory() {
    const visibleLevels = state.filters.level === "all"
      ? data.levels
      : data.levels.filter((level) => level.id === state.filters.level);

    elements.theoryGrid.innerHTML = visibleLevels
      .flatMap((level) =>
        level.theory.map(
          (card) => `
            <article class="theory-card">
              <p class="module-kicker">${level.title} · ${level.strapline}</p>
              <h3>${card.title}</h3>
              <ul>
                ${card.points.map((point) => `<li>${point}</li>`).join("")}
              </ul>
            </article>
          `
        )
      )
      .join("");
  }

  function renderSpotlight(filteredTasks) {
    const taskPool = filteredTasks.length ? filteredTasks : allTasks;
    const spotlightTask = taskPool.find((task) => task.id === state.spotlightId) || taskPool[0];

    if (!spotlightTask) {
      elements.spotlightTask.innerHTML = `<div class="empty-state">Keine Aufgabe gefunden.</div>`;
      return;
    }

    state.spotlightId = spotlightTask.id;
    elements.spotlightTask.innerHTML = renderTaskCard(spotlightTask, true);
  }

  function renderModules() {
    const filteredTasks = getFilteredTasks();
    elements.resultCount.textContent = `${filteredTasks.length} Aufgabe(n) im aktuellen Filter`;

    if (!filteredTasks.length) {
      elements.moduleList.innerHTML = `
        <div class="empty-state">
          Für diese Kombination gibt es gerade keine Aufgaben. Probiere einen anderen Filter oder zeige wieder alle Aufgaben an.
        </div>
      `;
      return;
    }

    const groups = groupTasks(filteredTasks);
    elements.moduleList.innerHTML = groups
      .map((group) => {
        const completedInModule = group.tasks.filter((task) => state.completed[task.id]).length;
        return `
          <section class="module-card">
            <div class="module-heading">
              <div>
                <p class="module-kicker">${group.levelTitle} · ${group.topic}</p>
                <h3>${group.moduleTitle}</h3>
              </div>
              <span class="stat-chip">${completedInModule}/${group.tasks.length} gelöst</span>
            </div>
            <p class="module-intro">${group.moduleIntro}</p>
            <div class="task-grid">
              ${group.tasks.map((task) => renderTaskCard(task, false)).join("")}
            </div>
          </section>
        `;
      })
      .join("");
  }

  function renderTaskCard(task, isSpotlight) {
    const response = ensureResponse(task.id);
    const completed = Boolean(state.completed[task.id]);
    const isLocked = response.status === "correct" || response.status === "revealed";

    return `
      <article class="task-card ${completed ? "completed" : ""}">
        <div class="task-header">
          <div>
            <p class="task-meta">${task.levelTitle} · ${task.topic} · ${task.format}</p>
            <h4>${task.title}</h4>
          </div>
          <div class="task-actions">
            ${!isSpotlight ? `<button class="button ghost" type="button" data-spotlight-task="${task.id}">In den Fokus</button>` : ""}
            <span class="attempt-pill ${getAttemptClass(response)}">${getAttemptText(response)}</span>
          </div>
        </div>

        <p>${task.prompt}</p>

        <div class="source-box">
          ${task.source.map((line) => `<p>${line}</p>`).join("")}
        </div>

        <div class="focus-row">
          ${task.focus.map((item) => `<span class="focus-chip">${item}</span>`).join("")}
        </div>

        ${renderAnswerArea(task, response, isLocked, isSpotlight)}

        ${renderFeedback(task, response)}
      </article>
    `;
  }

  function renderFeedback(task, response) {
    if (response.status === "idle") {
      return "";
    }

    if (response.status === "empty") {
      return `
        <section class="feedback-panel feedback-empty">
          <h5>Antwort fehlt</h5>
          <p>Schreibe zuerst eine eigene Lösung in das Eingabefeld und prüfe sie dann.</p>
        </section>
      `;
    }

    if (response.status === "correct") {
      return `
        <section class="feedback-panel feedback-correct">
          <h5>Richtig</h5>
          <p>Die Lösung passt. Die Aufgabe zählt jetzt als gelöst.</p>
          <div class="feedback-solution">
            <strong>Musterlösung</strong>
            <p>${escapeHtml(getAcceptedAnswers(task)[0])}</p>
          </div>
        </section>
      `;
    }

    if (response.status === "wrong-1") {
      return `
        <section class="feedback-panel feedback-error">
          <h5>Falsch</h5>
          <p>Das stimmt noch nicht. Achte auf die Umbauform und prüfe deine Satzperspektive noch einmal.</p>
        </section>
      `;
    }

    if (response.status === "wrong-2") {
      return `
        <section class="feedback-panel feedback-warning">
          <h5>Noch nicht richtig</h5>
          <p>Das ist der zweite Fehlversuch. Nutze jetzt den Hinweis und versuche es noch einmal.</p>
          <div class="hint-box">
            <strong>Hinweis</strong>
            <p>${escapeHtml(buildHint(task))}</p>
          </div>
        </section>
      `;
    }

    return `
      <section class="feedback-panel feedback-reveal">
        <h5>Dritter Fehlversuch</h5>
        <p>Jetzt wird die Musterlösung eingeblendet. Schau dir die einzelnen Umbauschritte an und starte die Aufgabe danach neu.</p>

        <div class="feedback-solution">
          <strong>Musterlösung</strong>
          <p>${escapeHtml(getAcceptedAnswers(task)[0])}</p>
        </div>

        <div class="arrow-flow">
          ${buildFlowCards(task)}
        </div>

        <div class="schema-grid">
          ${buildSchemaCards(task)}
        </div>

        <div class="explanation-box">
          <strong>Genaue Erklärung</strong>
          <ul>
            ${buildExplanationPoints(task).map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
          </ul>
        </div>
      </section>
    `;
  }

  function getAttemptText(response) {
    if (response.status === "correct") {
      return `gelöst in ${response.attempts} Versuch${response.attempts === 1 ? "" : "en"}`;
    }

    if (response.status === "revealed") {
      return "Musterlösung aktiv";
    }

    const nextAttempt = Math.min(response.attempts + 1, 3);
    return `Versuch ${nextAttempt} von 3`;
  }

  function getAttemptClass(response) {
    if (response.status === "correct") {
      return "is-correct";
    }

    if (response.status === "revealed") {
      return "is-revealed";
    }

    if (response.status === "wrong-2") {
      return "is-warning";
    }

    return "is-default";
  }

  function buildHint(task) {
    if (task.hint) {
      return task.hint;
    }

    const intro = getTopicHint(task.topic);
    const sourceHint = buildSourceHint(task);
    const focusHint = task.focus.length
      ? `Achte besonders auf ${task.focus.slice(0, 3).join(", ")}.`
      : "";
    return [intro, sourceHint, focusHint].filter(Boolean).join(" ");
  }

  function getTopicHint(topic) {
    if (topic === "Indirekte Rede") {
      return "Prüfe zuerst Sprecherwechsel, Pronomen und die passende Konjunktivform.";
    }

    if (topic === "Aktiv/Passiv") {
      return "Bestimme, welche Satzinformation ins Zentrum rückt: Handlungsträger oder Vorgang.";
    }

    return "Arbeite in zwei Schritten: erst den Bericht sauber bilden, dann die Passivform passend einsetzen.";
  }

  function buildSourceHint(task) {
    const text = task.source.join(" ");
    const hints = [];

    if (/[?]/.test(text)) {
      hints.push("Prüfe, ob du einen ob-Satz oder das erhaltene Fragewort brauchst.");
    }

    if (/[!]|„Sch|„Bitte|„Meldet|„Sende|„Überarbeite|„Ergänzt/.test(text) || task.format === "Frage/Aufforderung") {
      hints.push("Wenn eine Aufforderung wiedergegeben wird, hilft oft eine Form mit sollen.");
    }

    if (/\b(heute|morgen|gestern|hier|hierher)\b/i.test(text)) {
      hints.push("Mindestens eine Zeit- oder Ortsangabe muss wahrscheinlich verschoben werden.");
    }

    if (/\b(ich|wir|du|ihr|mein|meine|meiner|unser|euer|dein)\b/i.test(text)) {
      hints.push("Suche nach Wörtern aus der Sprecherperspektive, die beim Berichten ihre Form wechseln.");
    }

    if (task.topic !== "Indirekte Rede" && /\b(muss|müssen|musste|durfen|dürfen|soll|sollen)\b/i.test(text)) {
      hints.push("Im Passiv mit Modalverb steht am Ende meist Partizip II plus werden.");
    }

    return hints.slice(0, 2).join(" ");
  }

  function buildFlowCards(task) {
    const steps = [
      {
        label: "1. Ausgang",
        className: "flow-source",
        text: task.source.join(" ")
      },
      {
        label: "2. Umbau",
        className: "flow-transform",
        text: getTransformationSummary(task)
      },
      {
        label: "3. Ergebnis",
        className: "flow-solution",
        text: getAcceptedAnswers(task)[0]
      }
    ];

    return steps
      .map(
        (step, index) => `
          <div class="flow-step ${step.className}">
            <span>${step.label}</span>
            <p>${escapeHtml(step.text)}</p>
          </div>
          ${index < steps.length - 1 ? '<div class="flow-arrow" aria-hidden="true">→</div>' : ""}
        `
      )
      .join("");
  }

  function buildSchemaCards(task) {
    return getSchemas(task)
      .map(
        (schema) => `
          <article class="schema-card ${schema.tone}">
            <h6>${escapeHtml(schema.title)}</h6>
            <p>${escapeHtml(schema.from)}</p>
            <div class="schema-arrow" aria-hidden="true">→</div>
            <p>${escapeHtml(schema.to)}</p>
          </article>
        `
      )
      .join("");
  }

  function getSchemas(task) {
    const schemas = [];
    const sourceText = task.source.join(" ").toLowerCase();

    if (task.topic !== "Aktiv/Passiv") {
      schemas.push({
        tone: "tone-perspective",
        title: "Perspektivschema",
        from: "direkte Rede oder Originalperspektive",
        to: "berichtete Rede mit neuer Sprecherperspektive"
      });
      schemas.push({
        tone: "tone-mode",
        title: "Modusschema",
        from: "Indikativ, Frage oder Aufforderung",
        to: "Konjunktiv I/II, ob- oder Fragewortsatz, oft mit sollen"
      });
    }

    if (task.topic !== "Indirekte Rede") {
      schemas.push({
        tone: "tone-passive",
        title: "Passivschema",
        from: "Aktivsatz mit handelndem Subjekt",
        to: "Vorgang oder Ergebnis im Fokus mit Partizip II"
      });
    }

    if (containsShiftWord(sourceText)) {
      schemas.push({
        tone: "tone-shift",
        title: "Deixisschema",
        from: "heute, morgen, gestern, hier",
        to: "an diesem Tag, am nächsten Tag, am Vortag, dort"
      });
    }

    return schemas.slice(0, 4);
  }

  function buildExplanationPoints(task) {
    const points = [];

    if (Array.isArray(task.explanationSteps)) {
      points.push(...task.explanationSteps);
    }

    points.push(getTopicExplanation(task));
    task.focus.forEach((focus) => {
      points.push(explainFocus(focus));
    });

    points.push(`Vergleiche deinen Satz mit der Musterlösung und prüfe, ob die Verbform genau zum Umbauziel von ${task.format.toLowerCase()} passt.`);

    return unique(points).filter(Boolean).slice(0, 5);
  }

  function getTopicExplanation(task) {
    if (task.topic === "Indirekte Rede") {
      return "Die Aussage bleibt gleich, aber der Satz wird als berichtete Rede markiert. Deshalb müssen Perspektive, Pronomen und Verbform angepasst werden.";
    }

    if (task.topic === "Aktiv/Passiv") {
      return "Beim Passiv verschiebt sich der Fokus vom Handelnden auf den Vorgang oder auf das Ergebnis. Darum verändert sich die Satzstruktur deutlich.";
    }

    return "Hier laufen zwei Umbauten gleichzeitig: erst wird die Aussage berichtend umgeformt, dann wird die Kernhandlung in eine passende Passivstruktur gebracht.";
  }

  function explainFocus(focus) {
    const label = focus.toLowerCase();

    if (label.includes("konjunktiv")) {
      return "Die Verbform muss die Distanz der indirekten Rede zeigen; deshalb steht hier eine passende Konjunktivform.";
    }
    if (label.includes("pronomen")) {
      return "Pronomen wechseln mit der Sprecherperspektive. Prüfe besonders ich, wir, du, ihr sowie mein und unser.";
    }
    if (label.includes("zeit")) {
      return "Zeitangaben müssen zur Berichtssituation passen. Direkte Angaben wie morgen oder gestern werden oft umgestellt.";
    }
    if (label.includes("ort")) {
      return "Ortsangaben werden an die neue Perspektive angepasst, zum Beispiel hier zu dort.";
    }
    if (label.includes("possessiv")) {
      return "Possessivpronomen folgen der neuen Bezugsperson. Deshalb muss klar sein, wem etwas gehört.";
    }
    if (label.includes("dativ")) {
      return "Auch Dativformen wie mir, dir oder ihr müssen an die neue Satzperspektive angepasst werden.";
    }
    if (label.includes("modal")) {
      return "Modalverben bleiben inhaltlich erhalten, werden aber grammatisch in die neue Form eingebaut.";
    }
    if (label.includes("ob-satz")) {
      return "Ja-Nein-Fragen werden in der indirekten Rede in der Regel mit einem ob-Satz wiedergegeben.";
    }
    if (label.includes("w-frage")) {
      return "Fragewörter wie warum, wann oder von wem bleiben erhalten und leiten den indirekten Fragesatz ein.";
    }
    if (label.includes("sollen") || label.includes("aufforderung")) {
      return "Aufforderungen erscheinen in der indirekten Rede häufig mit sollen, damit der Befehl berichtend wiedergegeben wird.";
    }
    if (label.includes("passiv")) {
      return "Für das Passiv brauchst du eine passende Form von werden oder sein und das Partizip II des Vollverbs.";
    }
    if (label.includes("zustandspassiv")) {
      return "Das Zustandspassiv beschreibt ein Ergebnis und wird mit sein plus Partizip II gebildet.";
    }
    if (label.includes("vorgangspassiv")) {
      return "Das Vorgangspassiv zeigt die Handlung selbst und wird mit werden plus Partizip II gebildet.";
    }
    if (label.includes("partizip ii")) {
      return "Im Passiv steht das Vollverb als Partizip II; genau diese Form muss stimmen.";
    }
    if (label.includes("agens") || label.includes("von-") || label.includes("durch-")) {
      return "Die Handelnden werden im Passiv nur genannt, wenn sie wichtig sind; dann passt meist von oder bei Naturkräften eher durch.";
    }
    if (label.includes("vorzeitigkeit") || label.includes("perfekt")) {
      return "Liegt die Handlung vor dem eigentlichen Bericht, brauchst du eine passende Vergangenheitsform in der indirekten Rede oder im Passiv.";
    }
    if (label.includes("futur") || label.includes("folgehandlung") || label.includes("nachzeitigkeit")) {
      return "Wenn etwas erst später geschieht, muss diese spätere Zeitbeziehung im neuen Satz erkennbar bleiben.";
    }
    if (label.includes("aktivrueckbildung")) {
      return "Beim Rückweg ins Aktiv braucht der Satz wieder ein handelndes Subjekt, oft man oder eine passende Personengruppe.";
    }

    return `${focus} muss im umgeformten Satz sichtbar und grammatisch stimmig bleiben.`;
  }

  function getTransformationSummary(task) {
    const parts = [];

    if (task.topic !== "Aktiv/Passiv") {
      parts.push("Sprecherperspektive wechseln");
      parts.push("Pronomen und Verb in berichtete Form setzen");
    }

    if (containsShiftWord(task.source.join(" ").toLowerCase())) {
      parts.push("Zeit- oder Ortsangaben anpassen");
    }

    if (task.topic !== "Indirekte Rede") {
      parts.push("Passivschema mit Partizip II aufbauen");
    }

    return parts.join(" → ");
  }

  function containsShiftWord(text) {
    return ["heute", "morgen", "gestern", "hier"].some((word) => text.includes(word));
  }

  function getAcceptedAnswers(task) {
    if (task.type === "multiple-choice") {
      const correctOption = task.options.find((option) => option.id === task.correctOptionId);
      return unique([
        correctOption?.text,
        ...(task.solution || [])
      ]);
    }

    const answers = [];

    if (Array.isArray(task.acceptedAnswers) && task.acceptedAnswers.length) {
      answers.push(...task.acceptedAnswers);
    }

    if (task.solution?.[0]) {
      answers.push(task.solution[0]);
    }

    task.solution.forEach((line) => {
      const match = line.match(/^Alternativ ist auch m[oö]glich:\s*(.+)$/i);
      if (match) {
        answers.push(match[1]);
      }
    });

    return unique(answers);
  }

  function isCorrectAnswer(task, answer) {
    if (task.type === "multiple-choice") {
      return answer === task.correctOptionId;
    }

    const normalizedAnswer = normalize(answer);
    return getAcceptedAnswers(task).some((candidate) => normalize(candidate) === normalizedAnswer);
  }

  function normalize(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/ß/g, "ss")
      .replace(/[„“"']/g, "")
      .replace(/[.,;:!?]/g, "")
      .replace(/[()]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function groupTasks(tasks) {
    const groups = new Map();

    tasks.forEach((task) => {
      if (!groups.has(task.moduleId)) {
        groups.set(task.moduleId, {
          moduleId: task.moduleId,
          moduleTitle: task.moduleTitle,
          moduleIntro: task.moduleIntro,
          levelTitle: task.levelTitle,
          topic: task.topic,
          tasks: []
        });
      }
      groups.get(task.moduleId).tasks.push(task);
    });

    return Array.from(groups.values());
  }

  function getFilteredTasks() {
    return allTasks.filter((task) => {
      const levelOk = state.filters.level === "all" || task.levelId === state.filters.level;
      const topicOk = state.filters.topic === "all" || task.topic === state.filters.topic;
      const formatOk = state.filters.format === "all" || task.format === state.filters.format;
      const openOk = !state.filters.onlyOpen || !state.completed[task.id];
      return levelOk && topicOk && formatOk && openOk;
    });
  }

  function unique(items) {
    return Array.from(new Set(items.filter(Boolean)));
  }

  function loadProgress() {
    try {
      const raw = window.localStorage.getItem(data.storageKey);
      return raw ? JSON.parse(raw) : {};
    } catch (error) {
      return {};
    }
  }

  function saveProgress() {
    window.localStorage.setItem(data.storageKey, JSON.stringify(state.completed));
  }
})();
