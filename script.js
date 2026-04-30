/* ============================================
   QUEMANDO CICLOS — script.js v5
   MD3 · pastel · tipografías elegantes
   ============================================ */

/* ══ COLORES PASTEL (desaturados) ══ */
const COLORS = [
  { bg: '#F8BBD0', text: '#4A1535', label: 'Rosa pálido' },
  { bg: '#FFCCBC', text: '#4E1900', label: 'Terracota claro' },
  { bg: '#FFF9C4', text: '#3E3000', label: 'Amarillo suave' },
  { bg: '#B2EBF2', text: '#003D47', label: 'Celeste' },
  { bg: '#BBDEFB', text: '#0D2A5C', label: 'Azul claro' },
  { bg: '#DCEDC8', text: '#1B3A0A', label: 'Verde salvia' },
  { bg: '#E1BEE7', text: '#2E0A40', label: 'Lavanda' },
  { bg: '#FFCDD2', text: '#4A0005', label: 'Coral pálido' },
  { bg: '#C8E6C9', text: '#0A2E10', label: 'Menta' },
  { bg: '#FFE0B2', text: '#3E1A00', label: 'Durazno claro' },
  { bg: '#E3F2FD', text: '#0A2A4A', label: 'Azul cielo' },
  { bg: '#FFFDE7', text: '#3A2F00', label: 'Crema' },
  { bg: '#FCE4EC', text: '#4A0020', label: 'Rosado' },
  { bg: '#EDE7F6', text: '#1A0840', label: 'Lila' },
  { bg: '#E0F7FA', text: '#003840', label: 'Aguamarina' },
  { bg: '#F3E5F5', text: '#2E0040', label: 'Malva' },
];

/* ══ TIPOGRAFÍAS ══ */
const FONTS = [
  { label: 'Playfair Display', value: "'Playfair Display', Georgia, serif" },
  { label: 'Lora', value: "'Lora', Georgia, serif" },
  { label: 'Cormorant Garamond', value: "'Cormorant Garamond', Georgia, serif" },
  { label: 'DM Serif Display', value: "'DM Serif Display', Georgia, serif" },
  { label: 'Libre Baskerville', value: "'Libre Baskerville', Georgia, serif" },
  { label: 'Fraunces', value: "'Fraunces', Georgia, serif" },
  { label: 'Plus Jakarta Sans', value: "'Plus Jakarta Sans', sans-serif" },
  { label: 'Raleway', value: "'Raleway', sans-serif" },
  { label: 'Comic Sans MS', value: "'Comic Sans MS', 'Comic Sans', cursive" },
];

const TAGS = ['Amor', 'Amistad', 'Mascotas', 'Laboral', 'Estudios', 'Transporte', 'Otros'];

const TAG_COLORS = {
  Amor: '#EF9A9A', Amistad: '#FFE082', Mascotas: '#A5D6A7',
  Laboral: '#90CAF9', Estudios: '#CE93D8', Transporte: '#FFCC80', Otros: '#B0BEC5',
};

/* ══ MODERACIÓN ══ */
const BANNED = [
  'idiota', 'imbécil', 'imbecil', 'estúpido', 'estupido', 'estúpida', 'estupida',
  'mierda', 'puta', 'puto', 'culiao', 'culiado', 'weon culiao', 'te odio con toda mi alma',
  'maricón', 'maricon', 'marica', 'pendejo', 'pendeja', 'hdp',
];
const AGGRESSION = [
  'te odio', 'te maldigo', 'eres lo peor', 'inútil', 'inutil', 'basura', 'asco de persona',
  'ojalá te mueras', 'ojala te mueras', 'te voy a', 'maldito', 'maldita',
  ...BANNED,
];
const CRISIS = [
  'suicidio', 'suicidarme', 'suicidar', 'matarme', 'no quiero vivir',
  'ya no puedo más', 'ya no puedo mas', 'quiero morir', 'quitarme la vida',
  'acabar con todo', 'adiós a todos', 'adios a todos', 'me voy a matar',
];

