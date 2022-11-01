export type { ToolbarPropsType } from './props'

export type ToolbarType = 'large' | 'middle' | 'small' | 'mini'

interface ToolbarClickEmitInterface {
  evt: Event
  key: string | undefined
}

export interface ToolbarClickInterface {
  (target: ToolbarClickEmitInterface): void
}
