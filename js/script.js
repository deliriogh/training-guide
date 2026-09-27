
const breadcrumb = document.getElementById("breadcrumb");
const breadcrumbParent = document.getElementById("breadcrumbParent");

const breadcrumbLabels = {
  "support-org": "Success Engineer & Case Operations",
  "platform-fundamentals": "Salesforce Platform Foundations",
  "sales-experience": "Sales & Experience Cloud",
  "service-cloud": "Service Cloud",
  "security-visibility": "Security & Visibility",
  "automation-execution": "Automation & Execution",
  "reports-data": "Reports & Data Management",
  "investigation-toolbox": "Investigation Toolbox & Technical Diagnostics",
  "structured-investigation": "Structured Investigation, RCA & Collaboration",
  "real-cases": "Real Case Library",
  "progress": "Home",
  "glossary": "Glossary",
  "references": "Reference Links"
};

const subtopicLabels = {
  "support-role": "Support Engineer Role",
  "case-lifecycle": "Case Lifecycle",
  "severity-sla": "Severity, Business Impact & SLA",
  "case-quality": "Case Quality & Documentation",
  "case-closure": "Case Closure & Special Processes",
  "routing-transfers": "Transfers & Escalations",
  "queue-work": "Queue & Work Management",
  "customer-experience": "Customer Experience",
  "support-metrics": "Expectations, Metrics & Career",
  "module-01-final": "Module 01 Final Quiz",
  "salesforce-c360": "Salesforce & Customer 360",
  "platform-architecture": "Salesforce Architecture",
  "sf-environments": "Environments",
  "editions-licenses": "Editions, Licenses & Entitlements",
  "data-model-foundations": "Data Model",
  "navigation": "Navigation",
  "configuration": "Configuration",
  "module-02-final": "Module 02 Final Quiz",
  "sales-overview": "Sales Cloud Overview",
  "accounts-contacts": "Accounts, Contacts & Person Accounts",
  "lead-lifecycle": "Leads & Lead Lifecycle",
  "web-to-lead": "Web-to-Lead",
  "lead-assignment": "Lead Assignment",
  "lead-conversion": "Lead Conversion",
  "lead-troubleshooting": "Lead Troubleshooting",
  "opportunity-management": "Opportunity Management",
  "approval-processes": "Approval Processes",
  "experience-cloud": "Experience Cloud",
  "module-03-final": "Module 03 Final Quiz",
  "service-overview": "Service Cloud Ecosystem",
  "service-console": "Service Console",
  "case-management-feed": "Case Management & Case Feed",
  "parent-child-cases": "Parent & Child Cases",
  "case-creation-automation": "Case Creation & Initial Automation",
  "omni-queues": "Omni-Channel & Queues",
  "escalation-rules": "Escalation Rules",
  "digital-engagement": "Digital Engagement",
  "email-telephony": "Email & Telephony",
  "service-productivity": "Service Productivity",
  "module-04-final": "Module 04 Final Quiz",
  "security-model": "Security Model — Who Sees What?",
  "profiles": "Profiles",
  "permission-sets": "Permission Sets",
  "object-permissions": "Object Permissions / CRUD",
  "field-level-security": "Field-Level Security",
  "page-layout-vs-fls": "Page Layout vs FLS",
  "record-ownership": "Record Ownership",
  "owd": "Organization-Wide Defaults",
  "role-hierarchy": "Role Hierarchy",
  "sharing-rules": "Sharing Rules",
  "public-groups": "Public Groups",
  "teams": "Teams",
  "manual-sharing": "Manual Sharing",
  "manager-groups": "Manager Groups",
  "restriction-rules": "Restriction Rules",
  "login-hours-ip": "Login Hours & IP Ranges",
  "elevated-permissions": "Admin / Elevated Permissions",
  "security-troubleshooting": "Security Troubleshooting",
  "module-05-final": "Module 05 Final Quiz",
  "order-of-execution": "Order of Execution",
  "salesforce-flow": "Salesforce Flow",
  "flow-types": "Flow Types",
  "flow-builder": "Flow Builder",
  "flow-logic": "Flow Logic",
  "subflows-versions": "Subflows & Flow Versions",
  "flow-debugging": "Debugging Flows",
  "validation-rules": "Validation Rules",
  "apex-for-se": "Apex for Success Engineers",
  "reports": "Reports",
  "report-types": "Report Types",
  "report-filters": "Filters",
  "report-formats": "Report Formats",
  "dashboards": "Dashboards",
  "report-dashboard-security": "Reports & Dashboard Security",
  "subscriptions": "Subscriptions & Scheduling",
  "report-troubleshooting": "Report Troubleshooting",
  "data-import-wizard": "Data Import Wizard",
  "data-loader": "Data Loader",
  "data-loader-io": "Data Loader.io",
  "data-operations": "Data Operations",
  "se-toolbox": "Success Engineer Toolbox",
  "case-history": "Case History",
  "setup": "Setup",
  "salesforce-help": "Salesforce Help & Documentation",
  "demo-sandboxes": "Demo Orgs / Sandboxes",
  "developer-console": "Developer Console",
  "debug-logs": "Debug Logs",
  "soql": "SOQL",
  "workbench": "Workbench",
  "salesforce-inspector": "Salesforce Inspector",
  "splunk": "Splunk",
  "blacktab": "BlackTab",
  "gus": "GUS",
  "trust": "Salesforce Trust",
  "email-logs": "Email Logs",
  "setup-audit-trail": "Setup Audit Trail",
  "organization-history": "Organization History",
  "ai-tools": "AI Investigation Tools",
  "module-08-final": "Module 08 Final Quiz",
  "problem-boundary": "Define the Problem Boundary",
  "understand-symptom": "Understand the Symptom",
  "business-impact": "Business Impact",
  "reproduce": "Reproduce",
  "research-before-troubleshooting": "Research Before Troubleshooting",
  "evidence-hypothesis": "Evidence & Hypothesis",
  "pattern-recognition": "Pattern Recognition",
  "root-cause-analysis": "Root Cause Analysis",
  "escalation-readiness": "Escalation Readiness",
  "swarming": "Swarming",
  "release-readiness": "Release Readiness",
  "final-checklist": "Final Investigation Checklist"
};

function updateBreadcrumb(parentId, subtarget = null, isUtility = false) {
  if (!breadcrumb) return;

  const parentLabel = breadcrumbLabels[parentId] || parentId;
  breadcrumb.innerHTML = `
    <span class="breadcrumb-root">Training</span>
    <span class="breadcrumb-separator">›</span>
    <span class="${subtarget ? "" : "breadcrumb-current"}">${parentLabel}</span>
    ${subtarget ? `
      <span class="breadcrumb-separator">›</span>
      <span class="breadcrumb-current">${subtopicLabels[subtarget] || subtarget}</span>
    ` : ""}
  `;
}

const themeToggle = document.getElementById("themeToggle");
const topButton = document.getElementById("topButton");
const startLearning = document.getElementById("startLearning");
const railButtons = document.querySelectorAll(".rail-button");
const panel = document.getElementById("utilityPanel");
const panelClose = document.getElementById("panelClose");
const trainingSections = document.querySelectorAll(".training-section");
const fullPageViews = document.querySelectorAll(".full-page-view");
const treeParents = document.querySelectorAll(".tree-parent");
const treeChildren = document.querySelectorAll(".tree-children button");
const currentTopic = document.getElementById("currentTopic");
const glossaryPageSearch = document.getElementById("glossaryPageSearch");
const glossaryPageItems = document.querySelectorAll(".glossary-page-item");
const glossaryPageEmpty = document.getElementById("glossaryPageEmpty");

const topicLabels = {
  "support-org": "01 · Success Engineer & Case Operations",
  "platform-fundamentals": "02 · Salesforce Platform Foundations",
  "sales-experience": "03 · Sales & Experience Cloud",
  "service-cloud": "04 · Service Cloud",
  "security-visibility": "05 · Security & Visibility",
  "automation-execution": "06 · Automation & Execution",
  "reports-data": "07 · Reports & Data Management",
  "investigation-toolbox": "08 · Investigation Toolbox & Technical Diagnostics",
  "structured-investigation": "09 · Structured Investigation, RCA & Collaboration",
  "real-cases": "10 · Real Case Library"
};

const utilityLabels = {
  progress: "Home · Course Progress",
  glossary: "Glossary",
  references: "Reference Links"
};

function closeContentsPanel() {
  panel.classList.remove("open");
  document.body.classList.remove("panel-open");
  const contentsButton = document.querySelector('[data-panel="contents"]');
  if (contentsButton) contentsButton.classList.remove("active");
}

function hideAllMainViews() {
  trainingSections.forEach(section => {
    section.classList.remove("active-section", "topic-focused", "show-module-hero");
    section.querySelectorAll(":scope > .topic-section").forEach(topic => topic.classList.remove("active-topic"));
    section.querySelectorAll(".selected-placeholder").forEach(item => item.classList.remove("selected-placeholder"));
  });
  fullPageViews.forEach(view => view.classList.remove("active-full-page"));
}

function setHeroVisibility(show) {
  const hero = document.querySelector(".hero");
  if (hero) hero.style.display = show ? "" : "none";
}

function updateModuleMenuState(sectionId, subtarget = null) {
  document.querySelectorAll(".module-topic-dropdown").forEach(details => {
    const isCurrent = details.dataset.section === sectionId;
    const currentLabel = details.querySelector(".module-menu-current");
    if (isCurrent && currentLabel) {
      currentLabel.textContent = subtarget && subtopicLabels[subtarget]
        ? subtopicLabels[subtarget]
        : "Explore module topics";
    }
    details.querySelectorAll(".module-topic-jump").forEach(button => {
      button.classList.toggle("active", isCurrent && button.dataset.subtarget === subtarget);
    });
    if (!isCurrent) details.open = false;
  });
}

