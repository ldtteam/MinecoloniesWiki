interface GroupState {
  timer: ReturnType<typeof setInterval> | undefined;
  index: number;
  frameCount: number;
}

const groups = new Map<string, GroupState>();

function getSlides(slideshowEl: HTMLElement): HTMLElement[] {
  const track = slideshowEl.querySelector<HTMLElement>('[data-slideshow-track]');
  if (!track) {
    return [];
  }
  return Array.from(track.querySelectorAll<HTMLElement>(':scope > [data-slide]'));
}

function goToIndex(slideshowEl: HTMLElement, state: GroupState, nextIndex: number) {
  const slides = getSlides(slideshowEl);
  const current = slides[state.index];
  const next = slides[nextIndex];
  if (!current || !next) {
    return;
  }

  next.style.opacity = '1';
  current.style.opacity = '0';
  setTimeout(() => {
    current.style.transition = 'none';
    requestAnimationFrame(() => {
      current.style.transition = '';
    });
  }, 300);

  state.index = nextIndex;

  slideshowEl.querySelectorAll<HTMLElement>('[data-slideshow-dot]').forEach((dot, i) => {
    dot.classList.toggle('active', i === nextIndex);
  });
}

function resetAutoplay(slideshowEl: HTMLElement, state: GroupState, autoplay: number | undefined) {
  if (state.timer !== undefined) {
    clearInterval(state.timer);
    state.timer = undefined;
  }
  if (autoplay !== undefined && state.frameCount > 1) {
    state.timer = setInterval(() => {
      goToIndex(slideshowEl, state, (state.index + 1) % state.frameCount);
    }, autoplay);
  }
}

function setupSlideshow(slideshowEl: HTMLElement) {
  const group = slideshowEl.dataset.slideshowGroup!;
  const slides = getSlides(slideshowEl);

  slides.forEach((slide, i) => {
    slide.style.transition = 'opacity 0.3s ease';
    if (i > 0) {
      slide.style.opacity = '0';
    }
  });

  if (slides.length <= 1) {
    (slideshowEl.querySelector('[data-slideshow-prev]') as HTMLElement | null)?.style.setProperty('display', 'none');
    (slideshowEl.querySelector('[data-slideshow-next]') as HTMLElement | null)?.style.setProperty('display', 'none');
  }

  const dotsEl = slideshowEl.querySelector('[data-slideshow-dots]');
  if (dotsEl) {
    dotsEl.innerHTML = slides
      .map(
        (_, i) =>
          `<button class="slideshow-dot${i === 0 ? ' active' : ''}" data-slideshow-dot aria-label="Go to slide ${i + 1}"></button>`
      )
      .join('');
  }

  const state: GroupState = { index: 0, frameCount: slides.length, timer: undefined };
  groups.set(group, state);

  const autoplay = slideshowEl.dataset.autoplay ? Number(slideshowEl.dataset.autoplay) : undefined;

  slideshowEl.querySelector('[data-slideshow-prev]')?.addEventListener('click', () => {
    resetAutoplay(slideshowEl, state, autoplay);
    goToIndex(slideshowEl, state, (state.index - 1 + state.frameCount) % state.frameCount);
  });

  slideshowEl.querySelector('[data-slideshow-next]')?.addEventListener('click', () => {
    resetAutoplay(slideshowEl, state, autoplay);
    goToIndex(slideshowEl, state, (state.index + 1) % state.frameCount);
  });

  dotsEl?.querySelectorAll<HTMLElement>('[data-slideshow-dot]').forEach((dot, i) => {
    dot.addEventListener('click', () => goToIndex(slideshowEl, state, i));
  });

  if (autoplay !== undefined && slides.length > 1) {
    state.timer = setInterval(() => {
      goToIndex(slideshowEl, state, (state.index + 1) % state.frameCount);
    }, autoplay);
  }
}

export function setup() {
  groups.forEach((state) => {
    if (state.timer !== undefined) {
      clearInterval(state.timer);
    }
  });
  groups.clear();

  document.querySelectorAll<HTMLElement>('[data-slideshow-group]').forEach((el) => {
    if (!el.dataset.slideshowVersioned) {
      setupSlideshow(el);
    }
  });
}

export function setupNew() {
  document.querySelectorAll<HTMLElement>('[data-slideshow-group]').forEach((el) => {
    if (!el.dataset.slideshowVersioned && !groups.has(el.dataset.slideshowGroup!)) {
      setupSlideshow(el);
    }
  });
}

export function clearGroups(container: HTMLElement) {
  for (const key of [...groups.keys()]) {
    const el = document.querySelector(`[data-slideshow-group="${key}"]`);
    if (!el || !container.contains(el)) {
      continue;
    }
    const state = groups.get(key)!;
    if (state.timer !== undefined) {
      clearInterval(state.timer);
    }
    groups.delete(key);
  }
}