/* ══ ESTADO ══ */
let state = {
  posts: [],
  newPost: { text: '', tag: 'Otros', font: FONTS[0].value, color: COLORS[2], likes: 0, isLiked: false },
  currentPage: 'inicio',
  currentModalId: null,
  activeFilter: null,
  publishBlocked: false,
};

/* ══ SEED ══ */
const SEED = [
  { text: 'Tres años esperando que cambiara. No cambió. Yo sí.', tag: 'Amor', ci: 0, fi: 0, likes: 47 },
  { text: 'El trabajo que me quitó el sueño ya no merece mis noches.', tag: 'Laboral', ci: 4, fi: 2, likes: 23 },
  { text: 'Amiga de 10 años. Cuando más la necesité, eligió el silencio.', tag: 'Amistad', ci: 7, fi: 1, likes: 89 },
  { text: 'Le dediqué mi tesis entera. Reprobé con él. Pero aprendí sola.', tag: 'Estudios', ci: 3, fi: 3, likes: 31 },
  { text: 'Mi perro se fue en julio. La casa todavía lo busca.', tag: 'Mascotas', ci: 8, fi: 4, likes: 142 },
  { text: 'Todos los días el mismo micro, la misma cara. Ya no soy esa persona.', tag: 'Transporte', ci: 5, fi: 6, likes: 18 },
  { text: 'No me debe una disculpa. Me debe cinco años. Pero igual me libero.', tag: 'Amor', ci: 12, fi: 0, likes: 67 },
  { text: 'La empresa familiar, el sueño ajeno que me puse como propio.', tag: 'Laboral', ci: 11, fi: 2, likes: 44 },
  { text: 'Grupo de amigos que se diluyó en chats sin respuesta. Nadie culpable.', tag: 'Amistad', ci: 13, fi: 1, likes: 55 },
  { text: 'Cuatro universidades, dos carreras, una certeza: no estaba ahí.', tag: 'Estudios', ci: 2, fi: 3, likes: 29 },
  { text: 'Mi gata naranja murió en mis brazos. Nunca lloré tan limpio.', tag: 'Mascotas', ci: 14, fi: 0, likes: 203 },
  { text: 'Ese departamento donde nunca dormí bien. Esas paredes que nunca fueron mías.', tag: 'Otros', ci: 15, fi: 7, likes: 37 },
];

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded', () => {
  state.posts = SEED.map((s, i) => ({
    id: i + 1, text: s.text, tag: s.tag,
    font: FONTS[s.fi].value, color: COLORS[s.ci],
    likes: s.likes, isLiked: false, reports: 0, hidden: false, isCrisis: false,
  }));

  buildFontSelect();
  renderFilterMenu();
  renderTags();
  renderColors();
  renderPosts();
  updatePreview();

  document.getElementById('fontSelect').addEventListener('change', e => {
    state.newPost.font = e.target.value;
    document.getElementById('fontPreview').style.fontFamily = e.target.value;
    updatePreview();
  });
  // init font preview
  document.getElementById('fontPreview').style.fontFamily = state.newPost.font;
});

/* ══ UTILS ══ */
function escHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function lower(s) { return String(s).toLowerCase(); }

/* ══ MODERACIÓN ══ */
function checkText(text) {
  const t = lower(text);
  const isBanned = BANNED.some(w => t.includes(w));
  const isAggressive = AGGRESSION.some(w => t.includes(w));
  const isCrisis = CRISIS.some(w => t.includes(w));
  return { isBanned, isAggressive, isCrisis };
}

