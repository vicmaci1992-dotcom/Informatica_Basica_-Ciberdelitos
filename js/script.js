const navToggle = document.querySelector('.nav-toggle');
const siteHeader = document.querySelector('.site-header');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      siteHeader.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const infoMap = {
  hardware: 'El hardware comprende equipos, componentes electrónicos y periféricos que constituyen la base del sistema computacional.',
  cpu: 'La CPU ejecuta instrucciones y coordina operaciones mediante la ALU, control y registros.',
  registros: 'Los registros almacenan valores temporales y datos clave durante la ejecución del procesador.',
  ram: 'La RAM almacena datos temporales y procesos activos esenciales para el funcionamiento inmediato del sistema.',
  red: 'La red permite la comunicación entre equipos mediante protocolos, direcciones y medios de transmisión.',
  tráfico: 'El tráfico de red muestra flujos, conexiones y patrones de comunicación relevantes para la investigación.',
  evidencia: 'La evidencia digital es el conjunto de datos, artefactos y trazas que pueden soportar un análisis técnico.',
  forense: 'El análisis forense convierte la evidencia en conclusiones sustentadas y documentadas.'
};

const nodeDetail = document.getElementById('node-detail');
const nodes = document.querySelectorAll('.node');

nodes.forEach((node) => {
  const key = node.textContent.trim().toLowerCase().replace(/\s+/g, '');
  const info = infoMap[key] || node.dataset.info;

  node.addEventListener('mouseenter', () => {
    nodeDetail.textContent = info;
    nodes.forEach((n) => n.classList.remove('active'));
    node.classList.add('active');
  });

  node.addEventListener('focus', () => {
    nodeDetail.textContent = info;
    nodes.forEach((n) => n.classList.remove('active'));
    node.classList.add('active');
  });

  node.addEventListener('click', () => {
    nodeDetail.textContent = info;
    nodes.forEach((n) => n.classList.remove('active'));
    node.classList.add('active');
  });
});

const questions = Array.from(document.querySelectorAll('.question'));
const nextButton = document.getElementById('next-question');
const submitButton = document.getElementById('submit-quiz');
const quizResult = document.getElementById('quiz-result');

const correctAnswers = [0, 0, 0, 0, 0, 0, 0, 0];
let currentQuestion = 0;

function showQuestion(index) {
  questions.forEach((question, idx) => {
    question.classList.toggle('active', idx === index);
  });

  const isLast = index === questions.length - 1;
  nextButton.hidden = isLast;
  submitButton.hidden = !isLast;
}

nextButton.addEventListener('click', () => {
  const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
  if (!selected) {
    quizResult.textContent = 'Selecciona una respuesta antes de continuar.';
    quizResult.classList.add('show');
    return;
  }

  quizResult.classList.remove('show');
  currentQuestion += 1;
  showQuestion(currentQuestion);
});

submitButton.addEventListener('click', () => {
  const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
  if (!selected) {
    quizResult.textContent = 'Debes seleccionar una respuesta antes de finalizar.';
    quizResult.classList.add('show');
    return;
  }

  let score = 0;
  questions.forEach((question, index) => {
    const answer = document.querySelector(`input[name="q${index}"]:checked`);
    if (answer && Number(answer.value) === correctAnswers[index]) {
      score += 1;
    }
  });

  const percentage = Math.round((score / questions.length) * 100);
  quizResult.textContent = `Tu puntuación final es ${score}/${questions.length} (${percentage}%). ${percentage >= 70 ? '¡Muy bien!' : 'Sigue practicando.'}`;
  quizResult.classList.add('show');
  submitButton.disabled = true;
  nextButton.disabled = true;
});

showQuestion(currentQuestion);
