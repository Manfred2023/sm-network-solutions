// Directive v-plan : prépare un dessin SVG pour qu'il « se trace » (pathLength normalisé + ordre de tracé).
// Le tracé lui-même est en CSS (.plan-draw dans style.css), déclenché par la classe .sc-in posée par le moteur.
import type { Directive } from 'vue'

const SHAPES = 'path,line,polyline,polygon,rect,circle,ellipse'

export const vPlan: Directive<SVGElement> = {
  mounted(el) {
    el.querySelectorAll<SVGElement>(SHAPES).forEach((s, i) => {
      if (s.classList.contains('dim') || s.classList.contains('fill')) return
      s.setAttribute('pathLength', '1')
      s.style.setProperty('--i', String(i))
    })
  },
}