function showFullPage(type) {
  closeContentsPanel();
  hideAllMainViews();
  setHeroVisibility(type === "progress");

  const page = document.getElementById(`${type}-page`);
  if (page) {
    page.classList.add("active-full-page");
    page.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  railButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.panel === type));
  currentTopic.textContent = utilityLabels[type] || "";
  updateBreadcrumb(type, null, true);
  updateModuleMenuState(null, null);
  recordView({ type: "full", id: type });
}

function getFirstModuleSubtarget(sectionId) {
  const treeParent = document.querySelector(`.tree-parent[data-section="${sectionId}"]`);
  const firstTopic = treeParent?.closest(".tree-group")?.querySelector(".tree-children button[data-subtarget]");
  return firstTopic?.dataset.subtarget || null;
}

function showSection(sectionId, subtarget = null) {
  // A module always opens on its first learning topic. The dropdown is then
  // used to switch between topics without showing a duplicated topic catalog.
  const firstSubtarget = getFirstModuleSubtarget(sectionId);
  if (!subtarget) subtarget = firstSubtarget;

  closeContentsPanel();
  hideAllMainViews();
  setHeroVisibility(false);

  trainingSections.forEach(section => {
    section.classList.toggle("active-section", section.id === sectionId);
  });

  treeParents.forEach(parent => {
    parent.classList.toggle("active", parent.dataset.section === sectionId);
  });

  railButtons.forEach(btn => btn.classList.remove("active"));
  currentTopic.textContent = subtarget && subtopicLabels[subtarget]
    ? `${topicLabels[sectionId]} · ${subtopicLabels[subtarget]}`
    : (topicLabels[sectionId] || "");
  updateBreadcrumb(sectionId, subtarget);

  const section = document.getElementById(sectionId);
  const target = subtarget ? document.getElementById(subtarget) : null;

  if (section) {
    section.classList.toggle("show-module-hero", subtarget === firstSubtarget);
  }

  if (section && target && target.classList.contains("topic-section")) {
    section.classList.add("topic-focused");
    target.classList.add("active-topic");
  } else if (section && subtarget) {
    const placeholder = section.querySelector(`[data-module-topic-card="${subtarget}"]`) || target;
    if (placeholder) placeholder.classList.add("selected-placeholder");
  }

  updateModuleMenuState(sectionId, subtarget);

  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });

  if (subtarget) {
    setTimeout(() => {
      const focusTarget = section?.querySelector(`[data-module-topic-card="${subtarget}"]`) || target;
      if (focusTarget && !section?.classList.contains("topic-focused")) {
        focusTarget.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 180);
  }

  recordView({ type: "section", id: sectionId, subtarget: subtarget || null });
}

railButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.panel;

    if (type === "contents") {
      const isOpen = panel.classList.contains("open");

      if (isOpen) {
        closeContentsPanel();
        return;
      }

      railButtons.forEach(button => button.classList.toggle("active", button === btn));
      panel.classList.add("open");
      document.body.classList.add("panel-open");
      return;
    }

    showFullPage(type);
  });
});

panelClose.addEventListener("click", closeContentsPanel);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

startLearning.addEventListener("click", () => {
  showSection("support-org");
});

treeParents.forEach(parent => {
  parent.addEventListener("click", () => {
    const clickedGroup = parent.closest(".tree-group");
    const wasOpen = clickedGroup.classList.contains("open");

    document.querySelectorAll(".tree-group").forEach(group => group.classList.remove("open"));

    if (!wasOpen) {
      clickedGroup.classList.add("open");
      showSection(parent.dataset.section);
    }
  });
});

treeChildren.forEach(child => {
  child.addEventListener("click", () => {
    const group = child.closest(".tree-group");
    const parent = group.querySelector(".tree-parent");

    document.querySelectorAll(".tree-group").forEach(item => item.classList.toggle("open", item === group));
    showSection(parent.dataset.section, child.dataset.subtarget);
  });
});

function updateGlossaryLetterVisibility() {
  document.querySelectorAll('[data-glossary-letter-heading]').forEach(heading => {
    const letter = heading.dataset.glossaryLetterHeading;
    const hasVisible = [...document.querySelectorAll(`.glossary-page-item[data-letter="${letter}"]`)]
      .some(item => item.style.display !== 'none');
    heading.style.display = hasVisible ? 'flex' : 'none';
  });
}

glossaryPageSearch.addEventListener("input", () => {
  const query = glossaryPageSearch.value.trim().toLowerCase();
  let visible = 0;

  glossaryPageItems.forEach(item => {
    const matches = item.textContent.toLowerCase().includes(query);
    item.style.display = matches ? "grid" : "none";
    if (matches) visible += 1;
  });

  glossaryPageEmpty.style.display = visible ? "none" : "block";
  updateGlossaryLetterVisibility();
});


