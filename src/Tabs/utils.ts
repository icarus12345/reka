import type { StringOrNumber } from '../utilities/types'

export function makeTriggerId(baseId: string, value: StringOrNumber) {
  return `${baseId}-trigger-${value}`
}

export function makeContentId(baseId: string, value: StringOrNumber) {
  return `${baseId}-content-${value}`
}
