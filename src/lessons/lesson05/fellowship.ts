interface ICharacter {
  id:number
  name:string
  age:number
  weapons:string[]
  isDark: boolean
  image: string
}

export const fellowship:ICharacter[] = [
  {
    id: 5,
    name: 'Gendalf',
    age: 2000,
    weapons: ['magic sword', 'magic staff'],
    isDark: false,
    image: 'https://cdn-media-ie.pearltrees.com/d2/ab/13/d2ab13dfb949137aea3b21d370ca5e1f-xl.jpg'
  },
  {
    id: 7,
    name: 'Saruman',
    age: 1500,
    weapons: ['palantir'],
    isDark: true,
    image: 'https://static.wikia.nocookie.net/tolkien-films/images/8/84/SarumanTheLOTR.jpg'
  },
  {
    id: 8,
    name: 'Frodo',
    age: 35,
    weapons: ['ring'],
    isDark: false,
    image: 'https://static.wikia.nocookie.net/middlearthfilmseries/images/8/87/Frodo_Baggins3.jpg'
  },
  {
    id: 10,
    name: 'Gimli',
    age: 50,
    weapons: ['axe', 'helmet'],
    isDark: false,
    image: 'https://lord-of-the-rings.org/books/Gimli-dwarf.jpg'
  },
  {
    id: 11,
    name: 'Gorlum',
    age: 80,
    weapons: [],
    isDark: true,
    image: 'https://root-nation.com/wp-content/uploads/2024/05/lord-of-the-rings-the-hunt-for-gollum-1-675x675.jpg'
  },
  {
    id: 20,
    name: 'Arwen',
    age: 500,
    weapons: ['elf magic'],
    isDark: false,
    image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/db20b8ff-541d-4946-8573-057f49b7180f/anim=false,width=450/00025-843486046.jpeg'
  },
]