document.querySelectorAll(".ecosystem-node[data-jump]").forEach(node => {
  node.addEventListener("click", () => {
    showSection(node.dataset.jump, node.dataset.subtarget || null);
  });
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const sectionIds = ["support-role", "case-lifecycle", "severity-sla", "case-quality", "case-closure", "routing-transfers", "queue-work", "customer-experience", "support-metrics", "salesforce-c360", "platform-architecture", "sf-environments", "editions-licenses", "data-model-foundations", "navigation", "configuration", "sales-overview", "accounts-contacts", "lead-lifecycle", "web-to-lead", "lead-assignment", "lead-conversion", "lead-troubleshooting", "opportunity-management", "approval-processes", "experience-cloud", "service-overview", "service-console", "case-management-feed", "parent-child-cases", "case-creation-automation", "omni-queues", "escalation-rules", "digital-engagement", "email-telephony", "service-productivity", "module-04-final", "security-model", "profiles", "permission-sets", "object-permissions", "field-level-security", "page-layout-vs-fls", "record-ownership", "owd", "role-hierarchy", "sharing-rules", "public-groups", "teams", "manual-sharing", "manager-groups", "restriction-rules", "login-hours-ip", "elevated-permissions", "security-troubleshooting", "module-05-final", "order-of-execution", "salesforce-flow", "flow-types", "flow-builder", "flow-logic", "subflows-versions", "flow-debugging", "validation-rules", "apex-for-se", "reports", "report-types", "report-filters", "report-formats", "dashboards", "report-dashboard-security", "subscriptions", "report-troubleshooting", "data-import-wizard", "data-loader", "data-loader-io", "data-operations", "se-toolbox", "case-history", "setup", "salesforce-help", "demo-sandboxes", "developer-console", "debug-logs", "soql", "workbench", "salesforce-inspector", "splunk", "blacktab", "gus", "trust", "email-logs", "setup-audit-trail", "organization-history", "ai-tools", "module-08-final", "problem-boundary", "understand-symptom", "business-impact", "reproduce", "research-before-troubleshooting", "evidence-hypothesis", "pattern-recognition", "root-cause-analysis", "escalation-readiness", "swarming", "release-readiness", "final-checklist"];
const completeButtons = document.querySelectorAll(".complete-button");
const progressCards = document.querySelectorAll("[data-progress-section]");
const mainProgressRing = document.getElementById("mainProgressRing");
const mainProgressPercent = document.getElementById("mainProgressPercent");
const mainProgressStat = document.getElementById("mainProgressStat");
const QUIZ_RESULTS_KEY = "trainingGuideQuizResults";

// Module-to-section routing must be available before progress/quiz UI initializes.
const moduleSectionMap = {
  "01": "support-org",
  "02": "platform-fundamentals",
  "03": "sales-experience",
  "04": "service-cloud",
  "05": "security-visibility",
  "06": "automation-execution",
  "07": "reports-data",
  "08": "investigation-toolbox",
  "09": "structured-investigation",
  "10": "real-cases"
};

function getCompletedSections() {
  try {
    return JSON.parse(localStorage.getItem("trainingGuideCompleted") || "[]");
  } catch {
    return [];
  }
}

function saveCompletedSections(completed) {
  localStorage.setItem("trainingGuideCompleted", JSON.stringify([...new Set(completed)]));
}

function getQuizResults() {
  try {
    return JSON.parse(localStorage.getItem(QUIZ_RESULTS_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveQuizResults(results) {
  localStorage.setItem(QUIZ_RESULTS_KEY, JSON.stringify(results));
}

function markSectionComplete(id) {
  if (!sectionIds.includes(id)) return;
  const completed = getCompletedSections();
  if (!completed.includes(id)) {
    completed.push(id);
    saveCompletedSections(completed);
  }
  updateProgressUI();
}

function getModuleTopicIds(moduleNumber) {
  const sectionId = moduleSectionMap[moduleNumber];
  if (!sectionId) return [];
  const treeParent = document.querySelector(`.tree-parent[data-section="${sectionId}"]`);
  return [...(treeParent?.closest(".tree-group")?.querySelectorAll(".tree-children button[data-subtarget]") || [])]
    .map(button => button.dataset.subtarget);
}

function updateModuleQuizAverages() {
  const results = getQuizResults();
  document.querySelectorAll(".course-module-card[data-module]").forEach(card => {
    const moduleNumber = card.dataset.module;
    const topicIds = getModuleTopicIds(moduleNumber);
    const moduleResults = topicIds.map(id => results[id]).filter(result => result && Number.isFinite(result.score));
    const average = moduleResults.length
      ? Math.round(moduleResults.reduce((sum, result) => sum + result.score, 0) / moduleResults.length)
      : null;

    let stat = card.querySelector(".module-quiz-stat");
    if (!stat) {
      stat = document.createElement("div");
      stat.className = "module-quiz-stat";
      const copy = card.querySelector(".module-copy");
      const summary = copy?.querySelector(":scope > p");
      if (summary) summary.after(stat);
      else copy?.prepend(stat);
    }

    stat.classList.toggle("has-results", average !== null);
    stat.innerHTML = average === null
      ? `<span>Quiz average</span><strong>—</strong><small>No quizzes completed yet</small>`
      : `<span>Quiz average</span><strong>${average}%</strong><small>${moduleResults.length} ${moduleResults.length === 1 ? "quiz" : "quizzes"} completed</small>`;
  });
}

function updateProgressUI() {
  const completed = getCompletedSections();
  const validCompleted = completed.filter(id => sectionIds.includes(id));
  const percent = Math.round((validCompleted.length / sectionIds.length) * 100);

  if (mainProgressPercent) mainProgressPercent.textContent = `${percent}%`;
  if (mainProgressStat) mainProgressStat.textContent = `${validCompleted.length} of ${sectionIds.length}`;
  if (mainProgressRing) {
    mainProgressRing.style.background =
      `conic-gradient(var(--accent) ${percent}%, var(--surface-2) 0)`;
  }

  const topProgressPercent = document.getElementById("topProgressPercent");
  const topProgressFill = document.getElementById("topProgressFill");

  if (topProgressPercent) topProgressPercent.textContent = `${percent}%`;
  if (topProgressFill) topProgressFill.style.width = `${percent}%`;

  // Legacy buttons are intentionally no longer used for topic completion.
  completeButtons.forEach(button => {
    button.hidden = true;
  });

  progressCards.forEach(card => {
    const done = validCompleted.includes(card.dataset.progressSection);
    card.classList.toggle("completed", done);
    const status = card.querySelector("[data-status]");
    if (status) status.textContent = done ? "Completed" : "Not completed";
  });

  document.querySelectorAll("[data-topic-chip]").forEach(chip => {
    chip.classList.toggle("completed", validCompleted.includes(chip.dataset.topicChip));
  });

  document.querySelectorAll("[data-quiz-completion]").forEach(note => {
    const done = validCompleted.includes(note.dataset.quizCompletion);
    note.classList.toggle("completed", done);
    note.textContent = done ? "Topic completed ✓" : "Complete the quiz to finish this topic.";
  });

  updateModuleQuizAverages();
}

function getQuestionBlocks(quiz) {
  const blocks = [...quiz.querySelectorAll(":scope > .quiz-question")];
  return blocks.length ? blocks : [quiz];
}

function getQuestionButton(question) {
  return question.querySelector(":scope > .quiz-button") || question.querySelector(".quiz-button");
}

function getQuestionLabels(question) {
  return [...question.querySelectorAll("label")];
}

function paintQuestionResult(question, selectedValue, correctValue) {
  getQuestionLabels(question).forEach(label => {
    const input = label.querySelector('input[type="radio"]');
    label.classList.remove("answer-correct", "answer-incorrect", "answer-selected");
    if (!input) return;
    if (input.value === correctValue) label.classList.add("answer-correct");
    if (input.value === selectedValue && selectedValue !== correctValue) label.classList.add("answer-incorrect");
    if (input.value === selectedValue) label.classList.add("answer-selected");
  });
}

function completeQuizIfReady(quiz) {
  const topicId = quiz.dataset.quiz;
  if (!topicId || !sectionIds.includes(topicId)) return;
  const questions = getQuestionBlocks(quiz);
  const buttons = questions.map(getQuestionButton).filter(Boolean);
  if (!buttons.length || !buttons.every(button => button.dataset.answered === "true")) return;

  const correct = buttons.filter(button => button.dataset.wasCorrect === "true").length;
  const total = buttons.length;
  const score = Math.round((correct / total) * 100);
  const answers = questions.map(question => {
    const button = getQuestionButton(question);
    const selected = question.querySelector('input[type="radio"]:checked');
    return {
      selected: selected?.value || null,
      correct: button?.dataset.answer || null,
      wasCorrect: button?.dataset.wasCorrect === "true"
    };
  });

  const results = getQuizResults();
  results[topicId] = { score, correct, total, answers, completedAt: Date.now() };
  saveQuizResults(results);
  markSectionComplete(topicId);

  let summary = quiz.querySelector(".quiz-result-summary");
  if (!summary) {
    summary = document.createElement("div");
    summary.className = "quiz-result-summary";
    quiz.append(summary);
  }
  summary.innerHTML = `<span>QUIZ RESULT</span><strong>${score}%</strong><small>${correct} of ${total} correct</small>`;
  summary.classList.add("visible");
}

function evaluateQuizButton(button) {
  if (button.dataset.answered === "true") return;
  const quiz = button.closest(".quick-check");
  const question = button.closest(".quiz-question") || quiz;
  const selected = question.querySelector('input[type="radio"]:checked');
  const feedback = question.querySelector(".quiz-feedback") || quiz?.querySelector(".quiz-feedback");
  if (!quiz || !question || !feedback) return;

  feedback.classList.remove("correct", "incorrect");

  if (!selected) {
    feedback.textContent = "Choose an answer first.";
    feedback.classList.add("incorrect");
    return;
  }

  const isCorrect = selected.value === button.dataset.answer;
  paintQuestionResult(question, selected.value, button.dataset.answer);
  feedback.textContent = isCorrect
    ? (button.dataset.success || "✓ Correct.")
    : "Incorrect. The correct answer is highlighted in green.";
  feedback.classList.add(isCorrect ? "correct" : "incorrect");

  button.dataset.answered = "true";
  button.dataset.wasCorrect = String(isCorrect);
  button.disabled = true;
  button.textContent = "Answered";
  question.querySelectorAll('input[type="radio"]').forEach(input => input.disabled = true);

  completeQuizIfReady(quiz);
}

function restoreQuizState() {
  const results = getQuizResults();
  document.querySelectorAll(".quick-check[data-quiz]").forEach(quiz => {
    const result = results[quiz.dataset.quiz];
    if (!result?.answers?.length) return;
    const questions = getQuestionBlocks(quiz);
    questions.forEach((question, index) => {
      const saved = result.answers[index];
      const button = getQuestionButton(question);
      if (!saved || !button) return;
      const selected = question.querySelector(`input[type="radio"][value="${CSS.escape(saved.selected || "")}"]`);
      if (selected) selected.checked = true;
      paintQuestionResult(question, saved.selected, saved.correct || button.dataset.answer);
      button.dataset.answered = "true";
      button.dataset.wasCorrect = String(Boolean(saved.wasCorrect));
      button.disabled = true;
      button.textContent = "Answered";
      question.querySelectorAll('input[type="radio"]').forEach(input => input.disabled = true);
    });

    let summary = quiz.querySelector(".quiz-result-summary");
    if (!summary) {
      summary = document.createElement("div");
      summary.className = "quiz-result-summary";
      quiz.append(summary);
    }
    summary.innerHTML = `<span>QUIZ RESULT</span><strong>${result.score}%</strong><small>${result.correct} of ${result.total} correct</small>`;
    summary.classList.add("visible");
  });
}

document.querySelectorAll(".quiz-button").forEach(button => {
  button.addEventListener("click", () => evaluateQuizButton(button));
});

restoreQuizState();
updateProgressUI();


const sectionNavButtons = document.querySelectorAll(".section-nav-btn");
const historyBack = document.getElementById("historyBack");
const historyForward = document.getElementById("historyForward");

let viewHistory = [];
let historyIndex = -1;
let suppressHistory = false;

function recordView(view) {
  if (suppressHistory) return;

  const current = viewHistory[historyIndex];
  if (current && current.type === view.type && current.id === view.id && current.subtarget === view.subtarget) {
    updateHistoryButtons();
    return;
  }

  viewHistory = viewHistory.slice(0, historyIndex + 1);
  viewHistory.push(view);
  historyIndex = viewHistory.length - 1;
  updateHistoryButtons();
}

function updateHistoryButtons() {
  if (historyBack) historyBack.disabled = historyIndex <= 0;
  if (historyForward) historyForward.disabled = historyIndex < 0 || historyIndex >= viewHistory.length - 1;
}

function openHistoryView(view) {
  suppressHistory = true;

  if (view.type === "section") {
    showSection(view.id, view.subtarget || null);
  } else if (view.type === "full") {
    showFullPage(view.id);
  }

  suppressHistory = false;
  updateHistoryButtons();
}

if (historyBack) {
  historyBack.addEventListener("click", () => {
    if (historyIndex > 0) {
      historyIndex -= 1;
      openHistoryView(viewHistory[historyIndex]);
    }
  });
}

if (historyForward) {
  historyForward.addEventListener("click", () => {
    if (historyIndex < viewHistory.length - 1) {
      historyIndex += 1;
      openHistoryView(viewHistory[historyIndex]);
    }
  });
}

sectionNavButtons.forEach(button => {
  button.addEventListener("click", () => {
    showSection(button.dataset.go, button.dataset.subtarget || null);
  });
});

const ecosystemProducts = document.querySelectorAll(".ecosystem-product");
const ecosystemInfoCard = document.getElementById("ecosystemInfoCard");
const ecosystemInfoIcon = document.getElementById("ecosystemInfoIcon");
const ecosystemInfoTitle = document.getElementById("ecosystemInfoTitle");
const ecosystemInfoText = document.getElementById("ecosystemInfoText");
const ecosystemInfoLink = document.getElementById("ecosystemInfoLink");

function updateEcosystemProduct(product) {
  ecosystemProducts.forEach(item => item.classList.toggle("active", item === product));

  ecosystemInfoIcon.textContent = product.dataset.icon || "✦";
  ecosystemInfoTitle.textContent = product.dataset.title || "";
  if (product.dataset.descriptionHtml) {
    ecosystemInfoText.innerHTML = product.dataset.descriptionHtml;
  } else {
    ecosystemInfoText.textContent = product.dataset.description || "";
  }
  ecosystemInfoLink.textContent = product.dataset.action || "";

  const hasJump = Boolean(product.dataset.jump);
  ecosystemInfoLink.disabled = !hasJump;
  ecosystemInfoLink.dataset.jump = product.dataset.jump || "";
  ecosystemInfoLink.dataset.subtarget = product.dataset.subtarget || "";

  ecosystemInfoCard.classList.remove("flash");
  requestAnimationFrame(() => ecosystemInfoCard.classList.add("flash"));
  setTimeout(() => ecosystemInfoCard.classList.remove("flash"), 240);
}

ecosystemProducts.forEach(product => {
  product.addEventListener("mouseenter", () => updateEcosystemProduct(product));
  product.addEventListener("focus", () => updateEcosystemProduct(product));
  product.addEventListener("click", () => {
    updateEcosystemProduct(product);
    if (product.dataset.jump) {
      showSection(product.dataset.jump, product.dataset.subtarget || null);
    }
  });
});

ecosystemInfoLink.addEventListener("click", () => {
  if (!ecosystemInfoLink.disabled && ecosystemInfoLink.dataset.jump) {
    showSection(ecosystemInfoLink.dataset.jump, ecosystemInfoLink.dataset.subtarget || null);
  }
});

const navHotspots = document.querySelectorAll(".nav-hotspot");
const navFeatureCards = document.querySelectorAll(".navigation-feature-cards button");
const navInfoIcon = document.getElementById("navInfoIcon");
const navInfoTitle = document.getElementById("navInfoTitle");
const navInfoText = document.getElementById("navInfoText");
const navLiveCard = document.querySelector(".nav-live-card");

function updateNavigationHotspot(hotspot) {
  navHotspots.forEach(item => item.classList.toggle("active", item === hotspot));
  navFeatureCards.forEach(card => {
    card.classList.toggle("active", card.dataset.hotspotTarget === hotspot.dataset.title);
  });

  navInfoIcon.textContent = hotspot.dataset.icon || "•";
  navInfoTitle.textContent = hotspot.dataset.title || "";
  navInfoText.textContent = hotspot.dataset.description || "";

  navLiveCard.classList.remove("flash");
  requestAnimationFrame(() => navLiveCard.classList.add("flash"));
  setTimeout(() => navLiveCard.classList.remove("flash"), 240);
}

navHotspots.forEach(hotspot => {
  hotspot.addEventListener("mouseenter", () => updateNavigationHotspot(hotspot));
  hotspot.addEventListener("focus", () => updateNavigationHotspot(hotspot));
  hotspot.addEventListener("click", () => updateNavigationHotspot(hotspot));
});

navFeatureCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    const target = [...navHotspots].find(item => item.dataset.title === card.dataset.hotspotTarget);
    if (target) updateNavigationHotspot(target);
  });
  card.addEventListener("click", () => {
    const target = [...navHotspots].find(item => item.dataset.title === card.dataset.hotspotTarget);
    if (target) updateNavigationHotspot(target);
  });
});



// V19 — module hubs, compact topic dropdowns, home navigation, and guided topic interactions
const brandHome = document.getElementById("brandHome");
function moduleNumberFromLabel(label) {
  const match = String(label || "").match(/^(\d+)/);
  return match ? match[1].padStart(2, "0") : "";
}

function buildModuleExperience() {
  Object.entries(topicLabels).forEach(([sectionId, label]) => {
    const section = document.getElementById(sectionId);
    const treeParent = document.querySelector(`.tree-parent[data-section="${sectionId}"]`);
    const treeGroup = treeParent?.closest(".tree-group");
    if (!section || !treeGroup || section.classList.contains("module-enhanced")) return;

    const topicButtons = [...treeGroup.querySelectorAll(".tree-children button[data-subtarget]")];
    const moduleNumber = moduleNumberFromLabel(label);
    const title = label.replace(/^\d+\s·\s/, "");
    const originalIntro = section.querySelector(":scope > .lead, :scope > .module-title-row .section-intro");
    const description = originalIntro?.textContent.trim() || "Explore the topics in this module.";

    section.classList.add("module-enhanced");
    section.querySelector(":scope > .section-number")?.classList.add("module-source-heading");
    section.querySelector(":scope > h2")?.classList.add("module-source-heading");
    section.querySelector(":scope > .lead")?.classList.add("module-source-heading");
    section.querySelector(":scope > .module-title-row")?.classList.add("module-source-heading");

    const hero = document.createElement("div");
    hero.className = "module-hub-hero";
    hero.innerHTML = `
      <span class="module-hub-kicker">MODULE ${moduleNumber}</span>
      <h2>${title}</h2>
      <p>${description}</p>
      <div class="module-hub-meta">
        <span>${topicButtons.length || "Coming"} ${topicButtons.length === 1 ? "topic" : "topics"}</span>
        <span>Learn · Understand · Investigate · Apply · Check</span>
      </div>
    `;
    section.prepend(hero);

    // Convert not-yet-built catalog entries into a single focused topic shell.
    // This lets every module open directly on its first topic, even before that
    // topic receives its final learning content.
    topicButtons.forEach(button => {
      const subtarget = button.dataset.subtarget;
      const existing = document.getElementById(subtarget);
      if (!existing || existing.classList.contains("topic-section")) return;

      const raw = button.textContent.trim();
      const parts = raw.split(" · ");
      const index = parts.shift() || "";
      const name = parts.join(" · ") || subtopicLabels[subtarget] || raw;

      const shell = document.createElement("article");
      shell.id = subtarget;
      shell.className = "topic-section topic-placeholder-shell";
      shell.innerHTML = `
        <div class="topic-hero-panel placeholder-topic-hero">
          <div>
            <span class="topic-index">${index} · LEARNING TOPIC</span>
            <h3>${name}</h3>
            <p>This topic is part of the approved course structure. Its full Learn → Understand → Investigate → Apply → Check content will be added from the original training sources.</p>
          </div>
          <span class="topic-status">CONTENT IN PROGRESS</span>
        </div>
        <div class="topic-placeholder-card">
          <span class="mini-eyebrow">TOPIC READY</span>
          <h4>${name}</h4>
          <p>The navigation and learning shell are ready. Detailed training content will replace this placeholder as we build the module topic by topic.</p>
        </div>
      `;
      existing.remove();
      section.append(shell);
    });

    const dropdown = document.createElement("details");
    dropdown.className = "module-topic-dropdown";
    dropdown.dataset.section = sectionId;
    dropdown.innerHTML = `
      <summary>
        <span class="module-menu-icon">☷</span>
        <span class="module-menu-copy"><small>MODULE NAVIGATION</small><strong class="module-menu-current">Explore module topics</strong></span>
        <span class="module-menu-count">${topicButtons.length ? `${topicButtons.length} topics` : "Coming later"}</span>
        <span class="module-menu-chevron">⌄</span>
      </summary>
      <div class="module-topic-menu-panel">
        ${topicButtons.length ? topicButtons.map(button => {
          const subtarget = button.dataset.subtarget;
          const raw = button.textContent.trim();
          const parts = raw.split(" · ");
          const index = parts.shift() || "";
          const name = parts.join(" · ") || subtopicLabels[subtarget] || raw;
          const target = document.getElementById(subtarget);
          const built = Boolean(target?.classList.contains("real-content-topic"));
          return `<button type="button" class="module-topic-jump${built ? " built" : ""}" data-section="${sectionId}" data-subtarget="${subtarget}"><span>${index}</span><strong>${name}</strong><small>${built ? "OPEN TOPIC" : "CONTENT IN PROGRESS"}</small><i>→</i></button>`;
        }).join("") : '<div class="module-topic-menu-empty">The Real Case Library will be built after the core training content.</div>'}
      </div>
    `;
    const toolbar = document.createElement("div");
    toolbar.className = "module-tools-row";
    toolbar.dataset.section = sectionId;

    const moduleSearch = document.createElement("div");
    moduleSearch.className = "course-search-shell module-course-search";
    moduleSearch.dataset.courseSearch = "module";
    moduleSearch.dataset.section = sectionId;
    moduleSearch.innerHTML = `
      <div class="course-search-control">
        <span class="course-search-icon">⌕</span>
        <input aria-label="Search this module" autocomplete="off" placeholder="Search this module..." type="search"/>
        <button aria-label="Clear module search" class="course-search-clear" type="button">×</button>
        <div class="course-search-results" role="listbox"></div>
      </div>
    `;

    toolbar.append(dropdown, moduleSearch);
    hero.after(toolbar);
  });

  document.querySelectorAll(".module-topic-jump").forEach(button => {
    button.addEventListener("click", () => {
      button.closest("details")?.removeAttribute("open");
      showSection(button.dataset.section, button.dataset.subtarget);
    });
  });
}

function bindHomeNavigation() {
  document.querySelectorAll(".course-module-card[data-module]").forEach(card => {
    const sectionId = moduleSectionMap[card.dataset.module];
    if (!sectionId) return;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");

    const open = event => {
      const chip = event?.target?.closest?.("[data-topic-chip]");
      if (chip) showSection(sectionId, chip.dataset.topicChip);
      else showSection(sectionId);
    };

    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(event);
      }
    });
  });
}