/* Devuelve HTML con las palabras ofensivas marcadas */
function highlightBadWords(text) {
  let result = escHtml(text);
  const sorted = [...AGGRESSION].sort((a, b) => b.length - a.length);
  sorted.forEach(w => {
    const re = new RegExp(escapeRegex(w), 'gi');
    result = result.replace(re, m => `<span class="bad-word">${m}</span>`);
  });
  return result;
}
function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function handleTextInput(val) {
  state.newPost.text = val;
  const { isBanned, isAggressive, isCrisis } = checkText(val);

  // actualizar highlight layer
  const hl = document.getElementById('previewHighlight');
  hl.innerHTML = highlightBadWords(val) || '';
  // sync font
  hl.style.fontFamily = state.newPost.font;

  // contador
  const count = val.length;
  const counter = document.getElementById('charCount');
  counter.textContent = count;
  counter.parentElement.classList.toggle('over', count >= 490);

  // warnings
  document.getElementById('aggressionWarning').style.display = isAggressive ? 'flex' : 'none';
  document.getElementById('crisisBanner').style.display = isCrisis ? 'flex' : 'none';

  // bloquear publicar si hay palabras prohibidas
  const btn = document.getElementById('publishBtn');
  if (isBanned) {
    btn.classList.add('blocked');
    btn.innerHTML = '<span class="material-symbols-outlined">block</span> Revisa tu mensaje';
    state.publishBlocked = true;
  } else {
    btn.classList.remove('blocked');
    btn.innerHTML = '<span class="material-symbols-outlined">local_fire_department</span> Publicar';
    state.publishBlocked = false;
  }

  if (isCrisis) {
    state.newPost.color = { bg: '#C9E4F5', text: '#1a3a5c', label: 'Calma' };
    renderColors(); updatePreview();
  }

  updatePreview();
}

/* ══ FONT SELECT ══ */
function buildFontSelect() {
  document.getElementById('fontSelect').innerHTML = FONTS.map(f =>
    `<option value="${f.value}">${f.label}</option>`
  ).join('');
}

/* ══ FILTER MENU ══ */
function renderFilterMenu() {
  const list = document.getElementById('filterList');
  const all = `<li class="filter-menu__item ${!state.activeFilter ? 'active' : ''}" onclick="setFilter(null)">
    <span class="filter-menu__dot" style="background:#B0B0B0"></span>Todas las categorías</li>`;
  const items = TAGS.map(tag => `
    <li class="filter-menu__item ${state.activeFilter === tag ? 'active' : ''}" onclick="setFilter('${tag}')">
      <span class="filter-menu__dot" style="background:${TAG_COLORS[tag]}"></span>#${tag}
    </li>`).join('');
  list.innerHTML = all + items;
}

function toggleMenu() {
  document.getElementById('filterMenu').classList.toggle('open');
  document.getElementById('filterBackdrop').classList.toggle('open');
}

function setFilter(tag) {
  state.activeFilter = tag;
  toggleMenu();
  renderFilterMenu();
  renderPosts();
  const badge = document.getElementById('filterBadge');
  if (tag) {
    badge.style.display = 'inline-flex';
    badge.innerHTML = `${tag} <button onclick="setFilter(null)">✕</button>`;
  } else {
    badge.style.display = 'none';
  }
}

/* ══ RENDER POSTS ══ */
function renderPosts() {
  const grid = document.getElementById('postsGrid');
  const empty = document.getElementById('emptyState');
  let visible = state.posts.filter(p => !p.hidden);
  if (state.activeFilter) visible = visible.filter(p => p.tag === state.activeFilter);
  if (!visible.length) { grid.innerHTML = ''; empty.style.display = 'flex'; return; }
  empty.style.display = 'none';

  grid.innerHTML = visible.map(post => {
    const support = post.isCrisis
      ? `<div class="post-card__support-tag"><span class="material-symbols-outlined">favorite</span> Recursos de apoyo</div>` : '';
    return `
    <div class="post-card" style="background:${post.color.bg};color:${post.color.text}" onclick="openModal(${post.id})">
      <button class="post-card__report" onclick="cardReport(event,${post.id})" title="Reportar">
        <span class="material-symbols-outlined">flag</span>
      </button>
      <div class="post-card__text" style="font-family:${post.font}">${escHtml(post.text)}</div>
      ${support}
      <div class="post-card__footer">
        <button class="grid-like-container" onclick="handleGridLike(event,${post.id})" style="color:${post.color.text}">
          <span class="material-symbols-outlined" style="font-variation-settings:'FILL' ${post.isLiked ? 1 : 0}">favorite</span>
          <span>${post.likes}</span>
        </button>
        <div class="post-card__hashtag">#${post.tag.toUpperCase()}</div>
        <div style="text-align:right;opacity:.4"><span class="material-symbols-outlined" style="font-size:14px">ios_share</span></div>
      </div>
    </div>`;
  }).join('');

  grid.querySelectorAll('.post-card').forEach((el, i) => {
    el.style.opacity = '0';
    setTimeout(() => { el.style.transition = 'opacity .28s ease'; el.style.opacity = '1'; }, i * 40);
  });
}

