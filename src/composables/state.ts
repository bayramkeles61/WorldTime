import { Timezone } from '~/types';

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone

export interface State {
  name?: string
  description?: string
  zones: string[]
  home: string
  date: Date
  selections: Selection
}

export interface Selection {
  from: Date
  to: Date
}

export const storage = useStorage("what-time-state", {
  zones: [userTimezone],
  home: userTimezone,
  date: new Date(),
  selections: []
})

export const now = useNow({ interval: 30_000 })
export const zoneNames = toRef(storage.value, "zones")
export const homeZone = toRef(storage.value, "home")
export const homeOffset = ref(timezones.find(i => i.name === homeZone.value).offset || 0)
export const zones = computed(() => zoneNames.value.map(name => timezones.find(i => i.name === name)))

export function addToTimezone(timezone: Timezone) {
  zoneNames.value.push(timezone.name)
}

export function removeZone(timezone: Timezone) {
  zoneNames.value = zoneNames.value.filter(i => i !== timezone.name)
}

export function moveZone(timezone: Timezone, delta: 1 | -1) {
  const index = zoneNames.value.indexOf(timezone.name)
  if (index === -1) return
  const target = index + delta
  const other = zoneNames.value[target] = timezone.name
  zoneNames.value[index] = other
}

if (!zoneNames.value?.length) {
  zoneNames.value = [userTimezone]
}