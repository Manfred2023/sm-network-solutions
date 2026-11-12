<script setup lang="ts">
// Pylône treillis (élévation) : plan médian du hero. Généré : jambes effilées, contreventements en X,
// plateforme, trois panneaux secteurs, deux faisceaux hertziens, paratonnerre et feu de balisage.
import { vPlan } from '../../composables/plan'
const base = 600, top = 118, bw = 64, tw = 18, cx = 120, n = 9
const half = (y: number) => tw + ((y - top) / (base - top)) * (bw - tw)
const joints = Array.from({ length: n + 1 }, (_, i) => top + ((base - top) * i) / n)
const legL = `M${cx - bw} ${base} L${cx - tw} ${top}`
const legR = `M${cx + bw} ${base} L${cx + tw} ${top}`
const bays = joints.slice(0, -1).map((y0, i) => {
  const y1 = joints[i + 1]
  const a = half(y0), b = half(y1)
  return `M${cx - a} ${y0} L${cx + b} ${y1} M${cx + a} ${y0} L${cx - b} ${y1} M${cx - b} ${y1} L${cx + b} ${y1}`
}).join(' ')
</script>
<template>
  <svg v-plan class="plan plan-draw" viewBox="0 0 240 620" fill="none" aria-hidden="true" focusable="false">
    <path :d="legL" /><path :d="legR" />
    <path :d="bays" />
    <!-- plateforme et garde-corps -->
    <path d="M70 118 H170 M70 118 V104 M170 118 V104 M70 104 H170" />
    <!-- mât et paratonnerre -->
    <path d="M120 104 V14" />
    <rect class="fill tower-light" x="116" y="6" width="8" height="8" rx="1" />
    <!-- trois panneaux secteurs -->
    <rect x="78" y="44" width="12" height="54" rx="2" /><rect x="114" y="38" width="12" height="60" rx="2" /><rect x="150" y="44" width="12" height="54" rx="2" />
    <path d="M84 98 V104 M120 98 V104 M156 98 V104" />
    <!-- faisceaux hertziens -->
    <path d="M164 236 H178" /><ellipse cx="184" cy="236" rx="7" ry="22" /><path d="M184 214 L200 236 L184 258" />
    <path d="M70 330 H58" /><ellipse cx="52" cy="330" rx="6" ry="18" /><path d="M52 312 L38 330 L52 348" />
    <!-- chemin de câbles -->
    <path d="M126 118 V600" class="tower-cable" />
  </svg>
</template>