function activateFocusButton(button) {
  const panel = button.closest("[data-focus-panel]");
  if (!panel) return;
  panel.querySelectorAll(".focus-btn").forEach(item => item.classList.toggle("active", item === button));
  const kicker = panel.querySelector(".focus-kicker");
  const title = panel.querySelector(".focus-title");
  const text = panel.querySelector(".focus-text");
  if (kicker) kicker.textContent = button.dataset.focusKicker || "";
  if (title) title.textContent = button.dataset.focusTitle || "";
  if (text) text.textContent = button.dataset.focusText || "";
  const points = String(button.dataset.focusPoints || "").split("|");
  panel.querySelectorAll(".focus-point span").forEach((item, index) => item.textContent = points[index] || "");
}

document.querySelectorAll("[data-focus-panel] .focus-btn").forEach(button => {
  button.addEventListener("mouseenter", () => activateFocusButton(button));
  button.addEventListener("focus", () => activateFocusButton(button));
  button.addEventListener("click", () => activateFocusButton(button));
});

document.querySelectorAll(".topic-learning-nav button[data-phase-target]").forEach(button => {
  button.addEventListener("click", () => {
    const nav = button.closest(".topic-learning-nav");
    nav?.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
    document.getElementById(button.dataset.phaseTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

brandHome?.addEventListener("click", () => showFullPage("progress"));
brandHome?.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showFullPage("progress");
  }
});

buildModuleExperience();
bindHomeNavigation();

// V66 — searchable learning guide. Global search lives on Home; module search is scoped
// to the module currently being studied. Results can jump directly to a topic and briefly
// emphasize the matching terms in the learning content.
(function initCourseContentSearch(){
  const SEARCH_SYNONYMS = {
    "sla": ["service level agreement", "service commitment", "milestone"],
    "slo": ["service level objective"],
    "ooo": ["out of office"],
    "fls": ["field level security", "field-level security"],
    "owd": ["organization wide defaults", "organization-wide defaults"],
    "csat": ["customer satisfaction"],
    "ttr": ["time to resolution", "time to resolve"],
    "omni": ["omni-channel", "omni channel", "routing"],
    "omni-channel": ["omni channel", "routing"],
    "route": ["routing", "routed", "assignment"],
    "routing": ["route", "routed", "assignment"],
    "queue": ["queues", "routing"],
    "queues": ["queue", "routing"],
    "permission": ["permissions", "access", "visibility"],
    "permissions": ["permission", "access", "visibility"],
    "field": ["fields"],
    "fields": ["field"],
    "object": ["objects"],
    "objects": ["object"],
    "lead": ["leads", "web-to-lead"],
    "case": ["cases", "support case"],
    "swarm": ["swarming"],
    "swarming": ["swarm", "collaboration"],
    "api": ["application programming interface"],
    "b2b": ["business to business", "business-to-business"],
    "b2c": ["business to consumer", "business-to-consumer"]
  };

  const normalize = value => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, " ")
    .trim();

  const escapeHtml = value => String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  const escapeRegExp = value => String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  function cleanSearchText(element) {
    if (!element) return "";
    const clone = element.cloneNode(true);
    clone.querySelectorAll([
      '.tooltip', '.card-term-tooltip', '.topic-learning-nav', '.section-nav',
      '.quiz-button', 'input', 'textarea', 'select', '.course-search-shell',
      '.module-topic-dropdown', '.module-tools-row'
    ].join(',')).forEach(node => node.remove());
    return String(clone.textContent || "").replace(/\s+/g, " ").trim();
  }

  function buildIndex() {
    const records = [];
    document.querySelectorAll('.training-section').forEach(section => {
      const sectionId = section.id;
      const moduleLabel = topicLabels[sectionId] || sectionId;
      section.querySelectorAll(':scope > .topic-section').forEach(topic => {
        const id = topic.id;
        if (!id) return;
        const title = topic.querySelector('.topic-hero-panel h3, :scope > h3, h3')?.textContent.trim() || subtopicLabels[id] || id;
        const text = cleanSearchText(topic);
        records.push({
          type: 'topic', id, sectionId, title, moduleLabel, text,
          normTitle: normalize(title), normText: normalize(text)
        });
      });
    });

    document.querySelectorAll('.glossary-page-item[id]').forEach(item => {
      const title = item.querySelector('h3')?.textContent.trim() || 'Glossary';
      const text = cleanSearchText(item);
      records.push({
        type: 'glossary', id: item.id, sectionId: 'glossary', title,
        moduleLabel: 'Glossary', text, normTitle: normalize(title), normText: normalize(text)
      });
    });

    document.querySelectorAll('.reference-section-group[id^="ref-group-"]').forEach(group => {
      const title = group.querySelector('.reference-section-heading h3, h3')?.textContent.trim() || 'Reference';
      const text = cleanSearchText(group);
      records.push({
        type: 'reference', id: group.id, sectionId: 'references', title,
        moduleLabel: 'References', text, normTitle: normalize(title), normText: normalize(text)
      });
    });
    return records;
  }

  let searchIndex = buildIndex();

  function expandedTerms(query) {
    const normalizedQuery = normalize(query);
    const rawTokens = normalizedQuery.split(/[^a-z0-9_+#-]+/).filter(token => token.length >= 2);
    const terms = new Set([normalizedQuery, ...rawTokens]);
    rawTokens.forEach(token => (SEARCH_SYNONYMS[token] || []).forEach(term => terms.add(normalize(term))));
    if (SEARCH_SYNONYMS[normalizedQuery]) SEARCH_SYNONYMS[normalizedQuery].forEach(term => terms.add(normalize(term)));
    return [...terms].filter(Boolean).sort((a,b) => b.length - a.length);
  }

  function scoreRecord(record, query, terms) {
    const nq = normalize(query);
    if (!nq) return 0;
    let score = 0;
    if (record.normTitle.includes(nq)) score += 120;
    if (record.normText.includes(nq)) score += 45;
    terms.forEach((term, index) => {
      const weight = index === 0 ? 1.25 : 1;
      if (record.normTitle.includes(term)) score += 28 * weight;
      if (record.normText.includes(term)) score += 7 * weight;
    });
    return score;
  }

  function findMatchPosition(record, query, terms) {
    const nq = normalize(query);
    const normalized = record.normText;
    let position = normalized.indexOf(nq);
    if (position >= 0) return position;
    for (const term of terms) {
      position = normalized.indexOf(term);
      if (position >= 0) return position;
    }
    return 0;
  }

  function snippetFor(record, query, terms) {
    const original = record.text || record.title;
    const normalized = normalize(original);
    const matchPosition = findMatchPosition(record, query, terms);
    // Normalization preserves practical character positions for our English course text.
    const start = Math.max(0, matchPosition - 85);
    const end = Math.min(original.length, start + 245);
    let snippet = original.slice(start, end).trim();
    if (start > 0) snippet = `…${snippet}`;
    if (end < original.length) snippet = `${snippet}…`;
    return snippet;
  }

  function emphasize(value, query, terms) {
    let safe = escapeHtml(value);
    const highlightTerms = [...new Set([normalize(query), ...terms])]
      .filter(term => term.length >= 2)
      .sort((a,b) => b.length - a.length)
      .slice(0, 10);
    highlightTerms.forEach(term => {
      const pattern = escapeRegExp(term).replace(/\\ /g, '\\s+');
      try {
        safe = safe.replace(new RegExp(`(${pattern})`, 'gi'), '<mark>$1</mark>');
      } catch {}
    });
    return safe;
  }

  function runSearch(query, sectionId = null) {
    const terms = expandedTerms(query);
    return searchIndex
      .filter(record => !sectionId || record.sectionId === sectionId)
      .map(record => ({ ...record, score: scoreRecord(record, query, terms), terms }))
      .filter(record => record.score > 0)
      .sort((a,b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, sectionId ? 7 : 10);
  }

  function clearContentSearchHighlights() {
    document.querySelectorAll('mark.content-search-highlight').forEach(mark => {
      const parent = mark.parentNode;
      mark.replaceWith(document.createTextNode(mark.textContent || ''));
      parent?.normalize?.();
    });
  }

  function highlightContentTerms(root, terms) {
    clearContentSearchHighlights();
    if (!root || !terms.length) return;
    const candidates = terms.filter(term => term.length >= 2).sort((a,b) => b.length - a.length).slice(0, 8);
    if (!candidates.length) return;
    const expression = new RegExp(`(${candidates.map(escapeRegExp).join('|')})`, 'gi');
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode()) && nodes.length < 80) {
      const parent = node.parentElement;
      if (!parent || parent.closest('script,style,button,input,textarea,select,.tooltip,.card-term-tooltip,.topic-learning-nav,.section-nav,.course-search-shell')) continue;
      if (expression.test(node.nodeValue || '')) nodes.push(node);
      expression.lastIndex = 0;
    }
    let count = 0;
    nodes.forEach(textNode => {
      if (count >= 30 || !textNode.parentNode) return;
      const text = textNode.nodeValue || '';
      const frag = document.createDocumentFragment();
      let last = 0;
      text.replace(expression, (match, _group, offset) => {
        if (count >= 30) return match;
        frag.append(document.createTextNode(text.slice(last, offset)));
        const mark = document.createElement('mark');
        mark.className = 'content-search-highlight';
        mark.textContent = match;
        frag.append(mark);
        last = offset + match.length;
        count += 1;
        return match;
      });
      if (last === 0) return;
      frag.append(document.createTextNode(text.slice(last)));
      textNode.replaceWith(frag);
      expression.lastIndex = 0;
    });
    const first = root.querySelector('mark.content-search-highlight');
    if (first) setTimeout(() => first.scrollIntoView({behavior:'smooth', block:'center'}), 260);
  }

  function openSearchRecord(record, query, terms) {
    document.querySelectorAll('.course-search-results.open').forEach(panel => panel.classList.remove('open'));
    if (record.type === 'topic') {
      showSection(record.sectionId, record.id);
      setTimeout(() => highlightContentTerms(document.getElementById(record.id), [normalize(query), ...terms]), 260);
      return;
    }
    if (record.type === 'glossary') {
      showFullPage('glossary');
      setTimeout(() => {
        const target = document.getElementById(record.id);
        target?.scrollIntoView({behavior:'smooth', block:'center'});
        highlightContentTerms(target, [normalize(query), ...terms]);
      }, 260);
      return;
    }
    if (record.type === 'reference') {
      showFullPage('references');
      setTimeout(() => {
        const target = document.getElementById(record.id);
        target?.scrollIntoView({behavior:'smooth', block:'center'});
        highlightContentTerms(target, [normalize(query), ...terms]);
      }, 260);
    }
  }

  function renderResults(shell, query) {
    const input = shell.querySelector('input[type="search"]');
    const resultsPanel = shell.querySelector('.course-search-results');
    const clear = shell.querySelector('.course-search-clear');
    const isModule = shell.dataset.courseSearch === 'module';
    const sectionId = isModule ? shell.dataset.section : null;
    const value = String(query || '').trim();
    shell.classList.toggle('has-value', Boolean(value));
    clear?.classList.toggle('visible', Boolean(value));
    if (!value) {
      resultsPanel.innerHTML = '';
      resultsPanel.classList.remove('open');
      clearContentSearchHighlights();
      return;
    }

    const results = runSearch(value, sectionId);
    const label = isModule
      ? `${results.length} ${results.length === 1 ? 'match' : 'matches'} in this module`
      : `${results.length} ${results.length === 1 ? 'match' : 'matches'} across the guide`;

    resultsPanel.innerHTML = `
      <div class="course-search-results-header"><span>${label}</span><small>Click a result to jump there</small></div>
      ${results.length ? results.map((record, index) => `
        <button class="course-search-result" type="button" data-result-index="${index}" role="option">
          <span class="course-search-result-meta">${escapeHtml(record.moduleLabel)}</span>
          <strong>${emphasize(record.title, value, record.terms)}</strong>
          <p>${emphasize(snippetFor(record, value, record.terms), value, record.terms)}</p>
          <i>→</i>
        </button>
      `).join('') : `<div class="course-search-empty"><strong>No matches yet</strong><span>Try another term, abbreviation, or feature name.</span></div>`}
    `;
    resultsPanel.classList.add('open');

    resultsPanel.querySelectorAll('[data-result-index]').forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        const record = results[Number(button.dataset.resultIndex)];
        if (record) openSearchRecord(record, value, record.terms);
      });
    });
  }

  document.querySelectorAll('[data-course-search]').forEach(shell => {
    const input = shell.querySelector('input[type="search"]');
    const clear = shell.querySelector('.course-search-clear');
    if (!input) return;
    input.addEventListener('input', () => renderResults(shell, input.value));
    input.addEventListener('focus', () => { if (input.value.trim()) renderResults(shell, input.value); });
    input.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        input.value = '';
        renderResults(shell, '');
        input.blur();
      }
    });
    clear?.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      input.value = '';
      renderResults(shell, '');
      input.focus();
    });
  });

  document.addEventListener('click', event => {
    if (event.target.closest('[data-course-search]')) return;
    document.querySelectorAll('.course-search-results.open').forEach(panel => panel.classList.remove('open'));
  });

  // Expose a tiny refresh hook for future modules added without changing the search logic.
  window.refreshTrainingSearchIndex = () => { searchIndex = buildIndex(); };
})();

