export type MarkerCoords = [number, number];
export interface IMarker {
  id: string,
  name: string,
  icon?: string,
  coords: MarkerCoords | Array<MarkerCoords>,
  found?: boolean,
}

export interface IDestinationMarker extends IMarker {
  destination: MarkerCoords | Array<MarkerCoords>
}
