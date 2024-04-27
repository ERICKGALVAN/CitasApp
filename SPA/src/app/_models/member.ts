import { Photo } from "./photo"

export interface Member {
  id: number
  userName: string
  age: number
	@@ -13,7 +13,7 @@ export interface IMember {
  interests: string
  city: string
  country: string
  photos: Photo[]
  photoUrl: string
}