// V17 navigation search
const navigationSearch = document.getElementById("navigationSearch");
const navigationSearchClear = document.getElementById("navigationSearchClear");
const navigationSearchEmpty = document.getElementById("navigationSearchEmpty");

function filterNavigation() {
  if (!navigationSearch) return;
  const query = navigationSearch.value.trim().toLowerCase();
  const wrap = navigationSearch.closest(".nav-search-wrap");
  wrap?.classList.toggle("has-value", Boolean(query));

  let totalMatches = 0;

  document.querySelectorAll("#courseTree .tree-group").forEach(group => {
    const parent = group.querySelector(".tree-parent");
    const children = [...group.querySelectorAll(".tree-children button")];
    const parentMatches = parent?.textContent.toLowerCase().includes(query);
    let childMatches = 0;

    children.forEach(child => {
      const matches = !query || child.textContent.toLowerCase().includes(query);
      child.style.display = matches ? "" : "none";
      if (matches) childMatches += 1;
    });

    const visible = !query || parentMatches || childMatches > 0;
    group.style.display = visible ? "" : "none";

    if (query && visible && childMatches > 0) group.classList.add("open");
    if (query && parentMatches) children.forEach(child => child.style.display = "");

    if (visible) totalMatches += 1;
  });

  if (!query) {
    document.querySelectorAll("#courseTree .tree-children button").forEach(child => child.style.display = "");
  }

  if (navigationSearchEmpty) navigationSearchEmpty.style.display = totalMatches ? "none" : "block";
}