/* ══ LIKE (grid) ══ */
function handleGridLike(e, id) {
  e.stopPropagation();
  const p = state.posts.find(p => p.id === id); if (!p) return;
  p.isLiked = !p.isLiked; p.likes += p.isLiked ? 1 : -1;
  renderPosts();
  showToast(p.isLiked ? 'Guardado ♥' : 'Like retirado');
}

/* ══ REPORT (card) ══ */
function cardReport(e, id) {
  e.stopPropagation();
  const p = state.posts.find(p => p.id === id); if (!p) return;
  p.reports = (p.reports || 0) + 1;
  if (p.reports >= 3) { p.hidden = true; showToast('Post ocultado del muro.'); }
  else showToast(`Reporte enviado (${p.reports}/3)`);
  renderPosts();
}

/* ══ TAGS ══ */
function renderTags() {
  document.getElementById('tagsGrid').innerHTML = TAGS.map(t =>
    `<button class="tag ${state.newPost.tag === t ? 'selected' : ''}" onclick="setTag('${t}')">#${t}</button>`
  ).join('');
}
function setTag(tag) { state.newPost.tag = tag; renderTags(); updatePreview(); }

/* ══ COLORS ══ */
function renderColors() {
  document.getElementById('colorGrid').innerHTML = COLORS.map(c => `
    <div class="color-option ${state.newPost.color.bg === c.bg ? 'selected' : ''}"
         data-label="${c.label}" onclick="setColor('${c.bg}')">
      <div class="color-swatch" style="background:${c.bg}">
        <span class="material-symbols-outlined" style="color:${c.text}">check</span>
      </div>
    </div>`).join('');
}
function setColor(hex) {
  state.newPost.color = COLORS.find(c => c.bg === hex) || COLORS[0];
  renderColors(); updatePreview();
}

/* ══ PREVIEW ══ */
function updatePreview() {
  const preview = document.getElementById('postPreview');
  const hashtag = document.getElementById('previewHashtag');
  const textarea = document.getElementById('postText');
  const hl = document.getElementById('previewHighlight');
  preview.style.background = state.newPost.color.bg;
  preview.style.color = state.newPost.color.text;
  textarea.style.fontFamily = state.newPost.font;
  hl.style.fontFamily = state.newPost.font;
  hashtag.textContent = `#${state.newPost.tag.toUpperCase()}`;
}

function syncScroll(ta) {
  const hl = document.getElementById('previewHighlight');
  hl.scrollTop = ta.scrollTop;
}

function handlePreviewLike(e) {
  e.stopPropagation();
  state.newPost.isLiked = !state.newPost.isLiked;
  state.newPost.likes += state.newPost.isLiked ? 1 : -1;
  document.getElementById('previewLikeCount').textContent = state.newPost.likes;
  document.getElementById('previewLikeIcon').style.fontVariationSettings = `'FILL' ${state.newPost.isLiked ? 1 : 0}`;
}

/* ══ TyC ══ */
function openTyC() { document.getElementById('tycOverlay').classList.add('open'); }
function closeTyC() { document.getElementById('tycOverlay').classList.remove('open'); }
function acceptTyC() { closeTyC(); showPage('publicar'); }

