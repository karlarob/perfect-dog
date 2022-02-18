export interface Breeds {
  bred_for?: string
  breed_group?: BreedGroup
  height: Eight
  id: number
  image: Image
  life_span: string
  name: string
  origin?: string
  reference_image_id: string
  temperament?: string
  weight: Eight
  country_code?: CountryCode
  description?: string
  history?: string
}

export enum BreedGroup {
  Empty = '',
  Herding = 'Herding',
  Hound = 'Hound',
  Mixed = 'Mixed',
  NonSporting = 'Non-Sporting',
  Sporting = 'Sporting',
  Terrier = 'Terrier',
  Toy = 'Toy',
  Working = 'Working',
}

export enum CountryCode {
  Ag = 'AG',
  Au = 'AU',
  Us = 'US',
}

export interface Eight {
  imperial: string
  metric: string
}

export interface Image {
  height: number
  id: string
  url: string
  width: number
}