navigationSearch?.addEventListener("input", filterNavigation);
navigationSearchClear?.addEventListener("click", () => {
  navigationSearch.value = "";
  filterNavigation();
  navigationSearch.focus();
});

// V17 interactive Case Lifecycle
const lifecycleSteps = document.querySelectorAll(".lifecycle-step");
const lifecycleNumber = document.getElementById("lifecycleNumber");
const lifecycleTitle = document.getElementById("lifecycleTitle");
const lifecycleDescription = document.getElementById("lifecycleDescription");
const lifecyclePractice = document.getElementById("lifecyclePractice");

function activateLifecycleStep(step) {
  lifecycleSteps.forEach(item => item.classList.toggle("active", item === step));
  if (lifecycleNumber) lifecycleNumber.textContent = step.dataset.step;
  if (lifecycleTitle) lifecycleTitle.textContent = step.dataset.title;
  if (lifecycleDescription) lifecycleDescription.textContent = step.dataset.description;
  if (lifecyclePractice) lifecyclePractice.textContent = step.dataset.practice;
}
lifecycleSteps.forEach(step => {
  step.addEventListener("mouseenter", () => activateLifecycleStep(step));
  step.addEventListener("focus", () => activateLifecycleStep(step));
  step.addEventListener("click", () => activateLifecycleStep(step));
});

// Reflect topic completion on Course chips
function updateTopicCourseChips() {
  const completed = getCompletedSections();
  document.querySelectorAll("[data-topic-chip]").forEach(chip => {
    chip.classList.toggle("completed", completed.includes(chip.dataset.topicChip));
  });
}
document.querySelectorAll(".topic-complete-button").forEach(button => {
  button.addEventListener("click", () => setTimeout(updateTopicCourseChips, 0));
});
updateTopicCourseChips();

/* Initial state: always open on Home / Course Progress. */
closeContentsPanel();
showFullPage("progress");
window.scrollTo({ top: 0, left: 0, behavior: "auto" });
updateHistoryButtons();



// V23 — growth path hover buttons
function activateGrowthPill(button) {
  const panel = button.closest('[data-growth-panel]');
  if (!panel) return;
  panel.querySelectorAll('.growth-pill').forEach(item => item.classList.toggle('active', item === button));
  const kicker = panel.querySelector('.growth-kicker');
  const title = panel.querySelector('.growth-title');
  const text = panel.querySelector('.growth-text');
  if (kicker) kicker.textContent = button.dataset.growthKicker || '';
  if (title) title.textContent = button.dataset.growthTitle || '';
  if (text) text.textContent = button.dataset.growthText || '';
}

document.querySelectorAll('[data-growth-panel] .growth-pill').forEach(button => {
  button.addEventListener('mouseenter', () => activateGrowthPill(button));
  button.addEventListener('focus', () => activateGrowthPill(button));
  button.addEventListener('click', () => activateGrowthPill(button));
});


// V28 glossary-link terms: hover for definition, click to jump to glossary entry
function openGlossaryTerm(termKey) {
  if (!termKey) return;
  showFullPage('glossary');
  const glossarySearch = document.getElementById('glossaryPageSearch');
  const entry = document.getElementById(`glossary-${termKey}`);
  if (glossarySearch) {
    glossarySearch.value = '';
    glossarySearch.dispatchEvent(new Event('input', { bubbles: true }));
  }
  setTimeout(() => {
    if (glossarySearch) {
      const label = entry?.querySelector('h3')?.textContent || termKey.replace(/-/g, ' ');
      glossarySearch.value = label;
      glossarySearch.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (entry) entry.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 140);
}

document.querySelectorAll('[data-glossary-link]').forEach(term => {
  term.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    openGlossaryTerm(term.dataset.glossaryLink);
  });
  term.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openGlossaryTerm(term.dataset.glossaryLink);
    }
  });
});


// V29 reference navigation
function openReferenceGroup(groupId){showFullPage("references");setTimeout(()=>{const group=document.getElementById(groupId);if(group)group.scrollIntoView({behavior:"smooth",block:"start"});},160)}
document.querySelectorAll("[data-reference-jump]").forEach(block=>{block.addEventListener("click",()=>openReferenceGroup(block.dataset.referenceJump));block.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openReferenceGroup(block.dataset.referenceJump)}})});


// V31 — interactive 01.5 closure path switcher
function activateClosurePath(button) {
  const panel = button.closest('[data-closure-panel]');
  if (!panel) return;
  panel.querySelectorAll('.closure-path-btn').forEach(item => item.classList.toggle('active', item === button));
  const kicker = panel.querySelector('.closure-detail-kicker');
  const title = panel.querySelector('.closure-detail-title');
  const text = panel.querySelector('.closure-detail-text');
  const flow = panel.querySelector('.closure-detail-flow');
  if (kicker) kicker.textContent = button.dataset.closureKicker || '';
  if (title) title.textContent = button.dataset.closureTitle || '';
  if (text) text.textContent = button.dataset.closureText || '';
  if (flow) {
    const steps = String(button.dataset.closureFlow || '').split('|').filter(Boolean);
    flow.innerHTML = steps.map((step,index) => `${index ? '<i>→</i>' : ''}<span>${step}</span>`).join('');
  }
}

document.querySelectorAll('[data-closure-panel] .closure-path-btn').forEach(button => {
  button.addEventListener('mouseenter', () => activateClosurePath(button));
  button.addEventListener('focus', () => activateClosurePath(button));
  button.addEventListener('click', () => activateClosurePath(button));
});