/* ══ PUBLICAR ══ */
function publishPost() {
  if (state.publishBlocked) { showToast('Revisa las palabras marcadas antes de publicar.'); return; }
  if (!state.newPost.text.trim()) { showToast('Escribe algo primero'); return; }

  const { isBanned, isCrisis } = checkText(state.newPost.text);
  if (isBanned) { showToast('El mensaje contiene palabras no permitidas.'); return; }

  const post = {
    ...state.newPost,
    id: Date.now(),
    color: isCrisis ? { bg: '#C9E4F5', text: '#1a3a5c', label: 'Calma' } : state.newPost.color,
    isCrisis, reports: 0, hidden: false,
  };
  state.posts.unshift(post);

  // reset
  state.newPost = { text: '', tag: 'Otros', font: FONTS[0].value, color: COLORS[2], likes: 0, isLiked: false };
  document.getElementById('postText').value = '';
  document.getElementById('previewHighlight').innerHTML = '';
  document.getElementById('charCount').textContent = '0';
  document.getElementById('previewLikeCount').textContent = '0';
  document.getElementById('previewLikeIcon').style.fontVariationSettings = "'FILL' 0";
  document.getElementById('aggressionWarning').style.display = 'none';
  document.getElementById('crisisBanner').style.display = 'none';
  const btn = document.getElementById('publishBtn');
  btn.classList.remove('blocked');
  btn.innerHTML = '<span class="material-symbols-outlined">local_fire_department</span> Publicar';
  state.publishBlocked = false;
  renderTags(); renderColors(); updatePreview();

  showToast('Publicación creada');
  setTimeout(() => { showPage('inicio'); renderPosts(); }, 500);
}

/* ══ MODAL ══ */
function openModal(id) {
  state.currentModalId = id;
  const p = state.posts.find(p => p.id === id);
  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('modal');

  overlay.style.background = p.color.bg + '99';
  modal.style.background = p.color.bg;
  modal.style.color = p.color.text;

  document.getElementById('modalPost').textContent = p.text;
  document.getElementById('modalPost').style.fontFamily = p.font;
  document.getElementById('modalHashtag').textContent = `#${p.tag.toUpperCase()}`;
  document.getElementById('modalLikeCount').textContent = p.likes;
  document.querySelector('#modalLikeBtn .material-symbols-outlined')
    .style.fontVariationSettings = `'FILL' ${p.isLiked ? 1 : 0}`;
  document.getElementById('modalSupport').style.display = p.isCrisis ? 'flex' : 'none';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleLike(e) {
  e.stopPropagation();
  const p = state.posts.find(p => p.id === state.currentModalId); if (!p) return;
  p.isLiked = !p.isLiked; p.likes += p.isLiked ? 1 : -1;
  document.getElementById('modalLikeCount').textContent = p.likes;
  document.querySelector('#modalLikeBtn .material-symbols-outlined')
    .style.fontVariationSettings = `'FILL' ${p.isLiked ? 1 : 0}`;
  renderPosts();
}

function reportPost() {
  const p = state.posts.find(p => p.id === state.currentModalId); if (!p) return;
  p.reports = (p.reports || 0) + 1;
  if (p.reports >= 3) { p.hidden = true; closeModal(); showToast('Post ocultado del muro.'); }
  else showToast(`Reporte enviado (${p.reports}/3)`);
  renderPosts();
}

function sendHug() { showToast('Abrazo enviado 🤗'); }

/* ══ NAV ══ */
function navigationHandler(e) {
  e.preventDefault();
  showPage(e.target.getAttribute('data-page'), e.target);
}
function showPage(id, navEl) {
  state.currentPage = id;

  const publishBtn = document.querySelector('.nav__cta');
  if (id === 'publicar') {
    publishBtn.style.display = 'none';
  } else {
    publishBtn.style.display = 'flex';
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('page--active'));
  document.getElementById('page-' + id).classList.add('page--active');
  // ... resto del código ...
}

/* ══ TOAST ══ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2400);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeTyC(); } });