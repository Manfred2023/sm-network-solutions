// État partagé du « chemin du signal » (signature de l'accueil) :
// la ligne SignalTrace écrit ici quels nœuds sont raccordés ; RouteMap (l'itinéraire) les lit.
import { reactive } from 'vue'
import type { T } from '../i18n'

export type SignalNode = { id: string; label: T }

export const signal = reactive({
  nodes: [] as SignalNode[],
  on: {} as Record<string, boolean>,
  current: '' as string,
  delivered: false, // le formulaire du dernier nœud a été envoyé
})

export function resetSignal(nodes: SignalNode[]) {
  signal.nodes = nodes
  signal.on = {}
  signal.current = nodes[0]?.id ?? ''
  signal.delivered = false
}