const MODULE_FINAL_RESULTS_KEY="trainingGuideModuleFinalResults";
function getModuleFinalResults(){try{return JSON.parse(localStorage.getItem(MODULE_FINAL_RESULTS_KEY)||"{}")}catch{return {}}}
function saveModuleFinalResults(results){localStorage.setItem(MODULE_FINAL_RESULTS_KEY,JSON.stringify(results))}
function completeModuleFinalIfReady(quiz){
  const moduleId=quiz?.dataset.moduleFinal;if(!moduleId)return;
  const questions=getQuestionBlocks(quiz);const buttons=questions.map(getQuestionButton).filter(Boolean);
  if(!buttons.length||!buttons.every(button=>button.dataset.answered==="true"))return;
  const correct=buttons.filter(button=>button.dataset.wasCorrect==="true").length,total=buttons.length,score=Math.round(correct/total*100);
  const answers=questions.map(question=>{const button=getQuestionButton(question),selected=question.querySelector('input[type="radio"]:checked');return{selected:selected?.value||null,correct:button?.dataset.answer||null,wasCorrect:button?.dataset.wasCorrect==="true"}});
  const results=getModuleFinalResults();results[moduleId]={score,correct,total,answers,completedAt:Date.now()};saveModuleFinalResults(results);
  let summary=quiz.querySelector(".module-final-result-summary");if(!summary){summary=document.createElement("div");summary.className="module-final-result-summary";quiz.append(summary)}
  summary.innerHTML=`<span>MODULE FINAL RESULT</span><strong>${score}%</strong><small>${correct} of ${total} correct</small>`;
  const completion=document.querySelector(`[data-module-final-completion="${CSS.escape(moduleId)}"]`);if(completion){completion.classList.add("completed");completion.textContent=`Module final quiz completed ✓ · ${score}% (${correct}/${total})`}
}
document.querySelectorAll(".module-final-quiz .quiz-button").forEach(button=>button.addEventListener("click",()=>setTimeout(()=>completeModuleFinalIfReady(button.closest(".module-final-quiz")),0)));
function restoreModuleFinalState(){
  const results=getModuleFinalResults();
  document.querySelectorAll(".module-final-quiz[data-module-final]").forEach(quiz=>{
    const moduleId=quiz.dataset.moduleFinal,result=results[moduleId];if(!result?.answers?.length)return;
    const questions=getQuestionBlocks(quiz);
    questions.forEach((question,index)=>{const saved=result.answers[index],button=getQuestionButton(question);if(!saved||!button)return;const selected=question.querySelector(`input[type="radio"][value="${CSS.escape(saved.selected||"")}"]`);if(selected)selected.checked=true;paintQuestionResult(question,saved.selected,saved.correct||button.dataset.answer);button.dataset.answered="true";button.dataset.wasCorrect=String(Boolean(saved.wasCorrect));button.disabled=true;button.textContent="Answered";question.querySelectorAll('input[type="radio"]').forEach(input=>input.disabled=true)});
    let summary=quiz.querySelector(".module-final-result-summary");if(!summary){summary=document.createElement("div");summary.className="module-final-result-summary";quiz.append(summary)}
    summary.innerHTML=`<span>MODULE FINAL RESULT</span><strong>${result.score}%</strong><small>${result.correct} of ${result.total} correct</small>`;
    const completion=document.querySelector(`[data-module-final-completion="${CSS.escape(moduleId)}"]`);if(completion){completion.classList.add("completed");completion.textContent=`Module final quiz completed ✓ · ${result.score}% (${result.correct}/${result.total})`}
  })
}
restoreModuleFinalState();


// V36 — Module 02 interactive Customer 360 cards.
document.querySelectorAll('[data-c360-explorer]').forEach(explorer => {
  const detailIcon = explorer.querySelector('.c360-detail-icon');
  const detailTitle = explorer.querySelector('.c360-detail h4');
  const detailText = explorer.querySelector('.c360-detail p');
  const nodes = [...explorer.querySelectorAll('.c360-node')];
  const activate = node => {
    nodes.forEach(item => item.classList.toggle('active', item === node));
    if (detailIcon) detailIcon.textContent = node.dataset.icon || '✦';
    if (detailTitle) detailTitle.textContent = node.dataset.title || '';
    if (detailText) detailText.textContent = node.dataset.text || '';
  };
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => activate(node));
    node.addEventListener('focus', () => activate(node));
    node.addEventListener('click', () => activate(node));
  });
});

// V36 — Module 02 interactive navigation screenshot.
document.querySelectorAll('[data-module2-nav]').forEach(explorer => {
  const detailIcon = explorer.querySelector('.module2-nav-detail-icon');
  const detailTitle = explorer.querySelector('.module2-nav-detail h4');
  const detailText = explorer.querySelector('.module2-nav-detail p');
  const spots = [...explorer.querySelectorAll('.module2-hotspot')];
  const activate = spot => {
    spots.forEach(item => item.classList.toggle('active', item === spot));
    if (detailIcon) detailIcon.textContent = spot.dataset.icon || '✦';
    if (detailTitle) detailTitle.textContent = spot.dataset.title || '';
    if (detailText) detailText.textContent = spot.dataset.text || '';
  };
  spots.forEach(spot => {
    spot.addEventListener('mouseenter', () => activate(spot));
    spot.addEventListener('focus', () => activate(spot));
    spot.addEventListener('click', () => activate(spot));
  });
  const initial = spots.find(spot => spot.classList.contains('active')) || spots[0];
  if (initial) activate(initial);
});


// V37 — Module 03 Lead Lifecycle explorer.
document.querySelectorAll('[data-lead-lifecycle]').forEach(explorer => {
  const number = explorer.querySelector('.lead-stage-number');
  const title = explorer.querySelector('.lead-lifecycle-detail h4');
  const text = explorer.querySelector('.lead-lifecycle-detail p');
  const status = explorer.querySelector('.lead-lifecycle-detail small');
  const stages = [...explorer.querySelectorAll('.lead-stage')];

  const activate = stage => {
    stages.forEach(item => item.classList.toggle('active', item === stage));
    if (number) number.textContent = stage.dataset.number || '';
    if (title) title.textContent = stage.dataset.title || '';
    if (text) text.textContent = stage.dataset.text || '';
    if (status) status.textContent = stage.dataset.status || '';
  };

  stages.forEach(stage => {
    stage.addEventListener('mouseenter', () => activate(stage));
    stage.addEventListener('focus', () => activate(stage));
    stage.addEventListener('click', () => activate(stage));
  });
});


