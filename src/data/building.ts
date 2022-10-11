import BuildingsData from "../../content/buildings.json"

const buildings = ["alchemist", "apiary"] as const

export type BuildingName = typeof buildings[number]

export interface Building {
  name: string
  plural: string
  workers: string[]
  recipes: string[]
  settings?: BuildingSetting[]
}

export interface BuildingSetting {
  name: string
  description: string
}

export type BuildingList = { [key in BuildingName]: Building }

export const BuildingData = BuildingsData as BuildingList

export function isValidBuilding(key: string): key is BuildingName {
  return buildings.find(f => f === key) !== undefined
}
