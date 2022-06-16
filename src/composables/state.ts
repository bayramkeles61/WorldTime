import { Timezone } from '~/types';

export const zoneNames = useStorage<string[]>('world-time-zones', [])
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

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone
if (!zones.value.length) {
  zoneNames.value.push(userTimezone)
}