// V38 — Alphabetical glossary navigation and automatic glossary linking.
(function initGlossaryEnhancements() {
  const glossaryEntries = [...document.querySelectorAll('.glossary-page-item')];
  const azButtons = [...document.querySelectorAll('[data-letter-jump]')];
  const availableLetters = new Set(glossaryEntries.map(item => item.dataset.letter).filter(Boolean));

  azButtons.forEach(button => {
    const letter = button.dataset.letterJump;
    const available = availableLetters.has(letter);
    button.disabled = !available;
    button.classList.toggle('unavailable', !available);
    if (!available) return;
    button.addEventListener('click', () => {
      const search = document.getElementById('glossaryPageSearch');
      if (search?.value) {
        search.value = '';
        search.dispatchEvent(new Event('input', { bubbles: true }));
      }
      document.getElementById(`glossary-letter-${letter}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Highlight the visible letter while browsing the glossary.
  if ('IntersectionObserver' in window) {
    const headings = [...document.querySelectorAll('[data-glossary-letter-heading]')];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!visible) return;
      const letter = visible.target.dataset.glossaryLetterHeading;
      azButtons.forEach(button => button.classList.toggle('active', button.dataset.letterJump === letter));
    }, { rootMargin: '-145px 0px -72% 0px', threshold: 0 });
    headings.forEach(heading => observer.observe(heading));
  }

  const definitions = {};
  glossaryEntries.forEach(item => {
    const key = item.id.replace(/^glossary-/, '');
    definitions[key] = {
      title: item.querySelector('h3')?.textContent.trim() || key,
      definition: item.querySelector('p')?.textContent.trim() || ''
    };
  });

  const aliases = {
    'blacktab': ['BlackTab'],
    'pod': ['POD'],
    'soql': ['SOQL'],
    'uat': ['UAT'],
    'opportunity': ['Opportunity', 'Opportunities'],
    'sla': ['SLA', 'Service Level Agreement'],
    'slo': ['SLO', 'Service Level Objective'],
    'agentforce': ['Agentforce'],
    'rca': ['RCA', 'Root Cause Analysis'],
    'gho': ['GHO', 'Global Handover Template'],
    'product-topic': ['Product & Topic', 'Product and Topic'],
    'omni-channel': ['Omni-Channel', 'Omni Channel', 'Omnichannel'],
    'queue': ['Queue', 'Queues'],
    'presence-status': ['Presence Status', 'Presence Statuses'],
    'skills-based-routing': ['Skills-Based Routing', 'Skills Based Routing', 'Skill-Based Routing'],
    'csat': ['CSAT', 'Customer Satisfaction'],
    'ttr': ['TTR', 'Time to Resolution'],
    'v2mom': ['V2MOM'],
    'assembled': ['Assembled'],
    'c360': ['Customer 360 (C360)', 'Customer 360', 'C360'],
    'multitenancy': ['Multi-tenancy', 'Multi tenancy', 'Multitenancy', 'Multi-tenant'],
    'sandbox': ['Sandbox', 'Sandboxes'],
    'metadata': ['Metadata'],
    'user-license': ['User License', 'User Licenses'],
    'feature-license': ['Feature License', 'Feature Licenses'],
    'permission-set-license': ['Permission Set License', 'Permission Set Licenses', 'PSL'],
    'app-launcher': ['App Launcher'],
    'schema-builder': ['Schema Builder'],
    'record-type': ['Record Type', 'Record Types'],
    'page-layout': ['Page Layout', 'Page Layouts'],
    'dynamic-forms': ['Dynamic Forms & Actions', 'Dynamic Forms', 'Dynamic Actions'],
    'orgfarm': ['OrgFarm', 'Org Farm'],
    'storm': ['Storm Org', 'Storm Orgs', 'Storm'],
    'person-account': ['Person Account', 'Person Accounts'],
    'lead': ['Lead', 'Leads'],
    'bant': ['BANT'],
    'web-to-lead': ['Web-to-Lead', 'Web to Lead', 'W2L'],
    'recaptcha': ['reCAPTCHA'],
    'lead-assignment-rule': ['Lead Assignment Rule', 'Lead Assignment Rules'],
    'auto-response-rule': ['Auto-Response Rule', 'Auto-Response Rules', 'Auto Response Rule', 'Auto Response Rules'],
    'lead-conversion': ['Lead Conversion'],
    'matching-rule': ['Matching Rule', 'Matching Rules'],
    'duplicate-rule': ['Duplicate Rule', 'Duplicate Rules'],
    'forecast-category': ['Forecast Category', 'Forecast Categories'],
    'quote': ['Quote', 'Quotes', 'Quote Line Items'],
    'approval-process': ['Approval Process', 'Approval Processes'],
    'experience-cloud': ['Experience Cloud']
  };

  // Ensure every glossary entry participates even if a future term is added without a manual alias list.
  glossaryEntries.forEach(item => {
    const key = item.id.replace(/^glossary-/, '');
    const title = item.querySelector('h3')?.textContent.trim();
    if (!aliases[key]) aliases[key] = title ? [title] : [];
    else if (title && !aliases[key].some(alias => alias.toLowerCase() === title.toLowerCase())) aliases[key].push(title);
  });

  const aliasRecords = [];
  Object.entries(aliases).forEach(([key, terms]) => {
    if (!definitions[key]) return;
    terms.forEach(term => {
      if (term && term.length > 1) aliasRecords.push({ key, term });
    });
  });
  aliasRecords.sort((a,b) => b.term.length - a.term.length);

  const lookup = new Map();
  aliasRecords.forEach(record => {
    const normalized = record.term.toLocaleLowerCase();
    if (!lookup.has(normalized)) lookup.set(normalized, record.key);
  });

  const escaped = [...lookup.keys()]
    .sort((a,b) => b.length - a.length)
    .map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (!escaped.length) return;
  const expression = new RegExp(`(^|[^A-Za-z0-9_])(${escaped.join('|')})(?=$|[^A-Za-z0-9_])`, 'gi');

  const skipSelector = [
    'script','style','input','textarea','select','option','button','label','a',
    '.inline-term','.tooltip','.glossary-page-item','.module-topic-dropdown','.topic-learning-nav',
    '.section-nav','.course-tree','.module-topic-chips','.module-hub-hero'
  ].join(',');

  function bindAutoTerm(span) {
    span.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      openGlossaryTerm(span.dataset.glossaryLink);
    });
    span.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openGlossaryTerm(span.dataset.glossaryLink);
      }
    });
  }

  function linkRoot(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || node.nodeValue.trim().length < 2) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || parent.closest(skipSelector)) return NodeFilter.FILTER_REJECT;
        expression.lastIndex = 0;
        return expression.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      const text = node.nodeValue;
      expression.lastIndex = 0;
      let match;
      let cursor = 0;
      const fragment = document.createDocumentFragment();
      while ((match = expression.exec(text)) !== null) {
        const prefix = match[1] || '';
        const matchedTerm = match[2];
        const fullStart = match.index;
        const termStart = fullStart + prefix.length;
        if (fullStart > cursor) fragment.append(document.createTextNode(text.slice(cursor, fullStart)));
        if (prefix) fragment.append(document.createTextNode(prefix));

        const key = lookup.get(matchedTerm.toLocaleLowerCase());
        if (!key || !definitions[key]) {
          fragment.append(document.createTextNode(matchedTerm));
        } else {
          const span = document.createElement('span');
          span.className = 'inline-term glossary-link-term auto-glossary-term';
          span.tabIndex = 0;
          span.dataset.glossaryLink = key;
          span.append(document.createTextNode(matchedTerm));
          const tooltip = document.createElement('span');
          tooltip.className = 'tooltip';
          tooltip.textContent = `${definitions[key].definition} Click to open the glossary.`;
          span.append(tooltip);
          bindAutoTerm(span);
          fragment.append(span);
        }
        cursor = termStart + matchedTerm.length;
      }
      if (cursor < text.length) fragment.append(document.createTextNode(text.slice(cursor)));
      node.replaceWith(fragment);
    });
  }

  document.querySelectorAll('.training-section').forEach(linkRoot);
  updateGlossaryLetterVisibility();
})();

// V38 — Final Module Quiz chips on Home show their saved result when available.
function updateHomeFinalQuizChips() {
  let results = {};
  try { results = JSON.parse(localStorage.getItem('trainingGuideModuleFinalResults') || '{}'); } catch { results = {}; }
  document.querySelectorAll('[data-module-final-home]').forEach(chip => {
    const moduleId = chip.dataset.moduleFinalHome;
    const status = chip.querySelector('small');
    const result = results[moduleId];
    if (!status || chip.classList.contains('in-progress')) return;
    if (result && Number.isFinite(result.score)) {
      status.textContent = `${result.score}%`;
      chip.classList.add('completed');
    } else {
      status.textContent = 'Not completed';
      chip.classList.remove('completed');
    }
  });
}
updateHomeFinalQuizChips();
document.querySelectorAll('.module-final-quiz .quiz-button').forEach(button => {
  button.addEventListener('click', () => setTimeout(updateHomeFinalQuizChips, 30));
});

// V43 — one global, viewport-safe tooltip layer.
// Original tooltip nodes stay inside their terms for semantics/click behavior.
// A single fixed clone is used for display so cards, overflow and transforms can never clip it.
(function initGlobalTooltipLayer(){
  const ownerSelector = '.inline-term, .term-pill, .inline-help, .card-inline-term';
  const tooltipSelector = ':scope > .tooltip, :scope > .card-term-tooltip';

  let activeOwner = null;
  const layer = document.createElement('div');
  layer.id = 'global-tooltip-layer';
  layer.className = 'global-tooltip-layer';
  layer.setAttribute('role', 'tooltip');
  layer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(layer);
  document.body.classList.add('tooltip-system-ready');

  function getTip(owner){
    return owner?.querySelector?.(tooltipSelector) || null;
  }

  function position(owner){
    if(!owner || owner !== activeOwner) return;
    const rect = owner.getBoundingClientRect();
    const margin = 14;
    const gap = 10;

    // Measure with the final width constraints already applied by CSS.
    layer.style.left = `${margin}px`;
    layer.style.top = `${margin}px`;
    layer.style.visibility = 'hidden';
    layer.style.opacity = '1';
    layer.style.display = 'block';
    const tipRect = layer.getBoundingClientRect();
    const width = Math.min(tipRect.width || 310, Math.max(180, window.innerWidth - margin * 2));
    const height = Math.min(tipRect.height || 90, Math.max(60, window.innerHeight - margin * 2));

    let left = rect.left + (rect.width / 2) - (width / 2);
    left = Math.max(margin, Math.min(left, window.innerWidth - width - margin));

    const above = rect.top - gap - height;
    const below = rect.bottom + gap;
    const roomAbove = rect.top - margin;
    const roomBelow = window.innerHeight - rect.bottom - margin;
    let top = roomAbove >= height + gap || roomAbove > roomBelow ? above : below;
    top = Math.max(margin, Math.min(top, window.innerHeight - height - margin));

    layer.style.left = `${Math.round(left)}px`;
    layer.style.top = `${Math.round(top)}px`;
    layer.style.visibility = 'visible';
    layer.style.opacity = '1';
    layer.setAttribute('aria-hidden', 'false');
  }

  function open(owner){
    const tip = getTip(owner);
    if(!tip) return;
    activeOwner = owner;
    layer.innerHTML = tip.innerHTML;
    layer.classList.toggle('card-tooltip-copy', tip.classList.contains('card-term-tooltip'));
    position(owner);
  }

  function close(owner){
    if(owner && activeOwner !== owner) return;
    activeOwner = null;
    layer.style.opacity = '0';
    layer.style.visibility = 'hidden';
    layer.setAttribute('aria-hidden', 'true');
  }

  document.addEventListener('mouseover', event => {
    const owner = event.target.closest?.(ownerSelector);
    if(!owner || !getTip(owner)) return;
    if(event.relatedTarget && owner.contains(event.relatedTarget)) return;
    open(owner);
  });

  document.addEventListener('mouseout', event => {
    const owner = event.target.closest?.(ownerSelector);
    if(!owner || activeOwner !== owner) return;
    if(event.relatedTarget && owner.contains(event.relatedTarget)) return;
    close(owner);
  });

  document.addEventListener('focusin', event => {
    const owner = event.target.closest?.(ownerSelector);
    if(owner && getTip(owner)) open(owner);
  });

  document.addEventListener('focusout', event => {
    const owner = event.target.closest?.(ownerSelector);
    if(owner && activeOwner === owner) close(owner);
  });

  const reposition = () => {
    if(activeOwner) requestAnimationFrame(() => position(activeOwner));
  };
  window.addEventListener('resize', reposition, {passive:true});
  window.addEventListener('scroll', reposition, {passive:true, capture:true});
})();

// V43 — normalize two-digit learning-card counters so dark mode has one visual language.
(function markLearningNumberBadges(){
  document.querySelectorAll('.learning-phase span').forEach(span => {
    if(span.closest('.tooltip, .card-term-tooltip')) return;
    if(/^\d{2}$/.test((span.textContent || '').trim())) span.classList.add('learning-number-badge');
  });
})();


// V48 — final Module 04 chip navigation.
document.querySelectorAll('[data-module-final-home]:not(.in-progress)').forEach(chip => {
  chip.style.cursor = 'pointer';
  chip.addEventListener('click', () => {
    const moduleId = chip.dataset.moduleFinalHome;
    const sectionMap = { '01':'support-org','02':'platform-fundamentals','03':'sales-experience','04':'service-cloud' };
    const target = `module-${moduleId}-final`;
    if (sectionMap[moduleId] && document.getElementById(target)) {
      showTrainingTopic(sectionMap[moduleId], target);
    }
  });
});


// V55 interactive custom field type explorer
const fieldTypeCards = document.querySelectorAll('.field-type-card');
const fieldTypeIcon = document.getElementById('fieldTypeIcon');
const fieldTypeTitle = document.getElementById('fieldTypeTitle');
const fieldTypeDescription = document.getElementById('fieldTypeDescription');
const fieldTypeExample = document.getElementById('fieldTypeExample');
function activateFieldType(card) {
  fieldTypeCards.forEach(item => item.classList.toggle('active', item === card));
  if (fieldTypeIcon) fieldTypeIcon.textContent = card.dataset.icon || '•';
  if (fieldTypeTitle) fieldTypeTitle.textContent = card.dataset.title || '';
  if (fieldTypeDescription) fieldTypeDescription.textContent = card.dataset.description || '';
  if (fieldTypeExample) fieldTypeExample.textContent = card.dataset.example || '';
}
fieldTypeCards.forEach(card => {
  card.addEventListener('mouseenter', () => activateFieldType(card));
  card.addEventListener('focus', () => activateFieldType(card));
  card.addEventListener('click', () => activateFieldType(card));
});
