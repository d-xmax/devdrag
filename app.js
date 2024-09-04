import './scss/style.scss';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
 
const toggle = document.getElementById('toggle'),
  ham = document.getElementById('ham'),
  close = document.getElementById('close');
toggle.addEventListener('click', function () {
  ham.classList.toggle('close'),
    close.classList.toggle('active');
});
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time), requestAnimationFrame(raf);
}
lenis.on('scroll', () => {}),
  requestAnimationFrame(raf);
const content =
    document.getElementById('content-1'),
  tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    content.classList.toggle('show'),
      content.classList.remove('active');
  });
});
const titles = gsap.utils.toArray(
    '#animated-title'
  ),
  tl = gsap.timeline({ repeat: -1 });
titles.forEach((title) => {
  const splitTitle = new SplitTextJS(title);
  tl.from(
    splitTitle.chars,
    {
      opacity: 0,
      y: 0,
      rotateX: 90,
      delay: 1,
      stagger: 0.02,
    },
    '<'
  ).to(
    splitTitle.chars,
    {
      opacity: 0,
      delay: 2,
      y: 0,
      stagger: 0.02,
    },
    '<1'
  );
});

gsap.to(".animation-down", {
  duration: 1,
  y: 10,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
}, '<');